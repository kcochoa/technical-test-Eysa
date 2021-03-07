import {objectType} from "@nexus/schema";

export const Movie = objectType({
    name: "Movie",
    definition(t) {
      t.model.id();
      t.model.title();
      t.model.poster_path();
      t.model.release_date();
      t.model.overview();
      t.model.rating_average();
      t.model.ageRange();
      t.model.comments();
      t.model.ratings();
      t.model.original_language();
      t.model.director();
      t.model.cast();
      t.model.duration();
    },
  });