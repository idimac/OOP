//0 TASK
(function () {
    function House() { 
        var house = {// Object House
            currentWindowColor: "white",
            doors: "brown",
        };
        
        Object.defineProperty(house, 'windows', {
            get: function () {
               console.dir(this.currentWindowColor);
            },
            set: function (value) {
                this.currentWindowColor = value;
             }
        });
        window.house = house; // this string of code for testing house at global lexical Environtment;
        };
        
        function Car() {
            var car = { // Object car 
            model: "a5",
            brand: "audi",
            mileage: "120000 km",
            driver: { // Object driver at object car 
                name: "Dmitry",
                sername: "Shlyahov", 
                age: "26",
                set changeSername(newSername){ //setfunction to change sername of driver
                    this.sername = newSername;
                }
               
        
            },
            go: function (distance) {
                console.info("car drove " + distance + " km");
                return this.mileage = parseFloat(this.mileage) + distance + " km"; //changing mileage of car
            }
            }
            window.car = car; // this string of code for testing cars methods and drivers methods at global lexical Environtment;
        };
})();


//1 TASK

(function (){ //rabbits
    var rabbits = []; //array of made rabbits
    
    function Rabbit (color) { //constructor of new Rabbits
        if (!color) {
            return null;
        };
        var rabbit = {
        color: color,
        set changeColor (newColor) { //method of changing color of rabbits
            this.color = newColor
        },
        }
        rabbits.push(rabbit);
    };
    
    var newRabbits = ['yellow', 'green', 'gray', 'white', 'black']; //made 5 rabbits
    for (var i = 0; i < newRabbits.length; i++) {
        new Rabbit(newRabbits[i]);
    };
    
    for (var i = 0; i < rabbits.length; i++) { // change color of all rabbits to gold
        rabbits[i].changeColor = "gold";
    };
})();

(function (){ //pupils
    function Pupil (name) {
        if(!name) {
            return null;
        }
        var student = {
            name: name, 
            estimates: [],
            set setEstimate (estimate){
                this.estimates.push(estimate);
            }
        };
        return student;
    };
})();


var horses = [];

function Horse (name) {
    var horse = {
        name: name,
        mileage: "700 km",
        get allHorseMileage(){
            
                var summdistance = 0;
                for(var i = 0; i < horses.length; i++) {
                summdistance += parseFloat(horses[i].mileage);
                }
                return summdistance;
            },
        set go (distance){
            this.mileage = parseFloat(this.mileage) + distance + " km";
        }
    };
    horses.push(horse);
};



