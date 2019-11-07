// sorting dictionary or map by key value based
// {"key": "value", "ab": "hi there", "we": "say what"}

const myData = [
  {
      "key": "value",
      "ab": "hi there",
      "we": "say what"
  }
];
function dynamicSort(property) {
  let sortOrder = 1;

  if(property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
  }

  return function (a,b) {
      if(sortOrder == -1){
          return b[property].compare(a[property]);
      }else{
          return a[property].compare(b[property]);
      }
  }
}

myData.sort(dynamicSort("key"));

console.log(myData);