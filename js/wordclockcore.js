var timeText = ["НОЛЬ", "ОДИН", "ДВА", "ТРИ", "ЧЕТЫРЕ", "ПЯТЬ", "ШЕСТЬ",
        "СЕМЬ", "ВОСЕМЬ", "ДЕВЯТЬ", "ДЕСЯТЬ", "ОДИННАДЦАТЬ", "ДВЕНАДЦАТЬ",
        "ТРИНАДЦАТЬ", "ЧЕТЫРНАДЦАТЬ", "ПЯТНАДЦАТЬ", "ШЕСТНАДЦАТЬ", "СЕМНАДЦАТЬ", "ВОСЕМНАДЦАТЬ",
        "ДЕВЯТНАДЦАТЬ", "ДВАДЦАТЬ", "ДВАДЦАТЬ ОДИН", "ДВАДЦАТЬ ДВА", "ДВАДЦАТЬ ТРИ", "ДВАДЦАТЬ ЧЕТЫРЕ",
        "ДВАДЦАТЬ ПЯТЬ", "ДВАДЦАТЬ ШЕСТЬ", "ДВАДЦАТЬ СЕМЬ", "ДВАДЦАТЬ ВОСЕМЬ", "ДВАДЦАТЬ ДЕВЯТЬ", "ТРИДЦАТЬ",
        "ТРИДЦАТЬ ОДИН", "ТРИДЦАТЬ ДВА", "ТРИДЦАТЬ ТРИ", "ТРИДЦАТЬ ЧЕТЫРЕ", "ТРИДЦАТЬ ПЯТЬ", "ТРИДЦАТЬ ШЕСТЬ",
        "ТРИДЦАТЬ СЕМЬ", "ТРИДЦАТЬ ВОСЕМЬ", "ТРИДЦАТЬ ДЕВЯТЬ", "СОРОК", "СОРОК ОДИН", "СОРОК ДВА",
        "СОРОК ТРИ", "СОРОК ЧЕТЫРЕ", "СОРОК ПЯТЬ", "СОРОК ШЕСТЬ", "СОРОК СЕМЬ", "СОРОК ВОСЕМЬ",
        "СОРОК ДЕВЯТЬ", "ПЯТЬДЕСЯТ", "ПЯТЬДЕСЯТ ОДИН", "ПЯТЬДЕСЯТ ДВА", "ПЯТЬДЕСЯТ ТРИ", "ПЯТЬДЕСЯТ ЧЕТЫРЕ",
        "ПЯТЬДЕСЯТ ПЯТЬ", "ПЯТЬДЕСЯТ ШЕСТЬ", "ПЯТЬДЕСЯТ СЕМЬ", "ПЯТЬДЕСЯТ ВОСЕМЬ", "ПЯТЬДЕСЯТ ДЕВЯТЬ"];

var fonts = ["'Alegreya Sans SC', sans-serif", "'Roboto', sans-serif", "'Bad Script', cursive",
    "'Cormorant Unicase', serif", "'Exo 2', sans-serif", "'Lobster', cursive", "'Lora', serif"];

function coreCount() {
    var currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();

    document.getElementById("textClock").innerHTML = timeText[hours]+"<br />"+timeText[minutes];
    window.setTimeout("coreCount();", 500)
}

function onClick() {
    changeColor();
}

function changeColor() {
    var color1 = [Math.round(Math.random()*(255)), Math.round(Math.random()*(255)), Math.round(Math.random()*(255))];
    var color2 = [Math.round(Math.random()*(255)), Math.round(Math.random()*(255)), Math.round(Math.random()*(255))];

    var body = document.body.style;

    body.background = "linear-gradient(125deg, rgb("+color1[0]+","+color1[1]+","+color1[2]+"), rgb("+color2[0]+","+color2[1]+","+color2[2]+")";
    body.fontFamily = fonts[Math.round(Math.random()*(fonts.length))];
}
