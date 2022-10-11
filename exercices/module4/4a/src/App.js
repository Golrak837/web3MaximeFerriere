import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "09098765" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNumber] = useState("");

  const addSomeOne = (event) => {
    event.preventDefault();
    const newPersonne = {
      name: newName,
      number: newNumber,
    };
    let exist = false;
    persons.map((person) => {
      if (person.name === newPersonne.name) {
        exist = true;
      }
    });
    if (exist) {
      alert(newName + " is already added to Phonebook");
    } else {
      setPersons(persons.concat(newPersonne));
      setNewName("");
      setNumber("");
    }
  };

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNumber(event.target.value);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addSomeOne}>
        <div>Name:</div>
        <input value={newName} onChange={handleNoteChange} />
        <div>Number:</div>
        <input value={newNumber} onChange={handleNumberChange} />
        <br />
        <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((note) => (
          <div>
            <h3>
              {note.name}, {note.number}
            </h3>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default App;
