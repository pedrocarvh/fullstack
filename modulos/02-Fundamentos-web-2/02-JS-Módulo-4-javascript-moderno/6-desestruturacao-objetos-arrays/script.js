const person = {
  namePerson: "Pedro",
  job: "Engenheiro de Software",
  teamFootball: "Corinthians",
  parents: ["Maria", "Francisco"]
}

const namePerson = person.namePerson

console.log(namePerson);

const { job, parents } = person

console.log(namePerson, job, parents);

const [mother, father] = parents

console.log(mother, father)

function createUser({ namePerson, job, teamFootball, parents }) {
  const id = Math.floor(Math.random() * 9999)
  return {
    id, namePerson, job, teamFootball, parents
  }
}

const pedro = createUser(person)

console.log(pedro);