import { INCREMENT, DECREMENT } from '../constant'
const initialState = 0

export const counterNumber = (state = initialState, action: any) => {
    switch (action.type) {
        case INCREMENT:
            return state + action.payload
        case DECREMENT:
            return state - 1
        default: return state
    }
}
