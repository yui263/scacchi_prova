import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ChessBoard from "../components/ChessBoard";
import { cleanPNGMoves } from "../utils/cleanPNGMoves";

function OpeningPage() {
  const { id } = useParams();
  const opening = useSelector((state) =>
    state.openings.list.find((o) => o.id === parseInt(id))
  );

  const [cleanedMoves, setCleanedMoves] = useState('');

  // CORREZIONE APPLICATA QUI
  useEffect(() => {
    // Aggiungiamo un controllo per assicurarci che "opening" esista prima di usarlo
    if (opening) {
      const rawMoves = opening.moves;
      const finalString = cleanPNGMoves(rawMoves);
      setCleanedMoves(finalString);
    }
    // Diciamo a React di rieseguire questo effetto ogni volta che "opening" cambia
  }, [cleanedMoves, opening]);

  if (!opening) {
    return <div>Apertura non trovata o in caricamento...</div>;
  }

  return (
    <div>
      <h1>{opening.name}</h1> {/* Mostriamo anche il nome dell'apertura! */}
      
      {cleanedMoves ? (
        <ChessBoard moves={cleanedMoves} />
      ) : (
        <p>Caricamento della scacchiera...</p>
      )}
    </div>
  );
}

export default OpeningPage;



