const fs = require('fs');
const path = require('path');
const iptc = require('node-iptc');
const exifParser = require('exif-parser');

module.exports = function(filePath, callback) {
    //console.log(filePath);
    fs.readFile(filePath, function(err, data) {
        //console.log(data.slice(0, 200));
        if (err) {
            return {};
        }
        let iptcData = iptc(data);
        let result = exifParser.create(data);
        let exifData = result.parse();
        return callback({
            exif: exifData,
            iptc: iptcData
        })
    });
};
