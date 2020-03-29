const generateUniqueId = require('../../src/utils/generatorUniqueId');

describe('generate Unique Id', () => {
  it('deve gerar um unica id', () => {
    const id = generateUniqueId();
    expect(id).toHaveLength(8);
  })
})