import Phaser from 'phaser'

FBInstant.initializeAsync().then(function() {

  var config = {
      type: Phaser.AUTO,
      width: window.innerWidth,
      height: window.innerHeight
  };

  new Phaser.Game(config);

});