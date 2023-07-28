const name=document.getElementById("name");
const email=document.getElementById("email");
const password=document.getElementById("password");
const address=document.getElementById("address");
const pincode=document.getElementById("pincode");
const city=document.getElementById("city");

function submit(params) {
    if(name==" " || email==" " || password==" " || address==" " || pincode==" " || city==" "){
        alert("Enter your Details correctly")
    }
}