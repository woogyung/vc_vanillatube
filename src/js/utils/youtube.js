import $ from 'jquery';

// Youtube API Key를 생성하셔서 넣어주세요!
// https://developers.google.com/youtube/v3/
const YOUTUBE_API_KEY = 'AIzaSyCNZbRIlLt_aJZvPfTGjNibNKE7KXMMSN8';

export const getYouTubeData = function (searchText, cb) {
  $.get({
    url: `https://www.googleapis.com/youtube/v3/search?maxResults=50&part=snippet&q=${searchText}&type=video&key=${YOUTUBE_API_KEY}`,
    success: function (data) {
      cb(null, data);
    },
    error: function (error) {
      cb(error);
    }
  });
};
