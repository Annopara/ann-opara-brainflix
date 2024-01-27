const API_BASE_URL = "https://project-2-api.herokuapp.com";

export const getVideoList = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/videos`);
    return response.data;
  } catch (error) {
    console.error("Error fetching video list:", error);
    throw error;
  }
};

export const getVideoDetails = async (videoId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/videos/${videoId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching video details for ${videoId}:`, error);
    throw error;
  }
};
