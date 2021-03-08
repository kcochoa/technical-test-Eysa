/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import * as Context from "./src/context"



declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CommentCreateInput: { // input type
    content: string; // String!
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    deleteAt?: NexusGenScalars['DateTime'] | null; // DateTime
    movie: NexusGenInputs['MovieCreateNestedOneWithoutCommentsInput']; // MovieCreateNestedOneWithoutCommentsInput!
    updateAt?: NexusGenScalars['DateTime'] | null; // DateTime
    username: string; // String!
  }
  CommentCreateNestedManyWithoutMovieInput: { // input type
    connect?: NexusGenInputs['CommentWhereUniqueInput'][] | null; // [CommentWhereUniqueInput!]
    connectOrCreate?: NexusGenInputs['CommentCreateOrConnectWithoutMovieInput'][] | null; // [CommentCreateOrConnectWithoutMovieInput!]
    create?: NexusGenInputs['CommentCreateWithoutMovieInput'][] | null; // [CommentCreateWithoutMovieInput!]
  }
  CommentCreateOrConnectWithoutMovieInput: { // input type
    create: NexusGenInputs['CommentCreateWithoutMovieInput']; // CommentCreateWithoutMovieInput!
    where: NexusGenInputs['CommentWhereUniqueInput']; // CommentWhereUniqueInput!
  }
  CommentCreateWithoutMovieInput: { // input type
    content: string; // String!
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    deleteAt?: NexusGenScalars['DateTime'] | null; // DateTime
    updateAt?: NexusGenScalars['DateTime'] | null; // DateTime
    username: string; // String!
  }
  CommentListRelationFilter: { // input type
    every?: NexusGenInputs['CommentWhereInput'] | null; // CommentWhereInput
    none?: NexusGenInputs['CommentWhereInput'] | null; // CommentWhereInput
    some?: NexusGenInputs['CommentWhereInput'] | null; // CommentWhereInput
  }
  CommentWhereInput: { // input type
    AND?: NexusGenInputs['CommentWhereInput'][] | null; // [CommentWhereInput!]
    NOT?: NexusGenInputs['CommentWhereInput'][] | null; // [CommentWhereInput!]
    OR?: NexusGenInputs['CommentWhereInput'][] | null; // [CommentWhereInput!]
    content?: NexusGenInputs['StringFilter'] | null; // StringFilter
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    deleteAt?: NexusGenInputs['DateTimeNullableFilter'] | null; // DateTimeNullableFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    movie?: NexusGenInputs['MovieWhereInput'] | null; // MovieWhereInput
    movieId?: NexusGenInputs['IntFilter'] | null; // IntFilter
    updateAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    username?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  CommentWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  DateTimeFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeFilter'] | null; // NestedDateTimeFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  DateTimeNullableFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeNullableFilter'] | null; // NestedDateTimeNullableFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  FloatFilter: { // input type
    equals?: number | null; // Float
    gt?: number | null; // Float
    gte?: number | null; // Float
    in?: number[] | null; // [Float!]
    lt?: number | null; // Float
    lte?: number | null; // Float
    not?: NexusGenInputs['NestedFloatFilter'] | null; // NestedFloatFilter
    notIn?: number[] | null; // [Float!]
  }
  IntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntFilter'] | null; // NestedIntFilter
    notIn?: number[] | null; // [Int!]
  }
  MovieCreateInput: { // input type
    ageRange: number; // Int!
    cast?: NexusGenInputs['MovieCreatecastInput'] | null; // MovieCreatecastInput
    comments?: NexusGenInputs['CommentCreateNestedManyWithoutMovieInput'] | null; // CommentCreateNestedManyWithoutMovieInput
    director: string; // String!
    duration: number; // Int!
    gender?: NexusGenInputs['MovieCreategenderInput'] | null; // MovieCreategenderInput
    original_language: string; // String!
    overview: string; // String!
    poster_path: string; // String!
    rating_average: number; // Float!
    ratings?: NexusGenInputs['RatingCreateNestedManyWithoutMovieInput'] | null; // RatingCreateNestedManyWithoutMovieInput
    release_date: NexusGenScalars['DateTime']; // DateTime!
    title: string; // String!
  }
  MovieCreateNestedOneWithoutCommentsInput: { // input type
    connect?: NexusGenInputs['MovieWhereUniqueInput'] | null; // MovieWhereUniqueInput
    connectOrCreate?: NexusGenInputs['MovieCreateOrConnectWithoutCommentsInput'] | null; // MovieCreateOrConnectWithoutCommentsInput
    create?: NexusGenInputs['MovieCreateWithoutCommentsInput'] | null; // MovieCreateWithoutCommentsInput
  }
  MovieCreateNestedOneWithoutRatingsInput: { // input type
    connect?: NexusGenInputs['MovieWhereUniqueInput'] | null; // MovieWhereUniqueInput
    connectOrCreate?: NexusGenInputs['MovieCreateOrConnectWithoutRatingsInput'] | null; // MovieCreateOrConnectWithoutRatingsInput
    create?: NexusGenInputs['MovieCreateWithoutRatingsInput'] | null; // MovieCreateWithoutRatingsInput
  }
  MovieCreateOrConnectWithoutCommentsInput: { // input type
    create: NexusGenInputs['MovieCreateWithoutCommentsInput']; // MovieCreateWithoutCommentsInput!
    where: NexusGenInputs['MovieWhereUniqueInput']; // MovieWhereUniqueInput!
  }
  MovieCreateOrConnectWithoutRatingsInput: { // input type
    create: NexusGenInputs['MovieCreateWithoutRatingsInput']; // MovieCreateWithoutRatingsInput!
    where: NexusGenInputs['MovieWhereUniqueInput']; // MovieWhereUniqueInput!
  }
  MovieCreateWithoutCommentsInput: { // input type
    ageRange: number; // Int!
    cast?: NexusGenInputs['MovieCreatecastInput'] | null; // MovieCreatecastInput
    director: string; // String!
    duration: number; // Int!
    gender?: NexusGenInputs['MovieCreategenderInput'] | null; // MovieCreategenderInput
    original_language: string; // String!
    overview: string; // String!
    poster_path: string; // String!
    rating_average: number; // Float!
    ratings?: NexusGenInputs['RatingCreateNestedManyWithoutMovieInput'] | null; // RatingCreateNestedManyWithoutMovieInput
    release_date: NexusGenScalars['DateTime']; // DateTime!
    title: string; // String!
  }
  MovieCreateWithoutRatingsInput: { // input type
    ageRange: number; // Int!
    cast?: NexusGenInputs['MovieCreatecastInput'] | null; // MovieCreatecastInput
    comments?: NexusGenInputs['CommentCreateNestedManyWithoutMovieInput'] | null; // CommentCreateNestedManyWithoutMovieInput
    director: string; // String!
    duration: number; // Int!
    gender?: NexusGenInputs['MovieCreategenderInput'] | null; // MovieCreategenderInput
    original_language: string; // String!
    overview: string; // String!
    poster_path: string; // String!
    rating_average: number; // Float!
    release_date: NexusGenScalars['DateTime']; // DateTime!
    title: string; // String!
  }
  MovieCreatecastInput: { // input type
    set?: string[] | null; // [String!]
  }
  MovieCreategenderInput: { // input type
    set?: string[] | null; // [String!]
  }
  MovieWhereInput: { // input type
    AND?: NexusGenInputs['MovieWhereInput'][] | null; // [MovieWhereInput!]
    NOT?: NexusGenInputs['MovieWhereInput'][] | null; // [MovieWhereInput!]
    OR?: NexusGenInputs['MovieWhereInput'][] | null; // [MovieWhereInput!]
    ageRange?: NexusGenInputs['IntFilter'] | null; // IntFilter
    cast?: NexusGenInputs['StringNullableListFilter'] | null; // StringNullableListFilter
    comments?: NexusGenInputs['CommentListRelationFilter'] | null; // CommentListRelationFilter
    director?: NexusGenInputs['StringFilter'] | null; // StringFilter
    duration?: NexusGenInputs['IntFilter'] | null; // IntFilter
    gender?: NexusGenInputs['StringNullableListFilter'] | null; // StringNullableListFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    original_language?: NexusGenInputs['StringFilter'] | null; // StringFilter
    overview?: NexusGenInputs['StringFilter'] | null; // StringFilter
    poster_path?: NexusGenInputs['StringFilter'] | null; // StringFilter
    rating_average?: NexusGenInputs['FloatFilter'] | null; // FloatFilter
    ratings?: NexusGenInputs['RatingListRelationFilter'] | null; // RatingListRelationFilter
    release_date?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    title?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  MovieWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  NestedDateTimeFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeFilter'] | null; // NestedDateTimeFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  NestedDateTimeNullableFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeNullableFilter'] | null; // NestedDateTimeNullableFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  NestedFloatFilter: { // input type
    equals?: number | null; // Float
    gt?: number | null; // Float
    gte?: number | null; // Float
    in?: number[] | null; // [Float!]
    lt?: number | null; // Float
    lte?: number | null; // Float
    not?: NexusGenInputs['NestedFloatFilter'] | null; // NestedFloatFilter
    notIn?: number[] | null; // [Float!]
  }
  NestedIntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntFilter'] | null; // NestedIntFilter
    notIn?: number[] | null; // [Int!]
  }
  NestedStringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: NexusGenInputs['NestedStringFilter'] | null; // NestedStringFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  RatingCreateInput: { // input type
    movie: NexusGenInputs['MovieCreateNestedOneWithoutRatingsInput']; // MovieCreateNestedOneWithoutRatingsInput!
    rate: number; // Int!
    username: string; // String!
  }
  RatingCreateNestedManyWithoutMovieInput: { // input type
    connect?: NexusGenInputs['RatingWhereUniqueInput'][] | null; // [RatingWhereUniqueInput!]
    connectOrCreate?: NexusGenInputs['RatingCreateOrConnectWithoutMovieInput'][] | null; // [RatingCreateOrConnectWithoutMovieInput!]
    create?: NexusGenInputs['RatingCreateWithoutMovieInput'][] | null; // [RatingCreateWithoutMovieInput!]
  }
  RatingCreateOrConnectWithoutMovieInput: { // input type
    create: NexusGenInputs['RatingCreateWithoutMovieInput']; // RatingCreateWithoutMovieInput!
    where: NexusGenInputs['RatingWhereUniqueInput']; // RatingWhereUniqueInput!
  }
  RatingCreateWithoutMovieInput: { // input type
    rate: number; // Int!
    username: string; // String!
  }
  RatingListRelationFilter: { // input type
    every?: NexusGenInputs['RatingWhereInput'] | null; // RatingWhereInput
    none?: NexusGenInputs['RatingWhereInput'] | null; // RatingWhereInput
    some?: NexusGenInputs['RatingWhereInput'] | null; // RatingWhereInput
  }
  RatingWhereInput: { // input type
    AND?: NexusGenInputs['RatingWhereInput'][] | null; // [RatingWhereInput!]
    NOT?: NexusGenInputs['RatingWhereInput'][] | null; // [RatingWhereInput!]
    OR?: NexusGenInputs['RatingWhereInput'][] | null; // [RatingWhereInput!]
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    movie?: NexusGenInputs['MovieWhereInput'] | null; // MovieWhereInput
    movieId?: NexusGenInputs['IntFilter'] | null; // IntFilter
    rate?: NexusGenInputs['IntFilter'] | null; // IntFilter
    username?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  RatingWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  StringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    mode?: NexusGenEnums['QueryMode'] | null; // QueryMode
    not?: NexusGenInputs['NestedStringFilter'] | null; // NestedStringFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  StringNullableListFilter: { // input type
    equals?: string[] | null; // [String!]
    has?: string | null; // String
    hasEvery?: string[] | null; // [String!]
    hasSome?: string[] | null; // [String!]
    isEmpty?: boolean | null; // Boolean
  }
}

