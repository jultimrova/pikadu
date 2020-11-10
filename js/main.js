// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');
// отслеживаем клик по кнопке меню и запускаем функцию 
menuToggle.addEventListener('click', function (event) {
    // отменяем стандартное поведение ссылки
    event.preventDefault();
    // вешаем класс на меню, когда кликнули по кнопке меню
    menu.classList.toggle('visible');
})

const loginElement = document.querySelector('.login'),
    loginForm = document.querySelector('.login-form'),
    emailInput = document.querySelector('.login-email'),
    passwordInput = document.querySelector('.login-password'),
    loginSignup = document.querySelector('.login-signup')

const userElement = document.querySelector('.user'),
    userNameElement = document.querySelector('.user-name')

const usersList = [
    {
        id: '1',
        email: 'jul@mail.com',
        password: '1234',
        username: 'arvein'
    },
    {
        id: '2',
        email: 'kirito@mail.com',
        password: '12345',
        username: 'kirito'
    }
]

const setUsers = {
    user: null,
    login(email, password, handler) {
        const user = this.getUser(email)
        if (user && user.password === password) {
            this.authorizedUser(user)
            handler()
            console.log('auth')
        } else {
            alert('Пользователь с такими данными не найден')
        }
    },
    logout() {
        console.log('logout')
    },
    signUp(email, password, handler) {
        if (!this.getUser(email)) {
            const user = {email, password, username: email.slice(0, '@')}
            usersList.push(user)
            this.authorizedUser(user)
            handler()
        } else {
            alert('Пользователь уже зарегистрирован под таким email')
        }
    },
    getUser(email) {
        return usersList.find(item => item.email === email)
    },
    authorizedUser(user) {
        this.user = user
    }
}

const toggleAuthDOM = () => {
    const user = setUsers.user
    console.log('user', user)

    if (user) {
        loginElement.style.display = 'none'
        userElement.style.display = ''
        userNameElement.textContent = user.username
    } else {
        loginElement.style.display = ''
        userElement.style.display = 'none'
    }
}

loginForm.addEventListener('submit', e => {
    e.preventDefault()
    const emailValue = emailInput.value
    const passwordValue = passwordInput.value

    setUsers.login(emailValue, passwordValue, toggleAuthDOM)
})

loginSignup.addEventListener('click', e => {
    e.preventDefault()
    const emailValue = emailInput.value
    const passwordValue = passwordInput.value

    setUsers.signUp(emailValue, passwordValue, toggleAuthDOM)
})

toggleAuthDOM()