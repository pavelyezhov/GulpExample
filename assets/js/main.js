import Video from './client';

var url = "https://s3-eu-west-1.amazonaws.com/onrewind-test-bucket/big_buck_bunny.mp4";
var selector = 'main';
var videoSection = new Video(selector, url);
videoSection.render();