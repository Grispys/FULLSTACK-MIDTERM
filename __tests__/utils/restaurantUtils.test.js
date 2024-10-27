const { Cuisines, Dishes } = require("../../utils/data");
const { generateRandomMenuItem, generateMenu, selectRandomCuisine } = require("../../utils/restaurantUtils");

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





    describe('generateMenu', () => {
      // Test implementations go here
    });




    
    test('Tests that selectRandomCuisine correctly picks 1 of 5 random cuisines from the Cuisines array', () => {
      let randomCuisine = selectRandomCuisine();
      let availableResults = ['italian','indian','chinese','vegan','mexican',]
      expect(availableResults).toContain(randomCuisine);
    });
});