import React from 'react'

const DealCards = () => {

    // const [card1value, setCard1Value] = React.useState(0)
    // const [card2value, setCard2Value] = React.useState(0)
    // const [card3value, setCard3Value] = React.useState(0)
    // const [card4value, setCard4Value] = React.useState(0)
    // const [card5value, setCard5Value] = React.useState(0)
    // const [card6value, setCard6Value] = React.useState(0)
  
  
    const cards = []
  
    for (let i = 0; i <= 5; i++) {
      const randomCard = Math.floor(Math.random() * (52 - 1 + 1) + 1)
      cards.push(randomCard)
    }
  }

  export default DealCards