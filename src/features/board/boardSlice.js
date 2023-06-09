const initialState = [
  { id: 0, contents: "Amsterdam", visible: true, matched: false },
  { id: 1, contents: "Amsterdam", visible: true, matched: false },
  { id: 2, contents: "Paris", visible: true, matched: false },
  { id: 3, contents: "Paris", visible: true, matched: false },
  { id: 4, contents: "New York", visible: true, matched: false },
  { id: 5, contents: "New York", visible: true, matched: false },
  { id: 6, contents: "London", visible: true, matched: false },
  { id: 7, contents: "London", visible: true, matched: false },
  { id: 8, contents: "Berlin", visible: true, matched: false },
  { id: 9, contents: "Berlin", visible: true, matched: false },
  { id: 10, contents: "Tokio", visible: true, matched: false },
  { id: 11, contents: "Tokio", visible: true, matched: false },
];

const wonState = false;

export const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "board/setBoard":
      let setState = [];
      action.payload.forEach((element, index) =>
        setState.push({
          id: index,
          contents: element,
          visible: false,
          matched: false,
        })
      );
      return setState;
    case "board/flipCard":
      let flipState = [...state];
      const cardID = action.payload;
      flipState[cardID] = { ...state[cardID], visible: true };

      const [index1, index2] = flipState
        .filter((card) => card.visible)
        .map((card) => card.id);
      if (index2 !== undefined) {
        const card1 = flipState[index1];
        const card2 = flipState[index2];
        if (card1.contents === card2.contents) {
          flipState[index1] = { ...card1, visible: true, matched: true };
          flipState[index2] = { ...card2, visible: true, matched: true };
        }
      }
      return flipState;

    case "board/resetCards":
      return state.map((card) => ({ ...card, visible: false }));

    default:
      return state;
  }
};

export const wonReducer = (state = wonState, action) => {
  switch (action.type) {
    case "game/showBoard":
      return;
  }
};

const wordPairs = [
  "Amsterdam",
  "Amsterdam",
  "Paris",
  "Paris",
  "New York",
  "New York",
  "London",
  "London",
  "Berlin",
  "Berlin",
  "Tokio",
  "Tokio",
];

const randomWords = () => {
  let words = [];
  let newWordPairs = [...wordPairs];
  const reps = newWordPairs.length;
  for (let i = 0; i < reps; i++) {
    const wordIndex = Math.floor(Math.random() * newWordPairs.length);
    words.push(newWordPairs[wordIndex]);
    newWordPairs.splice(wordIndex, 1);
  }
  return words;
};

// action creators
export const setBoard = () => {
  const words = randomWords();
  return {
    type: "board/setBoard",
    payload: words,
  };
};

export const flipCard = (id) => {
  return {
    type: "board/flipCard",
    payload: id,
  };
};

export const resetCards = () => {
  return {
    type: "board/resetCards",
  };
};

//selectors

export const selectBoard = (state) => {
  return state.board.map((card) => ({
    id: card.id,
    contents: card.contents,
  }));
};

export const selectVisibleIds = (state) => {
  return state.board.filter((card) => card.visible).map((card) => card.id);
};

//returns array of matched cards
export const selectMatchId = (state) => {
  return state.board.filter((card) => card.matched).map((card) => card.id);
};

export const showMatchId = (state) => {
  return state.board
    .filter((card) => card.matched)
    .map((card) => ({ ...card, visible: true }));
};

export const wonChecked = (state) => {
  if (state.board.some((element) => element.matched == false)) {
    return false;
  } else {
    return true;
  }
};
