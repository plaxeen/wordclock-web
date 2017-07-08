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

var pushCount = 0;

function coreCount() {
    var currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();

    document.getElementById("textClock").innerHTML = timeText[hours]+"<br />"+timeText[minutes];
    window.setTimeout("coreCount();", 500)
}

function onClick() {
    ++pushCount;
    changeColor();
    document.cookie = "clicks=" + pushCount + ";path=/";
}

function changeColor() {
    var red = Math.floor(Math.random()*(256));
    var green = Math.floor(Math.random()*(256));
    var blue = Math.floor(Math.random()*(256));

    document.body.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
}
