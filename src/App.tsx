import { useEffect, useState } from "react";
import styled from "styled-components";
import Pending from "components/Pending";
import Chips from "components/Chips";
import ItemList from "components/ItemList";
import BottomNavigation from "components/BottomNavigation";
import { add, remove } from "visualViewPortResize";

function App() {
  const [isIOS, setIsIOS] = useState<boolean>(false);
  const [mode, setMode] = useState<string>("");

  useEffect(() => {
    setIsIOS(/iPhone|iPad|iPod/i.test(navigator.userAgent));
  }, [isIOS]);

  useEffect(() => {
    const overlays = document.getElementById("overlays") as HTMLElement;

    if (mode === "NONE") {
      overlays.style.position = "fixed";
      overlays.style.height = "100%";
    }

    if (mode === "VISUALVIEWPORT") {
      overlays.style.position = "fixed";
      overlays.style.top = "0";
      overlays.style.width = "100%";
      overlays.style.height = "100%";
      overlays.style.transform = "translateZ(0)";
      add();
    } else {
      remove();
    }

    if (mode === "CSS") {
      overlays.style.position = "";
      overlays.style.top = "";
      overlays.style.width = "";
      overlays.style.height = "";
      overlays.style.transform = "";
    }
  }, [mode]);

  if (!isIOS) {
    return <Pending />;
  }

  return (
    <div className="App">
      <Title>{"iOS Safari \nBottom Fixed Demo"}</Title>
      <Chips onChange={(select) => setMode(select)} />
      <ItemList />
      <BottomNavigation />
    </div>
  );
}

export default App;

const Title = styled.h1`
  padding-inline: 24px;
  box-sizing: border-box;
  margin-top: 30px;
  margin-bottom: 16px;
  color: #25262b;
  font-size: 24px;
  font-weight: 700;
  line-height: 125%;
  letter-spacing: -0.48px;
  white-space: pre-line;
`;
