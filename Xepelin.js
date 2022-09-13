function Xepelin(number) {
    if (number % 15 == 0) {
        return 'Xepelin'
    } else if (number % 5 == 0) {
        return 'Lin'
    } else if (number % 3 == 0) {
        return 'Xepe'
    } else {
        return ''
    }
}

console.log(Xepelin(15))

console.log(Xepelin(12))

console.log(Xepelin(2))

console.log(Xepelin(50))
