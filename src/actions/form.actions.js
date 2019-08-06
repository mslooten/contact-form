// Action types

export const UPDATE_FIELD = "UPDATE_FIELD";
export const RESET_FIELDS = "RESET_FIELDS";

// Action creators

export function updateField(value, name) {
  return { type: UPDATE_FIELD, value, name };
}

export function resetFields() {
  return { type: RESET_FIELDS };
}
