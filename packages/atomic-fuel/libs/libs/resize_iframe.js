"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var communicator_1 = require("../communications/communicator");
var currentHeight = 0;
function sendLtiIframeResize(height) {
    var message = { subject: 'lti.frameResize', height: height };
    (0, communicator_1.broadcastMessage)(message);
}
var defaultGetSize = function () {
    var ruler = document.getElementById('content-measuring-stick');
    return ruler.offsetTop;
};
function initResizeHandler(getSize, observeImages) {
    if (getSize === void 0) { getSize = defaultGetSize; }
    if (observeImages === void 0) { observeImages = false; }
    var observedImages = {};
    function observeImageLoading(child) {
        if (child.tagName === 'IMG' && !observedImages[child.src]) {
            child.addEventListener('load', resizeIframe());
            observedImages[child.src] = child.src;
            return;
        }
        if (!(child === null || child === void 0 ? void 0 : child.children) || child.children.length === 0) {
            return;
        }
        Array.prototype.forEach.call(child.children, function (child) {
            observeImageLoading(child);
        });
    }
    function resizeIframe() {
        var height = getSize();
        if (height === currentHeight)
            return;
        currentHeight = height;
        sendLtiIframeResize(currentHeight);
    }
    var handleResize = function (mutations) {
        if (observeImages) {
            if ((mutations === null || mutations === void 0 ? void 0 : mutations.length) > 0) {
                for (var _i = 0, mutations_1 = mutations; _i < mutations_1.length; _i++) {
                    var mutation = mutations_1[_i];
                    observeImageLoading(mutation.target);
                }
            }
        }
        resizeIframe();
    };
    var mObserver = new MutationObserver(handleResize);
    window.addEventListener('resize', handleResize);
    mObserver.observe(document.documentElement, {
        attributes: true,
        childList: true,
        subtree: true,
        characterData: true,
    });
}
exports.default = initResizeHandler;
//# sourceMappingURL=resize_iframe.js.map