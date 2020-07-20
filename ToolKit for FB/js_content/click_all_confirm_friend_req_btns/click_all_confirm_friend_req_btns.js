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
    function acceptSingleClickFinal(){
        var clicked=false;
        var buttons=document.getElementsByTagName("button");
        for(var counter=0; counter<buttons.length; counter++){
            var target=buttons[counter];
            var text=target.innerText.trim();
            if(text=="Confirm"){
                target.click();
                //target.focus();
                clicked=true;
                break;
            }
        }
        if(clicked){
            return true;
        }else{
            return false;
        }
    }

    // for removing invisible add friend buttons from screen
    function removeUnnecessary(){
        $("#fbRequestsFlyout").remove();
        $("#fbRequestsJewel").remove();
    }

    function acceptAllFRequestsFinal() {
        // eslint-disable-next-line no-undef
        disableSubmit();
        if(acceptSingleClickFinal()){
            // some button found and it is clicked
            setTimeout(function(){
                acceptAllFRequestsFinal();
                // eslint-disable-next-line no-undef
            }, getDelayInMSUsingInterval(delayBeginRange, delayEndRange));
            var tmp='"Confirm" button is clicked.';
            toastr.success(tmp);
            if(enableScrolling) {
                // eslint-disable-next-line no-undef
                scrollToBottom();
            }
        }else{
            // no button found it is not clicked
            var tmp2='No "Confirm" buttons found for clicking.';
            toastr.error(tmp2);
            alert(tmp2);
            // eslint-disable-next-line no-undef
            enableSubmit();
        }
    }

    removeUnnecessary();
    // eslint-disable-next-line no-undef
    disableSubmit();
    acceptAllFRequestsFinal();
}