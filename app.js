var angle1 = document.querySelector('.angle1');
var angle2 = document.querySelector('.angle2');
var angle3 = document.querySelector('.angle3');
var resButton = document.querySelector('.btn-click');
var outputText = document.querySelector('.op-text');
var alertLine = document.querySelector('.alert-line');

function clickHandler(){
    var val1 = Number(angle1.value);
    var val2 = Number(angle2.value);
    var val3 = Number(angle3.value);
    if(val1.toString().length == 0 || val2.toString().length == 0 || val3.toString().length == 0 || val1<=0 || val2<=0 || val3<=0){
        alertLine.innerHTML = "!Error: invalid angles"
    }
    else{
        var sum = val1+val2+val3;
        console.log(val1, val2, val3, sum);
        if(sum === 180){
            outputText.innerHTML = "Yes!! these angles forms a triangle :)";
        }
        else{
            outputText.innerHTML = "No, these angles don't make a triangle";
        }
    }

}

resButton.addEventListener("click", clickHandler);

