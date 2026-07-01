import React, { useSyncExternalStore } from 'react'

let score = 10
let emit = null;

const SyncExternalStore = () => {

    function handleIncrement() {
        score++
        emit()
    }
    return (
        <div>
            <Score />
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}
function subscribe(notify) {
    emit = notify
}
function getSnapShot() {
    return score
}

const Score = () => {
    const updatedScore = useSyncExternalStore(subscribe, getSnapShot)
    return (
        <div>Score is {updatedScore}</div>
    )
}

export default SyncExternalStore