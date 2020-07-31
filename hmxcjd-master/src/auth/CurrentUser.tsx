function logIn(userid, username, accesstoken) {
    sessionStorage.setItem('userid', userid);
    sessionStorage.setItem('username', username);
    sessionStorage.setItem(`accesstoken`, accesstoken);
}

function logOut() {
    sessionStorage.removeItem('userid');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('access-token');
}

function isLoggedIn() {
    return !!sessionStorage.getItem(`accesstoken`);
}

function getUserName() {
    return sessionStorage.getItem(`username`);
}

function getUserId() {
    return sessionStorage.getItem(`userid`);
}

function getAccessToken() {
    return sessionStorage.getItem(`accesstoken`);
}

export default {
    logIn,
    logOut,
    isLoggedIn,
    getUserName,
    getUserId,
    getAccessToken,
};
