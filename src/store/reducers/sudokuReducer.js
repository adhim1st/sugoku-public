const initialState = {
  board: [],
  validate: {},
  grade: {},
};

export default function sudokuReducer(state = initialState, action) {
  switch (action.type) {
    case "board/setBoard":
      return { ...state, board: action.payload };
    case "validate/setValidate":
      return { ...state, validate: action.payload };
    case "grade/setGrade":
      return { ...state, grade: action.payload };
    default:
      return state;
  }
}
