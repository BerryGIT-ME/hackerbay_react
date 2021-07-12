import React from "react";
import { BoardSizeProvider } from "../../context/BoardSizeContext";
import { GreenSpriteProvider } from "../../context/GreenSpriteContext";
import { CenterContextProvider } from "../../context/CenterContext";
import { GreenSpriteNoContextProvider } from "../../context/GreenSpriteNoContext";
import { CountContextProvider } from "../../context/CountContext";
import { GameContextProvider } from "../../context/GameContext";
import Column from "./Column";
import BoardSize from "./BoardSize";

function BoardGameComponent() {
  return (
    <div>
      <h4>
        Click the red button and move around with the direction keys (arrow keys
        on the keyboard) until all the green buttons are cleared
      </h4>
      <GameContextProvider>
        <BoardSizeProvider>
          <GreenSpriteProvider>
            <CenterContextProvider>
              <GreenSpriteNoContextProvider>
                <CountContextProvider>
                  <BoardSize />
                  <Column />
                </CountContextProvider>
              </GreenSpriteNoContextProvider>
            </CenterContextProvider>
          </GreenSpriteProvider>
        </BoardSizeProvider>
      </GameContextProvider>
    </div>
  );
}

export default BoardGameComponent;
