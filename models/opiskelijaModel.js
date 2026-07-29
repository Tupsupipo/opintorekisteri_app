const db = require('../database.js');

const opiskelija = {
  getAll: function(callback) {
    return db.query('select * from opiskelija', callback);
  },

  getOne: function(id, callback) {
    return db.query('select * from opiskelija where id_opiskelija=?', [id], callback);
  },

  add: function(opiskelija, callback) {
    return db.query(
      'insert into opiskelija (etunimi,sukunimi,osoite,luokkatunnus) values(?,?,?)',
      [opiskelija.etunimi, opiskelija.sukunimi, opiskelija.osoite, opiskelija.luokkatunnus],
      callback
    );
  },

  delete: function(id, callback) {
    return db.query('delete from opiskelija where id_opiskelija=?', [id], callback);
  },

  update: function(id, opiskelija, callback) {
    return db.query(
      'update opiskelija set etunimi=?, set sukunimi=?, osoite=?, luokkatunnus=? where id_opiskelija=?',
      [opiskelija.etunimi, opiskelija.sukunimi, opiskelija.osoite, opiskelija.luokkatunnus, id],
      callback
    );
  }
};
module.exports = opiskelija;


