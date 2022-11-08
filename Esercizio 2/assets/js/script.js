/*class Pagination {
    constructor(_items = [], _pageSize = 2) {
        this.items = _items;
        this.pageSize = _pageSize;
    }
}*/

const items = [
    { id: 1, nome: 'Cosimo', cognome: 'Gargiullo', classe: 'A' },
    { id: 2, nome: 'Laura', cognome: 'Gaudencio', classe: 'A' },
    { id: 3, nome: 'Francesca', cognome: 'Pozzi', classe: 'B' },
    { id: 4, nome: 'Riccardo', cognome: 'Sennati', classe: 'B' },
    { id: 5, nome: 'Filippo', cognome: 'Verdi', classe: 'C' },
    { id: 6, nome: 'Mario', cognome: 'Rossi', classe: 'C' },
    { id: 7, nome: 'Luigi', cognome: 'Pandolgo', classe: 'D' },
    { id: 8, nome: 'Gaetano', cognome: 'Speranza', classe: 'D' }
]

let currentPage = 0;

loading = () => {
    firstRow.innerHTML = `<th scope="row">${items[currentPage].id}</th>
    <td>${items[currentPage].nome}</td>
    <td>${items[currentPage].cognome}</td>
    <td>${items[currentPage].classe}</td>`
    secondRow.innerHTML = `<th scope="row">${items[currentPage+1].id}</th>
    <td>${items[currentPage+1].nome}</td>
    <td>${items[currentPage+1].cognome}</td>
    <td>${items[currentPage+1].classe}</td>`
  }
  
  first = () => {
    currentPage = 0;
    firstRow.innerHTML = `<th scope="row">${items[currentPage].id}</th>
    <td>${items[currentPage].nome}</td>
    <td>${items[currentPage].cognome}</td>
    <td>${items[currentPage].classe}</td>`
    secondRow.innerHTML = `<th scope="row">${items[currentPage+1].id}</th>
    <td>${items[currentPage+1].nome}</td>
    <td>${items[currentPage+1].cognome}</td>
    <td>${items[currentPage+1].classe}</td>`
  }
  
  prev = () => {
    firstRow.innerHTML = `<th scope="row">${items[currentPage-2].id}</th>
    <td>${items[currentPage-2].nome}</td>
    <td>${items[currentPage-2].cognome}</td>
    <td>${items[currentPage-2].classe}</td>`
    secondRow.innerHTML = `<th scope="row">${items[currentPage-1].id}</th>
    <td>${items[currentPage-1].nome}</td>
    <td>${items[currentPage-1].cognome}</td>
    <td>${items[currentPage-1].classe}</td>`
    currentPage = currentPage-2;
  }
  
  next = () => {
    firstRow.innerHTML = `<th scope="row">${items[currentPage+2].id}</th>
    <td>${items[currentPage+2].nome}</td>
    <td>${items[currentPage+2].cognome}</td>
    <td>${items[currentPage+2].classe}</td>`
    secondRow.innerHTML = `<th scope="row">${items[currentPage+3].id}</th>
    <td>${items[currentPage+3].nome}</td>
    <td>${items[currentPage+3].cognome}</td>
    <td>${items[currentPage+3].classe}</td>`
    currentPage = currentPage+2;
  }
  last = () => {
    currentPage = 6;
    firstRow.innerHTML = `<th scope="row">${items[currentPage].id}</th>
    <td>${items[currentPage].nome}</td>
    <td>${items[currentPage].cognome}</td>
    <td>${items[currentPage].classe}</td>`
    secondRow.innerHTML = `<th scope="row">${items[currentPage+1].id}</th>
    <td>${items[currentPage+1].nome}</td>
    <td>${items[currentPage+1].cognome}</td>
    <td>${items[currentPage+1].classe}</td>`
  }

  
  
  
  