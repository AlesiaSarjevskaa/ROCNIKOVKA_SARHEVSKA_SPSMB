import React, { useState, useRef } from "react";
import "../Game/Game.css";
import "../Game/Cpu.css";
import "../Game/Motherboard.css";
import "../Game/FanCpu.css";

import { Link } from "react-router-dom";
import pccase from "../../Images/case_empty.png";

export default function Game() {
  const [selectedId, setSelectedId] = useState(null);
  const [info, setInfo] = useState(String);
  const [placed, setPlaced] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });
  const motherboardHolderRef = useRef(undefined);
  const cpuHolderRef = useRef(undefined);
  const cpuFanHolderRef = useRef(undefined);
  const motherboardButton = useRef(undefined);
  const cpuButton = useRef(undefined);
  const cpuFanButton = useRef(undefined);

  const motherboardHolderClick = (e: any) => {
    console.log("Selected:  " + selectedId);
    if (selectedId === 1) {
      motherboardButton.current.style.display = "none";
      cpuHolderRef.current.style.display = "block";
      setPlaced({ ...placed, 1: true });
      motherboardHolderRef.current.style.background =
        "url('/src/Images/motherboard.png')";
      motherboardHolderRef.current.style.backgroundRepeat = "no-repeat";
      motherboardHolderRef.current.style.backgroundSize = "contain";
      motherboardHolderRef.current.style.border = "none";
      setInfo("Základní deska vložena.");
      return;
    }
    setInfo("Vyberte nějakou komponentu!.");
  };

  const cpuHolderClick = (e: any) => {
    console.log("Selected: " + selectedId);
    console.log(placed["1"]);
    if (selectedId === 2 && placed["1"] === true) {
      cpuButton.current.style.display = "none";
      cpuFanHolderRef.current.style.display = "block";
      setPlaced({ ...placed, 2: true });
      cpuHolderRef.current.style.background = "url('/src/Images/cpu.png')";
      cpuHolderRef.current.style.backgroundRepeat = "no-repeat";
      cpuHolderRef.current.style.backgroundSize = "contain";
      cpuHolderRef.current.style.border = "none";
      setInfo("Procesor vložen.");
      return;
    }
    if (!placed["1"]) {
      return setInfo("Vložte prvně základní desku");
    }
    setInfo("Vyberte nějakou komponentu.");
  };

  const cpuFanHolderClick = (e: any) => {
    console.log("Selected: " + selectedId);
    console.log(placed["1"]);
    if (selectedId === 3 && placed["2"] === true) {
      cpuFanButton.current.style.display = "none";
      
      setPlaced({ ...placed, 3: true });
      cpuFanHolderRef.current.style.background = "url('/src/Images/fan_cpu.png')";
      cpuFanHolderRef.current.style.backgroundRepeat = "no-repeat";
      cpuFanHolderRef.current.style.backgroundSize = "contain";
      cpuFanHolderRef.current.style.border = "none";
      setInfo("Chladiš pro procesor vložen.");
      return;
    }
    if (!placed["2"]) {
      return setInfo("Vložte prvně procesor");
    }
    setInfo("Vyberte nějakou komponentu.");
  };

  return (
    <div className="game-wrapper">
      <div className="components-wrapper">
        <Link to={"/"}>
          <button className="button">back</button>
        </Link>
        <div
          className="zakladniDeska component"
          ref={motherboardButton}
          onClick={() => setSelectedId(1)}
          style={
            placed[1]
              ? {
                  width: "100px",
                  height: "50px",
                }
              : {}
          }
        ></div>

        <div
          className="mistoProZakladniDesku component"
          onClick={() => {
            if (selectedId === 1) {
              setPlaced((prev) => ({ ...prev, 1: true }));
              setSelectedId(null);
            }
          }}
        ></div>

        <div
          className="procesor component"
          ref={cpuButton}
          onClick={() => setSelectedId(2)}
          style={
            placed[2]
              ? {
                  width: "4.9vw",
                  height: "10vh",
                 
                }
              : {}
          }
        ></div>

        <div
          className="mistoProProcesor component"
          onClick={() => {
            if (selectedId === 2) {
              setPlaced((prev) => ({ ...prev, 2: true }));
              setSelectedId(null);
            }
          }}
        ></div>

        <div
          className="chladicProcesor component"
          ref={cpuFanButton}
          onClick={() => setSelectedId(3)}
          style={
            placed[3]
              ? {
                  width: "9vw",
                  height: "15vh",
                  
                }
              : {}
          }
        ></div>

        <div
          className="mistoProChladicProcesor component"
          onClick={() => {
            if (selectedId === 3) {
              setPlaced((prev) => ({ ...prev, 3: true }));
              setSelectedId(null);
            }
          }}
        ></div>
        <p className="game-info">{info}</p>
      </div>
      <div className="wrapper">
        <div
          onClick={motherboardHolderClick}
          ref={motherboardHolderRef}
          className="pccase-component pccase-motherboard"
        ></div>
        <div
          onClick={cpuHolderClick}
          ref={cpuHolderRef}
          className="pccase-component pccase-cpu"
          style={{ display: "none" }}
        ></div>
        <div
          onClick={cpuFanHolderClick}
          ref={cpuFanHolderRef}
          className="pccase-component pccase-cpuFan"
          style={{ display: "none" }}
        ></div>
      </div>
    </div>
  );
}

//<img src={pccase} alt="pccase" className="pccase" />
