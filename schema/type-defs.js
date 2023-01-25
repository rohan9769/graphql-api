const {gql} = require('apollo-server')

const typeDefs = gql`

    type User{
        id:ID!
        name:String!
        username:String!
        age:Int!
        nationality:Nationality!
    }

    type Query{
        users:[User! ]!
\    }
    
    enum Nationality{
        CANADA
        BRAZIL
        INDIA
        GERMANY
        CHILE
    }
`;


module.exports = {typeDefs}