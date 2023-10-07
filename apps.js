function myFunction(){
    let a = prompt("A-nin uzunlugu ?")
    let b = prompt("B-nin eni ?")
    let cavab = (a*b)
    let netice = "Uzunlugu " + a + " olan ve eni  " + b + " olan Duzbucagin  sahesi " + cavab + " dir."
    document.getElementById("buton").innerHTML = netice;
}
function myFunction2(){
    let a = prompt("A-nin Uzunlugu ?")
    let b = prompt("B-nin Eni ?")
    let cavab = (a*b/2)
    let netice = "Uzunlugu " + a + " olan ve eni " + b + " olan Ucbucagin sahesi " + cavab + " dir."
    document.getElementById("buton2").innerHTML = netice
}
function myFunction3(){
    let a = prompt ("Terefinin Qiymeti ?")
    cavab = (a**2)
    let netice = "Tereflerinin qiymeti " + a + " olan kvadratin sahesinin qiymeti " + cavab + " dir."
    document.getElementById("buton3").innerHTML = netice 
}