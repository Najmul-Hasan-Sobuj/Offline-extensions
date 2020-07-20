// content script used by click like functionality

// eslint-disable-next-line no-unused-vars
async function clickNowAlgo2(enableScrolling, delayBeginRange, delayEndRange) {
    // eslint-disable-next-line no-undef
    // if (!isFacebookLanguageEnglish()) {
    //     // eslint-disable-next-line no-undef
    //     enableSubmit();
    //     return;
    // }
    console.log('clickNowAlgo2 called');
    console.log(enableScrolling, delayBeginRange, delayEndRange);

    var clickableElementList = [];

    // final function for clicking
    // eslint-disable-next-line no-unused-vars
    function genClickableElementList() {
        var buttons = document.getElementsByTagName('a');
        for (var counter = 0, len = buttons.length; counter < len; counter++) {
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
                clickableElementList.push(target);
                continue;
            }
        }
    }

    async function clickElementList() {
        console.log('clickableElementList');
        console.log(clickableElementList);
        if (!clickableElementList || clickableElementList.length == 0) {
            // no button found it is not clicked
            var tmp2 = 'No "Like" buttons found for clicking.';
            toastr.error(tmp2);
            alert(tmp2);
            // eslint-disable-next-line no-undef
            enableSubmit();
            return;
        }
        for (var index = 0, len = clickableElementList.length; index < len; index++) {
            // eslint-disable-next-line no-undef
            disableSubmit();
            // eslint-disable-next-line no-undef
            autoClickClose();
            if (enableScrolling) {
                // eslint-disable-next-line no-undef
                scrollToBottom();
            }
            clickableElementList[index].click();
            var tmp = '"Like" button is clicked.';
            toastr.success(tmp);
            // eslint-disable-next-line no-undef
            await sleep(getDelayInMSUsingInterval(delayBeginRange, delayEndRange));
        }
    }

    genClickableElementList();
    await clickElementList();
}

