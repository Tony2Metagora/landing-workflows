# 📦 Installation Node.js - Guide rapide

## ⚠️ Prérequis

Node.js est nécessaire pour utiliser le générateur de landing pages automatisé.

---

## 🚀 Installation (5 minutes)

### Étape 1 : Télécharger Node.js

1. Aller sur : **https://nodejs.org/**
2. Télécharger la version **LTS** (Long Term Support) - recommandée
3. Choisir **Windows Installer (.msi)** - 64-bit

### Étape 2 : Installer

1. Lancer le fichier téléchargé
2. Cliquer sur **Next** > **Next** > **Next**
3. **Important :** Cocher "Automatically install the necessary tools"
4. Cliquer sur **Install**
5. Attendre la fin de l'installation (2-3 minutes)

### Étape 3 : Vérifier l'installation

Ouvrir PowerShell et taper :

```bash
node --version
npm --version
```

Tu devrais voir :
```
v20.x.x
10.x.x
```

✅ Si tu vois des numéros de version, c'est bon !

---

## 🔧 Installer les dépendances du projet

```bash
cd "c:\Users\tony\Desktop\Projet Code\landing\_build"
npm install
```

Attendre 1-2 minutes. Tu devrais voir :
```
added 150 packages
```

---

## ✅ Test rapide

```bash
npm run build pharmacie
```

Si tout fonctionne, tu verras :
```
🚀 Génération de la landing "pharmacie"...
✓ Configuration chargée
✓ Templates chargés
✓ HTML généré
✨ Landing générée avec succès!
```

---

## 🐛 Problèmes courants

### "npm n'est pas reconnu"

**Solution :** Redémarrer PowerShell après l'installation de Node.js

### "Permission denied"

**Solution :** Lancer PowerShell en tant qu'administrateur
- Clic droit sur PowerShell > "Exécuter en tant qu'administrateur"

### Installation bloquée

**Solution :** Désactiver temporairement l'antivirus pendant l'installation

---

## 📞 Besoin d'aide ?

Si l'installation ne fonctionne pas, tu peux :
1. Utiliser la génération manuelle (voir ci-dessous)
2. Me demander de l'aide

---

## 🔄 Alternative : Génération manuelle (sans Node.js)

En attendant d'installer Node.js, je peux générer les landings manuellement pour toi.

**Avantages :**
- Fonctionne immédiatement
- Pas besoin d'installer quoi que ce soit

**Inconvénients :**
- Moins rapide (10 min au lieu de 30 sec)
- Pas de déploiement FTP automatisé

---

**Une fois Node.js installé, reviens me voir et on pourra utiliser le système automatisé !** 🚀
