class AppActions {
    Constants = {
        OpenSidebar: 'app/sidebar/open',
        CloseSidebar: 'app/sidebar/close',
        ShowLoader: 'app/loader/show',
        HideLoader: 'app/loader/hide',
        ResetStore: 'app/store/reset',
        UpdateAppOnlineStatus: 'app/online/status/update'
    };

    // constants here (Action Constants are always PascalCase)

    openSideBar = () => ({
        type: this.Constants.OpenSidebar
    })
    updateOnlineStatus = (isOnline: boolean) => {
        return (dispatch, getState) => {
            if (getState().App.IsOnline !== isOnline) {
                dispatch({
                    type: this.Constants.UpdateAppOnlineStatus,
                    payload: isOnline
                });
            }
        };
    }

    closeSideBar = () => {
        return (dispatch, getState) => {
            if (getState().App.IsSideBarOpen) {
                dispatch({
                    type: this.Constants.CloseSidebar
                });
            }
        };
    }
    showLoader = () => ({
        type: this.Constants.ShowLoader
    })
    hideLoader = () => ({
        type: this.Constants.HideLoader
    })
    resetStore = () => ({
        type: this.Constants.ResetStore
    })
}

export let app_actions = new AppActions();
