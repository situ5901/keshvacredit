import axios from "axios";

const API_BASE_URL = "https://keshvacredit.com/api/v1/api";

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

