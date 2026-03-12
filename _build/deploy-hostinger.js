const fs = require('fs');
const path = require('path');
const ftp = require('ftp');
const chalk = require('chalk');

// Configuration FTP (à remplir avec vos identifiants)
const FTP_CONFIG = {
    host: 'ftp.metagora-tech.fr',  // À modifier
    port: 21,
    user: 'votre-username-ftp',     // À modifier
    password: 'votre-password-ftp'  // À modifier
};

async function deployToHostinger(projectId) {
    console.log(chalk.blue(`\n🚀 Déploiement de "${projectId}" sur Hostinger...\n`));

    try {
        // 1. Vérifier que le projet existe
        const projectDir = path.join(__dirname, '..', projectId);
        if (!fs.existsSync(projectDir)) {
            console.error(chalk.red(`❌ Erreur: Le projet "${projectId}" n'existe pas.`));
            console.log(chalk.yellow(`💡 Générez-le d'abord: npm run build ${projectId}`));
            process.exit(1);
        }

        // 2. Charger la configuration
        const configPath = path.join(__dirname, '..', '_config', `${projectId}.json`);
        const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
        console.log(chalk.green(`✓ Configuration chargée: ${config.branding.name}`));

        // 3. Connexion FTP
        const client = new ftp();
        
        await new Promise((resolve, reject) => {
            client.on('ready', () => {
                console.log(chalk.green(`✓ Connecté au serveur FTP`));
                resolve();
            });

            client.on('error', (err) => {
                console.error(chalk.red(`❌ Erreur FTP: ${err.message}`));
                reject(err);
            });

            console.log(chalk.yellow(`⏳ Connexion au serveur FTP...`));
            client.connect(FTP_CONFIG);
        });

        // 4. Créer le dossier distant si nécessaire
        const remotePath = `/public_html/${projectId}`;
        await createRemoteDir(client, remotePath);

        // 5. Upload des fichiers
        await uploadDirectory(client, projectDir, remotePath);

        // 6. Fermer la connexion
        client.end();

        console.log(chalk.blue(`\n✨ Déploiement terminé avec succès!\n`));
        console.log(chalk.green(`🌐 Votre site est accessible sur:`));
        console.log(chalk.white(`   https://${config.domain}\n`));

    } catch (error) {
        console.error(chalk.red(`\n❌ Erreur lors du déploiement: ${error.message}\n`));
        process.exit(1);
    }
}

// Créer un dossier distant
function createRemoteDir(client, dirPath) {
    return new Promise((resolve, reject) => {
        client.mkdir(dirPath, true, (err) => {
            if (err && err.code !== 550) { // 550 = dossier existe déjà
                reject(err);
            } else {
                console.log(chalk.green(`✓ Dossier distant créé/vérifié: ${dirPath}`));
                resolve();
            }
        });
    });
}

// Upload récursif d'un dossier
async function uploadDirectory(client, localDir, remoteDir) {
    const files = fs.readdirSync(localDir);
    
    for (const file of files) {
        const localPath = path.join(localDir, file);
        const remotePath = `${remoteDir}/${file}`;
        const stat = fs.statSync(localPath);

        if (stat.isDirectory()) {
            // Créer le dossier distant et uploader récursivement
            await createRemoteDir(client, remotePath);
            await uploadDirectory(client, localPath, remotePath);
        } else {
            // Upload du fichier
            await uploadFile(client, localPath, remotePath);
        }
    }
}

// Upload d'un fichier
function uploadFile(client, localPath, remotePath) {
    return new Promise((resolve, reject) => {
        client.put(localPath, remotePath, (err) => {
            if (err) {
                console.error(chalk.red(`✗ Erreur upload: ${path.basename(localPath)}`));
                reject(err);
            } else {
                console.log(chalk.gray(`  ↑ ${path.basename(localPath)}`));
                resolve();
            }
        });
    });
}

// Déployer tous les projets
async function deployAll() {
    const configDir = path.join(__dirname, '..', '_config');
    const files = fs.readdirSync(configDir).filter(f => f.endsWith('.json') && f !== 'template.json');
    
    console.log(chalk.blue(`\n🚀 Déploiement de ${files.length} projet(s)...\n`));
    
    for (const file of files) {
        const projectId = file.replace('.json', '');
        await deployToHostinger(projectId);
    }
    
    console.log(chalk.green(`\n✨ Tous les projets ont été déployés!\n`));
}

// CLI
const args = process.argv.slice(2);

// Vérifier la configuration FTP
if (FTP_CONFIG.user === 'votre-username-ftp') {
    console.log(chalk.red('\n❌ Configuration FTP manquante!\n'));
    console.log(chalk.yellow('📝 Éditez le fichier _build/deploy-hostinger.js et remplissez:'));
    console.log(chalk.white('   - host: ftp.metagora-tech.fr'));
    console.log(chalk.white('   - user: votre username FTP'));
    console.log(chalk.white('   - password: votre mot de passe FTP\n'));
    console.log(chalk.yellow('💡 Pour trouver vos identifiants FTP:'));
    console.log(chalk.white('   1. Connectez-vous à Hostinger'));
    console.log(chalk.white('   2. Allez dans "Sites web" > "Gestionnaire de fichiers"'));
    console.log(chalk.white('   3. Cherchez "Comptes FTP" ou "FTP Accounts"\n'));
    process.exit(1);
}

if (args.includes('--all')) {
    deployAll();
} else if (args.length > 0) {
    deployToHostinger(args[0]);
} else {
    console.log(chalk.yellow('\n📖 Usage:'));
    console.log(chalk.white('  npm run deploy <project-id>     Déployer une landing'));
    console.log(chalk.white('  npm run deploy-all              Déployer toutes les landings\n'));
    console.log(chalk.yellow('📝 Exemples:'));
    console.log(chalk.white('  npm run deploy pharmacie'));
    console.log(chalk.white('  npm run deploy retail-luxe'));
    console.log(chalk.white('  npm run deploy-all\n'));
}
