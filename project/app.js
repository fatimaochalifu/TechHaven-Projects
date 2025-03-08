const a = 'Binta';

let fullName = 'Ochalifu';
console.log ('My name is' + " " + (a) + " " + (fullName));

// Array Methods
fullName = "Fatima";
console.log ('My name is' + " " + (a) + " " + (fullName));

const myArray = ['Bag', 2, 'Car', 'Orange'];
console.log(myArray.length);


for (i= 1; i < 5; i++) {
    console.log('Count is'+ " " + (i) );
}
 let age = 20;

if (age < 15){
    console.log('Teenager');
} else if (age >= 19){
    console.log('Adult');
}

else {console.log('Invalid age')}

let userPassword = 'Binta'
if (userPassword.length < 6 && userPassword.includes('@')){
    console.log('Strong password');
} else if (userPassword <= 6){
    console.log('Not too strong password')
}
else {console.log('Use a stronger passsword');}