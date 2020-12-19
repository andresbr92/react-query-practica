import {useQuery} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
function Example() {
  const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
    fetch(
      "https://rickandmortyapi.com/api/character"
    ).then((res) => res.json())
  );

  console.log(data)

  return (
    <div>
      <h1> {data && data.results[0].name}</h1>
    </div>
  );
}

export default Example
