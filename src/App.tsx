import React, { useState, useEffect, useRef } from 'react';
import getCardImageUrl from './components/GetCardUrl';
import './App.css';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  root: {
    background: 'green',
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    alignItems: 'center',
  },
  headerContainer: {
    position: 'relative',
    width: '100vw',
    height: '35vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 'calc(55px + 2vmin)',
    color: 'black',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  container: {
    width: '97vw',
    height: '60vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  card: {
    display: 'flex',
    fontSize: '2em',
    height: '29vh',
    width: 'auto',
    background: 'white',
    color: 'black',
    border: '1px solid black',
    borderRadius: '13px',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    boxShadow: '4px 4px 8px black',
    transition: 'transform 0.5s',
    transformStyle: 'preserve-3d',
  },
  flipped: {
    transform: 'rotateY(180deg)',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'fill'
  },
  hiddenDiv: {
    position: 'absolute',
    top: '0',
    right: '0',
    width: '50vw',
    height: '35vh',
  },
  passwordInput: {
    height: '30px',
    width: '200px',
    fontSize: '20px',
    textAlign: 'center'
  }
});

function App() {
  const [cards, setCards] = useState<number[]>([]);
  const [clickCount, setClickCount] = useState(0);
  const [cardValues, setCardValues] = useState<number[]>([0, 0, 0, 0, 0, 0]);
  const [password, setPassword] = useState('')
  const [auth, setAuth] = useState(false)
  const passwordRef = useRef<HTMLInputElement>(null);


  const passwordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const passwordSubmit = () => {
    // check entered password hash is the same as hashedPassword
    console.log(password)
    if (password === 'N13l02') {
      setAuth(true)
    } else {
      alert('Incorrect Password Entered, Try again')
      //clear what has been entered for password
      if (passwordRef.current) {
        passwordRef.current.value = ''
      }
    }}

  useEffect(() => {
    dealCards();
  }, []);

  const dealCards = () => {
    
    const newCards: number[] = [];

    while (newCards.length < 6) {
      const randomCard = Math.floor(Math.random() * 52 + 1);
      if (!newCards.includes(randomCard)) {
        newCards.push(randomCard);
      }
    }

    setCards(newCards); // Update the cards state variable
    setClickCount(0); // Reset the click count
    setCardValues([0, 0, 0, 0, 0, 0]); // Reset the card values
  };

  const clickHandler = () => {
    if (clickCount < 6) {
      const nextCardIndex = clickCount;
      const updatedCardValues = [...cardValues];
      updatedCardValues[nextCardIndex] = cards[nextCardIndex];
      setCardValues(updatedCardValues);
      setClickCount(clickCount + 1);
    } else {
      dealCards();
    }
  };

  const resetHandler = () => {
    dealCards();
  };

  const classes = useStyles();

  if (auth) {

    return (
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          {/* <div className={classes.header}>Higher Or Lower</div> */}
          <div className={classes.hiddenDiv} onClick={resetHandler} />
        </div>
        <div className={classes.container} onClick={clickHandler}>
          {cardValues.map((cardValue, index) => (
            <div key={index} className={classes.card}>
              {cardValue ? (
                <img
                  src={getCardImageUrl(cardValue)}
                  alt={`Card ${index + 1}`}
                  className={classes.cardImage}
                />
              ) : (
                <img className={classes.cardImage} src="./images/back.png" alt="back" />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  } else {

    return (
      <div className={classes.root}>
        <h2> Enter Password </h2>
        <input type='password' onChange={passwordInput} className={classes.passwordInput} ref={passwordRef}></input>
        <button type='button' onClick={passwordSubmit} className={classes.passwordInput}>Submit</button>
      </div>

    )
  }
}

export default App;
