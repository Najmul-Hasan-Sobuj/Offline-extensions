// eslint-disable-next-line no-unused-vars
function clickNowAlgo1(enableScrolling, delayBeginRange, delayEndRange) {

    var unable_to_find = 'Unable to find "Share" buttons.';
    var clicked = '"Share" button is clicked.';
    var all_clicked = 'All "Share" buttons are clicked.';

    // eslint-disable-next-line no-undef
    // if (!isFacebookLanguageEnglish()) {
    //     // eslint-disable-next-line no-undef
    //     enableSubmit();
    //     return;
    // }
    console.log('clickNowAlgo1 called');
    console.log(enableScrolling, delayBeginRange, delayEndRange);

    // for automatically clicking close buttons when add button is clicked
    function clickShareNow() {
        try {
            var btnList = document.getElementsByTagName('span');
            for (var index = 0, len = btnList.length; index < len; index++) {
                var elem = btnList[index];
                var elemText = elem.innerText.trim();
                // console.log(elemText);
                if (elemText == "Share Now") {
                    elem.click();
                }
            }
        } catch (e) {
            //
        }
    }

    // for clicking correct buttons from validcounter
    function clickAddFriendButtons(validCounter) {
        var counter = 0;

        function click() {
            var target = document.getElementsByTagName('a')[validCounter[counter]];
            target.click();
            setTimeout(clickShareNow, 500);
            toastr.success(clicked);
            counter++;
            if (validCounter[counter] != undefined) {
                setTimeout(click,
                    // eslint-disable-next-line no-undef
                    getDelayInMSUsingInterval(delayBeginRange, delayEndRange));
            } else {
                toastr.info(all_clicked);
                // eslint-disable-next-line no-undef
                enableSubmit();
            }
        }

        click();
    }

    //for clicking all active add friend buttons
    function click_all_add_friend_buttons() {
        // eslint-disable-next-line no-undef
        disableSubmit();
        // for storing index values for buttons
        // that can be clicked
        var validCounter = [];
        var button = document.getElementsByTagName("a");
        for (var counter = 0; counter < button.length; counter++) {
            var mat = button[counter].innerText.match(/Share/ig);
            var mat2 = button[counter].href.match(/sharer\.php/ig);
            if (mat && mat2) {
                if (mat[0]) {
                    validCounter.push(counter);
                } else {
                    console.log('stopped');
                }
            } else {
                console.log('stopped');
            }
        }
        console.log("validCounter");
        console.log(validCounter);
        //check if buttons are found
        if (validCounter.length) {
            clickAddFriendButtons(validCounter);
        } else {
            toastr.error(unable_to_find);
            // eslint-disable-next-line no-undef
            enableSubmit();
        }
    }

    // eslint-disable-next-line no-undef
    disableSubmit();
    click_all_add_friend_buttons();
}