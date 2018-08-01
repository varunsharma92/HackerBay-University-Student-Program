const assert = require('chai').assert;
const index = require('../index');

describe('Index', function(){
    it('App should return 200', function({
        assert.equal(index(), '200');
    });


});

