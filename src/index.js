const maxForm = document.querySelector("#input-maxValue");
const maxInput = document.querySelector("#input-maxValue input")
const chooseForm = document.querySelector("#input-chooseValue")

function handlerInputRange(event) {
    event.preventDefault();
    const rangeNumber = maxForm.value ;
    const maxvalue = maxInput.value
    localStorage.setItem("max value", maxvalue);
}

maxForm.addEventListener("submit",handlerInputRange);