import { gql } from "apollo-server-koa";

export default gql`
    type Post {
        id: Int!,
        title: String!
        author: User
        createdAt: Date!,
        updatedAt: Date
    }
`