/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


let quotes = [
//BoredElonMusk quotes taken from Twitter
//last object includes a `citation` property from a book
  {quotes: "eBay kiosks outside Apple stores that help speed up the process.", source: "BoredElonMusk", year: 2017, tag: "humor"},
  {quotes: "A network called 'Background TV' where every show is purposely designed to be watched passively while you mess around on your phone", source: "BoredElonMusk", year: 2017, tag: "humor"},
  {quotes: "'Avoid driving into blinding sun' filter for Maps", source: "BoredElonMusk", year: 2017, tag: "innovative"},
  {quotes: "Drones that produce artificial clouds around themselves and fly between you and the sun on extra hot days", source: "BoredElonMusk", year: 2018, tag: "humor"},
  {quotes: "The following is a list of Winter Olympic sports that wouldn't be made better with the addition of rockets:", source: "BoredElonMusk", year: 2018, tag: "humor"},
  {quotes: "Technically speaking, Earth is in space. Space isn’t a separate place", source: "BoredElonMusk", year: 2018, tag: "science"},
  {quotes: "A special glove that allows you to snap your fingers and eliminate half of movies with unoriginal plots", source: "BoredElonMusk", year: 2019, tag: "humor"},
  {quotes: "Let’s break up big political parties. Consumers deserve more than two choices", source: "BoredElonMusk", year: 2019, tag: "inspired"},
  {quotes: "Tinder, for celestial objects", source: "BoredElonMusk", year: 2019, tag: "humor"},
  {quotes: "If I had to do this book without him, so be it ", source: "Ashlee Vance", "citation": "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future", year: 2015, tag: "dedication"}
];


/***
Function creates random number.
***/
const getRandomQuote = () => {
  let rand = Math.floor(Math.random() * quotes.length);
    return quotes[rand];
};


/***
Function creates random background color.

currently rand is not random


const rgbColor = () => {
  let rand = Math.floor(Math.random() * 180);
  let bgStyle = "rgb(" + rand + "," + rand + "," + rand + ");"
  console.log(bgStyle);
  return bgStyle;
}
***/
let rgbColor = () => {
return  Math.floor(Math.random() * 180);
}


console.log("rgb(" + rgbColor() + "," + rgbColor() + "," + rgbColor() + ")")
console.log(typeof rgbColor());

let bgColor = () => {
  return "rgb(" + rgbColor() + "," + rgbColor() + "," + rgbColor() + ")";
}
/***
Control flow for the object.
***/
const printQuote = () => {
  let quoteIs = getRandomQuote();
  console.log(quoteIs.quotes);
  console.log(quoteIs.source);
  console.log("has citation?", quoteIs.citation);
  console.log(quoteIs.year);
  console.log(quoteIs.tag);

  let citationIs = () => {
  if(!quoteIs.citation){
    //update quote
    document.getElementById("quote-box").innerHTML =
    '<p class="quote">' + quoteIs.quotes + '</p>' +
  	'<p class="source">' + quoteIs.source + '</p>' +
    '<span class="year">' + quoteIs.year + '</span>';
    //update background
    document.getElementsByTagName("body")[0].style.background = bgColor();
    //update tag
    document.getElementById("tag").innerHTML =
    quoteIs.tag;

  }else{
    //update quote
    document.getElementById("quote-box").innerHTML =
    '<p class="quote">' + quoteIs.quotes + '</p>' +
  	'<p class="source">' + quoteIs.source + '</p>' +
    '<span class="citation">' + quoteIs.citation + '</span>' +
    '<span class="year">' + quoteIs.year + '</span>';
    //update background
    document.getElementsByTagName("body")[0].style.background = bgColor();
    //update tag
    document.getElementById("tag").innerHTML =
    quoteIs.tag;
  };
};//citationIs
citationIs();
};//printQuote
printQuote();


/***
Document is listening.
***/
document.getElementById("loadQuote").addEventListener("click", printQuote, false);
/***
Variable includes function.
***/
const newQuote = setInterval(()=>{printQuote()}, 3000);
newQuote;


/***
Change background
***/
