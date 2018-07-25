
var fs = require('fs');
var coreData = require('../girlsfrontline-core/data/doll.json');

var str = '{';

for (var i = 0; i < coreData.length; i++) {
  if (coreData[i]["nick"] != null) {
    if (coreData[i]["nick"].length == 0) continue;
    str += '"' + coreData[i]["id"] + '" : [';
    for (var j = 0; j < coreData[i]["nick"].length; j++) {
      str += '"' + coreData[i]["nick"][j] + '"';
      if (j != coreData[i]["nick"].length - 1) str += ',';
    }
    str += '],';
  }
}
console.log(str);

fs.writeFile('./data/dollNickname.json', str, 'utf-8', function(e) {
  if (e) console.log(e);
  console.log('done');
});