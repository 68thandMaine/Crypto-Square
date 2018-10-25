var sentence = "look at this sentence"

function wordArr(word) {
  return word.split('');
}

function sentenceArr(sentence) {
  var array = sentence.split(" ");
  var result = [];
  array.forEach(function(word) {
    var tempArr = wordArr(word)
    result = result.concat(tempArr);
  })
  console.log(result)
  return result;
}

function count(array) {
  return array.length;
}

function determineColumns(array) {
  var root = Math.sqrt(count(array));
  if (Number.isInteger(root)) {
    console.log("root = " + root);
    return root
    //the width of the square is equal to root
  } else {
    root = Math.ceil(root)
    console.log("root = " + root);
    return root;
    //if the root is not an integer, round up to the nearest integer and return
  }
}

function encrypt(sentence) {
  var array = sentenceArr(sentence);
  var columns = determineColumns(array);
  var tempArray = [];
  var tempArray2 = [];

for (var j = 0; j < columns; j++){
  for (var i = j; i < array.length; i += columns) {
    tempArray.push(array[i]);
  };
}
  console.log(tempArray)
  return tempArray;
};

function cleanUp(sentence){
  var dirtyEncryptedArray = encrypt(sentence);
  var cleanedArray =[];
  dirtyEncryptedArray.forEach(function(letter){
    if (letter){
      cleanedArray.push(letter);
    }
  });
  for (var i = 0; i < cleanedArray.length; i += 6){
    cleanedArray.splice(i, 0, " ");
  }
  console.log(cleanedArray.join(""));
  return cleanedArray.join("");
};
