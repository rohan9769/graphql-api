const { UserList, MovieList } = require('../FakeData')
const _ = require('lodash')

const resolvers = {
    Query:{
        users(){
            return UserList
        },
        user(parent,args){
            const id = args.id
            const user = _.find(UserList,{id:Number(id)})
            return user
        },
        movies(){
            return MovieList
        },
        movie(parent,args){
            const id = args.id
            const movie = _.find(MovieList,{id:Number(id)})
            return movie
        }
    },

    //Resolver for User
    User:{
        favouriteMovie(){
            return _.filter(MovieList,(movie)=>movie.yearOfPublication>=2000 && movie.yearOfPublication<=2010) // Here we are returning a list of user's favourite movies that has been published between 2000 and 2010
        }
    }
}

module.exports ={resolvers}

