import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

function PitcherList() {
    const [currentPitcher, setCurrentPitcher] = useState('Maud Nelson');

    // const [pitcherList, setPitcherList] = useState(['Maud Nelson', 'Ila Borders', 'Don Newcombe', 'CC Sabathia']);

    const [newPitcher, setNewPitcher] = useState('');

    const dispatch = useDispatch()

    const pitcherList = useSelector((store) => store.pitcherNames)

    // const handlePitcherNameChange = event => {
    //     setNewPitcher(event.target.value);
    // };

    // add new pitcher to the array. this will move to the pitcher reducer!
    const handlePitcherSubmit = event => {
        event.preventDefault();

        dispatch({
            type: 'CREATE_PITCHER',
            payload: newPitcher
        })

        // spread: give me everything in pitcherList, then add this new thing
        // setPitcherList([...pitcherList, newPitcher]);
        setNewPitcher('');
    };

    return (
        <div>
            <h3>All Pitchers</h3>
            <form onSubmit={handlePitcherSubmit}>
                <input
                    type="text"
                    value={newPitcher}
                    onChange={(e) => setNewPitcher(e.target.value)}
                    placeholder="New Pitcher Name"
                />
                <button type="submit">Add Pitcher</button>
            </form>
            <ul>
                {pitcherList.map(pitcher => (
                    <li
                        onClick={() => setCurrentPitcher(pitcher)}
                    >
                        {pitcher}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PitcherList;