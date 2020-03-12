import * as fromData from "../actions/data.actions";

export interface DataState {
  users: [],
  loading: boolean;
  error: any;
}

export const initialState: DataState = {
  loading: false,
  error: null,
  users: []
};

export function reducer(
  state = initialState,
  action: fromData.ActionsUnion
): DataState {
//  console.log('state', state) // undefined or null -> +
  switch (action.type) {
    case fromData.ActionTypes.LoadDataBegin: {
      return {
        ...state,
        loading: true,
        error: null
      };
    }

    case fromData.ActionTypes.LoadDataSuccess: {
      return {
        ...state,
        loading: false,
//         firstName,lastName,employeeID,role : action.payload.data;
        users: action.payload.data

      };
    }

    case fromData.ActionTypes.LoadDataFailure: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    }

    default: {
      return state;
    }
  }
}

export const getAllUsers = (state: DataState) => state.users;
