function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}// rn

let arrayNumber = [getRandomInt(1, 9), getRandomInt(1, 9), getRandomInt(1, 9), getRandomInt(1, 9),]

//массив
function $number(value) {
    let $num = document.createElement("div")
    $num.className = "number";
    $num.innerText = value;
    return $num
}//создает div
function renderArray(array, body) {
    body.innerHTML = ""
    for (let item of array) {
        let $arrayItem = $number(item);
        body.append($arrayItem)
    }
}

let $findDiv = document.querySelector("#numbers")
renderArray(["-", "-", "-", "-"], $findDiv);


document.addEventListener("click", function (event) {
    if (event.target.tagName !== "DIV") return;
    let action = event.target.textContent;
    if (action === "reset") {
        renderArray(arrayNumber, $findDiv);
    }
})








