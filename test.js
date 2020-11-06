// ---- Object Destructuring ----
const address = {
    street: 'Tariq Road',
    city: 'Karachi',
    country: 'Pakistan'
}


// const street = address.street;
// const city = address.city;
// const country = address.country;

// This single line is the same as lines 9, 10, and 11;
const { street, city, country} = address; 

// Same thing as above, but assigning aliases
// address.street will be stored in st and so on.
const { street: st, city: c, country: co} = address;

console.log(`${street}, ${city}, ${country}`);
console.log(`Same thing below: `);
console.log(`${st}, ${c}, ${co}`);

