var unable_to_find = "Unable to find add friend buttons.";
var addFriendBtnclicked = "Add friend button is clicked.";
var all_clicked = 'All add friend buttons are clicked.';

// for removing invisible add friend buttons from screen
function removeUnnecessary() {
    $("#fbRequestsFlyout").remove();
    $("#fbRequestsJewel").remove();
    // eslint-disable-next-line no-undef
    removeParentOfClassName('FriendRequestFriends');
    // eslint-disable-next-line no-undef
    removeParentOfClassName('enableFriendListFlyout', 'hidden_elem');
}

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

    //
    //
    //  For clicking using algorithm 1 start
    //
    //
    // final function for clicking
    function startClickAlgo1Final() {
        var clicked = false;
        var buttons = document.getElementsByTagName("button");
        for (var counter = 0; counter < buttons.length; counter++) {
            var target = buttons[counter];
            var text = target.innerText.trim();
            if (text == "Add Friend") {
                target.click();
                //target.focus();
                clicked = true;
                target.remove();
                break;
            }
        }
        if (clicked) {
            return true;
        } else {
            return false;
        }
    }

    function startClickAlgo1() {
        removeUnnecessary();
        // eslint-disable-next-line no-undef
        autoClickConfirm();
        if (enableScrolling) {
            // eslint-disable-next-line no-undef
            scrollToBottom();
        }
        // eslint-disable-next-line no-undef
        disableSubmit();
        if (startClickAlgo1Final()) {
            toastr.success(addFriendBtnclicked);
            // some button found and it is clicked
            setTimeout(function () {
                startClickAlgo1();
                // eslint-disable-next-line no-undef
            }, getDelayInMSUsingInterval(delayBeginRange, delayEndRange));
        } else {
            // no button found it is not clicked
            var tmp2 = 'No "Add Friend" buttons found for clicking.';
            toastr.error(tmp2);
            alert(tmp2);
            // eslint-disable-next-line no-undef
            enableSubmit();
        }
    }

    // eslint-disable-next-line no-undef
    disableSubmit();
    removeUnnecessary();
    startClickAlgo1();
}

// eslint-disable-next-line no-unused-vars
function clickNowAlgo2(enableScrolling, delayBeginRange, delayEndRange) {
    //
    //
    //  For clicking using algorithm 2 start
    //
    //
    //for clicking correct buttons from validcounter
    function clickAddFriendButtons(validCounter) {
        var counter = 0;

        function click() {
            // eslint-disable-next-line no-undef
            autoClickConfirm();
            if (enableScrolling) {
                // eslint-disable-next-line no-undef
                scrollToBottom();
            }
            var target = document.getElementsByTagName('button')[validCounter[counter]];
            target.click();
            toastr.success(addFriendBtnclicked);
            counter++;
            if (validCounter[counter] != undefined) {
                // eslint-disable-next-line no-undef
                setTimeout(click, getDelayInMSUsingInterval(delayBeginRange, delayEndRange));
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
        var button = document.getElementsByTagName("button");
        for (var counter = 0; counter < button.length; counter++) {
            var mat = button[counter].innerText.match(/add friend/ig);
            if (mat) {
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
    removeUnnecessary();
    click_all_add_friend_buttons();
}