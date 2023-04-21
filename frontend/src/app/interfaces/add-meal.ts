export interface AddMeal {
  mealName: String,
  meal: any[],
    // carbs : ["rice", "potatoes", "sweet potato" ,"oats" ]
    // vegetables: ["zucchini", "pea" ,"okra", "green beans","broccoli" ]
    // protein : ["meat", "chicken", "fish" ,"tuna fish","egg"]

  mealCatogery: String,     // "breakfast" , "launch" , "dinner"
  content: String,
  image: String,
  price: String,
}
