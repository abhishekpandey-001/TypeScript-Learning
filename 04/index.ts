// Optional fields

interface User {
    name: string,
    phone: number,
    address?: string
}

const myUser: User = {
    name: "Batman",
    phone: 478236,
    // address: "gotham city" -->> Now the error won't be coming here when we are not using all the properties of User interface
}
