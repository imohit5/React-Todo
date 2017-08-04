var moment =  require('moment');

console.log(moment().format());

var now = moment();

console.log('Current TimeStamp', now.unix());


var timestamp = 1501806121;

var currentMoment = moment.unix(timestamp);

console.log('Current moment', currentMoment.format('MMM D, YY @ h:mm a'));


console.log('Current moment', currentMoment.format('MMMM Do, YYYY @ h:mm A'));
