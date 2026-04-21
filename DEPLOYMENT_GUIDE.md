# 🚀 Deployment Guide - Vliegklaar

Deze guide helpt je stap voor stap bij het deployen van de website naar productie.

## 📑 Inhoudsopgave

1. [Voorbereiding](#voorbereiding)
2. [Vercel Deployment (Aanbevolen)](#vercel-deployment-aanbevolen)
3. [Netlify Deployment](#netlify-deployment)
4. [Docker Deployment](#docker-deployment)
5. [VPS Deployment](#vps-deployment)
6. [CI/CD Setup](#cicd-setup)
7. [Custom Domain Setup](#custom-domain-setup)
8. [SSL/HTTPS Setup](#sslhttps-setup)

---

## Voorbereiding

### Checklist voor deployment

✅ Code is getest lokaal  
✅ Alle tests slagen (`npm run test:all`)  
✅ Build werkt zonder errors (`npm run build`)  
✅ Environment variabelen zijn geconfigureerd  
✅ Git repository is up-to-date  

### Environment Variabelen

Voor productie heb je deze variabelen nodig:

```env
NEXT_PUBLIC_SITE_URL=https://jouw-domein.nl
NEXT_PUBLIC_CONTACT_EMAIL=info@jouw-domein.nl
NEXT_PUBLIC_CONTACT_PHONE=+31612345678
```

---

## Vercel Deployment (Aanbevolen)

Vercel is de maker van Next.js en biedt de beste ondersteuning.

### Methode 1: Via Vercel Dashboard (Makkelijkst) ⭐

#### Stap 1: Account Aanmaken

1. Ga naar [vercel.com](https://vercel.com)
2. Klik op **"Sign Up"**
3. Kies **"Continue with GitHub"**
4. Autoriseer Vercel om toegang te krijgen tot je GitHub

#### Stap 2: Project Importeren

1. Klik op **"Add New..."** → **"Project"**
2. Selecteer je repository: `Tint7487/vliegklaar`
3. Vercel detecteert automatisch Next.js instellingen
4. Configureer environment variabelen:
   - Klik op **"Environment Variables"**
   - Voeg toe:
     ```
     NEXT_PUBLIC_SITE_URL=https://jouw-domein.nl
     NEXT_PUBLIC_CONTACT_EMAIL=info@vliegklaar.nl
     NEXT_PUBLIC_CONTACT_PHONE=+31612345678
     ```

#### Stap 3: Deployen

1. Klik op **"Deploy"**
2. Wacht 2-3 minuten terwijl Vercel je site bouwt
3. ✅ Je site is nu live op `https://jouw-project.vercel.app`

#### Automatische Updates

- Elke keer dat je pusht naar `main` branch → automatische deployment
- Elke pull request → preview deployment met unieke URL

### Methode 2: Via Vercel CLI

#### Stap 1: Installeer Vercel CLI

```bash
npm install -g vercel
```

#### Stap 2: Login

```bash
vercel login
```

Volg de instructies in je browser.

#### Stap 3: Deploy

```bash
# Development deployment (test)
vercel

# Production deployment
vercel --prod
```

#### Stap 4: Environment Variabelen Toevoegen

Via CLI:
```bash
vercel env add NEXT_PUBLIC_SITE_URL
# Voer de waarde in wanneer gevraagd
```

Of via dashboard: vercel.com → je project → Settings → Environment Variables

---

## Netlify Deployment

### Via Netlify Dashboard

#### Stap 1: Account Aanmaken

1. Ga naar [netlify.com](https://netlify.com)
2. **"Sign Up"** → **"Continue with GitHub"**

#### Stap 2: Site Importeren

1. Klik op **"Add new site"** → **"Import an existing project"**
2. Kies **"Deploy with GitHub"**
3. Selecteer je repository

#### Stap 3: Build Settings

```
Build command: npm run build
Publish directory: .next
```

#### Stap 4: Environment Variabelen

1. Ga naar **Site settings** → **Environment variables**
2. Voeg toe:
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_CONTACT_EMAIL`
   - `NEXT_PUBLIC_CONTACT_PHONE`

#### Stap 5: Deploy

Klik op **"Deploy site"**

---

## Docker Deployment

Voor volledige controle kun je Docker gebruiken.

### Stap 1: Dockerfile

Er is al een Dockerfile in het project. Inhoud:

```dockerfile
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Stap 2: Build Image

```bash
docker build -t vliegklaar .
```

### Stap 3: Run Container

```bash
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_SITE_URL=https://jouw-domein.nl \
  -e NEXT_PUBLIC_CONTACT_EMAIL=info@vliegklaar.nl \
  vliegklaar
```

### Stap 4: Docker Compose (Optioneel)

Maak `docker-compose.yml`:

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_SITE_URL=https://jouw-domein.nl
      - NEXT_PUBLIC_CONTACT_EMAIL=info@vliegklaar.nl
    restart: unless-stopped
```

Run met:
```bash
docker-compose up -d
```

---

## VPS Deployment

Voor deployment op een eigen server (DigitalOcean, Hetzner, AWS EC2, etc.)

### Voorbereiding

Je hebt nodig:
- Een VPS met Ubuntu 22.04+ / Debian 11+
- Root/sudo toegang
- Een domein (optioneel)

### Stap 1: Server Voorbereiden

SSH naar je server:
```bash
ssh root@jouw-server-ip
```

Update systeem:
```bash
apt update && apt upgrade -y
```

### Stap 2: Node.js Installeren

```bash
# Node.js 20 installeren
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs

# Versie checken
node --version  # Moet 20.x zijn
npm --version
```

### Stap 3: PM2 Installeren

PM2 is een process manager die je app draaiende houdt:

```bash
npm install -g pm2
```

### Stap 4: Applicatie Opzetten

```bash
# Clone repository
cd /var/www
git clone https://github.com/Tint7487/vliegklaar.git
cd vliegklaar

# Dependencies installeren
npm install

# Environment variabelen
nano .env.local
```

Voeg toe in `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://jouw-domein.nl
NEXT_PUBLIC_CONTACT_EMAIL=info@vliegklaar.nl
```

Build de applicatie:
```bash
npm run build
```

### Stap 5: Starten met PM2

```bash
# Start applicatie
pm2 start npm --name "vliegklaar" -- start

# Auto-restart bij server reboot
pm2 startup
pm2 save

# Status checken
pm2 status

# Logs bekijken
pm2 logs vliegklaar
```

### Stap 6: Nginx als Reverse Proxy

Installeer Nginx:
```bash
apt install nginx -y
```

Maak config:
```bash
nano /etc/nginx/sites-available/vliegklaar
```

Voeg toe:
```nginx
server {
    listen 80;
    server_name jouw-domein.nl www.jouw-domein.nl;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Activeer config:
```bash
ln -s /etc/nginx/sites-available/vliegklaar /etc/nginx/sites-enabled/
nginx -t  # Test configuratie
systemctl restart nginx
```

### Stap 7: SSL met Let's Encrypt

```bash
# Certbot installeren
apt install certbot python3-certbot-nginx -y

# SSL certificaat aanvragen
certbot --nginx -d jouw-domein.nl -d www.jouw-domein.nl

# Volg de instructies
# Kies optie 2 voor automatische redirect naar HTTPS
```

Certificaat vernieuwt automatisch. Test:
```bash
certbot renew --dry-run
```

### Updates Deployen

```bash
cd /var/www/vliegklaar
git pull
npm install
npm run build
pm2 restart vliegklaar
```

---

## CI/CD Setup

De GitHub Actions zijn al geconfigureerd. Zie `.github/workflows/`.

### Voor Vercel CI/CD

#### Stap 1: Vercel Token

1. Ga naar [vercel.com/account/tokens](https://vercel.com/account/tokens)
2. Klik **"Create Token"**
3. Geef een naam (bijv. "GitHub Actions")
4. Kopieer de token

#### Stap 2: GitHub Secrets

1. Ga naar je repository op GitHub
2. **Settings** → **Secrets and variables** → **Actions**
3. Klik **"New repository secret"**
4. Voeg toe:

```
Name: VERCEL_TOKEN
Value: [je-token-hier]
```

#### Stap 3: Project IDs Ophalen

Lokaal runnen:
```bash
vercel link
```

Dit maakt `.vercel/project.json`. Voeg de waardes toe als secrets:

```
Name: VERCEL_ORG_ID
Value: [uit project.json]

Name: VERCEL_PROJECT_ID
Value: [uit project.json]
```

#### Stap 4: Test

Push naar `main`:
```bash
git add .
git commit -m "Test CI/CD"
git push
```

Check **Actions** tab op GitHub voor build status.

---

## Custom Domain Setup

### Voor Vercel

1. Ga naar je project dashboard op Vercel
2. **Settings** → **Domains**
3. Voeg je domein toe: `vliegklaar.nl`
4. Volg de instructies om DNS records toe te voegen bij je domeinregistrar

DNS Records:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Voor VPS

Als je op eigen server host, wijs je domein naar je server IP:

```
Type: A
Name: @
Value: [je-server-ip]

Type: A
Name: www
Value: [je-server-ip]
```

---

## SSL/HTTPS Setup

### Vercel
✅ Automatisch! Vercel regelt SSL gratis.

### Netlify
✅ Automatisch! Netlify regelt SSL gratis.

### VPS
Zie [Stap 7 in VPS Deployment](#stap-7-ssl-met-lets-encrypt)

---

## Troubleshooting

### Build Fails

```bash
# Lokaal testen
npm run build

# Check logs
vercel logs [deployment-url]
```

### Environment Variables Niet Geladen

- Check of variabelen in Vercel/Netlify dashboard staan
- Variabelen voor client moeten starten met `NEXT_PUBLIC_`
- Na toevoegen: redeploy triggeren

### Site is Langzaam

- Check Vercel/Netlify analytics
- Optimaliseer afbeeldingen
- Gebruik Next.js Image component

### PM2 App Crashed

```bash
# Logs checken
pm2 logs vliegklaar

# Restart
pm2 restart vliegklaar

# Memory issue? Verhoog limit
pm2 start npm --name "vliegklaar" --max-memory-restart 500M -- start
```

---

## Support

Problemen? Check:
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Issues](https://github.com/Tint7487/vliegklaar/issues)

---

**Succes met deployen! 🚀**
