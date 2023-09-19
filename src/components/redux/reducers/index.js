// const iState = {
//   favorites: {
//     content: [],
//   },
// };

// const mainReducer = (state = iState, action) => {
//   switch (action.type) {
//     case "ADD_TO_FAVORITE":
//       return {
//         ...state,
//         favorites: {
//           ...state.favorites,
//           content: [...state.favorites.content, action.payload],
//         },
//       };

//     case "REMOVE_TO_FAVORITE":
//       return {
//         ...state,

//         favorites: {
//           ...state.favorites,
//           content: state.favorites.content.filter((_, i) => i !== action.payload),
//         },
//       };
//     default:
//       return state;
//   }
// };
// export default mainReducer;
