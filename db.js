module.exports =() => {


const products = require('./products.json')
const carts = require('./carts.json')
const recipes = require('./recipes.json')
const users = require('./users.json')
const posts = require('./posts.json')
const comments = require('./comments.json')
const todos = require('./todos.json')
const quotes = require('./quotes.json')

return {
	products,carts,recipes,users,posts,comments,todos,quotes
}
}