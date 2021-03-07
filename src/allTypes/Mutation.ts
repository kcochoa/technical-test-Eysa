import { mutationType} from "@nexus/schema";

export const Mutation = mutationType({
    definition(t){
      t.crud.createOneComment()
      t.crud.createOneRating()
      t.crud.createOneMovie()
    }
  
  })