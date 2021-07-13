
for(let i = 0; i < document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].querySelector("click",function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
}
document.addEventListener(`keydown`, function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("https://github.com/YashEdakhe/DrumKit/blob/6d198ac8a71923253c27cab71851c227b41a4db3/sounds/tom-1.mp3")
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("https://github.com/YashEdakhe/DrumKit/blob/6d198ac8a71923253c27cab71851c227b41a4db3/sounds/tom-2.mp3")
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("https://github.com/YashEdakhe/DrumKit/blob/6d198ac8a71923253c27cab71851c227b41a4db3/sounds/tom-3.mp3")
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("https://github.com/YashEdakhe/DrumKit/blob/6d198ac8a71923253c27cab71851c227b41a4db3/sounds/tom-4.mp3")
            tom4.play();
            break;
        case "j":
            var crash = new Audio("https://github.com/YashEdakhe/DrumKit/blob/6d198ac8a71923253c27cab71851c227b41a4db3/sounds/crash.mp3")
            crash.play();
            break;
        case "k":
            var kick = new Audio("https://github.com/YashEdakhe/DrumKit/blob/6d198ac8a71923253c27cab71851c227b41a4db3/sounds/kick-bass.mp3")
            kick.play();
            break;
        case "l":
            var snare = new Audio("https://github.com/YashEdakhe/DrumKit/blob/6d198ac8a71923253c27cab71851c227b41a4db3/sounds/snare.mp3")
            snare.play();
            break;
        default:
            console.log("invalid Input")
    }
};

function buttonAnimation(currentKey){
   var activeButton =  document.querySelector("."+currentKey);
    activeButton.classList.add("pressed")

    setTimeout(() => {
        activeButton.classList.remove("pressed")
    }, 100);
}
