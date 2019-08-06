// Action types

export const GENERATE_CODES = "GENERATE_CODES";

// Action creators

export function generateCodes(amount) {
  return { type: GENERATE_CODES, amount };
}
