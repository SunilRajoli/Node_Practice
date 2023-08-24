const express = require('express')

const app = express()

app.use(express.json())

const courses = [
    {id:1, name : 'NodeJs'},
    {id:2, name : 'JavaScript'},
    {id:3, name : 'Java'},
]

//GET

app.get('/courses', (req, res) => {
    res.send(courses)
})

//POST

app.post('/courses', (req, res) => {
    const course = {
        id : courses.length + 1,
        name : req.body.name
    }
    courses.push(course)
    res.send(course)
})

//PUT

app.put('/courses/:coursename', (req, res) => {
    const course = courses.find(course => course.name === req.params.coursename)
    if(!course) res.status(404).send('Course name not found!')
    course.name = req.body.name
    res.send(course)
})

//DELETE

/*
app.delete('/courses/:coursename', (req, res) => {
    const updatedCourses = courses.filter(course => course.name !== req.params.coursename)

    courses = updatedCourses

    res.send(courses)
})
*/

app.delete('/courses/:id', (req, res) => {
    const course = courses.find(course => course.id === parseInt(req.params.id))
    console.log(course)
    if(!course) res.status(404).send('The course you are searching is not there')
    const index = courses.indexOf(course)

    courses.splice(index , 1)
    res.send(course)
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Port running on server ${port}`))