class Video {

    constructor(selector, videoUrl){
        this.selector = selector;
        this.videoUrl = videoUrl;
    }

    render(){
        var mainSection = document.getElementById(this.selector);
        mainSection.innerHTML = `
      <video width="600" height="600">
        <source src=${this.videoUrl} type="video/mp4" />
      </video>
      <button id="playStop">Play/Stop</button>
      <input value = "0" type = "range" min = "0" max ="1">
      `;
        this.video = mainSection.querySelector('video');

        //mainSection.innerHTML += `<input value = "0" type = "range" min = "0" max =${this.video.duration}>`;

        this.range = document.querySelector('input');
        this.range.value = 0;
        this.range.max = this.video.duration;

        this.video.addEventListener('timeupdate', () => {
            console.log(this.video.currentTime)

        this.range.value = this.video.currentTime;
    });
        this.clickHandler();
    }

    clickHandler(){
        // var video = document.querySelector('video');
        this.video.addEventListener('pause', () => {this.video.pause()});
        this.video.addEventListener('play', () => {this.video.play()});


        document.getElementById("playStop").addEventListener('click', () => {
            if(this.video.paused){
            this.video.play();
        } else{
            this.video.pause();
        }
    });

    }
}

export default Video;


