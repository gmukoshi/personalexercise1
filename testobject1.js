// let user ={
//     name :"John",
//     surname :"Smith",
//     name :"Pete",
//     }
//  delete user.name;
// console.log(user.name)
// console.log(user.surname)

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   };
  
//   let sum = 0;
//   for (let key in salaries){
//     sum +=salaries[key];
//   }
//   console.log(sum)

//   let fruits = ["Apple", "Orange", "Pear"];

// const person ={
//   name:{
//     first:"Bob",
//     last :"Smith"
//   },
//   age:32,
//   bio(){
//     console.log(` ${this.name.first} ${this.name.last},is ${this.age}`)
//   },
//   introduceself(){
//     console.log(`Hi i am ${this.name.first}`)
//   }

//   }   

//  person.age = 45;
// person["name"]["last"] = "Cratchit";
//   person.bio();
//   person.introduceself();
//   person["eyes"] = "hazel";
// person.farewell = function () {
//   console.log("Bye everybody!");
// };
// person["eyes"];
// person.farewell();

// const myDataName = "height";
// const myDataValue = "1.75m";
// person[myDataName] = myDataValue;
// person.height;
  
// function createPerson(name) {
//   const obj = {};
//   obj.name = name;
//   obj.introduceSelf = function () {
//     console.log(`Hi! I'm ${this.name}.`);
//   };
//   return obj;
// }

// const salva = createPerson("Salva");
// salva.introduceSelf();
// const frankie = createPerson("Frankie");
// frankie.introduceSelf();

// function Person(name) {
//   this.name = name;
//   this.introduceSelf = function () {
//     console.log(`Hi! I'm ${this.name}.`);
//   };
// }

// const salva = new Person ("Salva");
      //   const circle = {};
      //                circle.radius = 5;
      //     circle["diameter"] = 10;

      //  console.log( circle.circumfrence = circle.diameter *Math.PI);
      //   console.log(circle["area"]= Math.PI*circle.radius**2)
      //   circle;

      function nondestructivelyUpdateObject(obj,key,value){
        const newobj=[...obj];
        newobj[key]= value;
        return newobj;
      }
  
      // const sundayMenu = nondestructivelyUpdateObject(
      //   tuesdayMenu,
      //   "fries",
      //   "Shoestring"
      // );
      
      // console.log(tuesdayMenu.fries);
      // //=> "Sweet potato"
      
      // console.log(sundayMenu.fries);

      const obj = {
        foo: 1,
        get bar() {
          return 2;
        },
      };
      
      let copy = Object.assign({}, obj);
      console.log(copy);


  