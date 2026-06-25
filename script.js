document.addEventListener("DOMContentLoaded", () => {

const form = document.getElementById("customerForm");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

const name =
document.getElementById("name").value;

const mobile =
document.getElementById("mobile").value;

const email =
document.getElementById("email").value;

localStorage.setItem("customerName",name);
localStorage.setItem("customerMobile",mobile);
localStorage.setItem("customerEmail",email);

 window.location.href="favorites.html";

});

}

/* FAVORITES PAGE */

const checks =
document.querySelectorAll(".item-check");

const selectedItems =
document.getElementById("selectedItems");

const grandTotal =
document.getElementById("grandTotal");

function updateSummary(){

if(!selectedItems) return;

selectedItems.innerHTML="";

let total=0;
let selectedCount=0;

checks.forEach(check=>{

const card =
check.closest(".product-card");

const qty =
parseInt(
card.querySelector(".qty").textContent
);

const price =
parseInt(check.dataset.price);

const name =
check.dataset.name;

if(check.checked){

selectedCount++;

total += price * qty;

const item =
document.createElement("div");

item.classList.add("summary-item");

item.innerHTML=`
${name}
|
Qty: ${qty}
|
₹${price*qty}
`;

selectedItems.appendChild(item);

}

});

if(selectedCount===0){

selectedItems.innerHTML=
"No items selected.";

}

grandTotal.textContent=
`Total: ₹${total}`;

}

document.querySelectorAll(".plus").forEach(btn=>{

btn.addEventListener("click",()=>{

const qty =
btn.parentElement.querySelector(".qty");

qty.textContent =
parseInt(qty.textContent)+1;

updateSummary();

});

});

document.querySelectorAll(".minus").forEach(btn=>{

btn.addEventListener("click",()=>{

const qty =
btn.parentElement.querySelector(".qty");

if(parseInt(qty.textContent)>1){

qty.textContent =
parseInt(qty.textContent)-1;

}

updateSummary();

});

});

checks.forEach(check=>{

check.addEventListener("change",
updateSummary);

});

const placeOrder =
document.getElementById("placeOrder");

if(placeOrder){

placeOrder.addEventListener("click",()=>{

const mobile =
localStorage.getItem("customerMobile");

const email =
localStorage.getItem("customerEmail");
const orderId =
"MB" +
Math.floor(
100000 + Math.random()*900000
);

document.getElementById(
"successMessage"
).style.display="block";

document.getElementById(
"customerConfirmation"
).innerHTML=`
<h3>Order ID: ${orderId}</h3>
We have received your order.

Our team will contact you shortly at
<strong>${mobile}</strong>
or
<strong>${email}</strong>

to confirm your order details.

`;

window.scrollTo({

top:document.body.scrollHeight,
behavior:"smooth"

});

});

}

});
const topBtn = document.getElementById("topBtn");

if(topBtn){

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 300){
            topBtn.style.display = "block";
        }else{
            topBtn.style.display = "none";
        }

    });

    topBtn.addEventListener("click",()=>{

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

}

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

});
window.addEventListener("load",()=>{

    setTimeout(()=>{

        const loader =
        document.getElementById("loader");

        if(loader){
            loader.style.display = "none";
        }

    },1000);

});
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach((reveal) => {

        const windowHeight = window.innerHeight;

        const revealTop =
        reveal.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            reveal.classList.add("active");

        }

    });

});
