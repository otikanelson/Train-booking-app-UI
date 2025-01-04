const input = document.getElementById("input")

function reverseString(str) {
    "hello world"
    return str.split("").reverse().join("")

}

function check() {
    const value = input.value
    const reverse = reverseString(value)
    
    if(value === reverse){
        alert("palindrome")
    } else {
        alert("Not today!")
    }

    input.value = ""
}