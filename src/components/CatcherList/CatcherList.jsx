import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

function CatcherList() {
    const [currentCatcher, setCurrentCatcher] = useState('Elston Howard');

    // const [catcherList, setCatcherList] = useState(['Roy Campanella', 'Elston Howard', 'Kenji Jojima']);

    const [newCatcher, setNewCatcher] = useState('');

    const dispatch = useDispatch()

    const pitcherList = useSelector((store) => store.catcherNames)
  
  
    const handleCatcherNameChange = event => {
      setNewCatcher(event.target.value);
    };
  
    // add new catcher to array. this will move to the catcher reducer!
    const handleCatcherSubmit = event => {
      event.preventDefault();

      dispatch({
        type: 'CREATE_CATCHER',
        payload: newCatcher
    })

      // spread: give me everything in catcherList, then add this new thing
    //   setCatcherList([...catcherList, newCatcher]);
      setNewCatcher('');
    };

    return (
        <div>
            <h3>All Catchers</h3>
            <form onSubmit={handleCatcherSubmit}>
                <input
                    type="text"
                    value={newCatcher}
                    onChange={handleCatcherNameChange}
                    placeholder="New Catcher Name"
                />
                <button type="submit">Add Catcher</button>
            </form>
            <ul>
                {catcherList.map(catcher => (
                    <li
                        onClick={() => setCurrentCatcher(catcher)}
                    >
                        {catcher}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CatcherList;