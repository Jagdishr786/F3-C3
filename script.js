const signName = document.getElementById("fname")
const signEmail = document.getElementById("email")
const signPass = document.getElementById("password")
const signConPass = document.getElementById("conpassword");


const ferror = document.getElementById("error");

const btnForSignUp = document.getElementById("signup")

btnForSignUp.addEventListener("click",loginIn)



let arr=[]
let id =1


function loginIn(){
    const nameVal = signName.value;
    const emailVal = signEmail.value;
const passVal = signPass.value;
const conpassVal = signConPass.value; 

    if(checkName(nameVal) < 2){
        error.innerHTML = 'Name must be at least 2 words';
    } 
    else if(checkPassword(passVal,nameVal,emailVal) == false){
        error.innerHTML = 'Password must contain at least 1 uppercase, 1 lowercase, 1 number and 1 special character';
    }
    else if(passVal != conpassVal){
        error.innerHTML = 'Password and Confirm Password must be same';
    }
    else{
        error.innerHTML = 'Form Submitted Successfully'; 

        let obj = {id: id++, nameVal, emailVal, passVal}
        arr.push(obj)
        console.log(arr)
        signName.value = '';
        signEmail.value = '';
        signPass .value = '';
        signConPass.value = '';
        // local stroage
        localStorage.setItem("data" , JSON.stringify(arr))
        window.location.href="./login.html"
        
  }

}


function checkName(e){
   let name = e.trim();
   let nameArr = name.split(' ');
    return nameArr.length
}




function checkPassword(password, name, email){
    let cl = 0 , sl = 0, n=0, sc=0
    for(let t of password){ 
       if(t>="A" && t<="Z"){
         cl= cl+1 // capital letter
       }
       else if(t>="a" && t<="z"){
         sl++ // small letter
       }
       else if(t>="0" && t<="9"){
            n++ // number
         }
         else{
            sc++ // special character
         }
    }
    if(cl>=1 && sl>=1 && n>=1 && sc>=1 && password !=name && password !=email){
        return true
    }
    else{
        return false
    }
 }



