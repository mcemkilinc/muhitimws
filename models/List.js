/**
 * Created by Cem on 4/16/2017.
 */
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

var listSchema = new mongoose.Schema(
    {listData:
        {
            listName: { type: String, default: '' },
            listCode : { type: String, default: '' },
            listValue: { type: String, default: '' }
        }
    },
    { timestamps: true });

var List = mongoose.model('list', listSchema);

module.exports = List;