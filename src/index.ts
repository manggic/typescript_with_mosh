// type number
let age: number = 30;

// array
let score: number[] = [1, 2, 4, 10];

// enum
const enum Size {
  Small = 5,
  Medium,
  Large,
}

const mySize: Size = Size.Large;
console.log(mySize);

// functions
function calcTax(income: number, taxYear = 2023): number {
  if (income >= 10000) return income * 1.5;
  return income;
}

calcTax(10000);

// object
let employee: {
  readonly id: number;
  name?: string;
  retire: (date: Date) => void;
} = {
  id: 5,
  retire: (date: Date) => console.log(date),
};

// type aliases

type Employee = {
  id: number;
  name?: string;
  retire: (date: Date) => void;
};

let emp: Employee = {
  id: 10,
  retire: (date: Date) => console.log("hello function"),
};

// union
function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === "number") {
    return weight * 2.2;
  }
  return parseInt(weight) * 2.2;
}

// intersection

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// Literal types
type Quantity = 50 | 100;

let quantity: Quantity = 50;

type Metric = "cm" | "inches";




function greet(name: string | null | undefined){
    if(name)
        console.log(`hello ${name}`);
    console.log('Welcome buddy');
        
}
greet(null)
