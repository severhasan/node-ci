module.exports = class PromiseManager {
  static async resolve() {
    return '🐈';
  }
  static async reject() {
    throw new Error('😡');
  }
};
