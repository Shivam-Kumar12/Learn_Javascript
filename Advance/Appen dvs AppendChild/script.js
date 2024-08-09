// Demonstration of append()
const appendDiv = document.getElementById('appendExample');
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a paragraph added with append()';

appendDiv.append(newParagraph, ' Additional text with append()', ' More text!');

// Demonstration of appendChild()
const appendChildDiv = document.getElementById('appendChildExample');
const anotherParagraph = document.createElement('p');
anotherParagraph.textContent = 'This is a paragraph added with appendChild()';

appendChildDiv.appendChild(anotherParagraph);

// appendChild does not accept multiple nodes or strings directly.
// You would need to create text nodes if you want to append text:
const additionalText = document.createTextNode(' Additional text with appendChild()');
appendChildDiv.appendChild(additionalText);
