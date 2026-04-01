// constants

//yard room
const YARD_NIGHTLY = 149;
const YARD_WEEKLY = 900;

//woods room
const WOODS_NIGHTLY = 199;
const WOODS_WEEKLY = 1200;

//other
const NIGHTLY_PET_FEE = 50;
const BREAKFAST_PLAN = 50;
//I am under 21 i do not know how much an alcohol costs ToT
const PROVIDED_DRINK = 100;
const RED_WINE = 100;
const WHITE_WINE = 75;
const CHAMPAIGNE = 150;

//setup on load
window.addEventListener("load", setupForm);

function setupForm() {
	//default values
	document.getElementById("room").value = "";
	document.getElementById("bkfst").checked = false;
	document.getElementById("nights").value = 1;
	document.getElementById("pets").checked = false;
	document.getElementById("drink").value = "";
	
	calcTotal();

	//event handlers
	document.getElementById("room").onchange = calcTotal;
	document.getElementById("bkfst").onchange = calcTotal;
	document.getElementById("nights").onchange = calcTotal;
	document.getElementById("pets").onchange = calcTotal;
	document.getElementById("drink").onchange = calcTotal;
}

//math
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
function calcTotal(){
	//default cost
	let cost = 0;

	//variables
	let bookRoom = document.getElementById("room").value;
	let bringPets = document.getElementById("pets").checked;
	let wantDrink = document.getElementById("drink").value;
	let breakfastPlan = document.getElementById("bkfst").checked
	//billable nights vs weeks
	let totalNights = document.getElementById("nights").value;
	let numOfWeeks = Math.floor(totalNights / 7);
	let numOfNights = totalNights % 7;
	
	
	//room bill
    if(bookRoom == "yr"){
		cost += (numOfNights * YARD_NIGHTLY);
		cost += (numOfWeeks * YARD_WEEKLY);
	}
	else if(bookRoom == "wr"){
		cost += (numOfNights * WOODS_NIGHTLY);
		cost += (numOfWeeks * WOODS_WEEKLY);
	}
	
	if(breakfastPlan == true){
		cost += totalNights * BREAKFAST_PLAN;
	}
	
	//other billable items
	if(bringPets == true){
		cost += NIGHTLY_PET_FEE * totalNights;
	}
	
	if(wantDrink != ""){
		if(wantDrink != "no_drink"){
			cost += PROVIDED_DRINK;
			if(wantDrink == "rw"){
				cost += RED_WINE;
			}
			else if(wantDrink == "ww"){
				cost += WHITE_WINE;
			}
			else{
				cost += CHAMPAIGNE;
			}
		}
	}
	
	//subtotal
	document.getElementById("quote").innerHTML = formatCurrency(cost);
}