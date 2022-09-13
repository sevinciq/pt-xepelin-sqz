
function IesProductList(list) {
    let outlist = []
    let a = productarray(list)
    for (let i = 0; i < list.length; i++) {
        outlist[i] = a/list[i]
    }
    return outlist
}

function productarray(array) {
    let product = 1
    for (let i=0; i < array.length; i++) {
        product = product * array[i]
    }
    return product
}


let testlist = [1,2,3,4,8,10]
console.log(IesProductList(testlist))
