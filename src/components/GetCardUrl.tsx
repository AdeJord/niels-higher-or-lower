import AceOfSpades from './images/ace_of_spades.png';
import TwoOfSpades from './images/two_of_spades.png';
import ThreeOfSpades from './images/three_of_spades.png';
import FourOfSpades from './images/four_of_spades.png';
import FiveOfSpades from './images/five_of_spades.png';
import SixOfSpades from './images/six_of_spades.png';
import SevenOfSpades from './images/seven_of_spades.png';
import EightOfSpades from './images/eight_of_spades.png';
import NineOfSpades from './images/nine_of_spades.png';
import TenOfSpades from './images/ten_of_spades.png';
import JackOfSpades from './images/jack_of_spades.png';
import QueenOfSpades from './images/queen_of_spades.png';
import KingOfSpades from './images/king_of_spades.png';
import AceOfHearts from './images/ace_of_hearts.png';
import TwoOfHearts from './images/two_of_hearts.png';
import ThreeOfHearts from './images/three_of_hearts.png';
import FourOfHearts from './images/four_of_hearts.png';
import FiveOfHearts from './images/five_of_hearts.png';
import SixOfHearts from './images/six_of_hearts.png';
import SevenOfHearts from './images/seven_of_hearts.png';
import EightOfHearts from './images/eight_of_hearts.png';
import NineOfHearts from './images/nine_of_hearts.png';
import TenOfHearts from './images/ten_of_hearts.png';
import JackOfHearts from './images/jack_of_hearts.png';
import QueenOfHearts from './images/queen_of_hearts.png';
import KingOfHearts from './images/king_of_hearts.png';
import AceOfDiamonds from './images/ace_of_diamonds.png';
import TwoOfDiamonds from './images/two_of_diamonds.png';
import ThreeOfDiamonds from './images/three_of_diamonds.png';
import FourOfDiamonds from './images/four_of_diamonds.png';
import FiveOfDiamonds from './images/five_of_diamonds.png';
import SixOfDiamonds from './images/six_of_diamonds.png';
import SevenOfDiamonds from './images/seven_of_diamonds.png';
import EightOfDiamonds from './images/eight_of_diamonds.png';
import NineOfDiamonds from './images/nine_of_diamonds.png';
import TenOfDiamonds from './images/ten_of_diamonds.png';
import JackOfDiamonds from './images/jack_of_diamonds.png';
import QueenOfDiamonds from './images/queen_of_diamonds.png';
import KingOfDiamonds from './images/king_of_diamonds.png';
import AceOfClubs from './images/ace_of_clubs.png';
import TwoOfClubs from './images/two_of_clubs.png';
import ThreeOfClubs from './images/three_of_clubs.png';
import FourOfClubs from './images/four_of_clubs.png';
import FiveOfClubs from './images/five_of_clubs.png';
import SixOfClubs from './images/six_of_clubs.png';
import SevenOfClubs from './images/seven_of_clubs.png';
import EightOfClubs from './images/eight_of_clubs.png';
import NineOfClubs from './images/nine_of_clubs.png';
import TenOfClubs from './images/ten_of_clubs.png';
import JackOfClubs from './images/jack_of_clubs.png';
import QueenOfClubs from './images/queen_of_clubs.png';
import KingOfClubs from './images/king_of_clubs.png';

const getCardImageUrl = (cardId: number): string => {
  switch (cardId) {
    case 1:
      return AceOfSpades;
    case 2:
      return TwoOfSpades;
    case 3:
      return ThreeOfSpades;
    case 4:
      return FourOfSpades;
    case 5:
      return FiveOfSpades;
    case 6:
      return SixOfSpades;
    case 7:
      return SevenOfSpades;
    case 8:
      return EightOfSpades;
    case 9:
      return NineOfSpades;
    case 10:
      return TenOfSpades;
    case 11:
      return JackOfSpades;
    case 12:
      return QueenOfSpades;
    case 13:
      return KingOfSpades;
    case 14:
      return AceOfHearts;
    case 15:
      return TwoOfHearts;
    case 16:
      return ThreeOfHearts;
    case 17:
      return FourOfHearts;
    case 18:
      return FiveOfHearts;
    case 19:
      return SixOfHearts;
    case 20:
      return SevenOfHearts;
    case 21:
      return EightOfHearts;
    case 22:
      return NineOfHearts;
    case 23:
      return TenOfHearts;
    case 24:
      return JackOfHearts;
    case 25:
      return QueenOfHearts;
    case 26:
      return KingOfHearts;
    case 27:
      return AceOfDiamonds;
    case 28:
      return TwoOfDiamonds;
    case 29:
      return ThreeOfDiamonds;
    case 30:
      return FourOfDiamonds;
    case 31:
      return FiveOfDiamonds;
    case 32:
      return SixOfDiamonds;
    case 33:
      return SevenOfDiamonds;
    case 34:
      return EightOfDiamonds;
    case 35:
      return NineOfDiamonds;
    case 36:
      return TenOfDiamonds;
    case 37:
      return JackOfDiamonds;
    case 38:
      return QueenOfDiamonds;
    case 39:
      return KingOfDiamonds;
    case 40:
      return AceOfClubs;
    case 41:
      return TwoOfClubs;
    case 42:
      return ThreeOfClubs;
    case 43:
      return FourOfClubs;
    case 44:
      return FiveOfClubs;
    case 45:
      return SixOfClubs;
    case 46:
      return SevenOfClubs;
    case 47:
      return EightOfClubs;
    case 48:
      return NineOfClubs;
    case 49:
      return TenOfClubs;
    case 50:
      return JackOfClubs;
    case 51:
      return QueenOfClubs;
    case 52:
      return KingOfClubs;
    default:
      return ''; // Return an empty string for unknown card IDs
  }
};

export default getCardImageUrl;
