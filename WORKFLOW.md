# 🚀 Workflow Multi-Landing Pages - Guide Complet

## 📁 Structure du projet

```
landing/
├── WORKFLOW.md                    ← Ce fichier (guide général)
├── landing-pharmacie/             ← Projet 1
│   ├── .git/                      ← Git indépendant
│   ├── assets/images/
│   │   ├── hero.jpg
│   │   ├── solution-1.jpg
│   │   ├── solution-2.jpg
│   │   └── solution-3.jpg
│   ├── index.html
│   └── STRUCTURE.md
├── landing-optique/               ← Projet 2 (futur)
│   ├── .git/
│   ├── assets/images/
│   └── index.html
└── landing-{nom}/                 ← Projet N (futur)
    ├── .git/
    ├── assets/images/
    └── index.html
```

## 🎯 Principe

- **1 dossier = 1 landing page = 1 repository GitHub = 1 site web**
- Chaque projet est **totalement indépendant**
- Chaque projet a son propre `.git/` et son propre repo GitHub
- URL finale : `https://tony2metagora.github.io/landing-{nom}/`

---

## 🆕 Créer une nouvelle landing page

### Étape 1 : Dupliquer le template

```bash
# Depuis le dossier landing/
cd "c:\Users\tony\Desktop\Projet Code\landing"

# Copier landing-pharmacie comme base
xcopy /E /I landing-pharmacie landing-{nom}

# Exemple :
xcopy /E /I landing-pharmacie landing-optique
```

### Étape 2 : Nettoyer le nouveau dossier

```bash
cd landing-{nom}

# Supprimer l'ancien .git (important !)
Remove-Item -Recurse -Force .git

# Supprimer les anciennes images
Remove-Item assets\images\*.jpg
```

### Étape 3 : Ajouter vos images

Placez vos **4 nouvelles images** dans `landing-{nom}\assets\images\` :
- `hero.jpg` - Image principale (ratio 4:3, 1200x900px min)
- `solution-1.jpg` - Carte solution 1 (ratio 16:9, 800x450px min)
- `solution-2.jpg` - Carte solution 2 (ratio 16:9, 800x450px min)
- `solution-3.jpg` - Carte solution 3 (ratio 16:9, 800x450px min)

### Étape 4 : Personnaliser les textes

Ouvrir `landing-{nom}\index.html` et modifier :

**Ligne ~6 :** Titre de la page
```html
<title>Votre nouveau titre - L'assistant de vente du futur</title>
```

**Ligne ~51 :** Nom de la marque (header)
```html
<span class="text-lg sm:text-xl font-bold tracking-tight">VotreMarque</span>
```

**Ligne ~103 :** H1 principal
```html
<h1>Votre nouveau titre principal</h1>
```

**Ligne ~106 :** Sous-titre hero
```html
<p>Votre sous-titre accrocheur...</p>
```

**Lignes ~132-161 :** Section Fonctionnalités (3 cartes)
- Titre section
- 3 titres de fonctionnalités
- 3 descriptions

**Lignes ~172-195 :** Section Solutions (3 cartes avec images)
- Titre section
- 3 titres de solutions
- 3 descriptions

**Ligne ~219 :** CTA final
```html
<h2>Votre appel à l'action final ?</h2>
```

### Étape 5 : Tester en local

```bash
cd landing-{nom}

# Lancer un serveur local PowerShell
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:8080/")
$listener.Start()
# Puis ouvrir http://localhost:8080/index.html dans le navigateur
```

### Étape 6 : Déployer sur GitHub

```bash
cd landing-{nom}

# Initialiser Git
git init
git config user.name "Tony2Metagora"
git config user.email "tony@metagora.com"

# Premier commit
git add .
git commit -m "Initial commit: Landing {nom}"

# Créer le repo GitHub et pousser
gh repo create landing-{nom} --public --source=. --remote=origin --push

# Activer GitHub Pages
gh api -X POST /repos/Tony2Metagora/landing-{nom}/pages -f source[branch]=master -f source[path]=/
```

### Étape 7 : Vérifier le déploiement

- **Repository :** `https://github.com/Tony2Metagora/landing-{nom}`
- **Site en ligne :** `https://tony2metagora.github.io/landing-{nom}/`
- Délai : 1-2 minutes pour la première activation

---

## 🔄 Mettre à jour une landing existante

### Modifier les images

```bash
cd landing-{nom}

# Remplacer les images dans assets/images/
# Puis :
git add assets/images/
git commit -m "Update images"
git push
```

### Modifier les textes

