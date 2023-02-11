const form = document.querySelector('#signup-form');
const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

const formData = {};

for (let input of [creditCardInput, termsCheckbox, veggieSelect]) {
    // input updates per keyboard press, change changes input after you tab or press enter
    input.addEventListener('change', ({target}) => {
        const {name, type, value, checked} = target;
        formData[name] = type === 'checkbox' ? checked : value;
    })
}




// creditCardInput.addEventListener('input', (e) => {
//     console.log('CC CHANGED!', e);
//     formData['cc'] = e.target.value;
// });

// veggieSelect.addEventListener('input', (e) => {
//     console.log('Veggie CHANGED!', e);
//     formData['veggie'] = e.target.value;
// });

// termsCheckbox.addEventListener('input', (e) => {
//     console.log('Checkbox', e);
//     formData['agreeToTerms'] = e.target.checked;
// })


// forms and prevent default section

// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     alert('Submitted the form!');
//     console.log('cc', creditCardInput.value);
//     console.log('terms', termsCheckbox.checked);
//     console.log('veggieSelect', veggieSelect.value);
// });

