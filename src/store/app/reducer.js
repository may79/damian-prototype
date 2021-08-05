import { types } from './actions'

const initialState = {
  spinners: {},
}

export default (appState = initialState, { type, payload }) => {
  switch (type) {
    case types.SHOW:
      return {
        ...appState,
        spinners: {
          ...appState.spinners,
          [payload]: true,
        },
      }
    case types.HIDE:
      return {
        ...appState,
        spinners: {
          ...appState.spinners,
          [payload]: false,
        },
      }
    default:
      return appState
  }
}

export function getSpinner(state, id = 'app') {
  return state.app.spinners[id] || false;
}
