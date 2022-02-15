export function SearchBar(props) {
  return (
    <input
      type="text"
      name="searchParams"
      placeholder="O que você procura?"
      onKeyUp={(event) => {
        props.filterAPI(event.target.value);
      }}
    />
  );
}
