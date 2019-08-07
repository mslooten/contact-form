import { GENERATE_CODES, REMOVE_CODES } from "../actions/codes.actions";

const initialState = {
  codes: []
};

function returnCodes(amount) {
  function getRandomNumber() {
    // Set up the available numbers in an array
    const numbers = [
      0,
      0,
      1,
      1,
      2,
      2,
      3,
      3,
      4,
      4,
      5,
      5,
      6,
      6,
      7,
      7,
      8,
      8,
      9,
      9
    ];

    const code = [];

    // Iterate to from 0 to 8 and remove a number from the array to build the code
    for (let i = 0; i < 9; i++) {
      code[i] = numbers.splice(
        Math.floor(Math.random() * numbers.length),
        1
      )[0];
    }

    // Check if it computes
    const result =
      code[0] * 9 +
      code[1] * 8 +
      code[2] * 7 +
      code[3] * 6 +
      code[4] * 5 +
      code[5] * 4 +
      code[6] * 3 +
      code[7] * 2 +
      code[8];

    // If it does, join the numbers in a return string
    if (result % 11 === 0) {
      return code.join("");
    }

    // If it doesn't, recursively call this function to do it again until we have a code
    return getRandomNumber();
  }

  // Initialize a Set (used to ensure we don't have doubles)
  const results = new Set();

  // Keep adding numbers to the Set until the desired length
  while (results.size < amount) {
    results.add(getRandomNumber());
  }

  // Return it as an array to be more flexible
  return Array.from(results);
}

// Reducer function
function codes(state = initialState, action) {
  switch (action.type) {
    case GENERATE_CODES:
      if (state.codes.length > 0) return state;
      return Object.assign({}, state, {
        codes: returnCodes(action.amount)
      });
    case REMOVE_CODES:
      return initialState;
    default:
      return state;
  }
}

export default codes;
