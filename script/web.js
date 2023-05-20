document.body.addEventListener('keydown',(event)=>{
  console.log(event.key)
  if(event.key==='ArrowDown')
  {
    const el = document.body;
    
    el.setAttribute("style","background:white")
  }
})

const [red, green, blue] = [67,124,205]
const sec = document.querySelector('.aa')
window.addEventListener('scroll',()=>{
  let y = 5 - (window.scrollY) / 150
  y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
  const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
  sec.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})