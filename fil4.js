const clock = document.querySelector(".disks");
const clock2=document.querySelector("#rod2");
const clock3=document.querySelector("#rod3");
let moves=0;
let time=0;
Rules=new Array();
Rules[0]="1.You Have to Finish the game in time";
Rules[1]="2.You cannot place larger disk on the smaller disk";
onload=function()
{
    alert(Rules);
};
document.getElementById("moves").innerHTML=moves;
let timer = 0;
var ids="";
var kl;
var id;
var objectclass="";
var rodid="";
var rodid2="";
var rodid3="";
function win(winrod){
    if(winrod.length==8)
    {
        alert("You Won!!!!");
    }
}
document.getElementById("gameStart").addEventListener("click", function(){
    var timeleft = 999;

    var downloadTimer = setInterval(function function1(){
    document.getElementById("countdown").innerHTML = timeleft + 
    "&nbsp"+"seconds remaining";

    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Time is up!"
    }
    }, 1000);
    $(".disk1").draggable();
    console.log(countdown);
});
function setParent(el, newParent) {
    newParent.appendChild(el);
}
let Rods=
{
    Rod1: new Array(),
    Rod2:new Array(),
    Rod3: new Array()
};
$(document).ready(function() ///take the value of the block sear it in the arrray and then pop it out
{
   
    for(var i=0;i<8 ;i++)
    {
        Rods.Rod1[i]=i+1;
    } 
}
);
clock.addEventListener('mouseup',(e)=>
{
    //debugger;
    console.log(e.target.classList[0]);
    objectclass=e.target.classList[0];
    console.log(objectclass);
    console.log($("."+ objectclass).parent().attr('id'));
    rodid=$("."+objectclass).parent().attr('id');
   // $("."+objectclass).draggable();
    //debugger;
    var v="rod1";
if(rodid==v)
{
    $(".dropped-item2").droppable({
        drop:function(ev,ui)
        {
             debugger;
            if(Rods.Rod2.length==0 || Rods.Rod2[0]>Rods.Rod1[0])
            {
                let droppedItem=$(ui.draggable[0]).removeAttr("style");
                $(this).prepend(droppedItem)
                let t=Rods.Rod1.shift();
                Rods.Rod2.unshift(t);
                moves++;
                document.getElementById("moves").innerHTML=moves;
                console.log(moves);
                if(Rods.Rod2.length==1)
                {
                    debugger;
                    // $(".disk"+(t)).draggable();
                }
                $(".disk"+(t+1)).draggable();
            }
            else
            {
                $("."+objectclass).draggable({revert:true});
            }
        }
    }
    );
    $(".dropped-item3").droppable({
        drop:function(ev,ui)
        {
             debugger;
             if(Rods.Rod3.length==0 || Rods.Rod3[0]>Rods.Rod1[0])
             {
                let droppedItem=$(ui.draggable[0]).removeAttr("style");
                $(this).prepend(droppedItem)
                let t=Rods.Rod1.shift();
                Rods.Rod3.unshift(t);
                moves++;
                document.getElementById("moves").innerHTML=moves;
                console.log(moves);
                $(".disk"+(t+1)).draggable();
             }
             else
             {
                 $("."+objectclass).draggable({revert:true});
             }
    
        }
    })
}
});
clock2.addEventListener('mouseup',(e)=>
{
    let check=0;
    console.log(e.target.classList[3]);
    let value=e.target.classList[4];
    debugger;
    console.log(value);
    for(var i=0;i<Rods.Rod1.length;i++)
    {
        if(Rods.Rod1[i]==value)
        {
            check=1;
            break;
        }
    } 
    for(var i=0;i<Rods.Rod2.length;i++)
    {
        if(Rods.Rod2[i]==value)
        {
            check=2;
            break;
        }
    } 
    for(var i=0;i<Rods.Rod3.length;i++)
    {
        if(Rods.Rod3[i]==value)
        {
            check=3;
            break;
        }
    } 
    if(check==1)
    {
        $(".dropped-item2").droppable({
            drop:function(ev,ui)
            {
                 debugger;
                if(Rods.Rod2.length==0 || Rods.Rod2[0]>Rods.Rod1[0])
                {
                    let droppedItem=$(ui.draggable[0]).removeAttr("style");
                    $(this).prepend(droppedItem)
                    let t=Rods.Rod1.shift();
                    Rods.Rod2.unshift(t);
                    if(Rods.Rod2.length==1)
                    {
                        debugger;
                        // $(".disk"+(t)).draggable();
                    }
                    moves++;
                    document.getElementById("moves").innerHTML=moves;
                    console.log(moves);
                    $(".disk"+(t+1)).draggable();
                }
                else
                {
                    $("."+objectclass).draggable({revert:true});
                }
            }
        }
        );
        $(".dropped-item3").droppable({
            drop:function(ev,ui)
            {
                 debugger;
                 if(Rods.Rod3.length==0 || Rods.Rod3[0]>Rods.Rod1[0])
                 {
                    let droppedItem=$(ui.draggable[0]).removeAttr("style");
                    $(this).prepend(droppedItem)
                    let t=Rods.Rod1.shift();
                    Rods.Rod3.unshift(t);
                    moves++;
                    document.getElementById("moves").innerHTML=moves;
                    console.log(moves);
                    $(".disk"+(t+1)).draggable();
                 }
                 else
                 {
                     $("."+objectclass).draggable({revert:true});
                 }
        
            }
        })
    }
    else if(check==2)
    {
        $(".dropped-item1").droppable({
            drop:function(ev,ui)
            {
                 debugger;
                if(Rods.Rod1.length==0 || Rods.Rod1[0]>Rods.Rod2[0])
                {
                    let droppedItem=$(ui.draggable[0]).removeAttr("style");
                    $(this).prepend(droppedItem)
                    let t=Rods.Rod2.shift();
                    Rods.Rod1.unshift(t);
                    moves++;
                    document.getElementById("moves").innerHTML=moves;
                    console.log(moves);
                    if(Rods.Rod2.length==1)
                    {
                        debugger;
                        // $(".disk"+(t)).draggable();
                    }
                    $(".disk"+(t+1)).draggable();
                }
                else
                {
                    $("."+objectclass).draggable({revert:true});
                }
            }
        }
        );
        $(".dropped-item3").droppable({
            drop:function(ev,ui)
            {
                 debugger;
                 if(Rods.Rod3.length==0 || Rods.Rod3[0]>Rods.Rod2[0])
                 {
                    let droppedItem=$(ui.draggable[0]).removeAttr("style");
                    $(this).prepend(droppedItem)
                    let t=Rods.Rod2.shift();
                    Rods.Rod3.unshift(t);
                    moves++;
                    document.getElementById("moves").innerHTML=moves;
                    console.log(moves);
                    $(".disk"+(t+1)).draggable();
                 }
                 else
                 {
                     $("."+objectclass).draggable({revert:true});
                 }
        
            }
        })
    }
    else if(check==3)
    {
        $(".dropped-item1").droppable({
            drop:function(ev,ui)
            {
                debugger;
                if(Rods.Rod1.length==0 || Rods.Rod1[0]>Rods.Rod3[0])
                {
                    let droppedItem=$(ui.draggable[0]).removeAttr("style");
                    $(this).prepend(droppedItem)
                    let t=Rods.Rod3.shift();
                    Rods.Rod1.unshift(t);
                    moves++;
                    document.getElementById("moves").innerHTML=moves;
                    console.log(moves);
                    if(Rods.Rod2.length==1)
                    {
                        debugger;
                        // $(".disk"+(t)).draggable();
                    }
                    $(".disk"+(t+1)).draggable();
                }
                else
                {
                    $("."+objectclass).draggable({revert:true});
                }
            }
        }
        );
        $(".dropped-item2").droppable({
            drop:function(ev,ui)
            {
                 debugger;
                 if(Rods.Rod2.length==0 || Rods.Rod2[0]>Rods.Rod3[0])
                 {
                    let droppedItem=$(ui.draggable[0]).removeAttr("style");
                    $(this).prepend(droppedItem)
                    let t=Rods.Rod3.shift();
                    Rods.Rod2.unshift(t);
                    moves++;
                    document.getElementById("moves").innerHTML=moves;
                    console.log(moves);
                    $(".disk"+(t+1)).draggable();
                 }
                 else
                 {
                     $("."+objectclass).draggable({revert:true});
                 }
        
            }
        })
    }
});
clock3.addEventListener('mouseup',(e)=>
{
    let check=0;
    console.log(e.target.classList[3]);
    let value=e.target.classList[4];
    debugger;
    console.log(value);
    for(var i=0;i<Rods.Rod1.length;i++)
    {
        if(Rods.Rod1[i]==value)
        {
            check=1;
            break;
        }
    } 
    for(var i=0;i<Rods.Rod2.length;i++)
    {
        if(Rods.Rod2[i]==value)
        {
            check=2;
            break;
        }
    } 
    for(var i=0;i<Rods.Rod3.length;i++)
    {
        if(Rods.Rod3[i]==value)
        {
            check=3;
            break;
        }
    } 
    if(check==1)
    {
        $(".dropped-item2").droppable({
            drop:function(ev,ui)
            {
                 debugger;
                if(Rods.Rod2.length==0 || Rods.Rod2[0]>Rods.Rod1[0])
                {
                    let droppedItem=$(ui.draggable[0]).removeAttr("style");
                    $(this).prepend(droppedItem)
                    let t=Rods.Rod1.shift();
                    Rods.Rod2.unshift(t);
                    moves++;
                    document.getElementById("moves").innerHTML=moves;
                    console.log(moves);
                    if(Rods.Rod2.length==1)
                    {
                        debugger;
                        // $(".disk"+(t)).draggable();
                    }
                    $(".disk"+(t+1)).draggable();
                }
                else
                {
                    $("."+objectclass).draggable({revert:true});
                }
            }
        }
        );
        $(".dropped-item3").droppable({
            drop:function(ev,ui)
            {
                 debugger;
                 if(Rods.Rod3.length==0 || Rods.Rod3[0]>Rods.Rod1[0])
                 {
                    let droppedItem=$(ui.draggable[0]).removeAttr("style");
                    $(this).prepend(droppedItem)
                    let t=Rods.Rod1.shift();
                    Rods.Rod3.unshift(t);
                    moves++;
                    document.getElementById("moves").innerHTML=moves;
                    console.log(moves);
                    $(".disk"+(t+1)).draggable();
                 }
                 else
                 {
                     $("."+objectclass).draggable({revert:true});
                 }
        
            }
        })
    }
    else if(check==2)
    {
        $(".dropped-item1").droppable({
            drop:function(ev,ui)
            {
                 debugger;
                if(Rods.Rod1.length==0 || Rods.Rod1[0]>Rods.Rod2[0])
                {
                    let droppedItem=$(ui.draggable[0]).removeAttr("style");
                    $(this).prepend(droppedItem)
                    let t=Rods.Rod2.shift();
                    Rods.Rod1.unshift(t);
                    moves++;
                    document.getElementById("moves").innerHTML=moves;
                    console.log(moves);
                    if(Rods.Rod2.length==1)
                    {
                        debugger;
                        // $(".disk"+(t)).draggable();
                    }
                    $(".disk"+(t+1)).draggable();
                }
                else
                {
                    $("."+objectclass).draggable({revert:true});
                }
            }
        }
        );
        $(".dropped-item3").droppable({
            drop:function(ev,ui)
            {
                 debugger;
                 if(Rods.Rod3.length==0 || Rods.Rod3[0]>Rods.Rod2[0])
                 {
                    let droppedItem=$(ui.draggable[0]).removeAttr("style");
                    $(this).prepend(droppedItem)
                    let t=Rods.Rod2.shift();
                    Rods.Rod3.unshift(t);
                    moves++;
                    document.getElementById("moves").innerHTML=moves;
                    console.log(moves);
                    $(".disk"+(t+1)).draggable();
                 }
                 else
                 {
                     $("."+objectclass).draggable({revert:true});
                 }
        
            }
        })
    }
    else if(check==3)
    {
        $(".dropped-item1").droppable({
            drop:function(ev,ui)
            {
                 debugger;
                if(Rods.Rod1.length==0 || Rods.Rod1[0]>Rods.Rod3[0])
                {
                    let droppedItem=$(ui.draggable[0]).removeAttr("style");
                    $(this).prepend(droppedItem)
                    let t=Rods.Rod3.shift();
                    Rods.Rod1.unshift(t);
                    moves++;
                    document.getElementById("moves").innerHTML=moves;
                    console.log(moves);
                    if(Rods.Rod2.length==1)
                    {
                        debugger;
                        // $(".disk"+(t)).draggable();
                    }
                    $(".disk"+(t+1)).draggable();
                }
                else
                {
                    $("."+objectclass).draggable({revert:true});
                }
            }
        }
        );
        $(".dropped-item2").droppable({
            drop:function(ev,ui)
            {
                 debugger;
                 if(Rods.Rod2.length==0 || Rods.Rod2[0]>Rods.Rod3[0])
                 {
                    let droppedItem=$(ui.draggable[0]).removeAttr("style");
                    $(this).prepend(droppedItem)
                    let t=Rods.Rod3.shift();
                    Rods.Rod2.unshift(t);
                    moves++;
                    document.getElementById("moves").innerHTML=moves;
                    console.log(moves);
                    $(".disk"+(t+1)).draggable();
                 }
                 else
                 {
                     $("."+objectclass).draggable({revert:true});
                 }
        
            }
        })
    }
});