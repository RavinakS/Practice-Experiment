function get_random (list) {
    return list[Math.floor((Math.random()*list.length))];
  }
  
  
console.log(get_random([2,3,5]));