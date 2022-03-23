//List

export default function Example4() {
  const cars = ["Ford", "BMW", "Audi"];

  function Car(props) {
    return <li>I am a {props.brand}</li>;
  }
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => (
          <Car brand={car} />
        ))}
      </ul>
    </>
  );
}
