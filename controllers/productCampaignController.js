/**
 * Created by Cem on 1/28/2017.
 */

const ProductCampaign = require('../models/ProductCampaign');

exports.getcreateProductCampaign = (req, res)=> {
    res.render('merchant/createProductCampaign', {
    });
};

exports.postcreateProductCampaign = function(req, res,next) {
    console.log("postcrateProductCampaigncalled");
    var errors = req.validationErrors();

    if (errors) {
        req.flash('errors', errors);
        return res.redirect('/ProductCampaign/createProductCampaign');
    }

    var mProductCampaign = new ProductCampaign();

    mProductCampaign.productCampaign_data.productName = req.body.productName || '';
    mProductCampaign.productCampaign_data.productCampaignQueueNumber = req.body.productCampaignQueueNumber || '';
    mProductCampaign.productCampaign_data.imageFileID = req.body.imageFileID || '';
    mProductCampaign.productCampaign_data.oldPrice = req.body.oldPrice || '';
    mProductCampaign.productCampaign_data.newPrice = req.body.newPrice || '';

    mProductCampaign.save(function (err) {

        if (err) {
            return next(err);
        }

        req.flash('success', {msg: 'Yeni Kampanya Eklendi.'});
        res.redirect('/merchant/manageProductCampaigns');
    });
};
exports.getManageProductCampaigns = function(req, res) {
    var sProductCampaigns;
    ProductCampaign.find({}, function(err, sProductCampaigns){
        if(err) res.send(err);
        //res.json(sProductCampaigns);
        res.render('ProductCampaign/manageProductCampaigns', { sProductCampaigns : sProductCampaigns})
    });
};

exports.getUpdateProductCampaign = function(req, res) {

    console.log(req.query.id);
    ProductCampaign.findById(req.query.id,function(err,sProductCampaign){
        console.log(sProductCampaign.toString());
        res.render('ProductCampaign/updateProductCampaign', { sProductCampaign : sProductCampaign
        })
    });

};

exports.postUpdateProductCampaign = function(req, res) {


    console.log("post" + req.body.docid);
    ProductCampaign.findById(req.body.docid,function(err,sProductCampaign){
        sProductCampaign.ProductCampaign_data.queueNumber = req.body.queueNumber || '';
        sProductCampaign.ProductCampaign_data.productCampaignQueueNumber = req.body.productCampaignQueueNumber || '';
        sProductCampaign.ProductCampaign_data.imageFileID = req.body.imageFileID || '';
        sProductCampaign.ProductCampaign_data.oldPrice = req.body.oldPrice || '';
        sProductCampaign.save();
        req.flash('success', { msg: 'Duyuru Güncellendi.' });
        res.redirect('/ProductCampaign/manageProductCampaigns');
    })
};

exports.getDeleteProductCampaign = function(req, res) {

    console.log("post" + req.query.id);
    ProductCampaign.findById(req.query.id,function(err,sProductCampaign){
        sProductCampaign.remove();
        req.flash('success', { msg: 'Duyuru Silindi.' });
        res.redirect('/ProductCampaign/manageProductCampaigns');
    })



};