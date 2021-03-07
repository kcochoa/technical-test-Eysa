import {queryType} from "@nexus/schema";

export const Query = queryType({
    definition(t) {
      t.crud.movie();
      t.crud.movies({ pagination: true, filtering: true });
    },
  });