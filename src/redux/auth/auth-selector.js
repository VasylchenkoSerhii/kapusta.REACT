export const getUserName = state => state.auth.user.email;
export const getMessage = state => state.auth.message;
export const getToken = state => state.auth.token;
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getBalance = state => state.auth.user.balance;
export const getIsLoading = state => state.auth.isLoading;
export const getIsRefresh = state => state.auth.isRefreshing;
export const getIsLoginApiDone = state => state.auth.isLoginApiDone;
