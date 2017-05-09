
var path = require ('path');
var User = require('../models/User');
var Merchant = require('../models/Merchant');

exports.getSelectLocation = function(req, res) {
    req.session.HomeorBusiness = req.query.HomeorBusiness;
    res.render("utilities/locationPicker", {sRequest:req
    });
    //res.sendFile(path.resolve("views/locationpickertest.html"))
};

exports.postSelectLocation = function(req, res) {

    console.log("postSelectLocation:");
    console.log(req.body.LocationType);
    console.log(req.body.rMerchant);
    console.log(req.body.location_lat);
    console.log(req.body.location_long);
    Merchant.findById(req.body.rMerchant, function(err, merchant) {
        if (err) {
            return next(err);
        }
        if (req.session.LocationType="MerchantLocation") {
            merchant.merchant_data.merchantLocationLat = req.body.location_lat || '';
            merchant.merchant_data.merchantLocationLong = req.body.location_long || '';
            
        }
        merchant.save(function (err) {
            if (err) {
                if (err.code === 11000) {
                    req.flash('errors', {msg: 'Girdiğiniz mail adresi zaten bir hesap ile ilintili.'});
                    return res.redirect('/updateMerchant');
                } else {
                    return next(err);
                }
            }
            req.flash('success', {msg: 'Esnaf bilgileri güncellendi.'});
            res.redirect('/updateMerchant'+"?id="+req.body.rMerchant);
            //res.sendFile(path.resolve("views/locationpickertest.html"))
        });
    });
};