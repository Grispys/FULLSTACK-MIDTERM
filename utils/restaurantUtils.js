const { Dishes, Cuisines, Restaurants } = require("./data");

/**
 * Generates a random menu item based on a given cuisine.
 * @param {string} cuisine - The desired cuisine for the menu item.
 * @returns {*} A random menu item with a name, description, price, and special status.
 */
function generateRandomMenuItem(cuisine) {
  switch(cuisine) {
    case "italian":
      var dailySpecialDecider = Math.floor(Math.random() * 2)
      var style = Dishes["italian"]
      var index = Math.floor(Math.random()*style.length)
      var dish = style[index]
      console.log(dish, dailySpecialDecider)
      break;
    case "indian":
      var dailySpecialDecider = Math.floor(Math.random() * 2)
      var style = Dishes["indian"]
      var index = Math.floor(Math.random()*style.length)
      var dish = style[index]
      console.log(dish, dailySpecialDecider)
      break;
    case "mexican":
      var dailySpecialDecider = Math.floor(Math.random() * 2)
      var style = Dishes["mexican"]
      var index = Math.floor(Math.random()*style.length)
      var dish = style[index]
      console.log(dish, dailySpecialDecider)
      break;
    case "chinese":
      var dailySpecialDecider = Math.floor(Math.random() * 2)
      var style = Dishes["chinese"]
      var index = Math.floor(Math.random()*style.length)
      var dish = style[index]
      console.log(dish, dailySpecialDecider)
      break;
    case "vegan":
      var dailySpecialDecider = Math.floor(Math.random() * 2)
      var style = Dishes["vegan"]
      var index = Math.floor(Math.random()*style.length)
      var dish = style[index]
      console.log(dish, dailySpecialDecider)
      break;
    default:
  } 
}

generateRandomMenuItem('mexican')

/**
 * Selects a random cuisine type for a restaurant.
 * @returns {*} A random cuisine type.
 */
function selectRandomCuisine() {
  var todayCuisine = Cuisines[Math.floor(Math.random()*Cuisines.length)]
  return todayCuisine;
}

/**
 * Generates a menu for a restaurant, including a random cuisine type and a list of menu items.
 * @returns {*} An object representing the restaurant's menu, including the cuisine type and items.
 */
function generateMenu() {

}

/**
 * Additional utility functions can be defined here if needed.
 */

module.exports = { generateRandomMenuItem, selectRandomCuisine, generateMenu };
