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
 
class Square {
    constructor() {
      this.color = "";
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`;
    }
  }
  
class Triangle {
    constructor() {
      this.color = "";
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      return `<polygon points="150,50 100,150 200,150" fill="${this.color}" />`;
    }
  }
  
module.exports = {
    Circle,
    Square,
    Triangle,
};
  
 