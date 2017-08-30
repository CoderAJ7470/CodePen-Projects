var randomNumber = 0;
var currentQuote = "";
var currentWhoSaid = "";

var whoSaidArray = ["Miles Kington",
					"Thomas Alva Edison",
					"Bill Gates",
					"Jimmy Kimmel",
					"Rich Hall",
					"George Carlin",
					"Reba McEntire",
					"Will Rogers",
					"Will Rogers",
					"Steve Jobs",
					"Steven Wright"];

var quotesArray = ["Knowledge is knowing that a tomato is a fruit. Wisdom is not putting it in a fruit salad.",
				   "Genius is one percent inspiration, ninety-nine percent perspiration.",
				   "The Wright Brothers created the single greatest cultural force since the invention of writing. The airplane became the first World Wide Web, bringing people, languages, ideas, and values together.",
				   "How can you ever be late for anything in London? They have a huge clock right in the middle of the town.",
				   "A hotel minibar allows you to see into the future and find out what a can of Pepsi will cost in 2020.",
				   "Why is there an expiration date on sour cream?",
				   "To succeed in life, you need three things: a wishbone, a backbone and a funny bone.",
				   "Even if you’re on the right track, you’ll get run over if you just sit there.",
				   "I don't make jokes. I just watch the government and report the facts.",
				   "Design is a funny word. Some people think design means how it looks. But of course if you dig deeper, it's really how it works.",
				   "What's another word for \"Thesaurus\"?"];

function getArrayLength()
{
	/* Get the length of any of the two arrays above */
	 return quotesArray.length;
}


/* Generate a random number that will span a range from 0 to the last index of each array */
function generateRandomNumber()
{
	randomNumber = Math.floor((Math.random() * getArrayLength()));
}

function showQuotesAndWhoSaid()
{	
	generateRandomNumber();
			
	document.getElementById("contentParagraph").innerHTML = "\"" + quotesArray[randomNumber] + "\"";
	
	document.getElementById("whoSaid").innerHTML = "- " + whoSaidArray[randomNumber];
}

function getCurrentQuote()
{
	currentQuote = document.getElementById("contentParagraph").innerHTML;
	
	return currentQuote;
}

function getCurrentWhoSaid()
{
	currentWhoSaid = document.getElementById("whoSaid").innerHTML;
	
	return currentWhoSaid;
}

function tweetCurrentQuote()
{	
	$(".twitter-share-button").attr("href", 'https://twitter.com/intent/tweet?text=' + getCurrentQuote() + " " + getCurrentWhoSaid());
}























