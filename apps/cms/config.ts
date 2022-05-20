// 3000 is standard for node apps
// Once deployed, Railway will supply this var to your app
export const PORT = parseInt(process.env.PORT as string) || 3000;

// Postgres DB URL
// The default value here will work if you've installed Postgres on MacOS using brew
// One the app is deployed to Railway, this var will be supplied by the Postgres plugin
export const DATABASE_URL =
  process.env.DATABASE_URL ||
  `postgres://${process.env.USER}@localhost/keystone-6-example`;
