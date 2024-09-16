import app from '../full_server/server.js';
import { use, request, expect } from 'chai';
import chaiHttp from 'chai-http';

// Set the database file path for testing
process.argv[2] = './database.csv';

use(chaiHttp);

describe('Student API Endpoints', () => {
  
  // Test for retrieving CS students
  it('returns correct list of CS students', (done) => {
    request(app)
      .get('/students/CS')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal(
          'List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie'
        );
        done();
      });
  });
  
  // Test for retrieving SWE students
  it('returns correct list of SWE students', (done) => {
    request(app)
      .get('/students/SWE')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal(
          'List: Guillaume, Joseph, Paul, Tommy'
        );
        done();
      });
  });

  // Test for retrieving all students
  it('returns all students with correct details', (done) => {
    request(app)
      .get('/students')
      .end((err, res) => {
        expect(res).to.have.status(200);
        const responseText = res.text;

        // Check the general structure
        expect(responseText).to.include('This is the list of our students');
        
        // Check CS students
        expect(responseText).to.include('Number of students in CS: 6.');
        expect(responseText).to.include('List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie');
        
        // Check SWE students
        expect(responseText).to.include('Number of students in SWE: 4.');
        expect(responseText).to.include('List: Guillaume, Joseph, Paul, Tommy');
        
        // Check order of majors (CS should come before SWE)
        const csIndex = responseText.indexOf('Number of students in CS');
        const sweIndex = responseText.indexOf('Number of students in SWE');
        expect(csIndex).to.be.lessThan(sweIndex);

        done();
      });
  });

  // Test for invalid major
  it('returns 500 for invalid major', (done) => {
    request(app)
      .get('/students/INVALID')
      .end((err, res) => {
        expect(res).to.have.status(500);
        expect(res.text).to.equal('Major parameter must be CS or SWE');
        done();
      });
  });
});
