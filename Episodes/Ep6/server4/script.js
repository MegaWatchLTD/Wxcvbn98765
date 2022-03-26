const playerInstance = jwplayer("player").setup({
  controls: true,
  displaytitle: false,
  fullscreen: "true",
  primary: "html5",
  stretching: "uniform",
  aspectratio: "16:9",
  renderCaptionsNatively: false,
  autostart: false,
  abouttext: "Creator Website",
  aboutlink: "https://www.fb.com/ArabyMovies",

  skin: {
    name: "netflix"
  },

  logo: {
    file: "../../../../logo.png"
  },

      playlist: [
        ,
        {        
        title: "Harga Ep06",
        description: "Harga Ep06",
        image: "thumbnail.jpg",
        sources: [{
        file: "https://www.googleapis.com/drive/v3/files/16Tee50A7KzoiCjMdx47nQy72560XnABS?alt=media&key=AIzaSyC7ER8X6eaQjZSrc33tPdo3eDS5UDVhWbA&v=.mp4",
          label: '1080p',
          'type': 'mp4',
          primary: 'html5',

        },{
         file: "https://www.googleapis.com/drive/v3/files/16Tee50A7KzoiCjMdx47nQy72560XnABS?alt=media&key=AIzaSyC7ER8X6eaQjZSrc33tPdo3eDS5UDVhWbA&v=.mp4",
          label: '720p',
          'type': 'mp4',
          primary: 'html5',
        },{
         file: "https://www.googleapis.com/drive/v3/files/16Tee50A7KzoiCjMdx47nQy72560XnABS?alt=media&key=AIzaSyC7ER8X6eaQjZSrc33tPdo3eDS5UDVhWbA&v=.mp4",
          label: '480p',
          'type': 'mp4',
          primary: 'html5',
        }],

        
      }//end of movies
      ]
    });

playerInstance.on("ready", function () {
  // Move the timeslider in-line with other controls
  const playerContainer = playerInstance.getContainer();
  const buttonContainer = playerContainer.querySelector(".jw-button-container");
  const spacer = buttonContainer.querySelector(".jw-spacer");
  const timeSlider = playerContainer.querySelector(".jw-slider-time");
  buttonContainer.replaceChild(timeSlider, spacer);
});

jwplayer("container").setCaptions({
  "back": true,
  "backgroundOpacity": "32",
  "edgeStyle": "dropshadow",
  "fontSize": 14,
  "fontOpacity": 100,
  "fontScale": 0.05,
  "windowOpacity": 0,
  "color": "#ffff00"
});