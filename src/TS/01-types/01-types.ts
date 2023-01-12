// ------------------------------- 01 EX -------------------------------
export let age: number = 50;
let name: string = "Max";
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback: (a: number) => number = (a) => {
  return 100 + a;
};

// ------------------------------- 02 EX -------------------------------
let anything: any = -20;
anything = "Text";
anything = {};

// ------------------------------- 03 EX -------------------------------
let some: unknown;
some = "Text";

let str: string;

if (typeof some === "string") str = some;

// ------------------------------- 04 EX -------------------------------
let person: [string, number] = ["Max", 21];

// ------------------------------- 05 EX -------------------------------
enum loadingIndicator {
  LOADING,
  READY,
}

const page = {
  load: loadingIndicator.READY,
};

if (page.load === loadingIndicator.LOADING) {
  console.log("Сторінка завантажується");
}
if (page.load === loadingIndicator.READY) {
  console.log("Сторінка завантажена");
}

// ------------------------------- 06 EX -------------------------------
let myUnion: number | string = 123;
myUnion = "Hello";

// ------------------------------- 07 EX -------------------------------
let myLiteral: "enable" | "disable";
myLiteral = "enable";
myLiteral = "disable";

// ------------------------------- 08 EX -------------------------------
function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

// ------------------------------- 09 EX -------------------------------
type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: string;
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};

const page1: Page = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: Page = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
