'use strict';

var visitingHours = ['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM'];

var seaCenter  = {
  locationName: 'Seattle Center',
  minCustomers: 11,
  maxCustomers: 38,
  avgCookies: 3.7
};


var seaCenterResults = [];
var seaCenterHourlyTotals = [];
for (var i=0;i<visitingHours.length;i++){
  //alert('try');
  seaCenterResults[i] = Math.round(Math.random() * (30 - 1) + 1);
  seaCenterHourlyTotals[i] = visitingHours[i] +': ' + seaCenterResults[i] + ' cookies' ;
}
var totalCookies = 0;
//var avgCookies;



function avgCookiesPerHour() {

  for (var i=0;i<visitingHours.length;i++){
    totalCookies =  totalCookies + seaCenterResults[i];
  }
  // avgCookies = totalCookies / (visitingHours.length - 1);
  return totalCookies / (visitingHours.length - 1);
}

//alert('Min ' + Math.min.apply(null,seaCenterResults));

//alert(' Randon ' + Math.round(Math.random(10,20)) * 12);
seaCenter.minCustomers = Math.min.apply(null,seaCenterResults);
seaCenter.maxCustomers = Math.max.apply(null,seaCenterResults);
seaCenter.avgCookies = Math.round(avgCookiesPerHour());

//alert('Reults :' + seaCenter);
console.log('Reults :' + seaCenter.avgCookies);
console.log('Reults2 :' + seaCenter.minCustomers);
console.log('Reults3 :' + seaCenter.maxCustomers);
console.log('try ' + seaCenterHourlyTotals);


var seaCenter = document.getElementById('seacenter-list');

for (var k = 0; k < seaCenterHourlyTotals.length; k++) {
  // 1. Create new element
  var liEl = document.createElement('li');
  // 2. Give the element some content
  liEl.textContent = seaCenterHourlyTotals[k];
  // 3. Append the new element to its parent in the DOM
  seaCenter.appendChild(liEl);
}

