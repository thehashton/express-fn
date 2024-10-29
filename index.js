const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Define the function endpoint (POST)
app.post('/functions/base64Encode', (req, res) => {
    const { input } = req.body;
    if (!input) {
        return res.status(400).send({ error: 'Input is required' });
    }
    const output = Buffer.from(input).toString('base64');
    res.send({ output });
});

// Define the documentation endpoint (GET)
app.get('/functions/base64Encode', (req, res) => {
    res.send({
        name: 'base64Encode',
        description: 'Encode anything to base64',
        input: {
            type: 'string',
            description: "Input the data you'd like to encode to base64",
            example: 'Hello, world',
        },
        output: {
            type: 'string',
            description: 'Base64 encoded string',
            example: 'SGVsbG8sIHdvcmxk',
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
