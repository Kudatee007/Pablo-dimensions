// export const base_url = "http://localhost:5000/api/";
const getTokenFromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;

export const config = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
    }`,
    Accept: "application/json",
  },
};

export const base_url = "http://localhost:5000/api/";

// const getTokenFromLocalStorage = localStorage.getItem("user")
//   ? JSON.parse(localStorage.getItem("user"))
//   : null;

// export const config = {
//   headers: {
//     Authorization: getTokenFromLocalStorage?.token
//       ? `Bearer ${getTokenFromLocalStorage.token}`
//       : '',
//     Accept: "application/json",
//   },
// };

// const getTokenFromLocalStorage = localStorage.getItem("user")
//   ? JSON.parse(localStorage.getItem("user"))
//   : null;

// export const config = {
//   headers: {
//     Authorization: `Bearer ${
//       getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
//     }`,
//     Accept: "application/json",
//   },
// };
