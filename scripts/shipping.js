// shipping.js
let useShip = document.getElementById("useShip");
window.addEventListener("click", copyShippingToBilling);

function copyShippingToBilling(){
	if (useShip.checked) {
		document.getElementById("firstnameBill").value = document.getElementById("firstnameShip").value;
		document.getElementById("lastnameBill").value = document.getElementById("lastnameShip").value;
		document.getElementById("address1Bill").value = document.getElementById("address1Ship").value;
		document.getElementById("cityBill").value = document.getElementById("cityShip").value;
		document.getElementById("countryBill").value = document.getElementById("countryShip").value;
		document.getElementById("codeBill").value = document.getElementById("codeShip").value;
		document.getElementById("stateBill").value = document.getElementById("stateShip").value;
	}
}

function submitShippingForm(event) {
    event.preventDefault();
    localStorage.removeItem('school_cart');
    window.location.href = "submit.html";
}