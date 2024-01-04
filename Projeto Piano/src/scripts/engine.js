const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input")
const keysCheck = document.querySelector(".keys-check input")

let mapedKeys = [];
let audio = new Audio("src/tunes/a.wav");

const playtune = (key) => {
    audio.src = `src/tunes/${key}.wav`;
    audio.play()

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(()=>{
        clickedKey.classList.remove("active");
    }, 150);
};

pianoKeys.forEach((key) => {
    key.addEventListener("click", ()=>playtune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
})

document.addEventListener("keydown", (a) => {
    if(mapedKeys.includes(a.key)){
        playtune(a.key);
    }
})

const handleVolume = (a)=>{
    audio.volume = a.target.value;
};

const showHideKeys = () =>{
    pianoKeys.forEach((key) => key.classList.toggle("hide"));
}

volumeSlider.addEventListener("input", handleVolume);

keysCheck.addEventListener("click", showHideKeys);