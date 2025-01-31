FBInstant.initializeAsync().then(function () {

  FBInstant.setLoadingProgress(100);

  FBInstant.startGameAsync().then(function () {
    // The game config that is used by Phaser
    var config = {
      type: Phaser.AUTO,
      parent: 'phaser-example',
      width: 800,
      height: 600,
      scene: {
        preload: preload,
        create: create
      }
    };

    // Create a new Phaser Game object
    var game = new Phaser.Game(config);

    function preload () {

      var progressBar = this.add.graphics();
      var progressBox = this.add.graphics();
      progressBox.fillStyle(0x222222, 0.8);
      progressBox.fillRect(240, 270, 320, 50);

      var width = this.cameras.main.width;
      var height = this.cameras.main.height;
      var loadingText = this.make.text({
          x: width / 2,
          y: height / 2 - 50,
          text: 'Loading...',
          style: {
              font: '20px monospace',
              fill: '#ffffff'
          }
      });
      loadingText.setOrigin(0.5, 0.5);

      var percentText = this.make.text({
        x: width / 2,
        y: height / 2 - 5,
        text: '0%',
        style: {
            font: '18px monospace',
            fill: '#ffffff'
        }
      });
      percentText.setOrigin(0.5, 0.5);

      var assetText = this.make.text({
        x: width / 2,
        y: height / 2 + 50,
        text: '',
        style: {
            font: '18px monospace',
            fill: '#ffffff'
        }
      });
      assetText.setOrigin(0.5, 0.5);

      this.load.on('progress', function (value) {
        console.log(value);
        progressBar.clear();
        progressBar.fillStyle(0xffffff, 1);
        progressBar.fillRect(250, 280, 300 * value, 30);
        percentText.setText(parseInt(value * 100) + '%');
      });

      this.load.on('fileprogress', function (file) {
        console.log(file.src);
        assetText.setText('Loading asset: ' + file.key);
      });

      this.load.on('complete', function () {
        console.log('complete');
        progressBar.destroy();
        progressBox.destroy();
        loadingText.destroy();
        percentText.destroy();
        assetText.destroy();
      });

      this.load.image('logo', 'src/assets/images/hcmuslogo.jpg');
      for (var i = 0; i < 5000; i++) {
          this.load.image('logo'+i, 'src/assets/images/hcmuslogo.jpg');
      }
    }

    function create () {
      var logo = this.add.image(400, 300, 'logo');
    }
  });

});
