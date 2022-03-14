var naira=0.0024;
var dollar=1
var pounds=1.32
var Euro=1.09;
var money=0;
var convert=0;


//Naira to dollar
function one(){
      money = document.getElementById('currency').value
      convert = money * naira;
    document.getElementById('result').value = "$" +convert;
}

//Naira to Euro
function two(){
     var money = document.getElementById('currency').value
     var convert = money * naira * Euro;
    document.getElementById('result').value ="eur " + convert;
}

//Naira to Pounds
function three(){
     money = document.getElementById('currency').value
     convert = money * naira * pounds;
    document.getElementById('result').value ="p " + convert;
}

//Dollar to naira
function four(){
     money = document.getElementById('currency').value
     convert = money * 418.49;
    document.getElementById('result').value = "#" + convert;
}

//Euro to Naira
function five(){
     money = document.getElementById('currency').value
     convert = money * 456.69;
    document.getElementById('result').value ="eur " +  convert;
}

//Ponds to Naira
function six(){
     money = document.getElementById('currency').value
     convert = money * 649;
    document.getElementById('result').value ="p " +  convert;
}


function seven(){
    window.close()
}