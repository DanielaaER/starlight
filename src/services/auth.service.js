const logout = () => {
    localStorage.removeItem("token");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("token"));
};

const authService = {
    logout,
    getCurrentUser,
};

export default authService;