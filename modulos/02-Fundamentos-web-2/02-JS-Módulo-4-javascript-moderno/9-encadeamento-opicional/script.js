const user = {
  name: "Peterson Dellarocha",
  email: "dellarocha.p@gmail.com",
  contateEmergency: [{
    name: "Marie",
    address: {
      street: "Optimus Village",
      number: 68
    }
  }, {
    name: "Juan",
    address: {
      street: "Santiago Street",
      number: 423
    }
  }],
  age: 23,
  phone: {
    countryCode: "+55",
    ddd: "92",
    number: 994563400
  }
}

console.log(user.contateEmergency[0].phone?.ddd);
console.log(user?.brothers?.length);