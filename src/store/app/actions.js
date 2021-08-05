import { createTypes } from 'redux-action-creator'

export const types = createTypes(['CHANGE_VERSION', 'SHOW_SPINNER'], 'app')

export const changeVersion = (version) => ({
  type: types.CHANGE_VERSION,
  payload: version,
})

export const showSpinner = (show) => ({
  type: types.SHOW_SPINNER,
  payload: show,
})
