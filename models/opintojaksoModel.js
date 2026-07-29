const db = require('../database.js');

const opintojakso = {
  getAll: function(callback) {
    return db.query('select * from opintojakso', callback);
  },

  getOne: function(id, callback) {
    return db.query('select * from opintojakso where id_opintojakso=?', [id], callback);
  },

  add: function(opintojakso, callback) {
    return db.query(
      'insert into opintojakso (koodi,laajuus,nimi) values(?,?,?)',
      [opintojakso.koodi, opintojakso.laajuus, opintojakso.nimi],
      callback
    );
  },

  delete: function(id, callback) {
    return db.query('delete from opintojakso where id_opintojakso=?', [id], callback);
  },

  update: function(id, opintojakso, callback) {
    return db.query(
      'update opintojakso set koodi=?, laajuus=?, nimi=? where id_opintojakso=?',
      [opintojakso.koodi, opintojakso.laajuus, opintojakso.nimi, id],
      callback
    );
  }
};
module.exports = opintojakso;