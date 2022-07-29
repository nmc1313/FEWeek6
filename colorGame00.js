//alternate method to this block is to pass in props and use props.id in square
const Square = ({id}) => {
  const [color, setColor] = React.useState('pink');
  const palette = ["pink", 'blue', 'purple'];
  const getRandomColor = () => palette[Math.floor(Math.random()*3)];
  return (
    <button onClick={
      (e) => {
        setColor(getRandomColor());
        e.target.style.background = color;
    }}> {id} </button>
  )
}

const Board = () => {
  const [player, setPlayer] = React.useState(0);
  let status = `Player ${player}`;
  return (
    <div
      className="game-board"
      onClick={(e) => {
        setPlayer((player + 1) % 2);
        status = `Player ${player}`;
        //can control the component features with the on click event (or on change, etc.)
        //example: 
        //e.target.style.background = "red";
        function renderSquare(i) {
          return <Square id={i}> </Square>;
        }
      }}
    >
      <div className='grid-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        </div>
      <div id="info">
        <h1>{status}</h1>
      </div>
    </div>
  );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
