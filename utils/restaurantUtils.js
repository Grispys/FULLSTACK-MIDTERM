const { Dishes, Cuisines, Restaurants } = require("./data");

/**
 * Generates a random menu item based on a given cuisine.
 * @param {string} cuisine - The desired cuisine for the menu item.
 * @returns {*} A random menu item with a name, description, price, and special status.
 */

// now, you can put a specific cuisine in as the argument for this function, OR you can call selectRandomCuisine.
function generateRandomMenuItem(cuisine) {
  const dailySpecialDecider = Math.floor(Math.random() * 2);
  let style;
// changes dish styles dependant on cuisine wanted
  switch(cuisine) {
    case "italian":
      style = Dishes["italian"];
      break;
    case "indian":
      style = Dishes["indian"];
      break;
    case "mexican":
      style = Dishes["mexican"];
      break;
    case "chinese":
      style = Dishes["chinese"];
      break;
    case "vegan":
      style = Dishes["vegan"];
      break;
    default:
      return null;
  }
// chooses a random item
  const index = Math.floor(Math.random() * style.length);
  const dish = style[index];

  console.log(dish, dailySpecialDecider); 
  return { dish: dish, dailySpecialDecider };
}

// generateRandomMenuItem(selectRandomCuisine())
// generateRandomMenuItem("italian")

/**
 * Selects a random cuisine type for a restaurant.
 * @returns {*} A random cuisine type.
 */
function selectRandomCuisine() {
  var todayCuisine = Cuisines[Math.floor(Math.random()*Cuisines.length)]
  console.log(todayCuisine)
  return todayCuisine
}

/**
 * Generates a menu for a restaurant, including a random cuisine type and a list of menu items.
 * @returns {*} An object representing the restaurant's menu, including the cuisine type and items.
 */
function generateMenu(restaurant) {
  const menu = [];
  // items is 5-10 random entries
  const items = Math.floor(Math.random() * 6) + 5;
// while entries are less than menu size add items
  while (menu.length < items) {
    const menuItem = generateRandomMenuItem(restaurant);
// if items already there then dont put it in
  if (!menuItem || menu.some(existingItem => existingItem.dish === menuItem.dish)) {
    console.log("Already in menu or invalid item:");
  }else{
    menu.push(menuItem);
  }

  }
  
  console.log(menu);
  return menu;
}


/**
 * Additional utility functions can be defined here if needed.
 */

module.exports = { generateRandomMenuItem, selectRandomCuisine, generateMenu };
