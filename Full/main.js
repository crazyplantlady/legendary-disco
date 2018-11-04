var html = '';
var red;
var green;
var blue;
var rgbColor;
var randomNumber = Math.floor(Math.random() *10 + 1)
var correct = false;


var showQuestion = function(number){
    if(number === 1){
        var answer = prompt("hvert er besta mál í heimi?")
        if (answer.toUpperCase() === "JAVASCRIPT") {
            alert("Það er rétt! Vel gert!!")
            showQuestion(3)
            return;
        }else {
           alert("Nei, rangt! þú getur gert betur en þetta!")
           showQuestion(1)
           return;
        }
    }/*
    if (number === 2){
        var guess = prompt("Ég er tala á milli 1 og 10, hver er ég?");
        if (parseInt(guess) === randomNumber) {
        correct = true;
        }else if (parseInt(guess) < randomNumber) {
        var guessMore = prompt("Reyndu aftur. Ég er hærri en " + guess);
        showQuestion(2) 
        return;   
        }if (parseInt(guessMore) === randomNumber) {
        correct = true   
        }else if (parseInt(guess) > randomNumber) {
        var guessLess =prompt("Reyndu aftur. Ég er lægri en " + guess);
        }if (parseInt(guessLess) === randomNumber) {
        correct = true; 
        showQuestion (2);
        return;
        }
        if (correct) {
            document.write("<p>Þú giskaðir rétt! Talan var " + randomNumber +"</p>")
        return;
        }

    }*/
    if(number === 3){
        var answer1 = prompt("Hvað heitir kúrekinn í Toy Story?");
        if ( answer1.toUpperCase() === "VIDDI" || answer1.toUpperCase() === "WOODY" ) {
        correct += 1; 
        showQuestion(4);
        }else {
        alert("Úff, nei þetta var ekki rétt. Hann heitir Viddi, eða Woody.")
        showQuestion(4)
        }
    }
    if(number === 4){
        var answer2 = prompt("Hversu margir hringir eru Ólympíuhringirnir?");
        if ( answer2.toUpperCase() === "FIMM" || answer2.toString() === '5') {
        correct += 1; 
        }else {
        alert("uhm, nei, þeir eru reyndar 5.")
        showQuestion(5)
        }
    } 
    if(number === 5){
        var answer3 = prompt("Hvað heitir fyrsti gervihnötturinn sem fór út í geiminn?");
        if ( answer3.toUpperCase() === 'SPÚTNIK' || answer3.toUpperCase() === 'SPUTNIK') {
        correct += 1; 
        }else {
            alert("Come on! Hann heitir Sputnik")
            showQuestion(6)
        }
    }
    if(number === 6){
        var answer4 = prompt("Já, eða nei: Getur bambus stækkað um 60cm á einum degi?");
        if ( answer4.toUpperCase() === 'JÁ' ) {
        correct += 1; 
        }else {
            alert("--Það er ótrúlegt, en satt, hann getur stækkað um allt að 60cm á einum degi! ")
            showQuestion(7)
        }
    }
    if(number === 7) {
        var answer5 = prompt("Fáni hvaða lands er sá eini sem er ekki ferningslaga?");
        if ( answer5.toUpperCase() === 'NEPAL' ) {
        correct += 1; 
        }else {
            alert("Það er að sjálfsögðu Nepal!")
        }
    }
}
showQuestion(1)
//showQuestion(2)
showQuestion(3)
showQuestion(4)
showQuestion(5)
showQuestion(6)
showQuestion(7)

alert("Þú fékkst " + correct + " af 7 mögulegum.<p>")
/*
if ( correct === 5 ) {
    document.write("<p><strong>Til hamingju! Þú færð gullbikar!</strong></p>")  
    } else if (correct >= 3) {
    document.write("<p><strong>Þú færð Silfurbikar.</strong></p>")  
    } else if (correct >= 2) {
    document.write("<p><strong>Frekar slappt. Þú færð mandarínu til að hækka c-vítamín búskapinn</strong></p>")  
    } else {
    document.write("<p><strong>Þú færð ekkert. Þarft hinsvegar að gefa mér þúsundkall.</strong></p>")
    }
    */

for (var i = 0; i <100; i += 1) {
    red = Math.floor(Math.random() * 256 );
    green = Math.floor(Math.random() * 256 );
    blue = Math.floor(Math.random() * 256 );
    rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    html += '<div style="background-color:' + rgbColor + '"></div>';
   // setInterval('window.location.reload()', 500); 
  }
  document.write(html);