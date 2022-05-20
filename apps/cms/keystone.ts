/*
Welcome to Keystone! This file is what keystone uses to start the app.

It looks at the default export, and expects a Keystone config object.

You can find all the config options in our docs here: https://keystonejs.com/docs/apis/config
*/

import { config } from "@keystone-6/core";
import { DATABASE_URL, PORT } from "./config";

// Look in the schema file for how we define our lists, and how users interact with them through graphql or the Admin UI
import { lists } from "./schema";

// Using the config function helps typescript guide you to the available options.
export default config({
  // the db sets the database provider - we're using sqlite for the fastest startup experience
  db: {
    provider: "postgresql",
    useMigrations: true,
    url: DATABASE_URL,
  },
  server: {
    port: PORT,
  },
  images: {
    upload: "local",
    local: {
      storagePath: "public/images",
      baseUrl: "/images",
    },
  },
  lists,
});
