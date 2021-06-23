import { useContext, useEffect, useState } from "react";
import { GreenSpriteContext } from "../context/GreenSpriteContext";
import { CenterContext } from "../context/CenterContext";

const Square = ({ row, column }) => {
  const [isGreenSprite, setIsGreenSprite] = useState(false);
  const [isCentre, setIsCentre] = useState(false);
  const [isCleared, setIsCleared] = useState(false);
  const [sprites] = useContext(GreenSpriteContext);
  const [centre, setCentre] = useContext(CenterContext);

  useEffect(() => {
    for (let i = 0; i < sprites.row.length; i++) {
      if (sprites.row[i] === row && sprites.column[i] === column) {
        // component is a green sprite
        setIsGreenSprite(true);
      }
    }
    if (centre.row === row && centre.column === column) {
      setIsCentre(true);
    }
    return;
  });

  const handleFocus = () => {
    console.log("focus on", row, column);
    console.log(centre);
  };
  return (
    <>
      <button
        id={`${row}${column}`}
        onFocus={() => handleFocus()}
        className={`square ${isGreenSprite ? "green" : ""} ${
          isCentre ? "red" : ""
        } ${isCleared ? "cleared" : ""}`}
      ></button>
    </>
  );
};

export default Square;
