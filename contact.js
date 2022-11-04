const contactForm = document.getElementById('contactForm')
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const messageInput = document.getElementById('message')
const subjectInput = document.getElementById('subject')

/* select error message */
const nameErr = document.getElementById('nameErr')
const emailErr = document.getElementById('emailErr')
const messageErr = document.getElementById('messageErr')
const subjectErr = document.getElementById('subjectErr')
const contactBtn = document.getElementById('contactBtn')

//check custom require form field
let correctName = false
let correctEmail = false
let correctMessage = false
let correctSubject = false

//store data
let formField = {
    name: '',
    email: '',
    subject: '',
    message: ''
}

contactForm.addEventListener('submit', (e) => {
    e.preventDefault()
    //form submit
    
    if (correctName && correctEmail && correctMessage && correctSubject) {
        //send response
        console.log(formField)
    } else {
        //error message
    }

})

nameInput.addEventListener('keyup', (e) => {
    let name = e.target.value

    if (name.length < 5) {
        correctName = false
        nameErr.style.setProperty('display', 'block')
        nameErr.style.setProperty('opacity', '1')
        nameInput.style.setProperty('border', '1px solid red')
    } else {
        correctName = true
        nameErr.style.setProperty('display', 'none')
        nameErr.style.setProperty('opacity', '0')
        nameInput.style.setProperty('border', '1px solid green')
        nameInput.style.setProperty('background', '#E8F0FE')
    }

    formField = {...formField, name}

})

emailInput.addEventListener('keyup', (e) => {
    let email = e.target.value
    let isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

    if (!isValidEmail) {
        correctEmail = false
        emailErr.style.setProperty('display', 'block')
        emailErr.style.setProperty('opacity', '1')
        emailInput.style.setProperty('border', '1px solid red')
    } else {
        correctEmail = true
        emailErr.style.setProperty('display', 'none')
        emailErr.style.setProperty('opacity', '0')
        emailInput.style.setProperty('border', '1px solid green')
        emailInput.style.setProperty('background', '#E8F0FE')
    }
    
    formField = {...formField, email}
})

messageInput.addEventListener('keyup', (e) => {
    let message = e.target.value
    if (!(message.length > 15 && message.length < 200)) {
        correctMessage = false
        messageErr.style.setProperty('display', 'block')
        messageErr.style.setProperty('opacity', '1')
        messageInput.style.setProperty('border', '1px solid red')
    } else {
        correctMessage = true
        messageErr.style.setProperty('display', 'none')
        messageErr.style.setProperty('opacity', '0')
        messageInput.style.setProperty('border', '1px solid green')
        messageInput.style.setProperty('background', '#E8F0FE')
    }
    formField = {...formField, message}
})

subjectInput.addEventListener('keyup', (e) => {
    let subject = e.target.value
    if (subject.length < 5) {
        correctSubject = false
        subjectErr.style.setProperty('display', 'block')
        subjectErr.style.setProperty('opacity', '1')
        subjectInput.style.setProperty('border', '1px solid red')
    } else {
        correctSubject = true
        subjectErr.style.setProperty('display', 'none')
        subjectErr.style.setProperty('opacity', '0')
        subjectInput.style.setProperty('border', '1px solid green')
        subjectInput.style.setProperty('background', '#E8F0FE')
    }
    formField = {...formField, subject}
})