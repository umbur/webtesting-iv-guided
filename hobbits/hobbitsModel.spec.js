const db = require('../data/dbConfig.js');
const Hobbits = require('./hobbitsModel.js');

// returns 201
// insert the hobbit
describe('hobbits model', () => {
  beforeEach(async () => {
    await db('hobbits').truncate();
  });

  describe('insert()', () => {
    it('should insert the provided hobbits', async () => {
      await Hobbits.insert({ name: 'agha' });
      await Hobbits.insert({ name: 'beg' });
      await Hobbits.insert({ name: 'agha2' }); 

      const hobbits = await db('hobbits');
      expect(hobbits).toHaveLength(3); 
    });   

    it('should insert the provided hobbit', async () => {
      let hobbit = await Hobbits.insert({ name: 'gaffer' });
      expect(hobbit.name).toBe('gaffer');
 
      hobbit = await Hobbits.insert({ name: 'sam' });
      expect(hobbit.name).toBe('sam');
    });
  });
});
