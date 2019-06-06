module.exports = person => {
    return person.name.toUpperCase();
};
module.exports.$argumentTransformer = './spec/support/argument-transformer-object.js';
