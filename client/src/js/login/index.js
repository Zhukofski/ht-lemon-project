import {emailRegExp} from '../regExp'
import {EventObserver} from '../patterns'
import {createMessageNode, deleteMessage} from './message'
import {auth} from '../api/auth'


const loginBlock = document.querySelector('.login-block')
const emailField = document.querySelector('.email>input')
const passField = document.querySelector('.pass>input')
const btn = document.querySelector('.submit-button')

if (loginBlock) {
    btn.addEventListener('click', handleButtonClick)

    function handleButtonClick() {
        if (!emailField.value && !passField.value) {
            showErrorMessage('error')
            btn.removeEventListener("click", login)
        } else {
            btn.addEventListener("click", login)
        }
    }

    function showErrorMessage(type) {
        loginBlock.prepend(createMessageNode(type))
        setTimeout(() => {
            deleteMessage()
        }, 3000)
    }

//validate email
    const inputObserver = new EventObserver();

//(throttling)
    let prevTime = null

    function showWarningMessage(str) {
        if (!prevTime || Date.now() - prevTime > 3000) {
            if (!emailRegExp.test(str)) {
                emailField.parentNode.prepend(createMessageNode('warning'))
                prevTime = Date.now()
                setTimeout(() => {
                    deleteMessage()
                }, 3000)
            }
        } else {
            console.log(prevTime, 'this is else')
        }
    }

    inputObserver.subscribe(showWarningMessage);
    emailField.addEventListener('keyup', () => {
        inputObserver.broadcast(emailField.value)
    })

//login
    async function login() {
        const data = {
            login: emailField.value,
            password: passField.value
        }
        await auth(data).then((resp) => {
            localStorage.setItem('token', resp.data.data.token)
            localStorage.setItem('login', resp.data.data.login)
        }).then(() => {
            document.location.href = '/contacts.html'
        })
    }
}
