const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        username: String
        email: String
        password: String
    }

    type Book {
        description: String
        bookId: String
        image: String
        title: String
    }

    type Query {
        user: [User]
        book: [Book]
    }
`;
module.exports = typeDefs;
