This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



```
                          ┌─────────────┐
                          │   Homepage  │
                          └────┬────────┘
                               │
         ┌─────────────────────┼─────────────────────┐
         │                     │                     │
   Product List           Product Details        User Account
         │                     │                     │
 ┌───────┴───────┐      ┌──────┴────────┐       ┌────┴───────┐
 │   Filters     │      │ Add to Cart   │       │   Login    │
 │   Search      │      │ Reviews       │       │ Register   │
 │   Categories  │      │ Related Items │       │ Profile    │
 └───────────────┘      └───────────────┘       └────────────┘
                          │
                    ┌─────┴─────┐
                    │   Cart    │
                    │ Checkout  │
                    │ Payment   │
                    └───────────┘

```   


```
ecommerce-frontend/
├── app/                                # App Router for routing and APIs
│   ├── layout.tsx                      # Layout with global wrappers
│   ├── page.tsx                        # Homepage
│   ├── product/
│   │   ├── [id]/page.tsx               # Product detail page
│   ├── cart/page.tsx                   # Cart Page
│   ├── api/
│   │   ├── product/route.ts            # Product API
│   │   ├── cart/route.ts               # Cart API
│   │   ├── user/route.ts               # User API
├── components/                         # Reusable UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   ├── CartItem.tsx
├── lib/                                # Database and utility functions
│   ├── mongodb.ts                      # MongoDB connection
│   ├── utils.ts                        # Utility functions
├── models/                             # Mongoose models
│   ├── Product.ts
│   ├── Cart.ts
│   ├── User.ts
├── styles/                             # Styling
│   ├── globals.css
│   ├── page.module.css
├── .env.local                          # Environment Variables
├── next.config.js
├── package.json
└── README.md

```

# Trendy Trio
# TrioTrendz
# TriUnity Ventures