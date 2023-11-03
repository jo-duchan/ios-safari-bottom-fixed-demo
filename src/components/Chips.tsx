import React, { useState, useEffect } from "react";
import styled from "styled-components";

const list = [
  {
    label: "None",
  },
  {
    label: "RootScrollDisable",
  },
  {
    label: "VisualViewport",
  },
  {
    label: "Position",
  },
];

interface Props {
  onChange: (value: string) => void;
}

interface StyledProps {
  active: boolean;
}

function Chips({ onChange }: Props) {
  const [select, setSelect] = useState("NONE");

  useEffect(() => {
    onChange(select);
  }, [select]);

  const selectHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setSelect(e.currentTarget.innerText.toLocaleUpperCase());
  };

  return (
    <Container>
      {list.map((chip) => (
        <Chip
          key={chip.label}
          onClick={selectHandler}
          active={chip.label.toLocaleUpperCase() === select}
        >
          {chip.label}
        </Chip>
      ))}
    </Container>
  );
}

export default Chips;

const Container = styled.div`
  display: flex;
  gap: 8px;
  padding-inline: 24px;
  box-sizing: border-box;
  padding-bottom: 52px;
  overflow-x: auto;
`;

const Chip = styled.div<StyledProps>`
  width: fit-content;
  padding: 4px 10px;
  box-sizing: border-box;
  border-radius: 13px;
  color: ${({ active }) => (active ? "#FFF" : "#696A6C")};
  background: ${({ active }) => (active ? "#41A6EF" : "#F6F5F5")};
  font-size: 14px;
  font-weight: 600;
  line-height: normal;
  transition: color, background, 150ms ease-in-out;
  white-space: nowrap;
`;
