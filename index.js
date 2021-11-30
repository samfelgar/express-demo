const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./src/routes/user.routes');

dotenv.config();

const app = express();

app.use(express.json());

// app.use((req, res, next) => {
//     console.log({
//         path: req.path,
//         method: req.method,
//         ip: req.ip,
//         headers: req.headers,
//         body: req.body,
//     });

//     next();
// });

// Routes
app.get('/', (req, res) => res.json({
    message: 'API working!',
}));

app.post('/', (req, res) => res.json({
    message: 'here'
}));

app.use('/users', userRoutes);

app.listen(process.env.APP_PORT, () => {
    console.log(`Server started on port ${process.env.APP_PORT}`);
});
