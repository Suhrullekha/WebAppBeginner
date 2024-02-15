const newQuote = document.getElementById("new");
const tweet = document.querySelector(".text")
const author = document.querySelector(".author")


async function newQuoteGen(){
    const apiUrl ="https://api.quotable.io/quotes/random"
    const response = await fetch(apiUrl);
    var data = await response.json(); 
    // console.log(data)
    tweet.innerHTML = "\""+data[0].content+"\"";
    author.innerHTML = data[0].author;

}

function tweetQuote(){
    var url = "https://twitter.com/intent/tweet?text="+tweet.innerHTML+"--- by "+author.innerHTML;
    window.open(url, '_blank');
}
newQuoteGen()