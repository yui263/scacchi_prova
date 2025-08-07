import { Chess } from "chess.js";

const game = new Chess();
const moveList = ["e4", "c5"];

for (let move of moveList) {
  const result = game.move(move);
  if (!result) {
    console.log("Mossa non valida:", move);
    break;
  }
}

console.log("FEN finale:", game.fen()); 

/* useEffect(() => {
    const game = new Chess();
    const moveList = moves.split(" ");

    console.log("⏳ Mosse ricevute:", moveList);

    for (let i = 0; i < moveList.length; i++) {
      const result = game.move(moveList[i]);

      if (!result) {
        const errMsg = `❌ Errore alla mossa ${i + 1}: '${moveList[i]}' non è valida`;
        console.error(errMsg);
        setError(errMsg);
        setPosition("start");
        return;
      }
    }

    // Se tutto è andato bene, imposta la posizione corretta
    setPosition(game.fen());
    setError(null);
  }, [moves]); 

      */ 
     
  