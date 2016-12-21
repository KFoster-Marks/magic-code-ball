'use strict';

const responses = ['Did you try turning it off and on again?', 'Um, Teddi definitely covered this in her lesson, fool.', 'You\'ve got the silliest of typos. Sheesh.', 'You should be using snake case, obviously.', 'That\'s a scope issue, son.', 'Guuuurl, you forgot a semicolon!', 'Beautify your code, for goodness sake.', "PROMISES!"];

var solution = document.getElementById('solution');


function generateMessage () {
  const random = Math.floor(Math.random() * (8 - 1) + 1);
  solution.innerHTML = responses[random];
}

var submitError = document.getElementById('submit-error');

submitError.addEventListener('click', generateMessage)
