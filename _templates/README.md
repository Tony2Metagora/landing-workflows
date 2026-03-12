# Générateur de Landing Pages Metagora

## Structure

```
_templates/
├── landing-template.html   # Template HTML avec variables {{VAR}}
├── variables.json          # Configuration des variables par langue/type
└── README.md               # Cette documentation
```

## Variables du template

Le template utilise des placeholders `{{VARIABLE}}` qui sont remplacés lors de la génération.

### Variables principales

| Variable | Description | Exemple |
|----------|-------------|---------|
| `{{LANG_CODE}}` | Code langue ISO | `fr`, `en` |
| `{{BRAND_NAME}}` | Nom de la marque | `Louis Vuitton` |
| `{{HEADER_BRAND_TEXT}}` | Texte header | `Pour Louis Vuitton` |
| `{{ASSETS_PATH}}` | Chemin vers assets | `../../assets/images` |

### Variables de boutique

| Variable | Description |
|----------|-------------|
| `{{STORE_NAME}}` | Nom de la boutique |
| `{{STORE_ADDRESS}}` | Adresse complète |
| `{{STORE_IMAGE}}` | Chemin image boutique |
| `{{STORE_HEADLINE}}` | Titre section boutique |

### Structure des URLs

```
retail-luxe/{marque}/{langue}/index.html
retail-premium/{marque}/{langue}/index.html
```

Exemples :
- `retail-luxe/louisvuitton/fr/` → Louis Vuitton France
- `retail-luxe/louisvuitton/en/` → Louis Vuitton UK/US
- `retail-premium/lacoste/fr/` → Lacoste France

## Types de marques

### Luxe
- Mots clés : "Client advisors", "maison de luxe", "clientèle exigeante"
- Marques : Louis Vuitton, Hermès, Dior, Chanel, Gucci, Prada

### Premium
- Mots clés : "conseillers", "marque premium", "clients qualifiés"
- Marques : Lacoste, Nike, Sephora, Apple, Nespresso

## API de génération

L'API (dans prospection-tool) doit :

1. **Recevoir les paramètres** :
```json
{
  "brandSlug": "louisvuitton",
  "brandName": "Louis Vuitton",
  "brandType": "luxe",
  "language": "fr",
  "store": {
    "name": "Louis Vuitton Maison Champs-Élysées",
    "address": "101 avenue des Champs-Élysées, 75008 Paris",
    "city": "paris",
    "image": "boutiques/Boutique Louis Vuitton fr.jpg"
  }
}
```

2. **Charger le template** et les variables de langue

3. **Remplacer les variables** avec les bonnes valeurs

4. **Générer le fichier** dans le bon dossier

5. **Push sur GitHub** pour déclencher le déploiement Hostinger

## Chemin des assets

Les assets sont partagés et situés dans :
```
retail-luxe/assets/images/
├── Logo-Metagora-Black.png
├── hero-luxe2.png
├── logo-lvmh.png
├── logo-amazon.svg
├── logo-carrefour.svg
├── logos AI/
│   ├── Microsoft logo.png
│   ├── Nvidia logo.png
│   ├── Google Cloud logo.png
│   └── Eleven Labs logo.png
├── boutiques/
│   ├── Boutique Louis Vuitton fr.jpg
│   └── ...
└── Illustration — *.jpeg
```

Le `{{ASSETS_PATH}}` doit être calculé en fonction de la profondeur du dossier :
- `retail-luxe/louisvuitton/fr/` → `../../assets/images`
- `retail-premium/lacoste/en/` → `../../assets/images` (assets copiés ou symlink)

## Workflow de génération

```
1. User configure dans l'interface (prospection-tool/landing-generator)
2. Preview des variables générées
3. User valide → API génère le HTML
4. API push sur GitHub (Tony2Metagora/landing-workflows)
5. Webhook Hostinger déploie automatiquement
6. Page live sur metagora-tech.fr/retail-{type}/{marque}/{langue}/
```
