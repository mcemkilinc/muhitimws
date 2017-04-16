/**
 * Created by Cem on 1/28/2017.
 */
/**
 * Created by Cem on 1/28/2017.
 */
/**
 * Created by Cem on 4/23/2016.
 */
var mongoose = require('mongoose');

var merchantSchema = new mongoose.Schema(
    {merchant_data:
        {
            merchantName: { type: String, default: '' },
            merchantLocationLat : { type: String, default: '' },
            merchantLocationLong: { type: String, default: '' },
            merchantBusinessDomain: { type: String, default: '' },
            merchantWeeklyEligiblePromotion: { type: String, default: '' },
            merchantMembershipStatus: { type: String, default: '' },
            merchantMembershipStart: { type: String, default: '' },
            merchantMembershipEnds: { type: String, default: '' }
        }
    },
    { timestamps: true });

var Merchant = mongoose.model('Merchant', merchantSchema);

module.exports = Merchant;