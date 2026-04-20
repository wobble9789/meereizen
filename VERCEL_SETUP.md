# Vercel Deployment Setup

## Required GitHub Secrets

Om automatische deployment naar Vercel te activeren, moet je de volgende secrets toevoegen aan je GitHub repository:

### Stap 1: Vercel Token Ophalen

1. Ga naar [vercel.com/account/tokens](https://vercel.com/account/tokens)
2. Klik op "Create Token"
3. Geef het een duidelijke naam (bijv. "GitHub Actions - meereizen")
4. Kopieer de token (je ziet deze maar één keer!)

### Stap 2: Vercel Project Info Ophalen

1. Ga naar je Vercel project
2. Ga naar Settings
3. Kopieer de **Project ID** (onder "General")
4. Kopieer de **Organization ID** (ook onder "General" of in je account settings)

### Stap 3: Secrets Toevoegen aan GitHub

1. Ga naar je GitHub repository
2. Klik op **Settings** > **Secrets and variables** > **Actions**
3. Klik op **New repository secret**
4. Voeg deze 3 secrets toe:

| Secret Name         | Description                          | Example Value                      |
|---------------------|--------------------------------------|------------------------------------|
| `VERCEL_TOKEN`      | Je Vercel API token                  | `abc123...`                        |
| `VERCEL_ORG_ID`     | Je Vercel organization/team ID       | `team_abc123...`                   |
| `VERCEL_PROJECT_ID` | Je Vercel project ID                 | `prj_abc123...`                    |

### Stap 4: Verificatie

Na het toevoegen van de secrets:

1. Ga naar **Actions** tab in je GitHub repository
2. De "Deploy to Vercel" workflow zou nu moeten slagen bij de volgende push naar `main`

## Handmatige Deployment (zonder secrets)

Als je de secrets niet wilt instellen, kun je handmatig deployen:

```bash
# Installeer Vercel CLI
npm install -g vercel

# Login en deploy
vercel
```

## Security Note

⚠️ **Belangrijk**: Deel nooit je Vercel token publiekelijk. GitHub Secrets zijn encrypted en alleen toegankelijk voor workflows.

## Troubleshooting

### "No credentials found" Error
- Controleer of alle 3 de secrets correct zijn toegevoegd
- Ververs de Actions pagina en probeer opnieuw

### Deployment Faalt
- Controleer of de token nog geldig is (tokens kunnen verlopen)
- Verifieer dat de Organization ID en Project ID kloppen
- Check de Vercel dashboard voor error logs
