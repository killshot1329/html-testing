const VALUES = {
    x: 0
}

function onButtonClick() {
    VALUES.x += 1
    document.getElementById('counter').innerHTML = VALUES.x
}

function onDisplayButtonClick(){
    let button = document.querySelector("div", "centerpiece")
    console.log("got centerpiece");
    button.style.display = "block"
}