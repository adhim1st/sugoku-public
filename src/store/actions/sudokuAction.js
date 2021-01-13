import axios from "axios";

export const fetchBoard = (diff) => {
  return (dispatch, getState) => {
    axios({
      url: `https://sugoku.herokuapp.com/board?difficulty=${diff}`,
      method: "GET",
    })
      .then((res) => {
        console.log(res.data.board);
        dispatch({
          type: "board/setBoard",
          payload: res.data.board,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const solveSugoku = (payload) => {
  return (dispatch, getState) => {
    const encodeBoard = (board) =>
      board.reduce(
        (result, row, i) =>
          result +
          `%5B${encodeURIComponent(row)}%5D${
            i === board.length - 1 ? "" : "%2C"
          }`,
        ""
      );
    const encodeParams = (params) =>
      Object.keys(params)
        .map((key) => key + "=" + `%5B${encodeBoard(params[key])}%5D`)
        .join("&");
    axios({
      url: `https://sugoku.herokuapp.com/solve`,
      method: "POST",
      data: encodeParams({ board: payload }),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((res) => {
        console.log(res.data.solution);
        dispatch({
          type: "board/setBoard",
          payload: res.data.solution,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const validateSugoku = (payload) => {
  return (dispatch, getState) => {
    const encodeBoard = (board) =>
      board.reduce(
        (result, row, i) =>
          result +
          `%5B${encodeURIComponent(row)}%5D${
            i === board.length - 1 ? "" : "%2C"
          }`,
        ""
      );
    const encodeParams = (params) =>
      Object.keys(params)
        .map((key) => key + "=" + `%5B${encodeBoard(params[key])}%5D`)
        .join("&");
    axios({
      url: `https://sugoku.herokuapp.com/validate`,
      method: "POST",
      data: encodeParams({ board: payload }),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((res) => {
        console.log(res.data.status);
        dispatch({
          type: "validate/setValidate",
          payload: res.data.status,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const gradeSugoku = (payload) => {
  return (dispatch, getState) => {
    const encodeBoard = (board) =>
      board.reduce(
        (result, row, i) =>
          result +
          `%5B${encodeURIComponent(row)}%5D${
            i === board.length - 1 ? "" : "%2C"
          }`,
        ""
      );
    const encodeParams = (params) =>
      Object.keys(params)
        .map((key) => key + "=" + `%5B${encodeBoard(params[key])}%5D`)
        .join("&");
    axios({
      url: `https://sugoku.herokuapp.com/grade`,
      method: "POST",
      data: encodeParams({ board: payload }),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((res) => {
        console.log(res.data.difficulty);
        dispatch({
          type: "grade/setGrade",
          payload: res.data.difficulty,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const resetValidate = () => {
  return {
    type: "validate/setValidate",
    payload: "unsolved",
  };
};
