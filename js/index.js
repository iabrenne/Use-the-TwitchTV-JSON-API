
var urlStreams = "https://wind-bow.glitch.me/twitch-api/streams/";
var urlUsers = "https://wind-bow.glitch.me/twitch-api/users/";

var frequentStreams = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"]


$(document).ready(function(){

    var logoURL;
    var channelURL;

    frequentStreams.forEach( function(element, index) {
        
        var urlUser = urlUsers + element;
        $.getJSON(urlUser, function(data) {

            // if (data.stream != null){
            
            //     channelURL = data.stream.channel.url;
            //     $("#twitch-res1-pic > img").css("visibility", "visible");
            //     $("#twitch-res1-pic > img").attr("src", logoURL);       
            //     $("#twitch-res1-name").html(data.stream.channel.display_name);
            //     $("#twitch-res1-name").attr("href", channelURL);
            //     $("#twitch-res1-status").html(data.stream.channel.status);
            //

            var display_name = data.display_name;
            var imgHtmlElement = "#twitch-res" + (index + 1) + "-pic > img" ;
            var divHtmlElement = "#twitch-res" + (index + 1);
            var nameDivHtlmElement = "#twitch-res" + (index + 1) + "-name";
            var statusDivHtmlElement = "#twitch-res" + (index + 1 ) + "-status"

            $(divHtmlElement).css("display","flex");
            $(imgHtmlElement).attr("src", data.logo); 
            $(imgHtmlElement).addClass("w3-circle w3-card-4", data.logo);
            $(nameDivHtlmElement).html(display_name);
            $(nameDivHtlmElement).attr("href", "https://www.twitch.tv/" + element);
         

            var urlStream = urlStreams + display_name;

            $.getJSON(urlStream, function(data) {

                if (data.stream == null ) 
                    $(statusDivHtmlElement).html("Not Currently Streaming");
                else
                    $(statusDivHtmlElement).html(data.stream.channel.status);

                    $(statusDivHtmlElement).css("width","50%");
            });

        });

    }, this);      
   
}); 
