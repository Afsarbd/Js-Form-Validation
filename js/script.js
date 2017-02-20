function validate(){

     if(document.frm.username.value == "" || document.frm.username.value == "null"){
          document.getElementById("uname").innerHTML = "Fill up the username.";
          document.frm.username.focus();
       document.getElementById("uname").style.color = "red";
          document.getElementById("inputName").style.background = "pink";
     }else{

       document.getElementById("uname").innerHTML = "";
       document.getElementById("inputName").style.background = "white";


   }

     if(document.frm.password.value ==""){
          document.getElementById("psd").innerHTML = "Fill up the password.";
       document.getElementById("psd").style.color = "red";
       document.getElementById("inputPassword").style.background = "pink";
          document.frm.password.focus();

     }else {

       document.getElementById("psd").innerHTML = "";
       document.getElementById("psd").style.color = "red";
       document.getElementById("inputPassword").style.background = "white";

   }

     if(document.frm.confirmPassword.value == ""){
          document.getElementById("cpsd").innerHTML = "Fill up the confirm password.";
       document.getElementById("cpsd").style.color = "red";
       document.getElementById("confirmPassword").style.background = "pink";
          document.frm.confirmPassword.focus();
       document.getElementById("psdAlert").innerHTML = "";

     }else{

       document.getElementById("cpsd").innerHTML = "";
       document.getElementById("cpsd").style.color = "red";
       document.getElementById("confirmPassword").style.background = "";
   }

   var pasd = document.frm.password.value;
   var cpasd = document.frm.confirmPassword.value;

   if(pasd !== cpasd){
           document.getElementById("psdAlert").innerHTML = "Password didn't match";
           document.getElementById("confirmPassword").style.background = "pink";
           document.getElementById("psdAlert").style.color = "red";
           document.getElementById("cpsd").innerHTML = "";
     }else{
       document.getElementById("psdAlert").innerHTML = "";
   }

     if(document.frm.firstName.value == ""){
          document.getElementById("fname").innerHTML = "Fill up the first name.";
       document.getElementById("fname").style.color = "red";
       document.getElementById("firstName").style.background = "pink";
          document.frm.firstName.focus();

     }else{
       document.getElementById("fname").innerHTML = "";
        document.getElementById("firstName").style.background = "white";
   }

     return false;
}
$(".btn").bind("click", validate);

// Email validation
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function emailValidation() {
  $("#result").text("");
  var email = $("#email").val();
  if (validateEmail(email)) {
    $("#result").text(email + " is valid.");
    $("#result").css("color", "green");
  } else {
    $("#result").text(email + " is not valid.");
    $("#result").css("color", "red");
  }
  return false;
}

$(".btn").bind("click", emailValidation);
