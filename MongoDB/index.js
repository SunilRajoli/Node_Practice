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
        name: "Python",
        creator: "SunilRajoli",
        isPublished: false,
        rating: 4.3
    })
    
    const result = await course.save()
    console.log(result)
}

createCourse()


//Query for document

async function getCourses(){
    const courses = await Course.find({creator: 'Sunil'}).select({name: 1, publishedDate:1}).sort({name: 1})
    console.log(courses)
}

getCourses()


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
*


//Logical query operators

async function getCourses(){
    const courses = await Course.find({rating : {$in : [4, 4.2, 4.5, 3.9]}}).select({name: 1, publishedDate : 1})
    .or([{creator: 'sunil'}, {rating: 4.5}] ,)
    console.log(courses)
}

getCourses()


//update

async function updateCourse(id) {
    let course = await Course.findById(id)
    if(!course) return;

    course.name = 'Python'
    course.creator = 'Steve'
    const updatedCourse = await course.save()
    console.log(updatedCourse)
}

updateCourse('64e89152a6b7cde8e98cb47f')


//Delete

async function deleteCourse(id) {
    let course = await Course.findByIdAndDelete(id)
    console.log(course)
}

deleteCourse('64e891a85e293914cb705249')