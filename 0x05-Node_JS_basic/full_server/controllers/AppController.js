/**
 * Handles miscellaneous routes for the application.
 * @class
 */
class AppController {
  /**
   * Responds to the homepage request.
   * @param {import('express').Request} request - Express request object.
   * @param {import('express').Response} response - Express response object.
   * @returns {void}
   */
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
