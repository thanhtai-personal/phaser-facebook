FBInstant.initializeAsync().then(function() {
    console.log('finish initializeAsync')
    var config = {
        type: Phaser.CANVAS,
        width: 800,
        height: 600,
        backgroundColor: '#222448',
        scene: [ Preloader, GameShare ]
    };
    new Phaser.Game(config);
}, function(error) {
    console.log('error', error)
});
