import { objectType } from "@nexus/schema";

export const Rating = objectType({
  name: "Rating",
  definition(t) {
    t.model.id();
    t.model.rate();
    t.model.username();
    t.model.movie();
  },
});
