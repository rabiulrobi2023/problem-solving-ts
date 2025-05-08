const formatString = (input: string, toUpper: boolean = true): string => {
  return toUpper ? input.toUpperCase() : input.toLowerCase();
};

//**************************************************************************************

type TItems = {
  title: string;
  rating: number;
}[];

const filterByRating = (items: TItems): TItems => {
  const filter = items.filter((item) => item.rating >= 4);
  return filter;
};

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

//*****************************************************************************************

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  const newArr: T[] = [];
  return newArr.concat(...arrays);
};

const x = concatenateArrays([1, 2], [3, 4], [5]);

//*****************************************************************************************

class Vehicle {
  private make: string;
  public year: number;
  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
  getInfo() {
    return `"Make: ${this.make}, Year: ${this.year}"`;
  }
}

class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }
  getModel() {
    return `"Model: ${this.model}"`;
  }
}
// const myCar = new Car("Toyota", 2020, "Corolla");
// console.log(myCar.getInfo());   
// console.log(myCar.getModel());  

//*****************************************************************************************
