const User = require('../models/User');
const nodemailer = require('nodemailer');
const fs = require('fs');



exports.getAdmin = function(req, res) {
    /*  if user gırışi yoksa hata veriyo.Profile bulamıyo çünkü
    if((req.user.profile.membertype=="AlertManagerHelper")|| 
    (req.user.profile.membertype="AlertManager" )){
        res.render('administration/administration', {
        });}

    else {
        req.flash('fail', { msg: 'Yönetici Değilsiniz.Anasayfaya yönlendiriyorum' });
        res.redirect('/');
    }
    */
  res.render('admin/administration');
};

exports.getAdmin2 = function(req, res) {
    /*  if user gırışi yoksa hata veriyo.Profile bulamıyo çünkü
    if((req.user.profile.membertype=="AlertManagerHelper")|| 
    (req.user.profile.membertype="AlertManager" )){
        res.render('administration/administration', {
        });}

    else {
        req.flash('fail', { msg: 'Yönetici Değilsiniz.Anasayfaya yönlendiriyorum' });
        res.redirect('/');
    }
    */
  res.render('administration/administration');
}