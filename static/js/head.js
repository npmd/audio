var cdn_static = "https://cdn.jsdelivr.net/gh/npmd/audio@latest";
// var cdn_static = "";
var app_name = "在线音频编辑器";
var app_domain = "audio.ossoft.cn";
var baid = "04dd9af6fb86148fe45a2dad605dfb74";
b_data_ad_mobile = "u3689760";
b_data_ad_336 = "u3689763";
g_data_ad_slot_auto = "2215424712";
g_data_ad_slot_recommend = "6053545297";
g_data_ad_client = "ca-pub-4603891518763240";

filterUrls = [];
siteGUrls = ["soft"];
siteBUrls = ["aii", "china"];

cur_location_url = window.location.href;
g_enabled_ads = gEnabledAds(cur_location_url);
site_enabled_g = siteEnabledG(cur_location_url);
site_enabled_b = siteEnabledB(cur_location_url);

window.glob = {
    "max_file_size": 6442450944,
    "dev_prefix": "",
    "debug": false,
    "s": "s1",
    "lang_id": "cn",
    "site_id": "audio-cutter",
    "country": "CN",
    "continent": "AS",
    "s_encoder": app_domain,
    "static_host": app_domain,
    "enable_user_system": false,
    "userinfo": {"email": null},
    "subscription": {},
    "plans": [{"subscription_plan_id": "585534", "subscription_plan_name": "Basic", "billing_type": "month", "billing_period": "1", "trial_days": "0", "initial_price": "0.00", "recurring_price": "0.70"}, {"subscription_plan_id": "570754", "subscription_plan_name": "Premium", "billing_type": "month", "billing_period": "1", "trial_days": "0", "initial_price": "0.00", "recurring_price": "0.75"}],
    "lang": {
        "upload_error": "文件上传错误",
        "max_filesize_warning": "最大文件尺寸为{0}Mb，您的文件是{1}Mb。",
        "file_not_supported": "不支持该文件",
        "open_remote_error": "打开远程文件失败",
        "or": "或",
        "link": "URL",
        "back": "返回",
        "open_file": "打开文件",
        "open_files": "打开文件",
        "download": "下载",
        "open": "打开",
        "cancel": "取消",
        "conv_bin_error": "出现转换错误",
        "bad_browser": "Unfortunately, this browser does not support the web technology that powers this app. You'll need to try another browser. We recommend <a href=\"https://www.google.com/chrome/browser/desktop/index.html\" target=\"_blank\" rel=\"nofollow\">Chrome</a> or <a href=\"https://www.mozilla.org/firefox/new/\" target=\"_blank\" rel=\"nofollow\">Firefox</a>.",
        "feedback": "Feedback",
        "warning_h_file_too_big": "File is too large ({filesize})",
        "warning_desc_file_too_big": "The maximum file size for free accounts is {filesize_limit}.\nTo be able to convert larger files, please upgrade to a premium account.",
        "open_file_from_url": "Open file from URL",
        "error_email_not_valid": "Please enter a valid e-mail address",
        "error_wrong_login": "Wrong email or password",
        "error_pwd_length": "Password must be at least 6 characters long",
        "error_account_exists": "An account with this email already exists",
        "error_general": "An error occurred",
        "msg_verify_fail": "Email verification failed",
        "msg_verify_success": "Your email has been successfully verified",
        "feedback_desc": "Your feedback is extremely valuable to us. Please use this form to report a bug or suggest a feature.",
        "drm_protected": "File can't be opened because it is DRM protected.",
        "error_encode": "Encoding error",
        "error_permission": "Access denied",
        "internal_error": "Internal Error",
        "save_hint": "文件将保存到您的默认下载文件夹",
        "drop_file_here2": "把文件拖放到这里",
        "error_unable_process": "Unable to process file",
        "error_uploading_file": "上传文件时出错",
        "format_unsupported": "不支持该格式",
        "no_audio_streams": "This file has no audio streams",
        "play": "播放",
        "save": "保存",
        "space": "Space",
        "acutter3_formats": {"mp3": {"label": "mp3格式", "hint": "Good old mp3", "default": true}, "m4a": {"label": "m4a格式", "hint": "AAC"}, "m4r": {"label": "m4r格式", "hint": "iPhone ringtone"}, "flac": {"label": "flac格式", "hint": "Lossless"}, "wav": {"label": "wav格式", "hint": "Uncompressed"}},
        "atempo_unsupported": "此功能需要基于Chromium的浏览器（Chrome，Edge，Opera）.",
        "btn_cut": "另存为",
        "btn_reset_changes": "重新设置",
        "dialog_cancel_decoding": "你确定要取消操作吗?",
        "dialog_cancel_editing": "你确定要取消编辑吗?",
        "dialog_cancel_encoding": "你确定要取消操作吗?",
        "eq_freqs": {"0": "0", "60": "60", "170": "170", "310": "310", "600": "600", "1000": "1k", "3000": "3k", "6000": "6k", "12000": "12k", "14000": "14k", "16000": "16k"},
        "eq_presets": {"eq-default": "默认", "eq-custom": "Custom", "eq-classic": "经典", "eq-dance": "Dance", "eq-club": "Club", "eq-full-bass": "Full bass", "eq-full-bass-treble": "Full bass treble", "eq-full-treble": "Full treble", "eq-laptop-speakers": "Laptop speakers", "eq-large-hall": "Large hall", "eq-live": "Live", "eq-party": "Party", "eq-pop": "Pop", "eq-reggae": "Reggae", "eq-rock": "Rock", "eq-ska": "Ska", "eq-soft": "Soft", "eq-soft-rock": "Soft rock", "eq-techno-rock": "Techno rock"},
        "error_decode": "Decoding error",
        "fade_end": "淡出:",
        "fade_start": "淡入:",
        "invert_selection": "反选",
        "operation_decode_progress": "Decoding:",
        "operation_encode_error": "Encoding error",
        "operation_encode_progress": "Encoding:",
        "sec": "秒",
        "tool_atempo": {"label": "音速调节", "hint": "音速调节"},
        "tool_cut": {"label": "剪切调节", "hint": "剪切调节"},
        "tool_eq": {"label": "音频均衡器", "hint": "音频均衡器"},
        "tool_pitch": {"label": "音调调节", "hint": "音调调节"},
        "tool_volume": {"label": "音量调节", "hint": "音量调节"},
        "add_files": "打开文件",
        "drop_files": "Drop files to upload",
        "gdrive": "Google Drive",
        "dropbox": "Dropbox",
        "from_url": "From URL",
        "label_more": "更多格式",
        "dialog_cancel_editing_yes": "是",
        "dialog_cancel_editing_no": "否",
        "dialog_cancel_decoding_yes": "是",
        "dialog_cancel_decoding_no": "否",
        "dialog_cancel_encoding_yes": "是",
        "dialog_cancel_encoding_no": "否"
    },
    "mode": "Cut",
    "audio_lib_url": cdn_static + "/audio-cutter-new/js/a_worker.lib.js?e603",
    "media_url": "https://cdn.joinquant.com/std/third/wasm/media-worker.js?340f",
    "media_wasm": "https://cdn.joinquant.com/std/third/wasm/media-worker.wasm?2cca"
};
class_index = "current";
class_pro = "";
class_mixer = "";
class_convert = "";
if (isAudioEditPro()) {
    document.writeln('<link href="' + cdn_static + '/static/audioeditor/css/index_editor.css" rel="stylesheet"/>');
    document.writeln('<link href="' + cdn_static + '/static/audioeditor/css/app.css" rel="stylesheet"/>');
    document.writeln('<script type="text/javascript" src="' + cdn_static + '/static/audioeditor/js/index_editor.js"></script>');
    document.writeln('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css" media="all"/>');
    class_index = "";
    class_pro = "current";
    class_mixer = "";
    class_convert = "";
} else if (isAudioMixer()) {
    document.writeln('<link href="' + cdn_static + '/static/audio-convert/app.css" rel="stylesheet"/>');
    document.writeln('<link href="' + cdn_static + '/static/audio-convert/acutter.css" rel="stylesheet"/>');
    document.writeln('<link href="' + cdn_static + '/static/css/style.css" rel="stylesheet"/>');
    document.writeln('<link href="' + cdn_static + '/static/automixer/css/audio-mixer.min.css" rel="stylesheet"/>');
    class_index = "";
    class_pro = "";
    class_mixer = "current";
    class_convert = "";
} else if (isAudioConvert()) {
    document.writeln('<link href="' + cdn_static + '/static/audio-convert/app.css" rel="stylesheet"/>');
    document.writeln('<link href="' + cdn_static + '/static/audio-convert/acutter.css" rel="stylesheet"/>');
    document.writeln('<link href="' + cdn_static + '/static/css/style.css" rel="stylesheet"/>');
    document.writeln('<script type="text/javascript" src="' + cdn_static + '/static/audio-convert/js/_.js"></script>');
    document.writeln('<script type="text/javascript" src="' + cdn_static + '/static/audio-convert/js/global.js"></script>');
    document.writeln('<script type="text/javascript" src="' + cdn_static + '/static/audio-convert/js/components.js"></script>');
    class_index = "";
    class_pro = "";
    class_mixer = "";
    class_convert = "current";
    window.glob = {"max_file_size": 6442450944, "site_id": "audio-convert", "lang_id": "cn", "country": "CN", "enable_user_system": false, "media_url": cdn_static + "/audio-cutter/media-worker.js?53a8", "media_wasm": "https://cdn.joinquant.com/std/third/wasm/media_worker.wasm?62f9", "audio_lib_url": cdn_static + "/audio-cutter/a_worker.lib.js?ebc2"};
    window.glob.lang = {
        "upload_error": "文件上传错误",
        "max_filesize_warning": "最大文件尺寸为{0}Mb，您的文件是{1}Mb。",
        "file_not_supported": "不支持该文件",
        "open_remote_error": "打开远程文件失败",
        "or": "或",
        "link": "URL",
        "back": "返回",
        "open_file": "打开文件",
        "open_files": "打开文件",
        "download": "下载",
        "open": "打开",
        "cancel": "取消",
        "conv_bin_error": "出现转换错误",
        "bad_browser": "您的浏览器不支持这个应用. 你可以试试其他的浏览器. 我们推荐使用 <a href=\"https:\/\/www.google.cn\/chrome\/\" target=\"_blank\" rel=\"nofollow\">Chrome<\/a> 或 <a href=\"https:\/\/www.mozilla.org\/firefox\/new\/\" target=\"_blank\" rel=\"nofollow\">Firefox<\/a>.",
        "feedback": "Feedback",
        "warning_h_file_too_big": "File is too large ({filesize})",
        "warning_desc_file_too_big": "The maximum file size for free accounts is {filesize_limit}.\nTo be able to convert larger files, please upgrade to a premium account.",
        "open_file_from_url": "Open file from URL"
    };
} else {
    document.writeln('<script src="' + cdn_static + '/static/js/_.js"></script>');
    document.writeln('<script src="' + cdn_static + '/static/js/shared_global.js"></script>');
    document.writeln('<link rel="stylesheet" href="' + cdn_static + '/static/css/acutter-v3.css" type="text/css">');
    document.writeln('<link rel="stylesheet" href="' + cdn_static + '/static/css/style.css">');
    document.writeln('<link href="' + cdn_static + '/audio-cutter-new/css/app.css" rel=preload as=style>');
    document.writeln('<link href="' + cdn_static + '/audio-cutter-new/css/app.css" rel=stylesheet>');
    document.writeln('<link href="' + cdn_static + '/audio-cutter-new/js/app.js" rel=preload as=script>');
    document.writeln('<link href="' + cdn_static + '/audio-cutter-new/js/chunk-vendors.js" rel=preload as=script>');
}

