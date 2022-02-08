let ceo = null;

class ceo_company {
    constructor(name , age , adress){
        if (ceo == null){
            this.name = name;
            this.age = age;
            this.adress = adress;
             ceo = this;
        } else{
            return ceo;
        }
    }
info_CEO(){
    console.log(`information : name: ${this.name},
                age:${this.age} ,
                adress: ${this.adress}`)
}
}

const CompantCeo = new ceo_company("Omnia" , 25 , "Alexandria")
console.log(CompantCeo);

const CompantCeo1 = new ceo_company("Engy" , 25 , "Alexandria")
console.log(CompantCeo1);



