function updateColor() {
    let valueRed = document.getElementById("red").value;
    let valueBlue = document.getElementById("blue").value;
    let valueGreen = document.getElementById("green").value;
    document.getElementById("valorRed").value = valueRed;
    document.getElementById("valorGreen").value = valueGreen;
    document.getElementById("valorBlue").value = valueBlue;
    console.log(valueRed);
    console.log(valueGreen);
    console.log(valueBlue);
    document.getElementById("atari").style.backgroundColor = "rgb(" + valueRed + "," + valueGreen + "," + valueBlue + ")";
    document.getElementById("atari").style.boxShadow = "0 0 0 1em rgb(" + valueRed + "," + valueGreen + "," + valueBlue + "), 0 1em 0 1em rgb(" + valueRed + "," + valueGreen + "," + valueBlue + "), -2.5em 1.5em 0 .5em rgb(" + valueRed + "," + valueGreen + "," + valueBlue + "), 2.5em 1.5em 0 .5em rgb(" + valueRed + "," + valueGreen + "," + valueBlue + "), -3em -3em 0 0 rgb(" + valueRed + "," + valueGreen + "," + valueBlue + "), 3em -3em 0 0 rgb(" + valueRed + "," + valueGreen + "," + valueBlue + "), -2em -2em 0 0 rgb(" + valueRed + "," + valueGreen + "," + valueBlue + "), 2em -2em 0 0 rgb(" + valueRed + "," + valueGreen + "," + valueBlue + "), -3em -1em 0 0 rgb(" + valueRed + "," + valueGreen + "," + valueBlue + "), -2em -1em 0 0 rgb(" + valueRed + "," + valueGreen + "," + valueBlue + "), 2em -1em 0 0 rgb(" + valueRed + "," + valueGreen + "," + valueBlue + "), 3em -1em 0 0 rgb(" + valueRed + "," + valueGreen + "," + valueBlue + "), -4em 0 0 0 rgb(" + valueRed + "," + valueGreen + "," + valueBlue + "), -3em 0 0 0 rgb(" + valueRed + "," + valueGreen + "," + valueBlue + "), 3em 0 0 0 rgb(" + valueRed + "," + valueGreen + "," + valueBlue + "), 4em 0 0 0 rgb(" + valueRed + "," + valueGreen + "," + valueBlue + "), -5em 1em 0 0 rgb(" + valueRed + "," + valueGreen + "," + valueBlue + "), -4em 1em 0 0 rgb(" + valueRed + "," + valueGreen + "," + valueBlue + "), 4em 1em 0 0 rgb(" + valueRed + "," + valueGreen + "," + valueBlue + "), 5em 1em 0 0 rgb(" + valueRed + "," + valueGreen + "," + valueBlue + "), -5em 2em 0 0 rgb(" + valueRed + "," + valueGreen + "," + valueBlue + "), 5em 2em 0 0 rgb(" + valueRed + "," + valueGreen + "," + valueBlue + "), -5em 3em 0 0 rgb(" + valueRed + "," + valueGreen + "," + valueBlue + "), -3em 3em 0 0 rgb(" + valueRed + "," + valueGreen + "," + valueBlue + "), 3em 3em 0 0 rgb(" + valueRed + "," + valueGreen + "," + valueBlue + "), 5em 3em 0 0 rgb(" + valueRed + "," + valueGreen + "," + valueBlue + "), -2em 4em 0 0 rgb(" + valueRed + "," + valueGreen + "," + valueBlue + "), -1em 4em 0 0 rgb(" + valueRed + "," + valueGreen + "," + valueBlue + "), 1em 4em 0 0 rgb(" + valueRed + "," + valueGreen + "," + valueBlue + "), 2em 4em 0 0 rgb(" + valueRed + "," + valueGreen + "," + valueBlue + ")";
}