const formatString = (input: string, toUpper: boolean = true): string => {
  return toUpper ? input.toUpperCase() : input.toLowerCase();
};

type TItems = {
  title: string;
  rating: number;
}[];
const filterByRating = (items: TItems): TItems => {
  return items.filter((item) => item.rating >= 4);
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  const newArr: T[] = [];
  return newArr.concat(...arrays);
};

class Vehicle {
  private make: string;
  private year: number;
  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
  getInfo() {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}
class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }
  getModel() {
    return `Model: ${this.model}`;
  }
}

const processValue = (value: number | string) => {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
};

interface Product {
  name: string;
  price: number;
}
const getMostExpensiveProduct = (products: Product[]): Product | null => {
  if (products.length === 0) {
    return null;
  } else {
    return products.reduce((max, current) => {
      return current.price > max.price ? current : max;
    });
  }
};

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
const getDayType = (day: Day): string => {
  if (day === 0) {
    return "Weekday";
  }
  if (day === 6) {
    return "Weekend";
  } else {
    return "Not weekday or weekend";
  }
};

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if (n >= 0) {
      setTimeout(() => {
        resolve(n * n);
      }, 1000);
    } else {
      reject("Negative value is not allowed");
    }
  });
}
