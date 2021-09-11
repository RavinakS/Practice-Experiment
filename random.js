function get_random (list) {
  a = Math.random();
  console.log(a);
  c = a * 6;
  console.log(c);
  b = Math.floor(a)
  return list[b];
  }
  
  
// console.log(get_random([2,3,5]));
console.log(get_random(["Ravina", "Kumari", "Singh", "Mohamari", "Kishanganj"]));