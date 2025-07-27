// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_URL || "https://toptop-app.herokuapp.com";

// API Endpoints
export const API_ENDPOINTS = {
  // Items
  ITEMS: `${API_BASE_URL}/items`,
  ITEMS_MAIN_PAGES: `${API_BASE_URL}/items/main/pages/cat`,
  ITEMS_NEWEST_PAGES: `${API_BASE_URL}/items/newest/pages/cat`,
  ITEMS_SHOW_PAGES: `${API_BASE_URL}/items/show/pages/cat`,
  ITEMS_ASK_PAGES: `${API_BASE_URL}/items/ask/pages/cat`,
  
  // Comments
  COMMENTS: `${API_BASE_URL}/comments`,
  COMMENTS_FIND_BY_IDS: `${API_BASE_URL}/comments/comments/findbyIds`,
  COMMENTS_NEWEST_PAGES: `${API_BASE_URL}/comments/comments/newest/pages/cat`,
  
  // Replies
  REPLIES: `${API_BASE_URL}/replies`,
  REPLIES_FIND_BY_IDS: `${API_BASE_URL}/replies/replies/findbyIds`,
  
  // Jobs
  JOBS: `${API_BASE_URL}/jobs`,
  JOBS_NEWEST_PAGES: `${API_BASE_URL}/jobs/jobs/newest/pages/cat`,
  
  // Users
  USERS: `${API_BASE_URL}/users`,
  USERS_FIND_PROTECTED: (username: string) => `${API_BASE_URL}/users/findProtected/${username}`,
  USERS_FIND_BY_PRIVY: (privyId: string) => `${API_BASE_URL}/users/find/privy/${privyId}`,
  
  // Voting
  ITEM_UPVOTE: (id: string) => `${API_BASE_URL}/items/upVote/${id}`,
  ITEM_DOWNVOTE: (id: string) => `${API_BASE_URL}/items/downVote/${id}`,
  ITEM_DELETE: (id: string) => `${API_BASE_URL}/items/${id}`,
  COMMENT_DELETE: (id: string) => `${API_BASE_URL}/comments/${id}`,
};

// Helper function to get user-specific URLs
export const getUserUrl = (username: string) => API_ENDPOINTS.USERS_FIND_PROTECTED(username);
export const getPrivyUserUrl = (privyId: string) => API_ENDPOINTS.USERS_FIND_BY_PRIVY(privyId); 