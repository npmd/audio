document.writeln('<script src="' + cdn_static + '/audio-cutter-new/js/chunk-vendors.js"></script>');
document.writeln('<script src="' + cdn_static + '/audio-cutter-new/js/app.js?a25b"></script>');
window.addEventListener('saveClicked', function (e) {
    var saveClicked_count = _.getCookie('saveClicked') || 0;
    saveClicked_count++;
    if (saveClicked_count == 2 || saveClicked_count == 10) {
        window.Feedback.show(window.glob.lang.feedback, window.glob.lang.feedback_desc)
    }
    _.setCookie('saveClicked', saveClicked_count, 60 * 60 * 24 * 365)
});