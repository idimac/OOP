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
                        run: function go (dist) {
                                dist = dist || 1;
                                this.mileage += dist;
                                Horse.prototype.allMileage += dist;
                               },
                        relax: function (distance, meth) {
                                    if(this.count < distance) {
                                    if(this.fatigue !== 10) {
                                        meth.call(this);
                                        this.fatigue++;
                                        this.count++;
                                        this.relax (distance, meth); 
                                        
                                    }
                                    if(this.fatigue == 10) {
                                        this.fatigue = 0;
                                        var ConcreteHorse = this;
                                        setTimeout(function(){
                                            console.log('Horse resting 1 second');
                                            ConcreteHorse.relax (distance, meth);
                                            }, 1000)
                                    }
                                    if(this.count === distance){
                                        this.count = 0;
                                    }
                                }
                              
                            }   
                    }
                    return Horse;
                })();
//////////////////////////////////////
                var a = new Horse(); // testing Horses
                a.relax(31,a.run);






window.Shop = (function (){
                    function Shop () {
                        
                    };
              return Shop;
})()
