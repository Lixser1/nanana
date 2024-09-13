function phoneNumber(number) {
    return number.slice(0, -2) + "##";
}

let numberPhone = "+996 555 123 123"
let hiddenNumberPhone = phoneNumber(numberPhone)
console.log(hiddenNumberPhone)