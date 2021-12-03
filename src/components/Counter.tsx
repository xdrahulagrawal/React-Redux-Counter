import { useSelector, useDispatch } from 'react-redux'
import { decrementNumber, incrementNumber } from '../services/actions/counter'

const Counter = () => {
    const count = useSelector((state: any) => state.counterNumber)
    const dispatch = useDispatch()
    return (
        <>
            <div className='container mt3'>
                <h2>{count}</h2>
            </div>
            <div className='container'>
                <button onClick={() => dispatch(incrementNumber(2))}>ADD</button>
                <button onClick={() => dispatch(decrementNumber())}>Sub</button>
            </div>



        </>
    )
}

export default Counter
