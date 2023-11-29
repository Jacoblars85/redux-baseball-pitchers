import { useState } from 'react';

function CatcherList() {
    const [currentCatcher, setCurrentCatcher] = useState('Elston Howard');

    const [catcherList, setCatcherList] = useState(['Roy Campanella', 'Elston Howard', 'Kenji Jojima']);
    
    const [newCatcher, setNewCatcher] = useState('');
  
  
    const handleCatcherNameChange = event => {
      setNewCatcher(event.target.value);
    };
  
    // add new catcher to array. this will move to the catcher reducer!
    const handleCatcherSubmit = event => {
      event.preventDefault();
      // spread: give me everything in catcherList, then add this new thing
      setCatcherList([...catcherList, newCatcher]);
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