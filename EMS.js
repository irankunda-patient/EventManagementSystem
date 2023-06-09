var message1 = "submitted!!";
var message2 = "Now you can Log in!";

var time1 = setTimeout(Hello,1000)

function Hello(){
    alert(`sign up to EMS?`)
}

// clearTimeout(time1)

function signUP(){
    alert(`${message1} `)
    alert(` Log in now?`)
    return true
    
}

// var nameError = document.getElementById('nameError')
// var telError = document.getElementById('telError')
// var emailError = document.getElementById('emailError')
// var passwordError = document.getElementById('passError')
// var confError = document.getElementById('confError')

// function validateName(){
//     var name = document.getElementById('name').value
//     console.log(nameError);
//     if(name.length == 0){
//         nameError.innerHTML = "name is required";
//         return false
//     }
//     if(!name.match(/^[A-Za-z]\*s{1}[A-Za-z]*$/)){
//         nameError.innerHTML = "write fullname";
//         return false
//     }
//     nameError.innerHTML = 'valid';
//     return true
// };
 
