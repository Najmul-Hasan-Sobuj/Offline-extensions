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
    function singleClickFinalAlgo1() {
        var clicked = false;
        var buttons = document.getElementsByTagName('a');
        for (var counter = 0; counter < buttons.length; counter++) {
            var target = buttons[counter];
            var text = target.innerText.trim();
            if (text == "Poke" || text == "Poke back") {
                target.click();
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

    function clickAllAlgo1() {
        if (scroll) {
            // eslint-disable-next-line no-undef
            scrollToBottom();
        }
        // eslint-disable-next-line no-undef
        disableSubmit();
        if (singleClickFinalAlgo1()) {
            // some button found and it is clicked
            setTimeout(function () {
                clickAllAlgo1();
                // eslint-disable-next-line no-undef
            }, getDelayInMSUsingInterval(delayBeginRange, delayEndRange));
            var tmp = '"Poke" button is clicked.';
            toastr.success(tmp);
        } else {
            // no button found it is not clicked
            var tmp2 = 'No "Poke" buttons found for clicking.';
            toastr.error(tmp2);
            alert(tmp2);
            // eslint-disable-next-line no-undef
            enableSubmit();
        }
    }

    // eslint-disable-next-line no-undef
    disableSubmit();
    clickAllAlgo1();
}


// additional information is "close button text"
// eslint-disable-next-line no-unused-vars
function clickNowAlgo2(enableScrolling, delayBeginRange, delayEndRange) {
    // eslint-disable-next-line no-undef
    if (!isFacebookLanguageEnglish()) {
        // eslint-disable-next-line no-undef
        enableSubmit();
        return;
    }
    console.log('clickNowAlgo1 called');
    console.log(enableScrolling, delayBeginRange, delayEndRange);


    var all_clicked = "All poke buttons are clicked.";

    function clickAllPokeButtonsAlgo2() {
        // eslint-disable-next-line no-undef
        disableSubmit();
        var counterList = [];
        var hrefElements = document.getElementsByTagName("a");
        for (var counter = 0; hrefElements[counter]; counter++) {
            if (hrefElements[counter].innerText == "Poke") {
                counterList.push(counter);
                // document.getElementsByTagName("a")[counter].click();
            }
        }
        for (var counter2 = 0; hrefElements[counter2]; counter2++) {
            if (hrefElements[counter2].innerText == "Poke Back") {
                counterList.push(counter2);
                // document.getElementsByTagName("a")[counter].click();
            }
        }
        if (counterList.length == 0) {
            // no button found it is not clicked
            var tmp2 = 'No "Poke" buttons found for clicking.';
            toastr.error(tmp2);
            alert(tmp2);
            // eslint-disable-next-line no-undef
            enableSubmit();
        }
        var a = -1;

        function clickCounter(counter) {
            var tmp = '"Poke" button is clicked.';
            toastr.success(tmp);
            hrefElements[counter].click();
        }

        function clickStart() {
            if (scroll) {
                // eslint-disable-next-line no-undef
                scrollToBottom();
            }
            a++;
            if (a < counterList.length && counterList[a] != null) {
                clickCounter(counterList[a]);
                setTimeout(clickStart,
                    // eslint-disable-next-line no-undef
                    getDelayInMSUsingInterval(delayBeginRange, delayEndRange));
            } else {
                // eslint-disable-next-line no-undef
                enableSubmit();
                toastr.success(all_clicked);
                alert(all_clicked);
            }
        }

        clickStart();
    }

    // eslint-disable-next-line no-undef
    disableSubmit();
    clickAllPokeButtonsAlgo2();
}