# Structure de Landing Pages - Guide Scalable

## 📁 Structure des dossiers

```
landing-pharmacie/
├── index.html              # Fichier HTML principal
├── assets/
│   └── images/
│       ├── hero.jpg        # Image principale du hero (ratio 4:3)
│       ├── solution-1.jpg  # Carte solution 1 (ratio 16:9)
│       ├── solution-2.jpg  # Carte solution 2 (ratio 16:9)
│       └── solution-3.jpg  # Carte solution 3 (ratio 16:9)
├── code.html              # Archive - version desktop originale
├── code mobile.html       # Archive - version mobile originale
└── STRUCTURE.md           # Ce fichier

```

## 🖼️ Images requises

### 1. **hero.jpg** - Image Hero (ligne ~120)
- **Ratio:** 4:3
- **Taille recommandée:** 1200x900px minimum
- **Format:** JPG ou PNG
- **Usage:** Image principale de la section hero, visible dès l'arrivée sur la page

### 2. **solution-1.jpg** - Scénarios illimités (ligne ~177)
- **Ratio:** 16:9
- **Taille recommandée:** 800x450px minimum
- **Format:** JPG ou PNG
- **Usage:** Illustration pour "Scénarios illimités & multi-produits"

### 3. **solution-2.jpg** - Déploiement international (ligne ~184)
- **Ratio:** 16:9
- **Taille recommandée:** 800x450px minimum
- **Format:** JPG ou PNG
- **Usage:** Illustration pour "Déploiement international instantané"

### 4. **solution-3.jpg** - Impact business (ligne ~191)
- **Ratio:** 16:9
- **Taille recommandée:** 800x450px minimum
- **Format:** JPG ou PNG
- **Usage:** Illustration pour "Impact business rapide"

## 🚀 Workflow pour créer une nouvelle landing page

### Étape 1 : Dupliquer le projet
```bash
# Copier le dossier complet
cp -r landing-pharmacie landing-[nom-projet]
cd landing-[nom-projet]
```

### Étape 2 : Remplacer les images
```bash
# Placer vos 4 nouvelles images dans assets/images/
# Respecter les noms : hero.jpg, solution-1.jpg, solution-2.jpg, solution-3.jpg
```

### Étape 3 : Modifier les textes dans index.html
- **H1** (ligne ~103) : Titre principal
- **H2** (ligne ~106) : Sous-titre hero
- **Section Fonctionnalités** (lignes ~132-161) : 3 cartes
- **Section Solutions** (lignes ~172-195) : 3 cartes avec images
- **CTA** (ligne ~219) : Appel à l'action final

### Étape 4 : Déployer sur GitHub Pages
```bash
# Initialiser Git
git init
git config user.name "Tony2Metagora"
git config user.email "tony@metagora.com"

# Commit initial
git add .
git commit -m "Initial commit: Landing [nom-projet]"

# Créer le repo et déployer
gh repo create landing-[nom-projet] --public --source=. --remote=origin --push

# Activer GitHub Pages
gh api -X POST /repos/Tony2Metagora/landing-[nom-projet]/pages -f source[branch]=master -f source[path]=/
```

### Étape 5 : Accéder au site
URL : `https://tony2metagora.github.io/landing-[nom-projet]/`

## 📝 Checklist avant déploiement

- [ ] 4 images placées dans `assets/images/`
- [ ] Noms d'images corrects (hero.jpg, solution-1.jpg, solution-2.jpg, solution-3.jpg)
- [ ] Textes personnalisés dans index.html
- [ ] Titre de la page modifié (balise `<title>`)
- [ ] Test local effectué (serveur local)
- [ ] Git commit et push effectués
- [ ] GitHub Pages activé
- [ ] Site accessible en ligne

## 🔄 Mise à jour d'une landing existante

```bash
cd landing-[nom-projet]

# Modifier les fichiers (images ou textes)
# Puis :

git add .
git commit -m "Update: [description]"
git push
```

Le site se met à jour automatiquement en 1-2 minutes.

## 💡 Tips

- **Optimiser les images** : Compresser avant upload (TinyPNG, ImageOptim)
- **Nommer clairement** : Utiliser des noms de repo explicites
- **Tester en local** : Toujours vérifier avant de push
- **Responsive** : Les images s'adaptent automatiquement mobile/desktop
