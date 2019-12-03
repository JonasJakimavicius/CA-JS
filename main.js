let password = document.querySelector('.password');
let service = document.querySelector('.service');
let button = document.querySelector('.button');

button.addEventListener('click', generatePassword);

function generatePassword(e) {
    e.preventDefault()
    let serviceArray = service.value.split('');
    newArray.push(serviceArray[serviceArray.length - 1]);
    newArray.push(serviceArray[vowel_count(password.value)-1]);
    newArray.push(password.value)
    newArray.push(serviceArray.length-vowel_count(service.value));
    newArray.push(serviceArray[0]);
  console.log(  newArray.join(''));

}

function vowel_count(str1) {
    var vowel_list = 'aeiouAEIOU';
    var vcount = 0;

    for (var x = 0; x < str1.length; x++) {
        if (vowel_list.indexOf(str1[x]) !== -1) {
            vcount += 1;
        }

    }
    return vcount;
}

