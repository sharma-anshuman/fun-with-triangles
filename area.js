var resButton = document.querySelector('.btn-click');
var outputText = document.querySelector('.op-text');
var alertLine = document.querySelector('.alert-line');
var side1 = document.querySelector('.side1');
var side2 = document.querySelector('.side2');
var side3 = document.querySelector('.side3');


function clickHandler(){
    var a = Number(side1.value);
    var b = Number(side2.value);
    var c = Number(side3.value);
    console.log(a, b, c, typeof(a), typeof(b), typeof(c));
    var s = (a+b+c)/2;
    if(s-a<=0 || s-b<=0 || s-c<=0 || a<=0 || b<=0 || c<=0 || a.toString().length == 0 || b.toString().length == 0 || c.toString().length == 0){
        outputText.innerHTML = "";
        alertLine.innerHTML = "!Error: Invalid Inputs";
    }
    else{
        alertLine.innerHTML = "";
        var area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
        console.log(area);
        outputText.innerHTML = "The area is: " + area.toFixed(2);  
    }
}

resButton.addEventListener('click', clickHandler);

