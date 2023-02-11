function random(arr) {
    const idx = Math.floor(Math.random() * arr.length)
    return arr[idx]
}

function getCard() {
    const cardValue = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    const cardSuit = ['Clubs', 'Spades', 'Hearts', 'Diamonds']

    return { value: random(cardValue), suit: random(cardSuit) }
}