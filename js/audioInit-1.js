'use strict';

(function ($) {
  var songs = [{
    title: "Medly",
    artist_name: "Ijobukky Gospel Bata",
    mp3: "music-files/1.mp3",
    thumb: "img/track-thumbs/2.jpg",
    length: 3.16,
    platform_url: {
      amazon: "#",
      spotify: "#",
      itunes: "#",
      soundcloud: "#"
    }
  }, {
    title: "Bata medly",
    artist_name: "IjoBukky Gospel Bata",
    mp3: "music-files/2.mp3",
    thumb: "img/track-thumbs/1.jpg",
    length: 3.16,
    platform_url: {
      amazon: "#",
      spotify: "#",
      itunes: "#",
      soundcloud: "#"
    }
  }, {
    title: "Happy New Month",
    artist_name: "Apostle Niyi Peter's",
    mp3: "music-files/3.mp3",
    thumb: "img/track-thumbs/7.jpeg",
    length: 3.16,
    platform_url: {
      amazon: "#",
      spotify: "#",
      itunes: "#",
      soundcloud: "#"
    }
  }, {
    title: "O Di Irorun",
    artist_name: "Apostle Niyi Peter's",
    mp3: "music-files/4.mp3",
    thumb: "img/track-thumbs/8.jpeg",
    length: 3.16,
    platform_url: {
      amazon: "#",
      spotify: "#",
      itunes: "#",
      soundcloud: "#"
    }
  }, {
    title: "Eto Rere Loni Funmi",
    artist_name: "IjoBukky Gospel Bata",
    mp3: "music-files/1.mp3",
    thumb: "img/track-thumbs/3.jpg",
    length: 3.16,
    platform_url: {
      amazon: "#",
      spotify: "#",
      itunes: "#",
      soundcloud: "#"
    }
  }, {
    title: "Oba Alase",
    artist_name: "IjoBukky Gospel Bata",
    mp3: "music-files/2.mp3",
    thumb: "img/track-thumbs/4.jpg",
    length: 3.16,
    platform_url: {
      amazon: "#",
      spotify: "#",
      itunes: "#",
      soundcloud: "#"
    }
  }, {
    title: "Oba Ayin Yintan",
    artist_name: "IjoBukky Gospel Bata",
    mp3: "music-files/3.mp3",
    thumb: "img/track-thumbs/5.jpg",
    length: 3.16,
    platform_url: {
      amazon: "#",
      spotify: "#",
      itunes: "#",
      soundcloud: "#"
    }
  }];
  var songs_list = [];
  songs.forEach(function (el, key) {
    songs_list.push({
      mp3: el.mp3,
      title: el.title
    });
  });
  new jPlayerPlaylist({
    jPlayer: "#jquery_jplayer_2",
    cssSelectorAncestor: "#jp_container_2"
  }, songs_list, {
    swfPath: "./",
    supplied: "oga, mp3",
    wmode: "window",
    useStateClassSkin: true,
    autoBlur: false,
    smoothPlayBar: true,
    keyEnabled: true,
    loadeddata: function loadeddata() {
      $('.player_social').remove();
      $('.track-info').text(" ");
      var playlist = document.querySelectorAll('.audio-playlist > ul > li');
      playlist.forEach(function (el, key) {
        var markup_1 = "\n\t\t\t\t<div class=\"list-left\" data-songthumb=\"" + songs[key].thumb + "\">\n\t\t\t\t\t<h6>" + songs[key].title + "</h6>\n\t\t\t\t\t<p>" + songs[key].artist_name + "</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"player_social\">\n\t\t\t\t\t<a href=\"" + songs[key].platform_url.amazon + "\"><i class=\"fa fa-amazon\"></i></a>\n\t\t\t\t\t<a href=\"" + songs[key].platform_url.spotify + "\"><i class=\"fa fa-spotify\"></i></a>\n\t\t\t\t\t<a href=\"" + songs[key].platform_url.itunes + "\"><i class=\"fa fa-apple\"></i></a>\n\t\t\t\t\t<a href=\"" + songs[key].platform_url.soundcloud + "\"><i class=\"fa fa-soundcloud\"></i></a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"list-right\">\n\t\t\t\t\t<h6>" + songs[key].length + "</h6>\n\t\t\t\t</div>";
        el.childNodes[0].childNodes[1].innerHTML = "";
        el.childNodes[0].childNodes[1].innerHTML += markup_1;
      });
      $(".audio-playlist > ul > li ").each(function (e) {
        $(this).find('.player_social').appendTo($(this));
      });
      $(".audio-playlist .jp-playlist-item.jp-playlist-current .list-left").children().clone().appendTo('.track-info');
      var currentThumb = $('.jp-playlist-current .list-left').data('songthumb');
      $('#player__thumb').css('background-image', 'url(' + currentThumb + ')');
    }
  });
})(jQuery);