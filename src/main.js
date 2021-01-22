FBInstant.initializeAsync().then(function () {

  FBInstant.setLoadingProgress(100);

  FBInstant.startGameAsync().then(function () {
    var Bomberman = Bomberman || {};

    var game = new Phaser.Game(240, 240, Phaser.CANVAS);
    game.state.add("BootState", new Bomberman.BootState());
    game.state.add("LoadingState", new Bomberman.LoadingState());
    game.state.add("TiledState", new Bomberman.TiledState());
    game.state.start("BootState", true, false, "assets/levels/level1.json", "TiledState");
  })
});
