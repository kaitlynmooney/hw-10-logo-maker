// Shape constructor
class Shape {
  constructor() {
    this.color = "";
  }
  setColor(colorVar) {
    this.color = colorVar;
  }
}

// Circle extends Shape
class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
  }
}

// Square extends Shape
class Square extends Shape {
  render() {
    return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
  }
}

// Triamgle extends Shape
class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

// Export Shapes
module.exports = {Circle, Square, Triangle};
