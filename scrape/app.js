const client = require('cheerio-httpcli');

var url = 'https://byoinnavi.jp/tokyo/chuuoku?p=';
var times = 10;
var hospital = [];
var address = [];
var phone = [];

for (var i = 0; i < times; i++) {
  var accessUrl = url + String(i + 1);
  //console.log(accessUrl);
  client.fetch(accessUrl, {}, function (err, $, res) {
  
    // hospital name
    $('div.corp_title > h3 > a').each(function() {
      var res = $(this).text();
      hospital.push(res.replace('\n', '').replace('\n', ''));
    });
  
    var prefecture = [];
    var city = [];
    var town = [];
  
    // address
    $('td.clinic_address > span:nth-child(1) > span:nth-child(1)').each(function () {
      prefecture.push($(this).text());
    });
  
    $('td.clinic_address > span:nth-child(1) > span:nth-child(2)').each(function () {
      city.push($(this).text());
    });
    $('td.clinic_address > span:nth-child(1) > span:nth-child(3)').each(function () {
      town.push($(this).text());
    });
  
    for (var i = 0; i < prefecture.length; i++) {
      address.push(prefecture[i] + city[i] + town[i]);
    }
  
    // phone
    $('tr:nth-child(3) > td.clinic_tel').each(function () {
      phone.push($(this).text().replace('\n', '').replace('\n', ''));
    });
    
    // output
    for (var i = 0; i < hospital.length; i++) {
      console.log(hospital[i] + ", " + address[i] + ", " + phone[i]);
      hospital.splice(i, 1);
      address.splice(i, 1);
      phone.splice(i, 1);
    }

  });
}

