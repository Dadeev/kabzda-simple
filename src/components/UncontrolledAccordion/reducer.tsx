import React from "react";

type ActionType = {
    type: string
}

export type StateType = {
    collapsed: boolean
}
export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED';
export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED :
            return {
                ...state,
                collapsed: !state.collapsed
            }
        default :
            throw new Error('Bac action type')
    }
    return state;
}
