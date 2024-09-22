let products = [
    {
        id: 1,
        name: 'Crazy',
        price: 31000,
        img: 'images/products/burger-1.png',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    },
    {
        id: 2,
        name: 'Light',
        price: 26000,
        img: 'images/products/burger-2.png',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    },
    {
        id: 3,
        name: 'CheeseBurger',
        price: 29000,
        img: 'images/products/burger-3.png',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    },
    {
        id: 4,
        name: 'dBurger',
        price: 24000,
        img: 'images/products/burger-4.png',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    },
    {
        id: 5,
        name: 'Proweb burger',
        price: 44000,
        img: 'https://avatars.mds.yandex.net/i?id=2938dcff13a418627da129bf223a85e0fc537144-5469569-images-thumbs&n=13',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    },
]

const wrapperList = document.querySelector('.wrapper__list')

// outBurgers() - будет перебирать массива products и получать данные и выводить их внутри wrapperList
function outBurgers() {
    
    products.forEach((item) => {
        let {id, name, price, img} = item
        
        wrapperList.innerHTML += `<div class="wrapper__list-card" id="${id}">
            <p class="wrapper__list-count"></p>
            <img class="wrapper__list-image" src="${img}" alt="">
            <h3 class="wrapper__list-title">${name}</h3>
            <div class="wrapper__list-sub">
                <p class="wrapper__list-text">${price} сум</p>
                <button class="wrapper__list-btn"><img src="images/sell-icon.svg" alt=""></button>
            </div>
        </div>`
    })
}
outBurgers()

const   burgerBtns = document.querySelectorAll('.wrapper__list-btn'),
        cartBtn    = document.querySelector('.wrapper__navbar-btn'),
        cartClose  = document.querySelector('.wrapper__navbar-close'),
        basket     = document.querySelector('.wrapper__navbar-basket');
        

cartBtn.addEventListener('click', () => basket.classList.add('active'))
cartClose.addEventListener('click', () => basket.classList.remove('active'))

burgerBtns.forEach((btn) => {
    btn.addEventListener('click', () => addAmount(btn))
})


function addAmount(btn) {
    // closest() - метод который подключается к указаному ближайшему родителю
    // getAttribute() - метод который получает значение указаного атрибута
    let id = btn.closest('.wrapper__list-card').getAttribute('id')
    let burger = products.find((item) => item.id == id)
    burger.amount < 10 ?  burger.amount++ :  alert('Слишком много')
    console.log(burger);
}





let title = document.querySelector('.title');
let count = 0;
let colors = ['purple','brown','blue','green','orange']

const timer = setInterval(() => {
    if(count<100) {
        count++;
        title.textContent = count;
        title.style.color = getColor()
        
    }else {
        title.style.fontSize = '70px';
        title.textContent = count + '\u00A0lvl';
        document.body.style.backgroundColor = 'lightpink'
        title.style.color = 'brown'
        clearInterval(timer)
    }
},50)


function getColor() {
    const indexColor = Math.floor(Math.random() * colors.length)
    return colors[indexColor]
}


