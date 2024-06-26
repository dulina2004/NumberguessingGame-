console.log("hi");

let randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(randomNumber);

function t() {
    let message;
    let guess = document.getElementById("input").value;
    console.log(randomNumber > guess);
    if (guess > randomNumber) {
        console.log("guess>>");
        message = ">>>> ?";
    } else if (guess < randomNumber) {
        console.log("guess<<");
        message = "<<< ?";
    } else {
        console.log("You won");
        message = "!! You won";
    }

    document.getElementById("display").innerHTML +=
        "<p>" + guess + "" + message + "</p>";
}
