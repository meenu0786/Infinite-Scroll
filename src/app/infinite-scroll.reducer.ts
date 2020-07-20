
import { ActionsUnion, ActionTypes } from './infinite-scroll.actions';

export const initialState: any = {
  transactions: []
};

export function InfiniteScrollReducer(state = initialState, action: ActionsUnion) {
  switch (action.type) {
    case ActionTypes.LoadSuccess:
      return {
        ...state,
        transactions: [...state.transactions, ...action.payload]
      };
    default:
      return state;
  }
}
