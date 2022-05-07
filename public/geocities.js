function start() {
    document.querySelector("html body").innerHTML += `<link href="geocities.css" rel="stylesheet">
    <audio autoplay loop>
        <source src="https://www.cameronsworld.net/sound/cameronsworld.ogg" type="audio/ogg">
        <source src="https://www.cameronsworld.net/sound/cameronsworld.mp3" type="audio/mpeg">
    </audio>`;

    document.querySelector("audio").play();
}

var btn = document.createElement("button")
btn.onclick = start
btn.style = `
    background-image: url('https://www.cameronsworld.net/img/content/23/frame-4/18.png');
    width: 93px;
    height: 42px;
    display: block;
    cursor: pointer;`
document.querySelector(".mume").appendChild(btn)