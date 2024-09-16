import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 * Configures routes for the Express application.
 * @param {import('express').Application} app - The Express application.
 * @returns {void}
 */
const mapRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;
