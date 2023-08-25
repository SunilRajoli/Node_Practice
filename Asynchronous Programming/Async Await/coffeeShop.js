function placeOrder(drink) {
    return new Promise(function(resolve, reject) {
        if(drink === 'coffee') {
            resolve('Order for coffee recieved')
        }
        else {
            reject('Other orders rejected')
        }
    })
}

function processOrder(order) {
    return new Promise(function(resolve) {
        console.log('Order is being processed')
        resolve(`${order} is served`)
    })
}

//solution in promise

/*
placeOrder('coffee').then(function(orderPlaced) {
    console.log(orderPlaced)
    let orderIsProcessed = processOrder(orderPlaced)
    return orderIsProcessed
}).then(function(processedOrder) {
    console.log(processedOrder)
}).catch(function(err) {
    console.log(err)
})
*/

//Async Await - keywords

async function serveOrder() {

    try {
        let orderPlaced = await placeOrder('soup')
    console.log(orderPlaced)
    let processedOrder = await processOrder(orderPlaced)
    console.log(processedOrder)
    } catch (error) {
        console.log(error)
    }
    
}

serveOrder()