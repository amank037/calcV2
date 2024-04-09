const display = document.getElementById('display')


function appendToDisplay(input){
    display.value += input
}

function resetDisplay(){
    display.value = ''
}

function calculate(){
    display.value = eval(display.value)
}

function deleteContent() {
    if (display.value.length > 0) {
        display.value = display.value.slice(0, -1)
    }
}

const themeBody = document.getElementById('themeBody')
const toggleBtn1 = document.getElementById('toggleBtn1')
const toggleBtn2 = document.getElementById('toggleBtn2')
const toggleBtn3 = document.getElementById('toggleBtn3')

toggleBtn1.addEventListener('change', function(){
    themeBody.style.setProperty('--body-background', 'hsl(222, 26%, 31%)')
    themeBody.style.setProperty('--toggle-keypad-background', 'hsl(223, 31%, 20%)')
    themeBody.style.setProperty('--display-background', 'hsl(224, 36%, 15%)')

    themeBody.style.setProperty('--key-background', 'hsl(30, 25%, 89%)')
    themeBody.style.setProperty('--key-shadow', 'hsl(28, 16%, 65%)')

    themeBody.style.setProperty('--contrast-key-background', 'hsl(6, 63%, 50%)')
    themeBody.style.setProperty('--contrast-key-shadow', 'hsl(6, 70%, 34%)')

    themeBody.style.setProperty('--alt-key-background', 'hsl(225, 21%, 49%)')
    themeBody.style.setProperty('--alt-key-shadow', 'hsl(224, 28%, 35%)')

    themeBody.style.setProperty('--key-text-color', 'hsl(221, 14%, 31%)')
    themeBody.style.setProperty('--text-color', 'hsl(0, 0%, 100%)')
    themeBody.style.setProperty('--calculate-text-color', 'hsl(0, 0%, 100%)')
    themeBody.style.setProperty('--reset-delete-text-color', 'hsl(0, 0%, 100%)')
})

toggleBtn2.addEventListener('change', function(){
    themeBody.style.setProperty('--body-background', 'hsl(0, 0%, 90%)')
    themeBody.style.setProperty('--toggle-keypad-background', 'hsl(0, 5%, 81%)')
    themeBody.style.setProperty('--display-background', 'hsl(0, 0%, 93%)')

    themeBody.style.setProperty('--key-background', 'hsl(45, 7%, 89%)')
    themeBody.style.setProperty('--key-shadow', 'hsl(35, 11%, 61%)')

    themeBody.style.setProperty('--contrast-key-background', 'hsl(25, 98%, 40%)')
    themeBody.style.setProperty('--contrast-key-shadow', 'hsl(25, 99%, 27%)')

    themeBody.style.setProperty('--alt-key-background', 'hsl(185, 42%, 37%)')
    themeBody.style.setProperty('--alt-key-shadow', 'hsl(185, 58%, 25%)')

    themeBody.style.setProperty('--key-text-color', 'hsl(60, 10%, 19%)')
    themeBody.style.setProperty('--text-color', 'hsl(60, 10%, 19%)')
    themeBody.style.setProperty('--calculate-text-color', 'hsl(0, 0%, 100%)')
    themeBody.style.setProperty('--reset-delete-text-color', 'hsl(0, 0%, 100%)')
})

toggleBtn3.addEventListener('change', function(){
    themeBody.style.setProperty('--body-background', 'hsl(268, 75%, 9%)')
    themeBody.style.setProperty('--toggle-keypad-background', 'hsl(268, 71%, 12%)')
    themeBody.style.setProperty('--display-background', 'hsl(268, 71%, 12%)')

    themeBody.style.setProperty('--key-background', 'hsl(268, 47%, 21%)')
    themeBody.style.setProperty('--key-shadow', 'hsl(290, 70%, 36%)')

    themeBody.style.setProperty('--contrast-key-background', 'hsl(176, 100%, 44%)')
    themeBody.style.setProperty('--contrast-key-shadow', 'hsl(177, 92%, 70%)')

    themeBody.style.setProperty('--alt-key-background', 'hsl(281, 89%, 26%)')
    themeBody.style.setProperty('--alt-key-shadow', 'hsl(285, 91%, 52%)')

    themeBody.style.setProperty('--key-text-color', 'hsl(52, 100%, 62%)')
    themeBody.style.setProperty('--text-color', 'hsl(52, 100%, 62%)')
    themeBody.style.setProperty('--calculate-text-color', 'hsl(198, 20%, 13%)')
    themeBody.style.setProperty('--reset-delete-text-color', 'hsl(0, 0%, 100%)')
})




