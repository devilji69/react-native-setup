
export const  SHOW_LOADER = 'SHOW_LOADER';
export const TAB_TITLE = 'TAB_TITLE';;
export const  STATUS_BAR = 'STATUS_BAR';


export const changeStatusBar = (statusBarData) => {
  // console.log("statusBarData:",statusBarData)
  return {
    type: STATUS_BAR,
    statusBarData,
  };
};

export const changeLoaderStatus = (status) => {
  return {
    type: SHOW_LOADER,
    status,
  };
};

export const changeTabTitle = (title) => {
  // console.log("title:",title)
  return {
    type: TAB_TITLE,
    title,
  };
};

