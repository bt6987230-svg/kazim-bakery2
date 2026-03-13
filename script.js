let cart=[]
let total=0

function scrollToMenu(){
document.getElementById("menu").scrollIntoView()
}

fetch("menu.json")
.then(res=>res.json())
.then(data=>{
const container=document.getElementById("menu-container")

data.forEach(item=>{

const div=document.createElement("div")
div.classList.add("item")

div.innerHTML=`
<h3>${item.name}</h3>
<p>₹${item.price}</p>
<button onclick="addToCart('${item.name}',${item.price})">Add</button>
`

container.appendChild(div)

})

})

function addToCart(name,price){

cart.push({name,price})
total+=price

const li=document.createElement("li")
li.textContent=name+" - ₹"+price

document.getElementById("cart-items").appendChild(li)

document.getElementById("total").textContent=total

}

function placeOrder(){

alert("Order placed! Call 9906627998 to confirm delivery.")

}
