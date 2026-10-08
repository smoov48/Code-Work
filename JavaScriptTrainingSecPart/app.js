// =========================================================================
// 1. UNSERE DATEN (Ein Array, das 3 Objekte beinhaltet)
// =========================================================================
const cryptoCoins = [
    { name: "Bitcoin", ticker: "BTC", preis: 60000 },
    { name: "Ethereum", ticker: "ETH", preis: 3000 },
    { name: "Solana", ticker: "SOL", preis: 150 }
];

// Globaler Speicher für das gesamte Geld im Depot. Startet natürlich bei 0.
let depotGesamtwert = 0;


// =========================================================================
// 2. DOM-ZUGRIFF (Wir holen die HTML-Elemente in unser JavaScript)
// =========================================================================
const shopContainer = document.querySelector('#shop-container');
const anzahlInput = document.querySelector('#anzahl-input');
const gesamtAnzeige = document.querySelector('#gesamt-preis');


// =========================================================================
// 3. DYNAMISCHES RENDERN (Wir erstellen die Boxen per forEach-Schleife)
// =========================================================================
cryptoCoins.forEach((coin) => {
    // A) Wir erstellen ein neues, leeres <div> Element im Arbeitsspeicher
    const box = document.createElement('div');
    
    // Wir geben dem <div> die CSS-Klasse aus dem HTML-Code (.coin-box)
    box.classList.add('coin-box');
    
    // B, C & D) Wir befüllen das <div> mit einem Template String.
    // Wichtig: Wir kleben das Attribut 'data-price' direkt an den Kaufen-Button!
    box.innerHTML = `
        <h3>${coin.name} (${coin.ticker})</h3>
        <p>Preis: ${coin.preis} USD</p>
        <button data-price="${coin.preis}">Kaufen</button>
    `;
    
    // E) Wir hängen das fertig gebaute Kästchen in das #shop-container Element ein
    shopContainer.appendChild(box);
});


// =========================================================================
// 4. EVENT HANDLING & VALIDIERUNG (Was passiert beim Klick?)
// =========================================================================
// Event Delegation: Wir hängen NUR EINEN Listener an den gesamten Shop-Bereich
shopContainer.addEventListener('click', function(event) {
    
    // Überprüfung: Hat der User wirklich auf einen BUTTON geklickt?
    if (event.target.tagName === 'BUTTON') {
        
        // --- SCHRITT A: Anzahl aus dem Input-Feld holen ---
        // Da input.value IMMER ein Text (String) ist, wandeln wir ihn mit parseInt in eine Ganzzahl um.
        const menge = parseInt(anzahlInput.value);
        
        // --- SCHRITT B: VALIDIERUNG ---
        // Wir prüfen mit dem strikten Vergleich (===), ob die Eingabe fehlerhaft ist.
        // isNaN() prüft, ob das Feld leer war oder Text eingegeben wurde.
        if (isNaN(menge) || menge < 1) {
            alert("⚠️ Fehler: Bitte gib eine gültige Menge von mindestens 1 ein!");
            return; // 'return' bricht die gesamte Funktion SOFORT ab, damit nichts gerechnet wird!
        }
        
        // --- SCHRITT C: Preis aus dem HTML-Attribut auslesen ---
        // event.target ist der exakt geklickte Button. Wir holen uns sein 'data-price'-Attribut
        // und wandeln es mit parseFloat in eine Kommazahl um.
        const preis = parseFloat(event.target.getAttribute('data-price'));
        
        // --- SCHRITT D: BERECHNUNG ---
        // Wir multiplizieren den Preis des Coins mit der eingegebenen Menge
        const kaufWert = menge * preis;
        
        // Wir rechnen diesen Wert auf unseren globalen Gesamtspeicher oben drauf (+=)
        depotGesamtwert += kaufWert;
        
        // --- SCHRITT E: DOM-MANIPULATION ---
        // Wir aktualisieren den Text auf der Webseite mithilfe eines Template Strings
        gesamtAnzeige.innerText = `Gesamtwert: ${depotGesamtwert} USD`;
        
        console.log(`Erfolgreich gekauft! Menge: ${menge}, Einzelpreis: ${preis} USD, Gesamtwert erhöht um: ${kaufWert} USD.`);
    }
});
