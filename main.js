/**
 * Apvercia stringa labas->sabal;
 * @param string stringas, kuri norime apsukti
 * @returns {string} apverstas stringas
 */
function reverseString(string) {
    return string.split("").reverse().join("");
}

let string = 'labas';
console.log(reverseString(string));

/**
 * replaces all value1 in array with value2
 * @param array values
 * @param value1 searching for
 * @param value2 replacing with
 * @returns array with replaced values
 */
function replace(array, value1, value2) {
    let new_array = array;
    if (array.indexOf(value1) !== -1 && value2 != null && value1 !== value2) {
        new_array[array.indexOf(value1)] = value2;
        replace(new_array, value1, value2)
    }
    return new_array;
}

$array = ['labas', 'petras', 'tatras', 'petras', 'petras'];

// console.log(replace($array, 'petras', 'sigitas'))



    console.log(replace2($array, 'petras', 'sigitas'))