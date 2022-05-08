// let date = new Date();
// let hour = 0;
// let ampm = 0;

// if (date.getHours() > 12) {
//   hour = 12 - date.getHours;
//   ampm = PM;
// } else {
//   hour = date.getHours;
//   ampm = AM;
// }

// console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);

const studentInfo = [
  {
    sName: "Nihal",
    roll: 10,
    class: "Five",
    gpa: 4.28,
    cpga: 3.75,
    grade: "A",
  },
  {
    sName: "Hossain",
    roll: 12,
    class: "Five",
    gpa: 3.5,
    cpga: 3.5,
    grade: "A-",
  },
  {
    sName: "Tahir",
    roll: 1,
    class: "Five",
    gpa: 5,
    cpga: 4,
    grade: "A+",
  },
  {
    sName: "Rahim",
    roll: 16,
    class: "Five",
    gpa: 3.31,
    cpga: 3,
    grade: "B",
  },
  {
    sName: "Karim",
    roll: 9,
    class: "Five",
    gpa: 4.21,
    cpga: 3.75,
    grade: "A",
  },
];
studentInfo.sort().map((data) => {
  console.log(`Name:${data.sName} ===== GPA: ${data.gpa}`);
});
console.log(`

`);
studentInfo.sort().map((data) => {
  console.log(`Name:${data.sName} ===== GPA: ${data.cpga}`);
});
console.log(`

`);
studentInfo.sort().map((data) => {
  console.log(`Name:${data.sName} ===== GPA: ${data.grade}`);
});
