const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const fs=require("fs");
const pool = require('../database');
const helpers = require('./helpers');
const bcrypt=require("bcryptjs");


passport.use('local.signin', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done) => {
    const rows = await pool.query('SELECT * FROM db_usuarios WHERE username = ?', [username]);
    if (rows.length > 0) {
        const user = rows[0];
         const validPassword = await helpers.matchPassword(password, user.password)
        if (validPassword) {
    const filas=await pool.query('SELECT * FROM `db_distribucion` INNER JOIN db_usuarios ON db_distribucion.id_company=db_usuarios.id_company' +
        ' INNER JOIN db_export on db_export.id_company=db_usuarios.id_company ' +
        'INNER JOIN db_calculo ON db_calculo.id_company=db_usuarios.id_company WHERE db_usuarios.username=?', [username]);
           if (filas[0]){
               let sess={casillas:[], destino:[],calculo: []};
               fs.writeFileSync("./session/"+username+".json",JSON.stringify(sess),"utf-8");
               file=fs.readFileSync("./session/"+username+".json","utf-8");
               const session_json=JSON.parse(file);
               session_json.casillas.push({"casillas":filas[0]});
               file=fs.writeFileSync("./session/"+username+".json",JSON.stringify(session_json));
           }

            done(null, user, req.flash('success', 'Welcome ' + user.username));

        } else {
            done(null, false, req.flash('message', 'Incorrect Password'));
        }
    } else {
        return done(null, false, req.flash('message', 'The Username does not exists.'));
    }
}));

passport.use('local.signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done) => {

    const { fullname } = req.body;
    const { country } = req.body;
    const { company } = req.body;
    const { email } = req.body;
    let newUser = {
        country,
        company,
        email,
        fullname,
        username,
        password
    };
    newUser.password = await helpers.encryptPassword(password);
    // Saving in the Database
    const result = await pool.query('INSERT INTO db_usuarios SET ? ', newUser);
    newUser.id = result.insertId;
    return done(null, newUser);
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const rows = await pool.query('SELECT * FROM db_usuarios WHERE id = ?', [id]);
    done(null, rows[0]);
});