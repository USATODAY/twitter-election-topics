var app = app || {};


app.blnPerCapita = false;


app.arrStates = [
    { name: 'ALABAMA', abbreviation: 'AL'},
    { name: 'ALASKA', abbreviation: 'AK'},
    { name: 'AMERICAN SAMOA', abbreviation: 'AS'},
    { name: 'ARIZONA', abbreviation: 'AZ'},
    { name: 'ARKANSAS', abbreviation: 'AR'},
    { name: 'CALIFORNIA', abbreviation: 'CA'},
    { name: 'COLORADO', abbreviation: 'CO'},
    { name: 'CONNECTICUT', abbreviation: 'CT'},
    { name: 'DELAWARE', abbreviation: 'DE'},
    { name: 'DISTRICT OF COLUMBIA', abbreviation: 'DC'},
    { name: 'FEDERATED STATES OF MICRONESIA', abbreviation: 'FM'},
    { name: 'FLORIDA', abbreviation: 'FL'},
    { name: 'GEORGIA', abbreviation: 'GA'},
    { name: 'GUAM', abbreviation: 'GU'},
    { name: 'HAWAII', abbreviation: 'HI'},
    { name: 'IDAHO', abbreviation: 'ID'},
    { name: 'ILLINOIS', abbreviation: 'IL'},
    { name: 'INDIANA', abbreviation: 'IN'},
    { name: 'IOWA', abbreviation: 'IA'},
    { name: 'KANSAS', abbreviation: 'KS'},
    { name: 'KENTUCKY', abbreviation: 'KY'},
    { name: 'LOUISIANA', abbreviation: 'LA'},
    { name: 'MAINE', abbreviation: 'ME'},
    { name: 'MARSHALL ISLANDS', abbreviation: 'MH'},
    { name: 'MARYLAND', abbreviation: 'MD'},
    { name: 'MASSACHUSETTS', abbreviation: 'MA'},
    { name: 'MICHIGAN', abbreviation: 'MI'},
    { name: 'MINNESOTA', abbreviation: 'MN'},
    { name: 'MISSISSIPPI', abbreviation: 'MS'},
    { name: 'MISSOURI', abbreviation: 'MO'},
    { name: 'MONTANA', abbreviation: 'MT'},
    { name: 'NEBRASKA', abbreviation: 'NE'},
    { name: 'NEVADA', abbreviation: 'NV'},
    { name: 'NEW HAMPSHIRE', abbreviation: 'NH'},
    { name: 'NEW JERSEY', abbreviation: 'NJ'},
    { name: 'NEW MEXICO', abbreviation: 'NM'},
    { name: 'NEW YORK', abbreviation: 'NY'},
    { name: 'NORTH CAROLINA', abbreviation: 'NC'},
    { name: 'NORTH DAKOTA', abbreviation: 'ND'},
    { name: 'NORTHERN MARIANA ISLANDS', abbreviation: 'MP'},
    { name: 'OHIO', abbreviation: 'OH'},
    { name: 'OKLAHOMA', abbreviation: 'OK'},
    { name: 'OREGON', abbreviation: 'OR'},
    { name: 'PALAU', abbreviation: 'PW'},
    { name: 'PENNSYLVANIA', abbreviation: 'PA'},
    { name: 'PUERTO RICO', abbreviation: 'PR'},
    { name: 'RHODE ISLAND', abbreviation: 'RI'},
    { name: 'SOUTH CAROLINA', abbreviation: 'SC'},
    { name: 'SOUTH DAKOTA', abbreviation: 'SD'},
    { name: 'TENNESSEE', abbreviation: 'TN'},
    { name: 'TEXAS', abbreviation: 'TX'},
    { name: 'UTAH', abbreviation: 'UT'},
    { name: 'VERMONT', abbreviation: 'VT'},
    { name: 'VIRGIN ISLANDS', abbreviation: 'VI'},
    { name: 'VIRGINIA', abbreviation: 'VA'},
    { name: 'WASHINGTON', abbreviation: 'WA'},
    { name: 'WEST VIRGINIA', abbreviation: 'WV'},
    { name: 'WISCONSIN', abbreviation: 'WI'},
    { name: 'WYOMING', abbreviation: 'WY' }
];

