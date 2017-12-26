//0 TASK
window.House = (function(){   //HOUSE Constructor
                 function House() { 
                    this.windows = "white";
                    this.doors = "brown";
                    this.colorWindows = function (color) {
                        this.windows = color;
                    };
                    this.colorDoors = function (color) {
                        this.doors = color;
                    };
                 };
                 return House; 
               })();

window.Car = (function(){  // CAR constructor
                function Car() {
                    this.model = "a5";
                    this.brand = "audi";
                    this.mileage = "120000 km";
                    this.driver = { 
                        name: "Dmitry",
                        sername: "Shlyahov", 
                        age: "26",
                        changeSername: function (newSername){ //setfunction to change sername of driver
                                       this.sername = newSername;
                                       }
                                  },
                    this.go = function (distance) {
                              console.info("car drove " + distance + " km");
                              return this.mileage = parseFloat(this.mileage) + distance + " km"; //changing mileage of car
                              }
                    };
                    return Car;
                    })();      


//1 TASK
window.Rabbit = (function(){ //RABBIT constructor
                    function Rabbit (color) { 
                        this.color = color;
                    };

                    Rabbit.prototype.changeColor = function (newColor) {
                        this.color = newColor;
                    }
                    return Rabbit;
                })();

var whiteRabbit = new Rabbit('white');
var greyRabbit = new Rabbit('gray');
whiteRabbit.changeColor('gold');
greyRabbit.changeColor('gold');
console.log(whiteRabbit, greyRabbit);

window.Pupil = (function () {
                    function Pupil(name) { //pupil constructor
                        this.name = name;
                        this.evaluation = [];
                    };

                    Pupil.prototype.evaluate =  function (evaluate) {
                        this.evaluation.push(evaluate);
                    };
                    return Pupil;
                })();


window.Horse = (function (){    //HORSE constructor
                    function Horse(name){
                        this.name = name;
                        this.mileage = 0;
                        this.fatigue = 0;
                        this.count = 0;
                    };

                    Horse.prototype = {
                        constructor: Horse,
                        allMileage: 0,
                        run: function (dist) {
                                if(this.count < dist){
                                if(this.fatigue !== 10) {
                                        this.mileage += 1;
                                        Horse.prototype.allMileage += 1;
                                        this.fatigue++;
                                        this.count++;
                                this.run(dist);
                               }
                               if(this.fatigue == 10) {
                                    this.relax(dist, this.run)
                               }
                               if(this.count === dist) {
                                this.count = 0;
                            }
                            }
                            
                            },
                        relax: function (distance, meth) {
                                        this.fatigue = 0;
                                        var ConcreteHorse = this;
                                        setTimeout (function() {
                                            console.log('Horse resting 1 second');
                                            meth.call(ConcreteHorse, distance, meth);
                                            }, 1000)
                                    }
                                }
                              
                              
                    return Horse;
                })();
//////////////////////////////////////
          /*      var a = new Horse(); // testing Horses
                a.run(31); */






window.Shop = (function (){
                    function Shop () {
                        this.stock = {};
                        this.price = {};
                        this.quantityProducts = 0;
                    };
                       
                    Shop.prototype = {
                        constructor: Shop,
                        allQuantityProducts: 0,
                        getPrice: function (productName) {
                           console.info(this.stock[productName]);
                         },
                        getStock: function (productName) {
                            console.info(this.stock[productName]);
                         },
                        byProduct: function (productName, quantity) {
                           if(quantity > this.stock[productName]) {
                                 console.warn('Please correct "quantity" because we do not have as many products!')
                           } else {
                                 this.stock[productName] -= quantity;
                                 this.quantityProducts -= quantity;
                                 console.log( this.stock[productName] )
                                 Shop.prototype.allQuantityProducts -= quantity;
                           }
                         },
                         addProducts: function (objProducts) {
                            for (var key in objProducts) {
                                if(objProducts[key]) {
                                this.price[key] = objProducts[key];
                                if(this.stock[key]) {
                                    this.stock[key] += 1;
                                    this.quantityProducts += 1;
                                    Shop.prototype.allQuantityProducts += 1;
                                } else {
                                    this.stock[key] = 1;
                                    this.quantityProducts += 1;
                                    Shop.prototype.allQuantityProducts += 1;
                                }
                                }
                            }
                         },
                         addPrices: function (objPrices) {
                             for (var key in objPrices) {
                                if(objPrices[key]) {
                                    this.price[key] = objPrices[key];
                                }
                             }
                         }
                    }
              return Shop;
})()

var a = new Shop();
/*
a.addProducts({bread: 25, beer: 32, water: 75});
a.addPrices({bread: 34, vodka: 75, beerMix: 24});
a.byProduct('beer', 1);
*/

//TASK 2;
window.MyArray = (function () {
        function MyArray () {
            this.input = "";
            };
        MyArray.prototype = Object.create(Array.prototype);
        return MyArray;
})();

//TASK 3;

window.Student = (function () {
        function Student (name, subject) {
            this.name = name;
            this.subject = subject;
            this.marks = (function() {
                var marks = [];
                var marksRandom = Math.floor(Math.random() * (20 - 10 + 1)) + 10; 
                for (var i = 0; i < marksRandom; i++) {
                   marks.push(Math.floor(Math.random() * (12 - 1 + 1)) + 1);
                };
                return marks;
            })();
            if (this.marks) {
                var summ = 0;
                
                var count = this.marks.length;
                for (var i = 0; i < this.marks.length; i++) {
                    summ += this.marks[i];
                };
                var result = Math.floor(summ / count);
                this.rating = result;
            }
            };
        return Student;
})();


function createTable(countOfStudents) {  //This function Creating students. Insert count of students!
    var students = [];
    for (var i = 0; i < countOfStudents; i++) {
    students.push(new Student(i, i)); 
    }
    var htmlStr = "<table border = '5'>";
    for(var j = 0; j <students.length; j++) {
        htmlStr += '<tr><th>' + students[j].name + '<th>';
        for(var k = 0; k < students[j].marks.length; k++){
            htmlStr += '<td>' + students[j].marks[k] + '</td>'
        }
        htmlStr += '</tr>';
    }
    htmlStr += "</table>"
    document.body.insertAdjacentHTML("beforeBegin", htmlStr);

  return students;
}
///////////////////////

          
    
   
