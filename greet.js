function greet(name) {
  return 'Hello, ' + name ;
}

// Returns 'Hello, Bob'
greet("Bob");

// Returns "Hello!"
greet("Sam");

module.exports = function(name){
  return 'Hello, ' + name;
}