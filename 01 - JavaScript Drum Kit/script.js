// Select divs with key class
// Add event listener on key press
    // Function should:
    //  - Play sound on key press
    //  - Change styling on color and border


let playSound = (e) => {
    let keyLetter = e.code;
    let audioKeys = [...document.querySelectorAll(`[data-key="${keyLetter}"]`)];
    let audio = audioKeys[1];
    let key = audioKeys[0];
    key.classList.toggle("playing");
    audio.currentTime = 0;
    audio.play();
    setTimeout(10000);
    //key.classList.toggle("playing");
}

addEventListener("keydown", playSound);



