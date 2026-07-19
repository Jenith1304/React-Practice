import React, { useState } from 'react'
import { useCachedFetch } from './Practical35_CachedFetch';

const Practical35_CachedFetch2 = () => {
  const { data, error, isLoading, mutate, isValidating } = useCachedFetch(
    "https://jsonplaceholder.typicode.com/users/1", { revalidateOnFocus: true }
  );
  // console.log("2" + data)
  // console.log("2" + error)
  // console.log("2" + isLoading)
  if (isLoading) return <p>Loading2.....</p>
  if (error) return <p>SOmething went wrong 2</p>
  return <>
    <h1>In COmponent2</h1>
    {data?.name}
    {isValidating && <p>Validating2</p>}
    <button onClick={() => mutate(true)}>mutate2</button>
    <p>Compoent 2 end</p>
  </>
}

export default Practical35_CachedFetch2