var products = [
    {
        name : "chair",
        category : "furniture",
        price : 1000
    },
    {
        name : "pen",
        category : "writing",
        price : 1000
    }
]

let user = {
    name : "Zia",
    type : "premium",
}
 
let user2 = {
    name : "Zia",
    type : "normal",
}

let promCode = {
    name : "Z10",
    promocode : "b",
    value : 3
}

let promo2 = {

}

function calculateDiscount(promo, name, product) {

    let discount = 0;

    for (let index = 0; index < product.length; index++) {
        let product = products[index];  

        if ( name.type === "premium" ) {
            if (product.category === "furniture") {
                discount += product.price * 10/100;
            }else{
                discount += product.price * 8/100;
            }
        }else{
            discount += product.price * 5/100;
        }

    }

    if (promo.promocode && promo.name && promo.value) {
        return discount;
    }else{
        console.log("Promo code is invalid");
        return 0;
    }
    
}

console.log(calculateDiscount(promCode, user2, products));