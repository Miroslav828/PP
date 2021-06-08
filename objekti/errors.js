console.log('prvi red');
console.log('drugi red');
try {
    var input = 2;
    console.log('treci red');
    console.log('cetvri red');
  if (input === 5){
    throw { 
        name: "MyError",   
        message: "OMG! Something wrong happened"    
        }
    }
    console.log('peti red');
    console.log('sesti red');
} catch (error) {
    console.log('desila se greska');
    console.log(error.name);
    console.log(error.message);
}finally{
    console.log("cat finally");
}

console.log('sedmi red');
console.log('osmi red');