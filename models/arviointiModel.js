const db = require('../database.js');

const arviointi = {
  getAll: function(callback) {
    return db.query('select * from arviointi', callback);
  },

  getOne: function(id, callback) {
    return db.query('select * from arviointi where id_arviointi=?', [id], callback);
  },

  add: function(arviointi, callback) {
    return db.query(
      'insert into arviointi (paivays, arvosana, opintojakso_id, opiskelija_id) values(CURDATE(),?,?,?)',
      [arviointi.arvosana, arviointi.opintojakso_id, arviointi.opiskelija_id],
      callback
    );
  },

  delete: function(id, callback) {
    return db.query('delete from arviointi where id_arviointi=?', [id], callback);
  },

  update: function(id, arviointi, callback) {
    return db.query(
      'update arviointi set paivays=CURDATE(), arvosana=?, opintojakso_id=?, opiskelija_id=? where id_arviointi=?',
      [arviointi.arvosana, arviointi.opintojakso_id, arviointi.opiskelija_id, id],
      callback
    );
  },
  
  suoritukset: function(id, callback) {
     return db.query(
        'CALL HaeSuoritukset(?)',
        [id], 
        callback   
     );
  }
};
module.exports = arviointi;