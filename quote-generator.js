document.addEventListener('DOMContentLoaded', start)
var quoteButton = document.getElementById("quote-button")
var quoteArray = [ 1, 2, 3, 4]

var testVar = document.getElementsByClassName('background')
console.log(testVar)

quoteButton.addEventListener('click', randomiseQuote())

function randomiseQuote() {
  var quoteIndex = Math.floor(Math.random() * (quoteArray.length - 1))
  quoteButton.innerHTML = quoteArray[quoteIndex]
}

