(function(win) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var tid;

    function refreshRem() {
        alert(aaaa)
        var width = docEl.getBoundingClientRect().width;
        var rem = width / 6.4; // 将屏幕宽度分成6.4份， 1份为1rem
        docEl.style.fontSize = rem + 'px';
        //remrrr
//minglinghang
        // console.log(0.14*rem);
    }

    win.addEventListener('resize', function() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 10);
    }, false);
    win.addEventListener('pageshow', function(e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 10);
        }
    }, false);

    refreshRem();

})(window);