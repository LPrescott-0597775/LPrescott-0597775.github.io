// initializing the calendar
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday",
"Thursday", "Friday", "Saturday"];
let eventDates = ["3-29","3-30","3-31","4-1","4-2","4-3","4-4","4-5","4-6","4-7","4-8","4-9",
					"4-10","4-11","4-12","4-13","4-14","4-15","4-16","4-17","4-18","4-19","4-20",
					"4-21","4-22","4-23","4-24","4-25","4-26","4-27","4-28","4-29","4-30","5-1","5-2"];
window.addEventListener("load", addWeekDays);

function addWeekDays() {
   let i = 0; // initial counter value
   
   // reference the collection of heading cells in the table
   let headingCells = document.getElementsByTagName("th");
   
   // write each of the seven days into a heading cell
   while (i < 7) {
      headingCells[i].innerHTML = weekDays[i];
      
      i++;
   }
}

function isEventDay(checkDate){
	//event saturdays
	let satTwo = "4-11";
	let satFour = "4-25";
	
	if (checkDate === satTwo){
		return "<strong>MORNING:</strong> Pancakes and Painting<br><strong>EVENING:</strong> BLACKFISH (2013)";
	}
	else if (checkDate === satFour){
		return "<strong>MORNING:</strong> Downward Dog: Yoga 101 <br> <strong>EVENING:</strong> Monthly Bonfire";
	}
	else return "";
}

function isHoliday(checkDate){
	//holidays
	let goodFriday = "4-3";
	let easter = "4-5";
	let earthDay = "4-22";
	let arborDay = "4-24";
	
	if (checkDate === goodFriday){
		return "<i>Good Friday</i>";
	}
	else if (checkDate === easter){
		return "<i>Easter Sunday</i>";
	}
	else if (checkDate === earthDay){
		return "<i>Earth Day</i>";
	}
	else if (checkDate === arborDay){
		return "<i>Arbor Day</i>";
	}
	else return "";
}
	
window.addEventListener("load", showEvents);
function showEvents() {
   for (let i = 0; i < eventDates.length; i++) {
      //variables
	  let eventInfo = "<p2>";
	  let EventDay = "";
	  let holidayName = "";
	  
	  //check for special dates
	  EventDay = isEventDay(eventDates[i]);
	  holidayName  = isHoliday(eventDates[i]);
	  
      // edit the paragraph
      if (holidayName !== "") {
			eventInfo += holidayName;
		}
	  else if (EventDay !== "") {
			eventInfo += EventDay;
		}

      // Close the paragraph
      eventInfo += "</p2>";
      
      // Write the information into a table cell
      let tableCell = document.getElementById(eventDates[i]);   
      tableCell.insertAdjacentHTML("beforeEnd", eventInfo);
   }
}