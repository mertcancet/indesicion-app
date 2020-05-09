class Person {
    constructor(name='Anonymous',age=0){
        this.name =name;
        this.age=age;
    }
    getGretting(){
        return 'hi';
    }
    getDescription(){
        return `${this.name} is ${this.age} years old.`
    }
}
class Student extends Person{
    constructor(name,age,major){
        super(name,age);
        this.major=major;
    }
    hasMajor(){
        return !!this.major
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description+=` Their major is ${this.major} `;
        }
        return description;
    }

}
class Traveller extends Person{
    constructor(name,age,homelocation){
        super(name,age);
        this.homelocation=homelocation;
    }
    getGretting(){
        let greeting = super.getGretting();

        if(this.homelocation){
            greeting+=` I'm visiting from ${this.homelocation}`;
        }
        return greeting;
    }
}

const me = new Traveller('mertcn',16,'Ankara');
console.log(me.getGretting());    


const other = new Student();
console.log(other.getDescription());