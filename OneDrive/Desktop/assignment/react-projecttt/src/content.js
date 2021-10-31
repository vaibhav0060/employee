import "./App.css";

function Buttons() {
  return (
    <div className="Buttons">
      <button className="button1">
        To see styling in Functional component
      </button>
      <button className="button2">To see styling in Class component</button>
    </div>
  );
}

export default Buttons;

function Functional() {
  return (
    <div className="Buttons">
      <h1>This is created using functional Component</h1>
    </div>
  );
}

export { Functional };
