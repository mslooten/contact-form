// Action types

export const GENERATE_CODES = "GENERATE_CODES";
export const REMOVE_CODES = "REMOVE_CODES";

// Action creators

export function generateCodes(amount) {
  return { type: GENERATE_CODES, amount };
}

export function removeCodes() {
  return { type: REMOVE_CODES };
}
