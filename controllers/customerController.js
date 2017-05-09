

const Merchant = require('../models/Merchant');


exports.getMerchantListinMuhit = function(req, res) {
        var sMerchants;
        Merchant.find({}, function(err, sMerchants){
        if(err) res.send(err);
        //res.json(sMerchants);
        res.render('customer/MerchantListinMuhit', { sMerchants : sMerchants});
    });
};