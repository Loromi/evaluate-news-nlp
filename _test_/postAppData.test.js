import { postAppData, response, newData, url } from '../src/client/js/appData.js';


test('fetch App data', done => {
    function postAppData() {
      try {
        expect(response.json()).toBe(newData);
        done();
      } catch (error) {
        done(error);
      }
    }
  });
