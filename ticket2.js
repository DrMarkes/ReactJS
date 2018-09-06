class Figure {

  constructor(input) {
  	this.input = input;
  }
  
  getName() {
  	return '';
  }
  
  calculateArea() {}
  
  calculate() {
  	return {
      area: this.calculateArea(),
      figure: this.getName(),
      input: this.input,
    };
  }
}

class CircleFigure extends Figure {
	
  calculateArea() {
  	const { radius } = this.input;
  	return Math.PI * Math.pow(radius, 2);
  }
  
  getName() {
  	return 'Circle';
  }
}

class RectangleFigure extends Figure {

  calculateArea() {
  	const { width, height } = this.input;
  	return width * height;
  }
  
  getName() {
  	return 'Rectangle';
  }
}

const createFigure = (input) => {
  if ('width' in input && 'height' in input) {
  	return new RectangleFigure(input);
  }
  if ('radius' in input) {
  	return new CircleFigure(input);
  }
};

const calculateArea = (input) => {
  const figure = createFigure(input);
  return figure.calculate();
};

console.log(calculateArea({ radius: 5}));
console.log(calculateArea({ width: 5, height: 10 }));
