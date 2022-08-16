function myFun(){
    var numRandom = Math.floor(Math.random() * 100);
    document.getElementById('maydoan').innerHTML = numRandom;
    var number1 = Number(document.getElementById('number').value);
    
    var sosanh;
    
    if ( numRandom == number1){
        sosanh = " doan trung"
    }else {
        sosanh = "doan sai"
    }
    document.getElementById('exp').innerHTML = sosanh;
}
