const mobileShareWindow = document.querySelector('.mobile-share-window')
const btn = document.getElementById('btn')
const pcShareWindow = document.getElementById('icons')

btn.addEventListener('click', () => {

    pcShareWindow.classList.toggle('show')
    mobileShareWindow.classList.add('visible')
})


const mobileShareBtn = document.getElementById('mobile-share-btn')

mobileShareBtn.addEventListener('click', () => {
    mobileShareWindow.classList.remove('visible')

})