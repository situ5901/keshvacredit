import axios from "axios";

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

export const verifyOtp = async (phone: String, otp: "String") => {
  try {
    const response = await axios.post(
      ` ${API_BASE_URL}/verify-otp`,
      { phone, otp },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error Verifying OTP:", error);
  }
};
