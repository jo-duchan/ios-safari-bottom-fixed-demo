import ReactDOM from "react-dom";
import styled from "styled-components";
import { ReactComponent as Home } from "assets/icon/home.svg";
import { ReactComponent as Clip } from "assets/icon/clip.svg";
import { ReactComponent as Microphone } from "assets/icon/microphone.svg";
import { ReactComponent as Smiley } from "assets/icon/smiley.svg";

const itemList = [
  {
    id: "nav00",
    icon: <Home stroke="#fff" />,
  },
  {
    id: "nav01",
    icon: <Clip stroke="#fff" />,
  },
  {
    id: "nav02",
    icon: <Microphone stroke="#fff" />,
  },
  {
    id: "nav03",
    icon: <Smiley fill="#fff" />,
  },
];

function BottomNavigation() {
  const portalElement: HTMLElement | null = document.getElementById("overlays");

  const renderContent = (
    <Container>
      {itemList.map((item) => (
        <Item key={item.id}>{item.icon}</Item>
      ))}
    </Container>
  );

  return ReactDOM.createPortal(renderContent, portalElement as HTMLElement);
}

export default BottomNavigation;

const Container = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: #000;
  padding: 20px 58px;
  box-sizing: border-box;
  border-radius: 24px 24px 0 0;
  overflow: hidden;
`;

const Item = styled.div`
  width: fit-content;
`;
