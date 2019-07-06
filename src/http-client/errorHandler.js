/**
 * A function that acts as common Error Handler Function for all network calls
 * Returns the error message
 * @param {object} error - The error object thrown by http client
 */
export default error => {
  const { response, message } = error;
  return response.statusText || message;
};
