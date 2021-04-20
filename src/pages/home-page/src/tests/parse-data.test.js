import { expect, assert } from 'chai';
import parseData from '../js/modules/parseData';

const date = '2018-09-25T16:19:00.428727Z';
const expectDate = 'Sep 25, 2018';

describe('Home Page', function() {
  describe('parseData()', function() {

    it('should return parsed Date', function(done) {
      const result = parseData(date);
      assert.isNotNull(result);
      expect(result).to.equal(expectDate);
      done();
    });

    it('should return null if date is null', function(done) {
      assert.isNull(parseData(), 'should be null');
      done();
    });

    it('should return null if date is not valid', function(done) {
      assert.isNull(parseData('wrong date'), 'should be null');
      done();
    });

  });
});
