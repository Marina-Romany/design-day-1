
class BMW {
    constructor(price , color){
        this.price= price
        this.color = color
    }
    returnModelPrice(){
        return`BMW  price ${this.price}`

    }
}

class ferrari {
    constructor(price , color){
        this.price= price
        this.color = color
    }
    returnModelPrice(){
        return`ferrari  price ${this.price}`

    }
}
 
class carsfactory{
    constructor(cartype){
        this.cartype = cartype
    }
    returnModelPrice(){
        switch(this.cartype){
            case "BMW":
                return new BMW(300000 , "black")
             case "ferrari":
                 return new ferrari(500000 , "blue")
            default:
                console.log("please enter valid type")        
        }
    }

}

const BMW = new carsfactory("BMW")
console.log(BMW.returnModelPrice())


const ferrari = new carsfactory ("ferrari")
console.log(ferrari.returnModelPrice())