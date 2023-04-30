const screen = document.querySelector('.screen');

function addEvent(number) {
    number.addEventListener('click', function(){
        screen.innerText += number.innerText;
    });
}
const n7 = document.getElementById('n7');
const n8 = document.getElementById('n8');
const n9 = document.getElementById('n9');
const n4 = document.getElementById('n4');
const n5 = document.getElementById('n5');
const n6 = document.getElementById('n6');
const np = document.getElementById('np');
const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');
const n3 = document.getElementById('n3');
const ns = document.getElementById('ns');
const nd = document.getElementById('nd');
const n0 = document.getElementById('n0');
const ndi = document.getElementById('ndi');
const nm = document.getElementById('nm');

const numberArr = [
    n7, n8, n9, n1, n2, n3, n4, n5, n6, n0, np, ndi, nd, nm, ns
]
numberArr.forEach((a)=> addEvent(a))
const deleteBtn = document.getElementById('deleteBtn');

deleteBtn.addEventListener('click', function(){
    screen.innerText = screen.innerText.slice(0, -1)
});

const resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', function(){
    screen.innerText = '';
});
const equalsBtn = document.getElementById('equalsBtn');

equalsBtn.addEventListener('click', function(){
    screen.innerText = eval(screen.innerText);
});

let n = localStorage.getItem('n') || 1;

const rangeBtn = document.getElementById('rangeBtn');

