import { postAppData } from '../src/client/js/appData.js';


test('the data is peanut butter', done => {
    function postAppData() {
      try {
        expect(response.json()).toBe(newData);
        done();
      } catch (error) {
        done(error);
      }
    }
  
    response(url);
  });
