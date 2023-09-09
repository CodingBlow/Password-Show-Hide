let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

//console.log(eyeicon);
//console.log(password);

eyeicon.addEventListener("click", () => {
  if (password.type == "password") {
    password.type = "text";
    eyeicon.src = "eye open.png";
  } else {
    password.type = "password";
    eyeicon.src = "eye clone.png";
  }
});
