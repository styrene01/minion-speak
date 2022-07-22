var btnTranslate = document.querySelector("#btn-translate");
var inputTxt = document.querySelector("#input-txt");
var output = document.querySelector("#output");

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
// mock url for practice

// var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("Error! " + error);
}

function clickEvent() {
    // output.innerHTML = "Translated text is " + inputTxt.value;
    // this takes/reads the text from input box using .value and prints on the html using .innerhtml

    var inputText = inputTxt.value;

    fetch(getTranslationURL(inputText))
        .then((response) => response.json())
        .then((json) => {
            var translation = json.contents.translated;
            output.innerHTML = translation;
        })
        .catch(errorHandler);
    // .then((json) => console.log(json.contents.translated));
    // this prints on the console but we want inside our box so :
    // .then((json) => console.log(json));//this will give entire json but we only want the translated part so
}

btnTranslate.addEventListener("click", clickEvent);
