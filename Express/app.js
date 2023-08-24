const express = require('express')

const app = express()

const courses = [
    {id:1, name : 'NodeJs'},
    {id:2, name : 'JavaScript'},
    {id:3, name : 'Java'},
]

//get, post, update, delete

app.get('/', (req, res) => {
    res.send('Hello Its working...')
})

app.get('/about', (req, res) => {
    res.send('We created another response')
})

app.get('/contact', (req, res) => {
    res.send('We created contact response')
})

//Route parameters

/*
app.get('/courses/:id', (req, res) => {
    console.log(req.params)
    const course = courses.find(course => course.id === parseInt(req.params.id))
    res.send(course)
})
*/

app.get('/courses/:coursename', (req, res) => {
    console.log(req.params.coursename);
    const course = courses.find(course => course.name === req.params.coursename)
    

    if(!course) res.status(404).send('The course you are looking is not there')
    res.send(course)
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Port running on server ${port}`))