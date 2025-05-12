var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

//Part 1
let mainEl = document.querySelector("main")
mainEl.style.backgroundColor = 'var(--main-bg)'
mainEl.innerHTML = `<h1>DOM Manipulation</h1>`
mainEl.classList.add('flex-ctr')

//Part 2
let topMenuEL = document.getElementById('top-menu')
topMenuEL.style.height = "100%"
topMenuEL.style.backgroundColor ='var(--top-menu-bg)'
topMenuEL.classList.add('flex-around')

//Part 3
menuLinks.forEach(link =>{
    let a = document.createElement('a')
    a.href =link.href
    a.innerText =link.text
    topMenuEL.appendChild(a)
})
