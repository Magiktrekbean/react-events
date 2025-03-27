import react from "react";

export default function Weather() {
  function comingSoon(event) {
    event.preventDefault();
    alert(`Coming soon...`);
  }
  return <button onClick={comingSoon}>Current Temperature</button>;
}
