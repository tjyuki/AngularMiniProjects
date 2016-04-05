angular.module("userProfiles")
  .service("mainService" function(){

    this.reallyLike = [];
    this.kindaLike = [];

    this.addNewArtist = function(artistObj) {

      if(artistObj.rating >= 80) {
        var artist = buildArtist(artistObj.name, artistObj.genre, artistObj.rating)
        this.reallyLike.push(artist);
        clearInputField();
      }
      else if(artistObj.rating < 80) {
        this.kindaLike.push(artist);
        clearInputField();
      }
  });
