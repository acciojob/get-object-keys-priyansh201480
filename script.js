// Define the student object with a name property
const student = {
  name: 'John Doe'
};

// Add getKeys method to Object prototype
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Use the getKeys method on the student object
const keys = student.getKeys();
console.log(keys); // Output: ['name']

