# Express Workshop

### Outline
* Setting up Express
* Parsing body requests
* What about logging?
* Using Dotenv for env vars
* Installing Mongoose
* Creating a sample model
* Writing routes for dotenv
* What about nodemon?


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

### MongoDB Model
```javascript
const hackerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  school: { type: String, required: true }
});

const Hacker = new mongoose.model("Hacker", hackerSchema);

```

### MongoDB Routes
```javascript
app.get("/hackers", (req, res) => {
  Hacker.find({}, (err, hackers) => {
    res.send(hackers);
  });
});
app.post("/hackers", (req, res) => {
  const { name, email, school } = req.body;
  const newHacker = Hacker({ name, email, school });
  newHacker.save((err, obj) => {
    if (err) {
      console.error(err);
      res.status(400).send(err);
    } else {
      res.status(201).send(obj);
    }
  });
});
```
