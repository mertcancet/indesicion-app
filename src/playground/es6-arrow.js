
let x= 'Mike smith'
const getFirstName =(x) => {
    return x.split(' ')[0];
}

console.log(getFirstName(x));


const getFirstName =(x) => x.split(' ')[0];


const multiplier ={
    numbers: [1,2,3],
    multiply(num){
        this.numbers.forEach(x){
            return x*num;
        }
    }
}


const multiplier ={
    numbers: [1,2,3],
    multiply(num){
        return this.numbers.map((n) => n*num);
    }

}