import { broadcastMessage } from '../communications/communicator';

let currentHeight = 0;

function sendLtiIframeResize(height) {
  const message = { subject: 'lti.frameResize', height };
  broadcastMessage(message);
}

const defaultGetSize = () => {
  const ruler = document.getElementById('content-measuring-stick');
  return ruler.offsetTop;
};



export default function initResizeHandler(getSize = defaultGetSize, observeImages = false) {
  const observedImages = {}

  function observeImageLoading(child) {
    if (child.tagName === 'IMG' && !observedImages[child.src]) {
      child.addEventListener('load', resizeIframe())
      observedImages[child.src] = child.src;
      return;
    }
  
    if (!child?.children || child.children.length === 0) {
      return;
    }
  
    Array.prototype.forEach.call(child.children, (child) => {
      observeImageLoading(child)
    });
  }
  
  function resizeIframe() {
    let height = getSize();
    if (height === currentHeight) return;
  
    currentHeight = height;
    sendLtiIframeResize(currentHeight);
  }

  const handleResize = (mutations) => {
    if (observeImages) {
      if (mutations?.length > 0) { 
        for (let mutation of mutations) {
          observeImageLoading(mutation.target)
        }
      }
    }
    resizeIframe()
  };

  const mObserver = new MutationObserver(handleResize);
  window.addEventListener('resize', handleResize);
  mObserver.observe(document.documentElement, {
    attributes: true,
    childList: true,
    subtree: true,
    characterData: true,
  });
}
