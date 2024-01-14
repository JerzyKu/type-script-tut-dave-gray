// Index Signatures

// interface TransactionObj {
//   [index: string]: number // index or key
// }

// interface TransactionObj {
//   Pizza: number,
//   Books: number,
//   Job: number,
// }
interface TransactionObj {
  readonly [index: string]: number; // index or key
  Pizza: number;
  Books: number;
  Job: number;
}

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
};

console.log(todaysTransactions.Books);
console.log(todaysTransactions["Books"]);

let prop: string = "Pizza";

console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObj): number => {
  let total: number = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};

console.log(todaysNet(todaysTransactions));
console.log(todaysTransactions["Dave"]);

///////////////////////////////////////////////////////////////////////

interface Student {
  // [index: string]: number | string | number[] | undefined
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "Dug",
  GPA: 3.5,
  classes: [100, 200],
};

// console.log(student.test);

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]} `);
}

Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]);
});

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student, "name");

///////////////////////////////

// interface Incomes {
//   [key: string] : number
// }

type Streams = "salary" | "bonus" | "sidehustle";

type Incomes = Record<Streams, number>;

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250 
}

for ( const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes]);
  
}