import { useState, useEffect, lazy, Suspense } from "react";
import { Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
// import { EventEmitter } from "node:events";

import { userAction } from "../redux/slices/users";

function Home(props) {
  const TodayWords = lazy(() => import("../components/TodayWords"));
  const { name, umur, gender, isMarried, hobbies, komponen: Komponen } = props;
  // const acara = new EventEmitter();
  const [words, setWords] = useState("Kata-Kata Hari Ini");
  const [ismarried, setIsmarried] = useState(isMarried);
  const dispatch = useDispatch();
  const { data, isLoading, isError, isSuccess, error } = useSelector((state) => state.users);
  // const [users, setUsers] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
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
  // useEffect(() => {
  //   function eventHandler() {
  //     console.log("Status Berubah");
  //   }
  //   acara.on("toggled", eventHandler);
  //   return () => {
  //     acara.off("toggled", eventHandler);
  //   };
  // }, []);
  useEffect(() => {
    console.log("effect");
    // effect/logika yang akan dijalankan
    // return dari fungsi akan berjalan sebagai will unmount
    const url = "http://localhost:8080/ping";
    const headers = new Headers();
    headers.append("my-headers", "header");
    fetch(url, {
      headers,
    })
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((err) => console.error(err));
  }, [words]);
  // jika deps = [], maka seperti did mount
  // jika deps ada elemennya, maka seperti did update
  useEffect(() => {
    setTimeout(() => {
      // setIsLoading(true);
      // fetch("https://jsonplaceholder.typicode.com/users")
      //   .then((response) => {
      //     if (!response.ok) throw new Error(response.statusText);
      //     return response.json();
      //   })
      //   .then((data) => {
      //     setUsers(data);
      //   })
      //   .catch((err) => {
      //     if (err instanceof Error) console.error(err.message);
      //   })
      //   .finally(() => {
      //     setIsLoading(false);
      //   });
      dispatch(userAction.getUsersThunk());
    }, 1000);
  }, []);
  useEffect(() => {
    document.title = "Home";
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
    if (isSuccess) return <ol>{showListElement()}</ol>;
    if (isError) return <p>{error}</p>;
    return null;
  }
  function showUsers() {
    if (data.length === 0) return null;
    return data.map((user) => {
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
            // acara.emit("toggled");
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
      <Suspense fallback={<Loading />}>
        <TodayWords submitHandler={submitHandler} words={words} />
      </Suspense>
      <section>
        {showLoadingElement()}
        {showLists(showUsers)}
      </section>
      <section className="py-1 flex justify-center items-center">
        <Link to="/todo">
          <button type="button">Todo</button>
        </Link>
      </section>
    </>
  );
}

function Loading() {
  return (
    <section className="bg-gray-300 py-3.5 px-6 flex flex-col items-center h-[75px]">
      <p className="font-bold text-3xl text-white italic">Loading...</p>
    </section>
  );
}

export default Home;
