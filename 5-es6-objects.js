// Object property shorthand

const name = 'Artur';
const userAge = 26;
const user = {
    name,
    age: userAge,
    location: 'Lisbon'
}

// console.log(user);

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const {label, stock} = product;

// console.log('label',label)
// console.log('stock',stock)

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock);
}

transaction('order', product);