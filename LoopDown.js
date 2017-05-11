// javascript:
(function () {
    if ((window.location.host).toLowerCase() != 'www.Looperman.com'.toLowerCase()) {
        alert('Please use Loopdown on a valid "www.Looperman.com" page!');
        return;
    }

    if (!($ = window.jQuery)) {
        var script = document.createElement('script');
        script.src = 'https://code.jquery.com/jquery-3.1.1.min.js';
        script.onload = addDownload();
        document.body.appendChild(script);
    }

    function addDownload() {
        $('div.player-wrapper').each(function (count, wrapper) {
            var audio = $(wrapper).find('div.jp-jplayer > audio');
            var button = $(wrapper).find('div.jp-audio > div.player-bottom > a.btn-download');
            button.attr({
                'href': audio.attr('src'),
                'onclick': null
            });
        });
    }

    addDownload();
})();
