/**
 * Created by Cem on 4/16/2017.
 */
/**
 * Created by Cem on 1/28/2017.
 */

const Merchant = require('../models/Merchant');

exports.getcreateMerchant = (req, res)=> {
    res.render('/merchant/createMerchant', {
    });
};

exports.postcreateMerchant = function(req, res,next) {
    console.log("postcrateMerchantcalled");
    var errors = req.validationErrors();

    if (errors) {
        req.flash('errors', errors);
        return res.redirect('/merchant/createMerchant');
    }

    var mMerchant = new Merchant();

    mMerchant.productCampaign_data.productName = req.body.productName || '';
    mMerchant.productCampaign_data.productCampaignQueueNumber = req.body.productCampaignQueueNumber || '';
    mMerchant.productCampaign_data.imageFileID = req.body.imageFileID || '';
    mMerchant.productCampaign_data.oldPrice = req.body.oldPrice || '';
    mMerchant.productCampaign_data.newPrice = req.body.newPrice || '';

    mMerchant.save(function (err) {

        if (err) {
            return next(err);
        }

        req.flash('success', {msg: 'Yeni Kampanya Eklendi.'});
        res.redirect('/merchant/manageMerchants');
    });
};
exports.getManageMerchants = function(req, res) {
    var sMerchants;
    Merchant.find({}, function(err, sMerchants){
        if(err) res.send(err);
        //res.json(sMerchants);
        res.render('Merchant/manageMerchants', { sMerchants : sMerchants})
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
        sMerchant.Merchant_data.queueNumber = req.body.queueNumber || '';
        sMerchant.Merchant_data.productCampaignQueueNumber = req.body.productCampaignQueueNumber || '';
        sMerchant.Merchant_data.imageFileID = req.body.imageFileID || '';
        sMerchant.Merchant_data.oldPrice = req.body.oldPrice || '';
        sMerchant.save();
        req.flash('success', { msg: 'Duyuru Güncellendi.' });
        res.redirect('/Merchant/manageMerchants');
    })
};

exports.getDeleteMerchant = function(req, res) {

    console.log("post" + req.query.id);
    Merchant.findById(req.query.id,function(err,sMerchant){
        sMerchant.remove();
        req.flash('success', { msg: 'Duyuru Silindi.' });
        res.redirect('/Merchant/manageMerchants');
    })



};