import {
    getAllContacts,
    delContact,
    addNewContact,
    getContactByID,
    updateContact
} from "../api/contacts";


const container = document.querySelector('.container')
const tbody = document.querySelector('tbody')
const userName = document.querySelector('.user-name');
const logoutBtn = document.querySelector('.logout');

if (userName) {
    renderUserEmail();
    logoutBtn.addEventListener('click', logout);
    container.addEventListener('click', clickHandler);
    getAllContacts().then((resp) => {
            deleteAllNodes()
            renderAllContacts(resp.data)
        })
}

function renderUserEmail() {
    userName.textContent = localStorage.getItem('login')
}


function logout(){
    localStorage.removeItem('login')
    localStorage.removeItem('token')
    logoutBtn.removeEventListener('click', logout)
    document.location.href = '/'
}


function createNode(data) {
    let tr = document.createElement('tr')
    tr.dataset.id = data.id
    for (let item in data) {
        if (item !== 'id') {
            let td = document.createElement('td')
            td.textContent = data[item]
            tr.append(td)
        }
    }

    let td = document.createElement('td')
    td.className = 'action-group'
    td.insertAdjacentHTML('beforeend',
        '<i class="fa fa-trash action-group__delete"></i>\n' +
        '<i class="fa fa-edit action-group__edit"></i>')
    tr.append(td)
    return tr
}

function deleteAllNodes() {
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
}


function renderAllContacts(data) {
    data.forEach((item) => tbody.append(createNode(item)))
}


function clickHandler(e) {
    const parentBlock = e.target.closest('TR')
    const id = parentBlock.dataset.id
    if (e.target.classList.contains('action-group__delete')) {
        delContact(id).then(() => parentBlock.remove())
    } else if (e.target.classList.contains('action-group__edit')) {
        console.log('edit')
    }
}
