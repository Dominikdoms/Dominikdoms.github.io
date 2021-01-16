//---------FORM-------
const calcForm = document.querySelector(".calc__form")
const products = document.querySelector("#products");
const orders = document.querySelector("#orders");
const package = document.querySelector("#package");
const basic = document.querySelector("[data-value=basic]")
const professional = document.querySelector("[data-value=professional]")
const premium = document.querySelector("[data-value=premium]")
const accounting = document.querySelector("#accounting");
const terminal = document.querySelector("#terminal")

//------SUMMARY-------
const sumProducts = document.querySelector("[data-id=products]");
const sumOrders = document.querySelector("[data-id=orders]");
const sumPackage = document.querySelector("[data-id=package]");
const sumAccounting = document.querySelector("[data-id=accounting]");
const sumTerminal = document.querySelector("[data-id=terminal]");
const sumTotalPrice = document.querySelector("#total-price");

//-----variables------
let countSumProduct = 0;
let countSumOrders = 0;
let countSumAccounting = 0;
let countSumTerminal = 0;
let countSumPackage = 0
let total = 0


//-----counting------
calcForm.addEventListener("keyup", function (event) {
    total = [
        countSumProduct,
        countSumOrders,
        countSumPackage,
        countSumAccounting,
        countSumTerminal
    ].reduce((acc, cur) => acc + cur, 0);
    sumTotalPrice.lastElementChild.innerText = `$${total}`;
    if (total) {
        sumTotalPrice.classList.add("open")
    } else {
        sumTotalPrice.classList.remove("open")
    }
});

calcForm.addEventListener("click", function (event) {
    total = [
        countSumProduct,
        countSumOrders,
        countSumPackage,
        countSumAccounting,
        countSumTerminal
    ].reduce((acc, cur) => acc + cur, 0);
    sumTotalPrice.lastElementChild.innerText = `$${total}`;
    if (total) {
        sumTotalPrice.classList.add("open")
    } else {
        sumTotalPrice.classList.remove("open")
    }
});


//----------addelements and count------
products.addEventListener("keyup", function (event) {
    countSumProduct = this.value * 0.5
    sumProducts.children[1].innerText = `${this.value} * $0.5`
    sumProducts.children[2].innerText = `$${countSumProduct}`
    if (this.value) {
        sumProducts.classList.add("open")
        sumTotalPrice.classList.add("open")
    } else {
        sumProducts.classList.remove("open")
        sumTotalPrice.classList.remove("open")
    }
})
orders.addEventListener("keyup", function (event) {
    countSumOrders = this.value * 0.25
    sumOrders.children[1].innerText = `${this.value} * $0.25`
    sumOrders.children[2].innerText = `$${countSumOrders}`
    if (this.value) {
        sumOrders.classList.add("open")
        sumTotalPrice.classList.add("open")
    } else {
        sumOrders.classList.remove("open")
        sumTotalPrice.classList.remove("open")
    }
})


//--------PACKAGE---------
package.addEventListener("click", function (event) {
    package.classList.toggle("open")
})


//----CHOOSE--PACKAGE-----
basic.addEventListener("click", function (event) {
    sumPackage.classList.add("open")
    sumPackage.children[1].innerText = "Basic"
    sumPackage.children[2].innerText = "$0"
    sumTotalPrice.classList.toggle("open")
    countSumPackage = 0;
})
professional.addEventListener("click", function (event) {
    sumPackage.classList.add("open")
    sumPackage.children[1].innerText = "Professional"
    sumPackage.children[2].innerText = "$25"
    sumTotalPrice.classList.add("open")
    countSumPackage = 25;
})
premium.addEventListener("click", function (event) {
    sumPackage.classList.add("open")
    sumPackage.children[1].innerText = "Premium"
    sumPackage.children[2].innerText = "$60"
    sumTotalPrice.classList.add("open")
    countSumPackage = 60;
})


//--------CHECKBOX--------
accounting.addEventListener("click", function (event) {
    sumAccounting.classList.toggle("open");
    sumAccounting.children[1].innerText = "$35"
    if (this.checked === true) {
        countSumAccounting = 35
    } else {
        countSumAccounting = 0
    }
})
terminal.addEventListener("click", function (event) {
    sumTerminal.classList.toggle("open");
    sumTerminal.children[1].innerText = "$5"
    if (this.checked === true) {
        countSumTerminal = 5;
    } else {
        countSumTerminal = 0;
    }
})