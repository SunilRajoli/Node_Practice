//how to produce a promise

let myPromises = new Promise(function(resolve, reject) {
    const a = 4
    const b = 4

    setTimeout(() => {
        if(a === b) {
            resolve()
        }
        else {
            reject()
        }
    }, 2000)
})

console.log(myPromises)