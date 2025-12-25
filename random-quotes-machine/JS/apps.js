const quotes = [
    { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
    { text: "Good artists copy, great artists steal.", author: "Pablo Picasso" },
    { text: "Argue with idiots, and you become an idiot.", author: "Paul Graham" },
    { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
    { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
    { text: "That which does not kill us makes us stronger.", author: "Friedrich Nietzsche" }
];

const textEl   = document.getElementById('text');
const authEl   = document.getElementById('author');
const newBtn   = document.getElementById('new-quote');
const tweetBtn = document.getElementById('tweet-quote');

function getRandomQuote() {
    const idx = Math.floor(Math.random() * quotes.length);
    return quotes[idx];
}

function displayQuote() {
    const q = getRandomQuote();
    textEl.textContent = `"${q.text}"`;
    authEl.textContent = `— ${q.author}`;
    tweetBtn.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${q.text}" — ${q.author}`)}`;
    localStorage.setItem('lastQuote', JSON.stringify(q));
}

/* load last or first */
const saved = JSON.parse(localStorage.getItem('lastQuote') || 'null');
if (saved) {
    textEl.textContent = `"${saved.text}"`;
    authEl.textContent = `— ${saved.author}`;
    tweetBtn.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${saved.text}" — ${saved.author}`)}`;
} else {
    displayQuote();
}

newBtn.addEventListener('click', displayQuote);