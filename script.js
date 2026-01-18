// Iräx alphabet mapping
const alphabetMap = {
    'A':'Ä','a':'ä','B':'Б','b':'б','C':'Č','c':'č','D':'Đ','d':'đ',
    'E':'Э','e':'э','F':'Ф','f':'ф','G':'Г','g':'г','H':'Χ','h':'χ',
    'I':'Ι','i':'ι','J':'Џ','j':'џ','K':'Κ','k':'κ','L':'Л','l':'л',
    'M':'Μ','m':'μ','N':'Н','n':'н','O':'Ο','o':'ο','P':'П','p':'п',
    'Q':'Кв','q':'кв','R':'Р','r':'р','S':'С','s':'с','T':'Τ','t':'τ',
    'U':'У','u':'у','V':'В','v':'в','W':'Ў','w':'ў','X':'Ξ','x':'ξ',
    'Y':'Й','y':'й','Z':'З','z':'з'
};

// Get elements
const englishInput = document.getElementById('englishInput');
const iraxOutput = document.getElementById('iraxOutput');
const alphabetTableBody = document.querySelector('#alphabetTable tbody');
const copyBtn = document.getElementById('copyBtn');
const toggleDarkModeBtn = document.getElementById('toggleDarkMode');

// Populate alphabet table dynamically
for (let [eng, irax] of Object.entries(alphabetMap)) {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${irax}</td><td>${eng}</td>`;
    alphabetTableBody.appendChild(row);
}

// Translation function
function translateToIrax(text) {
    return text.split('').map(char => alphabetMap[char] || char).join('');
}

// Live translation as user types
englishInput.addEventListener('input', () => {
    const text = englishInput.value;
    iraxOutput.value = translateToIrax(text);
});

// Copy translation
copyBtn.addEventListener('click', () => {
    if (iraxOutput.value.trim() === '') return;
    navigator.clipboard.writeText(iraxOutput.value)
        .then(() => alert('Iräx translation copied!'))
        .catch(() => alert('Failed to copy.'));
});

// Dark mode toggle
toggleDarkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});
