import { list } from "@keystone-6/core";
import { relationship, text } from "@keystone-6/core/fields";

export const Genre = list({
  fields: {
    name: text({
      isIndexed: "unique",
      validation: { isRequired: true },
    }),
    contentfulId: text({
      validation: { isRequired: true },
    }),
    shows: relationship({
      ref: "Show.genres",
      many: true,
      ui: {
        hideCreate: true,
      },
    }),
  },
});
