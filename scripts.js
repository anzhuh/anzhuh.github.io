const selectElement = (s) => document.querySelector(s);

// Open menu on click

selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-lists').classList.add('active');
});

// Close menu on click
selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-lists').classList.remove('active');
});