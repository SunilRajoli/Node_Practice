const express = require('express')
const myMiddleware = require('./Middlewares/middle')

const app = express()

app.use(express.json())

app.use(myMiddleware)

app.use((req, res, next) => {
    console.log('This is second middleware')
    next()
})

const courses = [
    {id:1, name : 'NodeJs'},
    {id:2, name : 'JavaScript'},
    {id:3, name : 'Java'},
]

//get, post, update, delete

app.get('/courses', (req, res) => {
    res.send(courses)
})


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