const quotes = [
    "Success is not the absence of failure; it's the persistence through failure. Aisha Tyler",
    "The future belongs to those who believe in the beauty of their dreams. Eleanor Roosevelt",
    "In the middle of every difficulty lies opportunity.  Albert Einstein",
    "Courage doesn't mean you don't get afraid; courage means you don't let fear stop you.  Bethany Hamilton",
    "Don't watch the clock; do what it does. Keep going.  Sam",
    "Happiness is not something ready-made. It comes from your own actions.  Dalai Lama",
    "The only way to do great work is to love what you do.  Steve Jobs",
    "It's not about having time; it's about making time.  Unknown",
    "The best way to predict the future is to create it. Peter rocker",
    "Believe you can, and you're halfway there.  Theodore Roosevelt"
];


const usedIndexes = new Set();
const quoteElement = document.getElementById("Quote")

function generateQuote(){
    if(usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }

    while (true) {
    const randomIdx = Math.floor(Math.random() * quotes.length)

    if(usedIndexes.has(randomIdx)) continue

    const quote = quotes[randomIdx]
    quoteElement.innerHTML = quote;
    usedIndexes.add(randomIdx)
    break
    }
}
