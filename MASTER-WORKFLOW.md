# 🚀 Master Workflow - Générateur de Landing Pages Metagora

## 📖 Vue d'ensemble

Ce système permet de créer et déployer des landing pages en **5 minutes** au lieu de 2 heures, avec une gestion centralisée des modifications.

---

## 🏗️ Architecture

```
landing/
├── _shared/                    # Composants réutilisables
│   └── templates/
│       ├── base.html           # Template principal
│       ├── header.html         # Header commun
│       ├── footer.html         # Footer commun
│       └── sections/           # Sections modulaires
│           ├── hero.html
│           ├── features.html
│           ├── video.html
│           ├── solutions.html
│           ├── pricing.html
│           ├── partners.html
│           └── contact.html
│
├── _config/                    # Configurations JSON par projet
│   ├── pharmacie.json
│   ├── retail-luxe.json
│   └── template.json           # Template de config
│
├── _build/                     # Scripts de génération
│   ├── package.json
│   ├── generate-landing.js     # Générateur
│   └── deploy-hostinger.js     # Déploiement FTP
│
├── pharmacie/                  # Landing générée
│   ├── index.html
│   ├── test.html
│   └── assets/images/
│
└── retail-luxe/                # Landing générée
    ├── index.html
    ├── test.html
    └── assets/images/
```

---

## 🎯 Workflow rapide

### 1️⃣ Créer une nouvelle landing (5 min)

```bash
# 1. Copier le template de config
cd "c:\Users\tony\Desktop\Projet Code\landing"
copy _config\template.json _config\retail-luxe.json

# 2. Éditer retail-luxe.json avec vos valeurs
# (nom, couleur, textes, prix, etc.)

# 3. Générer la landing
cd _build
npm run build retail-luxe

# 4. Ajouter les 4 images dans retail-luxe/assets/images/
#    - hero.jpg
#    - solution-1.jpg
#    - solution-2.jpg
#    - solution-3.jpg

# 5. Déployer sur Hostinger
npm run deploy retail-luxe
```

**Résultat :** Site en ligne sur `metagora-tech.fr/retail-luxe` en 5 minutes ! 🎉

---

### 2️⃣ Modifier une landing existante

#### Modification individuelle (texte, prix, couleur)

```bash
# 1. Éditer le fichier de config
edit _config\pharmacie.json

# 2. Regénérer
npm run build pharmacie

# 3. Redéployer
npm run deploy pharmacie
```

**Temps :** 2 minutes ⚡

#### Modification globale (header, footer, design)

```bash
# 1. Éditer le template partagé
edit _shared\templates\header.html

# 2. Regénérer TOUTES les landings
npm run build-all

# 3. Redéployer toutes
npm run deploy-all
```

**Temps :** 5 minutes pour mettre à jour 10 sites ! 🚀

---

## 📝 Configuration JSON

### Structure complète

```json
{
  "id": "nom-projet",
  "domain": "metagora-tech.fr/nom-projet",
  "branding": {
    "name": "Nom de marque",
    "tagline": "Votre tagline",
    "primaryColor": "#137fec"
  },
  "hero": {
    "title": "Titre principal",
    "subtitle": "Sous-titre",
    "ctaText": "Texte bouton",
    "ctaLink": "test.html",
    "image": "assets/images/hero.jpg"
  },
  "features": {
    "title": "Titre section",
    "subtitle": "Sous-titre",
    "items": [
      {
        "icon": "schedule",
        "title": "Fonctionnalité 1",
        "description": "Description"
      }
    ]
  },
  "video": {
    "title": "Titre vidéo",
    "subtitle": "Sous-titre",
    "url": "https://youtube.com/embed/VIDEO_ID"
  },
  "solutions": {
    "title": "Titre solutions",
    "subtitle": "Sous-titre",
    "items": [
      {
        "image": "assets/images/solution-1.jpg",
        "title": "Solution 1",
        "description": "Description"
      }
    ]
  },
  "pricing": {
    "icon": "local_pharmacy",
    "badge": "Nom offre",
    "price": "200€",
    "period": "mois",
    "condition": "condition",
    "features": ["Avantage 1", "Avantage 2"]
  },
  "partners": true,
  "contact": {
    "title": "Titre contact",
    "subtitle": "Sous-titre"
  },
  "simulation": {
    "url": "https://metaverse.ww.fo/...",
    "context": "contexte simulation",
    "gameDescription": "Description du jeu"
  }
}
```

---

## 🖼️ Gestion des images

### Images requises par landing

Chaque landing nécessite **4 images** dans `{projet}/assets/images/` :

| Fichier | Ratio | Taille recommandée | Usage |
|---------|-------|-------------------|-------|
| `hero.jpg` | 16:9 | 1920x1080px | Image principale hero |
| `solution-1.jpg` | 16:9 | 1280x720px | Carte solution 1 |
| `solution-2.jpg` | 16:9 | 1280x720px | Carte solution 2 |
| `solution-3.jpg` | 16:9 | 1280x720px | Carte solution 3 |

