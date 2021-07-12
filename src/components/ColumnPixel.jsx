import Pixel from "./Pixel";

function ColumnPixel({ col, rowIndex, selected }) {
  return (
    <>
      {col.map((col, index) => (
        <Pixel
          key={index}
          colIndex={index}
          rowIndex={rowIndex}
          selected={selected}
        />
      ))}
    </>
  );
}

export default ColumnPixel;
