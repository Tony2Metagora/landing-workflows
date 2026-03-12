# 🚀 Déploiement sur Hostinger - metagora-tech.fr/pharmacie

## 📁 Fichiers à uploader

Tous les fichiers de ce dossier `deploy-hostinger` doivent être uploadés sur Hostinger.

---

## 🔧 Méthode 1 : Via File Manager (Recommandé)

### Étape 1 : Se connecter à Hostinger
1. Aller sur https://hostinger.fr
2. Se connecter avec tes identifiants
3. Aller dans **Hébergement** → Sélectionner ton plan **metagora-tech.fr**

### Étape 2 : Accéder au File Manager
1. Dans le panneau d'hébergement, cliquer sur **File Manager**
2. Naviguer vers le dossier `public_html`

### Étape 3 : Créer le dossier pharmacie
1. Dans `public_html`, cliquer sur **+ New Folder**
2. Nommer le dossier : `pharmacie`
3. Entrer dans le dossier `pharmacie`

### Étape 4 : Uploader les fichiers
1. Cliquer sur **Upload Files**
2. Sélectionner **TOUS** les fichiers de ce dossier `deploy-hostinger` :
   - `index.html`
   - `test.html`
   - Dossier `assets/` (avec toutes les images)
3. Attendre la fin de l'upload

### Étape 5 : Vérifier les permissions
1. Sélectionner tous les fichiers uploadés
2. Clic droit → **Change Permissions**
3. Mettre : `644` pour les fichiers, `755` pour les dossiers

### Étape 6 : Tester
Aller sur : **https://metagora-tech.fr/pharmacie/**

---

## 🔧 Méthode 2 : Via FTP (Alternative)

### Étape 1 : Récupérer les identifiants FTP
1. Dans Hostinger, aller dans **Hébergement** → **FTP Accounts**
2. Noter :
   - **Host** : ftp.metagora-tech.fr (ou IP fournie)
   - **Username** : ton username FTP
   - **Password** : ton mot de passe FTP
   - **Port** : 21

### Étape 2 : Installer un client FTP
Télécharger **FileZilla** : https://filezilla-project.org/

### Étape 3 : Se connecter
1. Ouvrir FileZilla
2. Entrer les identifiants FTP
3. Cliquer sur **Connexion rapide**

### Étape 4 : Uploader
1. Côté gauche (local) : naviguer vers `deploy-hostinger`
2. Côté droit (serveur) : naviguer vers `public_html`
3. Créer le dossier `pharmacie` sur le serveur
4. Glisser-déposer tous les fichiers de `deploy-hostinger` vers `public_html/pharmacie/`

### Étape 5 : Tester
Aller sur : **https://metagora-tech.fr/pharmacie/**

---

## ✅ Vérifications après déploiement

### 1. Page principale
- [ ] https://metagora-tech.fr/pharmacie/ s'affiche correctement
- [ ] Les images se chargent (hero.jpg, solution-1/2/3.jpg)
- [ ] Le menu burger fonctionne sur mobile
- [ ] Les ancres de navigation fonctionnent (#solution, #contact)

### 2. Page test
- [ ] https://metagora-tech.fr/pharmacie/test.html s'affiche
- [ ] Le bouton "Commencer la simulation" redirige vers Metaverse
- [ ] Le champ email est optionnel

### 3. Responsive
- [ ] Tester sur mobile (menu burger, images, boutons)
- [ ] Tester sur desktop (layout, navigation)

---

## 🔒 Configuration HTTPS (Important)

### Activer le SSL
1. Dans Hostinger, aller dans **SSL**
2. Activer le certificat SSL gratuit pour **metagora-tech.fr**
3. Attendre 10-15 minutes pour la propagation
4. Vérifier que https://metagora-tech.fr/pharmacie/ fonctionne

### Forcer HTTPS (Optionnel)
Créer un fichier `.htaccess` dans `public_html/pharmacie/` avec :

```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

---

## 🎨 Personnalisation du domaine

### Option : Sous-domaine pharmacie.metagora-tech.fr

Si tu préfères **pharmacie.metagora-tech.fr** au lieu de **metagora-tech.fr/pharmacie** :

1. Dans Hostinger, aller dans **Domaines** → **Sous-domaines**
2. Créer le sous-domaine : `pharmacie`
3. Pointer vers le dossier : `public_html/pharmacie`
4. Attendre la propagation DNS (2-24h)
5. Activer le SSL pour le sous-domaine

---

## 📊 Structure des fichiers sur le serveur

```
public_html/
└── pharmacie/
    ├── index.html              # Page principale
    ├── test.html               # Page test simulation
    └── assets/
        └── images/
            ├── hero.jpg        # Image hero
            ├── solution-1.jpg  # Image solution 1
            ├── solution-2.jpg  # Image solution 2
            └── solution-3.jpg  # Image solution 3
```

---

## 🐛 Dépannage

### Problème : Page 404
- Vérifier que les fichiers sont bien dans `public_html/pharmacie/`
- Vérifier les permissions (644 pour fichiers, 755 pour dossiers)

### Problème : Images ne s'affichent pas
- Vérifier que le dossier `assets/images/` existe
- Vérifier les noms de fichiers (sensible à la casse)
- Vérifier les permissions des images

### Problème : HTTPS ne fonctionne pas
- Attendre 15 minutes après activation SSL
- Vider le cache du navigateur
- Vérifier que le certificat SSL est actif dans Hostinger

### Problème : Redirection vers Metaverse ne fonctionne pas
- Vérifier que `test.html` est bien uploadé
- Tester le lien directement : https://metaverse.ww.fo/avatarworld/?scenario=scenario-1768561439435&lang=fr

---

## 📞 Support

**Hostinger Support :**
- Chat en ligne : disponible 24/7 dans le panneau
- Email : support@hostinger.com
- Base de connaissances : https://support.hostinger.com

**Documentation utile :**
- Upload de fichiers : https://support.hostinger.com/en/articles/1583245-how-to-upload-files-to-your-website
- Configuration SSL : https://support.hostinger.com/en/articles/1583332-how-to-install-ssl-certificate

---

## ✨ Prochaines étapes

Une fois le site en ligne sur **metagora-tech.fr/pharmacie** :

1. **Tester tous les liens** et fonctionnalités
2. **Configurer Google Analytics** (optionnel)
3. **Ajouter un favicon** (optionnel)
4. **Optimiser les images** pour le chargement (TinyPNG)
5. **Configurer les emails** de contact si besoin

---

**Date de création :** 23 janvier 2026
**Version :** 1.0
**Site source :** https://tony2metagora.github.io/landing-pharmacie/
