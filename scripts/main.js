console.log("Welcome to the Factory Functions Practice Module");

//Kneel Diamonds

const metals = [
    { metal: "Sterling Silver", price: 12.42 },
    { metal: "14K Gold", price: 736.4 },
    { metal: "24K Gold", price: 1258.9 },
    { metal: "Platinum", price: 795.45 },
    { metal: "Palladium", price: 1241.0 }
]

const diamonds = [
    { carets: 0.5, price: 405 },
    { carets: 0.75, price: 782 },
    { carets: 1, price: 1470 },
    { carets: 1.5, price: 1997 },
    { carets: 2, price: 3638 }
]

const ringStyles = [
    { style: "Classic", price: 500 },
    { style: "Modern", price: 710 },
    { style: "Vintage", price: 965 }
]

const createCustomRing = (style, caret, metal) => {
    return {
        style: style.style,
        caret: caret.carets,
        metal: metal.metal,
        price: metal.price + caret.price + style.price
    }
}

console.log(createCustomRing(ringStyles[1], diamonds[2], metals[3]));


//Doctors
const createDoctorObj = (name, specialty, address) => {
    return {
        name: name,
        specialty: specialty,
        address: address
    }
}

console.log(createDoctorObj("Dr. Watts", "Esthetician", "3000 Midwood Street"))

//Pet 
const createPetObj = (name, breed) => {
    return{
        name: name,
        breed: breed
    }
}

console.log(createPetObj("Tennessee", "Vizsla"));

