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

## Turso

[Turso](https://turso.tech) is a hosted database service. This project connects to a remote libSQL database using `@libsql/client`. libSQL is an open-source fork of SQLite, so the app stores and queries data using familiar SQL. See the [Turso TypeScript SDK reference](https://docs.turso.tech/sdk/ts/reference#libsqlclient) for details.

The equipment catalog in `app/equipment/page.tsx` reads the `equipment` table, ordered by `id`, and displays each row as a card. The table stores an item's `id`, `name`, `category`, `vitality`, `strength`, and `magic`.

To configure the connection, add your database URL and authentication token to `.env.local` in the project root:

```dotenv
TURSO_DATABASE_URL=libsql://your-database.turso.io
TURSO_AUTH_TOKEN=your-auth-token
```

The URL identifies the database, and the token authorizes access. Keep the token private and out of version control. Set the same environment variables in your hosting provider when deploying, and restart the development server after changing them locally.

The `equipment` table must exist before loading the catalog. Seed logic lives in `app/seed/page.tsx` and uses the sample records from `app/lib/placeholder-data.ts`; it deletes existing equipment rows before inserting the samples. This file currently renders a “Seed page” placeholder, so visiting `/seed` does not run the seed logic.
