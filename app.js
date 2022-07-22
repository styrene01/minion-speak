var btnTranslate = document.querySelector("#btn-translate");
var inputTxt = document.querySelector("#input-txt");
var output = document.querySelector("#output");

function clickEvent() {
    output.innerHTML = "Translated text is " + inputTxt.value;
}

btnTranslate.addEventListener("click", clickEvent);
