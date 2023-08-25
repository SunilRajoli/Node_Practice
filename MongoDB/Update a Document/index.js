const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/testDatabase')
.then(() => console.log('Connection successful'))
.catch((err => console.error('Couldnt connect to Mongodb', err)))

//Schema

const courseSchema = new mongoose.Schema({
    name: String,
    creator: String,
    publishedDate: {type: Date, default: Date.now},
    isPublished: Boolean,
    rating: Number
})

//Model

const Course = mongoose.model('Course', courseSchema)

async function createCourse() {
    const course = new Course({
        name: "Ruby",
        creator: "SunilRaj",
        isPublished: false,
        rating: 3.9
    })
    
    const result = await course.save()
    console.log(course)
}

//createCourse()

//Update

async function updateCourse(id) {
    let course = await Course.findById(id)
    if(!course) return;

    course.name = 'Python'
    course.creator = 'Steve'
    const updatedCourse = await course.save()
    console.log(updatedCourse)
}

updateCourse('639cflaabe826ff38d4a')