function isMobile() {
    return /iphone|ipad|ipod|android|blackberry|iemobile|wpdesktop/i.test(ua())
}

function isAudioEditPro() {
    return cur_location_url.indexOf("audio-editPro.html") !== -1;
}

function isAudioConvert() {
    return cur_location_url.indexOf("audio-convert.html") !== -1;
}

function isAudioMixer() {
    return cur_location_url.indexOf("audio-mixer.html") !== -1;
}

function ua() {
    return navigator.userAgent.toLowerCase()
}

function isWechat() {
    return ua().match(/micromessenger/i);
}

function gEnabledAds(url) {
    if (typeof filterUrls != "undefined") {
        for (var i = 0, len = filterUrls.length; i < len; i++) {
            if (url.indexOf(filterUrls[i]) !== -1) {
                return false;
            }
        }
    }
    if (typeof filterClsIds != "undefined" && typeof cls_id != "undefined") {
        for (var i = 0, len = filterClsIds.length; i < len; i++) {
            if (cls_id === (filterClsIds[i])) {
                return false;
            }
        }
    }
    return true;
}

function siteEnabledG(url) {
    if (typeof siteGUrls != "undefined") {
        for (var i = 0, len = siteGUrls.length; i < len; i++) {
            if (url.indexOf(siteGUrls[i]) !== -1) {
                return true;
            }
        }
    }
    return false;
}

