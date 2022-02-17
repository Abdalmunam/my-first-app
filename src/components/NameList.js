import React from 'react'
import Person from './Person'

function NameList() {
  const names = ['Ahmed', 'Ali', 'Muhammed']
  /*
  const persons = [
    {
      id: 1,
      name: 'Ahmed',
      age: 30,
      skill: 'React',
    },
    {
      id: 2,
      name: 'Ali',
      age: 20,
      skill: 'Angular',
    },
    {
      id: 3,
      name: 'Muhammed',
      age: 35,
      skill: 'Vue',
    },
  ]
  */
//   const personList = persons.map((person) => (
//     <h1>
//       I am {person.name}. I am {person.age} years old. I know {person.skill}.
//     </h1>
//   ))
const namesList = names.map((name, index) => <h1 key={index}>name= {name} index= {index}</h1>)
    //const namesList = names.map((name) => <h1 key={name}>{name}</h1>)
    //   const personList = persons.map((person) => <Person person={person} />)
//   const personList = persons.map((person) => (
//     <Person key={person.id} person={person} />
//   ))
  return (
    <div>
      {namesList}
      {/*{personList}*/}
    </div>
  )
}

export default NameList
