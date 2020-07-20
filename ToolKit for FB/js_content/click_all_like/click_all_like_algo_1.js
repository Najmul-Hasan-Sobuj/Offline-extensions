// content script used by click like functionality

// additional information is "close button text"
// eslint-disable-next-line no-unused-vars
function clickNowAlgo1(enableScrolling, delayBeginRange, delayEndRange) {
    // eslint-disable-next-line no-undef
    // if (!isFacebookLanguageEnglish()) {
    //     // eslint-disable-next-line no-undef
    //     enableSubmit();
    //     return;
    // }
    console.log('clickNowAlgo1 called');
    console.log(enableScrolling, delayBeginRange, delayEndRange);

    // final function for clicking
    function singleClick() {
        var clicked = false;
        var buttons = document.getElementsByTagName('a');
        for (var counter = 0; counter < buttons.length; counter++) {
            var target = buttons[counter];
            var attrTestID = target.getAttribute('data-testid');
            var clickable = false;
            if (attrTestID != null && attrTestID.match(/UFI2ReactionLink/ig)) {
                clickable = true;
            }
            var liked = false;
            if (target.getAttribute('aria-pressed') != null && target.getAttribute('aria-pressed').match(/true/ig)) {
                liked = true;
            }
            var text = target.innerText.trim();
            if (clickable && text == "Like" && liked == false) {
                target.click();
                //  target.focus();
                clicked = true;
                break;
            }
        }
        if (clicked) {
            return true;
        } else {
            return false;
        }
    }

    function clickNow() {
        // eslint-disable-next-line no-undef
        disableSubmit();
        if (singleClick()) {
            // eslint-disable-next-line no-undef
            autoClickClose();
            // some button found and it is clicked
            setTimeout(function () {
                clickNow();
                // eslint-disable-next-line no-undef
            }, getDelayInMSUsingInterval(delayBeginRange, delayEndRange));
            var tmp = '"Like" button is clicked.';
            toastr.success(tmp);
            if (enableScrolling) {
                // eslint-disable-next-line no-undef
                scrollToBottom();
            }
        } else {
            // no button found it is not clicked
            var tmp2 = 'No "Like" buttons found for clicking.';
            toastr.error(tmp2);
            alert(tmp2);
            // eslint-disable-next-line no-undef
            enableSubmit();
        }
    }

    clickNow();
}