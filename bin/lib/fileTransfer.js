"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ncp_1 = require("ncp");
var appRoot_1 = require("../appRoot");
exports.fileTransfer = function (fileLoc, fileDest) {
    return new Promise(function (resolve, reject) {
        ncp_1.ncp(appRoot_1.appRoot + fileLoc, fileDest, function (err) {
            if (err) {
                console.log(err);
                reject(err);
            }
            else {
                resolve(fileDest);
            }
        });
    });
};
