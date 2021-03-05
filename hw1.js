let spring = "best";
console.log(spring);

spring = "the better fall";
console.log(spring);

const why = [`fresh`, ` spring green leaves`, `flowers`, `sun`];

if (true) {
    var x = "whateverYouWant";
} ;
console.log(x);

if (true) {
    let samurai = `badass`;
    console.log(samurai);
} ;
// console.log(samurai); if you wanted an error

// why = "error bro"
// console.log(why)

const empty = [];
empty.push("stuff", "other stuff", "third thing");
console.log(empty);


var me = {
    name: "Thomas",
    age : 24,
};
console.log(me);

// template literal

const hey =  (`hello I am ${me.name}`);
console.log(hey);

function greet (){
    console.log(`Hello I am ${me.name} and I am ${me.age} years old.`)
}; 
greet();

const mi = {
    name : "Thomas",
    age: 24 
};
console.log(mi.name);
console.log(mi.age);

const arrow1 = () => {
    console.log(`hello world`)
};
arrow1 ();

const arrow2 = (str) => {
    console.log(`any parameter`)
}
arrow2 ();
// wont let me just put numbers
const arrow3 = (a=2,b=0) => {
    console.log(2,0)
}
arrow3 ()

    setTimeout(() => {
        alert(`you died`)
    }, 3000);

for ( let i = 0; i < empty.length; i++ ){
    console.log(empty[i]);
}

let div = document.querySelector('div');