//Destructuring Assignement


const [a,b,c , ...rest] =[3,4,"Hello",64,,24,'rAJU'] ;

console.log(a);
console.log(b);
console.log(rest);

const obj = {
    x:1 ,
    y:2
}

const {x ,y} = obj;

console.log(obj.x);
console.log(obj.y);
console.log(x);
console.log(y);

console.log(obj);
