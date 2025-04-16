import axios from "axios";
import Cookies from "js-cookie";

 const API_BASE_URL = "https://keshvacredit.com/api/v1/api";
// const API_BASE_URL = "http://localhost:5000/api/v1/api";
export const submitUserInfo = async (userData: object) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/userinfo`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error submitting user info:", error);
    throw error;
  }
};

export const sendOtp = async (phone: string) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/send-otp`,
      { phone },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error sending OTP:", error);
    throw error;
  }
};

export const verifyOtp = async (phone: string, otp: string) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/verify-otp`,
      { phone, otp },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = response.data;
    if (data?.token) {
      Cookies.set("user_token", data.token);
      Cookies.set("user_phone", phone);
      Cookies.set("isLoggedIn", "true");

      window.dispatchEvent(new Event("login-status-changed")); 
    }

    return data;
  } catch (error) {
    console.error("Error Verifying OTP:", error);
    throw error;
  }
};


export const crmramfin = async () => {
  try {
    const response = await axios.get(
      "https://keshvacredit.com/api/v1/Crm/get-all-leads",
    );
    console.log("API Response", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching CRM data:", error);
    throw error;
  }
};

export const eligiblyramfin = async (userData: object) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/ramfinwebAPI`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error submitting Application:", error);
    throw error;
  }
};
export const eligiblyzype = async (userData: object) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/zypeeligibly`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error submitting Application:", error);
    throw error;
  }
};


