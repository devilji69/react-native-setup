export const TAB_TITLE = 'TAB_TITLE';
export const  SHOW_LOADER = 'SHOW_LOADER';
export const  STATUS_BAR = 'STATUS_BAR';

/**
set initial value to props
*/
const INITIAL_STATE = {
  tabTitle: '',
  isLoading : false,
  statusBar :{}
};

const CommonReducer = (state = INITIAL_STATE, action) => {
  // console.log("action",action)
  switch (action.type) {
    case TAB_TITLE:
      return {...state, tabTitle: action.title};
    case SHOW_LOADER:
      return {...state, isLoading: action.status};
    case STATUS_BAR:
      return {...state, statusBar: action.statusBarData};

    default:
      return state;
  }
};

export default CommonReducer;
