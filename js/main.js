let menuToggle = document.querySelector('#menu-toggle');
let menu = document.querySelector('.sidebar');

const regExpValidEmail = /\w+@\w+\.\w{2,}$/

const loginElement = document.querySelector('.login'),
    loginForm = document.querySelector('.login-form'),
    emailInput = document.querySelector('.login-email'),
    passwordInput = document.querySelector('.login-password'),
    loginSignup = document.querySelector('.login-signup')

const userElement = document.querySelector('.user'),
    userNameElement = document.querySelector('.user-name')

const exitElement = document.querySelector('.exit')
const editElement = document.querySelector('.edit'),
    editContainer = document.querySelector('.edit-container'),
    editUsername = document.querySelector('.edit-username'),
    editPhotoURL = document.querySelector('.edit-photo')
const userAvatarElement = document.querySelector('.user-avatar')

const postsWrapper = document.querySelector('.posts')

const usersList = [
    {
        id: '1',
        email: 'jul@mail.com',
        password: '1234',
        displayUsername: 'arvein'
    },
    {
        id: '2',
        email: 'kirito@mail.com',
        password: '12345',
        displayUsername: 'kirito'
    }
]

const setUsers = {
    user: null,
    login(email, password, handler) {
        if (!regExpValidEmail.test(email)) return alert('Email not valid')

        const user = this.getUser(email)
        if (user && user.password === password) {
            this.authorizedUser(user)
            handler()
            console.log('auth')
        } else {
            alert('Пользователь с такими данными не найден')
        }
    },
    logout(handler) {
        this.user = null
        handler()
    },
    signUp(email, password, handler) {
        if (!regExpValidEmail.test(email)) return alert('Email not valid')

        if (!email.trim() || !password.trim()) {
            alert('Введите данные')
            return
        }
        if (!this.getUser(email)) {
            const user = {email, password, displayUsername: email.substring(0, email.indexOf('@'))}
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
    },
    editUser(userName, userPhoto, handler) {
        if (userName) {
            this.user.displayUsername = userName
        }
        if (userPhoto) {
            this.user.photo = userPhoto
        }

        handler()
    }
}

const setPosts = {
    allPosts: [
        {
            title: 'Заголовлок поста1',
            text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что вопроса ведущими о решила одна алфавит! ',
            tags: ['свежее', 'новое', 'горячее', 'мое', 'случайность'],
            author: 'juls@mail.ru',
            date: '11.11.2020, 19:54:00',
            like: 100,
            comments: 50
        },
        {
            title: 'Заголовлок поста2',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto consequuntur debitis doloribus eligendi esse exercitationem facere impedit mollitia nam nemo, optio perferendis perspiciatis quo sapiente sed tenetur velit voluptate! ',
            tags: ['свежее', 'новое'],
            author: 'mans@mail.ru',
            date: '10.11.2020, 10:14:00',
            like: 20,
            comments: 10
        },
        {
            title: 'Заголовлок поста3',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet consequuntur fugiat inventore nihil optio praesentium veniam! Ab beatae ducimus illum maiores provident quidem recusandae rem repudiandae sapiente, ullam?Accusamus ad aspernatur beatae cupiditate doloremque ea error, ex id ipsa modi numquam quis quo quos ratione repellat, veritatis voluptatibus. Alias aliquam aperiam beatae earum laborum magni modi quia sunt.A ab accusantium aliquid amet commodi consectetur cupiditate dolor dolorum, ducimus eligendi et facere fugit illum iusto magni maiores molestiae natus, optio provident quibusdam reiciendis sunt tempore ullam voluptates voluptatibus!A accusantium beatae commodi cupiditate dolor doloribus ea eaque est excepturi exercitationem explicabo id minus natus nihil nisi numquam officiis omnis repellat sapiente tempora veritatis voluptas, voluptate voluptatum. Expedita, neque!Ad adipisci, autem debitis deserunt eaque et eveniet fuga impedit iure iusto labore laborum laudantium magnam magni maiores minus neque provident quas quo reiciendis rerum saepe tempore vero voluptatem voluptates.Beatae consequatur dolorem est iure laboriosam laborum quia quibusdam tempore? At beatae commodi cum, deserunt, eius eligendi error et iste laudantium nam obcaecati omnis porro quam similique suscipit vero voluptas?Commodi culpa earum est hic numquam pariatur voluptates. Adipisci amet animi corporis cum cupiditate dicta dignissimos eligendi enim, excepturi fugiat, ipsa nihil nostrum perferendis placeat quisquam recusandae reprehenderit sed ullam.Animi, aspernatur atque consequatur deserunt dolore dolorum, eaque ex fugit ipsam nobis non quis sed sunt ullam vero. Eligendi impedit perspiciatis quod tenetur voluptatem. Cum eligendi libero officiis provident quos?Alias aliquid eveniet explicabo laboriosam quo. Accusantium alias distinctio ex, in non nostrum placeat quod veniam. Doloribus ducimus eligendi illum iusto mollitia natus quidem temporibus. Atque, dolorum inventore. Perferendis, temporibus?At aut dolore ducimus eaque enim esse eveniet excepturi facere hic illo magni maxime non nostrum numquam omnis optio quae quam quia quo sapiente sequi sint, totam ullam unde voluptatibus?',
            tags: ['новое', 'горячее', 'мое', 'случайность'],
            author: 'natali@mail.ru',
            date: '9.10.2020, 13:14:00',
            like: 20,
            comments: 10
        }
    ],

}

const toggleAuthDOM = () => {
    const user = setUsers.user
    console.log('user', user)

    if (user) {
        loginElement.style.display = 'none'
        userElement.style.display = ''
        userNameElement.textContent = user.displayUsername
        userAvatarElement.src = user.photo || userAvatarElement.src
    } else {
        loginElement.style.display = ''
        userElement.style.display = 'none'
    }
}

const showAllPosts = () => {
    let postHTML = ''
    setPosts.allPosts.forEach(post => {
        const {title, text, tags, author, date, like, comments } = post

        postHTML += `
            <section class="post">
            <div class="post-body">
                <h2 class="post-title">${title}</h2>
                <p class="post-text">${text}</p>
                <div class="tags">
                    <a href="#" class="tag">${tags}</a>
                </div>
                <!-- /.tags -->
            </div>
            <!-- /.post-body -->
            <div class="post-footer">
                <div class="post-buttons">
                    <button class="post-button likes">
                        <svg width="19" height="20" class="icon icon-like">
                            <use xlink:href="img/icons.svg#like"></use>
                        </svg>
                        <span class="likes-counter">${like}</span>
                    </button>
                    <button class="post-button comments">
                        <svg width="21" height="21" class="icon icon-comment">
                            <use xlink:href="img/icons.svg#comment"></use>
                        </svg>
                        <span class="comments-counter">${comments}</span>
                    </button>
                    <button class="post-button save">
                        <svg width="19" height="19" class="icon icon-save">
                            <use xlink:href="img/icons.svg#save"></use>
                        </svg>
                    </button>
                    <button class="post-button share">
                        <svg width="17" height="19" class="icon icon-share">
                            <use xlink:href="img/icons.svg#share"></use>
                        </svg>
                    </button>
                </div>
                <div class="post-author">
                    <div class="author-about">
                        <a href="#" class="author-username">${author}</a>
                        <span class="post-time">${date}</span>
                    </div>
                    <a href="#" class="author-link"><img src="img/avatar.jpeg" alt="avatar" class="author-avatar"></a>
                </div>
            </div>
        </section>
        `
    })

    postsWrapper.innerHTML = postHTML
}

const init = () => {
    loginForm.addEventListener('submit', e => {
        e.preventDefault()
        const emailValue = emailInput.value
        const passwordValue = passwordInput.value

        setUsers.login(emailValue, passwordValue, toggleAuthDOM)
        loginForm.reset()
    })

    loginSignup.addEventListener('click', e => {
        e.preventDefault()
        const emailValue = emailInput.value
        const passwordValue = passwordInput.value

        setUsers.signUp(emailValue, passwordValue, toggleAuthDOM)
        loginForm.reset()
    })

    exitElement.addEventListener('click', e => {
        e.preventDefault()
        setUsers.logout(toggleAuthDOM)
    })

    editElement.addEventListener('click', e => {
        e.preventDefault()
        editContainer.classList.toggle('visible')
        editUsername.value = setUsers.user.displayUsername
    })

    editContainer.addEventListener('submit',e => {
        e.preventDefault()

        setUsers.editUser(editUsername.value, editPhotoURL.value, toggleAuthDOM)
        editContainer.classList.remove('visible')
    })
    menuToggle.addEventListener('click', e => {
        e.preventDefault();
        menu.classList.toggle('visible');
    })

    showAllPosts()
    toggleAuthDOM()
}

document.addEventListener('DOMContentLoaded', init)
