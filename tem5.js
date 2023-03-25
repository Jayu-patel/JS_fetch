const box = document.querySelector('.box1')
const btn = document.querySelector('#submit')
box.innerHTML = `
        <div class="loader">
            <span class="loader__element"></span>
            <span class="loader__element"></span>
            <span class="loader__element"></span>
        </div>
`
let str = ''
fetch('https://dummyjson.com/carts')
.then(res => res.json())
.then(json => {
    for (let i in json.carts) {
        for (let j in json.carts[i].products) {
                str += `
                <div class="box">
    <div class="product span_2">
        <div>
            <p>Product</p>
            <h2>${json.carts[i].products[j].title}</h2>
        </div>
    </div>
    <div class="price">
        <div>
            <p>Actual price:</p>
            <h3>${json.carts[i].products[j].price}$</h3>
        </div>
    </div>
    <div class="quantity">
        <div>
            <p>Quantity:</p>
            <h3>${json.carts[i].products[j].quantity}</h3>
        </div>
    </div>
    <div class="total span_2">
        <h3>Total Price : ${json.carts[i].products[j].total}$</h3>
    </div>
</div>
            `
        }
    }
})
.then(()=>box.innerHTML=str)
.catch(()=>{
    box.innerHTML = `<h1 class="big_text">Error 404 Data not found</h1>`
})


str = ''
const search = () =>{
    let input = document.querySelector('#input').value.toLocaleLowerCase()
    fetch('https://dummyjson.com/carts')
        .then(res => res.json())
        .then(json => {
            for (let i in json.carts) {
                for (let j in json.carts[i].products) {
                    let p = json.carts[i].products[j].title
                    if(p.toLocaleLowerCase().includes(input)){
                        str += `
                        <div class="box">
            <div class="product span_2">
                <div>
                    <p>Product</p>
                    <h2>${json.carts[i].products[j].title}</h2>
                </div>
            </div>
            <div class="price">
                <div>
                    <p>Actual price:</p>
                    <h3>${json.carts[i].products[j].price}$</h3>
                </div>
            </div>
            <div class="quantity">
                <div>
                    <p>Quantity:</p>
                    <h3>${json.carts[i].products[j].quantity}</h3>
                </div>
            </div>
            <div class="total span_2">
                <h3>Total Price : ${json.carts[i].products[j].total}$</h3>
            </div>
        </div>
                    `
                    }
                }
            }
        })
        .then(()=> {
            box.innerHTML = str
            str=''
        })
        .catch(()=>{
            box.innerHTML = `<h1 class="big_text">Error 404 Data not found</h1>`
        })
}