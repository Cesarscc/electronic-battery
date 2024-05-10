import { useState } from "react";
import "./App.css";
import FccIcon from "./assets/FccIcon";
import { useEffect } from "react";

function App() {
  const [power, setPower] = useState(true);
  const [textKey, setTextKey] = useState("");
  const [isPiano, setIsPiano] = useState(false);
  const [volumenAud, setVolumenAud] = useState(0.3);

  const handleChangePower = () => {
    setPower(!power);
  };

  useEffect(() => {
    const buttonChange = document.getElementById("button-change");
    if (power) {
      buttonChange.classList.add("button-on");
      buttonChange.classList.remove("button-off");
    } else {
      setTextKey("");
      buttonChange.classList.add("button-off");
      buttonChange.classList.remove("button-on");
    }

    const bankChange = document.getElementById("bank-change");
    if (power && isPiano) {
      bankChange.classList.add("bank-on");
      bankChange.classList.remove("bank-off");
    } else if (power && !isPiano) {
      bankChange.classList.add("bank-off");
      bankChange.classList.remove("bank-on");
    }

    const handleKeyPress = (event) => {
      if (power) {
        if (event.key === "q" || event.key === "Q") {
          setTextKey(isPiano ? "Chord 1" : "Heater 1");
          const audio = new Audio(
            isPiano
              ? "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
              : "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
          );
          audio.volume = volumenAud;
          audio.play();
          const padQ = document.getElementById("drum-pad-Q");
          padQ.classList.add("color-pad");
          setTimeout(() => {
            padQ.classList.remove("color-pad");
          }, "75");
        } else if (event.key === "w" || event.key === "W") {
          setTextKey(isPiano ? "Chord 2" : "Heater 2");
          const audio = new Audio(
            isPiano
              ? "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
              : "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
          );
          audio.volume = volumenAud;
          audio.play();
          const padW = document.getElementById("drum-pad-W");
          padW.classList.add("color-pad");
          setTimeout(() => {
            padW.classList.remove("color-pad");
          }, "75");
        } else if (event.key === "e" || event.key === "E") {
          setTextKey(isPiano ? "Chord 3" : "Heater 3");
          const audio = new Audio(
            isPiano
              ? "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
              : "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
          );
          audio.volume = volumenAud;
          audio.play();
          const padE = document.getElementById("drum-pad-E");
          padE.classList.add("color-pad");
          setTimeout(() => {
            padE.classList.remove("color-pad");
          }, "75");
        } else if (event.key === "a" || event.key === "A") {
          setTextKey(isPiano ? "Shaker" : "Heater 4");
          const audio = new Audio(
            isPiano
              ? "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
              : "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
          );
          audio.volume = volumenAud;
          audio.play();
          const padA = document.getElementById("drum-pad-A");
          padA.classList.add("color-pad");
          setTimeout(() => {
            padA.classList.remove("color-pad");
          }, "75");
        } else if (event.key === "s" || event.key === "S") {
          setTextKey(isPiano ? "Open HH" : "Clap");
          const audio = new Audio(
            isPiano
              ? "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
              : "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
          );
          audio.volume = volumenAud;
          audio.play();
          const padS = document.getElementById("drum-pad-S");
          padS.classList.add("color-pad");
          setTimeout(() => {
            padS.classList.remove("color-pad");
          }, "75");
        } else if (event.key === "d" || event.key === "D") {
          setTextKey(isPiano ? "Closed HH" : "Open HH");
          const audio = new Audio(
            isPiano
              ? "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
              : "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
          );
          audio.volume = volumenAud;
          audio.play();
          const padD = document.getElementById("drum-pad-D");
          padD.classList.add("color-pad");
          setTimeout(() => {
            padD.classList.remove("color-pad");
          }, "75");
        } else if (event.key === "z" || event.key === "Z") {
          setTextKey(isPiano ? "Punchy Kick" : "Kick n'Hat");
          const audio = new Audio(
            isPiano
              ? "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
              : "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
          );
          audio.volume = volumenAud;
          audio.play();
          const padZ = document.getElementById("drum-pad-Z");
          padZ.classList.add("color-pad");
          setTimeout(() => {
            padZ.classList.remove("color-pad");
          }, "75");
        } else if (event.key === "x" || event.key === "X") {
          setTextKey(isPiano ? "Side Stick" : "Kick");
          const audio = new Audio(
            isPiano
              ? "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
              : "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
          );
          audio.volume = volumenAud;
          audio.play();
          const padX = document.getElementById("drum-pad-X");
          padX.classList.add("color-pad");
          setTimeout(() => {
            padX.classList.remove("color-pad");
          }, "75");
        } else if (event.key === "c" || event.key === "C") {
          setTextKey(isPiano ? "Snare" : "Closed HH");
          const audio = new Audio(
            isPiano
              ? "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
              : "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
          );
          audio.volume = volumenAud;
          audio.play();
          const padC = document.getElementById("drum-pad-C");
          padC.classList.add("color-pad");
          setTimeout(() => {
            padC.classList.remove("color-pad");
          }, "75");
        }
      }
    };

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [power, isPiano, volumenAud]);

  const [dataSond] = useState({
    Q: {
      text: "Heater 1",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    W: {
      text: "Heater 2",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    E: {
      text: "Heater 3",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    A: {
      text: "Heater 4",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    S: {
      text: "Clap",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    D: {
      text: "Open HH",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    Z: {
      text: "Kick n'Hat",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    X: {
      text: "Kick",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    C: {
      text: "Closed HH",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  });

  const [dataSondPiano] = useState({
    Q: {
      text: "Chord 1",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    },
    W: {
      text: "Chord 2",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    },
    E: {
      text: "Chord 3",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    },
    A: {
      text: "Shaker",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    },
    S: {
      text: "Open HH",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    },
    D: {
      text: "Closed HH",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    },
    Z: {
      text: "Punchy Kick",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    },
    X: {
      text: "Side Stick",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    },
    C: {
      text: "Snare",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    },
  });

  const handleSond = (text) => {
    if (power) {
      if (isPiano) {
        setTextKey(dataSondPiano[text].text);
        const audio = new Audio(dataSondPiano[text].sound);
        audio.volume = volumenAud;
        audio.play();
        const pad = document.getElementById(`drum-pad-${text}`);
        pad.classList.add("color-pad");
        setTimeout(() => {
          pad.classList.remove("color-pad");
        }, "75");
      } else {
        setTextKey(dataSond[text].text);
        const audio = new Audio(dataSond[text].sound);
        audio.volume = volumenAud;
        audio.play();
        const pad = document.getElementById(`drum-pad-${text}`);
        pad.classList.add("color-pad");
        setTimeout(() => {
          pad.classList.remove("color-pad");
        }, "75");
      }
    }
  };

  const handeChangeInput = (e) => {
    setVolumenAud(e.target.value);
    const valueDisplay = parseInt(e.target.value * 100);
    if (power) {
      setTextKey("Volume :" + valueDisplay);
      setTimeout(() => {
        setTextKey("");
      }, "1500");
    }
  };

  const handleChangeBank = () => {
    if (power) {
      setIsPiano(!isPiano);
      if (isPiano) {
        setTextKey("Heater Kit");
      } else {
        setTextKey("Smooth Piano Kit");
      }
    }
  };

  return (
    <main>
      <section id="drum-machine">
        <div id="icon-text-responsive">
          <p>FCC</p>
          <i>
            <FccIcon />
          </i>
        </div>
        <div id="drum-pad">
          <div id="drum-pad-Q" tabIndex={0} onClick={() => handleSond("Q")}>
            Q
          </div>
          <div id="drum-pad-W" tabIndex={0} onClick={() => handleSond("W")}>
            W
          </div>
          <div id="drum-pad-E" tabIndex={0} onClick={() => handleSond("E")}>
            E
          </div>
          <div id="drum-pad-A" tabIndex={0} onClick={() => handleSond("A")}>
            A
          </div>
          <div id="drum-pad-S" tabIndex={0} onClick={() => handleSond("S")}>
            S
          </div>
          <div id="drum-pad-D" tabIndex={0} onClick={() => handleSond("D")}>
            D
          </div>
          <div id="drum-pad-Z" tabIndex={0} onClick={() => handleSond("Z")}>
            Z
          </div>
          <div id="drum-pad-X" tabIndex={0} onClick={() => handleSond("X")}>
            X
          </div>
          <div id="drum-pad-C" tabIndex={0} onClick={() => handleSond("C")}>
            C
          </div>
        </div>
        <div id="controls-machine">
          <div id="icon-text">
            <p>FCC</p>
            <i>
              <FccIcon />
            </i>
          </div>
          <div id="power">
            <p>Power</p>
            <div id="power-button">
              <div
                id="button-change"
                className="button-on"
                onClick={handleChangePower}
              />
            </div>
          </div>
          <div id="display">{textKey}</div>
          <div id="volumen">
            <input
              type="range"
              max={1}
              min={0}
              step={0.01}
              defaultValue={0.3}
              onChange={handeChangeInput}
              disabled={!power}
            />
          </div>
          <div id="bank">
            <p>Bank</p>
            <div id="bank-button">
              <div
                id="bank-change"
                className="bank-on"
                onClick={handleChangeBank}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
