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

    var buttonText = 'Invite Member';

    //
    //
    //  For clicking using algorithm 1 start
    //
    //
    // final function for clicking
    function startClickAlgo1ButtonFinal() {
        var clicked = false;
        var buttons = document.getElementsByTagName("a");
        for (var counter = 0; counter < buttons.length; counter++) {
            var target = buttons[counter];
            var text = target.innerText.trim();
            if (text == buttonText) {
                target.click();
                //target.focus();
                clicked = true;
                target.remove();
                break;
            }
        }
        if (clicked) {
            // eslint-disable-next-line no-undef
            // autoClickClose();
            // eslint-disable-next-line no-undef
            // autoClickAllExitButtons();
            return true;
        } else {
            return false;
        }
    }

    // final function for clicking
    function startClickAlgo1AnchorFinal() {
        var clicked = false;
        var buttons = document.getElementsByTagName("button");
        for (var counter = 0; counter < buttons.length; counter++) {
            var target = buttons[counter];
            var text = target.innerText.trim();
            if (text == buttonText) {
                target.click();
                //target.focus();
                clicked = true;
                target.remove();
                break;
            }
        }
        if (clicked) {
            // eslint-disable-next-line no-undef
            // autoClickClose();
            // eslint-disable-next-line no-undef
            // autoClickAllExitButtons();
            return true;
        } else {
            return startClickAlgo1ButtonFinal();
        }
    }

    function startClickAlgo1() {
        if (enableScrolling) {
            // eslint-disable-next-line no-undef
            scrollToBottom();
        }
        // eslint-disable-next-line no-undef
        disableSubmit();
        if (startClickAlgo1AnchorFinal()) {
            toastr.success('"'+buttonText+'" button is clicked.');
            // some button found and it is clicked
            setTimeout(function () {
                startClickAlgo1();
                // eslint-disable-next-line no-undef
            }, getDelayInMSUsingInterval(delayBeginRange, delayEndRange));
        } else {
            // eslint-disable-next-line no-undef
            // autoClickClose();
            // eslint-disable-next-line no-undef
            // autoClickAllExitButtons();
            // no button found it is not clicked
            var tmp2 = 'No "'+buttonText+'" buttons found for clicking.';
            toastr.error(tmp2);
            alert(tmp2);
            // eslint-disable-next-line no-undef
            // autoClickClose();
            // eslint-disable-next-line no-undef
            // autoClickAllExitButtons();
            // eslint-disable-next-line no-undef
            enableSubmit();
        }
    }

    // eslint-disable-next-line no-undef
    disableSubmit();
    startClickAlgo1();
}
