let hamster = {
    stomach: [],
    eat(food) {
      this.stomach.push(food);
    },
  };
  let speedy = {
    proto: hamster,
    stomach : []
  };
  let lazy = {
    proto: hamster,
    stomach : []
  };
  
  speedy.eat("apple");
  lazy.eat("banana");
  alert(speedy.stomach); // apple
  alert(lazy.stomach);