funksiya myFunction() {
    let AZN = prompt('Manat')
    let dollar = AZN / 1.7
    let netice = AZN + ' AZN = ' + dollar + ' $ ';
    document.getElementById('pull').innerHTML = netice;
}

funksiya myFunction2() {
    let manat = prompt('Manat')
    qoy avro = manat / 1.8
    qoy netice = manat + ' AZN = ' + avro + ' avro ';
    document.getElementById('pull').innerHTML = netice;
}
funksiya myFunction3() {
    let manat = prompt('Manat')
    qoy TL = manat * 16, 25
    qoy netice = manat + ' AZN = ' + TL + ' TL ';
    document.getElementById('pull').innerHTML = netice;
}