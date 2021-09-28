var initialPrice = document.querySelector("#initial-price")
var currentPrice = document.querySelector("#current-price");
var totalQuantity = document.querySelector("#quantity");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

submitBtn.addEventListener('click',stockPricePredictor)

function stockPricePredictor(){
    var ip = initialPrice.value;
    var ct = currentPrice.value;
    var quant = totalQuantity.value;
    stockPriceCaluculation(ip,ct,quant)
}
function stockPriceCaluculation(initial, current, quantity){
    if(current > initial){
        var profit = (current - initial)*quantity ;
        var profitPercentage = (profit/initial)*100;
        showMessage("You have made profit of " + profit+ " with profit percentage of "+profitPercentage )
    }else if (initial > current) {
        var loss = (initial - current)*quantity ;
        var lossPercentage = (loss/initial)*100;
        showMessage("You have made loss of " +loss+ " with loss percentage of "+lossPercentage )

    } else {
        showMessage("No pain no gain and no gain no pain");
    }

    function showMessage(message){
        outputBox.innerText = message;
    }

}


