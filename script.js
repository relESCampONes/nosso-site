const left=document.querySelector('.left')
const right=document.querySelector('.right')
const container1=document.querySelector('.container1')

left.addEventListener('mouseenter', () => container1.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container1.classList.remove('hover-left'))

right.addEventListener('mouseenter', () => container1.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container1.classList.remove('hover-right'))