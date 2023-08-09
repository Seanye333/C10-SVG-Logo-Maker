// Create object 
class Circle {
    // Initialize Color property of the object to an empty string 
    constructor() {
      this.color = "";
    }
  
    // Set property of the object to the value provided as the color parameter 
    setColor(color) {
      this.color = color;
    }
  
    // Return a string contating SVG markup for a circle 
    render() {
      return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
  }
  
  module.exports = {
    Circle,
    // Define Triangle and Square classes similarly
  };
  
  // Create object 
class Triangle {
    // Initialize Color property of the object to an empty string 
    constructor() {
      this.color = "";
    }
  
    // Set property of the object to the value provided as the color parameter 
    setColor(color) {
      this.color = color;
    }
  
    // Return a string contating SVG markup for a trangle 
    render() {
      return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
  }
  
  module.exports = {
    Triangle,
    // Define Triangle and Square classes similarly
  };
  
  // Create object 
class Square {
    // Initialize Color property of the object to an empty string 
    constructor() {
      this.color = "";
    }
  
    // Set property of the object to the value provided as the color parameter 
    setColor(color) {
      this.color = color;
    }
  
    // Return a string contating SVG markup for a Square 
    render() {
      return `<Square cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
  }
  
  module.exports = {
    Square,
    // Define Triangle and Square classes similarly
  };
  