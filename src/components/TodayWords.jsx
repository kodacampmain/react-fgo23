function TodayWords({ submitHandler, words }) {
  return (
    <section className="bg-gray-300 py-2.5 px-5 flex flex-col items-center">
      <form onSubmit={submitHandler}>
        <input type="text" name="words" placeholder="Kata-kata hari ini" className="p-0.5 border-2 border-black" />
        <button type="submit" className="p-0.5 ml-1">
          Change
        </button>
      </form>
      <h3>{words}</h3>
    </section>
  );
}

export default TodayWords;
