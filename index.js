
var length=document.querySelectorAll(".drum").length;
for(var i=0;i<length;i++){

  document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    var ele=this.innerHTML;
    main(ele);
  });
}

document.addEventListener("keypress",function(event){
  // var key=event.key;
  main(event.key);
});

function main(ele){
  switch(ele){
    case "w":
      var aud=new Audio("sounds/crash.mp3");
      aud.play();
      break;
      case "a":
        var aud1=new Audio("sounds/kick-bass.mp3");
        aud1.play();
        break;
        case "s":
          var aud2=new Audio("sounds/snare.mp3");
          aud2.play();
          break;
          case "d":
            var aud3=new Audio("sounds/tom-1.mp3");
            aud3.play();
            break;
            case "j":
              var aud4=new Audio("sounds/tom-2.mp3");
              aud4.play();
              break;
              case "k":
                var aud5=new Audio("sounds/tom-3.mp3");
                aud5.play();
                break;
                case "l":
                  var aud6=new Audio("sounds/tom-4.mp3");
                  aud6.play();
                  break;
                  default:
                  alert("wrong key pressed");
  }
}
