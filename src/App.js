import { useState } from "react";
import "./App.css";
import logo from "./images/dentist-speak-logo.png";
import audioSiArchivo from "./audios/si.mp3";
import audioNoArchivo from "./audios/no.mp3";
import audioMuchoArchivo from "./audios/mucho.mp3";
import audioMasomenosArchivo from "./audios/masomenos.mp3";
import audioPocoArchivo from "./audios/poco.mp3";
import audioNoseArchivo from "./audios/nose.mp3";
import audioOuchArchivo from "./audios/ouch.mp3";

function App() {
  const [audioSi] = useState(new Audio(audioSiArchivo));
  const [audioNo] = useState(new Audio(audioNoArchivo));
  const [audioMucho] = useState(new Audio(audioMuchoArchivo));
  const [audioMasomenos] = useState(new Audio(audioMasomenosArchivo));
  const [audioPoco] = useState(new Audio(audioPocoArchivo));
  const [audioNose] = useState(new Audio(audioNoseArchivo));
  const [audioOuch] = useState(new Audio(audioOuchArchivo));

  function playAudio(audio) {
    audio.play();
  }

  return (
    <div className="App">
      <header>
        <img src={logo} alt="logo" />
      </header>
      <div className="main flexContainer vertical">
        <div className="sinOuch flexContainer">
          <div className="sino flexContainer vertical">
            <button
              className="si"
              onClick={() => {
                playAudio(audioSi);
              }}
            >
              si
            </button>
            <button
              className="no"
              onClick={() => {
                playAudio(audioNo);
              }}
            >
              no
            </button>
          </div>
          <div className="varios flexContainer vertical">
            <button
              onClick={() => {
                playAudio(audioMucho);
              }}
            >
              mucho
            </button>
            <button
              onClick={() => {
                playAudio(audioMasomenos);
              }}
            >
              más o menos
            </button>
            <button
              onClick={() => {
                playAudio(audioPoco);
              }}
            >
              poco
            </button>
            <button
              onClick={() => {
                playAudio(audioNose);
              }}
            >
              no sé
            </button>
          </div>
        </div>
        <button
          className="ouch"
          onClick={() => {
            playAudio(audioOuch);
          }}
        >
          ouch!
        </button>
      </div>
    </div>
  );
}

export default App;