rangeBtn.addEventListener('input', function() {
    n = rangeBtn.value;
    localStorage.setItem("n", n)
    themeChange();
});
function themeChange() {
    switch (n) {
        case '1':
            document.documentElement.style.setProperty('--bodyBackground', 'hsl(222, 26%, 31%)');
            document.documentElement.style.setProperty('--screenBackground', 'hsl(224, 36%, 15%)');
            document.documentElement.style.setProperty('--calculatorBackground', 'hsl(223, 31%, 20%)');
            document.documentElement.style.setProperty('--inputBackground', 'hsl(223, 31%, 20%)');
            document.documentElement.style.setProperty('--inputSliderBackground', 'hsl(6, 63%, 50%)');
            document.documentElement.style.setProperty('--inputSliderHoverBackground', 'hsl(6, 60%, 60%)');
            document.documentElement.style.setProperty('--headerColor', '#fff');
            document.documentElement.style.setProperty('--equalsColor', '#fff');
            document.documentElement.style.setProperty('--equalsShadow', 'hsl(6, 70%, 34%)');
            document.documentElement.style.setProperty('--equalsBackground', 'hsl(6, 63%, 50%)');
            document.documentElement.style.setProperty('--buttonsColor', 'hsl(221, 14%, 31%)');
            document.documentElement.style.setProperty('--buttonsBackground', 'hsl(30, 25%, 89%)');
            document.documentElement.style.setProperty('--buttonsShadow', 'hsl(35, 11%, 61%)');
            document.documentElement.style.setProperty('--buttonsHover', '#fff');
            document.documentElement.style.setProperty('--specialButtonHover', 'hsl(225, 30%, 70%)');
            document.documentElement.style.setProperty('--specialButtonColor', '#fff');
            document.documentElement.style.setProperty('--specialButtonShadow', 'hsl(224, 28%, 35%)');
            document.documentElement.style.setProperty('--specialButtonBackground', 'hsl(225, 21%, 49%)');
            screen.style.color = '#fff'
            break;
        case '2':
            document.documentElement.style.setProperty('--bodyBackground', 'hsl(0, 0%, 90%)');
            document.documentElement.style.setProperty('--screenBackground', 'hsl(0, 0%, 93%)');
            document.documentElement.style.setProperty('--calculatorBackground', 'hsl(0, 5%, 81%)');
            document.documentElement.style.setProperty('--inputBackground', 'hsl(0, 5%, 81%)');
            document.documentElement.style.setProperty('--inputSliderBackground', 'hsl(25, 98%, 40%)');

            document.documentElement.style.setProperty('--headerColor', 'hsl(60, 10%, 19%)');
            document.documentElement.style.setProperty('--equalsColor', '#fff');
            document.documentElement.style.setProperty('--equalsShadow', 'hsl(25, 99%, 27%)');
            document.documentElement.style.setProperty('--equalsBackground', 'hsl(25, 98%, 40%)');
            document.documentElement.style.setProperty('--buttonsColor', 'hsl(60, 10%, 19%)');
            document.documentElement.style.setProperty('--buttonsBackground', 'hsl(45, 7%, 89%)');
            document.documentElement.style.setProperty('--buttonsShadow', 'hsl(35, 11%, 61%)');
            document.documentElement.style.setProperty('--specialButtonColor', '#fff');
            document.documentElement.style.setProperty('--specialButtonShadow', 'hsl(185, 58%, 25%)');
            document.documentElement.style.setProperty('--specialButtonBackground', 'hsl(185, 42%, 37%)');

            document.documentElement.style.setProperty('--buttonsHover', '#fff');
            document.documentElement.style.setProperty('--specialButtonHover', 'hsl(185, 58%, 55%)');
            document.documentElement.style.setProperty('--inputSliderHoverBackground', 'hsl(25, 99%, 57%)');
            screen.style.color = 'var(--buttonsColor)'
            break;
        case '3':
            document.documentElement.style.setProperty('--bodyBackground', 'hsl(268, 75%, 9%)');
            document.documentElement.style.setProperty('--screenBackground', 'hsl(268, 71%, 12%)');
            document.documentElement.style.setProperty('--calculatorBackground', 'hsl(268, 71%, 12%)');
            document.documentElement.style.setProperty('--inputBackground', 'hsl(268, 71%, 12%)');
            document.documentElement.style.setProperty('--inputSliderBackground', 'hsl(176, 100%, 44%)');
            document.documentElement.style.setProperty('--headerColor', 'hsl(52, 100%, 62%)');
            document.documentElement.style.setProperty('--equalsColor', 'hsl(198, 20%, 13%)');
            document.documentElement.style.setProperty('--equalsShadow', 'hsl(177, 92%, 70%)');
            document.documentElement.style.setProperty('--equalsBackground', 'hsl(176, 100%, 44%)');
            document.documentElement.style.setProperty('--buttonsColor', 'hsl(52, 100%, 62%)');
            document.documentElement.style.setProperty('--specialButtonColor', '#fff');
            document.documentElement.style.setProperty('--inputSliderHoverBackground', 'hsl(177, 92%, 70%)');

            document.documentElement.style.setProperty('--buttonsHover', 'hsl(285, 91%, 52%');  
            document.documentElement.style.setProperty('--buttonsShadow', 'hsl(290, 70%, 36%)');
            document.documentElement.style.setProperty('--buttonsBackground', 'hsl(268, 47%, 21%)');

            document.documentElement.style.setProperty('--specialButtonHover', 'hsl(290, 70%, 36%)');
            
            document.documentElement.style.setProperty('--specialButtonShadow', 'hsl(285, 91%, 52%)');
            document.documentElement.style.setProperty('--specialButtonBackground', 'hsl(281, 89%, 26%)');
            screen.style.color = 'var(--buttonsColor)'
            break;
    
        default: 
            document.documentElement.style.setProperty('--bodyBackground', 'hsl(222, 26%, 31%)');
            document.documentElement.style.setProperty('--screenBackground', 'hsl(224, 36%, 15%)');
            document.documentElement.style.setProperty('--calculatorBackground', 'hsl(223, 31%, 20%)');
            document.documentElement.style.setProperty('--inputBackground', 'hsl(223, 31%, 20%)');
            document.documentElement.style.setProperty('--inputSliderBackground', 'hsl(6, 63%, 50%)');
            document.documentElement.style.setProperty('--inputSliderHoverBackground', 'hsl(6, 60%, 60%)');
            document.documentElement.style.setProperty('--headerColor', '#fff');
            document.documentElement.style.setProperty('--equalsColor', '#fff');
            document.documentElement.style.setProperty('--equalsShadow', 'hsl(6, 70%, 34%)');
            document.documentElement.style.setProperty('--equalsBackground', 'hsl(6, 63%, 50%)');
            document.documentElement.style.setProperty('--buttonsColor', 'hsl(221, 14%, 31%)');
            document.documentElement.style.setProperty('--buttonsBackground', 'hsl(30, 25%, 89%)');
            document.documentElement.style.setProperty('--buttonsShadow', 'hsl(35, 11%, 61%)');
            document.documentElement.style.setProperty('--buttonsHover', '#fff');
            document.documentElement.style.setProperty('--specialButtonHover', 'hsl(225, 30%, 70%)');
            document.documentElement.style.setProperty('--specialButtonColor', '#fff');
            document.documentElement.style.setProperty('--specialButtonShadow', 'hsl(224, 28%, 35%)');
            document.documentElement.style.setProperty('--specialButtonBackground', 'hsl(225, 21%, 49%)');
            screen.style.color = '#fff'
            break;
    }
};
themeChange();