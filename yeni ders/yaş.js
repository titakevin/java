function buttonFunction(secim){
    let ad = prompt("Adinizi Yazin :")
let yas = Number(prompt("Yasiniz Yazin :"))

if(yas<=5){
    document.getElementById("button").innerHTML = (ad + " Sen Korpesen")
}
else if (6<yas &&  yas<=10) {

    document.getElementById("button").innerHTML = ( ad + " Sen Usaqsan")
}
else if(11<yas && yas<=17){

        document.getElementById("button").innerHTML = ( ad + " Sen Yeniyetmesen")
}
else if(18<yas && yas<=35){
    document.getElementById("button").innerHTML = ( ad + " Sen Gencsen")
}
else if(36<yas && yas<=45){
    document.getElementById("button").innerHTML = ( ad + " Sen Gencsen")
}
else if(46<yas && yas<=65){
    
    document.getElementById("button").innerHTML = ( ad + " Sen Qocasan")
}
else if (66<yas && yas<=80){

    document.getElementById("button").innerHTML = ( ad + " Sen Pensiyasan")
}
else if (80<yas){

    document.getElementById("button").innerHTML = ( ad + " Sen olmusen Xeberin Yoxdu")
}
}