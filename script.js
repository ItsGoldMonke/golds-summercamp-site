document.addEventListener("DOMContentLoaded", function () {
    var timebtn = document.getElementById("timebtn");
    var quoteElement = document.getElementById("quote");
    var jokeElement = document.getElementById("joke");

    if (timebtn) {
        timebtn.addEventListener("click", function () {
            setInterval(function () {
                var mydate = new Date().toLocaleTimeString("en-GB", {
                    timeZone: "Europe/Amsterdam",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                });
                timebtn.textContent = "My date: " + mydate;
            }, 1000);
        });
    }

    if (quoteElement) {
        var quotes = [
    "The best way to get started is to quit talking and begin doing. - Walt Disney",
    "Keep going. Be all in. - Bryan Hutchinson",
    "Small progress is still progress.",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is the sum of small efforts, repeated day in and day out. - Robert Collier",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Dream big and dare to fail. - Norman Vaughan",
    "It always seems impossible until it's done. - Nelson Mandela",
    "The future depends on what you do today. - Mahatma Gandhi",
    "Discipline beats motivation.",
    "Every accomplishment starts with the decision to try.",
    "Stay patient and trust your journey.",
    "Your only limit is your mind.",
    "Do something today your future self will thank you for.",
    "Great things never come from comfort zones.",
    "Mistakes are proof that you are trying.",
    "One step at a time is still moving forward.",
    "Success doesn't come from what you do occasionally, but what you do consistently.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Don't stop until you're proud.",
    "Be stronger than your excuses.",
    "Focus on progress, not perfection.",
    "Every day is a fresh start.",
    "Difficult roads often lead to beautiful destinations."
];

        quoteElement.textContent = quotes[Math.floor(Math.random() * quotes.length)];
    }

    if (jokeElement) {
        fetch("https://official-joke-api.appspot.com/jokes/random")
            .then(response => response.json())
            .then(data => {
                jokeElement.textContent = data.setup + " " + data.punchline;
            })
            .catch(error => {
                console.error("Error fetching joke:", error);
                jokeElement.textContent = "Failed to load a joke.";
            })};
});



    

