angular.module("timeApp")
  .directive("showTime", function(){
    return {
      restric: "E",
      template: "<div><h2>The current time is {{time}}</h2></div>",
      link: function(scope, element, attrs) {
        var currentTime = new Date();
        scope.time = currentTime.toString();
      }
    }

  });
