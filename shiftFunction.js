let food = ["Fish", "Dessert", "Sweets", "Veg", "nonVeg", "Fish", "Fish", "Ladoo", "Chicken", "Sweets", "chicken", "Burger"]
var count = 0;
for(count; count<food.length; count++){
    var index = count + 1;
    for(index; index<food.length; index++){
        if(food[count] === food[index]){
            food.splice(index, 1);
            index = count+1;
        }
    }
}
console.log(food);