app.sources = [
  {
    file: "POLITICS_US_ISSUE_ABORTION",
    domID: "abortion",
    cleanLabel: "abortion"
  },
  {
    file: "POLITICS_US_ISSUE_EBOLA",
    domID: "ebola",
    cleanLabel: "ebola"
  },
  {
    file: "POLITICS_US_ISSUE_ECONOMY",
    domID: "economy",
    cleanLabel: "economy"
  },
  {
    file: "POLITICS_US_ISSUE_EDUCATION",
    domID: "education",
    cleanLabel: "education"
  },
  {
    file: "POLITICS_US_ISSUE_ENERGY",
    domID: "energy",
    cleanLabel: "energy"
  },
  {
    file: "POLITICS_US_ISSUE_ENVIRONMENT",
    domID: "environment",
    cleanLabel: "environment"
  },
  {
    file: "POLITICS_US_ISSUE_GAY",
    domID: "gay-rights",
    cleanLabel: "gay rights"
  },
  {
    file: "POLITICS_US_ISSUE_GUNS",
    domID: "guns",
    cleanLabel: "guns"
  },
  {
    file: "POLITICS_US_ISSUE_HEALTHCARE",
    domID: "healthcare",
    cleanLabel: "health care"
  },
  {
    file: "POLITICS_US_ISSUE_IMMIGRATION",
    domID: "immigration",
    cleanLabel: "immigration"
  },
  {
    file: "POLITICS_US_ISSUE_LAW",
    domID: "law",
    cleanLabel: "law"
  },

  {
    file: "POLITICS_US_ISSUE_PRIVACY",
    domID: "privacy",
    cleanLabel: "privacy"
  },
  {
    file: "POLITICS_US_ISSUE_SOCIAL",
    domID: "social-security",
    cleanLabel: "social security"
  },
  {
    file: "POLITICS_US_ISSUE_TAXES",
    domID: "taxes",
    cleanLabel: "taxes"
  },
  {
    file: "POLITICS_US_ISSUE_TERRORISM",
    domID: "terrorism",
    cleanLabel: "terrorism"
  },
  {
    file: "POLITICS_US_ISSUE_WAGES",
    domID: "wages",
    cleanLabel: "wages"
  }
];

app.currentSource = 0;
app.baseURL = "http://www.gannett-cdn.com/experiments/usatoday/2014/10/election-topics/";



