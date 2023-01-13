let text = document.getElementById("textarea");
const playButton = document.getElementById("submitbtn");

// text.onchange = function textt() {
//     lengtha = text.value.length;
//     console.log(lengtha);
// }

if ('speechSynthesis' in window) {
    // console.log("Speech Synthesis is supported 🎉")

    const voices = window.speechSynthesis.getVoices();

    let mainvoice = 1;
    window.onload = function() {
        let select = document.getElementById("customvoice");
        voices = window.speechSynthesis.getVoices();
        for (let i = 0; i < voices.length; i++) {
            let option = document.createElement("option");
                option.value = voices[i].name;
                option.text = voices[i].name;
                select.add(option);
        }
    }

    getvala=(texts) => {
        let selectedanswer = (texts.value)
        mainvoice = selectedanswer;
    }

    document.getElementById("clearbtn").addEventListener('click', ()=>{
        text.value = "";
    })

    playButton.addEventListener("click", abc);

    let playing = false;

    let volume = 1;

    getval=(texts) => {
        let selectedanswer = (texts.value)
        volume = selectedanswer;
    } 

    function abc() {
        if(text.value === "") {
            alert("🤘 please Write something I am Very Exited to Speak Your Words 🤘")
        } else {
        let msg = new window.SpeechSynthesisUtterance(text.value);
        if (!playing) {
            voices = window.speechSynthesis.getVoices();
            if(mainvoice === 1) {
                result = voices[12];
            } else {
                result = voices.find(({ name }) => name === mainvoice);
            }
            msg.volume = 1; 
            msg.rate =  volume; 
            msg.pitch = 1;
            msg.voice = result;
            msg.lang = 'en';
            window.speechSynthesis.speak(msg);
            playButton.innerHTML = 'Stop';
            playing = true;
        } else {
            speechSynthesis.cancel();
            playButton.innerHTML = 'play';
            playing = false;
        }
        msg.addEventListener("end", function() {
            playButton.innerHTML = 'play';
            playing = false;
            });
        }
}

   }else{
    alert("Text To Speech is not Supported 😞 on your device");
    window.close();
}
