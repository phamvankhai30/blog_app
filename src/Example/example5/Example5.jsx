//event
export default function Example5() {
  const shoot = () => {
    alert("Great Shot!");
  };

  return (
    <div>
      <button onClick={shoot}>Take the shot!</button>
    </div>
  );
}
