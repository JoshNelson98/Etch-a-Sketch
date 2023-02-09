let One = document.querySelector('.container')


for(let x =1; x <=16; x++) {
let column = document.createElement('div')
column.classList.add('columns');
    for(let j = 1; j <= 16; j++) {
        let row = document.createElement('div')
        row.classList.add('rows');
        row.textContent = 'hello'
        column.appendChild(row)
    }
    One.appendChild(column)
}

let rowChange = document.querySelectorAll('.rows');
rowChange.forEach(row => {row.addEventListener('mouseover', e => e.target.style.background = '#add8e6')})
