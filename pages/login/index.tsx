import React, { useEffect, useState } from 'react'


const index = () => {
const [test, setTest] = useState(0);
  return (
    <div>
        <p>Click the button!</p>
        <button onClick={e =>setTest(test + 1)}>
            {test}
        </button>

        <button onClick = {e => setTest(0)}>
            reset the button!
        </button>

    </div>
  )
}

export default index;