import "./styles/snake.css";
import { useEffect, useState } from "react";

const xCells = 10;
const yCells = 10;

const titleWidth = 50;
const titleHeight = 50;
const bodyColor = "#00ff";
const headColor = "#ff0000";
const speed = 500;

function Tile({ x, y, isHead }) {
  const style = {
    position: "absolute",
    left: x * titleWidth,
    top: y * titleHeight,
    width: titleWidth,
    height: titleHeight,
    backgroundColor: isHead ? headColor : bodyColor,
  };
  return <div style={style}></div>;
}

function snakeApp() {
  const directions = ["Up", "Left", "Down", "Right"];

  const [counter, setCounter] = useState(0);

  const [snake, setSnake] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 2 },
    { x: 0, y: 1 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);
  const changeDirection = (movingDir) => {
    const index = directions.findIndex((d) => d === movingDir);
    if (index !== -2) {
      const currenIndex = directions.findIndex((d) => d === directions);

      if (index % 2 !== currenIndex % 2) {
        setDirection(movingDir);
      }
    }
  };
  const moveDown = () => {
    let newSnake = [...snake];
    newSnake = newSnake.map((item, index) => {
      if (index === 0) {
        if (item.y + 1 > yCells - 1) {
          return { x: item.x, y: 0 };
        }
        return { x: item.x, y: item.y + 1 };
      }
      return { x: newSnake[index - 1].x, y: newSnake[index - 1].y };
    });
    setSnake(newSnake);
  };

  const moveRight = () => {
    let newSnake = [...snake];
    newSnake = newSnake.map((item, index) => {
      if (index === 0) {
        if (item.x + 1 > xCells - 1) {
          return { x: 0, y: item.y };
        }
        return { x: item.x + 1, y: item.y };
      }
      return { x: newSnake[index - 1].x, y: newSnake[index - 1].y };
    });
    setSnake(newSnake);
  };

  const moveUp = () => {
    let newSnake = [...snake];
    newSnake = newSnake.map((item, index) => {
      if (index === 0) {
        if (item.y < 1) {
          return { x: item.x, y: 9 };
        }
        return { x: item.x, y: item.y - 1 };
      }
      return { x: newSnake[index - 1].x, y: newSnake[index - 1].y };
    });
    setSnake(newSnake);
  };
  const moveLeft = () => {
    let newSnake = [...snake];
    newSnake = newSnake.map((item, index) => {
      if (index === 0) {
        if (item.x < 1) {
          return { x: 9, y: item.y };
        }
        return { x: item.x - 1, y: item.y };
      }
      return { x: newSnake[index - 1].x, y: newSnake[index - 1].y };
    });
    setSnake(newSnake);
  };
  const handleKeyDown = (e) => {
    console.log(e.key);
    switch (e.key) {
      case "ArrowDown":
        changeDirection("Down");
        break;
      case "ArrowRight":
        changeDirection("Right");
        break;
      case "ArrowUp":
        changeDirection("Up");
        break;
      case "ArrowLeft":
        changeDirection("Left");
        break;
      default:
        console.log("Nonn binary key");
    }
  };
  useEffect(() => {
    switch (directions) {
      case "Up":
        moveUp();
        break;
      case "Down":
        moveDown();
        break;
      case "Right":
        moveRight();
        break;
      case "Left":
        moveLeft();
        break;
    }
  }, [counter]);
  setTimeout(() => {
    setCounter(counter + 1);
  }, speed);

  return (
    <>
      <div className="wrapper" onKeyDown={handleKeyDown} tabIndex={0}>
        <h1>SnakeGame</h1>
        <div
          className="board"
          style={{
            width: xCells * titleWidth,
            height: yCells * titleHeight,
          }}
        >
          {snake.map((item, index) => {
            const isHead = index === 0;
            return (
              <Tile
                x={item.x}
                y={item.y}
                isHead={isHead}
                key={`snake-tile-${index}`}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default snakeApp();
