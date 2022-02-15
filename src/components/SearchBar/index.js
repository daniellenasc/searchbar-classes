export function SearchBar(props) {
  return (
    <input
      type="text"
      name="searchParams"
      placeholder="O que você procura?"
      // Criando uma callback anonima para invocar a função passada por props com o value do input como parametro
      onKeyUp={(event) => {
        props.filterAPI(event.target.value);
      }}
    />
  );
}
