let shirts = document.getElementById("shirts");
let painting = document.getElementById("painting");
let yarn = document.getElementById("yarn");
let shirtsQty = document.getElementById("shirtsQty");
let paintingQty = document.getElementById("paintingQty");
let yarnQty = document.getElementById("yarnQty");

let shirtError = document.getElementById("shirtError");
let paintingError = document.getElementById("paintingError");
let yarnError = document.getElementById("yarnError");

window.addEventListener("click", verifyItems);

function verifyItems(){
	if((shirts != "" && shirtsQty <= 0) || (shirts == "" && shirtsQty > 0)){
		showValidationError()
	}
	
	if((painting != "" && paintingQty <= 0) || (painting =="" && paintingQty > 0)){
		showValidationError()
	}
	
	if((yarn != "" && yarnQty <= 0) ||(yarn == "" && yarnQty > 0)){
		showValidationError()
	}
}

function showValidationError(evt){
	//evt.preventDefault();
	if(shirts !="" && shirtsQty <= 0){
		//evt.preventDefault();
		shirtError.textContent = "Enter a quantity of shirts";
	}
	else if(shirts == "" && shirtsQty > 0){
		//evt.preventDefault();
		shirtError.textContent = "Enter a shirt size";
	}
	
	if(painting !="" && paintingQty <= 0){
		//evt.preventDefault();
		shirtError.textContent = "Enter a quantity of shirts";
	}
	else if(painting =="" && paintingQty > 0){
		//evt.preventDefault();
		shirtError.textContent = "Enter a shirt size";
	}
	
	if(yarn !="" && yarnQty <= 0){
		//evt.preventDefault();
		shirtError.textContent = "Enter a quantity of shirts";
	}
	else if(yarn == "" && yarnQty > 0){
		//evt.preventDefault();
		shirtError.textContent = "Enter a shirt size";
	}
}