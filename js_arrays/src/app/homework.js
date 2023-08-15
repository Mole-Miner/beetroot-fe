/*
Мінімум
Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.*/

let purchases = [
    {
        name: 'Product 1',
        quantity: 5,
        sell: false,
        cost: 99,
        sum: this.quantity * this.cost
    },
    {
        name: 'Product 2',
        quantity: 2,
        sell: true,
        cost: 115,
        sum: this.quantity * this.cost
    },
    {
        name: 'Product 3',
        quantity: 4,
        sell: true,
        cost: 213,
        sum: this.quantity * this.cost
    },
    {
        name: 'Product 4',
        quantity: 3,
        sell: false,
        cost: 68,
        sum: this.quantity * this.cost
    }
];

function displayPurchases() {
    function displayPurchasesBySell(sell) {
        purchases
            .filter((purchase) => purchase.sell === sell)
            .forEach((purchase) => console.log(purchase));
    }
    displayPurchasesBySell(false);
    displayPurchasesBySell(true);
}

// displayPurchases();

function buyProduct(productName) {
    const product = purchases.find((purchase) => purchase.name === productName);
    if (product) {
        product.sell = !product.sell;
    }
}

buyProduct('Product 2');

/*Норма
Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом,
необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12,
а кількості товарів стало 2, то сума буде 24.*/

function removeProduct(productName) {
   /* const product = purchases.find((purchase) => purchase.name === productName);
    if (product) {
        const productIndex = purchases.indexOf(product);
        purchases.splice(productIndex, 1);
    }*/
    purchases = purchases.filter((purchase) => purchase.name !== productName);
}

// removeProduct('Product 3');

function addProduct(newProduct) {
    const product = purchases.find((purchase) => purchase.name === newProduct.name);
    if (!product) {
        purchases.push(newProduct);
        return;
    }
    product.quantity += 1;
}

/*
addProduct( {
    name: 'Product 5',
    quantity: 7,
    sell: false,
    cost: 65,
    sum: this.quantity * this.cost
});
addProduct( {
    name: 'Product 4',
    quantity: 7,
    sell: false,
    cost: 65,
    sum: this.quantity * this.cost
});
*/

/*Максимум
Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
Підрахунок суми всіх (не) придбаних продуктів.
Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)*/
function totalProductsSum() {
    return purchases.reduce((acc, purchase) => acc + purchase.cost * purchase.quantity, 0);
}

// console.log(totalProductsSum());

function notSellProductsSum() {
    /*return purchases.reduce((acc, purchase) => {
        if (!purchase.sell) {
            return acc + purchase.cost * purchase.quantity;
        }
        return acc;
    }, 0);*/
    return purchases
        .filter((purchase) => !purchase.sell)
        .reduce((acc, purchase) => acc + purchase.cost * purchase.quantity, 0);
}

// console.log(notSellProductsSum());

function displayProductsBySum(dsc = false) {
    purchases
        .sort((a, b) => dsc ? b.cost - a.cost : a.cost - b.cost)
        .forEach((purchase) => console.log(purchase));
}

displayProductsBySum();
displayProductsBySum(true);
