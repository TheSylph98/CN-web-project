"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
function getTelecom() {
    return new Promise((resolve, reject) => {
        _1.getData("nha-mang", {})
            .then(result => {
            if (result instanceof Array) {
                resolve(result.map(telecom => ({
                    id: telecom["id"],
                    name: telecom["tennhamang"],
                })));
            }
            else {
                reject("Internet Connection Error!");
            }
        });
    });
}
exports.getTelecom = getTelecom;
