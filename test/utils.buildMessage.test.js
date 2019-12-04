const assert = require('assert');
const buildMessage = require('../utils/buildMessage');

describe('utils - buildMessage', () => {
  describe('when recive an entity and and action', () => {
    it('should return the respective message', () => {
      const result = buildMessage('place', 'create');
      const expect = 'place created';
      assert.strictEqual(result, expect);
    });
  });

  describe('when recive an entity and and action and is a list', () => {
    it('should return the respective message with entity in plural', () => {
      const result = buildMessage('place', 'list');
      const expect = 'places listed';
      assert.strictEqual(result, expect);
    });
  });
});
