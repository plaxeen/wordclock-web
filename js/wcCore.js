/**
 * Core from wordclock web.
 * Created by Shmeile Media on 30.08.2016.
 */
var clicks = 0;

function getTextTime() {
	var currentDate = new Date();
	var hourGetter = currentDate.getHours();
	var minuteGetter = currentDate.getMinutes();
    var hourText;
    var minuteText;

    if (clicks <= "2") {
        if (hourGetter == "00") {
            hourText = "НОЛЬ";
        }
        if (hourGetter == "01") {
            hourText = "ОДИН";
        }
        if (hourGetter == "02") {
            hourText = "ДВА";
        }
        if (hourGetter == "03") {
            hourText = "ТРИ";
        }
        if (hourGetter == "04") {
            hourText = "ЧЕТЫРЕ";
        }
        if (hourGetter == "05") {
            hourText = "ПЯТЬ";
        }
        if (hourGetter == "06") {
            hourText = "ШЕСТЬ";
        }
        if (hourGetter == "07") {
            hourText = "СЕМЬ";
        }
        if (hourGetter == "08") {
            hourText = "ВОСЕМЬ";
        }
        if (hourGetter == "09") {
            hourText = "ДЕВЯТЬ";
        }
        if (hourGetter == "10") {
            hourText = "ДЕСЯТЬ";
        }
        if (hourGetter == "11") {
            hourText = "ОДИННАДЦАТЬ";
        }
        if (hourGetter == "12") {
            hourText = "ДВЕНАДЦАТЬ";
        }
        if (hourGetter == "13") {
            hourText = "ТРИНАДЦАТЬ";
        }
        if (hourGetter == "14") {
            hourText = "ЧЕТЫРНАДЦАТЬ";
        }
        if (hourGetter == "15") {
            hourText = "ПЯТНАДЦАТЬ";
        }
        if (hourGetter == "16") {
            hourText = "ШЕСТНАДЦАТЬ";
        }
        if (hourGetter == "17") {
            hourText = "СЕМНАДЦАТЬ";
        }
        if (hourGetter == "18") {
            hourText = "ВОСЕМНАДЦАТЬ";
        }
        if (hourGetter == "19") {
            hourText = "ДЕВЯТНАДЦАТЬ";
        }
        if (hourGetter == "20") {
            hourText = "ДВАДЦАТЬ";
        }
        if (hourGetter == "21") {
            hourText = "ДВАДЦАТЬ ОДИН";
        }
        if (hourGetter == "22") {
            hourText = "ДВАДЦАТЬ ДВА";
        }
        if (hourGetter == "23") {
            hourText = "ДВАДЦАТЬ ТРИ";
        }

        if (minuteGetter == "00") {
            minuteText = "РОВНО";
        }
        if (minuteGetter == "01") {
            minuteText = "НОЛЬ ОДИН";
        }
        if (minuteGetter == "02") {
            minuteText = "НОЛЬ ДВА";
        }
        if (minuteGetter == "03") {
            minuteText = "НОЛЬ ТРИ";
        }
        if (minuteGetter == "04") {
            minuteText = "НОЛЬ ЧЕТЫРЕ";
        }
        if (minuteGetter == "05") {
            minuteText = "НОЛЬ ПЯТЬ";
        }
        if (minuteGetter == "06") {
            minuteText = "НОЛЬ ШЕСТЬ";
        }
        if (minuteGetter == "07") {
            minuteText = "НОЛЬ СЕМЬ";
        }
        if (minuteGetter == "08") {
            minuteText = "НОЛЬ ВОСЕМЬ";
        }
        if (minuteGetter == "09") {
            minuteText = "НОЛЬ ДЕВЯТЬ";
        }
        if (minuteGetter == "10") {
            minuteText = "ДЕСЯТЬ";
        }
        if (minuteGetter == "11") {
            minuteText = "ОДИННАДЦАТЬ";
        }
        if (minuteGetter == "12") {
            minuteText = "ДВЕНАДЦАТЬ";
        }
        if (minuteGetter == "13") {
            minuteText = "ТРИНАДЦАТЬ";
        }
        if (minuteGetter == "14") {
            minuteText = "ЧЕТЫРНАДЦАТЬ";
        }
        if (minuteGetter == "15") {
            minuteText = "ПЯТНАДЦАТЬ";
        }
        if (minuteGetter == "16") {
            minuteText = "ШЕСТНАДЦАТЬ";
        }
        if (minuteGetter == "17") {
            minuteText = "СЕМНАДЦАТЬ";
        }
        if (minuteGetter == "18") {
            minuteText = "ВОСЕМНАДЦАТЬ";
        }
        if (minuteGetter == "19") {
            minuteText = "ДЕВЯТНАДЦАТЬ";
        }
        if (minuteGetter == "20") {
            minuteText = "ДВАДЦАТЬ";
        }
        if (minuteGetter == "21") {
            minuteText = "ДВАДЦАТЬ ОДИН";
        }
        if (minuteGetter == "22") {
            minuteText = "ДВАДЦАТЬ ДВА";
        }
        if (minuteGetter == "23") {
            minuteText = "ДВАДЦАТЬ ТРИ";
        }
        if (minuteGetter == "24") {
            minuteText = "ДВАДЦАТЬ ЧЕТЫРЕ";
        }
        if (minuteGetter == "25") {
            minuteText = "ДВАДЦАТЬ ПЯТЬ";
        }
        if (minuteGetter == "26") {
            minuteText = "ДВАДЦАТЬ ШЕСТЬ";
        }
        if (minuteGetter == "27") {
            minuteText = "ДВАДЦАТЬ СЕМЬ";
        }
        if (minuteGetter == "28") {
            minuteText = "ДВАДЦАТЬ ВОСЕМЬ";
        }
        if (minuteGetter == "29") {
            minuteText = "ДВАДЦАТЬ ДЕВЯТЬ";
        }
        if (minuteGetter == "30") {
            minuteText = "ТРИДЦАТЬ";
        }
        if (minuteGetter == "31") {
            minuteText = "ТРИДЦАТЬ ОДИН";
        }
        if (minuteGetter == "32") {
            minuteText = "ТРИДЦАТЬ ДВА";
        }
        if (minuteGetter == "33") {
            minuteText = "ТРИДЦАТЬ ТРИ";
        }
        if (minuteGetter == "34") {
            minuteText = "ТРИДЦАТЬ ЧЕТЫРЕ";
        }
        if (minuteGetter == "35") {
            minuteText = "ТРИДЦАТЬ ПЯТЬ";
        }
        if (minuteGetter == "36") {
            minuteText = "ТРИДЦАТЬ ШЕСТЬ";
        }
        if (minuteGetter == "37") {
            minuteText = "ТРИДЦАТЬ СЕМЬ";
        }
        if (minuteGetter == "38") {
            minuteText = "ТРИДЦАТЬ ВОСЕМЬ";
        }
        if (minuteGetter == "39") {
            minuteText = "ТРИДЦАТЬ ДЕВЯТЬ";
        }
        if (minuteGetter == "40") {
            minuteText = "СОРОК";
        }
        if (minuteGetter == "41") {
            minuteText = "СОРОК ОДИН";
        }
        if (minuteGetter == "42") {
            minuteText = "СОРОК ДВА";
        }
        if (minuteGetter == "43") {
            minuteText = "СОРОК ТРИ";
        }
        if (minuteGetter == "44") {
            minuteText = "СОРОК ЧЕТЫРЕ";
        }
        if (minuteGetter == "45") {
            minuteText = "СОРОК ПЯТЬ";
        }
        if (minuteGetter == "46") {
            minuteText = "СОРОК ШЕСТЬ";
        }
        if (minuteGetter == "47") {
            minuteText = "СОРОК СЕМЬ";
        }
        if (minuteGetter == "48") {
            minuteText = "СОРОК ВОСЕМЬ";
        }
        if (minuteGetter == "49") {
            minuteText = "СОРОК ДЕВЯТЬ";
        }
        if (minuteGetter == "50") {
            minuteText = "ПЯТЬДЕСЯТ";
        }
        if (minuteGetter == "51") {
            minuteText = "ПЯТЬДЕСЯТ ОДИН";
        }
        if (minuteGetter == "52") {
            minuteText = "ПЯТЬДЕСЯТ ДВА";
        }
        if (minuteGetter == "53") {
            minuteText = "ПЯТЬДЕСЯТ ТРИ";
        }
        if (minuteGetter == "54") {
            minuteText = "ПЯТЬДЕСЯТ ЧЕТЫРЕ";
        }
        if (minuteGetter == "55") {
            minuteText = "ПЯТЬДЕСЯТ ПЯТЬ";
        }
        if (minuteGetter == "56") {
            minuteText = "ПЯТЬДЕСЯТ ШЕСТЬ";
        }
        if (minuteGetter == "57") {
            minuteText = "ПЯТЬДЕСЯТ СЕМЬ";
        }
        if (minuteGetter == "58") {
            minuteText = "ПЯТЬДЕСЯТ ВОСЕМЬ";
        }
        if (minuteGetter == "59") {
            minuteText = "ПЯТЬДЕСЯТ ДЕВЯТЬ";
        }
        var textTime = hourText + "<br/>" + minuteText;
    }
    if (clicks >= 3){
        if (minuteGetter < 10){
            minuteGetter = "0"+minuteGetter;
        }
        var textTime = hourGetter + "<br/>" + minuteGetter;
        if (clicks >= 6){
            clicks = 0;
        }
    }
    document.getElementById("wclock").innerHTML=textTime;
    window.setTimeout("getTextTime();", 500);
}

function counter() {
    clicks++;
    changeColor();
}

function changeColor() {
    var red = Math.floor(Math.random()*(256));
    var green = Math.floor(Math.random()*(256));
    var blue = Math.floor(Math.random()*(256));
    var redbg = red - 30;
    var greenbg = green - 30;
    var bluebg = blue - 30;
    console.log("red: "+ red +"; green: "+green+"; blue: "+blue);
    document.getElementById("wclock").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    document.body.style.backgroundColor = "rgb("+redbg+","+greenbg+","+bluebg+")";
}
