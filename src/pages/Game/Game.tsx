import React, { useState, useRef } from "react";
import "../Game/Game.css";
import "../Game/Cpu.css";
import "../Game/Motherboard.css";
import "../Game/FanCpu.css";
import "../Game/Ram.css";
import "../Game/Power.css";
import "../Game/Gpu.css";
import "../Game/Disk.css";
import "../Game/Fans.css";

import { Link } from "react-router-dom";

export default function Game() {
  const [selectedId, setSelectedId] = useState(null);
  const [info, setInfo] = useState("");
  const [placed, setPlaced] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
  });

  const motherboardHolderRef = useRef(null);
  const cpuHolderRef = useRef(null);
  const cpuFanHolderRef = useRef(null);
  const RamHolderRef = useRef(null);
  const PowerHolderRef = useRef(null);
  const GpuHolderRef = useRef(null);
  const DiskHolderRef = useRef(null);
  const FansHolderRef = useRef(null);

  const motherboardButton = useRef(null);
  const cpuButton = useRef(null);
  const cpuFanButton = useRef(null);
  const RamButton = useRef(null);
  const PowerButton = useRef(null);
  const GpuButton = useRef(null);
  const DiskButton = useRef(null);
  const FansButton = useRef(null);

  function motherboardHolderClick() {
    if (selectedId === 1) {
      motherboardButton.current.style.display = "none";
      cpuHolderRef.current.style.display = "block";
      setPlaced(prev => ({ ...prev, 1: true }));
      motherboardHolderRef.current.style.background ="url('/src/Images/motherboard.png')";
      motherboardHolderRef.current.style.backgroundRepeat = "no-repeat";
      motherboardHolderRef.current.style.backgroundSize = "contain";
      motherboardHolderRef.current.style.border = "none";
      setInfo("Základní deska vložena.");
      return;
    }
    setInfo("Vyberte nějakou komponentu!");
  }

  function cpuHolderClick() {
    if (!placed[1]) {
      setInfo("Vložte prvně základní desku");
      return;
    }
    if (selectedId === 2) {
      cpuButton.current.style.display = "none";
      cpuFanHolderRef.current.style.display = "block";
      setPlaced(prev => ({ ...prev, 2: true }));
      cpuHolderRef.current.style.background ="url('/src/Images/cpu.png')";
      cpuHolderRef.current.style.backgroundRepeat = "no-repeat";
      cpuHolderRef.current.style.backgroundSize = "contain";
      cpuHolderRef.current.style.border = "none";
      setInfo("Procesor vložen.");
      return;
    }
    setInfo("Vyberte nějakou komponentu.");
  }

  function cpuFanHolderClick() {
    if (!placed[2]) {
      setInfo("Vložte prvně procesor");
      return;
    }
    if (selectedId === 3) {
      cpuFanButton.current.style.display = "none";
      RamHolderRef.current.style.display = "block";
      setPlaced(prev => ({ ...prev, 3: true }));
      cpuFanHolderRef.current.style.background ="url('/src/Images/fan_cpu.png')";
      cpuFanHolderRef.current.style.backgroundRepeat = "no-repeat";
      cpuFanHolderRef.current.style.backgroundSize = "contain";
      cpuFanHolderRef.current.style.border = "none";
      setInfo("Chladič pro procesor vložen.");
      return;
    }
    setInfo("Vyberte nějakou komponentu.");
  }

  function RamHolderClick() {
    if (!placed[3]) {
      setInfo("Vložte prvně procesor");
      return;
    }
    if (selectedId === 4) {
      RamButton.current.style.display = "none";
      PowerHolderRef.current.style.display = "block";
      setPlaced(prev => ({ ...prev, 4: true }));
      RamHolderRef.current.style.background ="url('/src/Images/ram_inside.png')";
      RamHolderRef.current.style.backgroundRepeat = "no-repeat";
      RamHolderRef.current.style.backgroundSize = "contain";
      RamHolderRef.current.style.border = "none";
      setInfo("Pamet ram je vložena.");
      return;
    }
    setInfo("Vyberte nějakou komponentu.");
  }

  function PowerHolderClick() {
    if (!placed[4]) {
      setInfo("Vložte prvně procesor");
      return;
    }
    if (selectedId === 5) {
      PowerButton.current.style.display = "none";
      GpuHolderRef.current.style.display = "block"; 
      setPlaced(prev => ({ ...prev, 5: true }));
      PowerHolderRef.current.style.background ="url('/src/Images/power_inside.png')";
      PowerHolderRef.current.style.backgroundRepeat = "no-repeat";
      PowerHolderRef.current.style.backgroundSize = "contain";
      PowerHolderRef.current.style.border = "none";
      setInfo("Zdroj je vložen.");
      return;
    }
    setInfo("Vyberte nějakou komponentu.");
  }


  
  function GpuHolderClick() {
    if (!placed[5]) {
      setInfo("Vložte prvně procesor");
      return;
    }
    if (selectedId === 6) {
      GpuButton.current.style.display = "none";
      DiskHolderRef.current.style.display = "block";
      setPlaced(prev => ({ ...prev, 6: true }));
      GpuHolderRef.current.style.background ="url('/src/Images/gpu.png')";
      GpuHolderRef.current.style.backgroundRepeat = "no-repeat";
      GpuHolderRef.current.style.backgroundSize = "contain";
      GpuHolderRef.current.style.border = "none";
      setInfo("Graficka karta je vložena.");
      return;
    }
    setInfo("Vyberte nějakou komponentu.");
  }

  function DiskHolderClick() {
    if (!placed[6]) {
      setInfo("Vložte prvně grafickou kartu");
      return;
    }
    if (selectedId === 7) {
      DiskButton.current.style.display = "none";
      FansHolderRef.current.style.display = "block";
      setPlaced(prev => ({ ...prev, 7: true }));
      DiskHolderRef.current.style.background ="url('/src/Images/disk_inside.png')";
      DiskHolderRef.current.style.backgroundRepeat = "no-repeat";
      DiskHolderRef.current.style.backgroundSize = "contain";
      DiskHolderRef.current.style.border = "none";
      setInfo("Pevny disk je vloženy.");
      return;
    }
    setInfo("Vyberte nějakou komponentu.");
  }

  function FansHolderClick() {
    if (!placed[7]) {
      setInfo("Vložte prvně grafickou kartu");
      return;
    }
    if (selectedId === 8) {
      FansButton.current.style.display = "none";
      //FansHolderRef.current.style.display = "block";
      setPlaced(prev => ({ ...prev, 8: true }));
      FansHolderRef.current.style.background ="url('/src/Images/fans_inside.png')";
      FansHolderRef.current.style.backgroundRepeat = "no-repeat";
      FansHolderRef.current.style.backgroundSize = "contain";
      FansHolderRef.current.style.border = "none";
      setInfo("Vetraky jsou vloženy.");
      return;
    }
    setInfo("Vyberte nějakou komponentu.");
  }

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
        ></div>

        <div
          className="procesor component"
          ref={cpuButton}
          onClick={() => setSelectedId(2)}
        ></div>

        <div
          className="chladicProcesor component"
          ref={cpuFanButton}
          onClick={() => setSelectedId(3)}
        ></div>

        <div
          className="ram component"
          ref={RamButton}
          onClick={() => setSelectedId(4)}
        ></div>

        <div
          className="zdroj component"
          ref={PowerButton}
          onClick={() => setSelectedId(5)}
        ></div>
        
        <div
          className="gpu component"
          ref={GpuButton}
          onClick={() => setSelectedId(6)}
        ></div>
        
        <div
          className="disk component"
          ref={DiskButton}
          onClick={() => setSelectedId(7)}
        ></div>
        <div
          className="fans component"
          ref={FansButton}
          onClick={() => setSelectedId(8)}
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

          <div
          onClick={RamHolderClick}
          ref={RamHolderRef}
          className="pccase-component pccase-ram"
          style={{ display: "none" }}
        ></div>
        
        <div
          onClick={PowerHolderClick}
          ref={PowerHolderRef}
          className="pccase-component pccase-power"
          style={{ display: "none" }}
        ></div> 
        <div
          onClick={GpuHolderClick}
          ref={GpuHolderRef}
          className="pccase-component pccase-gpu"
          style={{ display: "none" }}
        ></div>
        
        <div
          onClick={DiskHolderClick}
          ref={DiskHolderRef}
          className="pccase-component pccase-disk"
          style={{ display: "none" }}
        ></div>

        <div
          onClick={FansHolderClick}
          ref={FansHolderRef}
          className="pccase-component pccase-fans"
          style={{ display: "none" }}
        ></div>
      </div>
    </div>
  );
}