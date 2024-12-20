const Restaurants = [
    {
        name: 'The Gourmet Bistro',
        id: 'the-gourmet-bistro',
    },
    {
        name: 'Spicy Kitchen',
        id: 'spicy-kitchen',
    },
    {
        name: 'Healthy Eats',
        id: 'healthy-eats',
    },
    {
        name: 'Comfort Diner',
        id: 'comfort-diner',
    },
    {
        name: 'Sweet Tooth Bakery',
        id: 'sweet-tooth-bakery',
    },
];

const Cuisines = [
    'italian',
    'indian',
    'chinese',
    'vegan',
    'mexican',
];

//Dishes generated courtesy of ChatGPT, I have absolutely no idea if these are real dishes, or if the descriptions are correct.
// you said you wanted dishes to have prices so courtesy of ChatGPT i had them added here ;)
const Dishes = {
    'italian': [
        { name: 'Spaghetti Carbonara', description: 'Classic Roman pasta with eggs, cheese, pancetta, and pepper.', price: 14.99 },
        { name: 'Margherita Pizza', description: 'Simple pizza topped with tomato, mozzarella, and fresh basil.', price: 12.49 },
        { name: 'Lasagna', description: 'Layers of pasta with meat sauce, béchamel, and cheese.', price: 15.99 },
        { name: 'Risotto', description: 'Creamy Arborio rice cooked with broth, flavored with saffron.', price: 18.79 },
        { name: 'Tiramisu', description: 'Coffee-flavored dessert with layers of mascarpone and cocoa.', price: 8.99 },
        { name: 'Penne Arrabbiata', description: 'Pasta in a spicy tomato sauce with garlic and chili.', price: 13.49 },
        { name: 'Fettuccine Alfredo', description: 'Creamy pasta dish with butter and Parmesan cheese.', price: 14.49 },
        { name: 'Bruschetta', description: 'Toasted bread topped with diced tomatoes, garlic, and basil.', price: 7.99 },
        { name: 'Caprese Salad', description: 'Fresh mozzarella, tomatoes, and basil drizzled with balsamic.', price: 9.49 },
        { name: 'Gnocchi', description: 'Soft potato dumplings served with various sauces.', price: 13.99 },
        { name: 'Feast of a God', description: 'The virgin firstborn of a widow, flayed. Jesus wept.', price: 21.99 },
        { name: 'Osso Buco', description: 'Braised veal shanks cooked with vegetables and broth.', price: 19.99 },
        { name: 'Ribollita', description: 'Tuscan soup made with bread, beans, and vegetables.', price: 9.49 },
        { name: 'Bolognese Sauce', description: 'Rich meat sauce made with ground beef, tomatoes, and herbs.', price: 12.99 },
        { name: 'Arancini', description: 'Fried rice balls filled with cheese or meat.', price: 10.49 },
        { name: 'Panna Cotta', description: 'Creamy dessert made with sweetened cream thickened with gelatin.', price: 8.49 },
        { name: 'Saltimbocca', description: 'Veal wrapped in prosciutto and sage, cooked in white wine.', price: 20.49 },
        { name: 'Focaccia', description: 'Flat oven-baked bread topped with herbs and olive oil.', price: 7.49 },
        { name: 'Cioppino', description: 'Seafood stew made with fish, shellfish, and tomato broth.', price: 18.99 },
        { name: 'Cacciucco', description: 'Tuscan fish stew with various seafood and bread.', price: 17.99 },
    ],
    'chinese': [
        { name: 'Sweet and Sour Pork', description: 'Pork cooked in a tangy sweet and sour sauce.', price: 12.99 },
        { name: 'Kung Pao Chicken', description: 'Spicy stir-fried chicken with peanuts and vegetables.', price: 13.49 },
        { name: 'Spring Rolls', description: 'Crispy rolls filled with vegetables and sometimes meat.', price: 7.99 },
        { name: 'Peking Duck', description: 'Crispy-skinned duck served with pancakes and hoisin sauce.', price: 19.99 },
        { name: 'Mapo Tofu', description: 'Spicy tofu dish with minced meat and chili bean paste.', price: 11.99 },
        { name: 'Chow Mein', description: 'Stir-fried noodles with vegetables and meat or tofu.', price: 10.99 },
        { name: 'Dumplings', description: 'Stuffed dough pockets, steamed or fried, often filled with meat or vegetables.', price: 8.99 },
        { name: 'Hot Pot', description: 'Dish where ingredients are cooked in a simmering pot of broth at the table.', price: 18.49 },
        { name: 'Fried Rice', description: 'Stir-fried rice with vegetables, eggs, and choice of meat.', price: 9.99 },
        { name: 'Egg Foo Young', description: 'Omelet filled with vegetables and meat, served with gravy.', price: 8.49 },
        { name: 'Char Siu', description: 'Cantonese roasted pork with a sweet and savory glaze.', price: 13.99 },
        { name: 'Wonton Soup', description: 'Soup with wontons filled with meat or shrimp.', price: 7.99 },
        { name: 'Ma Po Tofu', description: 'Tofu in a spicy sauce with minced meat and scallions.', price: 11.99 },
        { name: 'Szechuan Pepper Chicken', description: 'Spicy chicken stir-fried with Szechuan peppercorns.', price: 13.49 },
        { name: 'Beef and Broccoli', description: 'Stir-fried beef with broccoli in a savory sauce.', price: 12.49 },
        { name: 'Sesame Chicken', description: 'Fried chicken in a sweet sesame sauce.', price: 12.99 },
        { name: 'Mongolian Beef', description: 'Beef stir-fried with green onions and soy sauce.', price: 14.49 },
        { name: 'Chili Garlic Shrimp', description: 'Shrimp cooked with garlic and chili sauce.', price: 17.49 },
        { name: 'Buddha Bowl', description: 'Healthy bowl with grains, vegetables, and proteins.', price: 11.99 },
    ],
    'vegan': [
        { name: 'Chickpea Salad', description: 'Fresh salad with chickpeas, tomatoes, and cucumber.', price: 9.99 },
        { name: 'Vegan Tacos', description: 'Tacos filled with seasoned lentils and avocado.', price: 10.99 },
        { name: 'Quinoa Bowl', description: 'Healthy bowl with quinoa, veggies, and tahini dressing.', price: 11.49 },
        { name: 'Cauliflower Wings', description: 'Spicy baked cauliflower florets served with dipping sauce.', price: 9.49 },
        { name: 'Vegan Burger', description: 'Plant-based burger served with lettuce and tomato.', price: 10.99 },
        { name: 'Lentil Soup', description: 'Hearty soup made with lentils, vegetables, and spices.', price: 8.99 },
        { name: 'Stuffed Bell Peppers', description: 'Bell peppers filled with quinoa, beans, and vegetables.', price: 11.49 },
        { name: 'Zucchini Noodles', description: 'Spiralized zucchini tossed with marinara sauce.', price: 9.49 },
        { name: 'Falafel Wrap', description: 'Falafel balls wrapped in pita with lettuce and tahini sauce.', price: 8.99 },
        { name: 'Vegan Pad Thai', description: 'Stir-fried rice noodles with vegetables and peanuts.', price: 11.99 },
        { name: 'Avocado Toast', description: 'Toasted bread topped with smashed avocado and seasonings.', price: 7.99 },
        { name: 'Coconut Curry', description: 'Creamy curry made with coconut milk and vegetables.', price: 12.99 },
        { name: 'Vegan Mac and Cheese', description: 'Creamy pasta dish made with cashew cheese.', price: 10.49 },
        { name: 'Chia Seed Pudding', description: 'Pudding made with chia seeds and almond milk.', price: 7.99 },
        { name: 'Roasted Veggie Bowl', description: 'Bowl with roasted seasonal vegetables and grains.', price: 12.49 },
        { name: 'Banana Pancakes', description: 'Fluffy pancakes made with ripe bananas and oats.', price: 9.99 },
        { name: 'Peanut Butter Banana Smoothie', description: 'Smoothie made with banana and peanut butter.', price: 8.49 },
        { name: 'Tofu Stir-fry', description: 'Stir-fried tofu with vegetables and soy sauce.', price: 10.99 },
        { name: 'Ratatouille', description: 'Stewed vegetable dish with zucchini, eggplant, and tomato.', price: 11.99 },
    ],
    'mexican': [
        { name: 'Tacos al Pastor', description: 'Tacos filled with marinated pork and pineapple.', price: 12.49 },
        { name: 'Guacamole', description: 'Creamy avocado dip served with tortilla chips.', price: 7.99 },
        { name: 'Chiles en Nogada', description: 'Stuffed peppers topped with walnut sauce.', price: 13.99 },
        { name: 'Tamales', description: 'Corn dough filled with meat and wrapped in corn husks.', price: 10.49 },
        { name: 'Mole Poblano', description: 'Rich sauce made with chocolate and spices, served over chicken.', price: 14.99 },
        { name: 'Pozole', description: 'Hominy soup with pork, radishes, and lime.', price: 9.99 },
        { name: 'Enchiladas', description: 'Tortillas filled with meat or cheese, topped with sauce.', price: 11.49 },
        { name: 'Quesadillas', description: 'Grilled tortillas filled with cheese and other ingredients.', price: 9.99 },
        { name: 'Sopa de Tortilla', description: 'Soup made with fried tortilla strips and tomatoes.', price: 8.99 },
        { name: 'Elote', description: 'Grilled corn topped with mayonnaise, cheese, and chili powder.', price: 4.99 },
        { name: 'Carne Asada', description: 'Grilled beef served with rice, beans, and tortillas.', price: 14.99 },
        { name: 'Tostadas', description: 'Crispy tortillas topped with beans, meat, and lettuce.', price: 10.99 },
        { name: 'Churros', description: 'Fried dough pastry coated in sugar and cinnamon.', price: 5.99 },
        { name: 'Sopes', description: 'Thick corn cakes topped with beans and meat.', price: 9.49 },
        { name: 'Flan', description: 'Creamy caramel dessert with a rich custard base.', price: 6.49 },
        { name: 'Ceviche', description: 'Fresh seafood marinated in lime juice with onions and cilantro.', price: 12.99 },
        { name: 'Horchata', description: 'Sweet rice milk drink flavored with cinnamon.', price: 3.49 },
        { name: 'Tacos de Birria', description: 'Tacos filled with slow-cooked beef and served with broth.', price: 13.49 },
        { name: 'Tres Leches Cake', description: 'Moist sponge cake soaked in three kinds of milk.', price: 6.99 },
        { name: 'Fajitas', description: 'Sizzling grilled meat served with peppers and onions.', price: 14.49 },
    ],
    'indian': [
        { name: 'Chicken Tikka Masala', description: 'Grilled chicken in a creamy tomato sauce.', price: 13.99 },
        { name: 'Butter Chicken', description: 'Rich and creamy tomato-based chicken curry.', price: 12.99 },
        { name: 'Palak Paneer', description: 'Spinach and cottage cheese cooked in a spiced gravy.', price: 11.99 },
        { name: 'Biryani', description: 'Fragrant rice cooked with spices and chicken or vegetables.', price: 14.49 },
        { name: 'Samosa', description: 'Crispy pastry filled with spiced potatoes and peas.', price: 5.99 },
        { name: 'Rogan Josh', description: 'Lamb curry cooked in a red, spiced sauce.', price: 16.99 },
        { name: 'Chana Masala', description: 'Chickpeas cooked in a spiced tomato sauce.', price: 9.99 },
        { name: 'Aloo Gobi', description: 'Potatoes and cauliflower cooked with spices.', price: 10.99 },
        { name: 'Naan', description: 'Soft, fluffy flatbread cooked in a tandoor.', price: 2.99 },
        { name: 'Gulab Jamun', description: 'Sweet fried dough balls soaked in sugar syrup.', price: 6.49 },
        { name: 'Paneer Butter Masala', description: 'Cottage cheese cooked in a creamy tomato sauce.', price: 11.99 },
        { name: 'Dal Tadka', description: 'Lentils cooked with spices and tempered with ghee.', price: 8.99 },
        { name: 'Tandoori Chicken', description: 'Chicken marinated in yogurt and spices, cooked in a tandoor.', price: 12.99 },
        { name: 'Lassi', description: 'Yogurt-based drink, sweet or salty.', price: 3.99 },
        { name: 'Masala Dosa', description: 'Rice and lentil crepe filled with spiced potatoes.', price: 7.99 },
        { name: 'Pani Puri', description: 'Crispy shells filled with spiced water and potatoes.', price: 4.99 },
        { name: 'Malai Kofta', description: 'Fried dumplings of vegetables and paneer in a creamy sauce.', price: 12.49 },
        { name: 'Bhindi Masala', description: 'Spiced okra cooked with onions and tomatoes.', price: 9.99 },
        { name: 'Mango Kulfi', description: 'Creamy frozen dessert made with mango and milk.', price: 6.99 },
        { name: 'Kheer', description: 'Rice pudding flavored with cardamom and topped with nuts.', price: 5.99 },
    ],
};


module.exports = {
    Cuisines,
    Dishes,
    Restaurants,
}