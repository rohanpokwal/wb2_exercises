"use script";

let word = "wow";
splitWord = word.split(""); //this puts on array
reversedArray = splitWord.reverse(); //it reverse the array bc array has the reverse method
reversedWord = reversedArray.join(""); //converts to string

if (word === reversedWord) {
  console.log("It is a Palladian");
} else {
  console.log("It is NOT a Palladian");
}
