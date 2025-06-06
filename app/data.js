const API_BASE_URL = "apiurl.com";

/**
 * @param {string} onbId
 * @returns {Promise<Object>}
 */
export const fetchOnboardingPage = async (onbId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/onboarding/${onbId}`);

    if (!response.ok) throw new Error("No onboarding found");
    return await response.json();
  } catch (error) {
    console.error("Error fetching onboarding details:", error);
    throw error;
  }
};