app.renderSection = function(data, domID, simpleDraw) {

  $domID = $(domID);

  width = $domID.find(".chart").width();



  // var parentReference = _.find(app.masterData.subsidiaries, function(item) { return data.dataset == item.dataset; });

  if(!simpleDraw) {
    //  var topicName = data.subsidiaries[0].name;
    // var hashtags = data.resources.hashtags.join(", ");

    // $domID.find(".topic-header").text(topicName);
    // $domID.find(".hashtags").text(hashtags);
  }

 

  var blnSmallScrn = false;

  var margin = {
    top: 50,
    right: 50,
    bottom: 50,
    left: 50
  };

  var diameter = (width - margin.left - margin.right)/3 - 15,
      format = d3.format(",d");
      

  var height = diameter + margin.top + margin.bottom;

  if ($(window).width() < 900) {
    blnSmallScrn = true;
    
  }

  if (blnSmallScrn) {
    margin.left = 0;
    margin.right = 0;
    diameter = width - (margin.left + margin.right);
    height = (diameter + 20) * 3 + margin.top + margin.bottom;
  }

  if (app.blnState) {
    diameter = width - (margin.left + margin.right);
    height = diameter + margin.top + margin.bottom;
  }
  

  //clear out chart for redrawing purposes
  $domID.find(".chart").empty();
  


  var bubble = d3.layout.pack()
      .sort(null)
      .size([diameter, diameter])
      .padding(0);

  var svg = d3.select(domID).select(".chart").append("svg")
      .attr("width", width) 
      .attr("height", height)
      .attr("class", "bubble");

  var gradient = svg.append("defs")
    .append("radialGradient")
    .attr("id", "grey-gradient");

    gradient.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "#FFFFFF");

    gradient.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "#E3E3E3");


   

  var chartCont = svg.append("g")
      .attr("class", "chart-labels")
      .attr("width", function() {
        var result = width - margin.left - margin.right;
        return result;
      })
      .attr("transform", "translate(" + margin.left + "," + 0 + ")");

  var color1, color2, color3, color4;

  if (!app.blnState) {
    var gender = {};
    gender.children = [];

    for(var key in data.author_gender_pct){
      
      var obj = {name: key, value: data.author_gender_pct[key]};
      
      gender.children.push(obj);
      // root.children.push(age);
      }

      var age = {};
      age.children = [];

      for(var key2 in data.author_age_pct){
        
        var obj2 = {name: key2, value: data.author_age_pct[key2]};
        
        age.children.push(obj2);
        // root.children.push(age);
        
      }

      var states = {};
      states.children = [];


      for(var ind = 0; ind < data.subsidiaries.length; ind++){

        var state = data.subsidiaries[ind];

        var dataset = state.dataset;
        var arrName = state.dataset.split("");
        var strAbbr = arrName[9] + arrName[10];


        var obj3 = {
          name: strAbbr, 
          value: state.tweets_per_MM, //tweets_per_MM for per capita, tweet_count for straight up

        };

        if (app.blnPerCapita) obj3.value = obj3.tweetsPerMM();

        if (obj3.value !== 0 & obj3.name != "DC") {
          states.children.push(obj3);
        }     
      }
    

    color1 = d3.scale.ordinal()
          .domain([0, 1, 2])
          .range(["#E3E3E3", "#1b88fa", "#9ed5fb"]);

    color2 = d3.scale.linear()
      .domain([d3.min(age.children, function(d) { return d.value; }), d3.max(age.children, function(d) { return d.value; })])
      .range(["#fce99f", "#fbc124"]);

    color3 = d3.scale.linear()
      .domain([d3.min(states.children, function(d) { return d.value; }), d3.max(states.children, function(d) { return d.value; })])
      .range(["#9edcb2", "#1d9c34"]);


    drawNode(age, 0);
    drawNode(gender, 1);
    drawNode(states, 2);
  }
  
  else if (app.blnState) {

    var stateIssues = {};
    stateIssues.children = [];
 

    _.each(data.subsidiaries, function(sub) {
      var match = _.find(app.sources, function(source) {

        return source.file.substr(18) == sub.dataset.substr(18);
      });


      
      if (match) {
        var obj4 = {
          name: sub.name,
          value: sub.tweet_count
        };
        stateIssues.children.push(obj4);
      }
    });


    color4 = d3.scale.linear()
      .domain([d3.min(stateIssues.children, function(d) { return d.value; }), d3.max(stateIssues.children, function(d) { return d.value; })])
      .range(["#fbc19c", "#f74f1b"]);

    drawNode(stateIssues, 0);
  }

  



  

  

  function drawNode(data, chartnum) {

    var force = d3.layout.force()
      .size([diameter, diameter])
      
      .friction(0.9)
      .charge(function(d, i) {
       
        if (d.children) {
          return 0;
        }
        else {
          return -Math.pow(d.r, 2);
        }
        
      }).gravity(0.9);

    chartCont.append("text")
      .text(function() { 
        if (chartnum === 0) return "Age";
        else if (chartnum == 1) return "Gender";
        else if (chartnum == 2) return "States";
       })
      .attr("x", function() {
        if (blnSmallScrn) {
           return margin.left + diameter/3;
        }

        else {
          return margin.left + (diameter * chartnum);
        }
      })
      .attr("y", function() {
        if (blnSmallScrn) {
           return 25 + (diameter + 40) * chartnum;
        }

        else {
          return 25;
        }
      })
      .attr("class", function() {
         if (chartnum === 0) return "age";
        else if (chartnum == 1) return "gender";
        else if (chartnum == 2) return "states";
      });

    var node = svg.append("g")
        .attr("class", "node")
        .attr("transform", function() {

          if (blnSmallScrn) {
            return "translate(" + (margin.left) + "," +  ((diameter + 40) * chartnum + 40 )  +  ")";
          }

          else {
            return "translate(" + (margin.left + (diameter + 15) * chartnum) + "," +  margin.top + ")";
          }
          
        });

       


      var circlesG = node.selectAll("circle")
        .data(bubble.nodes(data))
        .enter()
        .append("g")
        .attr("class", function(d, i) {
          if (i !== 0) {
            return "inner-circle";
          }
        })
        .attr("transform", function(d) { return "translate(" + d.x + ", " + d.y + ")"; })
        .call(force.drag);
        
    

        var circles = circlesG.append("circle")
          .attr("r", function(d) {
            if(simpleDraw) {
              return d.r; 
            }

            else {
              return 0;
            }
          })
          .attr("fill", function(d, i) {
            if (i === 0) {
              return "url(#grey-gradient)";
            }
            else {
              if (chartnum == 1) {
                return color1(i);
              }

              else if (chartnum === 0 && !app.blnState) {
                return color2(d.value);
              }

              else if (chartnum == 2) {
                 return color3(d.value);
              }

              else {
                return color4(d.value);
              }
            }
            
          });

        circlesG.append("text")
          .text(function(d) {
            if (d.value !== 0) {
              if (d.name == "m") {
                return "Male";
              }
              else if (d.name == "f") {
                return "Female";
              }

              else {
                return d.name;
              }
              
            }
            
          })
          .attr("fill", "#FFFFFF")
          .style("text-align", "center")
          .attr("transform", "translate(-8, 0)");

        if (!simpleDraw) {
          circles.transition()
            .duration(1000)
            .ease("bounce")
            .delay(function(d, i) { return (10 * i) + (100 * chartnum);  })
            .attr("r", function(d) { return d.r; });
        }


     
      function tick() {
    
        d3.selectAll(".inner-circle")
          // .each(collide(.5))
          .attr("transform", function(d) { return "translate(" + d.x + ", " + d.y + ")"; });
          // .attr("y", function(d) { return d.y; });
      }

      force
      .on("tick", tick)
      .nodes(bubble.nodes(data))
      .start();

      

  }

  $(".inner-circle").off("click");
  d3.selectAll(".inner-circle").on("mouseup", function(e) {


     $(".popover").remove();

  });

  $(".inner-circle").on("mouseenter", function(e) {
    $(".popover").remove();
    var d3Select = d3.select(this);

    Analytics.click("popover viewed");

    var context = {
      name: d3Select.data()[0].name,
      value: d3Select.data()[0].value
    };

    var fullState = _.find(app.arrStates, function(item) { 
      return item.abbreviation == context.name;
    });

    if (fullState) {
      context.name = fullState.name;
    }

    else if (context.name == "m") context.name = "Male";
    else if (context.name == "f") context.name = "Female";

    if (Math.round(d3Select.data()[0].parent.value) == 100) {
      context.label = null;
      context.value = context.value + "%";
    }

    // if (Math.round(d3Select.data()[0].parent.value) != 100)  context.value = app.percentGenerator(context.value, d3Select.data()[0].parent.value);

    if (Math.round(d3Select.data()[0].parent.value) != 100 && !app.blnState)  {

      context.label = "Tweets Per MM";
      context.value = Math.round(context.value*10) / 10;
    }

    if(app.blnState) {
      context.label = null;
      var totalValue = d3Select.data()[0].parent.value;
      var value = d3Select.data()[0].value;

      var strPercent = app.percentGenerator(value, totalValue);
      context.value = strPercent;
    }
    
    var html = app.templates["POPOVER.HTML"](context);


    $(".page-wrap").append(html);
    var $popover = $("body").find(".popover");
    
    $popover.css({"left": e.pageX - ($popover.width()/2), "top": e.pageY - ($popover.height() + 20)});

    $(this).on("mouseleave", function() {
      $popover.remove();
    });

    $(window).on("mousemove", function(e) {
      $(".popover").css({"left": e.pageX - ($popover.width()/2), "top": e.pageY - ($popover.height() + 20)});
    });
    

  });

   $(".inner-circle").off("mouseleave");

  // $(".inner-circle").on("mouseleave", function() {
  //   $(".popover").remove();
  // });

};

