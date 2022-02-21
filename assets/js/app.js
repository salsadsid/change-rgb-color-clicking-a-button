function changeRgbColor() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    return `rgb(${red},${green},${blue})`
}
document.getElementById('btn').addEventListener('click', function () {
    const bodyBg = document.getElementById('body-bg');
    const colorCode = document.getElementById('color-code');
    bodyBg.style.backgroundColor = changeRgbColor();
    colorCode.innerText = changeRgbColor();
})
