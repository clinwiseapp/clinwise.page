# ClinWise — landing page v2 (Next.js 14 + Tailwind + shadcn/ui)

App Router, TypeScript, Tailwind CSS 3, shadcn/ui e tema claro/escuro com `next-themes`.

## Rodar

```bash
cd nextjs-v2
cp .env.example .env.local
npm install
npm run dev
```

## Produção

```bash
npm run build && npm start
# ou container (output: standalone)
docker build -t clinwise-landing \
  --build-arg NEXT_PUBLIC_SITE_URL=https://clinwiseapp.com \
  --build-arg NEXT_PUBLIC_APP_URL=https://app.clinwiseapp.com .
docker run -p 3000:3000 clinwise-landing
```

A imagem roda como usuário não-root na porta 3000 — pronta para ACR + AKS.
`NEXT_PUBLIC_*` são embutidas no build: passe como `--build-arg`.

## Variáveis

- `NEXT_PUBLIC_SITE_URL` — URL canônica (metadata, sitemap, robots).
- `NEXT_PUBLIC_APP_URL` — app web; o formulário final redireciona para `/cadastro?email=…`.

## Estrutura

```
app/
  layout.tsx          fontes (Bricolage Grotesque, Instrument Sans, IBM Plex Mono), metadata, ThemeProvider
  page.tsx            composição + JSON-LD do FAQ
  globals.css         tokens claro/escuro (CSS vars HSL)
  icon.svg · robots.ts · sitemap.ts
components/
  site-header.tsx · site-footer.tsx · logo.tsx · eyebrow.tsx
  theme-provider.tsx · theme-toggle.tsx
  recording-demo.tsx  demo interativa (Iniciar → Pausar → Apagar / Continuar / Concluir → Med-Score)
  sections/           hero, steps, pricing, faq, call-to-action
  ui/                 shadcn: button, input, badge, accordion
lib/
  content.ts          todo o copy, preços e dados da demo
  utils.ts            cn()
```

## Tokens

| token | claro | escuro |
|---|---|---|
| background | #F7F8F7 | #0E1418 |
| card | #FFFFFF | #172026 |
| muted | #EDF0EE | #1C272E |
| foreground | #10171C | #EEF1EF |
| muted-foreground | #46545A | #A9B4B8 |
| border | #E4E8E6 | #26323A |
| signal (texto de destaque) | #007C7D | #4CC6C8 |
| primary (botão) | #10171C | #4CC6C8 |

Fixos: `brand` #009B9E, `ink` #10171C, `record` #D24D42, `danger` #A43C2F.

## Antes de subir

- Criar as páginas `/termos` e `/privacidade` (linkadas no rodapé).
- Revisar preços em `lib/content.ts` (`PLANS`).
- Adicionar `public/og.png` (1200×630) e referenciar em `openGraph.images` no layout.
