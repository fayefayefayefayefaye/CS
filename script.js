var fname = prompt("Please enter your full name:")
var username = prompt("Please enter your username:")
if (confirm("What is your gender? \n Press OK if you are a male \n Cancel if Female")== true){
    alert("Your profile gender is set to MALE");
    var gender = "M";
}else{
    alert("Your profile gender is set to FEMALE");
    var gender = "F"
}
var desc = prompt("Please type a brief description of yourself")
var year = prompt("Please enter your Birth Year:")
var age = 2023 - year;
if (confirm("Do you want to use a costum profile picture?")){
    var img = prompt("Please enter the file name of the picture. (Ex: wow.jpg )");
    alert("Profile picture has been updated.");
}else{
    alert("No image has been set.");
}


document.getElementById("fname").innerHTML = fname;
document.getElementById("username").innerHTML = username;
document.getElementById("gender").innerHTML = gender;
document.getElementById("year").innerHTML = year;
document.getElementById("age").innerHTML = age;
document.getElementById("ppic").src= img;
