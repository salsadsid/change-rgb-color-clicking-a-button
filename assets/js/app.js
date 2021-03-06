function changeRgbColor() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    return `rgb(${red},${green},${blue})`
}
document.getElementById('btn').addEventListener('click', function () {
    const bodyBg = document.getElementById('container');
    const colorCode = document.getElementById('color-code');
    const displayCopy = document.getElementById('display-copy');
    bodyBg.style.backgroundColor = changeRgbColor();
    colorCode.innerText = changeRgbColor();

    displayCopy.innerText = "";
})
document.getElementById('copy-btn').addEventListener('click', function () {
    const colorCode = document.getElementById('color-code');
    const displayCopy = document.getElementById('display-copy');
    navigator.clipboard.writeText(colorCode.innerText);
    displayCopy.innerText = "Copied!";
})