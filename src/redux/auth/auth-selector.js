export const getUserName = state => state.auth.user.email;
export const getMessage = state => state.auth.message;
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getIsRefresh = state => state.auth.isRefreshing;
export const getBalance = state => state.auth.user.balance;
