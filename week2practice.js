let numberVar = 1.337;
let stringVar = "computers are cool";
numberVar.toString();
console.log(numberVar.toFixed(2));
console.log(stringVar.length);
console.log(stringVar.slice(0, 9));
console.log(stringVar.replace("cool", "uncool"));
console.log(stringVar.toUpperCase());
console.log(stringVar.toLowerCase());
console.log(stringVar.charAt(8));
/*----------------*/
let book1 = {
  title: "Turbo C++",
  author: "Robert Lafore",
  year: 1995,
};
console.log(book1);
book1.title = "OOPs with C++";
book1.year = 1997;
console.log(book1);
