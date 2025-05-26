// Мок запроса к /info
export const fetchPublicInfo = () => {
  return Promise.resolve({
    success: true,
    data: { info: "Some information about the <b>company</b>." },
  });
};

// Мок аутентификации
export const fakeAuth = {
  isAuthenticated: false,
  login(callback) {
    this.isAuthenticated = true;
    setTimeout(callback, 300); // Имитация задержки сети
  },
  logout(callback) {
    this.isAuthenticated = false;
    setTimeout(callback, 300);
  },
};