app.toTitleCase = function(str) {
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

app.listen = function() {


  app.arrMobileMenuButton.eq(0).on("click", function() {
   
     $(".topic-nav").addClass("mobile-show");
  });

   $(".mobile-nav-close-button").eq(0).on("click", function() {
    
     $(".topic-nav").removeClass("mobile-show");
  });

  $(window).on("touchstart", function() {
    $(".popover").remove();
  });


  var lastScrollTop = 0;
  app.scrollTimer = null;

  app.blnCanLoad = true;

  $(window).on("scroll", function(e) {

    if (app.blnCanLoad) {
      if($(window).scrollTop() + $(window).height() >= $(document).height()) {
        var len;

        if (app.blnState) {
          len = app.states.length - 1;
        }

        else {
          len = app.sources.length - 1;
        }

        if (app.currentSource < len) {
          $(".loader").addClass("show");
          app.updateCurrentView(app.currentSource+1, app.blnState);
          app.blnCanLoad = false;
          window.setTimeout(function() {
            app.blnCanLoad = true;
          }, 600);
        
      }
         
     }
    }
  });



  var delay = (function(){
    var timer = 0;
    return function(callback, ms){
      clearTimeout (timer);
      timer = setTimeout(callback, ms);
    };
  })();

  $(window).resize(function() {
    delay(function(){
      var sourcesToReDraw = _.filter(app.sources, function(source) {
            return source.data;
          });

          

          _.each(sourcesToReDraw, app.reRenderHtmlSection);
    }, 500);
});


  $(".chatter-show-button").on("click", function() {
    $(".page-chatter").toggleClass("show");
  });


};


app.renderHtmlSection = function(sources, intSource, strClass) {

  var context = sources[intSource];

  

  
  
  context.className = strClass;
 
  var url = app.jsonURL(context.file);
  var idStr = "#" + context.domID;

  
  

  if (sources[intSource].data !== undefined) {

    context.topicName = context.data.subsidiaries[0].name;
    context.chatter = app.topicCopy(context);

    if(context.topicName == "Terrorism incl. ISIS") {
      context.topicName = "Terrorism including ISIL";
      sources[intSource].topicName = "Terrorism including ISIL";
    }
    if(context.topicName == "Healthcare") {
      context.topicName = "Health care";
      sources[intSource].topicName = "Health care";
    }

    //hack to fix long title with no spaces
    if (context.topicName == "Immigration/Border Security") {
      context.topicName = "Immigration / Border Security";
    }
    context.hashtags = context.data.resources.hashtags.slice(0, 5).join(", ");
    
    var html = app.templates["CARD.HTML"](context);
    $(".page-wrap").append(html);
    $card = $(".card");

    
     if (strClass !== "active") {
      window.setTimeout(function() {
        $card.removeClass(strClass);
        $card.addClass("active");
      }, 10);
     }
  
    app.renderSection(sources[intSource].data, idStr);

    $(".loader").removeClass("show");
  }
  else {
    d3.json(url, function(error, data) {
      if (sources == app.sources){
        context.topicName = data.subsidiaries[0].name;
        app.sources[intSource].data = data;
      } 
      else if (sources == app.states) {
  
        context.topicName = sources[intSource].cleanLabel;
        app.states[intSource].data = data;
        blnStates = true;
      }

      

      
      context.hashtags = data.resources.hashtags.slice(0, 5).join(", ");

      if(context.topicName == "Terrorism incl. ISIS") {
        context.topicName = "Terrorism including ISIL";
        sources[intSource].topicName = "Terrorism including ISIL";
      }
      if(context.topicName == "Healthcare") {
        context.topicName = "Health care";
        sources[intSource].topicName = "Health care";
      }

      //hack to fix long title with no spaces
      if (context.topicName == "Immigration/Border Security") {
        context.topicName = "Immigration / Border Security";
      }
      context.chatter = app.topicCopy(context);

      var html = app.templates["CARD.HTML"](context);
      $(".page-wrap").append(html);
      $card = $(".card");

      
       if (strClass !== "active") {
        window.setTimeout(function() {
          $card.removeClass(strClass);
          $card.addClass("active");
        }, 10);
       }
      app.renderSection(data, idStr);

      blnStates = false;


      
      $(".loader").removeClass("show");
    });
  }
  

};

app.reRenderHtmlSection = function(source) {

  var idStr = "#" + source.domID;
  app.renderSection(source.data, idStr, true);
};

app.jsonURL = function(name) {

  if (window.location.hostname == "www.gannett-cdn.com") {
    return "http://www.gannett-cdn.com/experiments/usatoday/2014/10/twitter-data/" + name + ".json";
  }
  else {
    return "js/data/" + name + ".json";
  }
  

};

app.topicURL = function(source) {

  var topicID = source.domID;
  var url = app.baseURL + "#topic/" + topicID;
  return url;
};

app.updateCurrentView = function(intCurrentSource, blnStates) {
  var strClass = "next";
  Analytics.click("new topic loaded");

  app.currentSource = intCurrentSource;

  if (intCurrentSource <= 0) {
    app.currentSource = 0;
  }
 
  window.setTimeout(function() {
    // $old.remove();
    if (blnStates) {
      app.renderHtmlSection(app.states, intCurrentSource, strClass);
    }

    else {
      app.renderHtmlSection(app.sources, intCurrentSource, strClass);
    }
  }, 200);
  
  $(".popover").remove();
  app.showHideArrows();

};

app.showHideArrows = function() {
  if (app.currentSource < 1) {
    $(".previous-button").hide();
    $(".next-button").show();
  }
  else if (app.currentSource + 1 >= app.sources.length) {
    $(".previous-button").show();
    $(".next-button").hide();
  }

  else {
    $(".previous-button").show();
    $(".next-button").show();
  }
};

app.percentGenerator = function(value, total) {
  var exactPercent = (value / total) * 100;
  var roundedPercent = Math.round(exactPercent * 10) / 10;
  var strPercent = roundedPercent + "%";
  return strPercent;
};

app.reorderSources = function(source) {

  var newStartItem = _.find(app.sources, function(item) {return item.domID == source; });
  var originalIndex = app.sources.map(function(x) {return x.domID; }).indexOf(source);

  app.sources.splice(originalIndex, 1);
  app.sources.unshift(newStartItem);



};

app.sortSources = function(sources) {
  sources = _.sortBy(sources, function(source) { return - source.value; });

  var rank = 1;
  _.each(sources, function(source) {
    source.rank = rank;
    rank ++;
  });

  return sources;

};

app.renderNav = function(sources, blnHighlight) {
  $(".topic-nav").remove();
  var context = {};
  context.sources = sources;
  if (blnHighlight) context.highlight = true;
  else context.highlight = false;

  var html = app.templates["NAV.HTML"](context);
  $("body").append(html);

  if (blnHighlight) {
    $(".nav-item").eq(0).addClass("topic-highlight");
  }

};

app.clearSections = function() {
  $(".card").remove();
};

app.stateAbbrToName = function(abbr) {
  var fullState = _.find(app.arrStates, function(item) { 
      return item.abbreviation == abbr;
    });

  return fullState.name;
};

app.toTitleCase = function(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

app.topicCopy = function(topic) {
  var issue, state1, state2, state3, state4, state5, state6, age1, age1Pct, age2;


  var ages = _.map(topic.data.author_age_pct, function(value, key) {
    return {"value": value, "ageRange": key};
  });
  var sortedAges = _.sortBy(ages, function(age) { return age.value; });



  age1 = sortedAges[sortedAges.length - 1].ageRange;
  age1Pct = sortedAges[sortedAges.length - 1].value; 
  age2 = sortedAges[0].ageRange;

  var sortedStates = _.map(topic.data.subsidiaries, function(sub) {
    return {
      "name": app.stateAbbrToName(sub.dataset.substr(9, 2)),
      "value": sub.tweets_per_MM
    };
  });

  sortedStates = _.sortBy(sortedStates, function(state) { return state.value; });

  sortedStates = _.filter(sortedStates, function(state) { return state.name != "DISTRICT OF COLUMBIA";});

  console.log(sortedStates);

  var sortedStatesLength = sortedStates.length;
  state1 = app.toTitleCase(sortedStates[sortedStatesLength - 1].name);
  state2 = app.toTitleCase(sortedStates[sortedStatesLength - 2].name);
  state3 = app.toTitleCase(sortedStates[sortedStatesLength - 3].name);
  state4 = app.toTitleCase(sortedStates[0].name);
  state5 = app.toTitleCase(sortedStates[1].name);
  state6 = app.toTitleCase(sortedStates[2].name);

  var copy = "This issue is most discussed in " + state1 + ", " + state2 + ", and " + state3 + ". " + age1 + " year-olds dominate this conversation, posting " + age1Pct + "% of the tweets.";
 
  console.log(copy);
  return copy;

};


app.init = function() {
  app.arrMobileMenuButton = $(".mobile-menu-button");
  
  

  var Router = Backbone.Router.extend({
    routes: {
      "": "home",
      "topic/:topic": "topic"
      //"states/": "states"
    },

    home: function(){
      app.blnState = false;
      app.sources = app.sortSources(app.sources);
      app.renderNav(app.sources);
      app.clearSections();
      app.currentSource = 0;

      app.renderHtmlSection(app.sources, app.currentSource, "active");
    },

    topic: function(topic) {
      app.blnState = false;
      app.sources = app.sortSources(app.sources);
      app.reorderSources(topic);
      app.renderNav(app.sources, true);
      app.clearSections();

      app.currentSource = 0;

      app.renderHtmlSection(app.sources, app.currentSource, "next");
      window.scrollTo(0, 0);
    },

    /**************
    States version turned off below

    **************/

    // states: function() {
    //   app.blnState = true;
    //   app.states = app.sortSources(app.states);
    //   app.clearSections();
    //   app.currentSource = 0;
    //   app.renderHtmlSection(app.states, app.currentSource, "active");
    // }
  });

  

  d3.json(app.jsonURL("POLITICS_US_ALL"), function(error, data) {

    app.masterData = data;

    app.sources = _.map(app.sources, function(source) { 
      var obj = source; 
      var parentReference = _.find(app.masterData.subsidiaries, function(item) { return obj.file == item.dataset; });
      if (parentReference) {
        
        var value = parentReference.tweet_count;
        obj.value = value;
      }
     else {
       obj.value = 0;
     }
      
      return obj;
    });


    /**************
    States version turned off below

    **************/
    // app.states = [];

    // _.each(app.masterData.subsidiaries, function(sub) {
    //   var stateAbbr = sub.dataset.substr(9, 2);

    //   if (stateAbbr != "US") {

    //     var stateNamesRef = _.find(app.arrStates, function(state) { return state.abbreviation == stateAbbr;});
    //     stateObj = {
    //       value: sub.tweet_count,
    //       file: sub.dataset,
    //       cleanLabel: stateNamesRef.name,
    //       domID: stateNamesRef.name.split(" ").join("")
    //     };

    //     app.states.push(stateObj);
    //   }
    // });

    app.router = new Router();

    Backbone.history.start();

    
    
    // app.renderHtmlSection(app.currentSource, "active");
    // app.updateCurrentView(app.currentSource + 1);

    app.listen();
    app.showHideArrows();
  
  });
};

$(document).ready(function() {

  app.init();
  




  
});