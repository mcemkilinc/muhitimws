
var path = require ('path');
var formidable = require('formidable');
var fs = require('fs');
var async = require('async');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
var passport = require('passport');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var pkgcloud = require('pkgcloud');


	var config = {
    provider: 'openstack',
    useServiceCatalog: true,
    useInternal: false,
    keystoneAuthVersion: 'v3',
    authUrl: 'https://identity.open.softlayer.com',
    tenantId: 'd013ea21330746a3b7f431a477c5a605',    //projectId from credentials
    domainId: '25039761dc7d4fbcb8c7ed2239ad718b',
    username: 'admin_e20ee845aaf2a3167eaeeb0e7297dd8d49500114',
    password: 'vr{V_Fy!3iJ,2S4w',
    region: 'dallas'   //dallas or london region
};

var storageClient = pkgcloud.storage.createClient(config);
storageClient.auth(function(err) {
    if (err) {
        console.error(err);
    }
    else {
        console.log(storageClient._identity);
    }
});

var fs = require('fs');
storageClient.createContainer({
    name: 'my-container'
    }, function (err, container) {
    if (err) {
        console.error(err);
    }
    else {
        var myFile = fs.createReadStream('/Cscale.jpg');
        var upload = storageClient.upload({
            container: container.name,
            remote: 'file.txt'
        });
        upload.on('error', function(err) {
            console.error(err);
        });
        upload.on('success', function(file) {
            console.log(file.toJSON());
        });
        myFile.pipe(upload);
    }
});
