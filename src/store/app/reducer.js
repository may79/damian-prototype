import { types } from './actions'

const initialState = {
  version: 'v1',
  spinner: false,
}

function reducer(appState = initialState, { type, payload }) {
  switch (type) {
    case types.CHANGE_VERSION:
      return {
        ...appState,
        version: payload,
      }
    case types.SHOW_SPINNER:
      return {
        ...appState,
        spinner: payload,
      }
    default:
      return appState
  }
}

export function getVersion(state) {
  return state.app.version;
}

export function getSpinner(state) {
  return state.app.spinner;
}

export default reducer;