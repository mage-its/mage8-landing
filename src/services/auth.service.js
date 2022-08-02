import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL + "v1/auth/";

class AuthService {
  login(email, password) {
    return axios.post(`${API_URL}login`, {
      email: email,
      password: password,
    });
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

  register(name, email, password, token) {
    return axios.post(`${API_URL}register`, {
      name,
      email,
      password,
      recaptchaResponse: token,
    });
  }

  verifyEmailByToken(token) {
    return axios.post(`${API_URL}verify-email/?token=${token}`);
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
