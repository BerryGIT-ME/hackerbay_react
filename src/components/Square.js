import { useContext, useEffect, useState } from "react";
import { GreenSpriteContext } from "../context/GreenSpriteContext";
import { CenterContext } from "../context/CenterContext";
import { GreenSpriteNoContext } from "../context/GreenSpriteNoContext";
import { CountContext } from "../context/CountContext";

const Square = ({ row, column }) => {
  // states
  const [isGreenSprite, setIsGreenSprite] = useState(false);
  const [isCentre, setIsCentre] = useState(false);
  const [isCleared, setIsCleared] = useState(false);

  // shared context
  const [sprites] = useContext(GreenSpriteContext);
  const [centre] = useContext(CenterContext);
  const [spriteNo, setspriteNo] = useContext(GreenSpriteNoContext);
  const [count, setcount] = useContext(CountContext);

  useEffect(() => {
    //set the no of sprites
    setspriteNo(sprites.row.length);
    console.log(spriteNo);

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
  }, []);

  const handleFocus = () => {
    // increment count
    let _count = count;
    _count++;

    setcount(_count);
    console.log("the no of moves", count);

    if (isGreenSprite) {
      console.log("found green sprite");
      let _spriteNo = spriteNo;
      console.log("sprite no is", _spriteNo);
      _spriteNo = _spriteNo - 1;

      if (_spriteNo <= 0) {
        let str = `Congratulations you have completed the game in ${count} moves`;
        alert(str);
      }

      setspriteNo(_spriteNo);
    }
    setIsCleared(false);
    setIsGreenSprite(false);
    setIsCentre(true);
  };

  const handleBlur = () => {
    setIsCleared(true);
  };

  const addLeadingZeros = (num) => {
    return String(num).padStart(3, "0");
  };

  return (
    <>
      <button
        id={`${addLeadingZeros(row)}${addLeadingZeros(column)}`}
        onFocus={() => handleFocus()}
        onBlur={() => handleBlur()}
        className={`square ${isGreenSprite ? "green" : ""} ${
          isCentre ? "red" : ""
        } ${isCleared ? "cleared" : ""}`}
      ></button>
    </>
  );
};

export default Square;
