const MenuItemType = {
  APPETIZER: "APPETIZER",
  ENTREE: "ENTREE",
  SUSHI: "SUSHI",
  ROLL: "ROLL",
};

const menuItems = [
  {
    type: MenuItemType.APPETIZER,
    name: "Miso",
    description: "Soup mix straight from the box - yum!",
    price: 3.99,
  },
  {
    type: MenuItemType.APPETIZER,
    name: "Gyoza",
    description: "Six frozen gyoza thawed in warm water",
    price: 5.99,
  },
  {
    type: MenuItemType.APPETIZER,
    name: "Yudofu",
    description: "Succulent tofu in perfectly seasoned warm water.",
    price: 7.99,
  },
  {
    type: MenuItemType.APPETIZER,
    name: "Shrimp Tempura",
    description: "Six jumbo shrimp with assorted steamed vegetables.",
    price: 8.99,
  },
  {
    type: MenuItemType.APPETIZER,
    name: "Edamame",
    description: "Olive oil and sea salt - simplicity at its finest",
    price: 3.5,
  },
  {
    type: MenuItemType.ENTREE,
    name: "Spicy Spicy Ramen",
    description: "Good luck surviving this bowl of lava",
    price: 14.99,
  },
  {
    type: MenuItemType.ENTREE,
    name: "Chicken Teriyaki",
    description: "Savoury chicken marinated in our homemade teriyaki sauce",
    price: 11.5,
  },
  {
    type: MenuItemType.ENTREE,
    name: "Chicken Stir Fry",
    description:
      "Because you're too lazy to make it at home, we'll do it for you",
    price: 9.49,
  },
  {
    type: MenuItemType.SUSHI,
    name: "Nigiri",
    description: "12 pieces of your choice Sake, Ahi, Ebi",
    price: 25.0,
  },
  {
    type: MenuItemType.SUSHI,
    name: "Sashimi",
    description: "Twenty pieces of the finest sliced fish you've ever tasted",
    price: 39.99,
  },
  {
    type: MenuItemType.ROLL,
    name: "California",
    description: "Better than your typical grocery store variety",
    price: 5.99,
  },
  {
    type: MenuItemType.ROLL,
    name: "Cucumber",
    description: "Gotta have a veggie option, here ya go",
    price: 4.99,
  },
  {
    type: MenuItemType.ROLL,
    name: "Firery Dragon",
    description: "Eel, crab, avocado, cucumber, eel sauce and lots of sriracha",
    price: 8.99,
  },
  {
    type: MenuItemType.ROLL,
    name: "Spicy Tuna",
    description: "The classic tuna with spicy mayo",
    price: 7.99,
  },
  {
    type: MenuItemType.ROLL,
    name: "Rainbow",
    description: "A colorful piece of art worthy of your instagram grid",
    price: 8.99,
  },
];

const appetizersContainer = document.querySelector(".appetizers-container");
const entreesContainer = document.querySelector(".entrees-container");
const sushiContainer = document.querySelector(".sushi-container");
const rollsContainer = document.querySelector(".rolls-container");
menuItems.forEach((menuItem) => {
  const newItem = document.createElement("menu-item");
  newItem.setAttribute("name", menuItem.name);
  newItem.setAttribute("description", menuItem.description);
  newItem.setAttribute("price", `$${menuItem.price.toFixed(2)}`);

  switch (menuItem.type) {
    case MenuItemType.APPETIZER:
      appetizersContainer.append(newItem);
      break;
    case MenuItemType.ENTREE:
      entreesContainer.append(newItem);
      break;
    case MenuItemType.SUSHI:
      sushiContainer.append(newItem);
      break;
    case MenuItemType.ROLL:
      rollsContainer.append(newItem);
    default:
      return;
  }
});