export interface NexusGenEnums {
  QueryMode: "default" | "insensitive"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  Comment: { // root type
    content: string; // String!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    deleteAt?: NexusGenScalars['DateTime'] | null; // DateTime
    id: number; // Int!
    movieId: number; // Int!
    updateAt: NexusGenScalars['DateTime']; // DateTime!
    username: string; // String!
  }
  Movie: { // root type
    ageRange: number; // Int!
    cast: string[]; // [String!]!
    director: string; // String!
    duration: number; // Int!
    id: number; // Int!
    original_language: string; // String!
    overview: string; // String!
    poster_path: string; // String!
    rating_average: number; // Float!
    release_date: NexusGenScalars['DateTime']; // DateTime!
    title: string; // String!
  }
  Mutation: {};
  Query: {};
  Rating: { // root type
    id: number; // Int!
    rate: number; // Int!
    username: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Comment: { // field return type
    content: string; // String!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    deleteAt: NexusGenScalars['DateTime'] | null; // DateTime
    id: number; // Int!
    movieId: number; // Int!
    updateAt: NexusGenScalars['DateTime']; // DateTime!
    username: string; // String!
  }
  Movie: { // field return type
    ageRange: number; // Int!
    cast: string[]; // [String!]!
    comments: NexusGenRootTypes['Comment'][]; // [Comment!]!
    director: string; // String!
    duration: number; // Int!
    id: number; // Int!
    original_language: string; // String!
    overview: string; // String!
    poster_path: string; // String!
    rating_average: number; // Float!
    ratings: NexusGenRootTypes['Rating'][]; // [Rating!]!
    release_date: NexusGenScalars['DateTime']; // DateTime!
    title: string; // String!
  }
  Mutation: { // field return type
    createOneComment: NexusGenRootTypes['Comment']; // Comment!
    createOneMovie: NexusGenRootTypes['Movie']; // Movie!
    createOneRating: NexusGenRootTypes['Rating']; // Rating!
  }
  Query: { // field return type
    movie: NexusGenRootTypes['Movie'] | null; // Movie
    movies: NexusGenRootTypes['Movie'][]; // [Movie!]!
  }
  Rating: { // field return type
    id: number; // Int!
    movie: NexusGenRootTypes['Movie']; // Movie!
    rate: number; // Int!
    username: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  Comment: { // field return type name
    content: 'String'
    createdAt: 'DateTime'
    deleteAt: 'DateTime'
    id: 'Int'
    movieId: 'Int'
    updateAt: 'DateTime'
    username: 'String'
  }
  Movie: { // field return type name
    ageRange: 'Int'
    cast: 'String'
    comments: 'Comment'
    director: 'String'
    duration: 'Int'
    id: 'Int'
    original_language: 'String'
    overview: 'String'
    poster_path: 'String'
    rating_average: 'Float'
    ratings: 'Rating'
    release_date: 'DateTime'
    title: 'String'
  }
  Mutation: { // field return type name
    createOneComment: 'Comment'
    createOneMovie: 'Movie'
    createOneRating: 'Rating'
  }
  Query: { // field return type name
    movie: 'Movie'
    movies: 'Movie'
  }
  Rating: { // field return type name
    id: 'Int'
    movie: 'Movie'
    rate: 'Int'
    username: 'String'
  }
}

export interface NexusGenArgTypes {
  Movie: {
    comments: { // args
      after?: NexusGenInputs['CommentWhereUniqueInput'] | null; // CommentWhereUniqueInput
      before?: NexusGenInputs['CommentWhereUniqueInput'] | null; // CommentWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
    ratings: { // args
      after?: NexusGenInputs['RatingWhereUniqueInput'] | null; // RatingWhereUniqueInput
      before?: NexusGenInputs['RatingWhereUniqueInput'] | null; // RatingWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
  Mutation: {
    createOneComment: { // args
      data: NexusGenInputs['CommentCreateInput']; // CommentCreateInput!
    }
    createOneMovie: { // args
      data: NexusGenInputs['MovieCreateInput']; // MovieCreateInput!
    }
    createOneRating: { // args
      data: NexusGenInputs['RatingCreateInput']; // RatingCreateInput!
    }
  }
  Query: {
    movie: { // args
      where: NexusGenInputs['MovieWhereUniqueInput']; // MovieWhereUniqueInput!
    }
    movies: { // args
      after?: NexusGenInputs['MovieWhereUniqueInput'] | null; // MovieWhereUniqueInput
      before?: NexusGenInputs['MovieWhereUniqueInput'] | null; // MovieWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
      where?: NexusGenInputs['MovieWhereInput'] | null; // MovieWhereInput
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    /**
     * Whether the type can be null
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    nullable?: boolean
    /**
     * Whether the type is list of values, or just a single value.
     * If list is true, we assume the type is a list. If list is an array,
     * we'll assume that it's a list with the depth. The boolean indicates whether
     * the type is required (non-null), where true = nonNull, false = nullable.
     * @see declarativeWrappingPlugin
     */
    list?: true | boolean[]
    /**
     * Whether the type should be non null, `required: true` = `nullable: false`
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    required?: boolean
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
    /**
     * Whether the type can be null
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    nullable?: boolean
    /**
     * Whether the type is list of values, or just a single value.
     * If list is true, we assume the type is a list. If list is an array,
     * we'll assume that it's a list with the depth. The boolean indicates whether
     * the type is required (non-null), where true = nonNull, false = nullable.
     * @see declarativeWrappingPlugin
     */
    list?: true | boolean[]
    /**
     * Whether the type should be non null, `required: true` = `nullable: false`
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    required?: boolean
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
    /**
     * Whether the type can be null
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    nullable?: boolean
    /**
     * Whether the type is list of values, or just a single value.
     * If list is true, we assume the type is a list. If list is an array,
     * we'll assume that it's a list with the depth. The boolean indicates whether
     * the type is required (non-null), where true = nonNull, false = nullable.
     * @see declarativeWrappingPlugin
     */
    list?: true | boolean[]
    /**
     * Whether the type should be non null, `required: true` = `nullable: false`
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    required?: boolean
  }
}