import { IPerson } from "./interface";

const PersonA: IPerson = {
  name: 'Jake',
  age: 22,
  occupation: 'Developer',
  gender: 'Male'
}

const PersonB: IPerson = {
  name: 'Jane',
  age: 25,
  occupation: 'Product Manager',
  gender: 'Female'
}

const AllPersons: IPerson[] = [PersonA, PersonB]

export default AllPersons