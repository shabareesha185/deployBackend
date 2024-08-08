import express from "express";

const app = express();

app.use(express.static('dist'));

const jokes = [
  {
    question: "Why don't scientists trust atoms?",
    answer: "Because they make up everything!",
  },
  {
    question: "Why did the scarecrow win an award?",
    answer: "Because he was outstanding in his field!",
  },
  {
    question: "Why don't skeletons fight each other?",
    answer: "They don't have the guts.",
  },
  {
    question: "What do you get when you cross a snowman and a vampire?",
    answer: "Frostbite.",
  },
  {
    question: "Why did the bicycle fall over?",
    answer: "Because it was two-tired!",
  },
  {
    question: "How does a penguin build its house?",
    answer: "Igloos it together.",
  },
  {
    question: "Why was the math book sad?",
    answer: "Because it had too many problems.",
  },
  { question: "What do you call fake spaghetti?", answer: "An impasta." },
  {
    question: "Why did the golfer bring an extra pair of pants?",
    answer: "In case he got a hole in one.",
  },
  {
    question: "What do you call cheese that isn't yours?",
    answer: "Nacho cheese.",
  },
];

app.get("/", (req, res) => {
  res.send("Server Started");
});

app.get("/api/jokes", (req, res) => {
  res.send(jokes);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server Started at port: http://localhost:${port}`);
});
