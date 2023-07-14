var Quotes = [
    {
        quote:`"Be yourself; everyone else is already taken."`,
        writer :`-Oscar Wilde`
    },
    {
        quote:`"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."`,
        writer :`-Marilyn Monroe`
    },
    {
        quote:`"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."`,
        writer :`-Albert Einstein`
    },
    {
        quote:`"So many books, so little time."`,
        writer :'-Frank Zappa'
    },
    {
        quote:`"A room without books is like a body without a soul."`,
        writer :`-Marcus Tullius Cicero `
    },
    {
        quote:`"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."`,
        writer :`-Bernard M. Baruch`
    },
    {
        quote:`"You've gotta dance like there's nobody watching,
        Love like you'll never be hurt,
        Sing like there's nobody listening,
        And live like it's heaven on earth."`,
        writer :`-William W. Purkey`
    },
    {
        quote:`"You know you're in love when you can't fall asleep because reality is finally better than your dreams."`,
        writer:`- Dr. Seuss`
    },
    {
        quote:`"You only live once, but if you do it right, once is enough."`,
        writer:`- Mae West`
    },
    {
        quote:`"Be the change that you wish to see in the world."`,
        writer:`- Mahatma Gandhi`
    }
]
let quote = document.getElementById("Quote");
let quoteWriter = document.getElementById("quoteWriter");

//Take a copy from  my data to keep it save if i reload the web page
let copyOfQuotes = Quotes.slice();

function chooseQuote()
{
    //Generate random index between 0 to the length of my copy 
    let randomNumber = Math.floor(Math.random()*copyOfQuotes.length);

    //give HTML element the content of the index i generated before
    quote.innerHTML = copyOfQuotes[randomNumber]. quote;
    quoteWriter.innerHTML = copyOfQuotes [randomNumber].writer;
    
    //Delete the content of the index i showed before and let copy array length decreases one 
    copyOfQuotes.splice(randomNumber,1);
    //print length of the copied array to ensure from this function 
    console.log(copyOfQuotes.length);
    //check if i had finised to show end message 
    if(copyOfQuotes.length == 0)
    {
        quote.innerHTML = "Sorry We finised";
        quoteWriter.innerHTML =""
    }
}


/*
let quote = document.getElementById("Quote");
let quoteWriter = document.getElementById("quoteWriter");

function chooseQuote() {
        let randomNumber = Math.floor(Math.random()*Quotes.length);
        quote.innerHTML = Quotes [randomNumber]. quote;
        quoteWriter.innerHTML = Quotes [randomNumber].writer;
}
*/

/*
let quote = document.getElementById("Quote");
let quoteWriter = document.getElementById("quoteWriter");
let copyOfQuotes = Quotes.slice();
function chooseQuote() {
   do{
        let randomNumber = Math.floor(Math.random()*copyOfQuotes.length);
        quote.innerHTML = copyOfQuotes [randomNumber]. quote;
        quoteWriter.innerHTML = copyOfQuotes [randomNumber].writer;
        copyOfQuotes.splice(randomNumber,1);
   }while(copyOfQuotes.length > 0)
   quote.innerHTML = "Sorry We finished Today";
   quoteWriter.innerHTML="";
}
*/
