/ALl because we want all the element, not just first one/  
const panels= document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClass()
        panel.classList.add('active')
    })
})

function removeActiveClass(){
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}