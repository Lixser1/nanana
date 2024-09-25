let pricesStore = [1500, 400, 800, 750, 250, 8000, 150, 640, 100, 370]

function saleStore(x) {
    return x * 0.4
}

let storePrices = pricesStore.map(saleStore)
console.log(storePrices)
let tenge = a => a * 7;
let consoleTenge = pricesStore.map(tenge)
console.log(consoleTenge)
let priceProducts = [1000, 300, 1500, 600]
let accessibleProducts = priceProducts.filter((x) => {
    if (x <= 1000) {
        console.log(x)
    }
})
let largeValues = pricesStore.filter((x) => x % 100 === 0)
console.log(largeValues)
let prises = [100, 2000, 50, 600]
let maxPrice = prises.reduce((item, max) => Math.max(item, max), -Infinity)
console.log(maxPrice)
let minPrise = Math.min(...prises);
console.log(minPrise);








