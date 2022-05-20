/*
Welcome to the schema! The schema is the heart of Keystone.

Here we define our 'lists', which will then be used both for the GraphQL
API definition, our database tables, and our Admin UI layout.

Some quick definitions to help out:
A list: A definition of a collection of fields with a name. For the starter
  we have `User`, `Post`, and `Tag` lists.
A field: The individual bits of data on your list, each with its own type.
  you can see some of the lists in what we use below.

*/

// Like the `config` function we use in keystone.ts, we use functions
// for putting in our config so we get useful errors. With typescript,
// we get these even before code runs.
import { list } from "@keystone-6/core";

// We're using some common fields in the starter. Check out https://keystonejs.com/docs/apis/fields#fields-api
// for the full list of fields.
import {
  text,
  relationship,
  timestamp,
  select,
  image,
} from "@keystone-6/core/fields";
// The document field is a more complicated field, so it's in its own package
// Keystone aims to have all the base field types, but you can make your own
// custom ones.
import { document } from "@keystone-6/fields-document";

// We are using Typescript, and we want our types experience to be as strict as it can be.
// By providing the Keystone generated `Lists` type to our lists object, we refine
// our types to a stricter subset that is type-aware of other lists in our schema
// that Typescript cannot easily infer.
import { Lists } from ".keystone/types";

// We have a users list, a blogs list, and tags for blog posts, so they can be filtered.
// Each property on the exported object will become the name of a list (a.k.a. the `listKey`),
// with the value being the definition of the list, including the fields.
export const lists: Lists = {
  // Here we define the user list.
  Artist: list({
    // Here are the fields that `User` will have. We want an email and password so they can log in
    // a name so we can refer to them, and a way to connect users to posts.
    fields: {
      name: text({ validation: { isRequired: true } }),
      // Relationships allow us to reference other lists. In this case,
      // we want an artist to have many shows, and we are saying that the user
      // should be referable by the 'artists' field of posts.
      // Make sure you read the docs to understand how they work: https://keystonejs.com/docs/guides/relationships#understanding-relationships
      shows: relationship({ ref: "Show.artists", many: true }),
    },
    // Here we can configure the Admin UI. We want to show a user's name and posts in the Admin UI
    ui: {
      listView: {
        initialColumns: ["name"],
      },
    },
  }),
  // Our second list is the Shows list. We've got a few more fields here
  // so we have all the info we need for displaying shows.
  Show: list({
    fields: {
      title: text(),
      // Having the status here will make it easy for us to choose whether to display
      // posts on a live site.
      status: select({
        options: [
          { label: "Published", value: "published" },
          { label: "Draft", value: "draft" },
        ],
        // We want to make sure new posts start off as a draft when they are created
        defaultValue: "draft",
        // fields also have the ability to configure their appearance in the Admin UI
        ui: {
          displayMode: "segmented-control",
        },
      }),
      coverImage: image(),
      // The document field can be used for making highly editable content. Check out our
      // guide on the document field https://keystonejs.com/docs/guides/document-fields#how-to-use-document-fields
      // for more information
      content: document({
        formatting: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
          [2, 1],
          [1, 2],
          [1, 2, 1],
        ],
        links: true,
        dividers: true,
      }),
      publishDate: timestamp({
        isOrderable: true,
        isFilterable: true,
      }),
      // Here is the link from post => author.
      // We've configured its UI display quite a lot to make the experience of editing posts better.
      artists: relationship({
        ref: "Artist.shows",
        ui: {
          displayMode: "cards",
          cardFields: ["name"],
          linkToItem: true,
          inlineConnect: true,
          inlineCreate: { fields: ["name"] },
        },
        many: true,
        isFilterable: true,
      }),
      // We also link posts to tags. This is a many <=> many linking.
      genres: relationship({
        ref: "Genre.shows",
        ui: {
          displayMode: "cards",
          cardFields: ["name"],
          inlineEdit: { fields: ["name"] },
          linkToItem: true,
          inlineConnect: true,
          inlineCreate: { fields: ["name"] },
        },
        many: true,
        isFilterable: true,
      }),
    },
  }),
  Genre: list({
    fields: {
      name: text({
        isFilterable: true,
        isOrderable: true,
      }),
      shows: relationship({ ref: "Show.genres", many: true }),
    },
  }),
};
