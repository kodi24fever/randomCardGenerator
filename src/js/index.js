/*
    This is your main stylesheet, you should use it only
    to include other styles into your web app.
*/
//include jquery into the bundle and store its contents into the $ variable
import $ from "jquery";
//include bootstrap npm library into the bundle
import 'bootstrap';
//include your own styles
import '../style/index.scss';

window.onload = function(){
    
    
    // Creating random number between 1-12 for middle content
    var addRandomNumber = document.getElementById("number");
    var randomNumber = Math.floor(Math.random()*12+1);
    var convertedNumber = randomNumber.toString();
    addRandomNumber.innerHTML = convertedNumber;
    
    //change numbers after 10 to letters
    if (randomNumber === 11){
        addRandomNumber.innerHTML = "J";
    } else if (randomNumber === 12){
        addRandomNumber.innerHTML = "K";
    } else if (randomNumber === 1){
        addRandomNumber.innerHTML = "A";
    }
    
    
    //Creating top sign of card
    var randomIcon = Math.floor(Math.random()*4+1);
    if (randomIcon === 1) {
        document.getElementById("header1").classList.add("lozenge");
        document.getElementById("header2").classList.add("lozenge");
    }else if (randomIcon === 2){
        document.getElementById("header1").classList.add("redheart");
        document.getElementById("header2").classList.add("redheart");
    }else if (randomIcon === 3){
        document.getElementById("header1").classList.add("blacksuit");
        document.getElementById("header2").classList.add("blacksuit");
    } else {
        document.getElementById("header1").classList.add("spadesuit");
        document.getElementById("header2").classList.add("spadesuit");
    }
    
  
    
    
    

};