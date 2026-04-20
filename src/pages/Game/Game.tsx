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
import "../Game/Images.css";
import planktonMotherboard from "../../Images/plankton/without_bg/plankton_motherboard.png";
import planktonCpu from "../../Images/plankton/without_bg/plankton_classical1.png";
import planktonCpuFan from "../../Images/plankton/without_bg/plankton_classical2.png";
import planktonRam from "../../Images/plankton/without_bg/plankton_classical3.png";
import planktonPower from "../../Images/plankton/without_bg/plankton_power.png";
import planktonGpu from "../../Images/plankton/without_bg/plankton_classical1.png";
import planktonDisk from "../../Images/plankton/without_bg/plankton_classical5.png";
import planktonFans from "../../Images/plankton/without_bg/plankton_classical1.png";
import planktonFinished from "../../Images/plankton/without_bg/plankton_finished.png";

import rostlina1 from "../../Images/dekorace/rostlina1.png";
import rostlina2 from "../../Images/dekorace/rostlina2.png";
import rostlina3 from "../../Images/dekorace/rostlina3.png";
import rostlina4 from "../../Images/dekorace/rostlina4.png";
import musle1 from "../../Images/dekorace/musle1.png";
import musle2 from "../../Images/dekorace/musle2.png";


import { Link } from "react-router-dom";