### Optimisation

```bash
# Compresser les images avant upload (optionnel)
# Utiliser TinyPNG : https://tinypng.com/
```

---

## 🚀 Déploiement Hostinger

### Configuration FTP (première fois)

1. Éditer `_build/deploy-hostinger.js`
2. Remplir les identifiants FTP :

```javascript
const FTP_CONFIG = {
    host: 'ftp.metagora-tech.fr',
    port: 21,
    user: 'votre-username-ftp',
    password: 'votre-password-ftp'
};
```

### Commandes de déploiement

```bash
# Déployer un projet
npm run deploy pharmacie

# Déployer tous les projets
npm run deploy-all
```

Le script upload automatiquement :
- `index.html`
- `test.html`
- `assets/images/*`

Vers : `/public_html/{projet}/`

---

## 🔧 Installation (première fois)

```bash
# 1. Installer Node.js (si pas déjà fait)
# Télécharger : https://nodejs.org/

# 2. Installer les dépendances
cd "c:\Users\tony\Desktop\Projet Code\landing\_build"
npm install

# 3. Configurer FTP
# Éditer deploy-hostinger.js avec vos identifiants

# 4. Tester
npm run build pharmacie
```

---

## 📊 Comparaison Avant/Après

| Action | Avant | Après | Gain |
|--------|-------|-------|------|
| Créer nouvelle landing | 2h | 5 min | **96% plus rapide** |
| Modifier texte | 15 min | 2 min | **87% plus rapide** |
| Changer couleur primaire | 15 min | 10 sec | **99% plus rapide** |
| Modifier header global | 30 min × 10 sites | 5 min total | **98% plus rapide** |
| Déployer sur Hostinger | 10 min | 30 sec | **95% plus rapide** |

---

## 🎨 Personnalisation avancée

### Ajouter une nouvelle section

1. Créer `_shared/templates/sections/ma-section.html`
2. Ajouter `{{> ma-section}}` dans `base.html`
3. Ajouter les données dans les configs JSON
4. Regénérer : `npm run build-all`

### Modifier le design global

Éditer `_shared/templates/base.html` :
- Couleurs Tailwind
- Polices
- Styles CSS

Puis regénérer toutes les landings.

---

## 🐛 Dépannage

### Erreur : "Configuration introuvable"

```bash
# Vérifier que le fichier JSON existe
dir _config\retail-luxe.json
```

### Erreur : "Module not found"

```bash
# Réinstaller les dépendances
cd _build
npm install
```

### Erreur FTP : "Connection refused"

- Vérifier les identifiants FTP dans `deploy-hostinger.js`
- Vérifier que le port 21 n'est pas bloqué par un firewall

### Images ne s'affichent pas

- Vérifier que les fichiers existent dans `assets/images/`
- Vérifier les noms de fichiers (sensible à la casse)
- Vérifier que les images ont été uploadées sur Hostinger

---

## 📚 Ressources

### Icônes Material Symbols

Liste complète : https://fonts.google.com/icons

Exemples courants :
- `schedule` - Horloge
- `trending_up` - Graphique montant
- `hub` - Réseau
- `diamond` - Diamant
- `workspace_premium` - Badge premium
- `psychology` - Cerveau
- `local_pharmacy` - Pharmacie
- `storefront` - Boutique

### Couleurs

Générateur de palettes : https://coolors.co/
Picker de couleurs : https://htmlcolorcodes.com/

### Tailwind CSS

Documentation : https://tailwindcss.com/docs

---

## ✅ Checklist nouvelle landing

- [ ] Copier `template.json` vers `_config/{projet}.json`
- [ ] Éditer toutes les valeurs du JSON
- [ ] Choisir une couleur primaire
- [ ] Générer : `npm run build {projet}`
- [ ] Ajouter 4 images dans `{projet}/assets/images/`
- [ ] Tester localement : ouvrir `{projet}/index.html`
- [ ] Vérifier responsive (F12 > mode mobile)
- [ ] Déployer : `npm run deploy {projet}`
- [ ] Tester en ligne : `https://metagora-tech.fr/{projet}/`
- [ ] Vérifier tous les liens et boutons
- [ ] Tester la page test.html
- [ ] Vérifier la redirection vers la simulation

---

## 🎯 Prochaines évolutions possibles

- [ ] Générateur de favicon automatique
- [ ] Compression d'images automatique
- [ ] Preview local avec hot reload
- [ ] Export vers d'autres plateformes (Netlify, Vercel)
- [ ] A/B testing intégré
- [ ] Analytics automatique
- [ ] Formulaire de contact fonctionnel
- [ ] Multi-langue automatique

---

**Créé le :** 26 janvier 2026  
**Version :** 1.0  
**Auteur :** Metagora Tech
