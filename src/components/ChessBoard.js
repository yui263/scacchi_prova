import React, { useEffect, useRef, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

const ChessBoard = ({ moves }) => {
  const [currentPosition, setCurrentPosition] = useState("start");
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Usiamo un solo riferimento per l'istanza di chess.js
  const gameRef = useRef(new Chess());
  const timeoutRef = useRef(null);

  // Funzione per gestire i movimenti manuali dei pezzi
  const onPieceDrop = (sourceSquare, targetSquare) => {
    // Crea una copia "fresca" dello stato del gioco per evitare bug
    const game = new Chess(currentPosition); 
    
    try {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: "q", // Gestisce la promozione (sempre a regina in questo caso)
      });
      
      // Se la mossa non è valida, chess.js lancia un errore o ritorna null
      if (move === null) {
        return false; // Comunica a react-chessboard che la mossa è illegale
      }

      // Aggiorna lo stato con la nuova posizione FEN
      setCurrentPosition(game.fen());
      gameRef.current = game; // Aggiorna il riferimento principale del gioco
      
      return true; // Comunica che la mossa è andata a buon fine
    } catch (error) {
      console.warn("Mossa non valida:", error);
      return false;
    }
  };

  const playOpening = () => {
    console.log("🔁 Inizio animazione apertura");
    const moveList = moves.split(" ").filter(Boolean);
    const game = new Chess();
    gameRef.current = game;
    let i = 0;

    setCurrentPosition("start");
    setIsPlaying(true);

    const playNext = () => {
      if (i >= moveList.length) {
        setIsPlaying(false);
        console.log("✅ Animazione terminata");
        return;
      }
      
      const moveResult = game.move(moveList[i]);
      if (moveResult) {
        setCurrentPosition(game.fen());
        i++;
        timeoutRef.current = setTimeout(playNext, 800);
      } else {
        console.error("❌ Mossa non valida nella sequenza:", moveList[i]);
        setIsPlaying(false);
      }
    };

    timeoutRef.current = setTimeout(playNext, 500);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <Chessboard
        boardWidth={40}
        animationDuration={300}
        arePiecesDraggable={true} // Ora puoi impostarlo a true
        position={currentPosition}
        onPieceDrop={onPieceDrop} // <-- LA PARTE FONDAMENTALE MANCANTE
      />
      <button
        onClick={playOpening}
        // Aggiungi "!moves" alla condizione
        disabled={isPlaying || !moves} 
        style={{
          // ...
          // Aggiorna anche lo stile per il cursore e l'opacità
          cursor: isPlaying || !moves ? "not-allowed" : "pointer",
          opacity: isPlaying || !moves ? 0.6 : 1,
        }}
      >
        ▶️ Ripeti Apertura
      </button>
    </div>
  );
};

export default ChessBoard;



