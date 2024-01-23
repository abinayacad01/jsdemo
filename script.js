console.log("hey there!");
console.log(512200411102004);
//to print object
console.log({fname:"abinaya",lname:"jayakumar"});
console.table({fname:"abinaya",lname:"jayakumar"});
//to print array
console.log([11,10,2004]);
console.table([11,10,2004,5,12,2004]);
//variable declaration
var a=100;
var b=200;
if(a>50)
{
    console.log(true);
}
else
{
    console.log(false);
}

a=25;
console.log(typeof a);

var a="abi";
console.log(typeof a);

a=true;
console.log(typeof a);

b=36;
console.log(typeof b);

b=false;
console.log(typeof b);

b=25.5;
console.log(b+":"+typeof b);

a=[12,15,10];
console.log(typeof a);

a={abi:"mano"};
console.log(a);
console.log(typeof a);

a=20;
a=a.toString();
console.log(typeof a);
console.log(a);

b="fgjh";
b=parseInt(b);
console.log(typeof b);
console.log(b);

a=true;
console.log(typeof a);

a=parseInt(a);
console.log(typeof a);
console.log(a);


var a=102378543567;
var b=35235435677;
console.log(a+b);

console.log(a-b);

console.log(a*b);

console.log(a/b);

console.log(a%b);

console.log(a**b);

console.log(++a);

console.log(--b); 

let m=100;

m+=100;
console.log(m);

m-=150;
console.log(m);

m*=2;
console.log(m);

m/=10;
console.log(m);

m%=3;
console.log(m);

console.log(m>199);

console.log(m<199);

console.log(m==199);

console.log(m!=199);

console.log(m>=199);

console.log(m<=199);

console.log(m=="as");

console.log(!(m=="199"));

console.log(m==="as");

console.log(m!=="as");

console.log(m==10||m>10||m<10);

console.log(m==10&&m>10&&m<10);

var g="n";
var output=g=="n"? "correct" : "wrong";
console.log(output);

var n=5;
console.log(n);
var output1=(4<=n && n<=6)? "wrong" :(7<=n && n<=10) ? "correct" : "none";
console.log(output1);

function none(){
    var l=78;
var output1=(40<=l && l<=69)? "wrong" :(79<=l && l<=100) ? "correct" : "none";
console.log(output1);

}

none();

function none1(p){
var output1=(40<=p && p<=69)? "wrong" :(79<=p && p<=100) ? "correct" : "none";
console.log(output1);

}

none1(90);

function none3(k,l){
    var result=(k==40)? "yes" : (k==60)? "no": "other";
    console.log(result,l);

}
none3(60,"hey");


var none4=(o,d)=>{
    var result1=(o==40)? "right" : (o==60)? "wrong": "other";
    console.log(result1,d);
};
none4(40,"hi!!");

var sum=(w,q)=>{
    return(w+q);
};
console.log("added value",sum(8,9));
console.log("added value",sum(86,28));

var result2=sum(6,7);
console.log(result2);

var sum1=(w,q)=>(w+q);
console.log(sum1(4,5));

function markcheck(m){
    if(m<35)
    {
        console.log("fail");
    }
    else
    {
        console.log("passed");
    }
};

markcheck(66);

function markcheck1(m){
    if(m<=35 && m>0)
    {
        console.log("fail");
    }
    else
    {
        if(m>35 && m<=60)
        {
        console.log("good");
        }

        else if(m>60 && m<=80)
        {
            console.log("very good");
        }

        else if (m>80 && m<=90)
        {
            console.log("well done");
        }

        else if(m>90 && m<=100)
        {
            console.log("excellent");
        }
        else{
            console.log("not in range")
        }
}
}

markcheck1(50);


function switchstmt(a1,b1,c1)
{
    // var a,b,c;
    switch(c1){
        case 1 :
            console.log(a1+b1);
            break;
        case 2 :
            console.log(a1-b1);
            break;
        case 3 :
            console.log(a1*b1);
            break;
        case 4 :
            console.log(a1/b1);
            break;
        default :
            console.log(none);
            }
}
switchstmt(10,30,3);

let day;
let date1 = new Date().getDate();

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
    break;
}

console.log(day,date1);


 function getoutput()
                     {
                        var value1=document.getElementById("fname").value;
                        var value2=document.getElementById("lname").value;
                        document.getElementById("output").innerHTML= "hey "+ value1+" " + value2 + " !!";

                     }
                     
function operatorfun()
{
    var value1=document.getElementById("v1").value;
    var value2=document.getElementById("v2").value;
    value1=Number(value1);
    value2=Number(value2);
    document.getElementById("sum").innerHTML="sum of "+ value1 + " and " + value2 + " is " + (value1+value2);
 }                            
                     
