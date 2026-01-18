const alphabetMap = {
    'A':'Ä','a':'ä','B':'Б','b':'б','C':'Č','c':'č','D':'Đ','d':'đ',
    'E':'Э','e':'э','F':'Ф','f':'ф','G':'Г','g':'г','H':'Χ','h':'χ',
    'I':'Ι','i':'ι','J':'Џ','j':'џ','K':'Κ','k':'κ','L':'Л','l':'л',
    'M':'Μ','m':'μ','N':'Н','n':'н','O':'Ο','o':'ο','P':'П','p':'п',
    'Q':'Кв','q':'кв','R':'Р','r':'р','S':'С','s':'с','T':'Τ','t':'τ',
    'U':'У','u':'у','V':'В','v':'в','W':'Ў','w':'ў','X':'Ξ','x':'ξ',
    'Y':'Й','y':'й','Z':'З','z':'з'
};

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

// Translator function
function translateToIrax(text) {
    return text.split('').map(c => alphabetMap[c] || c).join('');
}

// Live translation as you type
englishInput.addEventListener('input', () => {
    iraxOutput.value = translateToIrax(englishInput.value);
});

// Copy translation to clipboard
copyBtn.addEventListener('click', () => {
    iraxOutput.select();
    document.execCommand('copy');
    alert('Iräx translation copied!');
});

// Toggle dark mode
toggleDarkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});
