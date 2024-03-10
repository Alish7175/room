import { useMemo, useState } from 'react';
import { initialItems } from '../../utils/fakeArr';

interface DemoProps {};
const MemoizationPage = ({}: DemoProps) => {
    const [count, setCount] = useState(0);
    const [items] = useState(initialItems);

    // const selectedItem = items.find(item => item.isSelected);


    // memoization
    const selectedItem = useMemo(
        () => items.find((item) => item.isSelected),
        [items],
      );
    
      return (
        <div className='tutorial'>
          <h1>Count: {count}</h1>
          <h1>Selected Item: {selectedItem?.id}</h1>
          <button onClick={() => setCount(count + 1)}>
            Increment
          </button>
        </div>
      );
    }

export default MemoizationPage