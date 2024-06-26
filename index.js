import express from "express";

const app = express();
const port = 3000;

app.use(express.static('public'));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/essay', (req, res) => {
  res.render('essayList');
});
app.get('/books', (req, res) => {
  res.render('books');
});
app.get('/quotes', (req, res) => {
  res.render('quotes');
});
app.get('/faqs', (req, res) => {
  res.render('faqs');
});
app.get('/essay/:id', (req, res) => {
  const essayId = req.params.id;
  res.render('essay', { id: essayId });
});
app.get('/summary/:id', (req, res) => {
  const summaryId = req.params.id;
  res.render('summary', { id: summaryId });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
