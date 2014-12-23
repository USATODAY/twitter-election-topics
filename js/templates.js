this["app"] = this["app"] || {};
this["app"]["templates"] = this["app"]["templates"] || {};

this["app"]["templates"]["CARD.HTML"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<article id="' +
((__t = ( domID )) == null ? '' : __t) +
'" class="card ' +
((__t = ( className )) == null ? '' : __t) +
' ';
 if(app.blnState) {;
__p += 'state ';
 } ;
__p += '">\n    <h2 class="topic-header">' +
((__t = ( topicName )) == null ? '' : __t) +
'</h2>\n    <h3 class="hashtags">' +
((__t = ( hashtags )) == null ? '' : __t) +
'</h3>\n    <p class="topic-chatter">' +
((__t = ( chatter )) == null ? '' : __t) +
'</p>\n      <div id="social">\n\n    ';
 
      var encodedURL = encodeURIComponent("http://www.gannett-cdn.com/experiments/usatoday/2014/10/election-topics/#topic/" + domID);
      var encodedURL2 = encodeURI("http://www.gannett-cdn.com/experiments/usatoday/2014/10/election-topics/%23topic/" + domID);
      var encodedStr = encodeURIComponent("USA TODAY/TWITTER ISSUES INDEX: " + topicName);
      var encodedTitle = encodeURIComponent("USA TODAY/TWITTER ISSUES INDEX");
      var encodedQuestion = encodeURIComponent("");
      var fbRedirectUrl = encodeURIComponent("http://www.gannett-cdn.com/usatoday/_common/_dialogs/fb-share-done.html");

      var tweetUrl = "https://twitter.com/intent/tweet?url=" + encodedURL + "&text=" + encodedStr + "&via=USATODAY"; 

      var fbUrl = "javascript: var sTop=window.screen.height/2-(218);var sLeft=window.screen.width/2-(313);window.open('https://www.facebook.com/dialog/feed?display=popup&app_id=215046668549694&link=" + encodedURL2 + "&picture=http://www.gannett-cdn.com/experiments/usatoday/2014/10/election-topics/img/fb-post.jpg&name=" + encodedTitle +"&description=" + topicName + "&redirect_uri=http://www.gannett-cdn.com/experiments/usatoday/_common/_dialogs/fb-share-done.html','sharer','toolbar=0,status=0,width=580,height=400,top='+sTop+',left='+sLeft);Analytics.click('Facebook share');void(0);";

      var emailURL = "mailto:?body=" + topicName +  "%0d%0d" + encodedURL +"&subject=" + encodedTitle;
      ;
__p += '\n    \n      <a href="' +
((__t = ( tweetUrl )) == null ? '' : __t) +
'" class=\'social-link\' id=\'twitter-share\'> <img src=\'img/twitter.svg\' alt="twitter" class="social-icon"></a>\n      <a href="' +
((__t = ( fbUrl )) == null ? '' : __t) +
'"><img src=\'img/fb.svg\' alt="twitter" class="social-icon"></a>\n      <a href="' +
((__t = ( emailURL )) == null ? '' : __t) +
'" onclick="Analytics.click(\'Email Share\')" class="social-link" id="email-share"><img src="img/email.svg" alt="email" class="social-icon">\n        </a>\n    </div>\n    <div class="chart"></div>\n</article>';

}
return __p
};

this["app"]["templates"]["NAV.HTML"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="topic-nav">\n  <h3 class="nav-header">Issues</h3>\n  <p>ranked by Tweet count</p>\n  <div class="mobile-nav-close-button"></div>\n  <ul>\n\n    \n      \n    \n    ';
 _.each(sources, function(source) { ;
__p += '\n      <li class="nav-item"><a href="' +
((__t = ( app.topicURL(source)  )) == null ? '' : __t) +
'" onclick="Analytics.click("navigation clicked");">' +
((__t = ( source.rank )) == null ? '' : __t) +
'. ' +
((__t = ( source.cleanLabel )) == null ? '' : __t) +
'</a></li>\n      \n    ';
}); ;
__p += '\n\n  </ul>\n</div>';

}
return __p
};

this["app"]["templates"]["POPOVER.HTML"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="popover">\n  <div class="popover-close-button"></div>\n  <h5 class="popover-title">' +
((__t = ( name )) == null ? '' : __t) +
'</h5>\n  \n  <div class="popover-content">\n  ' +
((__t = ( value )) == null ? '' : __t) +
'\n  ';
 if (label != undefined) {;
__p += '\n  <p class="label">' +
((__t = (label)) == null ? '' : __t) +
'</p>\n  ';
 } ;
__p += '\n  </p>\n\n  <div class="arrow-down"></div>\n</div>';

}
return __p
};