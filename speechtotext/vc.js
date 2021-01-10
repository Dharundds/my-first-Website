let speechRecognition = window.webkitSpeechRecognition
let recognition = new speechRecognition()
let textbox = $("#textbox")
let instruction = $("#instruction").css("color","aqua")
let content = ''

recognition.continuous = true
// recognition gets started

recognition.onstart = function () {
    instruction.text("Voice recognition is on . . ....")
    

}

recognition.onspeechend = function (){
    instruction.text("No Activity :(")
}

recognition.onerror = function (){
    instruction.text("Try again :)")
}

recognition.onresult = function (event) {
    let current = event.resultIndex;
    let transcript = event.results[current][0].transcript 
    content += transcript
    textbox.val(content)
}

$("#start-btn").click(function (event) {
    if (content.length) {
        content +=''
    }
    recognition.start()
})

$("#stop-btn").click(function (event) {
    recognition.stop()
    recognition.onspeechend = function (){
        instruction.text("Voice recognition Off.......")
    }
})



textbox.on('input',function (){
    content = $(this).val()
})