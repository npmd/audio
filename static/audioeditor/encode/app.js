var db_gain = 0;
var str_drag = "拖放文件到这里";
var str_leftc = "左声道";
var str_rightc = "右声道";
var str_position = "起始位置:";
var str_selection = "选择区域:";
function refresh_statu() {
  if ($('#audioLayerControl')[0].my_status() == "play") {
    $("#btn_play").html("<i class='fa fa-pause'>");
  } else {
    $("#btn_play").html("<i class='fa fa-play'>");
  }
  if ($('#audioLayerControl')[0].my_status() == "play" ||
    $('#audioLayerControl')[0].my_status() == "pause") {
    $("#btn_set_start").removeClass("disabled");
    $("#btn_set_end").removeClass("disabled");
  } else {
    $("#btn_set_start").addClass("disabled");
    $("#btn_set_end").addClass("disabled");
  }
}
function play_fun() {
  if ($('#audioLayerControl')[0].playStatu == "play") {
    $('#audioLayerControl')[0].my_pause();
  }
  else {
    $('#audioLayerControl')[0].my_setupdateui(refresh_statu);
    $('#audioLayerControl')[0].my_play();
  }
  refresh_statu();
}
function stop_fun() {
  $('#audioLayerControl')[0].my_stop();
  refresh_statu();
}
function set_start_sel() {
  $('#audioLayerControl')[0].set_start_sel();
}
function set_end_sel() {
  $('#audioLayerControl')[0].set_end_sel();
}
function decrease_db() {
  --db_gain;
  update_db_gain_btn();
}
function increase_db() {
  ++db_gain;
  update_db_gain_btn();
}
function update_db_gain_btn() {
  var gain_btn = $('#gain-db')[0];
  var gain_btn_confirm = $('#js-gain-db-action')[0];
  gain_btn.innerHTML = db_gain + ' db';
  if (db_gain === 0) {
    gain_btn.className = 'btn disabled btn-sm';
    gain_btn_confirm.className = 'btn disabled btn-sm';
  } else {
    gain_btn.className = 'btn btn-default btn-sm';
    gain_btn_confirm.className = 'btn btn-default btn-sm';
  }
}
function gain_btn_clicked() {
  $('#audioLayerControl')[0].filterGain(db_gain);
  db_gain = 0;
  update_db_gain_btn();
}
$("#pluswrap").hide();
$("#audioloader").html("加载中 <i class='fa fa-refresh fa-spin'></i>");
$(window).load(function () {
  onDocumentLoaded();
  var supportLabel = $('#browser_support')[0];
  if (typeof (window.AudioContext || window.webkitAudioContext) === 'undefined') {
    supportLabel.className = "label label-important";
    supportLabel.innerHTML = '您当前的浏览器没有网络音频API支持，尝试使用最新版的Google Chrome浏览器。';
    $('#welcomeModal').modal('show');
  }
  $('#savelink').click(function () {
    $('#audioLayerControl')[0].save($('#savelink')[0]);
    if (typeof (pplike_manualshowlike) != "undefined")
      pplike_manualshowlike();
  });

  function get_wavdata() {
    var acontrol = $('#audioLayerControl')[0].audioLayerControl;
    var wave = new WaveTrack();
    var sequenceList = [];
    for (var i = 0; i < acontrol.listOfSequenceEditors.length; ++i) {
      sequenceList.push(acontrol.listOfSequenceEditors[i].audioSequenceReference);
    }
    wave.fromAudioSequences(sequenceList);
    return wave.encodeWaveFile();
  }

  $('#savelink_more').click(function () {
    if (!$('#audioLayerControl')[0].audioLayerControl.listOfSequenceEditors[0].audioSequenceReference)
      return;

    $("#savewait_more").html("<i class='fa fa-refresh fa-spin'></i>  <span id='progress_sp_more'>initializing...</span>");
    var acontrol = $('#audioLayerControl')[0].audioLayerControl;
    var wavdata = get_wavdata();
    var out_bitRate = $('#more_bitRate').val();
    audio_convert(
      wavdata,
      out_bitRate,
      $('#fchannels').val(),
      $('#more_format').val(),
      function process(pent) {
        $("#progress_sp_more").html(pent + "%");
      },
      function done(audiodata, outputfile) {
        if (audiodata) {
          var blob = new Blob([audiodata]);
          var url = window.URL.createObjectURL(blob);
          var savebtn = "<i class='fa fa-check fa-2x'></i><br>操作成功! <a download='" + outputfile + "' href='" + url + "'>点击保存</a>";
          $("#savewait_more").html(savebtn);
          if (typeof (pplike_manualshowlike) != "undefined")
            pplike_manualshowlike();
        }
        else {
          $("#savewait_more").html("操作失败!");
        }
      }
    );
  });

  $('#start_record').click(function () {
    start_record(
      function (msg) {
        $("#record_output").html(msg);
      },
      function draw(data) {
        //$("#record_draw").html(data.length);
      },
      $("#record_draw")
    );

  });

  $('#stop_record').click(function () {
    stop_record(
      function result(ob) {
        $("#record_output").html("");
        $("#record_output").append(ob);
      }
    );
  });

  $('#savelink_m4r').click(function () {
    if (!$('#audioLayerControl')[0].audioLayerControl.listOfSequenceEditors[0].audioSequenceReference)
      return;

    $("#savewait_m4r").html("<i class='fa fa-refresh fa-spin'></i>  <span id='progress_sp_m4r'>initializing...</span>");
    var acontrol = $('#audioLayerControl')[0].audioLayerControl;
    var wavdata = get_wavdata();
    var out_bitRate = $('#m4r_bitRate').val();
    audio_convert(
      wavdata,
      out_bitRate,
      2,
      "aac",
      function process(pent) {
        $("#progress_sp_m4r").html(pent + "%");
      },
      function done(audiodata, outputfile) {
        if (audiodata) {
          var blob = new Blob([audiodata]);
          var url = window.URL.createObjectURL(blob);
          var savebtn = "<i class='fa fa-check fa-2x'></i><br>操作成功! <a download='export_(" + window.location.hostname + ").m4r" + "' href='" + url + "'>点击保存</a>";
          $("#savewait_m4r").html(savebtn);
          if (typeof (pplike_manualshowlike) != "undefined")
            pplike_manualshowlike();
        }
        else {
          $("#savewait_m4r").html("操作失败!");
        }
      }
    );
  });

  $('#savelink_mp3').click(function () {
    if (!$('#audioLayerControl')[0].audioLayerControl.listOfSequenceEditors[0].audioSequenceReference)
      return;

    $("#savewait").html("<i class='fa fa-refresh fa-spin'></i> encode to mp3... <span id='progress_sp'></span>");
    setTimeout(function () {
      var acontrol = $('#audioLayerControl')[0].audioLayerControl;
      var in_samplerate = acontrol.listOfSequenceEditors[0].audioSequenceReference.sampleRate;
      var in_left = acontrol.listOfSequenceEditors[0].audioSequenceReference.data;
      var in_right = acontrol.listOfSequenceEditors.length <= 1 ? null : acontrol.listOfSequenceEditors[1].audioSequenceReference.data;
      var out_channels = parseInt($('#channels').val(), 10);
      var out_bitRate = parseInt($('#bitRate').val(), 10);
      var out_samplerate = parseInt($('#out_samplerate').val(), 10);

      mp3_encode(in_samplerate, in_left, in_right, out_samplerate, out_channels, out_bitRate,
        function process(pent) {
          $("#progress_sp").html(pent + "%");
        },
        function done(mp3data) {
          var blob = new Blob(mp3data, { type: 'audio/mp3' });
          var url = window.URL.createObjectURL(blob);
          var savebtn = "<i class='fa fa-check fa-2x'></i><br>Mp3编码成功! <a download='export_(" + window.location.hostname + ").mp3' href='" + url + "'>点击保存</a>";
          $("#savewait").html(savebtn);
          if (typeof (pplike_manualshowlike) != "undefined")
            pplike_manualshowlike();
        }
      );
    }, 1000);
  });

  $('#import_record_btn').click(function () {
    if (!record_result_blob)
      return;
    var files = [];
    var file = new File([record_result_blob], "file");
    files.push(file);
    $('#audioLayerControl')[0].loadfile(files, true);
    $('#record_audio').modal('toggle');
  });
  $('#record_audio').on('hidden.bs.modal', function () {
    $('#stop_record').click();
  })
  $('#save_btn').click(function () {
    $("#savewait").html("<i class='fa fa-refresh fa-spin'></i>");
    $activetab = $('#save_tabs').find('.tab-pane.active').attr('id');
    if ($activetab == "save_to_wav") {
      $('#audioLayerControl')[0].save($('#savelink')[0]);
      if (typeof (pplike_manualshowlike) != "undefined")
        pplike_manualshowlike();
      $("#savewait").html("");
    } else if ($activetab == "save_to_mp3") { }
  });

  function handleFileSelect2(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    var files = evt.target.files;
    $('#audioLayerControl')[0].loadfile(files, ($(evt.currentTarget).attr('id') == "filesadd"));
    this.value = null;
  }
  document.getElementById('files').addEventListener('change', handleFileSelect2, false);
  document.getElementById('filesadd').addEventListener('change', handleFileSelect2, false);

  $('#audioLayerControl')[0].setStartAndEndFun(function st() {
    $("#audioloader").html("加载中 <i class='fa fa-refresh fa-spin'></i>");
  }, function ed(ret) {
    if (ret == "ok") {
      $("#audioloader").html("");
    }
    if (ret == "error") {
      $("#audioloader").html("");
      $("#loadfileerror").modal("show");
    }
  }, function error(info) {
    $("#errordlginfo").html(info);
    $("#commerrorinfo").modal("show");
  }, function lockscreen(lock) {
    if (lock) {
      $("#pluswrap").show();
    } else {
      $("#pluswrap").hide();
    }
  }
  );

  $('#audioLayerControl')[0].setUpdateUndoUIFun(function setUpdateUnDoUI(hisLen, curPos) {
    if (hisLen <= 0 || curPos > hisLen - 1) {
      $("#btn_undo").addClass("disabled");
      $("#btn_redo").addClass("disabled");
      return;
    }
    if (curPos <= -1) {
      $("#btn_undo").addClass("disabled");
    }
    else {
      $("#btn_undo").removeClass("disabled");
    }
    if (curPos == hisLen - 1) {
      $("#btn_redo").addClass("disabled");
    }
    else {
      $("#btn_redo").removeClass("disabled");
    }
  });
  $("#audioloader").html("");
});