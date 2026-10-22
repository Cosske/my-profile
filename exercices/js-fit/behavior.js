const copyButton = document.querySelector('.copy-button');
const code = document.querySelector('.promo-code');
const status = document.querySelector('.status');
async function copyText(text, button, original) {
 try { await navigator.clipboard.writeText(text); button.textContent = 'Copied!'; status.textContent = 'Copied to clipboard.'; setTimeout(function () { button.textContent = original; }, 2000); }
 catch (error) { status.textContent = 'Copy unavailable. Select the text and copy it manually.'; }
}
function copyCode() { copyText(code.textContent, copyButton, 'Copy the code'); }
copyButton.addEventListener('click', copyCode);
const shareButton = document.querySelector('.copy-share');
shareButton.addEventListener('click', function () { copyText(document.querySelector('.share-link').href, shareButton, 'Copy share link'); });
