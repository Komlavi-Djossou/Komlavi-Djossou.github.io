const form = document.forms[0];
// const form = document.getElementsByTagname('form')[0];

// A form object also has a method called elements that returns an HTML collection
// of all the elements contained in the form
// const [input,button] = form.elements;

const input = form.elements.searchInput;
input.addEventListener('focus', () => alert('focused'), false);

input.addEventListener('blur', () => alert('blurred'), false);
input.addEventListener('change', () => alert('changed'), false);