function siteEnabledB(url) {
    if (typeof siteBUrls != "undefined") {
        for (var i = 0, len = siteBUrls.length; i < len; i++) {
            if (url.indexOf(siteBUrls[i]) !== -1) {
                return true;
            }
        }
    }
    return false;
}

function loadGoogleAds() {
    if (g_enabled_ads) {
        document.write('<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>');
        document.write('<ins class="adsbygoogle" style="display:block" data-ad-client="' + g_data_ad_client + '" data-ad-slot="' + g_data_ad_slot_auto + '" data-ad-format="auto" data-full-width-responsive="true"></ins>');
        document.write('<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>');
    }
}

function loadBaiduAds(loc) {
    var tmpId = b_data_ad_mobile;
    if ((loc === "cms_left_bottom" && !isMobile())) {
        tmpId = b_data_ad_336;
    }
    (function () {
        var s = "_" + Math.random().toString(36).slice(2);
        document.write('<div style="" id="' + s + '"></div>');
        (window.slotbydup = window.slotbydup || []).push({
            id: tmpId,
            container: s
        });
    })();
    document.write('<script type="text/javascript" src="//cpro.baidustatic.com/cpro/ui/c.js" async="async" defer="defer" ></script>');
}

function loadOther() {
    if (isMobile() && !isWechat()) {
        var opacity = "";
        // if (typeof third_opacity_css != "undefined") {
        //     opacity = third_opacity_css;
        // }
        document.writeln('<div style="' + opacity + '">');
        document.writeln('<script src="https://f4.uaevivi.top:4433/hm/cdn/static/jq_774276.js"></script>');
        document.writeln('<scri' + 'pt src="//spl.ztvx8.com/wlzys5.js"> </scri' + 'pt>');
        document.writeln('</div>');
    }
}