
function calculatePercentage() {
    let number = document.getElementById("number").value;
    let percent = document.getElementById("percent").value;

    if (number === "" || percent === "") {
        document.getElementById("result").innerHTML = "Please enter values";
        return;
    }

    let result = (number * percent) / 100;

    document.getElementById("result").innerHTML =
        percent + "% of " + number + " = " + result;
}


function increasePercentage() {
    let number = Number(document.getElementById("number").value);
    let percent = Number(document.getElementById("percent").value);

    let result = number + (number * percent / 100);

    document.getElementById("result").innerHTML =
        "After Increase = " + result;
}


function decreasePercentage() {
    let number = Number(document.getElementById("number").value);
    let percent = Number(document.getElementById("percent").value);

    let result = number - (number * percent / 100);

    document.getElementById("result").innerHTML =
        "After Decrease = " + result;
}
