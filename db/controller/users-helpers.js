const db = require('../dbConnect/connection.js');

const Users = {

  // ****SIGN IN HELPER ****
  signIn:  (params, callback) => {
    var data = [params.email];
    var query = 'SELECT * FROM users WHERE email=? LIMIT 1';
    db.query(query, data, (err, results) => callback(err, results) );
  },

   // ****SIGN UP HELPER ****
  signUp:  (params, callback) => {
    var data = [params.name, params.email, params.password];
    var query = "INSERT INTO users (name,email,password) VALUES (?,?,?)";
    db.query(query, data, (err, results) => callback(err, results) );
  },

  // ****CHECK USER HELPER ****
  checkUser:  (params, callback) => {
    var data = [params.email];
    var query = "SELECT * FROM users WHERE email=? LIMIT 1";
    db.query(query, data, (err, results) => callback(err, results) );
  },

   // ****GET USER INFO FOR UPDATE PAGE ****
  getOne:  (params, callback)=> {
    // var data = [params.email, params.password];
    var query = 'SELECT * FROM users WHERE id=? LIMIT 1';
    db.query(query, [params], (err, results)=> callback(err, results) );
  },

   // ****UPDATE USER INFO****
  updateOne:  (params, callback) => {
    var data = [params.name, params.photoPath, (params.languages || null), params.email, params.password];
    console.log(params);
    var query = 'UPDATE users SET name=?, photo_path=?, languages=?, email=?, password=? WHERE id ="'+params.id+'" LIMIT 1';
    db.query(query, data, (err, results) => callback(err, results) );
  },

  // ****DELETE USER [DESTROY ACCOUNT]****
  deleteOne:  (params, callback) => {
    var data = [params.email, params.password];

    var query = 'DELETE FROM users WHERE email=? AND password=? LIMIT 1';
    db.query(query, data, (err, results) => callback(err, results) );
  }
};

module.exports = Users;
