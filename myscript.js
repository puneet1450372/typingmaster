var para=['A paragraph is a series of sentences that are organized and coheren .','Aim for three to five or more sentences per paragraph. Include ',
'In academic work, your paragraphs are likely to be a bit longer ']

var msg=document.getElementById('para')
var area=document.getElementById('area')
const start=document.getElementById('btn')
var y1=0;
var startTime ;
var endTime;
var randnum;
var str1;
var str2;
var totalstr;

start.addEventListener('click',xyz);
function xyz(){
    if (this.innerHTML=='Start')
    {
        area.disabled=false;
        let randnum=Math.floor(Math.random()* (para.length))
        msg.innerHTML=para[randnum]
        z=msg.innerHTML;
        a= area.value;
        var date= new Date();
        startTime=date.getTime();
        start.innerHTML="Clear"; 
          
     }
    else if
        (this.innerHTML=='Clear')
        {
        area.disabled=true;
        start.innerHTML="Start";
        area.addEventListener('keypress',stop,false)
        window.location.reload();
        end();
        
         }
    }

function end()
    {
    //  let date=new Date();
    // endTime=date.getTime();
    // totaltime=((endTime-startTime)/1000);
    // totalstr= area.value;
    // let wordcount=counter(totalstr);
    // let speed = Math.round((wordcount/totaltime)*(60))
    // let result=" your speed is "+" "+speed+" "+ "word per minute"
    // msg.innerHTML=result;
    area.value=" ";
    interval;
    comparewords();
   
    }

function comparewords(str1,str2)
{
    str1=totalstr.split(" ");
    str2=z.split(" ");
    let cnt=0;
    str2.forEach(function(items,index){
        if (items==str1[index]){
        cnt++
        }
    })
}
function counter(abc)
{
    let countresponse= abc.split(" ").length;
   
    return(countresponse)
}
area.addEventListener('keypress',stop,true)

function stop()
{
var s=0,ms=0,m=0;
var time;

stopwatch=document.getElementById('timer');
function run(){
    stopwatch.textContent=(m< 10 ? "0"+m:m)+":"+(s<10 ?"0"+s:s)+":"+(ms<10?"0"+ms:ms);
    ms++;
    if(ms==100){
        ms=0;
        s++;}
    if(s==60){
        s=0;
        m++;
    }
}
x=area.value
if (x==0 && y1==0)
{
interval=setInterval(run,10);
y1++;
}
else{
    console.log("")
}
}
area.addEventListener('keyup',check,true)

function check()
{
var textcheck=area.value;
var origintextMatch=z.substring(0,textcheck.length);

if(textcheck == z)
{
    let date=new Date();
    endTime=date.getTime();
    totaltime=((endTime-startTime)/1000);
    console.log(totaltime)
    totalstr= area.value;
    let wordcount=counter(totalstr);
    let speed = Math.round((wordcount/totaltime)*(60))
    let result=" your speed is "+" "+speed+" "+ "word per minute"
    msg.innerHTML=result;
    area.style.borderColor="#09F30D";
    clearInterval(interval);
// wpm.innerHTML="Hello";
}
else if(textcheck == origintextMatch)
{
area.style.borderColor="#F3E509";
}
else{
area.style.borderColor="#F33709";
}

}


