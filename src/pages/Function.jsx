import { useState, useEffect } from "react";
import { EventEmitter } from "node:events";

function Home(props) {
  const { name, umur, gender, isMarried, hobbies, komponen: Komponen } = props;
  const acara = new EventEmitter();
  const [words, setWords] = useState("Kata-Kata Hari Ini");
  const [ismarried, setIsmarried] = useState(isMarried);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // console.log(name);
  // console.log(umur);
  // console.log(gender);
  // console.log(isMarried);
  // props.id
  const printMarriedStatus = function () {
    if (isMarried) return "Sudah Menikah";
    return "Belum Menikah";
  };
  function submitHandler(e) {
    e.preventDefault();
    setWords(() => {
      return e.target.words.value;
    });
  }
  useEffect(() => {
    function eventHandler() {
      console.log("Status Berubah");
    }
    acara.on("toggled", eventHandler);
    return () => {
      acara.off("toggled", eventHandler);
    };
  }, []);
  useEffect(() => {
    console.log("effect");
    // effect/logika yang akan dijalankan
    // return dari fungsi akan berjalan sebagai will unmount
  }, [words]);
  // jika deps = [], maka seperti did mount
  // jika deps ada elemennya, maka seperti did update
  useEffect(() => {
    setTimeout(() => {
      // setIsLoading(true);
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          if (!response.ok) throw new Error(response.statusText);
          return response.json();
        })
        .then((data) => {
          setUsers(data);
        })
        .catch((err) => {
          if (err instanceof Error) console.error(err.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 1000);
  }, []);
  function showLoadingElement() {
    switch (isLoading) {
      case true:
        return <p>Loading...</p>;
      case false:
        return null;
      default:
        return null;
    }
  }
  function showLists(showListElement) {
    if (isLoading) return null;
    return <ol>{showListElement()}</ol>;
  }
  function showUsers() {
    if (users.length === 0) return null;
    return users.map((user) => {
      return <li key={user.id}>{user.name}</li>;
    });
  }
  return (
    <>
      <Komponen />
      <section>
        <h2>Data Diri</h2>
        <p>Nama: {name}</p>
        <p>Umur: {umur}</p>
        <p>Jenis Kelamin: {gender}</p>
        <p>Status Pernikahan: {printMarriedStatus()}</p>
        <p>Status Pernikahan: {ismarried ? "Sudah Menikah" : "Belum Menikah"}</p>
        <button
          type="button"
          onClick={() => {
            acara.emit("toggled");
            if (ismarried) return setIsmarried(false);
            return setIsmarried(true);
          }}
        >
          Toggle Status
        </button>
        <p>Hobi:</p>
        <ul>
          {hobbies.map((hobby, idx) => {
            return <li key={idx}>{hobby}</li>;
          })}
        </ul>
      </section>
      <section
        style={{
          backgroundColor: "lightgrey",
          padding: "10px 20px",
        }}
      >
        <form onSubmit={submitHandler}>
          <input type="text" name="words" placeholder="Kata-kata hari ini" style={{ padding: "2px" }} />
          <button type="submit" style={{ cursor: "pointer" }}>
            Change
          </button>
        </form>
        <h3>{words}</h3>
      </section>
      <section>
        {showLoadingElement()}
        {showLists(showUsers)}
      </section>
    </>
  );
}

export default Home;
