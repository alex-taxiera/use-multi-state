# use-multi-state
A React Hook to simplify complex states.

## What is this?
This is essentially just a wrapper around `useState` to shorten the amount of typing you would need to use it multiple times.

## How does it work?
Here is a simple example:
```jsx
import React from 'react'
import useMultiState from 'use-multi-state'

const example = () => {
  [
    [isFetching, setIsFetching],
    [data, setData],
    [error, setError]
  ] = useMultiState(false, null, null) // use initial state: isFetching: false, data: null, error: null

  return (
    <div>
      {isFetching ? (
        <div>Loading...</div>
      ) : error ? (
        <div>error.message</div>
      ) : data ? (
        <div>{data}</div>
      ) : null}
    </div>
  )
}
```
