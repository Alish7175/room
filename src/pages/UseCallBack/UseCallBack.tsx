import { useCallback, useState } from 'react';

import Search from '../../components/Search/Search';

const allUsers = [
  'john',
  'alex',
  'george',
  'simon',
  'james',
];

function shuffle<T>(array: T[]): T[] {
    const shuffledArray = array.slice(); // Make a copy of the original array

    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Generate random index
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
    }

    return shuffledArray;
}

interface DemoProps {}

const UseCallBack = ({}: DemoProps) => {
    const [users, setUsers] = useState(allUsers);

    const handleSearch = useCallback(
      (text: string) => {
        console.log(users[0]);
  
        const filteredUsers = allUsers.filter((user) =>
          user.includes(text),
        );
        setUsers(filteredUsers);
      },
      [],
    );

    // const handleSearch =
    //   (text: string) => {
    //     console.log(users[0]);
  
    //     const filteredUsers = allUsers.filter((user) =>
    //       user.includes(text),
    //     );
    //     setUsers(filteredUsers);
    //   }
  
    return (
      <div className='tutorial'>
        <div className='align-center mb-2 flex'>
          <button onClick={() => setUsers(shuffle(allUsers))}>
            Shuffle
          </button>
  
          <Search onChange={handleSearch} />
        </div>
        <ul>
          {users.map((user) => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      </div>
    );
}

export default UseCallBack