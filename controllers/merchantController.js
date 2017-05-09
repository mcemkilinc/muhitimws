/**
 * Created by Cem on 4/16/2017.
 */

const Merchant = require('../models/Merchant');

exports.getCreateMerchant = function(req, res) {
  res.render('merchant/createMerchant', {});
};

exports.postCreateMerchant = function(req, res, next) {
  console.log('postcrateMerchantcalled');
  var errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/merchant/createMerchant');
  }
  var mMerchant = new Merchant();

  mMerchant.merchant_data.merchantName = req.body.merchantName || '';
  mMerchant.merchant_data.merchantLocationLat = req.body.merchantLocationLat || '';
  mMerchant.merchant_data.merchantLocationLong = req.body.merchantLocationLong || '';
  mMerchant.merchant_data.merchantBusinessDomain  = req.body.merchantBusinessDomain || '';
  mMerchant.merchant_data.merchantWeeklyEligiblePromotion  = req.body.merchantWeeklyEligiblePromotion || '';
  mMerchant.merchant_data.merchantMembershipStart = req.body.merchantMembershipStart || '';
  mMerchant.merchant_data.merchantMembershipEnds = req.body.merchantMembershipEnds || '';
    mMerchant.save(function (err) {
      if (err) {
        return next(err);
      }
        req.flash('success', {msg: 'Yeni Esnaf Eklendi.'});
        res.redirect('/manageMerchants');
    });
};

exports.getManageMerchants = function(req, res) {
    var sMerchants;
    Merchant.find({}, function(err, sMerchants){
        if(err) res.send(err);
        //res.json(sMerchants);
        res.render('merchant/manageMerchants', { sMerchants : sMerchants})
    });
};

exports.getUpdateMerchant = function(req, res) {

    console.log(req.query.id);
    Merchant.findById(req.query.id,function(err,sMerchant){
        console.log(sMerchant.toString());
        res.render('Merchant/updateMerchant', { sMerchant : sMerchant
        })
    });

};

exports.postUpdateMerchant = function(req, res) {


    console.log("post" + req.body.docid);
    Merchant.findById(req.body.docid,function(err,sMerchant){
        sMerchant.merchant_data.merchantName = req.body.merchantName || '';
        sMerchant.merchant_data.merchantLocationLat = req.body.merchantLocationLat || '';
        sMerchant.merchant_data.merchantLocationLong = req.body.merchantLocationLong || '';
        sMerchant.merchant_data.merchantBusinessDomain  = req.body.merchantBusinessDomain || '';
        sMerchant.merchant_data.merchantWeeklyEligiblePromotion  = req.body.merchantWeeklyEligiblePromotion || '';
        sMerchant.merchant_data.merchantMembershipStart = req.body.merchantMembershipStart || '';
        sMerchant.merchant_data.merchantMembershipEnds = req.body.merchantMembershipEnds || '';
        sMerchant.save();
        req.flash('success', { msg: 'Esnaf Güncellendi.' });
        res.redirect('/manageMerchants');
    })
};

exports.getDeleteMerchant = function(req, res) {

    console.log("post" + req.query.id);
    Merchant.findById(req.query.id,function(err,sMerchant){
        sMerchant.remove();
        req.flash('success', { msg: 'Esnaf Silindi.' });
        res.redirect('/manageMerchants');
    })



};