import { useState } from "react";
import Form from "./Form";
import List from "./List";
import Loading from "./Loading";

function App() {
  const [username, setUsername] = useState("");
  const [isFetched, setIsFetched] = useState(false);
  const [nonFollowersList, setNonFollowersList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const changeHandler = (event) => {
    setUsername(event.target.value);
  };

  const fetchNonFollowersList = async () => {
    try {
      setIsLoading(true);
      const data = await (
        await fetch(
          `https://non-followers-gh-production.up.railway.app/${username}`
        )
      ).json();
      setNonFollowersList(data);
      setIsFetched(true);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isLoading === true ? <Loading /> : ""}
      {isFetched === false && isLoading === false ? (
        <Form
          username={username}
          changeHandler={changeHandler}
          onClickHandler={fetchNonFollowersList}
        />
      ) : (
        <List list={nonFollowersList} />
      )}
    </>
  );
}

export default App;
