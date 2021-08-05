import { createTypes } from 'redux-action-creator'

export const types = createTypes(['SHOW', 'HIDE'], 'SPINNER')

export const showSpinner = (id = 'app') => ({
  type: types.SHOW,
  payload: id,
})

export const hideSpinner = (id = 'app') => ({
  type: types.HIDE,
  payload: id,
})
