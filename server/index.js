require('dotenv').config({ path: './.env' });
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user.js');
const cookieParser = require('cookie-parser');
const stripe = require('stripe')('sk_test_51NG6LqAJKHgOUKXAr6qjgTYeJemq48AdkET60qJoQcgGfHCUWzqQZKIoT0jvLdrtx3EEhi7ADc4ujQyJ0O3dwIDX009XabuVG8');

mongoose.set('strictQuery', false);

mongoose
.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

const app = express();

app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'));

const corsOptions = {
  origin: 'http://localhost:8080',
  credentials: true,
  methods: 'GET,PUT,POST,PATCH,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization',
  maxAge: 3600000,
};

app.use(cors(corsOptions));

app.use(
  session({
    secret: 'shouldbeabettersecret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// app.get('/fakeUser', async (req, res) => {
//   const user = new User({ username: 'admin' });
//   const newUser = await User.register(user, 'password');
//   res.send(newUser);
// });

app.use('/admin', require('./routes/userRoutes'));
app.use('/products', require('./routes/productRoutes'));
app.post('/create-checkout-session', async (req, res) => {
  const products = req.body.items;

  const line_items = products.map((product) => {
    return {
      price: product.stripePriceId,
      quantity: product.quantity,
    }
  });
  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: 'payment',
    success_url: `http://localhost:8080/success.html`,
    cancel_url: `http://localhost:8080/products`,
  });

  res.json( session.url);
});


app.use((err, req, res, next) => {
  const { status = 500, message = 'Something went wrong' } = err;
  res.status(status).json(message);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port} `);
});
