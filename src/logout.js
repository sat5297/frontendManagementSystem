
function Logout(){
    window.localStorage.clear();
    window.sessionStorage.clear();
    window.history.go('/');
}

export default Logout;