function multioperatorfun(a)
 {
    var value1=document.getElementById("val1").value;
    var value2=document.getElementById("val2").value;
    value1=Number(value1);
    value2=Number(value2);

 switch(a){
      case'+' :
        document.getElementById("result").innerHTML="sum of "+ value1 + " and " + value2 + " is " + (value1+value2);
        break;
      case'-' :
        document.getElementById("result").innerHTML="subraction of "+ value1 + " and " + value2 + " is " + (value1-value2);
        break;
      case'*' :
        document.getElementById("result").innerHTML="product of "+ value1 + " and " + value2 + " is " + (value1*value2);
        break;
      case'/' :
         document.getElementById("result").innerHTML="division of "+ value1 + " and " + value2 + " is " + (value1/value2);
         break;
          }
 } 
 
 
 function formfunction()
{ 
var fname=document.getElementById("tbfname").value;
 document.getElementById("fnamer").innerHTML=fname;
  
 var lname=document.getElementById("tblname").value;
 document.getElementById("lnamer").innerHTML=lname;
    
 var phone=document.getElementById("tbphone").value;
 document.getElementById("phoner").innerHTML=phone;
 
 var gender = document.querySelector('input[name="gender"]:checked');
 var gender_value = gender ? gender.value : "";
 document.getElementById("genderr").innerHTML = gender_value;

 var age=document.getElementById("tbage").value;
 document.getElementById("ager").innerHTML=age;

 var msg=document.getElementById("tbmsg").value;
 document.getElementById("msgr").innerHTML=msg;

 var date=document.getElementById("tbdate").value;
 document.getElementById("dobr").innerHTML=date;

 var mobile=document.getElementById("mobile");
 var selectedValue=mobile.value;
 document.getElementById("mobiler").innerHTML=selectedValue;
 }

function loopfun()
{
    var inputValue=document.getElementById("loopex").value;
    console.log(inputValue);

    inputValue=Number(inputValue);


 while(inputValue<20)
{
    console.log(inputValue +" inputvalue is less than 20");
    inputValue++;
}

do{
    console.log(inputValue + " is less than 10");
    inputValue++;
    
while(inputValue<20)
{
         console.log(inputValue +" inputvalue is less than 20");
         inputValue++;
     }

}
while(inputValue<50)

  for(var inputValue=0; inputValue< 20; inputValue++)  {
    console.log("input value in for loop  "+ m + " is smaller than 20 "); 
  }

}
function forfunction()
{
    let namelist = ["abi", "mano", "gomathi", "nithya"];
    console.log(namelist);
    console.log("the legth is " + namelist.length);
    console.log(namelist[1]);

    for(let a=0;a<namelist.length;a++)
        { 
          console.log(namelist[a]);
          console.log(a==2);
        }
    
        for(let name of namelist)
    {
        console.log(name);
    }
     
    for(let g=0;g<namelist.length;g++)
        { 
          console.log(namelist[g]);
          if(g==2){
            break;
          }
        }

    var listofloves = { mom:"gomathi" , sis:"nithya" ,dad:"kumar" , him:"mano"};
    console.log(listofloves);
    console.table(listofloves);

    for (let property in listofloves){
        console.log(property + " : " + listofloves[property]);
    }
    

}
forfunction();


function datefun(){
       let today = new Date();
       console.log(today);
       console.log(today.toDateString());
       console.log(today.toISOString());
       console.log(today.toLocaleDateString());
       console.log(today.toLocaleString());
       console.log(today.toLocaleTimeString());
       console.log(today.getHours());
       console.log(today.getDay());
}
datefun();

function textfun()
{
    var text = "Hi,this is abinaya jayakumar and You can Call me abinaya";
    console.log(text.length);
    console.log(text.indexOf("abinaya"));
    console.log(text.indexOf("abinaya",25));
    console.log(text.lastIndexOf("me"));
    console.log(text.search("abinaya"));
    
    let a=text.search(/You/);
    console.log(a);

    let ab=text.match(/Call/);
    console.log(ab);

    let abi=text.match(/call/gi);
    console.log(abi);

    console.log(text.slice(0,11));
     
    var output=text.toUpperCase();
    console.log(output);
     
    var output=text.toLowerCase();
    console.log(output);

    var output=text.slice(-10);
    console.log(output);

    var output=text.substring(0,4);
    console.log(output);
    var output=text.substring(-20);
    console.log(output);
     
    var output=text.charAt(27);
    console.log(output);

    var output=text.charCodeAt(0);
    console.log(output);

    var output=text.startsWith("h ");
    console.log(output);

    var output=text.endsWith("r");
    console.log(output);

    var output=text.replace('hi', 'hiiiii');
    console.log(output);

    var output=text.replaceAll('hiiiii', 'hi');
    console.log(output);


}
textfun();