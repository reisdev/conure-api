# conure-api

Content Management System API using Node+Typescript. Based on Koa, GraphQL and Sequelize.

## Endpoints

### `/gql`

GraphQL endpoint, that allows the following queries:

#### posts

```js
{
    posts {
        id,title,createdAt,updatedAt
    }
}
```

#### users

```js
{
    users {
        id,name,username,createdAt,updatedAt
    }
}
```
