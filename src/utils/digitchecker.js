
console.clear()
export const checkerDigit = (String) => {
    let num = ""
    let isSecure = true
    for (let i in String) {

        if (Number(String[i])) {
            num += Number(String[i])
        }
    }
    if (num.length < 2 || num.length > 6) {
        isSecure = false
        num = "This is not secure username"
    }
    return [num, isSecure]
}
