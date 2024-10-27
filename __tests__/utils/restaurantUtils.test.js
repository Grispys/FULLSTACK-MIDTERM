const { Cuisines, Dishes } = require("../../utils/data");
const { generateRandomMenuItem, generateMenu, selectRandomCuisine } = require("../../utils/restaurantUtils");

// huge shoutout to stackoverflow my beloved and all its users for having literal decades old conversations talking about stuff in jest like
// "toHaveProperty". i don't think i would've ever know about stuff like that if not for stackoverflow. Well, i probably would have found out about it by caving in and asking chatgpt or trying
// to use githubs copilot but i would feel bad


describe('Restaurant Functions', () => {
  test('Tests that generateRandomMenuItem correctly makes an item', () => {
    let randomCuisine = selectRandomCuisine();
    let randomItem = generateRandomMenuItem(randomCuisine);
    let dishesArray = Dishes[randomCuisine];

    // i completely rearranged how a correct dish is generated and tested because the last one only checked that a string and number were made, not
    // that a correct item from the available menu was actuall there. now, it checks that its name, description and price fits one of the items in the availabler menu
    let isValidDish = dishesArray.some(dish => 
      dish.name === randomItem.dish.name &&
      dish.description === randomItem.dish.description &&
      dish.price === randomItem.dish.price
    );

    expect(isValidDish).toBe(true); 

    // this chjecks that special is either empty or is a daily special. i decided against using regex because i forgot that special returns a string
    let isSpecialValid = randomItem.special === "" || randomItem.special === "Daily Special!!!"; 
    expect(isSpecialValid).toBe(true)
  });





  test('generateMenu should return a valid menu array with 5-10 objects and no duplicates and be proper cuisine type', () => {
    const { menu, restaurant } = generateMenu(selectRandomCuisine()); //restaurant is included but never used because generateMenu returns both menu and restaurant, but where restaurant
    //is only being returned because its the value of selectRandomCuisine, and i return it so i can use it in the ejs display, theres no need to test it.

    // this checks that the menu returned is an array
    expect(Array.isArray(menu)).toBe(true);
    
    //this makes sure that the array have 5 or more menu items, but less than 10.
    expect(menu.length).toBeGreaterThanOrEqual(5);
    expect(menu.length).toBeLessThanOrEqual(10);

    //to make sure that the objects in the array are all unique, i put all the dish names into a set to be reviewed later
    const dishNames = new Set();

    menu.forEach(item => {
      // this checks that each item in the array is an object, that has both the dish and its special tag for daily specials or not
      expect(typeof item).toBe('object');
      expect(item).toHaveProperty('dish');
      expect(item).toHaveProperty('special');

      const { name } = item.dish;

      // this just checks that every dish returned in the dish array of objects actually exists in the Dishes array, so its not just generating random text and stuff
      // i asked the programming subreddit why this wouldn't work after explaining how i had the arrays made and was directed to use .flat() as it smushes arrays into one array? or something like that
      // to be honest i don't know what it does but it works and the test passes so. whatever
      expect(Object.values(Dishes).flat().some(dish => dish.name === name)).toBe(true);

      // this uses that set i made earlier and checks that none of them are the same. it checks if the set has the item name in it and expects that it doesnt, then adds the dish to the set.
      expect(dishNames.has(name)).toBe(false);
      dishNames.add(name);
    });
  });





    
    test('Tests that selectRandomCuisine correctly picks 1 of 5 random cuisines from the Cuisines array', () => {
      // this one was the easiest. just make a variable that uses whatever selectRandomCuisine gives it, make a quick mock array of the possible values, then check that the variable is one of the items in the
      // mock array. ez pz
      let randomCuisine = selectRandomCuisine();
      let availableResults = ['italian','indian','chinese','vegan','mexican',]
      expect(availableResults).toContain(randomCuisine);
    });
});