```bash
cd landing-{nom}

# Éditer index.html
# Puis :
git add index.html
git commit -m "Update content"
git push
```

Le site se met à jour automatiquement en 1-2 minutes.

---

## 📋 Checklist avant déploiement

- [ ] Dossier dupliqué depuis `landing-pharmacie`
- [ ] Ancien `.git/` supprimé
- [ ] 4 images placées dans `assets/images/`
- [ ] Noms d'images corrects (hero.jpg, solution-1.jpg, solution-2.jpg, solution-3.jpg)
- [ ] Titre `<title>` modifié
- [ ] Nom de marque modifié (header + footer)
- [ ] H1 et sous-titre hero personnalisés
- [ ] 3 fonctionnalités personnalisées
- [ ] 3 solutions personnalisées
- [ ] CTA final personnalisé
- [ ] Test local effectué
- [ ] Git initialisé dans le nouveau dossier
- [ ] Repo GitHub créé avec `gh repo create`
- [ ] GitHub Pages activé
- [ ] Site accessible en ligne

---

## 🎨 Spécifications des images

### hero.jpg
- **Emplacement :** Section hero (première section visible)
- **Ratio :** 4:3
- **Taille min :** 1200x900px
- **Poids max :** 500 KB (optimiser avec TinyPNG)
- **Format :** JPG ou PNG

### solution-1.jpg, solution-2.jpg, solution-3.jpg
- **Emplacement :** Section Solutions (3 cartes)
- **Ratio :** 16:9
- **Taille min :** 800x450px
- **Poids max :** 300 KB chacune
- **Format :** JPG ou PNG

---

## 💡 Commandes rapides

### Créer une nouvelle landing (tout-en-un)

```bash
# Variables
$nom = "optique"  # Changer selon le projet

# Dupliquer
xcopy /E /I landing-pharmacie landing-$nom

# Nettoyer
cd landing-$nom
Remove-Item -Recurse -Force .git
Remove-Item assets\images\*.jpg

# Ajouter vos images ici manuellement
# Puis modifier index.html

# Déployer
git init
git config user.name "Tony2Metagora"
git config user.email "tony@metagora.com"
git add .
git commit -m "Initial commit: Landing $nom"
gh repo create landing-$nom --public --source=. --remote=origin --push
gh api -X POST /repos/Tony2Metagora/landing-$nom/pages -f source[branch]=master -f source[path]=/
```

### Mettre à jour rapidement

```bash
cd landing-{nom}
git add .
git commit -m "Update: description des changements"
git push
```

---

## 🔧 Dépannage

### Problème : "Name already exists on this account"
Le repo existe déjà sur GitHub. Utilisez :
```bash
git remote add origin https://github.com/Tony2Metagora/landing-{nom}.git
git push -u origin master --force
```

### Problème : Images ne s'affichent pas
Vérifiez que les noms sont **exactement** :
- `hero.jpg` (pas Hero.jpg, pas hero.JPG)
- `solution-1.jpg` (pas solution1.jpg)
- `solution-2.jpg`
- `solution-3.jpg`

### Problème : Site pas accessible après déploiement
- Attendre 2-3 minutes
- Vérifier que GitHub Pages est activé : `https://github.com/Tony2Metagora/landing-{nom}/settings/pages`
- Vérifier l'URL : `https://tony2metagora.github.io/landing-{nom}/` (avec le slash final)

---

## 📊 Suivi des projets

| Projet | Repository | Site | Status |
|--------|-----------|------|--------|
| landing-pharmacie | [GitHub](https://github.com/Tony2Metagora/landing-pharmacie) | [Site](https://tony2metagora.github.io/landing-pharmacie/) | ✅ Live |
| landing-optique | - | - | 🔜 À créer |
| landing-veterinaire | - | - | 🔜 À créer |

---

## 🎯 Objectif : 10 landing pages

Avec ce workflow, créer 10 landing pages prend environ **15 minutes par landing** :
- 2 min : Dupliquer et nettoyer
- 5 min : Ajouter les images
- 5 min : Personnaliser les textes
- 2 min : Tester en local
- 1 min : Déployer sur GitHub

**Total estimé pour 10 landing pages : ~2h30**

---

## 📞 Support

En cas de problème, vérifier dans l'ordre :
1. Les noms de fichiers images (sensible à la casse)
2. La structure des dossiers (assets/images/)
3. Le Git est bien dans le bon dossier (landing-{nom}/.git)
4. GitHub Pages est activé
5. Attendre 2-3 minutes après le premier push

---

**Dernière mise à jour :** 19 janvier 2026
**Version :** 1.0
**Auteur :** Tony2Metagora
