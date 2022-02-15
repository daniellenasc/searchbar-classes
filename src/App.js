import axios from "axios";
import { useState, useEffect } from "react";

import { SearchBar } from "./components/SearchBar";

function App() {
  // Temos dois states aqui: um para armazenamento principal e outro para backup
  const [pets, setPets] = useState([]);
  const [backup, setBackup] = useState([]);

  // useEffect para preencher ambos os states (principal e backup)
  useEffect(() => {
    async function fetchPets() {
      const response = await axios.get("END POINT DA API AQUI");

      // Setando ambos os states
      setBackup([...response.data]);
      setPets([...response.data]);
    }

    // Invocando nossa função assincrona dentro da callback do useEffect
    fetchPets();
  }, []);

  // Essa é a função responsavel por filtrar o state
  function filterPets(searchParams) {
    // Caso o value do input esteja vazio, voltamos o valor do state principal para o valor do backup
    if (searchParams === "") {
      setPets([...backup]);
      return;
    }

    // Filtrando o state principal para verificar se inclui o que foi digitado no input
    const filtred = pets.filter((currentPet) =>
      currentPet.name.toLowerCase().includes(searchParams.toLowerCase())
    );

    // Atualizando o state com o array filtrado acima
    setPets(filtred);
  }

  return (
    <>
      {/* Passando a função de filtrar o state principal para o componente SearchBar */}
      {/* Essa função será invocada no evento onKeyUp */}
      <SearchBar filterAPI={filterPets} />
      {pets.map((currentPet) => (
        <div>{`${currentPet.name}, ${currentPet.species}`}</div>
      ))}
    </>
  );
}

export default App;
