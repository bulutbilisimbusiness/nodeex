'use strict'
/* const PascalNamedClassName=class{
    undefinedProperty
    extraField="field-value"
    methodName1(){
        return this
    }
    methodName2(){
        return this.extraField
    }


}
const instance=new PascalNamedClassName()
console.log(instance)
console.log(instance.methodName2()) */
/* class Car{
    isRunning=false
    constructor (brand,model,year){
        this.brand = brand;  //private field starts with _ underscore sign
        this.model = model;// private field starts with __ double underscore sign
        this.year = year// private field starts with # hash sign
    }
    runEngine(){
        this.isRunning=true
        console.log("motor çalıştı")
        return this.isRunning
    }
}

const ford =new Car("Ford","Mustang","1967")

console.log(ford)
console.log(ford.isRunning)
ford.runEngine()
console.log(ford.isRunning)
const mercedes =new Car("Mercedes","CLK200","2000")

console.log(mercedes) */
/* class Vehicle{
    vehicleIsActive=false
    constructor(vehicleType){
        this.vehicleType=vehicleType
    }
}
class Car extends Vehicle{
    isRunning=false
    constructor (brand,model,year,vehicleType="Car"){
        super(vehicleType)   
        this.brand = brand;  
        this.model = model;
        this.year = year
    }
    runEngine(){
        this.isRunning=true
        console.log("motor çalıştı")
        return this.isRunning
    }
}
const ford=new Car("Ford","Mustang",1967,"SUV")
console.log(ford)

class Accessory extends Car {

    constructor(accessoryName, brand, model, year, vehicleType = 'Car') {
        super(brand, model, year, vehicleType)
        this.accessoryName = accessoryName
    }
}
const fordClimate =new Accessory("Bosch Climate",...Object.values(ford))
console.log(fordClimate) */
/* class Vehicle{
    vehicleIsActive=false
    constructor(vehicleType){
        this.vehicleType=vehicleType
    }
    getDetails(){
        console.log("vehiclenin getDailesi")
        return this.vehicleType
    }
}
class Car extends Vehicle{
    isRunning=false
    constructor (brand,model,year,vehicleType="Car"){
        super(vehicleType)   
        this.brand = brand;  //private field starts with _ underscore sign
        this.model = model;// private field starts with __ double underscore sign
        this.year = year// private field starts with # hash sign
    }
    runEngine(){
        this.isRunning=true
        console.log("motor çalıştı")
        return this.isRunning
    }
    getDetails(){
        console.log("Carın getDailesi")
        return this
    }
}
const ford=new Car("Ford","Mustang",1967,"SUV")
console.log(ford)
console.log(ford.getDetails())

 */
/* class Vehicle{
    vehicleIsActive=false
    constructor(vehicleType){
        this.vehicleType=vehicleType
    }
    getDetails(){
        console.log("vehiclenin getDailesi")
        return this.vehicleType
    }
}
class Car extends Vehicle{
    isRunning=false
    constructor (brand,model,year,vehicleType="Car"){
        super(vehicleType)   
        this.brand = brand;  //private field starts with _ underscore sign
        this.model = model;// private field starts with __ double underscore sign
        this.year = year// private field starts with # hash sign
    }
    runEngine(){
        this.isRunning=true
        console.log("motor çalıştı")
        return this.isRunning
    }
    getDetails(){
        console.log("Carın getDailesi")
        return {
            brand: this.brand,
            model: this.model,
            year: this.year,
            vehicleType: super.getDetails(), 
           
            vehicleIsActive: this.vehicleIsActive 
        }
    }
}
const ford=new Car("Ford","Mustang",1967,"SUV")
console.log(ford)
console.log(ford.getDetails())

 */
/* class Vehicle{
    vehicleIsActive=false
    _protectedProp=true
    #privateProp=true
    constructor(vehicleType){
        this.vehicleType=vehicleType
    }
    _protectedMethod() {
        console.log('Vehicle.protectedMethod çalıştı')
        return true
    }

    #privateMethod() {
        console.log('Vehicle.privateMethod çalıştı')
        return true
    }

    getDetails() {
        console.log('Vehicle.getDetails() çalıştı')
        
        console.log("privateProp",this.#privateProp)
        console.log(this.#privateMethod())
    }
}
class Car extends Vehicle{
    isRunning=false
    constructor (brand,model,year,vehicleType="Car"){
        super(vehicleType)   
        this.brand = brand; 
        this.model = model;
        this.year = year;
    }
    runEngine(){
        this.isRunning=true
        console.log("motor çalıştı")
        return this.isRunning
    }
    getDetails() {
        console.log('Car.getDetails() çalıştı')
        
        
    }
   
}
const ford=new Car("Ford","Mustang",1967,"SUV")
console.log(ford)
console.log(ford.getDetails()) */
class Vehicle{
    vehicleIsActive=false
    _protectedProp=true
    #privateProp=true
    constructor(vehicleType){
        this.vehicleType=vehicleType
    }
    _protectedMethod() {
        console.log('Vehicle.protectedMethod çalıştı')
        return true
    }

    #privateMethod() {
        console.log('Vehicle.privateMethod çalıştı')
        return true
    }

    getDetails() {
        console.log('Vehicle.getDetails() çalıştı')
        
        console.log("privateProp",this.#privateProp)
        console.log(this.#privateMethod())
    }
}
class Car extends Vehicle{
    isRunning=false
    #price
    constructor (brand,model,year,vehicleType="Car"){
        super(vehicleType)   
        this.brand = brand; 
        this.model = model;
        this.year = year;
    }
    runEngine(){
        this.isRunning=true
        console.log("motor çalıştı")
        return this.isRunning
    }
    set setPrice(newPrice){
         this.#price=newPrice
         console.log("fiyat güncellendi")
         return true
    }
    get getPrice() {
        // return this.#price
        return 'Fiyat: ' + (this.#price ?? 'Henüz Belirlenmedi.')
    }
static staticProp="static value"

static staticMethod(){
    console.log("static method çalıştı")
    return this
}


}
const ford=new Car("Ford","Mustang",1967,"SUV")
console.log(ford)
console.log(ford.getPrice)
ford.setPrice=5000
console.log(ford.getPrice)

console.log(Car.staticProp)
console.log(Car.staticMethod())