
var urlStreams = "https://wind-bow.glitch.me/twitch-api/streams/";
var urlUsers = "https://wind-bow.glitch.me/twitch-api/users/";

var frequentStreams = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"]


$(document).ready(function(){

    var logoURL;
    var channelURL;

    frequentStreams.forEach( function(element, index) {
        
        var urlUser = urlUsers + element;
        $.getJSON(urlUser, function(data) {

            var display_name = data.display_name;
            var divHtmlElement = "#twitch-res" + (index + 1);
            $(divHtmlElement).addClass("w3-cell-row w3-border w3-padding-16 w3-container");

            var imgHtmlElementDiv = "#twitch-res" + (index + 1) + "-pic";
            $(imgHtmlElementDiv).addClass("w3-cell w3-cell-middle w3-mobile");

            var imgHtmlElement = "#twitch-res" + (index + 1) + "-pic > img" ;
            $(imgHtmlElement).attr("src", data.logo); 
            $(imgHtmlElement).addClass("w3-circle");

            var aDivHtmlElement = "#twitch-res" + (index + 1) + "-a";
            $(aDivHtmlElement).addClass("w3-cell w3-cell-middle w3-mobile");
            
            var nameDivHtlmElement = "#twitch-res" + (index + 1) + "-name";
            $(nameDivHtlmElement).html(display_name);
            $(nameDivHtlmElement).attr("href", "https://www.twitch.tv/" + element);     
            $(nameDivHtlmElement).addClass("w3-button w3-round");

            var urlStream = urlStreams + display_name;

            $.getJSON(urlStream, function(data) {

                var statusDivHtmlElement = "#twitch-res" + (index + 1 ) + "-status";
                
                if (data.stream == null ) {
                    $(statusDivHtmlElement).html("Not Currently Streaming");
                    $(divHtmlElement).addClass("w3-2017-neutral-grey");
                }
                else {
                    $(statusDivHtmlElement).html(data.stream.channel.status);
                    $(divHtmlElement).addClass("w3-highway-green");
                }
               $(statusDivHtmlElement).css("width","50%");
               $(statusDivHtmlElement).addClass("w3-cell w3-cell-middle w3-mobile");
            });

        });

    }, this);      
   
}); 
