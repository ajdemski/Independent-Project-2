const myForm = document.querySelector('my-form');
const answer1 = document.querySelectorAll('answer1, answer12, answer123');
const answer2 = document.querySelectorAll('answer2, answer23, answer234');
const answer3 = document.querySelectorAll('answer3, answer34, answer345');
const suggestedLanguage = document.querySelector('suggestedLanguage');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(answer1 === answer12 || answer12 === answer123 || answer123 === answer1)
    msg.class.List.add('C#')
    msg.innerHTML = 'C#';

    setTimeout(() =>msg.remove(), 3000);

}