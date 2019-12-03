$number1 = 1;
$number2 = 2;
$number3 = 'labas';

function oddOrEven($number) {
    if (!isNaN($number)) {
        if ($number % 2 === 0) {
            return 'Even';
        }
        return 'Odd';
    }
    return NaN;
}

function destroyString(string) {
    let array = string.split('');
    let newArray = [];
    let i;
    array.forEach((el, index) => {
        for (i = 0; i < index; i++) {
            newArray.push(el)
        }
    });
    return newArray.join(',-')
}

console.log(destroyString('labas'));

function myFilter(array, parameter) {
    return array.filter(el => typeof (el) === parameter)
}

let array = [1, 2, 3, 4, 'a', 'b'];

console.log(myFilter(array, 'number'));

function convertNumbers(array) {
    let newArray = [];
    array.forEach(el => newArray.push(Number(el)));
    return newArray
}

let array2 = ['1', '2', '3', '4'];

console.log(array2);
console.log(convertNumbers(array2));
const arr = [{name: 'Jon', age: 15}, {name: 'Marry', age: 12}, {age: 12}];


function searchObjects(array, param) {
    let newArr = [];
    array.forEach(el => el[param] !== undefined ? newArr.push(el[param]) : '');
    return newArr;
}

console.log(searchObjects(arr, 'name'));


let geese = ['Roman tufted', 'African', 'Toulouse', 'Pilgrim', 'Steinbacher'];

function removeGeese(array) {
    let newArray = [];
    array.forEach((el) => {
        let status = true;
        geese.forEach(goose => {
            if (goose === el) {
                status = false;
            }
        })
        status ? newArray.push(el) : '';
    })
    return newArray;
}

let array828 = ['Roman tufted', 'African', 'Toulouse', 'Pilgrim', 'Steinbacher', 1, 2, 'asa', 'asasa', 'asasasas'];

console.log(removeGeese(array828));