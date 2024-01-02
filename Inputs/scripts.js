let submit = document.getElementById("submit");
submit.onclick = function(){
    let payBtn = document.getElementById("Paypal");
    
    if(payBtn.checked){
        console.log("hello");
        document.body.style.backgroundColor = "black";
    }else{
        document.body.style.backgroundColor = "white";
    }
    
};