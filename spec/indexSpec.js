var Rool = require('../');

describe('Rool instance', function () {
    it('should have a name property', function () {
        var name = 'store name';
        var store = Rool.create(name);
        expect(store.name).toBe(name);
    });
        
});
