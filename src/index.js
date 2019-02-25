import { useState } from 'react'

const useMultiState = (...intialStates) => {
  return intialStates.map(useState)
}

export default useMultiState
