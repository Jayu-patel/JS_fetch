const box = document.getElementById("main_box")
box.innerHTML = `
        <div class="loader">
            <span class="loader__element"></span>
            <span class="loader__element"></span>
            <span class="loader__element"></span>
        </div>
`
let str = ''
fetch("https://dummyjson.com/carts").then(res => res.json()).then(data =>{
    for(let i in data.carts){
        for(let j in data.carts[i].products){
            str+=`
            <div class="box">
            <div class="product span_2">
                <div>
                    <p>Product</p>
                    <h2>${data.carts[i].products[j].title}</h2>
                </div>
            </div>
            <div class="price">
                <div>
                    <p>Price:</p>
                    <h3>${data.carts[i].products[j].price}$</h3>
                </div>
            </div>
            <div class="quantity">
                <div>
                    <p>Quantity:</p>
                    <h3>${data.carts[i].products[j].quantity}</h3>
                </div>
            </div>
            <div class="total span_2">
                <h3>Total Price : ${data.carts[i].products[j].total}$</h3>
            </div>
        </div>
            `
        }
    }
})
.then(()=>{
    box.innerHTML = str
})
.catch(()=>{
    box.innerHTML = "Error 404"
})