import react from "react";

export default function Forecast() {
  function seeForecast(event) {
    event.preventDefault();
    alert(`Forecast feature is not ready yet`);
  }
  return (
    <a href="/" onClick={seeForecast}>
      See Forecast
    </a>
  );
}
