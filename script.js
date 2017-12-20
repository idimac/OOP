//0 TASK
(function(){
    function House() { 
             this.windows = "white";
             this.doors = "brown";
             this.colorWindows = function (color) {
                 this.windows = color;
             };
             this.colorDoors = function (color) {
                 this.doors = color;
             }
             }; 
        

        function Car() {
            this.model = "a5",
            this.brand = "audi",
            this.mileage = "120000 km",
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
            }
        })();       


//1 TASK
(function(){
function Rabbit (color) { //rabbit constructor
    this.color = color;
    this.changeColor = function (newColor) {
        this.color = newColor;
    }
};

var whiteRabbit = new Rabbit('white');
var greyRabbit = new Rabbit('gray');
whiteRabbit.changeColor('gold');
greyRabbit.changeColor('gold');
console.log(whiteRabbit, greyRabbit);

function Pupil(name) { //pupil constructor
    this.name = name;
    this.evaluation = [];
    this.evaluate = function (evaluate) {
        this.evaluation.push(evaluate);
    }
}
    

var summMileages = 0;
function Horse(name) { //horse constructor
    this.name = name;
    this.mileage = '100';
    this.summMileages = summMileages;
    this.go = function (distance) {
                this.mileage = parseFloat(this.mileage) + distance + ' km';
                summMileages += distance;
              };
    summMileages += parseFloat(this.mileage); 
};

})();

