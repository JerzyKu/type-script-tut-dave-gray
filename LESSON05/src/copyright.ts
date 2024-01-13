// orgional js
// const year = document.getElementById('year')
// const thisYear = new Date().getFullYear()
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear

// my solution
// const year = <HTMLElement>document.getElementById('year')
// const thisYear = String(new Date().getFullYear())
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear

// 1st variation
// let year: HTMLElement | null
// year = document.getElementById('year')
// let thisYear: string = String(new Date().getFullYear())
// if (year){
//     year.setAttribute("datetime", thisYear)
//     year.textContent = thisYear
// }

// 2st variation
const year = document.getElementById("year") as HTMLSpanElement;
const thisYear: string = String(new Date().getFullYear());
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
