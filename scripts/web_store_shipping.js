      window.addEventListener("load", function(){   
         const params = new URLSearchParams(window.location.search);

  let shirts = params.get("shirts");
  let shirtsQty = Number(params.get("shirtsQty"));
  let painting = params.get("painting");
  let paintingQty = Number(params.get("paintingQty"));
  let yarn = params.get("yarn");
  let yarnQty = Number(params.get("yarnQty"));
  
const SHIRT_PRICE = 25.90;
const PAINTING_PRICE = 79.90;
const YARN_PRICE = 19.90;

let shirtTotal = shirtsQty * SHIRT_PRICE;
let paintingTotal = paintingQty * PAINTING_PRICE;
let yarnTotal = yarnQty * YARN_PRICE;

let grandTotal = shirtTotal + paintingTotal + yarnTotal;

let donation = params.has("donation");
if (donation) {
  grandTotal = Math.ceil(grandTotal);
}

document.getElementById("shirtsOut").textContent = shirts;
   document.getElementById("shirtQtyOut").textContent = shirtsQty;
   document.getElementById("shirtTotal").textContent = "$" + shirtTotal.toFixed(2);

   document.getElementById("paintingOut").textContent = painting;
   document.getElementById("paintingQtyOut").textContent = paintingQty;
   document.getElementById("paintingTotal").textContent = "$" + paintingTotal.toFixed(2);

   document.getElementById("yarnOut").textContent = yarn;
   document.getElementById("yarnQtyOut").textContent = yarnQty;
   document.getElementById("yarnTotal").textContent = "$" + yarnTotal.toFixed(2);

   document.getElementById("Total").textContent = "$" + grandTotal.toFixed(2);

let useShip = document.getElementById("useShip");
window.addEventListener("click", copyShippingToBilling);

function copyShippingToBilling(){
	if (useShip.checked) {
		document.getElementById("firstnameBill").value = document.getElementById("firstnameShip").value;
		document.getElementById("lastnameBill").value = document.getElementById("lastnameShip").value;
		document.getElementById("address1Bill").value = document.getElementById("address1Ship").value;
		document.getElementById("address2Bill").value = document.getElementById("address2Ship").value;
		document.getElementById("cityBill").value = document.getElementById("cityShip").value;
		document.getElementById("countryBill").value = document.getElementById("countryShip").value;
		document.getElementById("codeBill").value = document.getElementById("codeShip").value;
		document.getElementById("stateBill").value = document.getElementById("stateShip").value;
	}
}

let formElements = document.querySelectorAll("input[type = 'text']");
let fieldCount = formElements.length;
let errorBox = document.getElementById("errorBox");

for( let i = 0; i < fieldCount; i ++){
	formElements[i].addEventListener("invalid", showValidationError);
}

function showValidationError(evt){
	evt.preventDefault();
	errorBox.textContent = "Complete all highlighted fields";
}		 
      } );   