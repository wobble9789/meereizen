# E2E Tests Runnen in Codespaces

## ⚠️ Belangrijk: Server wordt automatisch gestart

Playwright start automatisch een development server. Je hoeft **geen** `npm run dev` te draaien!

## 🚀 Quick Start

### Stap 1: Installeer Dependencies (eenmalig)
```bash
bash scripts/install-playwright-deps.sh
```

### Stap 2: Run E2E Tests
```bash
npm run test:e2e:chromium
```

Playwright start automatisch `npm run dev`, wacht tot de server ready is, draait de tests, en stopt de server.

**Let op:** Vervang `https://jouw-url-hier.app.github.dev` met je eigen URL!


## 📝 Voorbeeld Workflow

```bash
# Terminal 1
npm run dev
# ✓ Ready on http://localhost:3000

# Terminal 2  
npm run test:e2e:chromium
# ✓ Running 23 tests...
```

## ✅ Voor CI/CD

In GitHub Actions werkt het automatisch met `localhost:3000` omdat de config
standaard naar die waarde terugvalt.

## 🐛 Troubleshooting

### System Dependencies Error
Als je `libatk-1.0.so.0` errors ziet:
```bash
bash scripts/install-playwright-deps.sh
```

### Tests redirecten naar GitHub Login
Dit betekent dat je per ongeluk de externe Codespaces URL gebruikt. Gebruik altijd `localhost:3000` in Codespaces.

### Server is niet bereikbaar
Zorg dat `npm run dev` in een andere terminal draait voordat je de tests start.
