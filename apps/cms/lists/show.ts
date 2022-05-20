import { list } from "@keystone-6/core";
import {
  text,
  relationship,
  timestamp,
  select,
  image,
} from "@keystone-6/core/fields";
import { document } from "@keystone-6/fields-document";

export const Show = list({
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
});
