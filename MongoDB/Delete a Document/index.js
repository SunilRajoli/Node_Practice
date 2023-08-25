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
    console.log(result)
}

//createCourse()

//Delete

async function deleteCourse(id) {
    let course = await Course.findByIdAndDelete(id)
    console.log(course)
}

deleteCourse('64e891a85e293914cb705249')


