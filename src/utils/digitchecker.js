import { Apierror } from "./apierror.js";

export const isValid_username = (String) => {
    let num = 1;

    for (const element of String) {
        if (element == " ") return false
        if (Number(element)) num++
    }
    if (num < 2) return false
    return true

}


export const isValid_mobile_number = (number) => {
    let num = Number(number[0])
    if (number !== 10 && num < 6) {
        throw new Apierror(404, " please input valid mobile number")
    }
    return true
}

