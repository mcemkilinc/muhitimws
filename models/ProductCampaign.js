/**
 * Created by Cem on 1/28/2017.
 */
/**
 * Created by Cem on 4/23/2016.
 */
var mongoose = require('mongoose');

var productCampaignSchema = new mongoose.Schema(
    {productCampaign_data:
    {
        productName: { type: String, default: '' },
        productCampaignQueueNumber : { type: String, default: '' },
        imageFileID: { type: String, default: '' },
        oldPrice: { type: String, default: '' },
        newPrice: { type: String, default: '' },
        validUntil: { type: String, default: '' },
        description: { type: String, default: '' },
    }
    },
    { timestamps: true });

var ProductCampaign = mongoose.model('ProductCampaign', productCampaignSchema);

module.exports = ProductCampaign;