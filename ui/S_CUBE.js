function Now()
{
var d=new Date();
var hours=d.getHours();
var mins=d.getMinutes();
var sec=d.getSeconds();
var milli=d.getMilliseconds();
document.write(hours+":"+mins+":"+sec+":"+milli);
};
setInterval(Now, 1);
