angular.module('itunes')
  .service('itunesService', function($http, $q){
  //This service is what will do the 'heavy lifting' and get our data from the iTunes API.
  //Also note that we're using a 'service' and not a 'factory' so all your methods you want to call in your controller need to be on 'this'.

  //Write a method that accepts an artist's name as the parameter, then makes a 'JSONP' http request to a url that looks like this
  //https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
  //Note that in the above line, artist is the parameter being passed in.
  //You can return the http request or you can make your own promise in order to manipulate the data before you resolve it.

    //Code here
this.getArtist = function(artist){
  var defBossMan = $q.defer();
  $http({
    method: "JSONP",
    url: "https://itunes.apple.com/search?term=" + artist + "&callback=JSON_CALLBACK"
  }).then(function(response){
    console.log(response.data.results);
    var artistArr = [];
    var parsedResponse = response.data.results;
    for (var i = 0; i < parsedResponse.length; i++){
      var fixedSinglePrice = "$" + parseFloat(Math.round(parsedResponse[i].trackPrice * 100) / 100).toFixed(2);
      var fixedColPrice = "$" + parseFloat(Math.round(parsedResponse[i].collectionPrice * 100) / 100).toFixed(2);
      artistArr.push({
        Song: parsedResponse[i].trackName,
        Artist: parsedResponse[i].artistName,
        Collection: parsedResponse[i].collectionName,
        AlbumArt: parsedResponse[i].artworkUrl100,
        Type: parsedResponse[i].primaryGenreName,
        SinglePrice: fixedSinglePrice,
        CollectionPrice: fixedColPrice
      });
    };

    defBossMan.resolve(artistArr);
  });
return defBossMan.promise;
}



//artistName, collectionName, artworkUrl60, primaryGenreName, collectionPrice

});
