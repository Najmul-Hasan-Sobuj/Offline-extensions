// eslint-disable-next-line no-unused-vars
function clickNowAlgo1(enableScrolling, delayBeginRange, delayEndRange) {
    // todo : add language check
    console.log('clickNowAlgo1 called');
    console.log(enableScrolling, delayBeginRange, delayEndRange);

    // final function for clicking
    function rejectSingleClickFinal() {
        var clicked = false;
        var buttons = document.getElementsByTagName("button");
        for (var counter = 0; counter < buttons.length; counter++) {
            var target = buttons[counter];
            var text = target.innerText.trim();
            if (text == "Cancel") {
                target.click();
                target.remove();
                //target.focus();
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

    function rejectAllFRequestsFinal() {
        // eslint-disable-next-line no-undef
        disableSubmit();
        if (rejectSingleClickFinal()) {
            // some button found and it is clicked
            setTimeout(function () {
                rejectAllFRequestsFinal();
                // eslint-disable-next-line no-undef
            }, getDelayInMSUsingInterval(delayBeginRange, delayEndRange));
            var tmp = '"Cancel" button is clicked.';
            toastr.success(tmp);
            if (enableScrolling) {
                // eslint-disable-next-line no-undef
                scrollToBottom();
            }
        } else {
            // no button found it is not clicked
            var tmp2 = 'No "Cancel" buttons found for clicking.';
            toastr.error(tmp2);
            alert(tmp2);
            // eslint-disable-next-line no-undef
            enableSubmit();
        }
    }

    // eslint-disable-next-line no-undef
    disableSubmit();
    rejectAllFRequestsFinal();
}