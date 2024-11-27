import express from "express";
import path from "path";
import process from "process";
import "dotenv/config";


const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.resolve("./dist/views"));
//parse urlencoded request bodies
app.use(express.urlencoded({ extended: false }));

//parse json request bodies
app.use(express.json());

// Provide the css files as static files
app.use(express.static(path.resolve("./public")))

// Gets the main page that includes documentation on request
app.get("/", (_req, res) => {
	console.log("main page GET request recieved!");
	res.render("index", { title: "WIP" });
});

//Initializes the server with the port
app.listen(port, () => {
	console.log(`Server started!\nlocalhost:${port}`);
});

export default app;
