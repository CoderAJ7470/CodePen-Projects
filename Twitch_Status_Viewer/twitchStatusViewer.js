$(function(){
  
  var streamList = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "squirrel"];
  
  streamList.forEach(function(twitchName){
    var channelURL = "https://wind-bow.gomix.me/twitch-api/channels/" + twitchName + "?callback=?";
    
    $.getJSON(channelURL, function(data){
      
      var onlineStatus = "";
      var currentStream = data.game;
      var name = data.display_name;
      var avatar = data.logo;
      var url = data.url;
      
      $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/" + twitchName + "?callback=?", function(twitchUser){
        if(twitchUser.stream === null){
          onlineStatus = "Offline";
          currentStream = "No active stream";
        }
        else
          onlineStatus = "Online";
        
        if(avatar == null)
          avatar = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1321144/no_avatar.png";
          
        showStreams(name, avatar, onlineStatus, currentStream, url);
      });
      
      function showStreams(streamer, userAvatar, webStatus, channelStream, link){
        $("#streams").append("<div class='streamInfo'><p><img src='" + userAvatar +
                             "'></p><p><a href='" + link + "' target='_blank'>" + streamer + "</a></p>" +
                             "<p class='status'>" + webStatus + "</p><p class='stream'>" + channelStream + "</p></div>");
      }
    });
  });
  
});