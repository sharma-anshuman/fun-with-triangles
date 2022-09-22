var submit = document.querySelector('.btn-submit');
var formResponse = document.querySelector('.question-bank');
var opLine = document.querySelector('.op-text');

var ans = ["90°", "right-angled", "one", "12, 16, 20", "Equilateral triangle", "100°", "30°", "a + b + c", "no", "45°"];



function clickHandler(){
    var sum = 0, idx = 0;
    var response = new FormData(formResponse);

    for(var val of response.values()){
        if(val === ans[idx]){
            sum++;
        }
        idx++;
    }       

    opLine.innerHTML = "Your score is: " + sum;

}

submit.addEventListener('click', clickHandler);