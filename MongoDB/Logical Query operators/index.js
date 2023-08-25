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


//Logical query operators

async function getCourses(){
    const courses = await Course.find({rating : {$in : [4, 4.2, 4.5, 3.9]}}).select({name: 1, publishedDate : 1})
    .or([{creator: 'sunil'}, {rating: 4.5}] ,)
    console.log(courses)
}

getCourses()
