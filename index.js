const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json())


const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello from my first ever node')
});
const users = [
    {
        id: 0, name: 'sabana', number: 01751225, email: 'sabana@gmail.com'
    },
    {
        id: 1, name: 'sabnur', number: 017523545, email: 'sabnur@gmail.com'
    },
    {
        id: 2, name: 'purnima', number: 017523546, email: 'purnima@gmail.com'
    },
    {
        id: 3, name: 'bobita', number: 017523544, email: 'bobita@gmail.com'
    },
    {
        id: 4, name: 'mousumi', number: 017523547, email: 'mousumi@gmail.com'
    }
];
// use Query parameter
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }

})


app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the value', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const person = users[id];
    res.send(person);
})



app.listen(port, () => {
    console.log('node port', port)
})