export default function Game() {
  const [selectedId, setSelectedId] = useState(0);
  const [info, setInfo] = useState("Všechno začíná u mámy – vlož MOTHERbord!");
  const [planktonImg, setPlanktonImg] = useState([
    planktonMotherboard,
    planktonCpu,
    planktonCpuFan,
    planktonRam,
    planktonPower,
    planktonGpu,
    planktonDisk,
    planktonFans,
    planktonFinished,
  ]);
  const [planktonCounter, setPlanktonCounter] = useState(0);
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

  const motherboardHolderRef = useRef<HTMLDivElement>(null);
  const cpuHolderRef = useRef<HTMLDivElement>(null);
  const cpuFanHolderRef = useRef<HTMLDivElement>(null);
  const RamHolderRef = useRef<HTMLDivElement>(null);
  const PowerHolderRef = useRef<HTMLDivElement>(null);
  const GpuHolderRef = useRef<HTMLDivElement>(null);
  const DiskHolderRef = useRef<HTMLDivElement>(null);
  const FansHolderRef = useRef<HTMLDivElement>(null);

  const motherboardButton = useRef<HTMLDivElement>(null);
  const cpuButton = useRef<HTMLDivElement>(null);
  const cpuFanButton = useRef<HTMLDivElement>(null);
  const RamButton =  useRef<HTMLDivElement>(null);
  const PowerButton =  useRef<HTMLDivElement>(null);
  const GpuButton =  useRef<HTMLDivElement>(null);
  const DiskButton = useRef<HTMLDivElement>(null);
  const FansButton =  useRef<HTMLDivElement>(null);

  // --- Funkce pro klik na holdery ---
  function motherboardHolderClick() {
    if (selectedId === 1 && motherboardButton.current && cpuHolderRef.current && motherboardHolderRef.current) {
      motherboardButton.current.style.display = "none";
      cpuHolderRef.current.style.display = "block";
      setPlaced((prev) => ({ ...prev, 1: true }));
      motherboardHolderRef.current.style.background =
        "url('/src/Images/motherboard.png')";
      motherboardHolderRef.current.style.backgroundRepeat = "no-repeat";
      motherboardHolderRef.current.style.backgroundSize = "contain";
      motherboardHolderRef.current.style.border = "none";

      setInfo("Superrrr!");

      setTimeout(() => {
        setInfo(
          "Mozek operace je tady – dej tam CPU, ať se nám to myslí samo."
        );
      }, 1200);
      setPlanktonCounter(planktonCounter + 1);
      return;
    }
    setInfo("To asi neni to co potrebujes");
  }

  function cpuHolderClick() {
    if (!placed[1]) {
      setInfo("Vlož nejdříve základní desku!");
      return;
    }
    if (selectedId === 2 && cpuButton.current && cpuHolderRef.current && cpuFanHolderRef.current) {
      cpuButton.current.style.display = "none";
      cpuFanHolderRef.current.style.display = "block";
      setPlaced((prev) => ({ ...prev, 2: true }));
      cpuHolderRef.current.style.background = "url('/src/Images/cpu.png')";
      cpuHolderRef.current.style.backgroundRepeat = "no-repeat";
      cpuHolderRef.current.style.backgroundSize = "contain";
      cpuHolderRef.current.style.border = "none";

      setInfo("Superrrr!");
      setPlanktonCounter(planktonCounter + 1);

      setTimeout(() => {
        setInfo("Mozek se zahřívá, dej mu FANCPU, ať nevypukne chaos.");
      }, 1200);
      return;
    }
    setInfo("To asi neni to co potrebujes");
  }

  function cpuFanHolderClick() {
    if (!placed[2]) {
      setInfo("Vlož nejdříve CPU!");
      return;
    }
    if (selectedId === 3 && cpuFanButton.current && cpuFanHolderRef.current && RamHolderRef.current) {
      cpuFanButton.current.style.display = "none";
      RamHolderRef.current.style.display = "block";
      setPlaced((prev) => ({ ...prev, 3: true }));
      cpuFanHolderRef.current.style.background =
        "url('/src/Images/fan_cpu.png')";
      cpuFanHolderRef.current.style.backgroundRepeat = "no-repeat";
      cpuFanHolderRef.current.style.backgroundSize = "contain";
      cpuFanHolderRef.current.style.border = "none";

      setInfo("Superrrr!");
      setPlanktonCounter(planktonCounter + 1);

      setTimeout(() => {
        setInfo("Krabice na myšlenky – přidej RAM, ať si všechno pamatuje.");
      }, 1200);
      return;
    }
    setInfo("To asi neni to co potrebujes");
  }

  function RamHolderClick() {
    if (!placed[3]) {
      setInfo("Vlož nejdříve CPU a chladič!");
      return;
    }
    if (selectedId === 4 && RamButton.current && PowerHolderRef.current && RamHolderRef.current) {
      RamButton.current.style.display = "none";
      PowerHolderRef.current.style.display = "block";
      setPlaced((prev) => ({ ...prev, 4: true }));
      RamHolderRef.current.style.background =
        "url('/src/Images/ram_inside.png')";
      RamHolderRef.current.style.backgroundRepeat = "no-repeat";
      RamHolderRef.current.style.backgroundSize = "contain";
      RamHolderRef.current.style.border = "none";

      setInfo("Superrrr!");
      setPlanktonCounter(planktonCounter + 1);

      setTimeout(() => {
        setInfo("Energie pro všechny bláznivosti – zapoj POWER.");
      }, 1200);
      return;
    }
    setInfo("To asi neni to co potrebujes");
  }

  function PowerHolderClick() {
    if (!placed[4]) {
      setInfo("Vlož nejdříve RAM!");
      return;
    }
    if (selectedId === 5 && PowerButton.current && GpuHolderRef.current && PowerHolderRef.current) {
      PowerButton.current.style.display = "none";
      GpuHolderRef.current.style.display = "block";
      setPlaced((prev) => ({ ...prev, 5: true }));
      PowerHolderRef.current.style.background =
        "url('/src/Images/power_inside.png')";
      PowerHolderRef.current.style.backgroundRepeat = "no-repeat";
      PowerHolderRef.current.style.backgroundSize = "contain";
      PowerHolderRef.current.style.border = "none";

      setInfo("Superrrr!");
      setPlanktonCounter(planktonCounter + 1);

      setTimeout(() => {
        setInfo("Obrázky potřebují kouzlo – vlož GPU a bude to k popukání.");
      }, 1200);
      return;
    }
    setInfo("To asi neni to co potrebujes");
  }

  function GpuHolderClick() {
    if (!placed[5]) {
      setInfo("Vlož nejdříve Power!");
      return;
    }
    if (selectedId === 6 && GpuButton.current && DiskHolderRef.current && GpuHolderRef.current) {
      GpuButton.current.style.display = "none";
      DiskHolderRef.current.style.display = "block";
      setPlaced((prev) => ({ ...prev, 6: true }));
      GpuHolderRef.current.style.background = "url('/src/Images/gpu.png')";
      GpuHolderRef.current.style.backgroundRepeat = "no-repeat";
      GpuHolderRef.current.style.backgroundSize = "contain";
      GpuHolderRef.current.style.border = "none";

      setInfo("Superrrr!");
      setPlanktonCounter(planktonCounter + 1);

      setTimeout(() => {
        setInfo("Paměť, kam schováme všechnu šílenost – dej tam disk.");
      }, 1200);
      return;
    }
    setInfo("To asi neni to co potrebujes");
  }

  function DiskHolderClick() {
    if (!placed[6]) {
      setInfo("Vlož nejdříve GPU!");
      return;
    }
    if (selectedId === 7 && DiskButton.current && FansHolderRef.current && DiskHolderRef.current) {
      DiskButton.current.style.display = "none";
      FansHolderRef.current.style.display = "block";
      setPlaced((prev) => ({ ...prev, 7: true }));
      DiskHolderRef.current.style.background =
        "url('/src/Images/disk_inside.png')";
      DiskHolderRef.current.style.backgroundRepeat = "no-repeat";
      DiskHolderRef.current.style.backgroundSize = "contain";
      DiskHolderRef.current.style.border = "none";

      setInfo("Superrrr!");
      setPlanktonCounter(planktonCounter + 1);

      setTimeout(() => {
        setInfo("Nech to dýchat – FANy to rozfouknou správným směrem.");
      }, 1200);
      return;
    }
    setInfo("To asi neni to co potrebujes");
  }

  function FansHolderClick() {
    if (!placed[7]) {
      setInfo("Vlož nejdříve disk!");
      return;
    }
    if (selectedId === 8 && FansButton.current && FansHolderRef.current && DiskHolderRef.current) {
      FansButton.current.style.display = "none";
      setPlaced((prev) => ({ ...prev, 8: true }));
      FansHolderRef.current.style.background =
        "url('/src/Images/fans_inside.png')";
      FansHolderRef.current.style.backgroundRepeat = "no-repeat";
      FansHolderRef.current.style.backgroundSize = "contain";
      FansHolderRef.current.style.border = "none";

      setInfo("Superrrr!");
      setPlanktonCounter(planktonCounter + 1);

      setTimeout(() => {
        setInfo("Všechno zapojeno, ventilátory točí, mozky běží – PC je live!");
      }, 1200);
      return;
    }
    setInfo("To asi neni to co potrebujes");
  }

  // --- Render ---
  return (
    <div className="game-wrapper">
      <div className="components-wrapper">
        <Link to={"/"}>
          <button className="button">back</button>
        </Link>
     

        <div className="table">
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
        </div>

        <p className="game-info">{info}</p>
        <img
          className="plankton_game"
          src={planktonImg[planktonCounter]}
          alt="plankton"
        />
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
