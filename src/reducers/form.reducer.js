import { UPDATE_FIELD } from "../actions/form.actions";

const initialState = {
  naam: "",
  email: ""
};

function form(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FIELD:
      return Object.assign({}, state, {
        [action.name]: action.value
      });
    default:
      return state;
  }
}

export default form;
