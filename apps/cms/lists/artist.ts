import { list } from "@keystone-6/core";
import { relationship, text } from "@keystone-6/core/fields";

export const Artist = list({
  // Here are the fields that `Artist` will have.
  // a name so we can refer to them, and a way to connect artists to shows.
  fields: {
    name: text({ validation: { isRequired: true } }),
    // Relationships allow us to reference other lists. In this case,
    // we want an artist to have many shows, and we are saying that the show
    // should be referable by the 'artists' field of posts.
    // Make sure you read the docs to understand how they work: https://keystonejs.com/docs/guides/relationships#understanding-relationships
    shows: relationship({ ref: "Show.artists", many: true }),
  },
  // Here we can configure the Admin UI. We want to show a user's name in the Admin UI
  ui: {
    listView: {
      initialColumns: ["name"],
    },
  },
});
