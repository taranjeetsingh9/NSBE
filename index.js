const express = require("express");
const app = express();
const path = require("path");

const { CohereClient } = require("cohere-ai");

const cohere = new CohereClient({
  token: "DDdU4XGvdACJlsTHVwsUk0nWt7U6HsjvAarGYWa2",
});

// (async () => {
//   const chatStream = await cohere.chatStream({
//     chatHistory: [
//       { role: "USER", message: "Who discovered gravity?" },
//       {
//         role: "CHATBOT",
//         message:
//           "The man who is widely credited with discovering gravity is Sir Isaac Newton",
//       },
//     ],
//     message: "What year was he born?",
//     // perform web search before answering the question. You can also use your own custom connector.
//     connectors: [{ id: "web-search" }],
//   });

//   for await (const message of chatStream) {
//     if (message.eventType === "text-generation") {
//       console.log(message);
//     }
//   }
// })();

let port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// css
app.use(express.static(path.join(__dirname, "public")));

// if inside have another folder
// app.use(express.static(path.join(__dirname, "public/folder name")));

app.listen(port, () => {
  console.log(`listening on port  ${port}`);
});

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/follow", (req, res) => {
  res.render("second.ejs");
});

app.get("/sfollow", (req, res) => {
  res.render("third.ejs");
});

app.get("/landingPage", (req, res) => {
  const images = [
    {
      url: "/images/download.jpeg",
      alt: "Nature Image 1",
      caption: "Caption Text 1",
    },
    {
      url: "/images/download.jpeg",
      alt: "Nature Image 2",
      caption: "Caption Text 2",
    },
    {
      url: "/images/download.jpeg",
      alt: "Nature Image 3",
      caption: "Caption Text 3",
    },
    // Add more image data as needed
  ];
  console.log(req.body);
  res.render("LandingPage.ejs", { images });
});

app.get("/logReport", (req, res) => {
  res.render("logReport1.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/signup", (req, res) => {
  res.render("signup.ejs");
});

app.get("/logreport2", (req, res) => {
  res.render("logReport2.ejs");
});

app.post("/results", (req, res) => {
  res.render("results.ejs");
});

app.get("/suggestions", (req, res) => {
  res.render("suggestion.ejs");
});
