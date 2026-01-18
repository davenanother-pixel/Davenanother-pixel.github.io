const alphabetMap = {
    'A':'Ä','a':'ä','B':'Б','b':'б','C':'Č','c':'č','D':'Đ','d':'đ',
    'E':'Э','e':'э','F':'Ф','f':'ф','G':'Г','g':'г','H':'Χ','h':'χ',
    'I':'Ι','i':'ι','J':'Џ','j':'џ','K':'Κ','k':'κ','L':'Л','l':'л',
    'M':'Μ','m':'μ','N':'Н','n':'н','O':'Ο','o':'ο','P':'П','p':'п',
    'Q':'Кв','q':'кв','R':'Р','r':'р','S':'С','s':'с','T':'Τ','t':'τ',
    'U':'У','u':'у','V':'В','v':'в','W':'Ў','w':'ў','X':'Ξ','x':'ξ',
    'Y':'Й','y':'й','Z':'З','z':'з'
};

const translateBtn = document.getElementById('translateBtn');
const englishInput = document.getElementById('englishInput');
const iraxOutput = document.getElementById('iraxOutput');
const alphabetTableBody = document.querySelector('#alphabetTable tbody');

// Populate alphabet table dynamically
for (let [eng, irax] of Object.entries(alphabetMap)) {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${irax}</td><td>${eng}</td>`;
    alphabetTableBody.appendChild(row);
}

// Translator
translateBtn.addEventListener('click', () => {
    const text = englishInput.value;
    let translated = '';
    for (let char of text) {
        translated += alphabetMap[char] || char;
    }
    iraxOutput.value = translated;
});
