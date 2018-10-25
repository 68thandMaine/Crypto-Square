var sentence = "look at this sentence"

function wordArr(word) {
  return word.split('');
}

function sentenceArr(sentence) {
  var array = sentence.split(" ");
  var result = [];
  array.forEach(function(word){
    debugger;
    var tempArr = wordArr(word)
    result = result.concat(tempArr);
  })
  console.log(result)
  return result;
}
