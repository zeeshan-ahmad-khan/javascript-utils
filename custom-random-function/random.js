// ===> this random method takes an ARRAY or a NUMBER <===

// ===> ARRAY is passed as argument only
// [=>] return random element from the array
// ------------------------------------------------------------
// ===> ARRAY is passed with one argument
// [=>] returns random element between 0 (zero) index and index passed (greater index excluded)
// -------------------------------------------------------------
// ===> ARRAY is passed with two argument (namely a & b)
// [=>] returns random element between index a & b (greater index excluded)

// ===> One number is passed as an argument
// [=>] returns a random number from 0 to than number (number excluded)
// -----------------------------------------------------------
// ===> Two numbers passed as the argument
// [=>] returns random number between these two numbers (greater number excluded)

const randomiser = (a, b, c) => {
    if (typeof a === 'string' || typeof b === 'string' || typeof c === 'string') {
        throw new Error('Only numeric values are allowed')
    }
    if (Array.isArray(a)) {
        if (b > a.length || c > a.length) throw new Error("Indexes must not be greater than array length")
        if (b & c) {
            if (b < c) {
                return a[Math.floor(b + Math.random() * (c - b))]
            } else {
                return a[Math.floor(c + Math.random() * (b - c))]
            }
        } else if (b) {
            return a[Math.floor(Math.random() * b)]
        } else {
            return a[Math.floor(Math.random() * a.length)]
        }
    } else {
        if (c) throw new Error("There must be only two arguments")
        if (b) {
            if (a < b) {
                return Math.floor(a + Math.random() * (b - a))
            } else {
                return Math.floor(b + Math.random() * (a - b))
            }
        } else {
            return Math.floor(Math.random() * a)
        }
    }
}

// module.exports = randomiser