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
        rating: 4.5
    })
    
    const result = await course.save()
    console.log(course)
}

//createCourse()


/*
comparison query operators
eq - equal to
gt - greater than
gte - greater than or equal to
lt - less than
lte - less than or equal to
in
not in

*/
async function getCourses(){
    const courses = await Course.find({rating : {$gte : 4}}).select({name: 1, publishedDate : 1})
    console.log(courses)
}
getCourses()



