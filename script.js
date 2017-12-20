//0 TASK
function House() { // Object House
var house = {
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
