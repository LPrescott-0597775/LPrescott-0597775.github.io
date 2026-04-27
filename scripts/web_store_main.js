let shirts = document.getElementById("shirts");
let painting = document.getElementById("painting");
let yarn = document.getElementById("yarn");
let shirtsQty = document.getElementById("shirtsQty");
let paintingQty = document.getElementById("paintingQty");
let yarnQty = document.getElementById("yarnQty");

let shirtError = document.getElementById("shirtError");
let paintingError = document.getElementById("paintingError");
let yarnError = document.getElementById("yarnError");

document.getElementById("webStore").addEventListener("submit", verifyItems);

function verifyItems(evt){
    let hasError = false;

    shirtError.textContent = "";
    paintingError.textContent = "";
    yarnError.textContent = "";
    
    if ((shirts.value != "" && Number(shirtsQty.value) <= 0) || (shirts.value == "" && Number(shirtsQty.value) > 0)) {
        showValidationError("shirts");
        hasError = true;
    }
    
    if ((painting.value != "" && Number(paintingQty.value) <= 0) || (painting.value == "" && Number(paintingQty.value) > 0)) {
        showValidationError("painting");
        hasError = true;
    }
    
    if ((yarn.value != "" && Number(yarnQty.value) <= 0) || (yarn.value == "" && Number(yarnQty.value) > 0)) {
        showValidationError("yarn");
        hasError = true;
    }

    if (hasError){
        evt.preventDefault(); // only stop if invalid
    }
}

function showValidationError(type){
    if (type === "shirts"){
        if (shirts.value !== "" && Number(shirtsQty.value) <= 0){
            shirtError.textContent = "Enter a quantity of shirts";
        } else {
            shirtError.textContent = "Enter a shirt size";
        }
    }

    if (type === "painting"){
        if (painting.value !== "" && Number(paintingQty.value) <= 0){
            paintingError.textContent = "Enter a quantity of paintings";
        } else {
            paintingError.textContent = "Enter a painting type";
        }
    }

    if (type === "yarn"){
        if (yarn.value !== "" && Number(yarnQty.value) <= 0){
            yarnError.textContent = "Enter a quantity of yarn";
        } else {
            yarnError.textContent = "Enter a yarn type";
        }
    }
}