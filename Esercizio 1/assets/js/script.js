class Person {
    constructor(_name, _age) {
      this.name = _name;
      this.age = _age;
    }
    comparison(other) {
      if ((this.age) > (other.age)) {
        return `${this.name} è più grande di ${other.name}`;
      } else if ((this.age) < (other.age)) {
        return `${this.name} è più giovane di ${other.name}`;
      } else {
        return `${this.name} ha la stessa età di ${other.name}`;
      }
    }
  }
  var person1 = new Person('Paolo', 30);
  var person2 = new Person('Luca', 21);
  var person3 = new Person('Mario', 21);
  
  console.log(person3.comparison(person1));//più piccolo di
  console.log(person1.comparison(person2));//più grande di
  console.log(person2.comparison(person3));//stessa età