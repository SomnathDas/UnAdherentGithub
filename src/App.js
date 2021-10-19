import { useState } from "react";
import Form from "./Form";
import List from "./List";
import Loading from "./Loading";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [isFetched, setIsFetched] = useState(false);
  const [nonFollowersList, setNonFollowersList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
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
      setIsLoading(false);
      setIsFetched(true);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  };

  return (
    <>
      {isLoading === true && isFetched === false && isError === false ? (
        <Loading />
      ) : isError === true ? (
        <div className="error-moment">
          <h2>Error! Please Try Again.</h2>
          <ul className="to-dolist">
            <li>Make Sure You have entered correct username.</li>
            <li>Also Take care of case-sensistivity.</li>
            <li>Please do not try to spam :)</li>
            <li>Eating lava is good for apple.</li>
          </ul>
        </div>
      ) : isLoading === false && isFetched === true && isError === false ? (
        <List list={nonFollowersList} />
      ) : (
        <Form
          username={username}
          changeHandler={changeHandler}
          onClickHandler={fetchNonFollowersList}
        />
      )}
    </>
  );
}

export default App;
