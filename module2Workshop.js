//constructor function for employees
function Employee(id, firstname, lastname, gender, age, position) {
  this.id = id;
  this.firstname = firstname;
  this.lastname = lastname;
  this.gender = gender;
  this.age = age;
  this.position = position;
  this.logFullName = function () {
    return this.firstname + " " + this.lastname;
  };
}
//constructor function for sales
function Sale(staffId, item, price, date) {
  this.staffId = staffId;
  this.item = item;
  this.price = price;
  this.date = date;
}

let joannaBates = new Employee(
  30,
  "Joanna",
  "Bates",
  "Female",
  42,
  "Salesperson"
);

let gamingPCSale = new Sale(30, "Gaming PC", 1700, "01-11-2023");
console.log(
  joannaBates.age,
  joannaBates.position,
  joannaBates.firstname + " " + joannaBates.lastname
);
console.log(gamingPCSale.item, gamingPCSale.price);

let monitorSale = new Sale(30, "4KMonitor", 1100, "10-11-2023");
let sales = [monitorSale, gamingPCSale];
console.log(sales[0].price);
console.log(joannaBates.logFullName());
