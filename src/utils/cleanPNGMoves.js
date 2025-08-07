function cleanPNGMoves(pgnString) {
  // Controlla se l'input è una stringa valida prima di procedere
  if (typeof pgnString !== 'string') {
    return ''; // Ritorna una stringa vuota se l'input non è corretto
  }

  return pgnString
    .replace(/\d+\./g, "")        // Rimuove i numeri dei turni come "1.", "2.", ecc.
    .replace(/[!?+#=]+/g, "")     // Rimuove i simboli di annotazione degli scacchi come "!", "?", "+", "#"
    .replace(/\s+/g, " ")         // Sostituisce spazi multipli, tabulazioni o nuove righe con un singolo spazio
    .trim();                      // Rimuove eventuali spazi bianchi all'inizio o alla fine della stringa
}

export { cleanPNGMoves }; 


 
  