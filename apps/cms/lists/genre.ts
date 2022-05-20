import { list } from "@keystone-6/core";
import { relationship, text } from "@keystone-6/core/fields";

export const Genre = list({
  fields: {
    name: text({
      isFilterable: true,
      isOrderable: true,
      isIndexed: "unique",
    }),
    shows: relationship({ ref: "Show.genres", many: true }),
  },
});
