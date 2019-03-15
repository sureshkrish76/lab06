'use strict';

var visitingHours = ['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM'];

var SeaTacAirPort  = {
  locationName: 'SeaTac Airport',
  minCustomers: 3,
  maxCustomers: 24,
  avgCookies: 1.2
};



var SeaTacAirPortResults = [];
var SeaTacAirPortHourlyTotals = [];
for (var i=0;i<visitingHours.length;i++){
  //alert('try');
  SeaTacAirPortResults[i] = Math.round(Math.random() * (30 - 1) + 1);
  SeaTacAirPortHourlyTotals[i] = visitingHours[i] +': ' + SeaTacAirPortResults[i] + ' cookies' ;
}
var totalCookies = 0;
//var avgCookies;



function avgCookiesPerHour() {

  for (var i=0;i<visitingHours.length;i++){
    totalCookies =  totalCookies + SeaTacAirPortResults[i];
  }
  // avgCookies = totalCookies / (visitingHours.length - 1);
  return totalCookies / (visitingHours.length - 1);
}

//alert('Min ' + Math.min.apply(null,SeaTacAirPortResults));

//alert(' Randon ' + Math.round(Math.random(10,20)) * 12);
SeaTacAirPort.minCustomers = Math.min.apply(null,SeaTacAirPortResults);
SeaTacAirPort.maxCustomers = Math.max.apply(null,SeaTacAirPortResults);
SeaTacAirPort.avgCookies = Math.round(avgCookiesPerHour());

//alert('Reults :' + SeaTacAirPort);
console.log('Reults :' + SeaTacAirPort.avgCookies);
console.log('Reults2 :' + SeaTacAirPort.minCustomers);
console.log('Reults3 :' + SeaTacAirPort.maxCustomers);
console.log('try ' + SeaTacAirPortHourlyTotals);


var seatacList = document.getElementById('seatac-list');

for (var k = 0; k < SeaTacAirPortHourlyTotals.length; k++) {
  // 1. Create new element
  var liEl = document.createElement('li');
  // 2. Give the element some content
  liEl.textContent = SeaTacAirPortHourlyTotals[k];
  // 3. Append the new element to its parent in the DOM
  seatacList.appendChild(liEl);
}

