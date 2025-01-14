'use strict';
/*
	This video player only supports 3 formats of video. (m4v, ovg, webmv)
*/

(function ($) {
  var videos = [{
    title: "Oba Olulana By IjoBukky Gospel Bata ",
    m4v: "video-files/3.mp4",
    ogv: "",
    webmv: "",
    poster: "img/videos/poster/1.jpg",
    thumb: "img/videos/thumbs/2.jpg",
    duration: "1:00",
    views: "2,347k"
  }, {
    title: "Apostle Elijah Akintunde OLORUNKOSOBE",
    m4v: "video-files/4.mp4",
    ogv: "",
    webmv: "",
    poster: "img/videos/poster/1.jpg",
    thumb: "img/videos/thumbs/1.jpg",
    duration: "1:00",
    views: "2,347k"
  }, {
    title: "IjoBukky Gospel Bata Ministration",
    m4v: "video-files/1.mp4",
    ogv: "",
    webmv: "",
    poster: "img/videos/poster/1.jpg",
    thumb: "img/videos/thumbs/3.jpg",
    duration: "0:58",
    views: "2,347k"
  }, {
    title: "IjoBukky Gospel Bata Ministration",
    m4v: "video-files/2.mp4",
    ogv: "",
    webmv: "",
    poster: "img/videos/poster/1.jpg",
    thumb: "img/videos/thumbs/4.jpg",
    duration: "1:00",
    views: "2,347k"
  }, 
  {
    title: "IjoBukky Gospel Bata Ministration",
    m4v: "",
    ogv: "",
    webmv: "video-files/3.mp4",
    poster: "img/videos/poster/1.jpg",
    thumb: "img/videos/thumbs/5.jpg",
    duration: "1:00",
    views: "2,347k"
  }
];
  var videos_list = [];
  videos.forEach(function (el, key) {
    videos_list.push({
      title: el.title,
      m4v: el.m4v,
      ogv: el.ogv,
      webmv: el.webmv,
      poster: el.poster
    });
  });
  new jPlayerPlaylist({
    jPlayer: "#jquery_jplayer_1",
    cssSelectorAncestor: "#jp_container_1"
  }, videos_list, {
    swfPath: "../../dist/jplayer",
    supplied: "webmv, ogv, m4v, mp4, oga, mp3",
    useStateClassSkin: true,
    autoBlur: false,
    smoothPlayBar: true,
    keyEnabled: true,
    audioFullScreen: true,
    loadeddata: function loadeddata() {
      $('.video-title').text(" ");
      var playlist = document.querySelectorAll('.video-playlist > ul > li');
      playlist.forEach(function (el, key) {
        var markup_1 = "\n\t\t\t\t<div class=\"video-list-item\">\n\t\t\t\t\t<div class=\"vli-left\">\n\t\t\t\t\t\t<img src=\"" + videos[key].thumb + "\" alt=\"\">\n\t\t\t\t\t\t<div class=\"video-time\">" + videos[key].duration + "</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"vli-right\">\n\t\t\t\t\t\t<h6>" + videos[key].title + "</h6>\n\t\t\t\t\t\t<p><i class=\"fa fa-play\"></i>" + videos[key].views + "</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>";
        el.childNodes[0].childNodes[1].innerHTML = "";
        el.childNodes[0].childNodes[1].innerHTML += markup_1;
      });
      var titleText = $(".video-playlist .jp-playlist-item.jp-playlist-current h6").text();
      $('.video-title').text(titleText);
      $(".video-playlist").niceScroll({
        cursorborder: "",
        cursorcolor: "#cdccd1",
        background: "#585365",
        cursorborderradius: 0,
        boxzoom: false
      });
    }
  });
})(jQuery);