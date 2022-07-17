import axios from "axios";

const API_URL = "https://mage8-backend-dev-pgqllxt4ka-as.a.run.app/v1/auth/";

class AuthService {
  async login(user) {
    const response = await axios.post(`${API_URL}login`, {
      email: user.email,
      password: user.password,
    });
    return response.data;
  }

  googleLogin(idToken) {
    return axios.post(`${API_URL}google-login`, {
      idToken: idToken,
    });
  }

  async logout() {
    const user = JSON.parse(localStorage.getItem("user"));
    localStorage.removeItem("user");
    if (!user) return;
    const refreshToken = user.tokens.refresh.token;
    await axios.post(`${API_URL}logout`, {
      refreshToken,
    });
  }

  async register(user) {
    const response = await axios.post(`${API_URL}register`, user);
    if (response.data.tokens) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  }

  verifyEmailByToken(token) {
    return axios.put(`${API_URL}verify-email/?token=${token}`);
  }

  requestChangePassword(email) {
    return axios.post(`${API_URL}forgot-password`, { email });
  }

  resetPassword({ password, token }) {
    return axios.post(`${API_URL}reset-password/?token=${token}`, { password });
  }

  requestVerificationEmail() {
    return axios.post(`${API_URL}send-verification-email`);
  }

  async refreshToken() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;
    const refreshToken = user.tokens.refresh.token;
    const response = await axios.post(`${API_URL}refresh-tokens`, {
      refreshToken,
    });
    if (response.data) {
      const newUser = {
        ...user,
        tokens: {
          ...response.data,
        },
      };
      localStorage.setItem("user", JSON.stringify(newUser));
    }
    return response.data;
  }
}

export default new AuthService();
