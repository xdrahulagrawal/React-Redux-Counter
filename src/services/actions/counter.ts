import { INCREMENT, DECREMENT } from '../constant'

export const incrementNumber = (num: any) => {
    return {
        type: INCREMENT,
        payload: num
    }
}

export const decrementNumber = () => {
    return {
        type: DECREMENT,
    }
}
