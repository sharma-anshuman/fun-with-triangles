var resButton = document.querySelector('.btn-click');
var outputText = document.querySelector('.op-text');
var base = document.querySelector('.base');
var height = document.querySelector('.height');
var alertLine = document.querySelector('.alert-line');


function clickHandler(){
    alertLine.innerHTML = "";
    b = Number(base.value), h = Number(height.value);
    console.log(b, h);
    if(b<=0 || h<=0 || b.toString().length == 0 || h.toString().length == 0){
        outputText.innerHTML = "";
        alertLine.innerHTML = "!Error: Invalid Inputs";
    }
    else{
        var ans = Math.sqrt((b*b) + (h*h));
        console.log(ans);
        outputText.innerHTML = "Value of Hypotenuse = " + ans.toFixed(3);
    }
}


resButton.addEventListener('click', clickHandler);