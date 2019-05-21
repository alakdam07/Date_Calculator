
//How many days left

function dateCount() {
 
  let startDate = new Date(document.getElementById("startDate").value); //put the user input in global scope, as a reault we can work on diffrent function. 
  let endDate =new Date(document.getElementById("endDate").value);
  // console.log(endDate); //User put end date
  let diff = Math.abs(endDate - startDate); //substract days
  let remDays = Math.round(diff/(1000*60*60*24));// Converting milliseconds into days
  document.getElementById("print").innerHTML= "You have "+remDays + " days left ";
}



///Business day
 
function businessDay(){
  let startDate = new Date(document.getElementById("startDate").value); //user put start date
  let endDate =new Date(document.getElementById("endDate").value);
  //console.log(startDate);
  //console.log(endDate);
  let workDay = 0; 
  while (startDate <= endDate) {
      // Skips Sunday and Saturday
      if (startDate.getDay() !== 0 && startDate.getDay() !== 6) {
         workDay++;
      }
      startDate = startDate.addDays(1);
  }
 
  document.getElementById("print1").innerHTML=workDay +" business day";
}
Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;

};


//count down


function countDown () {
	let startDate = new Date(document.getElementById("startDate").value); //put the user input in global scope, as a reault we can work on diffrent function. 
  let endDate =new Date(document.getElementById("endDate").value);
  // console.log(endDate); //User put end date
  let diff = Math.abs(endDate - startDate); //substract days
  let remDays = Math.round(diff/(1000*60*60*24));
	let futureDate = new Date(
		new Date().setDate(new Date().getDate() + remDays)
);
	let timer = setInterval(function () {
	let finalCountdown= futureDate- new Date().getTime();

	//  days, hours, minutes and seconds conversion
		let days = Math.floor(finalCountdown / (1000 * 60 * 60 * 24));
		let hours = Math.floor(
			(finalCountdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
		);
		let minutes = Math.floor((finalCountdown % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((finalCountdown % (1000 * 60)) / 1000);

	
		document.getElementById('print2').innerHTML =
			days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

		//after countdown it will show below argument 
		if (finalCountdown < 0) {
			clearInterval(timer);
			document.getElementById('print3').innerHTML =
				'Your countdown is over';
		}
	}, 100);
};
  

 



