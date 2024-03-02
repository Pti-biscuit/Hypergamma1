require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// User model
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', UserSchema);

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// Routes
app.get('/', (req, res) => {
    res.send('Homepage. User logged in: ' + (req.session.user || 'none'));
});

app.get('/register', (req, res) => {
    res.send(`
        <form method="POST">
            Username: <input type="text" name="username" />
            Password: <input type="password" name="password" />
            <button type="submit">Register</button>
        </form>
    `);
});

app.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        await User.create({
            username: req.body.username,
            password: hashedPassword
        });
        res.redirect('/login');
    } catch {
        res.redirect('/register');
    }
});

app.get('/login', (req, res) => {
    res.send(`
        <form method="POST">
            Username: <input type="text" name="username" />
            Password: <input type="password" name="password" />
            <button type="submit">Login</button>
        </form>
    `);
});

app.post('/login', async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if (user && await bcrypt.compare(req.body.password, user.password)) {
        req.session.user = user.username;
        res.redirect('/');
    } else {
        res.redirect('/login');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
