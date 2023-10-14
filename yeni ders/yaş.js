function buttonFunction(secim){
    let ad = prompt("Adinizi Yazin :")
let yas = Number(prompt("Yasiniz Yazin :"))

if(yas<=6){
    document.getElementById("button").innerHTML = (ad + " Sen Korpesen")
}
else if (6<yas &&  yas<=11) {

    document.getElementById("button").innerHTML = ( ad + " Sen Usaqsan")
}
else if(11<yas && yas<=17){

        document.getElementById("button").innerHTML = ( ad + " Sen Yeniyetmesen")
}
else if(17<yas && yas<=25){
    document.getElementById("button").innerHTML = ( ad + " Sen Gencsen")
}
else if(35<yas && yas<=35){
    document.getElementById("button").innerHTML = ( ad + " Sen Gencsen")
}
else if(45<yas && yas<=70){
    
    document.getElementById("button").innerHTML = ( ad + " Sen Qocasan")
}
else if (65<yas && yas<100){

    document.getElementById("button").innerHTML = ( ad + " Sen qocasan")
}
}