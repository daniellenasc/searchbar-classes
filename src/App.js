import axios from "axios";
import { useState, useEffect } from "react";

import { SearchBar } from "./components/SearchBar";

function App() {
  const [pets, setPets] = useState([]);
  const [backup, setBackup] = useState([]);

  useEffect(() => {
    async function fetchPets() {
      const response = await axios.get(
        "https://ironrest.herokuapp.com/catchapet-agoravai"
      );
      setBackup([...response.data]);
      setPets([...response.data]);
    }

    fetchPets();
  }, []);

  function filterPets(searchParams) {
    if (searchParams === "") {
      setPets([...backup]);
      return;
    }

    const filtred = pets.filter((currentPet) =>
      currentPet.name.toLowerCase().includes(searchParams.toLowerCase())
    );
    setPets(filtred);
  }

  return (
    <>
      <SearchBar filterAPI={filterPets} />
      {pets.map((currentPet) => (
        <div>{`${currentPet.name}, ${currentPet.species}`}</div>
      ))}
    </>
  );
}

export default App;
