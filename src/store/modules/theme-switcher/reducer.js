/* eslint-disable consistent-return */
/* eslint-disable default-param-last */
import * as types from '../types';

const initialState = {
  theme: 'light',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SWITCH_THEME: {
      if (state.theme === 'light') {
        return { ...state, theme: 'dark' };
      }

      return { ...state, theme: 'light' };
    }
    default: {
      return state;
    }
  }
};
