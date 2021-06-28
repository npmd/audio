document.writeln('<div class="root_padding">\n' +
    '        <div class="menu"></div>\n' +
    '        <div class="copyright" id="copyright">\n' +
    '            Copyright © 2013-2021 <strong><a href="/" target="_blank">' + app_name + '</a></strong>&nbsp;\n' +
    '            <strong><a href="/" target="_blank">' + app_domain + '</a></strong> All Rights Reserved. 备案号：<a target="_blank" rel="nofollow" href="https://beian.miit.gov.cn/">皖ICP备13004748号-3</a>\n' +
    '        </div>\n' +
    '        <div id="lang_link" href="#"></div>\n' +
    '    </div>')

document.writeln('<script src="' + cdn_static + '/static/js/analysis.js"></script>')

loadJs("5cb6ecc1cef2aab2");

function loadJs(id) {
    setTimeout(function () {
        (function () {
            var d = document, s = d.createElement('script');
            s.src = '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-' + id;
            (d.head || d.body).appendChild(s);
        })();
    }, 3000);
}