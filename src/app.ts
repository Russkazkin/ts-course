const map: Map<string, string> = new Map();
map.set('success', 'Successful Execution.');
map.set('error', 'An Error Occurred while Processing.');

const button = document.querySelector('button')!;

button.addEventListener('click', () => console.log(map.get('success')));

console.log(map);
