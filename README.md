# Express Workshop

### Outline
* Setting up Express
* Installing Mongoose
* Creating a sample model
* What about nodemon?
* Using Dotenv for env vars


## Snippets

### Adding BodyParser
```javascript
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
```


### Connecting to Mongoose:
```javascript
mongoose.connect("mongodb://localhost/workshop", { useNewUrlParser: true });
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
  console.log("Connected to MongoDB!");
});
```


