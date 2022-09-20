import { useState } from "react";

function App() {
  const [power, setPower] = useState(0);
  const [time, setTime] = useState(0);
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState();

  function submit(event) {
    event.preventDefault();
    setTotal(((power / 1000) * time * 365 * price).toFixed(2));
  }

  return (
    <div>
      <h3>Berekent gemiddelde kostprijs computer op jaarbasis</h3>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="power">Gemiddeld vermogen (in watt):</label>
          <input
            type="number"
            id="power"
            step="0.01"
            value={power}
            onChange={(e) => setPower(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="dayTime">
            Gemiddelde computertijd per dag (in uur):
          </label>
          <input
            type="number"
            id="dayTime"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div>Gemiddelde computertijd per jaar (in uur): {time * 365}</div>
        <div>
          <label htmlFor="price">
            Prijs energieleverancier (in euro per kWh):
          </label>
          <input
            type="number"
            id="price"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <input type="submit" value="Bereken totale prijs" />
      </form>
      {total && (
        <p>
          De gemiddelde kostrpijs voor je computer op jaarbasis is: {total} euro
        </p>
      )}
    </div>
  );
}

export default App;
