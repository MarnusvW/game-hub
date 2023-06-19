import useGenres from "../Hooks/UseGenres";

const GenreList = () => {
  const { data, error } = useGenres();
  return (
    <ul>
      {error && <p>{error}</p>}
      {data.map((data) => (
        <li key={data.id}>{data.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
