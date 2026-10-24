# LunarCloud Tech — Multi-page Node.js Website

This version has separate HTML pages inside `public/` and a shared JavaScript/CSS asset folder.

## Folder structure

```text
lunarcloud-tech/
├── package.json
├── server.js
├── README.md
└── public/
    ├── index.html
    ├── services.html
    ├── games.html
    ├── development.html
    ├── pricing.html
    ├── panels.html
    ├── support.html
    ├── 404.html
    └── assets/
        ├── main.js
        └── style.css
```

## Run it

Install Node.js, open a terminal in this project folder, and run:

```bash
npm install
npm run dev
```

Then visit `http://localhost:3000`. Production start command: `npm start`.

On Android, you can use Termux with Node.js installed, or upload the folder to a Node.js hosting provider.

## Included
- Multi-page-style navigation: Home, Services, Games, Development, Pricing, Panels, Support.
- Supplied plan prices/specifications, invite reward tiers, domain guidance, all-in-one offer, and development packages.
- Mobile navigation, FAQ accordions, responsive dark glass UI, and direct panel links.
- `https://panel.lunarcloud.xyz/` and `https://paid.lunarcloud.xyz/`.

## Important production notes
- Inspired by the general premium hosting presentation and information architecture of SkilloraClouds: https://www.skilloraclouds.com/. This is not a pixel-perfect copy and does not use their private assets.
- Tailwind utility classes are loaded through the Tailwind Play CDN; for a production deployment, consider compiling Tailwind locally for stronger performance and no CDN dependency.
- The support form prepares/copies a message locally; it does not submit a real ticket.
- Payment checkout, customer accounts and automatic server provisioning are not connected. Connect and test those backend integrations before accepting payments.
