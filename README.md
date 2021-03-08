# In the Air 

 In-Flight Entertainment App to enjoy more traveling. This app was implement using NextJs with Graphql Api with Apollo Server and Prisma to use a postgress database

![diagram nuevo](https://raw.githubusercontent.com/kcochoa/technical-test-Eysa/main/public/diagram%20nuevo.png?token=ALS2VPRH4LSNZHKBMVE6BC3AIYSY4)



## UI Design



To have a better idea of the component needed and the design in general of the app. I use Figma to design some wireframe of the 3 principal pages.

![image-20210308125637654](https://github.com/kcochoa/technical-test-Eysa/blob/main/public/HOME.png)



![image-20210308125721975](https://github.com/kcochoa/technical-test-Eysa/blob/main/public/MOVIES.png)



![image-20210308125810002](https://github.com/kcochoa/technical-test-Eysa/blob/main/public/DETAILS.png)

## Database Schema

For the database I decide to use postgresSQL using Prisma to generate the schema of the database. This idea of design is due to the facilities of using Prisma to auto-generated query builder that provides type-safe access to our database and is very easy to integrated with NextJS.

![image-20210308130615777](https://github.com/kcochoa/technical-test-Eysa/blob/main/public/db.png)

## Component TREE

![image-20210308134747739](https://github.com/kcochoa/technical-test-Eysa/blob/main/public/components.png)

## Getting Started

To start using this app first you need to clone this repo

```bash
git clone https://github.com/kcochoa/in-the-air-Eysa-test.git
```

Then you must execute in your terminal install the required modules

```bash
yarn install
```

In your .dev you must define your postgres database configuration,  I put a example instead of ignoring with .gitignore

You also need to install globally Prisma

```bash
yarn add prisma –g
```

To install prisma client 

```bash
yarn prisma init
```

To generate migration to postgress database

```bash
yarn prisma migrate dev --preview-feature
```

If it doesn't run you must run again 

```
yarn install
```

Finally you can run your app using 

```
yarn dev
```



Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[Graphql API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/graphql](http://localhost:3000/api/graphql). 



## Usage

Important: To login in the app you must use 

```
username: katia
password: secret123
```

The user context is not finished, this is one of the most important updates that the app need protected routes.

## Testing

In term of testing I didn't have time to testing nextjs component but using graphql tools to testing endpoint I test the apis queries and mutation calls. Here are the query tested

```javascript
# Write your query or mutation here
query getAllMovies{
  movies{
    id
    title
    poster_path
    release_date
    overview
    rating_average
    original_language
    director
    cast
    ageRange
    duration
    comments{
      id
      content
      username
    }   
  }
}

query getMovie{
  movie(where: {id:3}){
    id
    title
    poster_path
    release_date
    overview
    rating_average
    original_language
    director
    cast
    ageRange
    duration
    comments{
      id
      content
      username
    }   
  }
}

mutation CreateComment{
  createOneComment(data:{content:"Que bien",movie:{connect:{id:1}},username:"katia"}){
    id
    content
   
  }
}

mutation CreateRating{
  createOneRating(data:{username:"katia",rate:4,movie:{connect:{id:3}}}){
    id
    rate
    movie{
      id
    }
  }
}
```



## Author

[Katia Camila Valdés Ochoa]: https://github.com/kcochoa Katia Camila Valdés Ochoa



