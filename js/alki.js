'use strict';

var visitingHours = ['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM'];

var alki  = {
  locationName: 'Alki',
  minCustomers: 2,
  maxCustomers: 16,
  avgCookies: 4.6
};



var alkiResults = [];
var alkiHourlyTotals = [];
for (var i=0;i<visitingHours.length;i++){
  //alert('try');
  alkiResults[i] = Math.round(Math.random() * (30 - 1) + 1);
  alkiHourlyTotals[i] = visitingHours[i] +': ' + alkiResults[i] + ' cookies' ;
}
var totalCookies = 0;
//var avgCookies;



function avgCookiesPerHour() {

  for (var i=0;i<visitingHours.length;i++){
    totalCookies =  totalCookies + alkiResults[i];
  }
  // avgCookies = totalCookies / (visitingHours.length - 1);
  return totalCookies / (visitingHours.length - 1);
}

//alert('Min ' + Math.min.apply(null,alkiResults));

//alert(' Randon ' + Math.round(Math.random(10,20)) * 12);
alki.minCustomers = Math.min.apply(null,alkiResults);
alki.maxCustomers = Math.max.apply(null,alkiResults);
alki.avgCookies = Math.round(avgCookiesPerHour());

//alert('Reults :' + alki);
console.log('Reults :' + alki.avgCookies);
console.log('Reults2 :' + alki.minCustomers);
console.log('Reults3 :' + alki.maxCustomers);
console.log('try ' + alkiHourlyTotals);


var alkiList = document.getElementById('alki-list');

for (var k = 0; k < alkiHourlyTotals.length; k++) {
  // 1. Create new element
  var liEl = document.createElement('li');
  // 2. Give the element some content
  liEl.textContent = alkiHourlyTotals[k];
  // 3. Append the new element to its parent in the DOM
  alkiList.appendChild(liEl);
}

