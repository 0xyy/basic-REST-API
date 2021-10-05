const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const words = [{
        id: 1,
        word: 'dog'
    },
    {
        id: 2,
        word: 'grape'
    },
    {
        id: 3,
        word: 'window'
    },
]

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/api/words', (req, res) => {
    res.send(words);
});

app.get('/api/words/quantity/:word', (req, res) => {
    const duplicatedWord = {
        word: req.params.word,
        quantity: 0,
    };

    words.forEach(w => {
        if (w.word === req.params.word) duplicatedWord.quantity++;
    });

    res.send(duplicatedWord);
});

app.get('/api/words/unique', (req, res) => {
    const uniqueWords = [...new Set(words.map(w => w.word))];

    res.send(uniqueWords);
})

app.delete('/api/words/:id', (req, res) => {
    const word = words.find(w => w.id === Number(req.params.id));

    if (!word) {
        return res.status(404).send(`Word with id ${req.params.id}  doesn\'t exist`);
    }

    const removeIndex = words.indexOf(word);
    words.splice(removeIndex, 1);

    res.send(word);
});

app.post('/api/words', (req, res) => {
    const newWord = req.body.word;
    if (!newWord) {
        return res.status(400).send('Word cannot be empty');
    }

    const word = {
        id: words.length + 1,
        word: newWord,
    }

    words.push(word);
    res.send(word);
});

app.listen(PORT, () => console.log(`Spying on ${PORT}... http://localhost:${PORT}`));