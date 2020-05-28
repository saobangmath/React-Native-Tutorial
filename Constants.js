import {Dimensions} from 'react-native';
/**
 * constant variable define;
 */
export const image = {uri:'https://upload.wikimedia.org/wikipedia/commons/4/4c/Korotkevich_ITMO.jpg', 
               method: "GET", 
               width:400, height:400, flex:1};

export const screen = Dimensions.get('window');

export const achievements = [{key:"Google CodeJam champion from 2014-2019"}, 
                      {key:"IOI gold medalist from 2007-2012"}, 
                      {key:"ACM-ICPC World Champion in 2013 and 2015"}, 
                      {key:"Facebook Hacker Cup 2014, 2015 and 2019 winner"},
                      {key:"Yandex algorithm winner in 2010, 2013, 2014, 2015, 2017"},
                      {key:"Snack Down champion in 2018, 2019 (Team)"}];

export const winning_match = [{year:2014, data:["Google Code Jam", "Facebook Hacker Cup"]},
                       {year:2015, data:["Google Code Jam", "ICPC World Champion"]},
                       {year:2016, data:["Google Code Jam", "Facebook Hacker Cup"]},
                       {year:2017, data:["Google Code Jam", "Facebook Hacker Cup"]},
                       {year:2018, data:["Google Code Jam", "Google HashCode Champion"]},
                       {year:2019, data:["Google Code Jam", "Facebook Hacker Cup"]},
                      ];
export const organizations = [ {name : "Google",   uri: require("./images/Google.png")},
                        {name : "Facebook", uri: require("./images/Facebook.png")},
                        {name : "Yandex",   uri: require("./images/Yandex.png")},
                        {name : "Hackerank",uri: require("./images/Hackerank.png")}   
                      ];
                      