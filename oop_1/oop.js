'use strict'

/* const Car={
    brand:"Ford",
    model:"Mustang",
    year:1967,
    isAutoGear:true,
    colors:["white",'red'],
    details:{
        color1:"red",
        color2:"white",
        engineSize:4900
    },
    startEngine:function (){
        return "Motor çalıştı"
    }

}
console.log(Car.brand);
console.log(Car.colors);
console.log(Car.colors[0]);
console.log(Car.startEngine());
console.log(Car["brand"]);
console.log(Car.details["engineSize"]);
console.log(Car["details"]["engineSize"]);
console.log(Car["startEngine"]());
 */
/* const Car={
    brand:"Ford",
    model:"Mustang",
    year:1967,
    isAutoGear:true,
    colors:["white",'red'],
    details:{
        color1:"red",
        color2:"white",
        engineSize:4900
    },
    startEngine:function (){
        return "Motor çalıştı"
    },
    getDetails:function(){
       // return this.brand+ " "+ this.model+" "+this.year;
       return this.startEngine()
    },
arrowFunction: ()=>{
    return this
}
}
console.log(Car.getDetails())
console.log(Car.arrowFunction()) */

/* const testArray=["value0","value1","value2","value3"]

const[firstItem,secondItem]=testArray

console.log(firstItem,secondItem)

const [first,second, ...others]=testArray

console.log(first,second,others)
const newArr = [ ...testArray,"new-value","new-value2"]
console.log(newArr) */
/* const Car={
    brand:"Ford",
    model:"Mustang",
    year:1967,
    isAutoGear:true,
    colors:["white",'red'],
    details:{
        color1:"red",
        color2:"white",
        engineSize:4900
    },
    startEngine:function (){
        return "Motor çalıştı"
    }

}
const {year,model,brand, ...otherItems}=Car
console.log(year,model,brand)
console.log(otherItems)

const newObj={
    ...Car,
    newKey:"new-value"
}
console.log(newObj)
const json=JSON.stringify(Car)
console.log(json)

const newObj2=JSON.parse(json)
console.log(newObj2)

const arr =Object.entries(Car)
console.log(arr)
const arr2 =Object.values(Car)
console.log(arr2)
const arr3 =Object.keys(Car)
console.log(arr3) */

const CarConstructor=function(brand,model,year=2011){
    this.brand=brand;  // this keyword ile nesne üzerindeki özellikleri tanımlayabiliyoruz.
    this.model=model;// this keyword ile nesne üzerinden metotları çağırabiliyoruz.
    this.year=year;
    this.startEngine=function(){
        return "Motor Çalıştı"
    }
}


const newCar=new CarConstructor("Ford","Mustang",1967)
console.log(newCar);
const newCar2=new CarConstructor("Toyota","Corolla")
console.log(newCar2);