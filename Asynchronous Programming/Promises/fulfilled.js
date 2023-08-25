//how to produce a promise

let myPromises = new Promise(function(resolve, reject) {
    const a = 4
    const b = 3

    setTimeout(() => {
        if(a === b) {
            resolve('The values are equal')
        }
        else {
            reject('The values are not equal')
        }
    }, 2000)
})

//fulfilled state
myPromises.then(function(result) {
    console.log(result)
})