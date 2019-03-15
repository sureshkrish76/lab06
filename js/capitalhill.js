'use strict';

var visitingHours = ['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM'];

var capitalHill  = {
  locationName: 'Capitol Hill',
  minCustomers: 20,
  maxCustomers: 38,
  avgCookies: 2.3
};



var capitalHillResults = [];
var capitalHillHourlyTotals = [];
for (var i=0;i<visitingHours.length;i++){
  //alert('try');
  capitalHillResults[i] = Math.round(Math.random() * (30 - 1) + 1);
  capitalHillHourlyTotals[i] = visitingHours[i] +': ' + capitalHillResults[i] + ' cookies' ;
}
var totalCookies = 0;
//var avgCookies;



function avgCookiesPerHour() {

  for (var i=0;i<visitingHours.length;i++){
    totalCookies =  totalCookies + capitalHillResults[i];
  }
  // avgCookies = totalCookies / (visitingHours.length - 1);
  return totalCookies / (visitingHours.length - 1);
}

//alert('Min ' + Math.min.apply(null,capitalHillResults));

//alert(' Randon ' + Math.round(Math.random(10,20)) * 12);
capitalHill.minCustomers = Math.min.apply(null,capitalHillResults);
capitalHill.maxCustomers = Math.max.apply(null,capitalHillResults);
capitalHill.avgCookies = Math.round(avgCookiesPerHour());

//alert('Reults :' + capitalHill);
console.log('Reults :' + capitalHill.avgCookies);
console.log('Reults2 :' + capitalHill.minCustomers);
console.log('Reults3 :' + capitalHill.maxCustomers);
console.log('try ' + capitalHillHourlyTotals);


var capitalhillList = document.getElementById('capitalhill-list');

for (var k = 0; k < capitalHillHourlyTotals.length; k++) {
  // 1. Create new element
  var liEl = document.createElement('li');
  // 2. Give the element some content
  liEl.textContent = capitalHillHourlyTotals[k];
  // 3. Append the new element to its parent in the DOM
  capitalhillList.appendChild(liEl);
}

