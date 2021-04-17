var translateButton= document.querySelector("#english-translate-button")
var englishData=document.querySelector("#english-textarea")
var bananaData=document.querySelector("#yoda-textarea")

var serverUrl="https://api.funtranslations.com/translate/yoda.json"

function createTranslationUrl(input){
    return serverUrl + "?" + "text=" + input
}


function errorHandler(error){
    console.log("error occured",error)
    alert("Something went wrong ! please try after some time")
}
function clickHandler(){
    var textInput=englishData.value;

    fetch(createTranslationUrl(textInput))
    .then(response => response.json())
    .then(json => {
        var translatedText=json.contents.translated;
        bananaData.innerText=translatedText;
    })
    .catch(errorHandler)
}
    


translateButton.addEventListener("click",clickHandler)