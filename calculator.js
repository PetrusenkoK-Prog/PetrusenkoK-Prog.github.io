/*jslint browser */

// Целое положительное число без ведущих нулей, до 9 цифр
const QUANTITY_PATTERN = /^[1-9]\d{0,8}$/;

function calculate(event) {
    event.preventDefault();

    const quantityField = document.getElementById("quantity");
    const productSelect = document.getElementById("product");
    const error = document.getElementById("error");
    const result = document.getElementById("result");
    const text = quantityField.value.trim();

    error.textContent = "";
    result.textContent = "";

    if (!QUANTITY_PATTERN.test(text)) {
        error.textContent = "Ошибка: введите целое положительное число " +
                "(только цифры 0-9, не более 9 цифр).";
        return;
    }

    const quantity = Number.parseInt(text, 10);
    const price = Number.parseInt(productSelect.value, 10);
    const cost = price * quantity;

    result.textContent = "Стоимость заказа: " + cost + " руб.";
}

function init() {
    const button = document.getElementById("calc-button");
    button.addEventListener("click", calculate);
}

window.addEventListener("DOMContentLoaded", init);
