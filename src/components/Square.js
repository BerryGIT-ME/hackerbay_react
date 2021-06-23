const Square = ({ row, column }) => {
  return (
    <>
      <button className="square">
        {row}
        {column}
      </button>
    </>
  );
};

export default Square;
