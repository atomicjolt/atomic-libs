"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLtiAdmin = exports.isLtiInstructor = void 0;
var lodash_1 = __importDefault(require("lodash"));
function isLtiInstructor(roles) {
    return lodash_1.default.includes(roles, 'urn:lti:role:ims/lis/Instructor');
}
exports.isLtiInstructor = isLtiInstructor;
function isLtiAdmin(roles) {
    return lodash_1.default.includes(roles, 'urn:lti:role:ims/lis/Administrator')
        || lodash_1.default.includes(roles, 'urn:lti:instrole:ims/lis/Administrator')
        || lodash_1.default.includes(roles, 'urn:lti:sysrole:ims/lis/SysAdmin')
        || lodash_1.default.includes(roles, 'urn:lti:sysrole:ims/lis/Administrator');
}
exports.isLtiAdmin = isLtiAdmin;
//# sourceMappingURL=lti_roles.js.map