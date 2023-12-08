// var checks = null;
// function printDurations() {
//     if (checks == null) {
//         var cnt = 136;//145
//         checks = setInterval(function () {
//             cnt -= 1;
//             //================sections A=================
//             /*1*/
//             if (cnt == 136) {
//                 playStart();
//             }
//             if (cnt == 135) {
//                 document.getElementById("imgspin").style.animation = "";
//                 var spinball = document.querySelector('#imgspin');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spin {
//                             from {
//                                 transform: rotate(0deg);
//                                 -webkit-transform: rotate(0deg);
//                             }
//                             to {
//                                 transform: rotate(360deg);
//                                 -webkit-transform: rotate(360deg);
//                             }
//                         }
//                         #imgspin{
//                             animation: spin 0.8s linear infinite;
//                             -webkit-animation: spin 0.8s linear infinite;
//                         }
//                         `;
//                 spinball.appendChild(keyFramesw);
//                 // =========================blue ball1====================================
//                 document.getElementById("balls1").style.animationName = "spinStat1";
//                 var ball1 = document.querySelector('#balls1');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat1 {
//                             0%{margin-top: 60px;margin-left: 50px;}
//                             5%{margin-top: 30px;margin-left: 0px;}
//                             10%{margin-top: 50px;margin-left: 20px;}
//                             15%{margin-top: 0px;margin-left: 30px;}
//                             20%{margin-top: 60px;margin-left: 40px;}
//                             25%{margin-top: 50px;margin-left: 40px;}
//                             30%{margin-top: 10px;margin-left: 20px;}
//                             35%{margin-top: 0px;margin-left: 20px;}
//                             40%{margin-top: 30px;margin-left: 60px;}
//                             45%{margin-top: 10px;margin-left: 40px;}
//                             50%{margin-top: 63px;margin-left: 30px;}
//                             55{margin-top: 10px;margin-left: 35px;}
//                             60%{margin-top: 33px;margin-left: 0px;}
//                             65%{margin-top: 10px;margin-left: 30px;}
//                             70%{margin-top: 0px;margin-left: 25px;}
//                             75%{margin-top: 20px;margin-left: 20px;}
//                             80%{margin-top: 20px;margin-left: 40px;}
//                             85%{margin-top:20px;margin-left: 12px;}
//                             90%{margin-top: 50px;margin-left: 20px;}
//                             95%{margin-top: 0px;margin-left: 35px;}
//                             100%{margin-top: 27px;margin-left: 33px;background-position: 100%;}
//                         }
//                         #balls1 {
//                             animation: spinStat1 5s linear infinite alternate;
//                             -webkit-animation: spinstat1 5s linear infinite alternate;
//                         }
//                         `;
//                 ball1.appendChild(keyFramesw);
//                 // =========================blue ball2====================================
//                 document.getElementById("balls2").style.animationName = "spinStat2";
//                 var ball2 = document.querySelector('#balls2');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat2{
//                                 0%{margin-top: 60px;margin-left: 31px;}
//                                 5%{margin-top: 8px;margin-left: 30px;}
//                                 10%{margin-top: 30px;margin-left: 50px;}
//                                 15%{margin-top: 20px;margin-left: 10px;}
//                                 20%{margin-top: 50px;margin-left: 30px;}
//                                 25%{margin-top: 0px;margin-left: 30px;}
//                                 30%{margin-top: 60px;margin-left: 30px;}
//                                 35%{margin-top: 0px;margin-left: 30px;}
//                                 40%{margin-top: 30px;margin-left: 10px;}
//                                 45%{margin-top: 30px;margin-left: 60px;}
//                                 50%{margin-top: 63px;margin-left: 30px;}
//                                 55%{margin-top: 10px;margin-left: 45px;}
//                                 60%{margin-top: 55px;margin-left: 10px;}
//                                 65%{margin-top: 20px;margin-left: 35px;}
//                                 70%{margin-top: 45px;margin-left: 60px;}
//                                 75%{margin-top: 10px;margin-left: 49px;}
//                                 80%{margin-top: 48px;margin-left: 50px;}
//                                 85%{margin-top: 18px;margin-left: 30px;}
//                                 90%{margin-top: 20px;margin-left: 10px;}
//                                 95%{margin-top: 0px;margin-left: 30px;}
//                                 100%{margin-top: 63px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #balls2 {
//                             animation: spinStat2 5s linear infinite alternate;
//                             -webkit-animation: spinStat2 5s linear infinite alternate;
//                         }
//                         `;
//                 ball2.appendChild(keyFramesw);
//                 // =========================blue ball3====================================
//                 document.getElementById("balls3").style.animationName = "spinStat3";
//                 var ball3 = document.querySelector('#balls3');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat3 {
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 30px;margin-left: 0px;}
//                             10%{margin-top: 0px;margin-left: 30px;}
//                             15%{margin-top: 30px;margin-left: 60px;}
//                             20%{margin-top: 60px;margin-left: 30px;}
//                             25%{margin-top: 0px;margin-left: 27px;}
//                             30%{margin-top: 20px;margin-left: 50px;}
//                             35%{margin-top: 60px;margin-left: 30px;}
//                             40%{margin-top: 30px;margin-left: 15px;}
//                             45%{margin-top: 45px;margin-left: 45px;}
//                             50%{margin-top: 10px;margin-left: 50px;}
//                             55%{margin-top: 55px;margin-left: 30px;}
//                             60%{margin-top: 30px;margin-left: 20px;}
//                             65%{margin-top: 60px;margin-left: 30px;}
//                             70%{margin-top: 40px;margin-left: 15px;}
//                             75%{margin-top: 15px;margin-left: 30px;}
//                             80%{margin-top: 18px;margin-left: 20px;}
//                             85%{margin-top: 20px;margin-left: 60px;}
//                             90%{margin-top: 60px;margin-left: 30px;}
//                             95%{margin-top: 10px;margin-left: 35px;}
//                             100%{margin-top: 63px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #balls3 {
//                             animation: spinStat3 5s linear infinite alternate;
//                             -webkit-animation: spinStat3 5s linear infinite alternate;
//                         }
//                         `;
//                 ball3.appendChild(keyFramesw);
//                 // =========================blue ball4====================================
//                 document.getElementById("balls4").style.animationName = "spinStat4";
//                 var ball4 = document.querySelector('#balls4');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat4 {
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 15px;margin-left: 30px;}
//                             10%{margin-top: 40px;margin-left: 50px;}
//                             15%{margin-top: 60px;margin-left: 30px;}
//                             20%{margin-top: 50px;margin-left: 50px;}
//                             25%{margin-top: 6px;margin-left: 30px;}
//                             30%{margin-top: 45px;margin-left: 20px;}
//                             35%{margin-top: 15px;margin-left: 20px;}
//                             40%{margin-top: 0px;margin-left: 30px;}
//                             45%{margin-top: 20px;margin-left: 50px;}
//                             50%{margin-top: 35px;margin-left: 60px;}
//                             55%{margin-top: 55px;margin-left: 45px;}
//                             60%{margin-top: 60px;margin-left: 30px;}
//                             65%{margin-top: 0px;margin-left: 30px;}
//                             70%{margin-top: 60px;margin-left: 30px;}
//                             75%{margin-top: 15px;margin-left: 25px;}
//                             80%{margin-top: 55px;margin-left: 20px;}
//                             85%{margin-top: 0px;margin-left: 30px;}
//                             90%{margin-top: 55px;margin-left: 27px;}
//                             95%{margin-top: 20px;margin-left: 58px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #balls4 {
//                             animation: spinStat4 5s linear infinite alternate;
//                             -webkit-animation: spinStat4 5s linear infinite alternate;
//                         }
//                         `;
//                 ball4.appendChild(keyFramesw);
//                 // =========================blue ball5====================================
//                 document.getElementById("balls5").style.animationName = "spinStat5";
//                 var ball5 = document.querySelector('#balls5');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat5 { 
//                             0%{margin-top: 60px;margin-left: 35px;}
//                             5%{margin-top: 40px;margin-left: 50px;}
//                             10%{margin-top: 60px;margin-left: 30px;}
//                             15%{margin-top: 30px;margin-left: 0px;}
//                             20%{margin-top: 20px;margin-left: 20px;}
//                             25%{margin-top: 0px;margin-left: 30px;}
//                             30%{margin-top: 60px;margin-left: 30px;}
//                             35%{margin-top: 40px;margin-left: 25px;}
//                             40%{margin-top: 60px;margin-left: 30px;}
//                             45%{margin-top: 10px;margin-left: 30px;}
//                             50%{margin-top: 30px;margin-left: 60px;}
//                             55%{margin-top: 60px;margin-left: 35px;}
//                             60%{margin-top: 0px;margin-left: 30px;}
//                             65%{margin-top: 15px;margin-left: 25px;}
//                             70%{margin-top: 20px;margin-left: 50px;}
//                             75%{margin-top: 35px;margin-left: 0px;}
//                             80%{margin-top: 12px;margin-left: 20px;}
//                             85%{margin-top: 0px;margin-left: 35px;}
//                             90%{margin-top: 60px;margin-left: 30px;}
//                             95%{margin-top: 30px;margin-left: 60px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #balls5 {
//                             animation: spinStat5 5s linear infinite alternate;
//                             -webkit-animation: spinStat5 5s linear infinite alternate;
//                         }
//                         `;
//                 ball5.appendChild(keyFramesw);
//                 //=========================blue ball6====================================
//                 document.getElementById("balls6").style.animationName = "spinStat6";
//                 var ball6 = document.querySelector('#balls6');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat6 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 0px;margin-left: 30px;}
//                             10%{margin-top: 10px;margin-left: 45px;}
//                             15%{margin-top: 60px;margin-left: 28px;}
//                             20%{margin-top: 10px;margin-left: 25px;}
//                             25%{margin-top: 30px;margin-left: 0px;}
//                             30%{margin-top: 0px;margin-left: 30px;}
//                             35%{margin-top: 44px;margin-left: 44px;}
//                             40%{margin-top: 60px;margin-left: 30x;}
//                             45%{margin-top: 40px;margin-left: 30px;}
//                             50%{margin-top: 20px;margin-left: 45px;}
//                             55%{margin-top: 40px;margin-left: 40px;}
//                             60%{margin-top: 55px;margin-left: 35px;}
//                             65%{margin-top: 50px;margin-left: 30px;}
//                             70%{margin-top: 0px;margin-left: 30px;}
//                             75%{margin-top: 60px;margin-left: 10px;}
//                             80%{margin-top: 30px;margin-left: 60px;}
//                             85%{margin-top: 25px;margin-left: 55px;}
//                             90%{margin-top: 5px;margin-left: 40px;}
//                             95%{margin-top: 20px;margin-left: 25x;}
//                             100%{margin-top: 60px;margin-left: 31px;background-position: 100%;}

//                         }
//                         #balls6 {
//                             animation: spinStat6 5s linear infinite alternate;
//                             -webkit-animation: spinStat6 5s linear infinite alternate;
//                         }
//                         `;
//                 ball6.appendChild(keyFramesw);
//                 //=========================blue ball7====================================
//                 document.getElementById("balls7").style.animationName = "spinStat7";
//                 var ball7 = document.querySelector('#balls7');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat7 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 40px;margin-left: 20px;}
//                             10%{margin-top: 30px;margin-left: 0px;}
//                             15%{margin-top: 25px;margin-left: 20px;}
//                             20%{margin-top: 0px;margin-left: 30px;}
//                             25%{margin-top: 25px;margin-left: 40px;}
//                             30%{margin-top: 50px;margin-left: 40px;}
//                             35%{margin-top: 60px;margin-left: 30px;}
//                             40%{margin-top: 0px;margin-left: 30px;}
//                             45%{margin-top: 55px;margin-left: 10px;}
//                             50%{margin-top: 15px;margin-left: 20px;}
//                             55%{margin-top: 25px;margin-left: 45px;}
//                             60%{margin-top: 50px;margin-left: 15px;}
//                             65%{margin-top: 20px;margin-left: 50px;}
//                             70%{margin-top: 0px;margin-left: 30px;}
//                             75%{margin-top: 15px;margin-left: 25px;}
//                             80%{margin-top: 50px;margin-left: 35px;}
//                             85%{margin-top: 10px;margin-left: 35px;}
//                             90%{margin-top: 45px;margin-left: 15px;}
//                             95%{margin-top: 60px;margin-left: 30px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}

//                         }
//                         #balls7 {
//                             animation: spinStat7 5s linear infinite alternate;
//                             -webkit-animation: spinStat7 5s linear infinite alternate;
//                         }
//                         `;
//                 ball7.appendChild(keyFramesw);
//                 // //=========================blue ball8====================================
//                 document.getElementById("balls8").style.animationName = "spinStat8";
//                 var ball8 = document.querySelector('#balls8');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat8 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 15px;margin-left: 50px;}
//                             10%{margin-top: 55px;margin-left: 30px;}
//                             15%{margin-top: 40px;margin-left: 23px;}
//                             20%{margin-top: 25px;margin-left: 35px;}
//                             25%{margin-top: 40px;margin-left: 40px;}
//                             30%{margin-top: 60px;margin-left: 30px;}
//                             35%{margin-top: 45px;margin-left: 10px;}
//                             40%{margin-top: 55px;margin-left: 25px;}
//                             45%{margin-top: 15px;margin-left: 27px;}
//                             50%{margin-top: 30px;margin-left: 60px;}
//                             55%{margin-top: 55px;margin-left: 55px;}
//                             60%{margin-top: 60px;margin-left: 30px;}
//                             65%{margin-top: 40px;margin-left: 25px;}
//                             70%{margin-top: 10px;margin-left: 12px;}
//                             75%{margin-top: 45px;margin-left: 15px;}
//                             80%{margin-top: 40px;margin-left: 55px;}
//                             85%{margin-top: 0px;margin-left: 30px;}
//                             90%{margin-top: 55px;margin-left: 25px;}
//                             95%{margin-top: 30px;margin-left: 30px;}
//                             100%{margin-top: 58px;margin-left: 28px;background-position: 100%;}

//                         }
//                         #balls8 {
//                             animation: spinStat8 5s linear infinite alternate;
//                             -webkit-animation: spinStat8 5s linear infinite alternate;
//                         }
//                         `;
//                 ball8.appendChild(keyFramesw);
//                 //=========================blue ball9====================================
//                 document.getElementById("balls9").style.animationName = "spinStat9";
//                 var ball9 = document.querySelector('#balls9');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat9 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 45px;margin-left: 15px;}
//                             10%{margin-top: 55px;margin-left: 15px;}
//                             15%{margin-top: 60px;margin-left: 30px;}
//                             20%{margin-top: 45px;margin-left: 40px;}
//                             25%{margin-top: 55px;margin-left: 25px;}
//                             30%{margin-top: 10px;margin-left: 25px;}
//                             35%{margin-top: 45px;margin-left: 45px;}
//                             40%{margin-top: 60px;margin-left: 30px;}
//                             45%{margin-top: 30px;margin-left: 0px;}
//                             50%{margin-top: 10px;margin-left: 25px;}
//                             55%{margin-top: 40px;margin-left: 35px;}
//                             60%{margin-top: 55px;margin-left: 25px;}
//                             65%{margin-top: 60px;margin-left: 33px;}
//                             70%{margin-top: 40px;margin-left: 40px;}
//                             75%{margin-top: 15px;margin-left: 20px;}
//                             80%{margin-top: 30px;margin-left: 15px;}
//                             85%{margin-top: 60px;margin-left: 30px;}
//                             90%{margin-top: 0px;margin-left: 30px;}
//                             95%{margin-top: 30px;margin-left: 0px;}
//                             100%{margin-top: 61px;margin-left: 35px;background-position: 100%;}

//                         }
//                         #balls9 {
//                             animation: spinStat9 5s linear infinite alternate;
//                             -webkit-animation: spinStat9 5s linear infinite alternate;
//                         }
//                         `;
//                 ball9.appendChild(keyFramesw);
//                 //=========================blue ball0====================================
//                 document.getElementById("balls0").style.animationName = "spinStat0";
//                 var ball0 = document.querySelector('#balls0');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat0 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 50px;margin-left: 15px;}
//                             10%{margin-top: 45px;margin-left: 20px;}
//                             15%{margin-top: 20px;margin-left: 15px;}
//                             20%{margin-top: 0px;margin-left: 30px;}
//                             25%{margin-top: 20px;margin-left: 38px;}
//                             30%{margin-top: 35px;margin-left: 40px;}
//                             35%{margin-top: 45px;margin-left: 45px;}
//                             40%{margin-top: 58px;margin-left: 50px;}
//                             45%{margin-top: 30px;margin-left: 0px;}
//                             50%{margin-top: 0px;margin-left: 30px;}
//                             55%{margin-top: 57px;margin-left: 28px;}
//                             60%{margin-top: 15px;margin-left: 35px;}
//                             65%{margin-top: 40px;margin-left: 20px;}
//                             70%{margin-top: 15px;margin-left: 35px;}
//                             75%{margin-top: 60px;margin-left: 30px;}
//                             80%{margin-top: 50px;margin-left: 15px;}
//                             85%{margin-top: 10px;margin-left: 40px;}
//                             90%{margin-top: 40px;margin-left: 23px;}
//                             95%{margin-top: 20px;margin-left: 30px;}
//                             100%{margin-top: 58px;margin-left: 28px;background-position: 100%;}
//                         }
//                         #balls0 {
//                             animation: spinStat0 5s linear infinite alternate;
//                             -webkit-animation: spinStat0 5s linear infinite alternate;
//                         }
//                         `;
//                 ball0.appendChild(keyFramesw);
//                var psound=parseInt(document.getElementById("pSound").innerHTML);
//                 if(psound==2){
//                     puaseplay();
//                 }else{
//                     play();
//                 }
//             }
//             if (cnt == 130) {
//                 var result1 = Math.floor(Math.random() * 10);
//                 document.getElementById("boxball1").innerHTML = result1;
//                 document.getElementById("boxBall1").style.animation = "";
//                 document.getElementById("balls0").style.animationName = "anib0";
//                 document.getElementById("balls9").style.animationName = "anib9";
//                 document.getElementById("balls8").style.animationName = "anib8";
//                 document.getElementById("balls7").style.animationName = "anib7";
//                 document.getElementById("balls6").style.animationName = "anib6";
//                 document.getElementById("balls5").style.animationName = "anib5";
//                 document.getElementById("balls4").style.animationName = "anib4";
//                 document.getElementById("balls3").style.animationName = "anib3";
//                 document.getElementById("balls2").style.animationName = "anib2";
//                 document.getElementById("balls1").style.animationName = "anib1";
//                 document.getElementById("imgspin").style.animation = "none";
//                 var runball = document.querySelector('#boxBall1');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes run {
//                             from {
//                                 height: 60px;
//                                 width: 60px;
//                                 margin-top: 0px;
//                                 margin-left: 80px;
//                                 opacity: 1;
//                             }
//                             to {
//                                 margin-top: 80px;
//                                 margin-left: 50px;
//                                 height: 40px;
//                                 width: 40px;
//                                 z-index: 1;
//                                 opacity: 0;
//                             }
//                         }
//                         #boxBall1 {
//                             animation: run 1s linear infinite;
//                             -webkit-animation: run 1s linear infinite;
//                         }
//                         `;
//                 runball.appendChild(keyFramesw);
//                 psound=parseInt(document.getElementById("pSound").innerHTML);
//                 if(psound==2){
//                     puase1();
//                 }else{
//                     play1();
//                 }
//             }
//             /*2*/
//             if (cnt == 132) {
//                 document.getElementById("imgspin2").style.animation = "";
//                 var spinball = document.querySelector('#imgspin2');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spin2 {
//                             from {
//                                 transform: rotate(0deg);
//                                 -webkit-transform: rotate(0deg);
//                             }
//                             to {
//                                 transform: rotate(360deg);
//                                 -webkit-transform: rotate(360deg);
//                             }
//                         }
//                         #imgspin2 {
//                             animation: spin2 0.8s linear infinite;
//                             -webkit-animation: spin 0.8s linear infinite;
//                         }
//                         `;
//                 spinball.appendChild(keyFramesw);
//                 // =========================blue ball1====================================
//                 document.getElementById("ballss1").style.animationName = "spinStat1";
//                 var balls1 = document.querySelector('#ballss1');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat1 {
//                             0%{margin-top: 60px;margin-left: 50px;}
//                             5%{margin-top: 30px;margin-left: 0px;}
//                             10%{margin-top: 50px;margin-left: 20px;}
//                             15%{margin-top: 0px;margin-left: 30px;}
//                             20%{margin-top: 60px;margin-left: 40px;}
//                             25%{margin-top: 50px;margin-left: 40px;}
//                             30%{margin-top: 10px;margin-left: 20px;}
//                             35%{margin-top: 0px;margin-left: 20px;}
//                             40%{margin-top: 30px;margin-left: 60px;}
//                             45%{margin-top: 10px;margin-left: 40px;}
//                             50%{margin-top: 63px;margin-left: 30px;}
//                             55{margin-top: 10px;margin-left: 35px;}
//                             60%{margin-top: 33px;margin-left: 0px;}
//                             65%{margin-top: 10px;margin-left: 30px;}
//                             70%{margin-top: 0px;margin-left: 25px;}
//                             75%{margin-top: 20px;margin-left: 20px;}
//                             80%{margin-top: 20px;margin-left: 40px;}
//                             85%{margin-top:20px;margin-left: 12px;}
//                             90%{margin-top: 50px;margin-left: 20px;}
//                             95%{margin-top: 0px;margin-left: 35px;}
//                             100%{margin-top: 27px;margin-left: 33px;background-position: 100%;}
//                         }
//                         #ballss1 {
//                             animation: spinStat1 5s linear infinite alternate;
//                             -webkit-animation: spinstat1 5s linear infinite alternate;
//                         }
//                         `;
//                 balls1.appendChild(keyFramesw);
//                 // =========================blue balls2====================================
//                 document.getElementById("ballss2").style.animationName = "spinStats2";
//                 var ball2 = document.querySelector('#ballss2');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats2 {
//                             0%{margin-top: 60px;margin-left: 31px;}
//                                 5%{margin-top: 8px;margin-left: 30px;}
//                                 10%{margin-top: 30px;margin-left: 50px;}
//                                 15%{margin-top: 20px;margin-left: 10px;}
//                                 20%{margin-top: 50px;margin-left: 30px;}
//                                 25%{margin-top: 0px;margin-left: 30px;}
//                                 30%{margin-top: 60px;margin-left: 30px;}
//                                 35%{margin-top: 0px;margin-left: 30px;}
//                                 40%{margin-top: 30px;margin-left: 10px;}
//                                 45%{margin-top: 30px;margin-left: 60px;}
//                                 50%{margin-top: 63px;margin-left: 30px;}
//                                 55%{margin-top: 10px;margin-left: 45px;}
//                                 60%{margin-top: 55px;margin-left: 10px;}
//                                 65%{margin-top: 20px;margin-left: 35px;}
//                                 70%{margin-top: 45px;margin-left: 60px;}
//                                 75%{margin-top: 10px;margin-left: 49px;}
//                                 80%{margin-top: 48px;margin-left: 50px;}
//                                 85%{margin-top: 18px;margin-left: 30px;}
//                                 90%{margin-top: 20px;margin-left: 10px;}
//                                 95%{margin-top: 0px;margin-left: 30px;}
//                                 100%{margin-top: 63px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballss2 {
//                             animation: spinStats2 5s linear infinite alternate;
//                             -webkit-animation: spinStats2 5s linear infinite alternate;
//                         }
//                         `;
//                 ball2.appendChild(keyFramesw);
//                 // =========================blue balls3====================================
//                 document.getElementById("ballss3").style.animationName = "spinStats3";
//                 var ball3 = document.querySelector('#ballss3');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats3 {
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 30px;margin-left: 0px;}
//                             10%{margin-top: 0px;margin-left: 30px;}
//                             15%{margin-top: 30px;margin-left: 60px;}
//                             20%{margin-top: 60px;margin-left: 30px;}
//                             25%{margin-top: 0px;margin-left: 27px;}
//                             30%{margin-top: 20px;margin-left: 50px;}
//                             35%{margin-top: 60px;margin-left: 30px;}
//                             40%{margin-top: 30px;margin-left: 15px;}
//                             45%{margin-top: 45px;margin-left: 45px;}
//                             50%{margin-top: 10px;margin-left: 50px;}
//                             55%{margin-top: 55px;margin-left: 30px;}
//                             60%{margin-top: 30px;margin-left: 20px;}
//                             65%{margin-top: 60px;margin-left: 30px;}
//                             70%{margin-top: 40px;margin-left: 15px;}
//                             75%{margin-top: 15px;margin-left: 30px;}
//                             80%{margin-top: 18px;margin-left: 20px;}
//                             85%{margin-top: 20px;margin-left: 60px;}
//                             90%{margin-top: 60px;margin-left: 30px;}
//                             95%{margin-top: 10px;margin-left: 35px;}
//                             100%{margin-top: 63px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballss3 {
//                             animation: spinStats3 5s linear infinite alternate;
//                             -webkit-animation: spinStats3 5s linear infinite alternate;
//                         }
//                         `;
//                 ball3.appendChild(keyFramesw);
//                 // =========================blue balls4====================================
//                 document.getElementById("ballss4").style.animationName = "spinStats4";
//                 var ball4 = document.querySelector('#ballss4');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats4 {
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 15px;margin-left: 30px;}
//                             10%{margin-top: 40px;margin-left: 50px;}
//                             15%{margin-top: 60px;margin-left: 30px;}
//                             20%{margin-top: 50px;margin-left: 50px;}
//                             25%{margin-top: 6px;margin-left: 30px;}
//                             30%{margin-top: 45px;margin-left: 20px;}
//                             35%{margin-top: 15px;margin-left: 20px;}
//                             40%{margin-top: 0px;margin-left: 30px;}
//                             45%{margin-top: 20px;margin-left: 50px;}
//                             50%{margin-top: 35px;margin-left: 60px;}
//                             55%{margin-top: 55px;margin-left: 45px;}
//                             60%{margin-top: 60px;margin-left: 30px;}
//                             65%{margin-top: 0px;margin-left: 30px;}
//                             70%{margin-top: 60px;margin-left: 30px;}
//                             75%{margin-top: 15px;margin-left: 25px;}
//                             80%{margin-top: 55px;margin-left: 20px;}
//                             85%{margin-top: 0px;margin-left: 30px;}
//                             90%{margin-top: 55px;margin-left: 27px;}
//                             95%{margin-top: 20px;margin-left: 58px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballss4 {
//                             animation: spinStats4 5s linear infinite alternate;
//                             -webkit-animation: spinStats4 5s linear infinite alternate;
//                         }
//                         `;
//                 ball4.appendChild(keyFramesw);
//                 // =========================blue balls5====================================
//                 document.getElementById("ballss5").style.animationName = "spinStats5";
//                 var ball5 = document.querySelector('#ballss5');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats5 { 
//                             0%{margin-top: 60px;margin-left: 35px;}
//                             5%{margin-top: 40px;margin-left: 50px;}
//                             10%{margin-top: 60px;margin-left: 30px;}
//                             15%{margin-top: 30px;margin-left: 0px;}
//                             20%{margin-top: 20px;margin-left: 20px;}
//                             25%{margin-top: 0px;margin-left: 30px;}
//                             30%{margin-top: 60px;margin-left: 30px;}
//                             35%{margin-top: 40px;margin-left: 25px;}
//                             40%{margin-top: 60px;margin-left: 30px;}
//                             45%{margin-top: 10px;margin-left: 30px;}
//                             50%{margin-top: 30px;margin-left: 60px;}
//                             55%{margin-top: 60px;margin-left: 35px;}
//                             60%{margin-top: 0px;margin-left: 30px;}
//                             65%{margin-top: 15px;margin-left: 25px;}
//                             70%{margin-top: 20px;margin-left: 50px;}
//                             75%{margin-top: 35px;margin-left: 0px;}
//                             80%{margin-top: 12px;margin-left: 20px;}
//                             85%{margin-top: 0px;margin-left: 35px;}
//                             90%{margin-top: 60px;margin-left: 30px;}
//                             95%{margin-top: 30px;margin-left: 60px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}

//                         }
//                         #ballss5 {
//                             animation: spinStats5 5s linear infinite alternate;
//                             -webkit-animation: spinStats5 5s linear infinite alternate;
//                         }
//                         `;
//                 ball5.appendChild(keyFramesw);
//                 //=========================blue balls6====================================
//                 document.getElementById("ballss6").style.animationName = "spinStats6";
//                 var ball6 = document.querySelector('#ballss6');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats6 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 0px;margin-left: 30px;}
//                             10%{margin-top: 10px;margin-left: 45px;}
//                             15%{margin-top: 60px;margin-left: 28px;}
//                             20%{margin-top: 10px;margin-left: 25px;}
//                             25%{margin-top: 30px;margin-left: 0px;}
//                             30%{margin-top: 0px;margin-left: 30px;}
//                             35%{margin-top: 44px;margin-left: 44px;}
//                             40%{margin-top: 60px;margin-left: 30x;}
//                             45%{margin-top: 40px;margin-left: 30px;}
//                             50%{margin-top: 20px;margin-left: 45px;}
//                             55%{margin-top: 40px;margin-left: 40px;}
//                             60%{margin-top: 55px;margin-left: 35px;}
//                             65%{margin-top: 50px;margin-left: 30px;}
//                             70%{margin-top: 0px;margin-left: 30px;}
//                             75%{margin-top: 60px;margin-left: 10px;}
//                             80%{margin-top: 30px;margin-left: 60px;}
//                             85%{margin-top: 25px;margin-left: 55px;}
//                             90%{margin-top: 5px;margin-left: 40px;}
//                             95%{margin-top: 20px;margin-left: 25x;}
//                             100%{margin-top: 60px;margin-left: 31px;background-position: 100%;}

//                         }
//                         #ballss6 {
//                             animation: spinStats6 5s linear infinite alternate;
//                             -webkit-animation: spinStats6 5s linear infinite alternate;
//                         }
//                         `;
//                 ball6.appendChild(keyFramesw);
//                 //=========================blue balls7====================================
//                 document.getElementById("ballss7").style.animationName = "spinStats7";
//                 var ball7 = document.querySelector('#ballss7');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats7 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 40px;margin-left: 20px;}
//                             10%{margin-top: 30px;margin-left: 0px;}
//                             15%{margin-top: 25px;margin-left: 20px;}
//                             20%{margin-top: 0px;margin-left: 30px;}
//                             25%{margin-top: 25px;margin-left: 40px;}
//                             30%{margin-top: 50px;margin-left: 40px;}
//                             35%{margin-top: 60px;margin-left: 30px;}
//                             40%{margin-top: 0px;margin-left: 30px;}
//                             45%{margin-top: 55px;margin-left: 10px;}
//                             50%{margin-top: 15px;margin-left: 20px;}
//                             55%{margin-top: 25px;margin-left: 45px;}
//                             60%{margin-top: 50px;margin-left: 15px;}
//                             65%{margin-top: 20px;margin-left: 50px;}
//                             70%{margin-top: 0px;margin-left: 30px;}
//                             75%{margin-top: 15px;margin-left: 25px;}
//                             80%{margin-top: 50px;margin-left: 35px;}
//                             85%{margin-top: 10px;margin-left: 35px;}
//                             90%{margin-top: 45px;margin-left: 15px;}
//                             95%{margin-top: 60px;margin-left: 30px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}

//                         }
//                         #ballss7 {
//                             animation: spinStats7 5s linear infinite alternate;
//                             -webkit-animation: spinStats7 5s linear infinite alternate;
//                         }
//                         `;
//                 ball7.appendChild(keyFramesw);
//                 //=========================blue balls8====================================
//                 document.getElementById("ballss8").style.animationName = "spinStats8";
//                 var ball8 = document.querySelector('#ballss8');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats8 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 15px;margin-left: 50px;}
//                             10%{margin-top: 55px;margin-left: 30px;}
//                             15%{margin-top: 40px;margin-left: 23px;}
//                             20%{margin-top: 25px;margin-left: 35px;}
//                             25%{margin-top: 40px;margin-left: 40px;}
//                             30%{margin-top: 60px;margin-left: 30px;}
//                             35%{margin-top: 45px;margin-left: 10px;}
//                             40%{margin-top: 55px;margin-left: 25px;}
//                             45%{margin-top: 15px;margin-left: 27px;}
//                             50%{margin-top: 30px;margin-left: 60px;}
//                             55%{margin-top: 55px;margin-left: 55px;}
//                             60%{margin-top: 60px;margin-left: 30px;}
//                             65%{margin-top: 40px;margin-left: 25px;}
//                             70%{margin-top: 10px;margin-left: 12px;}
//                             75%{margin-top: 45px;margin-left: 15px;}
//                             80%{margin-top: 40px;margin-left: 55px;}
//                             85%{margin-top: 0px;margin-left: 30px;}
//                             90%{margin-top: 55px;margin-left: 25px;}
//                             95%{margin-top: 30px;margin-left: 30px;}
//                             100%{margin-top: 58px;margin-left: 28px;background-position: 100%;}

//                         }
//                         #ballss8 {
//                             animation: spinStats8 5s linear infinite alternate;
//                             -webkit-animation: spinStats8 5s linear infinite alternate;
//                         }
//                         `;
//                 ball8.appendChild(keyFramesw);
//                 // =========================blue balls9====================================
//                 document.getElementById("ballss9").style.animationName = "spinStats9";
//                 var ball9 = document.querySelector('#ballss9');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats9 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 45px;margin-left: 15px;}
//                             10%{margin-top: 55px;margin-left: 15px;}
//                             15%{margin-top: 60px;margin-left: 30px;}
//                             20%{margin-top: 45px;margin-left: 40px;}
//                             25%{margin-top: 55px;margin-left: 25px;}
//                             30%{margin-top: 10px;margin-left: 25px;}
//                             35%{margin-top: 45px;margin-left: 45px;}
//                             40%{margin-top: 60px;margin-left: 30px;}
//                             45%{margin-top: 30px;margin-left: 0px;}
//                             50%{margin-top: 10px;margin-left: 25px;}
//                             55%{margin-top: 40px;margin-left: 35px;}
//                             60%{margin-top: 55px;margin-left: 25px;}
//                             65%{margin-top: 60px;margin-left: 33px;}
//                             70%{margin-top: 40px;margin-left: 40px;}
//                             75%{margin-top: 15px;margin-left: 20px;}
//                             80%{margin-top: 30px;margin-left: 15px;}
//                             85%{margin-top: 60px;margin-left: 30px;}
//                             90%{margin-top: 0px;margin-left: 30px;}
//                             95%{margin-top: 30px;margin-left: 0px;}
//                             100%{margin-top: 61px;margin-left: 35px;background-position: 100%;}

//                         }
//                         #ballss9 {
//                             animation: spinStats9 5s linear infinite alternate;
//                             -webkit-animation: spinStats9 5s linear infinite alternate;
//                         }
//                         `;
//                 ball9.appendChild(keyFramesw);
//                 //=========================blue balls0====================================
//                 document.getElementById("ballss0").style.animationName = "spinStats0";
//                 var ball0 = document.querySelector('#ballss0');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats0 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 50px;margin-left: 15px;}
//                             10%{margin-top: 45px;margin-left: 20px;}
//                             15%{margin-top: 20px;margin-left: 15px;}
//                             20%{margin-top: 0px;margin-left: 30px;}
//                             25%{margin-top: 20px;margin-left: 38px;}
//                             30%{margin-top: 35px;margin-left: 40px;}
//                             35%{margin-top: 45px;margin-left: 45px;}
//                             40%{margin-top: 58px;margin-left: 50px;}
//                             45%{margin-top: 30px;margin-left: 0px;}
//                             50%{margin-top: 0px;margin-left: 30px;}
//                             55%{margin-top: 57px;margin-left: 28px;}
//                             60%{margin-top: 15px;margin-left: 35px;}
//                             65%{margin-top: 40px;margin-left: 20px;}
//                             70%{margin-top: 15px;margin-left: 35px;}
//                             75%{margin-top: 60px;margin-left: 30px;}
//                             80%{margin-top: 50px;margin-left: 15px;}
//                             85%{margin-top: 10px;margin-left: 40px;}
//                             90%{margin-top: 40px;margin-left: 23px;}
//                             95%{margin-top: 20px;margin-left: 30px;}
//                             100%{margin-top: 58px;margin-left: 28px;background-position: 100%;}

//                         }
//                         #ballss0 {
//                             animation: spinStats0 5s linear infinite alternate;
//                             -webkit-animation: spinStats0 5s linear infinite alternate;
//                         }
//                         `;
//                 ball0.appendChild(keyFramesw);
//                 psound=parseInt(document.getElementById("pSound").innerHTML);
//                 if(psound==2){
//                     puaseplay();
//                 }else{
//                     play();
//                 }
//             }
//             if (cnt == 129) {
//                 document.getElementById("boxBall1").style.animation = "none";
//                 result1 = document.getElementById("boxball1").innerHTML;
//                 document.getElementById("nums1").innerHTML = result1;
//             }
//             if (cnt == 127) {
//                 var result2 = Math.floor(Math.random() * 10);
//                 document.getElementById("boxball2").innerHTML = result2;
//                 document.getElementById("boxBall2").style.animation = "";
//                 document.getElementById("ballss0").style.animationName = "anib0";
//                 document.getElementById("ballss9").style.animationName = "anib9";
//                 document.getElementById("ballss8").style.animationName = "anib8";
//                 document.getElementById("ballss7").style.animationName = "anib7";
//                 document.getElementById("ballss6").style.animationName = "anib6";
//                 document.getElementById("ballss5").style.animationName = "anib5";
//                 document.getElementById("ballss4").style.animationName = "anib4";
//                 document.getElementById("ballss3").style.animationName = "anib3";
//                 document.getElementById("ballss2").style.animationName = "anib2";
//                 document.getElementById("ballss1").style.animationName = "anib1";
//                 document.getElementById("imgspin2").style.animation = "none";
//                 var runball = document.querySelector('#boxBall2');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes run1 {
//                             from {
//                                 height: 60px;
//                                 width: 60px;
//                                 margin-top: 0px;
//                                 margin-left: 80px;
//                                 opacity: 1;
//                             }
//                             to {
//                                 margin-top: 80px;
//                                 margin-left: -115px;
//                                 height: 40px;
//                                 width: 40px;
//                                 z-index: 1;
//                                 opacity: 0;
//                             }
//                         }
//                         #boxBall2 {
//                             animation: run1 1s linear infinite;
//                             -webkit-animation: run1 1s linear infinite;
//                         }
//                         `;
//                 runball.appendChild(keyFramesw);
//                 psound=parseInt(document.getElementById("pSound").innerHTML);
//                 if(psound==2){
//                     puase1();
//                 }else{
//                     play1();
//                 }
//             }
//             /*3*/
//             if (cnt == 129) {
//                 document.getElementById("imgspin3").style.animation = "";
//                 var spinball = document.querySelector('#imgspin3');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spin2 {
//                             from {
//                                 transform: rotate(0deg);
//                                 -webkit-transform: rotate(0deg);
//                             }
//                             to {
//                                 transform: rotate(360deg);
//                                 -webkit-transform: rotate(360deg);
//                             }
//                         }
//                         #imgspin3 {
//                             animation: spin2 0.8s linear infinite;
//                             -webkit-animation: spin2 0.8s linear infinite;
//                         }
//                         `;
//                 spinball.appendChild(keyFramesw);
//                 // =========================blue ball1====================================
//                 document.getElementById("ballsss1").style.animationName = "spinStat1";
//                 var balls1 = document.querySelector('#ballsss1');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat1 {
//                             0%{margin-top: 60px;margin-left: 50px;}
//                             5%{margin-top: 30px;margin-left: 0px;}
//                             10%{margin-top: 50px;margin-left: 20px;}
//                             15%{margin-top: 0px;margin-left: 30px;}
//                             20%{margin-top: 60px;margin-left: 40px;}
//                             25%{margin-top: 50px;margin-left: 40px;}
//                             30%{margin-top: 10px;margin-left: 20px;}
//                             35%{margin-top: 0px;margin-left: 20px;}
//                             40%{margin-top: 30px;margin-left: 60px;}
//                             45%{margin-top: 10px;margin-left: 40px;}
//                             50%{margin-top: 63px;margin-left: 30px;}
//                             55{margin-top: 10px;margin-left: 35px;}
//                             60%{margin-top: 33px;margin-left: 0px;}
//                             65%{margin-top: 10px;margin-left: 30px;}
//                             70%{margin-top: 0px;margin-left: 25px;}
//                             75%{margin-top: 20px;margin-left: 20px;}
//                             80%{margin-top: 20px;margin-left: 40px;}
//                             85%{margin-top:20px;margin-left: 12px;}
//                             90%{margin-top: 50px;margin-left: 20px;}
//                             95%{margin-top: 0px;margin-left: 35px;}
//                             100%{margin-top: 27px;margin-left: 33px;background-position: 100%;}
//                         }
//                         #ballsss1 {
//                             animation: spinStat1 5s linear infinite alternate;
//                             -webkit-animation: spinstat1 5s linear infinite alternate;
//                         }
//                         `;
//                 balls1.appendChild(keyFramesw);
//                 // =========================blue balls2====================================
//                 document.getElementById("ballsss2").style.animationName = "spinStats2";
//                 var ball2 = document.querySelector('#ballsss2');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats2 {
//                             0%{margin-top: 60px;margin-left: 31px;}
//                                 5%{margin-top: 8px;margin-left: 30px;}
//                                 10%{margin-top: 30px;margin-left: 50px;}
//                                 15%{margin-top: 20px;margin-left: 10px;}
//                                 20%{margin-top: 50px;margin-left: 30px;}
//                                 25%{margin-top: 0px;margin-left: 30px;}
//                                 30%{margin-top: 60px;margin-left: 30px;}
//                                 35%{margin-top: 0px;margin-left: 30px;}
//                                 40%{margin-top: 30px;margin-left: 10px;}
//                                 45%{margin-top: 30px;margin-left: 60px;}
//                                 50%{margin-top: 63px;margin-left: 30px;}
//                                 55%{margin-top: 10px;margin-left: 45px;}
//                                 60%{margin-top: 55px;margin-left: 10px;}
//                                 65%{margin-top: 20px;margin-left: 35px;}
//                                 70%{margin-top: 45px;margin-left: 60px;}
//                                 75%{margin-top: 10px;margin-left: 49px;}
//                                 80%{margin-top: 48px;margin-left: 50px;}
//                                 85%{margin-top: 18px;margin-left: 30px;}
//                                 90%{margin-top: 20px;margin-left: 10px;}
//                                 95%{margin-top: 0px;margin-left: 30px;}
//                                 100%{margin-top: 63px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballsss2 {
//                             animation: spinStats2 5s linear infinite alternate;
//                             -webkit-animation: spinStats2 5s linear infinite alternate;
//                         }
//                         `;
//                 ball2.appendChild(keyFramesw);
//                 // =========================blue balls3====================================
//                 document.getElementById("ballsss3").style.animationName = "spinStats3";
//                 var ball3 = document.querySelector('#ballsss3');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats3 {
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 30px;margin-left: 0px;}
//                             10%{margin-top: 0px;margin-left: 30px;}
//                             15%{margin-top: 30px;margin-left: 60px;}
//                             20%{margin-top: 60px;margin-left: 30px;}
//                             25%{margin-top: 0px;margin-left: 27px;}
//                             30%{margin-top: 20px;margin-left: 50px;}
//                             35%{margin-top: 60px;margin-left: 30px;}
//                             40%{margin-top: 30px;margin-left: 15px;}
//                             45%{margin-top: 45px;margin-left: 45px;}
//                             50%{margin-top: 10px;margin-left: 50px;}
//                             55%{margin-top: 55px;margin-left: 30px;}
//                             60%{margin-top: 30px;margin-left: 20px;}
//                             65%{margin-top: 60px;margin-left: 30px;}
//                             70%{margin-top: 40px;margin-left: 15px;}
//                             75%{margin-top: 15px;margin-left: 30px;}
//                             80%{margin-top: 18px;margin-left: 20px;}
//                             85%{margin-top: 20px;margin-left: 60px;}
//                             90%{margin-top: 60px;margin-left: 30px;}
//                             95%{margin-top: 10px;margin-left: 35px;}
//                             100%{margin-top: 63px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballsss3 {
//                             animation: spinStats3 5s linear infinite alternate;
//                             -webkit-animation: spinStats3 5s linear infinite alternate;
//                         }
//                         `;
//                 ball3.appendChild(keyFramesw);
//                 // =========================blue balls4====================================
//                 document.getElementById("ballsss4").style.animationName = "spinStats4";
//                 var ball4 = document.querySelector('#ballsss4');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats4 {
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 15px;margin-left: 30px;}
//                             10%{margin-top: 40px;margin-left: 50px;}
//                             15%{margin-top: 60px;margin-left: 30px;}
//                             20%{margin-top: 50px;margin-left: 50px;}
//                             25%{margin-top: 6px;margin-left: 30px;}
//                             30%{margin-top: 45px;margin-left: 20px;}
//                             35%{margin-top: 15px;margin-left: 20px;}
//                             40%{margin-top: 0px;margin-left: 30px;}
//                             45%{margin-top: 20px;margin-left: 50px;}
//                             50%{margin-top: 35px;margin-left: 60px;}
//                             55%{margin-top: 55px;margin-left: 45px;}
//                             60%{margin-top: 60px;margin-left: 30px;}
//                             65%{margin-top: 0px;margin-left: 30px;}
//                             70%{margin-top: 60px;margin-left: 30px;}
//                             75%{margin-top: 15px;margin-left: 25px;}
//                             80%{margin-top: 55px;margin-left: 20px;}
//                             85%{margin-top: 0px;margin-left: 30px;}
//                             90%{margin-top: 55px;margin-left: 27px;}
//                             95%{margin-top: 20px;margin-left: 58px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballsss4 {
//                             animation: spinStats4 5s linear infinite alternate;
//                             -webkit-animation: spinStats4 5s linear infinite alternate;
//                         }
//                         `;
//                 ball4.appendChild(keyFramesw);
//                 // =========================blue balls5====================================
//                 document.getElementById("ballsss5").style.animationName = "spinStats5";
//                 var ball5 = document.querySelector('#ballsss5');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats5 { 
//                             0%{margin-top: 60px;margin-left: 35px;}
//                             5%{margin-top: 40px;margin-left: 50px;}
//                             10%{margin-top: 60px;margin-left: 30px;}
//                             15%{margin-top: 30px;margin-left: 0px;}
//                             20%{margin-top: 20px;margin-left: 20px;}
//                             25%{margin-top: 0px;margin-left: 30px;}
//                             30%{margin-top: 60px;margin-left: 30px;}
//                             35%{margin-top: 40px;margin-left: 25px;}
//                             40%{margin-top: 60px;margin-left: 30px;}
//                             45%{margin-top: 10px;margin-left: 30px;}
//                             50%{margin-top: 30px;margin-left: 60px;}
//                             55%{margin-top: 60px;margin-left: 35px;}
//                             60%{margin-top: 0px;margin-left: 30px;}
//                             65%{margin-top: 15px;margin-left: 25px;}
//                             70%{margin-top: 20px;margin-left: 50px;}
//                             75%{margin-top: 35px;margin-left: 0px;}
//                             80%{margin-top: 12px;margin-left: 20px;}
//                             85%{margin-top: 0px;margin-left: 35px;}
//                             90%{margin-top: 60px;margin-left: 30px;}
//                             95%{margin-top: 30px;margin-left: 60px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}

//                         }
//                         #ballsss5 {
//                             animation: spinStats5 5s linear infinite alternate;
//                             -webkit-animation: spinStats5 5s linear infinite alternate;
//                         }
//                         `;
//                 ball5.appendChild(keyFramesw);
//                 //=========================blue balls6====================================
//                 document.getElementById("ballsss6").style.animationName = "spinStats6";
//                 var ball6 = document.querySelector('#ballsss6');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats6 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 0px;margin-left: 30px;}
//                             10%{margin-top: 10px;margin-left: 45px;}
//                             15%{margin-top: 60px;margin-left: 28px;}
//                             20%{margin-top: 10px;margin-left: 25px;}
//                             25%{margin-top: 30px;margin-left: 0px;}
//                             30%{margin-top: 0px;margin-left: 30px;}
//                             35%{margin-top: 44px;margin-left: 44px;}
//                             40%{margin-top: 60px;margin-left: 30x;}
//                             45%{margin-top: 40px;margin-left: 30px;}
//                             50%{margin-top: 20px;margin-left: 45px;}
//                             55%{margin-top: 40px;margin-left: 40px;}
//                             60%{margin-top: 55px;margin-left: 35px;}
//                             65%{margin-top: 50px;margin-left: 30px;}
//                             70%{margin-top: 0px;margin-left: 30px;}
//                             75%{margin-top: 60px;margin-left: 10px;}
//                             80%{margin-top: 30px;margin-left: 60px;}
//                             85%{margin-top: 25px;margin-left: 55px;}
//                             90%{margin-top: 5px;margin-left: 40px;}
//                             95%{margin-top: 20px;margin-left: 25x;}
//                             100%{margin-top: 60px;margin-left: 31px;background-position: 100%;}

//                         }
//                         #ballsss6 {
//                             animation: spinStats6 5s linear infinite alternate;
//                             -webkit-animation: spinStats6 5s linear infinite alternate;
//                         }
//                         `;
//                 ball6.appendChild(keyFramesw);
//                 //=========================blue balls7====================================
//                 document.getElementById("ballsss7").style.animationName = "spinStats7";
//                 var ball7 = document.querySelector('#ballsss7');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats7 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 40px;margin-left: 20px;}
//                             10%{margin-top: 30px;margin-left: 0px;}
//                             15%{margin-top: 25px;margin-left: 20px;}
//                             20%{margin-top: 0px;margin-left: 30px;}
//                             25%{margin-top: 25px;margin-left: 40px;}
//                             30%{margin-top: 50px;margin-left: 40px;}
//                             35%{margin-top: 60px;margin-left: 30px;}
//                             40%{margin-top: 0px;margin-left: 30px;}
//                             45%{margin-top: 55px;margin-left: 10px;}
//                             50%{margin-top: 15px;margin-left: 20px;}
//                             55%{margin-top: 25px;margin-left: 45px;}
//                             60%{margin-top: 50px;margin-left: 15px;}
//                             65%{margin-top: 20px;margin-left: 50px;}
//                             70%{margin-top: 0px;margin-left: 30px;}
//                             75%{margin-top: 15px;margin-left: 25px;}
//                             80%{margin-top: 50px;margin-left: 35px;}
//                             85%{margin-top: 10px;margin-left: 35px;}
//                             90%{margin-top: 45px;margin-left: 15px;}
//                             95%{margin-top: 60px;margin-left: 30px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}

//                         }
//                         #ballsss7 {
//                             animation: spinStats7 5s linear infinite alternate;
//                             -webkit-animation: spinStats7 5s linear infinite alternate;
//                         }
//                         `;
//                 ball7.appendChild(keyFramesw);
//                 //=========================blue balls8====================================
//                 document.getElementById("ballsss8").style.animationName = "spinStats8";
//                 var ball8 = document.querySelector('#ballsss8');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats8 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 15px;margin-left: 50px;}
//                             10%{margin-top: 55px;margin-left: 30px;}
//                             15%{margin-top: 40px;margin-left: 23px;}
//                             20%{margin-top: 25px;margin-left: 35px;}
//                             25%{margin-top: 40px;margin-left: 40px;}
//                             30%{margin-top: 60px;margin-left: 30px;}
//                             35%{margin-top: 45px;margin-left: 10px;}
//                             40%{margin-top: 55px;margin-left: 25px;}
//                             45%{margin-top: 15px;margin-left: 27px;}
//                             50%{margin-top: 30px;margin-left: 60px;}
//                             55%{margin-top: 55px;margin-left: 55px;}
//                             60%{margin-top: 60px;margin-left: 30px;}
//                             65%{margin-top: 40px;margin-left: 25px;}
//                             70%{margin-top: 10px;margin-left: 12px;}
//                             75%{margin-top: 45px;margin-left: 15px;}
//                             80%{margin-top: 40px;margin-left: 55px;}
//                             85%{margin-top: 0px;margin-left: 30px;}
//                             90%{margin-top: 55px;margin-left: 25px;}
//                             95%{margin-top: 30px;margin-left: 30px;}
//                             100%{margin-top: 58px;margin-left: 28px;background-position: 100%;}

//                         }
//                         #ballsss8 {
//                             animation: spinStats8 5s linear infinite alternate;
//                             -webkit-animation: spinStats8 5s linear infinite alternate;
//                         }
//                         `;
//                 ball8.appendChild(keyFramesw);
//                 //=========================blue balls9====================================
//                 document.getElementById("ballsss9").style.animationName = "spinStats9";
//                 var ball9 = document.querySelector('#ballsss9');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats9 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 45px;margin-left: 15px;}
//                             10%{margin-top: 55px;margin-left: 15px;}
//                             15%{margin-top: 60px;margin-left: 30px;}
//                             20%{margin-top: 45px;margin-left: 40px;}
//                             25%{margin-top: 55px;margin-left: 25px;}
//                             30%{margin-top: 10px;margin-left: 25px;}
//                             35%{margin-top: 45px;margin-left: 45px;}
//                             40%{margin-top: 60px;margin-left: 30px;}
//                             45%{margin-top: 30px;margin-left: 0px;}
//                             50%{margin-top: 10px;margin-left: 25px;}
//                             55%{margin-top: 40px;margin-left: 35px;}
//                             60%{margin-top: 55px;margin-left: 25px;}
//                             65%{margin-top: 60px;margin-left: 33px;}
//                             70%{margin-top: 40px;margin-left: 40px;}
//                             75%{margin-top: 15px;margin-left: 20px;}
//                             80%{margin-top: 30px;margin-left: 15px;}
//                             85%{margin-top: 60px;margin-left: 30px;}
//                             90%{margin-top: 0px;margin-left: 30px;}
//                             95%{margin-top: 30px;margin-left: 0px;}
//                             100%{margin-top: 61px;margin-left: 35px;background-position: 100%;}

//                         }
//                         #ballsss9 {
//                             animation: spinStats9 5s linear infinite alternate;
//                             -webkit-animation: spinStats9 5s linear infinite alternate;
//                         }
//                         `;
//                 ball9.appendChild(keyFramesw);
//                 //=========================blue balls0====================================
//                 document.getElementById("ballsss0").style.animationName = "spinStats0";
//                 var ball0 = document.querySelector('#ballsss0');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats0 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 50px;margin-left: 15px;}
//                             10%{margin-top: 45px;margin-left: 20px;}
//                             15%{margin-top: 20px;margin-left: 15px;}
//                             20%{margin-top: 0px;margin-left: 30px;}
//                             25%{margin-top: 20px;margin-left: 38px;}
//                             30%{margin-top: 35px;margin-left: 40px;}
//                             35%{margin-top: 45px;margin-left: 45px;}
//                             40%{margin-top: 58px;margin-left: 50px;}
//                             45%{margin-top: 30px;margin-left: 0px;}
//                             50%{margin-top: 0px;margin-left: 30px;}
//                             55%{margin-top: 57px;margin-left: 28px;}
//                             60%{margin-top: 15px;margin-left: 35px;}
//                             65%{margin-top: 40px;margin-left: 20px;}
//                             70%{margin-top: 15px;margin-left: 35px;}
//                             75%{margin-top: 60px;margin-left: 30px;}
//                             80%{margin-top: 50px;margin-left: 15px;}
//                             85%{margin-top: 10px;margin-left: 40px;}
//                             90%{margin-top: 40px;margin-left: 23px;}
//                             95%{margin-top: 20px;margin-left: 30px;}
//                             100%{margin-top: 58px;margin-left: 28px;background-position: 100%;}

//                         }
//                         #ballsss0 {
//                             animation: spinStats0 5s linear infinite alternate;
//                             -webkit-animation: spinStats0 5s linear infinite alternate;
//                         }
//                         `;
//                 ball0.appendChild(keyFramesw);
//                 psound=parseInt(document.getElementById("pSound").innerHTML);
//                 if(psound==2){
//                     puaseplay();
//                 }else{
//                     play();
//                 }
//             }
//             if (cnt == 124) {
//                 var result3 = Math.floor(Math.random() * 10);
//                 document.getElementById("boxball3").innerHTML = result3;
//                 document.getElementById("boxBall3").style.animation = "";
//                 document.getElementById("ballsss0").style.animationName = "anib0";
//                 document.getElementById("ballsss9").style.animationName = "anib9";
//                 document.getElementById("ballsss8").style.animationName = "anib8";
//                 document.getElementById("ballsss7").style.animationName = "anib7";
//                 document.getElementById("ballsss6").style.animationName = "anib6";
//                 document.getElementById("ballsss5").style.animationName = "anib5";
//                 document.getElementById("ballsss4").style.animationName = "anib4";
//                 document.getElementById("ballsss3").style.animationName = "anib3";
//                 document.getElementById("ballsss2").style.animationName = "anib2";
//                 document.getElementById("ballsss1").style.animationName = "anib1";
//                 document.getElementById("imgspin3").style.animation = "none";
//                 var runball = document.querySelector('#boxBall3');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes run2 {
//                             from {
//                                 height: 60px;
//                                 width: 60px;
//                                 margin-top: 0px;
//                                 margin-left: 80px;
//                                 opacity: 1;
//                             }
//                             to {
//                                 margin-top: 80px;
//                                 margin-left: -350px;
//                                 height: 40px;
//                                 width: 40px;
//                                 z-index: 1;
//                                 opacity: 0;
//                             }
//                         }
//                         #boxBall3 {
//                             animation: run2 1s linear infinite;
//                             -webkit-animation: run2 1s linear infinite;
//                         }
//                         `;
//                 runball.appendChild(keyFramesw);
//                 psound=parseInt(document.getElementById("pSound").innerHTML);
//                 if(psound==2){
//                     puase1();
//                 }else{
//                     play1();
//                 }
//             }
//             /*4*/
//             if (cnt == 126) {
//                 document.getElementById("boxBall2").style.animation = "none";
//                 var result2 = document.getElementById("boxball2").innerHTML;
//                 document.getElementById("nums2").innerHTML = result2;
//                 document.getElementById("imgspin4").style.animation = "";
//                 var spinball = document.querySelector('#imgspin4');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spin2 {
//                             from {
//                                 transform: rotate(0deg);
//                                 -webkit-transform: rotate(0deg);
//                             }
//                             to {
//                                 transform: rotate(360deg);
//                                 -webkit-transform: rotate(360deg);
//                             }
//                         }
//                         #imgspin4 {
//                             animation: spin2 0.8s linear infinite;
//                             -webkit-animation: spin2 0.8s linear infinite;
//                         }
//                         `;
//                 spinball.appendChild(keyFramesw);
//                 // =========================blue ball1====================================
//                 document.getElementById("ballssss1").style.animationName = "spinStat1";
//                 var balls1 = document.querySelector('#ballssss1');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat1 {
//                             0%{margin-top: 60px;margin-left: 50px;}
//                             5%{margin-top: 30px;margin-left: 0px;}
//                             10%{margin-top: 50px;margin-left: 20px;}
//                             15%{margin-top: 0px;margin-left: 30px;}
//                             20%{margin-top: 60px;margin-left: 40px;}
//                             25%{margin-top: 50px;margin-left: 40px;}
//                             30%{margin-top: 10px;margin-left: 20px;}
//                             35%{margin-top: 0px;margin-left: 20px;}
//                             40%{margin-top: 30px;margin-left: 60px;}
//                             45%{margin-top: 10px;margin-left: 40px;}
//                             50%{margin-top: 63px;margin-left: 30px;}
//                             55{margin-top: 10px;margin-left: 35px;}
//                             60%{margin-top: 33px;margin-left: 0px;}
//                             65%{margin-top: 10px;margin-left: 30px;}
//                             70%{margin-top: 0px;margin-left: 25px;}
//                             75%{margin-top: 20px;margin-left: 20px;}
//                             80%{margin-top: 20px;margin-left: 40px;}
//                             85%{margin-top:20px;margin-left: 12px;}
//                             90%{margin-top: 50px;margin-left: 20px;}
//                             95%{margin-top: 0px;margin-left: 35px;}
//                             100%{margin-top: 27px;margin-left: 33px;background-position: 100%;}
//                         }
//                         #ballssss1 {
//                             animation: spinStat1 5s linear infinite alternate;
//                             -webkit-animation: spinstat1 5s linear infinite alternate;
//                         }
//                         `;
//                 balls1.appendChild(keyFramesw);
//                 // =========================blue balls2====================================
//                 document.getElementById("ballssss2").style.animationName = "spinStats2";
//                 var ball2 = document.querySelector('#ballssss2');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats2 {
//                             0%{margin-top: 60px;margin-left: 31px;}
//                                 5%{margin-top: 8px;margin-left: 30px;}
//                                 10%{margin-top: 30px;margin-left: 50px;}
//                                 15%{margin-top: 20px;margin-left: 10px;}
//                                 20%{margin-top: 50px;margin-left: 30px;}
//                                 25%{margin-top: 0px;margin-left: 30px;}
//                                 30%{margin-top: 60px;margin-left: 30px;}
//                                 35%{margin-top: 0px;margin-left: 30px;}
//                                 40%{margin-top: 30px;margin-left: 10px;}
//                                 45%{margin-top: 30px;margin-left: 60px;}
//                                 50%{margin-top: 63px;margin-left: 30px;}
//                                 55%{margin-top: 10px;margin-left: 45px;}
//                                 60%{margin-top: 55px;margin-left: 10px;}
//                                 65%{margin-top: 20px;margin-left: 35px;}
//                                 70%{margin-top: 45px;margin-left: 60px;}
//                                 75%{margin-top: 10px;margin-left: 49px;}
//                                 80%{margin-top: 48px;margin-left: 50px;}
//                                 85%{margin-top: 18px;margin-left: 30px;}
//                                 90%{margin-top: 20px;margin-left: 10px;}
//                                 95%{margin-top: 0px;margin-left: 30px;}
//                                 100%{margin-top: 63px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballssss2 {
//                             animation: spinStats2 5s linear infinite alternate;
//                             -webkit-animation: spinStats2 5s linear infinite alternate;
//                         }
//                         `;
//                 ball2.appendChild(keyFramesw);
//                 // =========================blue balls3====================================
//                 document.getElementById("ballssss3").style.animationName = "spinStats3";
//                 var ball3 = document.querySelector('#ballssss3');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats3 {
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 30px;margin-left: 0px;}
//                             10%{margin-top: 0px;margin-left: 30px;}
//                             15%{margin-top: 30px;margin-left: 60px;}
//                             20%{margin-top: 60px;margin-left: 30px;}
//                             25%{margin-top: 0px;margin-left: 27px;}
//                             30%{margin-top: 20px;margin-left: 50px;}
//                             35%{margin-top: 60px;margin-left: 30px;}
//                             40%{margin-top: 30px;margin-left: 15px;}
//                             45%{margin-top: 45px;margin-left: 45px;}
//                             50%{margin-top: 10px;margin-left: 50px;}
//                             55%{margin-top: 55px;margin-left: 30px;}
//                             60%{margin-top: 30px;margin-left: 20px;}
//                             65%{margin-top: 60px;margin-left: 30px;}
//                             70%{margin-top: 40px;margin-left: 15px;}
//                             75%{margin-top: 15px;margin-left: 30px;}
//                             80%{margin-top: 18px;margin-left: 20px;}
//                             85%{margin-top: 20px;margin-left: 60px;}
//                             90%{margin-top: 60px;margin-left: 30px;}
//                             95%{margin-top: 10px;margin-left: 35px;}
//                             100%{margin-top: 63px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballssss3 {
//                             animation: spinStats3 5s linear infinite alternate;
//                             -webkit-animation: spinStats3 5s linear infinite alternate;
//                         }
//                         `;
//                 ball3.appendChild(keyFramesw);
//                 // =========================blue balls4====================================
//                 document.getElementById("ballssss4").style.animationName = "spinStats4";
//                 var ball4 = document.querySelector('#ballssss4');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats4 {
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 15px;margin-left: 30px;}
//                             10%{margin-top: 40px;margin-left: 50px;}
//                             15%{margin-top: 60px;margin-left: 30px;}
//                             20%{margin-top: 50px;margin-left: 50px;}
//                             25%{margin-top: 6px;margin-left: 30px;}
//                             30%{margin-top: 45px;margin-left: 20px;}
//                             35%{margin-top: 15px;margin-left: 20px;}
//                             40%{margin-top: 0px;margin-left: 30px;}
//                             45%{margin-top: 20px;margin-left: 50px;}
//                             50%{margin-top: 35px;margin-left: 60px;}
//                             55%{margin-top: 55px;margin-left: 45px;}
//                             60%{margin-top: 60px;margin-left: 30px;}
//                             65%{margin-top: 0px;margin-left: 30px;}
//                             70%{margin-top: 60px;margin-left: 30px;}
//                             75%{margin-top: 15px;margin-left: 25px;}
//                             80%{margin-top: 55px;margin-left: 20px;}
//                             85%{margin-top: 0px;margin-left: 30px;}
//                             90%{margin-top: 55px;margin-left: 27px;}
//                             95%{margin-top: 20px;margin-left: 58px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballssss4 {
//                             animation: spinStats4 5s linear infinite alternate;
//                             -webkit-animation: spinStats4 5s linear infinite alternate;
//                         }
//                         `;
//                 ball4.appendChild(keyFramesw);
//                 // =========================blue balls5====================================
//                 document.getElementById("ballssss5").style.animationName = "spinStats5";
//                 var ball5 = document.querySelector('#ballssss5');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats5 { 
//                             0%{margin-top: 60px;margin-left: 35px;}
//                             5%{margin-top: 40px;margin-left: 50px;}
//                             10%{margin-top: 60px;margin-left: 30px;}
//                             15%{margin-top: 30px;margin-left: 0px;}
//                             20%{margin-top: 20px;margin-left: 20px;}
//                             25%{margin-top: 0px;margin-left: 30px;}
//                             30%{margin-top: 60px;margin-left: 30px;}
//                             35%{margin-top: 40px;margin-left: 25px;}
//                             40%{margin-top: 60px;margin-left: 30px;}
//                             45%{margin-top: 10px;margin-left: 30px;}
//                             50%{margin-top: 30px;margin-left: 60px;}
//                             55%{margin-top: 60px;margin-left: 35px;}
//                             60%{margin-top: 0px;margin-left: 30px;}
//                             65%{margin-top: 15px;margin-left: 25px;}
//                             70%{margin-top: 20px;margin-left: 50px;}
//                             75%{margin-top: 35px;margin-left: 0px;}
//                             80%{margin-top: 12px;margin-left: 20px;}
//                             85%{margin-top: 0px;margin-left: 35px;}
//                             90%{margin-top: 60px;margin-left: 30px;}
//                             95%{margin-top: 30px;margin-left: 60px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}

//                         }
//                         #ballssss5 {
//                             animation: spinStats5 5s linear infinite alternate;
//                             -webkit-animation: spinStats5 5s linear infinite alternate;
//                         }
//                         `;
//                 ball5.appendChild(keyFramesw);
//                 //=========================blue balls6====================================
//                 document.getElementById("ballssss6").style.animationName = "spinStats6";
//                 var ball6 = document.querySelector('#ballssss6');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats6 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 0px;margin-left: 30px;}
//                             10%{margin-top: 10px;margin-left: 45px;}
//                             15%{margin-top: 60px;margin-left: 28px;}
//                             20%{margin-top: 10px;margin-left: 25px;}
//                             25%{margin-top: 30px;margin-left: 0px;}
//                             30%{margin-top: 0px;margin-left: 30px;}
//                             35%{margin-top: 44px;margin-left: 44px;}
//                             40%{margin-top: 60px;margin-left: 30x;}
//                             45%{margin-top: 40px;margin-left: 30px;}
//                             50%{margin-top: 20px;margin-left: 45px;}
//                             55%{margin-top: 40px;margin-left: 40px;}
//                             60%{margin-top: 55px;margin-left: 35px;}
//                             65%{margin-top: 50px;margin-left: 30px;}
//                             70%{margin-top: 0px;margin-left: 30px;}
//                             75%{margin-top: 60px;margin-left: 10px;}
//                             80%{margin-top: 30px;margin-left: 60px;}
//                             85%{margin-top: 25px;margin-left: 55px;}
//                             90%{margin-top: 5px;margin-left: 40px;}
//                             95%{margin-top: 20px;margin-left: 25x;}
//                             100%{margin-top: 60px;margin-left: 31px;background-position: 100%;}

//                         }
//                         #ballssss6 {
//                             animation: spinStats6 5s linear infinite alternate;
//                             -webkit-animation: spinStats6 5s linear infinite alternate;
//                         }
//                         `;
//                 ball6.appendChild(keyFramesw);
//                 //=========================blue balls7====================================
//                 document.getElementById("ballssss7").style.animationName = "spinStats7";
//                 var ball7 = document.querySelector('#ballssss7');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats7 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 40px;margin-left: 20px;}
//                             10%{margin-top: 30px;margin-left: 0px;}
//                             15%{margin-top: 25px;margin-left: 20px;}
//                             20%{margin-top: 0px;margin-left: 30px;}
//                             25%{margin-top: 25px;margin-left: 40px;}
//                             30%{margin-top: 50px;margin-left: 40px;}
//                             35%{margin-top: 60px;margin-left: 30px;}
//                             40%{margin-top: 0px;margin-left: 30px;}
//                             45%{margin-top: 55px;margin-left: 10px;}
//                             50%{margin-top: 15px;margin-left: 20px;}
//                             55%{margin-top: 25px;margin-left: 45px;}
//                             60%{margin-top: 50px;margin-left: 15px;}
//                             65%{margin-top: 20px;margin-left: 50px;}
//                             70%{margin-top: 0px;margin-left: 30px;}
//                             75%{margin-top: 15px;margin-left: 25px;}
//                             80%{margin-top: 50px;margin-left: 35px;}
//                             85%{margin-top: 10px;margin-left: 35px;}
//                             90%{margin-top: 45px;margin-left: 15px;}
//                             95%{margin-top: 60px;margin-left: 30px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}

//                         }
//                         #ballssss7 {
//                             animation: spinStats7 5s linear infinite alternate;
//                             -webkit-animation: spinStats7 5s linear infinite alternate;
//                         }
//                         `;
//                 ball7.appendChild(keyFramesw);
//                 //=========================blue balls8====================================
//                 document.getElementById("ballssss8").style.animationName = "spinStats8";
//                 var ball8 = document.querySelector('#ballssss8');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats8 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 15px;margin-left: 50px;}
//                             10%{margin-top: 55px;margin-left: 30px;}
//                             15%{margin-top: 40px;margin-left: 23px;}
//                             20%{margin-top: 25px;margin-left: 35px;}
//                             25%{margin-top: 40px;margin-left: 40px;}
//                             30%{margin-top: 60px;margin-left: 30px;}
//                             35%{margin-top: 45px;margin-left: 10px;}
//                             40%{margin-top: 55px;margin-left: 25px;}
//                             45%{margin-top: 15px;margin-left: 27px;}
//                             50%{margin-top: 30px;margin-left: 60px;}
//                             55%{margin-top: 55px;margin-left: 55px;}
//                             60%{margin-top: 60px;margin-left: 30px;}
//                             65%{margin-top: 40px;margin-left: 25px;}
//                             70%{margin-top: 10px;margin-left: 12px;}
//                             75%{margin-top: 45px;margin-left: 15px;}
//                             80%{margin-top: 40px;margin-left: 55px;}
//                             85%{margin-top: 0px;margin-left: 30px;}
//                             90%{margin-top: 55px;margin-left: 25px;}
//                             95%{margin-top: 30px;margin-left: 30px;}
//                             100%{margin-top: 58px;margin-left: 28px;background-position: 100%;}

//                         }
//                         #ballssss8 {
//                             animation: spinStats8 5s linear infinite alternate;
//                             -webkit-animation: spinStats8 5s linear infinite alternate;
//                         }
//                         `;
//                 ball8.appendChild(keyFramesw);
//                 //=========================blue balls9====================================
//                 document.getElementById("ballssss9").style.animationName = "spinStats9";
//                 var ball9 = document.querySelector('#ballssss9');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats9 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 45px;margin-left: 15px;}
//                             10%{margin-top: 55px;margin-left: 15px;}
//                             15%{margin-top: 60px;margin-left: 30px;}
//                             20%{margin-top: 45px;margin-left: 40px;}
//                             25%{margin-top: 55px;margin-left: 25px;}
//                             30%{margin-top: 10px;margin-left: 25px;}
//                             35%{margin-top: 45px;margin-left: 45px;}
//                             40%{margin-top: 60px;margin-left: 30px;}
//                             45%{margin-top: 30px;margin-left: 0px;}
//                             50%{margin-top: 10px;margin-left: 25px;}
//                             55%{margin-top: 40px;margin-left: 35px;}
//                             60%{margin-top: 55px;margin-left: 25px;}
//                             65%{margin-top: 60px;margin-left: 33px;}
//                             70%{margin-top: 40px;margin-left: 40px;}
//                             75%{margin-top: 15px;margin-left: 20px;}
//                             80%{margin-top: 30px;margin-left: 15px;}
//                             85%{margin-top: 60px;margin-left: 30px;}
//                             90%{margin-top: 0px;margin-left: 30px;}
//                             95%{margin-top: 30px;margin-left: 0px;}
//                             100%{margin-top: 61px;margin-left: 35px;background-position: 100%;}

//                         }
//                         #ballssss9 {
//                             animation: spinStats9 5s linear infinite alternate;
//                             -webkit-animation: spinStats9 5s linear infinite alternate;
//                         }
//                         `;
//                 ball9.appendChild(keyFramesw);
//                 //=========================blue balls0====================================
//                 document.getElementById("ballssss0").style.animationName = "spinStats0";
//                 var ball0 = document.querySelector('#ballssss0');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats0 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 50px;margin-left: 15px;}
//                             10%{margin-top: 45px;margin-left: 20px;}
//                             15%{margin-top: 20px;margin-left: 15px;}
//                             20%{margin-top: 0px;margin-left: 30px;}
//                             25%{margin-top: 20px;margin-left: 38px;}
//                             30%{margin-top: 35px;margin-left: 40px;}
//                             35%{margin-top: 45px;margin-left: 45px;}
//                             40%{margin-top: 58px;margin-left: 50px;}
//                             45%{margin-top: 30px;margin-left: 0px;}
//                             50%{margin-top: 0px;margin-left: 30px;}
//                             55%{margin-top: 57px;margin-left: 28px;}
//                             60%{margin-top: 15px;margin-left: 35px;}
//                             65%{margin-top: 40px;margin-left: 20px;}
//                             70%{margin-top: 15px;margin-left: 35px;}
//                             75%{margin-top: 60px;margin-left: 30px;}
//                             80%{margin-top: 50px;margin-left: 15px;}
//                             85%{margin-top: 10px;margin-left: 40px;}
//                             90%{margin-top: 40px;margin-left: 23px;}
//                             95%{margin-top: 20px;margin-left: 30px;}
//                             100%{margin-top: 58px;margin-left: 28px;background-position: 100%;}
//                         }
//                         #ballssss0 {
//                             animation: spinStats0 5s linear infinite alternate;
//                             -webkit-animation: spinStats0 5s linear infinite alternate;
//                         }
//                         `;
//                 ball0.appendChild(keyFramesw);
//                 psound=parseInt(document.getElementById("pSound").innerHTML);
//                 if(psound==2){
//                     puaseplay();
//                 }else{
//                     play();
//                 }
//             }
//             if (cnt == 121) {
//                 var result4 = Math.floor(Math.random() * 10);
//                 document.getElementById("boxball4").innerHTML = result4;
//                 document.getElementById("boxBall4").style.animation = "";
//                 document.getElementById("ballssss0").style.animationName = "anib0";
//                 document.getElementById("ballssss9").style.animationName = "anib9";
//                 document.getElementById("ballssss8").style.animationName = "anib8";
//                 document.getElementById("ballssss7").style.animationName = "anib7";
//                 document.getElementById("ballssss6").style.animationName = "anib6";
//                 document.getElementById("ballssss5").style.animationName = "anib5";
//                 document.getElementById("ballssss4").style.animationName = "anib4";
//                 document.getElementById("ballssss3").style.animationName = "anib3";
//                 document.getElementById("ballssss2").style.animationName = "anib2";
//                 document.getElementById("ballssss1").style.animationName = "anib1";
//                 document.getElementById("imgspin4").style.animation = "none";
//                 var runball = document.querySelector('#boxBall4');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes run3 {
//                             from {
//                                 height: 60px;
//                                 width: 60px;
//                                 margin-top: 0px;
//                                 margin-left: 80px;
//                                 opacity: 1;
//                             }
//                             to {
//                                 margin-top: 80px;
//                                 margin-left: -500px;
//                                 height: 40px;
//                                 width: 40px;
//                                 z-index: 1;
//                                 opacity: 0;

//                             }
//                         }
//                         #boxBall4 {
//                             animation: run3 1s linear infinite;
//                             -webkit-animation: run3 1s linear infinite;
//                         }
//                         `;
//                 runball.appendChild(keyFramesw);
//                 psound=parseInt(document.getElementById("pSound").innerHTML);
//                 if(psound==2){
//                      puase1();
//                 }else{
//                    play1();
//                 }
//             }
//             /*5*/
//             if (cnt == 123) {
//                 document.getElementById("boxBall3").style.animation = "none";
//                 result3 = document.getElementById("boxball3").innerHTML;
//                 document.getElementById("nums3").innerHTML = result3;
//                 document.getElementById("imgspin5").style.animation = "";
//                 var spinball = document.querySelector('#imgspin5');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spin2 {
//                             from {
//                                 transform: rotate(0deg);
//                                 -webkit-transform: rotate(0deg);
//                             }
//                             to {
//                                 transform: rotate(360deg);
//                                 -webkit-transform: rotate(360deg);
//                             }
//                         }
//                         #imgspin5 {
//                             animation: spin2 0.8s linear infinite;
//                             -webkit-animation: spin2 0.8s linear infinite;
//                         }
//                         `;
//                 spinball.appendChild(keyFramesw);
//                 // =========================blue ball1====================================
//                 document.getElementById("ballsssss1").style.animationName = "spinStat1";
//                 var balls1 = document.querySelector('#ballsssss1');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat1 {
//                             0%{margin-top: 60px;margin-left: 50px;}
//                             5%{margin-top: 30px;margin-left: 0px;}
//                             10%{margin-top: 50px;margin-left: 20px;}
//                             15%{margin-top: 0px;margin-left: 30px;}
//                             20%{margin-top: 60px;margin-left: 40px;}
//                             25%{margin-top: 50px;margin-left: 40px;}
//                             30%{margin-top: 10px;margin-left: 20px;}
//                             35%{margin-top: 0px;margin-left: 20px;}
//                             40%{margin-top: 30px;margin-left: 60px;}
//                             45%{margin-top: 10px;margin-left: 40px;}
//                             50%{margin-top: 63px;margin-left: 30px;}
//                             55{margin-top: 10px;margin-left: 35px;}
//                             60%{margin-top: 33px;margin-left: 0px;}
//                             65%{margin-top: 10px;margin-left: 30px;}
//                             70%{margin-top: 0px;margin-left: 25px;}
//                             75%{margin-top: 20px;margin-left: 20px;}
//                             80%{margin-top: 20px;margin-left: 40px;}
//                             85%{margin-top:20px;margin-left: 12px;}
//                             90%{margin-top: 50px;margin-left: 20px;}
//                             95%{margin-top: 0px;margin-left: 35px;}
//                             100%{margin-top: 27px;margin-left: 33px;background-position: 100%;}
//                         }
//                         #ballsssss1 {
//                             animation: spinStat1 5s linear infinite alternate;
//                             -webkit-animation: spinstat1 5s linear infinite alternate;
//                         }
//                         `;
//                 balls1.appendChild(keyFramesw);
//                 // =========================blue balls2====================================
//                 document.getElementById("ballsssss2").style.animationName = "spinStats2";
//                 var ball2 = document.querySelector('#ballsssss2');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats2 {
//                             0%{margin-top: 60px;margin-left: 31px;}
//                                 5%{margin-top: 8px;margin-left: 30px;}
//                                 10%{margin-top: 30px;margin-left: 50px;}
//                                 15%{margin-top: 20px;margin-left: 10px;}
//                                 20%{margin-top: 50px;margin-left: 30px;}
//                                 25%{margin-top: 0px;margin-left: 30px;}
//                                 30%{margin-top: 60px;margin-left: 30px;}
//                                 35%{margin-top: 0px;margin-left: 30px;}
//                                 40%{margin-top: 30px;margin-left: 10px;}
//                                 45%{margin-top: 30px;margin-left: 60px;}
//                                 50%{margin-top: 63px;margin-left: 30px;}
//                                 55%{margin-top: 10px;margin-left: 45px;}
//                                 60%{margin-top: 55px;margin-left: 10px;}
//                                 65%{margin-top: 20px;margin-left: 35px;}
//                                 70%{margin-top: 45px;margin-left: 60px;}
//                                 75%{margin-top: 10px;margin-left: 49px;}
//                                 80%{margin-top: 48px;margin-left: 50px;}
//                                 85%{margin-top: 18px;margin-left: 30px;}
//                                 90%{margin-top: 20px;margin-left: 10px;}
//                                 95%{margin-top: 0px;margin-left: 30px;}
//                                 100%{margin-top: 63px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballsssss2 {
//                             animation: spinStats2 5s linear infinite alternate;
//                             -webkit-animation: spinStats2 5s linear infinite alternate;
//                         }
//                         `;
//                 ball2.appendChild(keyFramesw);
//                 // =========================blue balls3====================================
//                 document.getElementById("ballsssss3").style.animationName = "spinStats3";
//                 var ball3 = document.querySelector('#ballsssss3');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats3 {
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 30px;margin-left: 0px;}
//                             10%{margin-top: 0px;margin-left: 30px;}
//                             15%{margin-top: 30px;margin-left: 60px;}
//                             20%{margin-top: 60px;margin-left: 30px;}
//                             25%{margin-top: 0px;margin-left: 27px;}
//                             30%{margin-top: 20px;margin-left: 50px;}
//                             35%{margin-top: 60px;margin-left: 30px;}
//                             40%{margin-top: 30px;margin-left: 15px;}
//                             45%{margin-top: 45px;margin-left: 45px;}
//                             50%{margin-top: 10px;margin-left: 50px;}
//                             55%{margin-top: 55px;margin-left: 30px;}
//                             60%{margin-top: 30px;margin-left: 20px;}
//                             65%{margin-top: 60px;margin-left: 30px;}
//                             70%{margin-top: 40px;margin-left: 15px;}
//                             75%{margin-top: 15px;margin-left: 30px;}
//                             80%{margin-top: 18px;margin-left: 20px;}
//                             85%{margin-top: 20px;margin-left: 60px;}
//                             90%{margin-top: 60px;margin-left: 30px;}
//                             95%{margin-top: 10px;margin-left: 35px;}
//                             100%{margin-top: 63px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballsssss3 {
//                             animation: spinStats3 5s linear infinite alternate;
//                             -webkit-animation: spinStats3 5s linear infinite alternate;
//                         }
//                         `;
//                 ball3.appendChild(keyFramesw);
//                 // =========================blue balls4====================================
//                 document.getElementById("ballsssss4").style.animationName = "spinStats4";
//                 var ball4 = document.querySelector('#ballsssss4');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats4 {
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 15px;margin-left: 30px;}
//                             10%{margin-top: 40px;margin-left: 50px;}
//                             15%{margin-top: 60px;margin-left: 30px;}
//                             20%{margin-top: 50px;margin-left: 50px;}
//                             25%{margin-top: 6px;margin-left: 30px;}
//                             30%{margin-top: 45px;margin-left: 20px;}
//                             35%{margin-top: 15px;margin-left: 20px;}
//                             40%{margin-top: 0px;margin-left: 30px;}
//                             45%{margin-top: 20px;margin-left: 50px;}
//                             50%{margin-top: 35px;margin-left: 60px;}
//                             55%{margin-top: 55px;margin-left: 45px;}
//                             60%{margin-top: 60px;margin-left: 30px;}
//                             65%{margin-top: 0px;margin-left: 30px;}
//                             70%{margin-top: 60px;margin-left: 30px;}
//                             75%{margin-top: 15px;margin-left: 25px;}
//                             80%{margin-top: 55px;margin-left: 20px;}
//                             85%{margin-top: 0px;margin-left: 30px;}
//                             90%{margin-top: 55px;margin-left: 27px;}
//                             95%{margin-top: 20px;margin-left: 58px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballsssss4 {
//                             animation: spinStats4 5s linear infinite alternate;
//                             -webkit-animation: spinStats4 5s linear infinite alternate;
//                         }
//                         `;
//                 ball4.appendChild(keyFramesw);
//                 // =========================blue balls5====================================
//                 document.getElementById("ballsssss5").style.animationName = "spinStats5";
//                 var ball5 = document.querySelector('#ballsssss5');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats5 { 
//                             0%{margin-top: 60px;margin-left: 35px;}
//                             5%{margin-top: 40px;margin-left: 50px;}
//                             10%{margin-top: 60px;margin-left: 30px;}
//                             15%{margin-top: 30px;margin-left: 0px;}
//                             20%{margin-top: 20px;margin-left: 20px;}
//                             25%{margin-top: 0px;margin-left: 30px;}
//                             30%{margin-top: 60px;margin-left: 30px;}
//                             35%{margin-top: 40px;margin-left: 25px;}
//                             40%{margin-top: 60px;margin-left: 30px;}
//                             45%{margin-top: 10px;margin-left: 30px;}
//                             50%{margin-top: 30px;margin-left: 60px;}
//                             55%{margin-top: 60px;margin-left: 35px;}
//                             60%{margin-top: 0px;margin-left: 30px;}
//                             65%{margin-top: 15px;margin-left: 25px;}
//                             70%{margin-top: 20px;margin-left: 50px;}
//                             75%{margin-top: 35px;margin-left: 0px;}
//                             80%{margin-top: 12px;margin-left: 20px;}
//                             85%{margin-top: 0px;margin-left: 35px;}
//                             90%{margin-top: 60px;margin-left: 30px;}
//                             95%{margin-top: 30px;margin-left: 60px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}

//                         }
//                         #ballsssss5 {
//                             animation: spinStats5 5s linear infinite alternate;
//                             -webkit-animation: spinStats5 5s linear infinite alternate;
//                         }
//                         `;
//                 ball5.appendChild(keyFramesw);
//                 //=========================blue balls6====================================
//                 document.getElementById("ballsssss6").style.animationName = "spinStats6";
//                 var ball6 = document.querySelector('#ballsssss6');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats6 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 0px;margin-left: 30px;}
//                             10%{margin-top: 10px;margin-left: 45px;}
//                             15%{margin-top: 60px;margin-left: 28px;}
//                             20%{margin-top: 10px;margin-left: 25px;}
//                             25%{margin-top: 30px;margin-left: 0px;}
//                             30%{margin-top: 0px;margin-left: 30px;}
//                             35%{margin-top: 44px;margin-left: 44px;}
//                             40%{margin-top: 60px;margin-left: 30x;}
//                             45%{margin-top: 40px;margin-left: 30px;}
//                             50%{margin-top: 20px;margin-left: 45px;}
//                             55%{margin-top: 40px;margin-left: 40px;}
//                             60%{margin-top: 55px;margin-left: 35px;}
//                             65%{margin-top: 50px;margin-left: 30px;}
//                             70%{margin-top: 0px;margin-left: 30px;}
//                             75%{margin-top: 60px;margin-left: 10px;}
//                             80%{margin-top: 30px;margin-left: 60px;}
//                             85%{margin-top: 25px;margin-left: 55px;}
//                             90%{margin-top: 5px;margin-left: 40px;}
//                             95%{margin-top: 20px;margin-left: 25x;}
//                             100%{margin-top: 60px;margin-left: 31px;background-position: 100%;}

//                         }
//                         #ballsssss6 {
//                             animation: spinStats6 5s linear infinite alternate;
//                             -webkit-animation: spinStats6 5s linear infinite alternate;
//                         }
//                         `;
//                 ball6.appendChild(keyFramesw);
//                 //=========================blue balls7====================================
//                 document.getElementById("ballsssss7").style.animationName = "spinStats7";
//                 var ball7 = document.querySelector('#ballsssss7');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats7 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 40px;margin-left: 20px;}
//                             10%{margin-top: 30px;margin-left: 0px;}
//                             15%{margin-top: 25px;margin-left: 20px;}
//                             20%{margin-top: 0px;margin-left: 30px;}
//                             25%{margin-top: 25px;margin-left: 40px;}
//                             30%{margin-top: 50px;margin-left: 40px;}
//                             35%{margin-top: 60px;margin-left: 30px;}
//                             40%{margin-top: 0px;margin-left: 30px;}
//                             45%{margin-top: 55px;margin-left: 10px;}
//                             50%{margin-top: 15px;margin-left: 20px;}
//                             55%{margin-top: 25px;margin-left: 45px;}
//                             60%{margin-top: 50px;margin-left: 15px;}
//                             65%{margin-top: 20px;margin-left: 50px;}
//                             70%{margin-top: 0px;margin-left: 30px;}
//                             75%{margin-top: 15px;margin-left: 25px;}
//                             80%{margin-top: 50px;margin-left: 35px;}
//                             85%{margin-top: 10px;margin-left: 35px;}
//                             90%{margin-top: 45px;margin-left: 15px;}
//                             95%{margin-top: 60px;margin-left: 30px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}

//                         }
//                         #ballsssss7 {
//                             animation: spinStats7 5s linear infinite alternate;
//                             -webkit-animation: spinStats7 5s linear infinite alternate;
//                         }
//                         `;
//                 ball7.appendChild(keyFramesw);
//                 //=========================blue balls8====================================
//                 document.getElementById("ballsssss8").style.animationName = "spinStats8";
//                 var ball8 = document.querySelector('#ballsssss8');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats8 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 15px;margin-left: 50px;}
//                             10%{margin-top: 55px;margin-left: 30px;}
//                             15%{margin-top: 40px;margin-left: 23px;}
//                             20%{margin-top: 25px;margin-left: 35px;}
//                             25%{margin-top: 40px;margin-left: 40px;}
//                             30%{margin-top: 60px;margin-left: 30px;}
//                             35%{margin-top: 45px;margin-left: 10px;}
//                             40%{margin-top: 55px;margin-left: 25px;}
//                             45%{margin-top: 15px;margin-left: 27px;}
//                             50%{margin-top: 30px;margin-left: 60px;}
//                             55%{margin-top: 55px;margin-left: 55px;}
//                             60%{margin-top: 60px;margin-left: 30px;}
//                             65%{margin-top: 40px;margin-left: 25px;}
//                             70%{margin-top: 10px;margin-left: 12px;}
//                             75%{margin-top: 45px;margin-left: 15px;}
//                             80%{margin-top: 40px;margin-left: 55px;}
//                             85%{margin-top: 0px;margin-left: 30px;}
//                             90%{margin-top: 55px;margin-left: 25px;}
//                             95%{margin-top: 30px;margin-left: 30px;}
//                             100%{margin-top: 58px;margin-left: 28px;background-position: 100%;}

//                         }
//                         #ballsssss8 {
//                             animation: spinStats8 5s linear infinite alternate;
//                             -webkit-animation: spinStats8 5s linear infinite alternate;
//                         }
//                         `;
//                 ball8.appendChild(keyFramesw);
//                 //=========================blue balls9====================================
//                 document.getElementById("ballsssss9").style.animationName = "spinStats9";
//                 var ball9 = document.querySelector('#ballsssss9');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats9 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 45px;margin-left: 15px;}
//                             10%{margin-top: 55px;margin-left: 15px;}
//                             15%{margin-top: 60px;margin-left: 30px;}
//                             20%{margin-top: 45px;margin-left: 40px;}
//                             25%{margin-top: 55px;margin-left: 25px;}
//                             30%{margin-top: 10px;margin-left: 25px;}
//                             35%{margin-top: 45px;margin-left: 45px;}
//                             40%{margin-top: 60px;margin-left: 30px;}
//                             45%{margin-top: 30px;margin-left: 0px;}
//                             50%{margin-top: 10px;margin-left: 25px;}
//                             55%{margin-top: 40px;margin-left: 35px;}
//                             60%{margin-top: 55px;margin-left: 25px;}
//                             65%{margin-top: 60px;margin-left: 33px;}
//                             70%{margin-top: 40px;margin-left: 40px;}
//                             75%{margin-top: 15px;margin-left: 20px;}
//                             80%{margin-top: 30px;margin-left: 15px;}
//                             85%{margin-top: 60px;margin-left: 30px;}
//                             90%{margin-top: 0px;margin-left: 30px;}
//                             95%{margin-top: 30px;margin-left: 0px;}
//                             100%{margin-top: 61px;margin-left: 35px;background-position: 100%;}

//                         }
//                         #ballsssss9 {
//                             animation: spinStats9 5s linear infinite alternate;
//                             -webkit-animation: spinStats9 5s linear infinite alternate;
//                         }
//                         `;
//                 ball9.appendChild(keyFramesw);
//                 //=========================blue balls0====================================
//                 document.getElementById("ballsssss0").style.animationName = "spinStats0";
//                 var ball0 = document.querySelector('#ballsssss0');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats0 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 50px;margin-left: 15px;}
//                             10%{margin-top: 45px;margin-left: 20px;}
//                             15%{margin-top: 20px;margin-left: 15px;}
//                             20%{margin-top: 0px;margin-left: 30px;}
//                             25%{margin-top: 20px;margin-left: 38px;}
//                             30%{margin-top: 35px;margin-left: 40px;}
//                             35%{margin-top: 45px;margin-left: 45px;}
//                             40%{margin-top: 58px;margin-left: 50px;}
//                             45%{margin-top: 30px;margin-left: 0px;}
//                             50%{margin-top: 0px;margin-left: 30px;}
//                             55%{margin-top: 57px;margin-left: 28px;}
//                             60%{margin-top: 15px;margin-left: 35px;}
//                             65%{margin-top: 40px;margin-left: 20px;}
//                             70%{margin-top: 15px;margin-left: 35px;}
//                             75%{margin-top: 60px;margin-left: 30px;}
//                             80%{margin-top: 50px;margin-left: 15px;}
//                             85%{margin-top: 10px;margin-left: 40px;}
//                             90%{margin-top: 40px;margin-left: 23px;}
//                             95%{margin-top: 20px;margin-left: 30px;}
//                             100%{margin-top: 58px;margin-left: 28px;background-position: 100%;}

//                         }
//                         #ballsssss0 {
//                             animation: spinStats0 5s linear infinite alternate;
//                             -webkit-animation: spinStats0 5s linear infinite alternate;
//                         }
//                         `;
//                 ball0.appendChild(keyFramesw);
//                 psound=parseInt(document.getElementById("pSound").innerHTML);
//                 if(psound==2){
//                     puaseplay();
//                 }else{
//                     play();
//                 }
//             }
//             if (cnt == 118) {
//                 var result5 = Math.floor(Math.random() * 10);
//                 document.getElementById("boxball5").innerHTML = result5;
//                 document.getElementById("boxBall5").style.animation = "";
//                 document.getElementById("ballsssss0").style.animationName = "anib0";
//                 document.getElementById("ballsssss9").style.animationName = "anib9";
//                 document.getElementById("ballsssss8").style.animationName = "anib8";
//                 document.getElementById("ballsssss7").style.animationName = "anib7";
//                 document.getElementById("ballsssss6").style.animationName = "anib6";
//                 document.getElementById("ballsssss5").style.animationName = "anib5";
//                 document.getElementById("ballsssss4").style.animationName = "anib4";
//                 document.getElementById("ballsssss3").style.animationName = "anib3";
//                 document.getElementById("ballsssss2").style.animationName = "anib2";
//                 document.getElementById("ballsssss1").style.animationName = "anib1";
//                 document.getElementById("imgspin5").style.animation = "none";
//                 var runball = document.querySelector('#boxBall5');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes run4 {
//                             from {
//                                 height: 60px;
//                                 width: 60px;
//                                 margin-top: 0px;
//                                 margin-left: 80px;
//                                 opacity: 1;

//                             }
//                             to {
//                                 margin-top: 80px;
//                                 margin-left: -700px;
//                                 height: 40px;
//                                 width: 40px;
//                                 z-index: 1;
//                                 opacity: 0;

//                             }
//                         }
//                         #boxBall5 {
//                             animation: run4 1s linear infinite;
//                             -webkit-animation: run4 1s linear infinite;
//                         }
//                         `;
//                 runball.appendChild(keyFramesw);
                
//                 document.getElementById("boxball1").innerHTML = "?";
//                 document.getElementById("boxball2").innerHTML = "?";
//                 document.getElementById("boxball3").innerHTML = "?";
//                 document.getElementById("boxball4").innerHTML = "?";
//                 psound=parseInt(document.getElementById("pSound").innerHTML);
//                 if(psound==2){
//                     puase1();
//                 }else{
//                     play1();
//                 }
//             }
//             //================sections B=================
//             /*6*/
//             if (cnt == 120) {
//                 document.getElementById("boxBall4").style.animation = "none";
//                 var result4 = document.getElementById("boxball4").innerHTML;
//                 document.getElementById("nums4").innerHTML = result4;
//                 document.getElementById("imgspin").style.animation = "";
//                 var spinball = document.querySelector('#imgspin');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spin {
//                             from {
//                                 transform: rotate(0deg);
//                                 -webkit-transform: rotate(0deg);
//                             }
//                             to {
//                                 transform: rotate(360deg);
//                                 -webkit-transform: rotate(360deg);
//                             }
//                         }
//                         #imgspin {
//                             animation: spin 0.8s linear infinite;
//                             -webkit-animation: spin 0.8s linear infinite;
//                         }
//                         `;
//                 spinball.appendChild(keyFramesw);
//                 // =========================blue ball1====================================
//                 document.getElementById("balls1").style.animationName = "spinStat1";
//                 var ball1 = document.querySelector('#balls1');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat1 {
//                             0%{margin-top: 60px;margin-left: 50px;}
//                             5%{margin-top: 30px;margin-left: 0px;}
//                             10%{margin-top: 50px;margin-left: 20px;}
//                             15%{margin-top: 0px;margin-left: 30px;}
//                             20%{margin-top: 60px;margin-left: 40px;}
//                             25%{margin-top: 50px;margin-left: 40px;}
//                             30%{margin-top: 10px;margin-left: 20px;}
//                             35%{margin-top: 0px;margin-left: 20px;}
//                             40%{margin-top: 30px;margin-left: 60px;}
//                             45%{margin-top: 10px;margin-left: 40px;}
//                             50%{margin-top: 63px;margin-left: 30px;}
//                             55{margin-top: 10px;margin-left: 35px;}
//                             60%{margin-top: 33px;margin-left: 0px;}
//                             65%{margin-top: 10px;margin-left: 30px;}
//                             70%{margin-top: 0px;margin-left: 25px;}
//                             75%{margin-top: 20px;margin-left: 20px;}
//                             80%{margin-top: 20px;margin-left: 40px;}
//                             85%{margin-top:20px;margin-left: 12px;}
//                             90%{margin-top: 50px;margin-left: 20px;}
//                             95%{margin-top: 0px;margin-left: 35px;}
//                             100%{margin-top: 27px;margin-left: 33px;background-position: 100%;}
//                         }
//                         #balls1 {
//                             animation: spinStat1 5s linear infinite alternate;
//                             -webkit-animation: spinstat1 5s linear infinite alternate;
//                         }
//                         `;
//                 ball1.appendChild(keyFramesw);
//                 // =========================blue ball2====================================
//                 document.getElementById("balls2").style.animationName = "spinStat2";
//                 var ball2 = document.querySelector('#balls2');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat2 {
//                             0%{margin-top: 60px;margin-left: 31px;}
//                                 5%{margin-top: 8px;margin-left: 30px;}
//                                 10%{margin-top: 30px;margin-left: 50px;}
//                                 15%{margin-top: 20px;margin-left: 10px;}
//                                 20%{margin-top: 50px;margin-left: 30px;}
//                                 25%{margin-top: 0px;margin-left: 30px;}
//                                 30%{margin-top: 60px;margin-left: 30px;}
//                                 35%{margin-top: 0px;margin-left: 30px;}
//                                 40%{margin-top: 30px;margin-left: 10px;}
//                                 45%{margin-top: 30px;margin-left: 60px;}
//                                 50%{margin-top: 63px;margin-left: 30px;}
//                                 55%{margin-top: 10px;margin-left: 45px;}
//                                 60%{margin-top: 55px;margin-left: 10px;}
//                                 65%{margin-top: 20px;margin-left: 35px;}
//                                 70%{margin-top: 45px;margin-left: 60px;}
//                                 75%{margin-top: 10px;margin-left: 49px;}
//                                 80%{margin-top: 48px;margin-left: 50px;}
//                                 85%{margin-top: 18px;margin-left: 30px;}
//                                 90%{margin-top: 20px;margin-left: 10px;}
//                                 95%{margin-top: 0px;margin-left: 30px;}
//                                 100%{margin-top: 63px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #balls2 {
//                             animation: spinStat2 5s linear infinite alternate;
//                             -webkit-animation: spinStat2 5s linear infinite alternate;
//                         }
//                         `;
//                 ball2.appendChild(keyFramesw);
//                 // =========================blue ball3====================================
//                 document.getElementById("balls3").style.animationName = "spinStat3";
//                 var ball3 = document.querySelector('#balls3');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat3 {
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 30px;margin-left: 0px;}
//                             10%{margin-top: 0px;margin-left: 30px;}
//                             15%{margin-top: 30px;margin-left: 60px;}
//                             20%{margin-top: 60px;margin-left: 30px;}
//                             25%{margin-top: 0px;margin-left: 27px;}
//                             30%{margin-top: 20px;margin-left: 50px;}
//                             35%{margin-top: 60px;margin-left: 30px;}
//                             40%{margin-top: 30px;margin-left: 15px;}
//                             45%{margin-top: 45px;margin-left: 45px;}
//                             50%{margin-top: 10px;margin-left: 50px;}
//                             55%{margin-top: 55px;margin-left: 30px;}
//                             60%{margin-top: 30px;margin-left: 20px;}
//                             65%{margin-top: 60px;margin-left: 30px;}
//                             70%{margin-top: 40px;margin-left: 15px;}
//                             75%{margin-top: 15px;margin-left: 30px;}
//                             80%{margin-top: 18px;margin-left: 20px;}
//                             85%{margin-top: 20px;margin-left: 60px;}
//                             90%{margin-top: 60px;margin-left: 30px;}
//                             95%{margin-top: 10px;margin-left: 35px;}
//                             100%{margin-top: 63px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #balls3 {
//                             animation: spinStat3 5s linear infinite alternate;
//                             -webkit-animation: spinStat3 5s linear infinite alternate;
//                         }
//                         `;
//                 ball3.appendChild(keyFramesw);
//                 // =========================blue ball4====================================
//                 document.getElementById("balls4").style.animationName = "spinStat4";
//                 var ball4 = document.querySelector('#balls4');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat4 {
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 15px;margin-left: 30px;}
//                             10%{margin-top: 40px;margin-left: 50px;}
//                             15%{margin-top: 60px;margin-left: 30px;}
//                             20%{margin-top: 50px;margin-left: 50px;}
//                             25%{margin-top: 6px;margin-left: 30px;}
//                             30%{margin-top: 45px;margin-left: 20px;}
//                             35%{margin-top: 15px;margin-left: 20px;}
//                             40%{margin-top: 0px;margin-left: 30px;}
//                             45%{margin-top: 20px;margin-left: 50px;}
//                             50%{margin-top: 35px;margin-left: 60px;}
//                             55%{margin-top: 55px;margin-left: 45px;}
//                             60%{margin-top: 60px;margin-left: 30px;}
//                             65%{margin-top: 0px;margin-left: 30px;}
//                             70%{margin-top: 60px;margin-left: 30px;}
//                             75%{margin-top: 15px;margin-left: 25px;}
//                             80%{margin-top: 55px;margin-left: 20px;}
//                             85%{margin-top: 0px;margin-left: 30px;}
//                             90%{margin-top: 55px;margin-left: 27px;}
//                             95%{margin-top: 20px;margin-left: 58px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #balls4 {
//                             animation: spinStat4 5s linear infinite alternate;
//                             -webkit-animation: spinStat4 5s linear infinite alternate;
//                         }
//                         `;
//                 ball4.appendChild(keyFramesw);
//                 // =========================blue ball5====================================
//                 document.getElementById("balls5").style.animationName = "spinStat5";
//                 var ball5 = document.querySelector('#balls5');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat5 { 
//                             0%{margin-top: 60px;margin-left: 35px;}
//                             5%{margin-top: 40px;margin-left: 50px;}
//                             10%{margin-top: 60px;margin-left: 30px;}
//                             15%{margin-top: 30px;margin-left: 0px;}
//                             20%{margin-top: 20px;margin-left: 20px;}
//                             25%{margin-top: 0px;margin-left: 30px;}
//                             30%{margin-top: 60px;margin-left: 30px;}
//                             35%{margin-top: 40px;margin-left: 25px;}
//                             40%{margin-top: 60px;margin-left: 30px;}
//                             45%{margin-top: 10px;margin-left: 30px;}
//                             50%{margin-top: 30px;margin-left: 60px;}
//                             55%{margin-top: 60px;margin-left: 35px;}
//                             60%{margin-top: 0px;margin-left: 30px;}
//                             65%{margin-top: 15px;margin-left: 25px;}
//                             70%{margin-top: 20px;margin-left: 50px;}
//                             75%{margin-top: 35px;margin-left: 0px;}
//                             80%{margin-top: 12px;margin-left: 20px;}
//                             85%{margin-top: 0px;margin-left: 35px;}
//                             90%{margin-top: 60px;margin-left: 30px;}
//                             95%{margin-top: 30px;margin-left: 60px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}

//                         }
//                         #balls5 {
//                             animation: spinStat5 5s linear infinite alternate;
//                             -webkit-animation: spinStat5 5s linear infinite alternate;
//                         }
//                         `;
//                 ball5.appendChild(keyFramesw);
//                 //=========================blue ball6====================================
//                 document.getElementById("balls6").style.animationName = "spinStat6";
//                 var ball6 = document.querySelector('#balls6');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat6 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 0px;margin-left: 30px;}
//                             10%{margin-top: 10px;margin-left: 45px;}
//                             15%{margin-top: 60px;margin-left: 28px;}
//                             20%{margin-top: 10px;margin-left: 25px;}
//                             25%{margin-top: 30px;margin-left: 0px;}
//                             30%{margin-top: 0px;margin-left: 30px;}
//                             35%{margin-top: 44px;margin-left: 44px;}
//                             40%{margin-top: 60px;margin-left: 30x;}
//                             45%{margin-top: 40px;margin-left: 30px;}
//                             50%{margin-top: 20px;margin-left: 45px;}
//                             55%{margin-top: 40px;margin-left: 40px;}
//                             60%{margin-top: 55px;margin-left: 35px;}
//                             65%{margin-top: 50px;margin-left: 30px;}
//                             70%{margin-top: 0px;margin-left: 30px;}
//                             75%{margin-top: 60px;margin-left: 10px;}
//                             80%{margin-top: 30px;margin-left: 60px;}
//                             85%{margin-top: 25px;margin-left: 55px;}
//                             90%{margin-top: 5px;margin-left: 40px;}
//                             95%{margin-top: 20px;margin-left: 25x;}
//                             100%{margin-top: 60px;margin-left: 31px;background-position: 100%;}

//                         }
//                         #balls6 {
//                             animation: spinStat6 5s linear infinite alternate;
//                             -webkit-animation: spinStat6 5s linear infinite alternate;
//                         }
//                         `;
//                 ball6.appendChild(keyFramesw);
//                 //=========================blue ball7====================================
//                 document.getElementById("balls7").style.animationName = "spinStat7";
//                 var ball7 = document.querySelector('#balls7');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat7 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 40px;margin-left: 20px;}
//                             10%{margin-top: 30px;margin-left: 0px;}
//                             15%{margin-top: 25px;margin-left: 20px;}
//                             20%{margin-top: 0px;margin-left: 30px;}
//                             25%{margin-top: 25px;margin-left: 40px;}
//                             30%{margin-top: 50px;margin-left: 40px;}
//                             35%{margin-top: 60px;margin-left: 30px;}
//                             40%{margin-top: 0px;margin-left: 30px;}
//                             45%{margin-top: 55px;margin-left: 10px;}
//                             50%{margin-top: 15px;margin-left: 20px;}
//                             55%{margin-top: 25px;margin-left: 45px;}
//                             60%{margin-top: 50px;margin-left: 15px;}
//                             65%{margin-top: 20px;margin-left: 50px;}
//                             70%{margin-top: 0px;margin-left: 30px;}
//                             75%{margin-top: 15px;margin-left: 25px;}
//                             80%{margin-top: 50px;margin-left: 35px;}
//                             85%{margin-top: 10px;margin-left: 35px;}
//                             90%{margin-top: 45px;margin-left: 15px;}
//                             95%{margin-top: 60px;margin-left: 30px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}

//                         }
//                         #balls7 {
//                             animation: spinStat7 5s linear infinite alternate;
//                             -webkit-animation: spinStat7 5s linear infinite alternate;
//                         }
//                         `;
//                 ball7.appendChild(keyFramesw);
//                 //=========================blue ball8====================================
//                 document.getElementById("balls8").style.animationName = "spinStat8";
//                 var ball8 = document.querySelector('#balls8');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat8 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 15px;margin-left: 50px;}
//                             10%{margin-top: 55px;margin-left: 30px;}
//                             15%{margin-top: 40px;margin-left: 23px;}
//                             20%{margin-top: 25px;margin-left: 35px;}
//                             25%{margin-top: 40px;margin-left: 40px;}
//                             30%{margin-top: 60px;margin-left: 30px;}
//                             35%{margin-top: 45px;margin-left: 10px;}
//                             40%{margin-top: 55px;margin-left: 25px;}
//                             45%{margin-top: 15px;margin-left: 27px;}
//                             50%{margin-top: 30px;margin-left: 60px;}
//                             55%{margin-top: 55px;margin-left: 55px;}
//                             60%{margin-top: 60px;margin-left: 30px;}
//                             65%{margin-top: 40px;margin-left: 25px;}
//                             70%{margin-top: 10px;margin-left: 12px;}
//                             75%{margin-top: 45px;margin-left: 15px;}
//                             80%{margin-top: 40px;margin-left: 55px;}
//                             85%{margin-top: 0px;margin-left: 30px;}
//                             90%{margin-top: 55px;margin-left: 25px;}
//                             95%{margin-top: 30px;margin-left: 30px;}
//                             100%{margin-top: 58px;margin-left: 28px;background-position: 100%;}

//                         }
//                         #balls8 {
//                             animation: spinStat8 5s linear infinite alternate;
//                             -webkit-animation: spinStat8 5s linear infinite alternate;
//                         }
//                         `;
//                 ball8.appendChild(keyFramesw);
//                 //=========================blue ball9====================================
//                 document.getElementById("balls9").style.animationName = "spinStat9";
//                 var ball9 = document.querySelector('#balls9');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat9 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 45px;margin-left: 15px;}
//                             10%{margin-top: 55px;margin-left: 15px;}
//                             15%{margin-top: 60px;margin-left: 30px;}
//                             20%{margin-top: 45px;margin-left: 40px;}
//                             25%{margin-top: 55px;margin-left: 25px;}
//                             30%{margin-top: 10px;margin-left: 25px;}
//                             35%{margin-top: 45px;margin-left: 45px;}
//                             40%{margin-top: 60px;margin-left: 30px;}
//                             45%{margin-top: 30px;margin-left: 0px;}
//                             50%{margin-top: 10px;margin-left: 25px;}
//                             55%{margin-top: 40px;margin-left: 35px;}
//                             60%{margin-top: 55px;margin-left: 25px;}
//                             65%{margin-top: 60px;margin-left: 33px;}
//                             70%{margin-top: 40px;margin-left: 40px;}
//                             75%{margin-top: 15px;margin-left: 20px;}
//                             80%{margin-top: 30px;margin-left: 15px;}
//                             85%{margin-top: 60px;margin-left: 30px;}
//                             90%{margin-top: 0px;margin-left: 30px;}
//                             95%{margin-top: 30px;margin-left: 0px;}
//                             100%{margin-top: 61px;margin-left: 35px;background-position: 100%;}

//                         }
//                         #balls9 {
//                             animation: spinStat9 5s linear infinite alternate;
//                             -webkit-animation: spinStat9 5s linear infinite alternate;
//                         }
//                         `;
//                 ball9.appendChild(keyFramesw);
//                 //=========================blue ball0====================================
//                 document.getElementById("balls0").style.animationName = "spinStat0";
//                 var ball0 = document.querySelector('#balls0');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat0 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 50px;margin-left: 15px;}
//                             10%{margin-top: 45px;margin-left: 20px;}
//                             15%{margin-top: 20px;margin-left: 15px;}
//                             20%{margin-top: 0px;margin-left: 30px;}
//                             25%{margin-top: 20px;margin-left: 38px;}
//                             30%{margin-top: 35px;margin-left: 40px;}
//                             35%{margin-top: 45px;margin-left: 45px;}
//                             40%{margin-top: 58px;margin-left: 50px;}
//                             45%{margin-top: 30px;margin-left: 0px;}
//                             50%{margin-top: 0px;margin-left: 30px;}
//                             55%{margin-top: 57px;margin-left: 28px;}
//                             60%{margin-top: 15px;margin-left: 35px;}
//                             65%{margin-top: 40px;margin-left: 20px;}
//                             70%{margin-top: 15px;margin-left: 35px;}
//                             75%{margin-top: 60px;margin-left: 30px;}
//                             80%{margin-top: 50px;margin-left: 15px;}
//                             85%{margin-top: 10px;margin-left: 40px;}
//                             90%{margin-top: 40px;margin-left: 23px;}
//                             95%{margin-top: 20px;margin-left: 30px;}
//                             100%{margin-top: 58px;margin-left: 28px;background-position: 100%;}

//                         }
//                         #balls0 {
//                             animation: spinStat0 5s linear infinite alternate;
//                             -webkit-animation: spinStat0 5s linear infinite alternate;
//                         }
//                         `;
//                 ball0.appendChild(keyFramesw);
//                 psound=parseInt(document.getElementById("pSound").innerHTML);
//                 if(psound==2){
//                     puaseplay();
//                 }else{
//                     play();
//                 }
//             }
//             if (cnt == 115) {
//                 var result6 = Math.floor(Math.random() * 10);
//                 document.getElementById("boxball1").innerHTML = result6;
//                 document.getElementById("boxBall1").style.animation = "";
//                 document.getElementById("balls0").style.animationName = "anib0";
//                 document.getElementById("balls9").style.animationName = "anib9";
//                 document.getElementById("balls8").style.animationName = "anib8";
//                 document.getElementById("balls7").style.animationName = "anib7";
//                 document.getElementById("balls6").style.animationName = "anib6";
//                 document.getElementById("balls5").style.animationName = "anib5";
//                 document.getElementById("balls4").style.animationName = "anib4";
//                 document.getElementById("balls3").style.animationName = "anib3";
//                 document.getElementById("balls2").style.animationName = "anib2";
//                 document.getElementById("balls1").style.animationName = "anib1";
//                 document.getElementById("imgspin").style.animation = "none";
//                 var runball = document.querySelector('#boxBall1');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes run5 {
//                             from {
//                                 height: 60px;
//                                 width: 60px;
//                                 margin-top: 0px;
//                                 margin-left: 80px;
//                                 opacity: 1;
//                             }
//                             to {
//                                 margin-top: 80px;
//                                 margin-left: 330px;
//                                 height: 40px;
//                                 width: 40px;
//                                 z-index: 1;
//                                 opacity: 0;
//                             }
//                         }
//                         #boxBall1 {
//                             animation: run5 1s linear infinite;
//                             -webkit-animation: run5 1s linear infinite;
//                         }
//                         `;
//                 runball.appendChild(keyFramesw);
//                 psound=parseInt(document.getElementById("pSound").innerHTML);
//                 if(psound==2){
//                     puase1();
//                 }else{
//                     play1();
//                 }
//             }
//             /*7*/
//             if (cnt == 117) {
//                 document.getElementById("boxBall5").style.animation = "none";
//                 var result5 = document.getElementById("boxball5").innerHTML;
//                 document.getElementById("nums5").innerHTML = result5;
//                 document.getElementById("boxball5").innerHTML = "?";
//                 document.getElementById("boxball1").innerHTML = "?";
//                 document.getElementById("boxball2").innerHTML = "?";
//                 document.getElementById("boxball3").innerHTML = "?";
//                 document.getElementById("boxball4").innerHTML = "?";
//                 document.getElementById("imgspin2").style.animation = "";
//                 var spinball = document.querySelector('#imgspin2');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spin2 {
//                             from {
//                                 transform: rotate(0deg);
//                                 -webkit-transform: rotate(0deg);
//                             }
//                             to {
//                                 transform: rotate(360deg);
//                                 -webkit-transform: rotate(360deg);
//                             }
//                         }
//                         #imgspin2 {
//                             animation: spin2 0.8s linear infinite;
//                             -webkit-animation: spin 0.8s linear infinite;
//                         }
//                         `;
//                 spinball.appendChild(keyFramesw);
//                 // =========================blue ball1====================================
//                 document.getElementById("ballss1").style.animationName = "spinStat1";
//                 var balls1 = document.querySelector('#ballss1');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat1 {
//                             0%{margin-top: 60px;margin-left: 50px;}
//                             5%{margin-top: 30px;margin-left: 0px;}
//                             10%{margin-top: 50px;margin-left: 20px;}
//                             15%{margin-top: 0px;margin-left: 30px;}
//                             20%{margin-top: 60px;margin-left: 40px;}
//                             25%{margin-top: 50px;margin-left: 40px;}
//                             30%{margin-top: 10px;margin-left: 20px;}
//                             35%{margin-top: 0px;margin-left: 20px;}
//                             40%{margin-top: 30px;margin-left: 60px;}
//                             45%{margin-top: 10px;margin-left: 40px;}
//                             50%{margin-top: 63px;margin-left: 30px;}
//                             55{margin-top: 10px;margin-left: 35px;}
//                             60%{margin-top: 33px;margin-left: 0px;}
//                             65%{margin-top: 10px;margin-left: 30px;}
//                             70%{margin-top: 0px;margin-left: 25px;}
//                             75%{margin-top: 20px;margin-left: 20px;}
//                             80%{margin-top: 20px;margin-left: 40px;}
//                             85%{margin-top:20px;margin-left: 12px;}
//                             90%{margin-top: 50px;margin-left: 20px;}
//                             95%{margin-top: 0px;margin-left: 35px;}
//                             100%{margin-top: 27px;margin-left: 33px;background-position: 100%;}
//                         }
//                         #ballss1 {
//                             animation: spinStat1 5s linear infinite alternate;
//                             -webkit-animation: spinstat1 5s linear infinite alternate;
//                         }
//                         `;
//                 balls1.appendChild(keyFramesw);
//                 // =========================blue balls2====================================
//                 document.getElementById("ballss2").style.animationName = "spinStats2";
//                 var ball2 = document.querySelector('#ballss2');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats2 {
//                             0%{margin-top: 60px;margin-left: 31px;}
//                                 5%{margin-top: 8px;margin-left: 30px;}
//                                 10%{margin-top: 30px;margin-left: 50px;}
//                                 15%{margin-top: 20px;margin-left: 10px;}
//                                 20%{margin-top: 50px;margin-left: 30px;}
//                                 25%{margin-top: 0px;margin-left: 30px;}
//                                 30%{margin-top: 60px;margin-left: 30px;}
//                                 35%{margin-top: 0px;margin-left: 30px;}
//                                 40%{margin-top: 30px;margin-left: 10px;}
//                                 45%{margin-top: 30px;margin-left: 60px;}
//                                 50%{margin-top: 63px;margin-left: 30px;}
//                                 55%{margin-top: 10px;margin-left: 45px;}
//                                 60%{margin-top: 55px;margin-left: 10px;}
//                                 65%{margin-top: 20px;margin-left: 35px;}
//                                 70%{margin-top: 45px;margin-left: 60px;}
//                                 75%{margin-top: 10px;margin-left: 49px;}
//                                 80%{margin-top: 48px;margin-left: 50px;}
//                                 85%{margin-top: 18px;margin-left: 30px;}
//                                 90%{margin-top: 20px;margin-left: 10px;}
//                                 95%{margin-top: 0px;margin-left: 30px;}
//                                 100%{margin-top: 63px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballss2 {
//                             animation: spinStats2 5s linear infinite alternate;
//                             -webkit-animation: spinStats2 5s linear infinite alternate;
//                         }
//                         `;
//                 ball2.appendChild(keyFramesw);
//                 // =========================blue balls3====================================
//                 document.getElementById("ballss3").style.animationName = "spinStats3";
//                 var ball3 = document.querySelector('#ballss3');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats3 {
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 30px;margin-left: 0px;}
//                             10%{margin-top: 0px;margin-left: 30px;}
//                             15%{margin-top: 30px;margin-left: 60px;}
//                             20%{margin-top: 60px;margin-left: 30px;}
//                             25%{margin-top: 0px;margin-left: 27px;}
//                             30%{margin-top: 20px;margin-left: 50px;}
//                             35%{margin-top: 60px;margin-left: 30px;}
//                             40%{margin-top: 30px;margin-left: 15px;}
//                             45%{margin-top: 45px;margin-left: 45px;}
//                             50%{margin-top: 10px;margin-left: 50px;}
//                             55%{margin-top: 55px;margin-left: 30px;}
//                             60%{margin-top: 30px;margin-left: 20px;}
//                             65%{margin-top: 60px;margin-left: 30px;}
//                             70%{margin-top: 40px;margin-left: 15px;}
//                             75%{margin-top: 15px;margin-left: 30px;}
//                             80%{margin-top: 18px;margin-left: 20px;}
//                             85%{margin-top: 20px;margin-left: 60px;}
//                             90%{margin-top: 60px;margin-left: 30px;}
//                             95%{margin-top: 10px;margin-left: 35px;}
//                             100%{margin-top: 63px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballss3 {
//                             animation: spinStats3 5s linear infinite alternate;
//                             -webkit-animation: spinStats3 5s linear infinite alternate;
//                         }
//                         `;
//                 ball3.appendChild(keyFramesw);
//                 // =========================blue balls4====================================
//                 document.getElementById("ballss4").style.animationName = "spinStats4";
//                 var ball4 = document.querySelector('#ballss4');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats4 {
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 15px;margin-left: 30px;}
//                             10%{margin-top: 40px;margin-left: 50px;}
//                             15%{margin-top: 60px;margin-left: 30px;}
//                             20%{margin-top: 50px;margin-left: 50px;}
//                             25%{margin-top: 6px;margin-left: 30px;}
//                             30%{margin-top: 45px;margin-left: 20px;}
//                             35%{margin-top: 15px;margin-left: 20px;}
//                             40%{margin-top: 0px;margin-left: 30px;}
//                             45%{margin-top: 20px;margin-left: 50px;}
//                             50%{margin-top: 35px;margin-left: 60px;}
//                             55%{margin-top: 55px;margin-left: 45px;}
//                             60%{margin-top: 60px;margin-left: 30px;}
//                             65%{margin-top: 0px;margin-left: 30px;}
//                             70%{margin-top: 60px;margin-left: 30px;}
//                             75%{margin-top: 15px;margin-left: 25px;}
//                             80%{margin-top: 55px;margin-left: 20px;}
//                             85%{margin-top: 0px;margin-left: 30px;}
//                             90%{margin-top: 55px;margin-left: 27px;}
//                             95%{margin-top: 20px;margin-left: 58px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballss4 {
//                             animation: spinStats4 5s linear infinite alternate;
//                             -webkit-animation: spinStats4 5s linear infinite alternate;
//                         }
//                         `;
//                 ball4.appendChild(keyFramesw);
//                 // =========================blue balls5====================================
//                 document.getElementById("ballss5").style.animationName = "spinStats5";
//                 var ball5 = document.querySelector('#ballss5');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats5 { 
//                             0%{margin-top: 60px;margin-left: 35px;}
//                             5%{margin-top: 40px;margin-left: 50px;}
//                             10%{margin-top: 60px;margin-left: 30px;}
//                             15%{margin-top: 30px;margin-left: 0px;}
//                             20%{margin-top: 20px;margin-left: 20px;}
//                             25%{margin-top: 0px;margin-left: 30px;}
//                             30%{margin-top: 60px;margin-left: 30px;}
//                             35%{margin-top: 40px;margin-left: 25px;}
//                             40%{margin-top: 60px;margin-left: 30px;}
//                             45%{margin-top: 10px;margin-left: 30px;}
//                             50%{margin-top: 30px;margin-left: 60px;}
//                             55%{margin-top: 60px;margin-left: 35px;}
//                             60%{margin-top: 0px;margin-left: 30px;}
//                             65%{margin-top: 15px;margin-left: 25px;}
//                             70%{margin-top: 20px;margin-left: 50px;}
//                             75%{margin-top: 35px;margin-left: 0px;}
//                             80%{margin-top: 12px;margin-left: 20px;}
//                             85%{margin-top: 0px;margin-left: 35px;}
//                             90%{margin-top: 60px;margin-left: 30px;}
//                             95%{margin-top: 30px;margin-left: 60px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}

//                         }
//                         #ballss5 {
//                             animation: spinStats5 5s linear infinite alternate;
//                             -webkit-animation: spinStats5 5s linear infinite alternate;
//                         }
//                         `;
//                 ball5.appendChild(keyFramesw);
//                 //=========================blue balls6====================================
//                 document.getElementById("ballss6").style.animationName = "spinStats6";
//                 var ball6 = document.querySelector('#ballss6');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats6 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 0px;margin-left: 30px;}
//                             10%{margin-top: 10px;margin-left: 45px;}
//                             15%{margin-top: 60px;margin-left: 28px;}
//                             20%{margin-top: 10px;margin-left: 25px;}
//                             25%{margin-top: 30px;margin-left: 0px;}
//                             30%{margin-top: 0px;margin-left: 30px;}
//                             35%{margin-top: 44px;margin-left: 44px;}
//                             40%{margin-top: 60px;margin-left: 30x;}
//                             45%{margin-top: 40px;margin-left: 30px;}
//                             50%{margin-top: 20px;margin-left: 45px;}
//                             55%{margin-top: 40px;margin-left: 40px;}
//                             60%{margin-top: 55px;margin-left: 35px;}
//                             65%{margin-top: 50px;margin-left: 30px;}
//                             70%{margin-top: 0px;margin-left: 30px;}
//                             75%{margin-top: 60px;margin-left: 10px;}
//                             80%{margin-top: 30px;margin-left: 60px;}
//                             85%{margin-top: 25px;margin-left: 55px;}
//                             90%{margin-top: 5px;margin-left: 40px;}
//                             95%{margin-top: 20px;margin-left: 25x;}
//                             100%{margin-top: 60px;margin-left: 31px;background-position: 100%;}

//                         }
//                         #ballss6 {
//                             animation: spinStats6 5s linear infinite alternate;
//                             -webkit-animation: spinStats6 5s linear infinite alternate;
//                         }
//                         `;
//                 ball6.appendChild(keyFramesw);
//                 //=========================blue balls7====================================
//                 document.getElementById("ballss7").style.animationName = "spinStats7";
//                 var ball7 = document.querySelector('#ballss7');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats7 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 40px;margin-left: 20px;}
//                             10%{margin-top: 30px;margin-left: 0px;}
//                             15%{margin-top: 25px;margin-left: 20px;}
//                             20%{margin-top: 0px;margin-left: 30px;}
//                             25%{margin-top: 25px;margin-left: 40px;}
//                             30%{margin-top: 50px;margin-left: 40px;}
//                             35%{margin-top: 60px;margin-left: 30px;}
//                             40%{margin-top: 0px;margin-left: 30px;}
//                             45%{margin-top: 55px;margin-left: 10px;}
//                             50%{margin-top: 15px;margin-left: 20px;}
//                             55%{margin-top: 25px;margin-left: 45px;}
//                             60%{margin-top: 50px;margin-left: 15px;}
//                             65%{margin-top: 20px;margin-left: 50px;}
//                             70%{margin-top: 0px;margin-left: 30px;}
//                             75%{margin-top: 15px;margin-left: 25px;}
//                             80%{margin-top: 50px;margin-left: 35px;}
//                             85%{margin-top: 10px;margin-left: 35px;}
//                             90%{margin-top: 45px;margin-left: 15px;}
//                             95%{margin-top: 60px;margin-left: 30px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}

//                         }
//                         #ballss7 {
//                             animation: spinStats7 5s linear infinite alternate;
//                             -webkit-animation: spinStats7 5s linear infinite alternate;
//                         }
//                         `;
//                 ball7.appendChild(keyFramesw);
//                 //=========================blue balls8====================================
//                 document.getElementById("ballss8").style.animationName = "spinStats8";
//                 var ball8 = document.querySelector('#ballss8');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats8 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 15px;margin-left: 50px;}
//                             10%{margin-top: 55px;margin-left: 30px;}
//                             15%{margin-top: 40px;margin-left: 23px;}
//                             20%{margin-top: 25px;margin-left: 35px;}
//                             25%{margin-top: 40px;margin-left: 40px;}
//                             30%{margin-top: 60px;margin-left: 30px;}
//                             35%{margin-top: 45px;margin-left: 10px;}
//                             40%{margin-top: 55px;margin-left: 25px;}
//                             45%{margin-top: 15px;margin-left: 27px;}
//                             50%{margin-top: 30px;margin-left: 60px;}
//                             55%{margin-top: 55px;margin-left: 55px;}
//                             60%{margin-top: 60px;margin-left: 30px;}
//                             65%{margin-top: 40px;margin-left: 25px;}
//                             70%{margin-top: 10px;margin-left: 12px;}
//                             75%{margin-top: 45px;margin-left: 15px;}
//                             80%{margin-top: 40px;margin-left: 55px;}
//                             85%{margin-top: 0px;margin-left: 30px;}
//                             90%{margin-top: 55px;margin-left: 25px;}
//                             95%{margin-top: 30px;margin-left: 30px;}
//                             100%{margin-top: 58px;margin-left: 28px;background-position: 100%;}

//                         }
//                         #ballss8 {
//                             animation: spinStats8 5s linear infinite alternate;
//                             -webkit-animation: spinStats8 5s linear infinite alternate;
//                         }
//                         `;
//                 ball8.appendChild(keyFramesw);
//                 //=========================blue balls9====================================
//                 document.getElementById("ballss9").style.animationName = "spinStats9";
//                 var ball9 = document.querySelector('#ballss9');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats9 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 45px;margin-left: 15px;}
//                             10%{margin-top: 55px;margin-left: 15px;}
//                             15%{margin-top: 60px;margin-left: 30px;}
//                             20%{margin-top: 45px;margin-left: 40px;}
//                             25%{margin-top: 55px;margin-left: 25px;}
//                             30%{margin-top: 10px;margin-left: 25px;}
//                             35%{margin-top: 45px;margin-left: 45px;}
//                             40%{margin-top: 60px;margin-left: 30px;}
//                             45%{margin-top: 30px;margin-left: 0px;}
//                             50%{margin-top: 10px;margin-left: 25px;}
//                             55%{margin-top: 40px;margin-left: 35px;}
//                             60%{margin-top: 55px;margin-left: 25px;}
//                             65%{margin-top: 60px;margin-left: 33px;}
//                             70%{margin-top: 40px;margin-left: 40px;}
//                             75%{margin-top: 15px;margin-left: 20px;}
//                             80%{margin-top: 30px;margin-left: 15px;}
//                             85%{margin-top: 60px;margin-left: 30px;}
//                             90%{margin-top: 0px;margin-left: 30px;}
//                             95%{margin-top: 30px;margin-left: 0px;}
//                             100%{margin-top: 61px;margin-left: 35px;background-position: 100%;}

//                         }
//                         #ballss9 {
//                             animation: spinStats9 5s linear infinite alternate;
//                             -webkit-animation: spinStats9 5s linear infinite alternate;
//                         }
//                         `;
//                 ball9.appendChild(keyFramesw);
//                 //=========================blue balls0====================================
//                 document.getElementById("ballss0").style.animationName = "spinStats0";
//                 var ball0 = document.querySelector('#ballss0');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats0 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 50px;margin-left: 15px;}
//                             10%{margin-top: 45px;margin-left: 20px;}
//                             15%{margin-top: 20px;margin-left: 15px;}
//                             20%{margin-top: 0px;margin-left: 30px;}
//                             25%{margin-top: 20px;margin-left: 38px;}
//                             30%{margin-top: 35px;margin-left: 40px;}
//                             35%{margin-top: 45px;margin-left: 45px;}
//                             40%{margin-top: 58px;margin-left: 50px;}
//                             45%{margin-top: 30px;margin-left: 0px;}
//                             50%{margin-top: 0px;margin-left: 30px;}
//                             55%{margin-top: 57px;margin-left: 28px;}
//                             60%{margin-top: 15px;margin-left: 35px;}
//                             65%{margin-top: 40px;margin-left: 20px;}
//                             70%{margin-top: 15px;margin-left: 35px;}
//                             75%{margin-top: 60px;margin-left: 30px;}
//                             80%{margin-top: 50px;margin-left: 15px;}
//                             85%{margin-top: 10px;margin-left: 40px;}
//                             90%{margin-top: 40px;margin-left: 23px;}
//                             95%{margin-top: 20px;margin-left: 30px;}
//                             100%{margin-top: 58px;margin-left: 28px;background-position: 100%;}

//                         }
//                         #ballss0 {
//                             animation: spinStats0 5s linear infinite alternate;
//                             -webkit-animation: spinStats0 5s linear infinite alternate;
//                         }
//                         `;
//                 ball0.appendChild(keyFramesw);
//                 psound=parseInt(document.getElementById("pSound").innerHTML);
//                 if(psound==2){
//                     puaseplay();
//                 }else{
//                     play();
//                 }
//             }
//             if (cnt == 112) {
//                 var result7 = Math.floor(Math.random() * 10);
//                 document.getElementById("boxball2").innerHTML = result7;
//                 document.getElementById("boxBall2").style.animation = "";
//                 document.getElementById("ballss0").style.animationName = "anib0";
//                 document.getElementById("ballss9").style.animationName = "anib9";
//                 document.getElementById("ballss8").style.animationName = "anib8";
//                 document.getElementById("ballss7").style.animationName = "anib7";
//                 document.getElementById("ballss6").style.animationName = "anib6";
//                 document.getElementById("ballss5").style.animationName = "anib5";
//                 document.getElementById("ballss4").style.animationName = "anib4";
//                 document.getElementById("ballss3").style.animationName = "anib3";
//                 document.getElementById("ballss2").style.animationName = "anib2";
//                 document.getElementById("ballss1").style.animationName = "anib1";
//                 document.getElementById("imgspin2").style.animation = "none";
//                 var runball = document.querySelector('#boxBall2');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes run6 {
//                             from {
//                                 height: 60px;
//                                 width: 60px;
//                                 margin-top: 0px;
//                                 margin-left: 80px;
//                                 opacity: 1;
//                             }
//                             to {
//                                 margin-top: 80px;
//                                 margin-left: 140px;
//                                 height: 40px;
//                                 width: 40px;
//                                 z-index: 1;
//                                 opacity: 0;
//                             }
//                         }
//                         #boxBall2 {
//                             animation: run6 1s linear infinite;
//                             -webkit-animation: run6 1s linear infinite;
//                         }
//                         `;
//                 runball.appendChild(keyFramesw);
//                 psound=parseInt(document.getElementById("pSound").innerHTML);
//                 if(psound==2){
//                     puase1();
//                 }else{
//                     play1();
//                 }
//             }
//             /*8*/
//             if (cnt == 114) {
//                 document.getElementById("boxBall1").style.animation = "none";
//                 var result6 = document.getElementById("boxball1").innerHTML;
//                 document.getElementById("nums6").innerHTML = result6;
//                 document.getElementById("imgspin3").style.animation = "";
//                 var spinball = document.querySelector('#imgspin3');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spin2 {
//                             from {
//                                 transform: rotate(0deg);
//                                 -webkit-transform: rotate(0deg);
//                             }
//                             to {
//                                 transform: rotate(360deg);
//                                 -webkit-transform: rotate(360deg);
//                             }
//                         }
//                         #imgspin3 {
//                             animation: spin2 0.8s linear infinite;
//                             -webkit-animation: spin2 0.8s linear infinite;
//                         }
//                         `;
//                 spinball.appendChild(keyFramesw);
//                 // =========================blue ball1====================================
//                 document.getElementById("ballsss1").style.animationName = "spinStat1";
//                 var balls1 = document.querySelector('#ballsss1');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat1 {
//                             0%{margin-top: 60px;margin-left: 50px;}
//                             5%{margin-top: 30px;margin-left: 0px;}
//                             10%{margin-top: 50px;margin-left: 20px;}
//                             15%{margin-top: 0px;margin-left: 30px;}
//                             20%{margin-top: 60px;margin-left: 40px;}
//                             25%{margin-top: 50px;margin-left: 40px;}
//                             30%{margin-top: 10px;margin-left: 20px;}
//                             35%{margin-top: 0px;margin-left: 20px;}
//                             40%{margin-top: 30px;margin-left: 60px;}
//                             45%{margin-top: 10px;margin-left: 40px;}
//                             50%{margin-top: 63px;margin-left: 30px;}
//                             55{margin-top: 10px;margin-left: 35px;}
//                             60%{margin-top: 33px;margin-left: 0px;}
//                             65%{margin-top: 10px;margin-left: 30px;}
//                             70%{margin-top: 0px;margin-left: 25px;}
//                             75%{margin-top: 20px;margin-left: 20px;}
//                             80%{margin-top: 20px;margin-left: 40px;}
//                             85%{margin-top:20px;margin-left: 12px;}
//                             90%{margin-top: 50px;margin-left: 20px;}
//                             95%{margin-top: 0px;margin-left: 35px;}
//                             100%{margin-top: 27px;margin-left: 33px;background-position: 100%;}
//                         }
//                         #ballsss1 {
//                             animation: spinStat1 5s linear infinite alternate;
//                             -webkit-animation: spinstat1 5s linear infinite alternate;
//                         }
//                         `;
//                 balls1.appendChild(keyFramesw);
//                 // =========================blue balls2====================================
//                 document.getElementById("ballsss2").style.animationName = "spinStats2";
//                 var ball2 = document.querySelector('#ballsss2');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats2 {
//                             0%{margin-top: 60px;margin-left: 31px;}
//                                 5%{margin-top: 8px;margin-left: 30px;}
//                                 10%{margin-top: 30px;margin-left: 50px;}
//                                 15%{margin-top: 20px;margin-left: 10px;}
//                                 20%{margin-top: 50px;margin-left: 30px;}
//                                 25%{margin-top: 0px;margin-left: 30px;}
//                                 30%{margin-top: 60px;margin-left: 30px;}
//                                 35%{margin-top: 0px;margin-left: 30px;}
//                                 40%{margin-top: 30px;margin-left: 10px;}
//                                 45%{margin-top: 30px;margin-left: 60px;}
//                                 50%{margin-top: 63px;margin-left: 30px;}
//                                 55%{margin-top: 10px;margin-left: 45px;}
//                                 60%{margin-top: 55px;margin-left: 10px;}
//                                 65%{margin-top: 20px;margin-left: 35px;}
//                                 70%{margin-top: 45px;margin-left: 60px;}
//                                 75%{margin-top: 10px;margin-left: 49px;}
//                                 80%{margin-top: 48px;margin-left: 50px;}
//                                 85%{margin-top: 18px;margin-left: 30px;}
//                                 90%{margin-top: 20px;margin-left: 10px;}
//                                 95%{margin-top: 0px;margin-left: 30px;}
//                                 100%{margin-top: 63px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballsss2 {
//                             animation: spinStats2 5s linear infinite alternate;
//                             -webkit-animation: spinStats2 5s linear infinite alternate;
//                         }
//                         `;
//                 ball2.appendChild(keyFramesw);
//                 // =========================blue balls3====================================
//                 document.getElementById("ballsss3").style.animationName = "spinStats3";
//                 var ball3 = document.querySelector('#ballsss3');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats3 {
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 30px;margin-left: 0px;}
//                             10%{margin-top: 0px;margin-left: 30px;}
//                             15%{margin-top: 30px;margin-left: 60px;}
//                             20%{margin-top: 60px;margin-left: 30px;}
//                             25%{margin-top: 0px;margin-left: 27px;}
//                             30%{margin-top: 20px;margin-left: 50px;}
//                             35%{margin-top: 60px;margin-left: 30px;}
//                             40%{margin-top: 30px;margin-left: 15px;}
//                             45%{margin-top: 45px;margin-left: 45px;}
//                             50%{margin-top: 10px;margin-left: 50px;}
//                             55%{margin-top: 55px;margin-left: 30px;}
//                             60%{margin-top: 30px;margin-left: 20px;}
//                             65%{margin-top: 60px;margin-left: 30px;}
//                             70%{margin-top: 40px;margin-left: 15px;}
//                             75%{margin-top: 15px;margin-left: 30px;}
//                             80%{margin-top: 18px;margin-left: 20px;}
//                             85%{margin-top: 20px;margin-left: 60px;}
//                             90%{margin-top: 60px;margin-left: 30px;}
//                             95%{margin-top: 10px;margin-left: 35px;}
//                             100%{margin-top: 63px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballsss3 {
//                             animation: spinStats3 5s linear infinite alternate;
//                             -webkit-animation: spinStats3 5s linear infinite alternate;
//                         }
//                         `;
//                 ball3.appendChild(keyFramesw);
//                 // =========================blue balls4====================================
//                 document.getElementById("ballsss4").style.animationName = "spinStats4";
//                 var ball4 = document.querySelector('#ballsss4');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats4 {
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 15px;margin-left: 30px;}
//                             10%{margin-top: 40px;margin-left: 50px;}
//                             15%{margin-top: 60px;margin-left: 30px;}
//                             20%{margin-top: 50px;margin-left: 50px;}
//                             25%{margin-top: 6px;margin-left: 30px;}
//                             30%{margin-top: 45px;margin-left: 20px;}
//                             35%{margin-top: 15px;margin-left: 20px;}
//                             40%{margin-top: 0px;margin-left: 30px;}
//                             45%{margin-top: 20px;margin-left: 50px;}
//                             50%{margin-top: 35px;margin-left: 60px;}
//                             55%{margin-top: 55px;margin-left: 45px;}
//                             60%{margin-top: 60px;margin-left: 30px;}
//                             65%{margin-top: 0px;margin-left: 30px;}
//                             70%{margin-top: 60px;margin-left: 30px;}
//                             75%{margin-top: 15px;margin-left: 25px;}
//                             80%{margin-top: 55px;margin-left: 20px;}
//                             85%{margin-top: 0px;margin-left: 30px;}
//                             90%{margin-top: 55px;margin-left: 27px;}
//                             95%{margin-top: 20px;margin-left: 58px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballsss4 {
//                             animation: spinStats4 5s linear infinite alternate;
//                             -webkit-animation: spinStats4 5s linear infinite alternate;
//                         }
//                         `;
//                 ball4.appendChild(keyFramesw);
//                 // =========================blue balls5====================================
//                 document.getElementById("ballsss5").style.animationName = "spinStats5";
//                 var ball5 = document.querySelector('#ballsss5');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats5 { 
//                             0%{margin-top: 60px;margin-left: 35px;}
//                             5%{margin-top: 40px;margin-left: 50px;}
//                             10%{margin-top: 60px;margin-left: 30px;}
//                             15%{margin-top: 30px;margin-left: 0px;}
//                             20%{margin-top: 20px;margin-left: 20px;}
//                             25%{margin-top: 0px;margin-left: 30px;}
//                             30%{margin-top: 60px;margin-left: 30px;}
//                             35%{margin-top: 40px;margin-left: 25px;}
//                             40%{margin-top: 60px;margin-left: 30px;}
//                             45%{margin-top: 10px;margin-left: 30px;}
//                             50%{margin-top: 30px;margin-left: 60px;}
//                             55%{margin-top: 60px;margin-left: 35px;}
//                             60%{margin-top: 0px;margin-left: 30px;}
//                             65%{margin-top: 15px;margin-left: 25px;}
//                             70%{margin-top: 20px;margin-left: 50px;}
//                             75%{margin-top: 35px;margin-left: 0px;}
//                             80%{margin-top: 12px;margin-left: 20px;}
//                             85%{margin-top: 0px;margin-left: 35px;}
//                             90%{margin-top: 60px;margin-left: 30px;}
//                             95%{margin-top: 30px;margin-left: 60px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}

//                         }
//                         #ballsss5 {
//                             animation: spinStats5 5s linear infinite alternate;
//                             -webkit-animation: spinStats5 5s linear infinite alternate;
//                         }
//                         `;
//                 ball5.appendChild(keyFramesw);
//                 //=========================blue balls6====================================
//                 document.getElementById("ballsss6").style.animationName = "spinStats6";
//                 var ball6 = document.querySelector('#ballsss6');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats6 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 0px;margin-left: 30px;}
//                             10%{margin-top: 10px;margin-left: 45px;}
//                             15%{margin-top: 60px;margin-left: 28px;}
//                             20%{margin-top: 10px;margin-left: 25px;}
//                             25%{margin-top: 30px;margin-left: 0px;}
//                             30%{margin-top: 0px;margin-left: 30px;}
//                             35%{margin-top: 44px;margin-left: 44px;}
//                             40%{margin-top: 60px;margin-left: 30x;}
//                             45%{margin-top: 40px;margin-left: 30px;}
//                             50%{margin-top: 20px;margin-left: 45px;}
//                             55%{margin-top: 40px;margin-left: 40px;}
//                             60%{margin-top: 55px;margin-left: 35px;}
//                             65%{margin-top: 50px;margin-left: 30px;}
//                             70%{margin-top: 0px;margin-left: 30px;}
//                             75%{margin-top: 60px;margin-left: 10px;}
//                             80%{margin-top: 30px;margin-left: 60px;}
//                             85%{margin-top: 25px;margin-left: 55px;}
//                             90%{margin-top: 5px;margin-left: 40px;}
//                             95%{margin-top: 20px;margin-left: 25x;}
//                             100%{margin-top: 60px;margin-left: 31px;background-position: 100%;}

//                         }
//                         #ballsss6 {
//                             animation: spinStats6 5s linear infinite alternate;
//                             -webkit-animation: spinStats6 5s linear infinite alternate;
//                         }
//                         `;
//                 ball6.appendChild(keyFramesw);
//                 //=========================blue balls7====================================
//                 document.getElementById("ballsss7").style.animationName = "spinStats7";
//                 var ball7 = document.querySelector('#ballsss7');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats7 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 40px;margin-left: 20px;}
//                             10%{margin-top: 30px;margin-left: 0px;}
//                             15%{margin-top: 25px;margin-left: 20px;}
//                             20%{margin-top: 0px;margin-left: 30px;}
//                             25%{margin-top: 25px;margin-left: 40px;}
//                             30%{margin-top: 50px;margin-left: 40px;}
//                             35%{margin-top: 60px;margin-left: 30px;}
//                             40%{margin-top: 0px;margin-left: 30px;}
//                             45%{margin-top: 55px;margin-left: 10px;}
//                             50%{margin-top: 15px;margin-left: 20px;}
//                             55%{margin-top: 25px;margin-left: 45px;}
//                             60%{margin-top: 50px;margin-left: 15px;}
//                             65%{margin-top: 20px;margin-left: 50px;}
//                             70%{margin-top: 0px;margin-left: 30px;}
//                             75%{margin-top: 15px;margin-left: 25px;}
//                             80%{margin-top: 50px;margin-left: 35px;}
//                             85%{margin-top: 10px;margin-left: 35px;}
//                             90%{margin-top: 45px;margin-left: 15px;}
//                             95%{margin-top: 60px;margin-left: 30px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}

//                         }
//                         #ballsss7 {
//                             animation: spinStats7 5s linear infinite alternate;
//                             -webkit-animation: spinStats7 5s linear infinite alternate;
//                         }
//                         `;
//                 ball7.appendChild(keyFramesw);
//                 //=========================blue balls8====================================
//                 document.getElementById("ballsss8").style.animationName = "spinStats8";
//                 var ball8 = document.querySelector('#ballsss8');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats8 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 15px;margin-left: 50px;}
//                             10%{margin-top: 55px;margin-left: 30px;}
//                             15%{margin-top: 40px;margin-left: 23px;}
//                             20%{margin-top: 25px;margin-left: 35px;}
//                             25%{margin-top: 40px;margin-left: 40px;}
//                             30%{margin-top: 60px;margin-left: 30px;}
//                             35%{margin-top: 45px;margin-left: 10px;}
//                             40%{margin-top: 55px;margin-left: 25px;}
//                             45%{margin-top: 15px;margin-left: 27px;}
//                             50%{margin-top: 30px;margin-left: 60px;}
//                             55%{margin-top: 55px;margin-left: 55px;}
//                             60%{margin-top: 60px;margin-left: 30px;}
//                             65%{margin-top: 40px;margin-left: 25px;}
//                             70%{margin-top: 10px;margin-left: 12px;}
//                             75%{margin-top: 45px;margin-left: 15px;}
//                             80%{margin-top: 40px;margin-left: 55px;}
//                             85%{margin-top: 0px;margin-left: 30px;}
//                             90%{margin-top: 55px;margin-left: 25px;}
//                             95%{margin-top: 30px;margin-left: 30px;}
//                             100%{margin-top: 58px;margin-left: 28px;background-position: 100%;}

//                         }
//                         #ballsss8 {
//                             animation: spinStats8 5s linear infinite alternate;
//                             -webkit-animation: spinStats8 5s linear infinite alternate;
//                         }
//                         `;
//                 ball8.appendChild(keyFramesw);
//                 //=========================blue balls9====================================
//                 document.getElementById("ballsss9").style.animationName = "spinStats9";
//                 var ball9 = document.querySelector('#ballsss9');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats9 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 45px;margin-left: 15px;}
//                             10%{margin-top: 55px;margin-left: 15px;}
//                             15%{margin-top: 60px;margin-left: 30px;}
//                             20%{margin-top: 45px;margin-left: 40px;}
//                             25%{margin-top: 55px;margin-left: 25px;}
//                             30%{margin-top: 10px;margin-left: 25px;}
//                             35%{margin-top: 45px;margin-left: 45px;}
//                             40%{margin-top: 60px;margin-left: 30px;}
//                             45%{margin-top: 30px;margin-left: 0px;}
//                             50%{margin-top: 10px;margin-left: 25px;}
//                             55%{margin-top: 40px;margin-left: 35px;}
//                             60%{margin-top: 55px;margin-left: 25px;}
//                             65%{margin-top: 60px;margin-left: 33px;}
//                             70%{margin-top: 40px;margin-left: 40px;}
//                             75%{margin-top: 15px;margin-left: 20px;}
//                             80%{margin-top: 30px;margin-left: 15px;}
//                             85%{margin-top: 60px;margin-left: 30px;}
//                             90%{margin-top: 0px;margin-left: 30px;}
//                             95%{margin-top: 30px;margin-left: 0px;}
//                             100%{margin-top: 61px;margin-left: 35px;background-position: 100%;}

//                         }
//                         #ballsss9 {
//                             animation: spinStats9 5s linear infinite alternate;
//                             -webkit-animation: spinStats9 5s linear infinite alternate;
//                         }
//                         `;
//                 ball9.appendChild(keyFramesw);
//                 //=========================blue balls0====================================
//                 document.getElementById("ballsss0").style.animationName = "spinStats0";
//                 var ball0 = document.querySelector('#ballsss0');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats0 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 50px;margin-left: 15px;}
//                             10%{margin-top: 45px;margin-left: 20px;}
//                             15%{margin-top: 20px;margin-left: 15px;}
//                             20%{margin-top: 0px;margin-left: 30px;}
//                             25%{margin-top: 20px;margin-left: 38px;}
//                             30%{margin-top: 35px;margin-left: 40px;}
//                             35%{margin-top: 45px;margin-left: 45px;}
//                             40%{margin-top: 58px;margin-left: 50px;}
//                             45%{margin-top: 30px;margin-left: 0px;}
//                             50%{margin-top: 0px;margin-left: 30px;}
//                             55%{margin-top: 57px;margin-left: 28px;}
//                             60%{margin-top: 15px;margin-left: 35px;}
//                             65%{margin-top: 40px;margin-left: 20px;}
//                             70%{margin-top: 15px;margin-left: 35px;}
//                             75%{margin-top: 60px;margin-left: 30px;}
//                             80%{margin-top: 50px;margin-left: 15px;}
//                             85%{margin-top: 10px;margin-left: 40px;}
//                             90%{margin-top: 40px;margin-left: 23px;}
//                             95%{margin-top: 20px;margin-left: 30px;}
//                             100%{margin-top: 58px;margin-left: 28px;background-position: 100%;}

//                         }
//                         #ballsss0 {
//                             animation: spinStats0 5s linear infinite alternate;
//                             -webkit-animation: spinStats0 5s linear infinite alternate;
//                         }
//                         `;
//                 ball0.appendChild(keyFramesw);
//                 psound=parseInt(document.getElementById("pSound").innerHTML);
//                 if(psound==2){
//                     puaseplay();
//                 }else{
//                     play();
//                 }
//             }
//             if (cnt == 109) {
//                 var result8 = Math.floor(Math.random() * 10);
//                 document.getElementById("boxball3").innerHTML = result8;
//                 document.getElementById("boxBall3").style.animation = "";
//                 document.getElementById("ballsss0").style.animationName = "anib0";
//                 document.getElementById("ballsss9").style.animationName = "anib9";
//                 document.getElementById("ballsss8").style.animationName = "anib8";
//                 document.getElementById("ballsss7").style.animationName = "anib7";
//                 document.getElementById("ballsss6").style.animationName = "anib6";
//                 document.getElementById("ballsss5").style.animationName = "anib5";
//                 document.getElementById("ballsss4").style.animationName = "anib4";
//                 document.getElementById("ballsss3").style.animationName = "anib3";
//                 document.getElementById("ballsss2").style.animationName = "anib2";
//                 document.getElementById("ballsss1").style.animationName = "anib1";
//                 document.getElementById("imgspin3").style.animation = "none";
//                 var runball = document.querySelector('#boxBall3');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes run7 {
//                             from {
//                                 height: 60px;
//                                 width: 60px;
//                                 margin-top: 0px;
//                                 margin-left: 80px;
//                                 opacity: 1;
//                             }
//                             to {
//                                 margin-top: 80px;
//                                 margin-left: -60px;
//                                 height: 40px;
//                                 width: 40px;
//                                 z-index: 1;
//                                 opacity: 0;
//                             }
//                         }
//                         #boxBall3 {
//                             animation: run7 1s linear infinite;
//                             -webkit-animation: run7 1s linear infinite;
//                         }
//                         `;
//                 runball.appendChild(keyFramesw);
//                 psound=parseInt(document.getElementById("pSound").innerHTML);
//                 if(psound==2){
//                    puase1();
//                 }else{
//                      play1();
//                 }
//             }
//             /*9*/
//             if (cnt == 111) {
//                 document.getElementById("boxBall2").style.animation = "none";
//                 var result7 = document.getElementById("boxball2").innerHTML;
//                 document.getElementById("nums7").innerHTML = result7;
//                 document.getElementById("imgspin4").style.animation = "";
//                 var spinball = document.querySelector('#imgspin4');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spin2 {
//                             from {
//                                 transform: rotate(0deg);
//                                 -webkit-transform: rotate(0deg);
//                             }
//                             to {
//                                 transform: rotate(360deg);
//                                 -webkit-transform: rotate(360deg);
//                             }
//                         }
//                         #imgspin4 {
//                             animation: spin2 0.8s linear infinite;
//                             -webkit-animation: spin2 0.8s linear infinite;
//                         }
//                         `;
//                 spinball.appendChild(keyFramesw);
//                 // =========================blue ball1====================================
//                 document.getElementById("ballssss1").style.animationName = "spinStat1";
//                 var balls1 = document.querySelector('#ballssss1');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat1 {
//                             0%{margin-top: 60px;margin-left: 50px;}
//                             5%{margin-top: 30px;margin-left: 0px;}
//                             10%{margin-top: 50px;margin-left: 20px;}
//                             15%{margin-top: 0px;margin-left: 30px;}
//                             20%{margin-top: 60px;margin-left: 40px;}
//                             25%{margin-top: 50px;margin-left: 40px;}
//                             30%{margin-top: 10px;margin-left: 20px;}
//                             35%{margin-top: 0px;margin-left: 20px;}
//                             40%{margin-top: 30px;margin-left: 60px;}
//                             45%{margin-top: 10px;margin-left: 40px;}
//                             50%{margin-top: 63px;margin-left: 30px;}
//                             55{margin-top: 10px;margin-left: 35px;}
//                             60%{margin-top: 33px;margin-left: 0px;}
//                             65%{margin-top: 10px;margin-left: 30px;}
//                             70%{margin-top: 0px;margin-left: 25px;}
//                             75%{margin-top: 20px;margin-left: 20px;}
//                             80%{margin-top: 20px;margin-left: 40px;}
//                             85%{margin-top:20px;margin-left: 12px;}
//                             90%{margin-top: 50px;margin-left: 20px;}
//                             95%{margin-top: 0px;margin-left: 35px;}
//                             100%{margin-top: 27px;margin-left: 33px;background-position: 100%;}
//                         }
//                         #ballssss1 {
//                             animation: spinStat1 5s linear infinite alternate;
//                             -webkit-animation: spinstat1 5s linear infinite alternate;
//                         }
//                         `;
//                 balls1.appendChild(keyFramesw);
//                 // =========================blue balls2====================================
//                 document.getElementById("ballssss2").style.animationName = "spinStats2";
//                 var ball2 = document.querySelector('#ballssss2');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats2 {
//                             0%{margin-top: 60px;margin-left: 31px;}
//                                 5%{margin-top: 8px;margin-left: 30px;}
//                                 10%{margin-top: 30px;margin-left: 50px;}
//                                 15%{margin-top: 20px;margin-left: 10px;}
//                                 20%{margin-top: 50px;margin-left: 30px;}
//                                 25%{margin-top: 0px;margin-left: 30px;}
//                                 30%{margin-top: 60px;margin-left: 30px;}
//                                 35%{margin-top: 0px;margin-left: 30px;}
//                                 40%{margin-top: 30px;margin-left: 10px;}
//                                 45%{margin-top: 30px;margin-left: 60px;}
//                                 50%{margin-top: 63px;margin-left: 30px;}
//                                 55%{margin-top: 10px;margin-left: 45px;}
//                                 60%{margin-top: 55px;margin-left: 10px;}
//                                 65%{margin-top: 20px;margin-left: 35px;}
//                                 70%{margin-top: 45px;margin-left: 60px;}
//                                 75%{margin-top: 10px;margin-left: 49px;}
//                                 80%{margin-top: 48px;margin-left: 50px;}
//                                 85%{margin-top: 18px;margin-left: 30px;}
//                                 90%{margin-top: 20px;margin-left: 10px;}
//                                 95%{margin-top: 0px;margin-left: 30px;}
//                                 100%{margin-top: 63px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballssss2 {
//                             animation: spinStats2 5s linear infinite alternate;
//                             -webkit-animation: spinStats2 5s linear infinite alternate;
//                         }
//                         `;
//                 ball2.appendChild(keyFramesw);
//                 // =========================blue balls3====================================
//                 document.getElementById("ballssss3").style.animationName = "spinStats3";
//                 var ball3 = document.querySelector('#ballssss3');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats3 {
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 30px;margin-left: 0px;}
//                             10%{margin-top: 0px;margin-left: 30px;}
//                             15%{margin-top: 30px;margin-left: 60px;}
//                             20%{margin-top: 60px;margin-left: 30px;}
//                             25%{margin-top: 0px;margin-left: 27px;}
//                             30%{margin-top: 20px;margin-left: 50px;}
//                             35%{margin-top: 60px;margin-left: 30px;}
//                             40%{margin-top: 30px;margin-left: 15px;}
//                             45%{margin-top: 45px;margin-left: 45px;}
//                             50%{margin-top: 10px;margin-left: 50px;}
//                             55%{margin-top: 55px;margin-left: 30px;}
//                             60%{margin-top: 30px;margin-left: 20px;}
//                             65%{margin-top: 60px;margin-left: 30px;}
//                             70%{margin-top: 40px;margin-left: 15px;}
//                             75%{margin-top: 15px;margin-left: 30px;}
//                             80%{margin-top: 18px;margin-left: 20px;}
//                             85%{margin-top: 20px;margin-left: 60px;}
//                             90%{margin-top: 60px;margin-left: 30px;}
//                             95%{margin-top: 10px;margin-left: 35px;}
//                             100%{margin-top: 63px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballssss3 {
//                             animation: spinStats3 5s linear infinite alternate;
//                             -webkit-animation: spinStats3 5s linear infinite alternate;
//                         }
//                         `;
//                 ball3.appendChild(keyFramesw);
//                 // =========================blue balls4====================================
//                 document.getElementById("ballssss4").style.animationName = "spinStats4";
//                 var ball4 = document.querySelector('#ballssss4');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats4 {
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 15px;margin-left: 30px;}
//                             10%{margin-top: 40px;margin-left: 50px;}
//                             15%{margin-top: 60px;margin-left: 30px;}
//                             20%{margin-top: 50px;margin-left: 50px;}
//                             25%{margin-top: 6px;margin-left: 30px;}
//                             30%{margin-top: 45px;margin-left: 20px;}
//                             35%{margin-top: 15px;margin-left: 20px;}
//                             40%{margin-top: 0px;margin-left: 30px;}
//                             45%{margin-top: 20px;margin-left: 50px;}
//                             50%{margin-top: 35px;margin-left: 60px;}
//                             55%{margin-top: 55px;margin-left: 45px;}
//                             60%{margin-top: 60px;margin-left: 30px;}
//                             65%{margin-top: 0px;margin-left: 30px;}
//                             70%{margin-top: 60px;margin-left: 30px;}
//                             75%{margin-top: 15px;margin-left: 25px;}
//                             80%{margin-top: 55px;margin-left: 20px;}
//                             85%{margin-top: 0px;margin-left: 30px;}
//                             90%{margin-top: 55px;margin-left: 27px;}
//                             95%{margin-top: 20px;margin-left: 58px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballssss4 {
//                             animation: spinStats4 5s linear infinite alternate;
//                             -webkit-animation: spinStats4 5s linear infinite alternate;
//                         }
//                         `;
//                 ball4.appendChild(keyFramesw);
//                 // =========================blue balls5====================================
//                 document.getElementById("ballssss5").style.animationName = "spinStats5";
//                 var ball5 = document.querySelector('#ballssss5');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats5 { 
//                             0%{margin-top: 60px;margin-left: 35px;}
//                             5%{margin-top: 40px;margin-left: 50px;}
//                             10%{margin-top: 60px;margin-left: 30px;}
//                             15%{margin-top: 30px;margin-left: 0px;}
//                             20%{margin-top: 20px;margin-left: 20px;}
//                             25%{margin-top: 0px;margin-left: 30px;}
//                             30%{margin-top: 60px;margin-left: 30px;}
//                             35%{margin-top: 40px;margin-left: 25px;}
//                             40%{margin-top: 60px;margin-left: 30px;}
//                             45%{margin-top: 10px;margin-left: 30px;}
//                             50%{margin-top: 30px;margin-left: 60px;}
//                             55%{margin-top: 60px;margin-left: 35px;}
//                             60%{margin-top: 0px;margin-left: 30px;}
//                             65%{margin-top: 15px;margin-left: 25px;}
//                             70%{margin-top: 20px;margin-left: 50px;}
//                             75%{margin-top: 35px;margin-left: 0px;}
//                             80%{margin-top: 12px;margin-left: 20px;}
//                             85%{margin-top: 0px;margin-left: 35px;}
//                             90%{margin-top: 60px;margin-left: 30px;}
//                             95%{margin-top: 30px;margin-left: 60px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}

//                         }
//                         #ballssss5 {
//                             animation: spinStats5 5s linear infinite alternate;
//                             -webkit-animation: spinStats5 5s linear infinite alternate;
//                         }
//                         `;
//                 ball5.appendChild(keyFramesw);
//                 //=========================blue balls6====================================
//                 document.getElementById("ballssss6").style.animationName = "spinStats6";
//                 var ball6 = document.querySelector('#ballssss6');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats6 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 0px;margin-left: 30px;}
//                             10%{margin-top: 10px;margin-left: 45px;}
//                             15%{margin-top: 60px;margin-left: 28px;}
//                             20%{margin-top: 10px;margin-left: 25px;}
//                             25%{margin-top: 30px;margin-left: 0px;}
//                             30%{margin-top: 0px;margin-left: 30px;}
//                             35%{margin-top: 44px;margin-left: 44px;}
//                             40%{margin-top: 60px;margin-left: 30x;}
//                             45%{margin-top: 40px;margin-left: 30px;}
//                             50%{margin-top: 20px;margin-left: 45px;}
//                             55%{margin-top: 40px;margin-left: 40px;}
//                             60%{margin-top: 55px;margin-left: 35px;}
//                             65%{margin-top: 50px;margin-left: 30px;}
//                             70%{margin-top: 0px;margin-left: 30px;}
//                             75%{margin-top: 60px;margin-left: 10px;}
//                             80%{margin-top: 30px;margin-left: 60px;}
//                             85%{margin-top: 25px;margin-left: 55px;}
//                             90%{margin-top: 5px;margin-left: 40px;}
//                             95%{margin-top: 20px;margin-left: 25x;}
//                             100%{margin-top: 60px;margin-left: 31px;background-position: 100%;}

//                         }
//                         #ballssss6 {
//                             animation: spinStats6 5s linear infinite alternate;
//                             -webkit-animation: spinStats6 5s linear infinite alternate;
//                         }
//                         `;
//                 ball6.appendChild(keyFramesw);
//                 //=========================blue balls7====================================
//                 document.getElementById("ballssss7").style.animationName = "spinStats7";
//                 var ball7 = document.querySelector('#ballssss7');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats7 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 40px;margin-left: 20px;}
//                             10%{margin-top: 30px;margin-left: 0px;}
//                             15%{margin-top: 25px;margin-left: 20px;}
//                             20%{margin-top: 0px;margin-left: 30px;}
//                             25%{margin-top: 25px;margin-left: 40px;}
//                             30%{margin-top: 50px;margin-left: 40px;}
//                             35%{margin-top: 60px;margin-left: 30px;}
//                             40%{margin-top: 0px;margin-left: 30px;}
//                             45%{margin-top: 55px;margin-left: 10px;}
//                             50%{margin-top: 15px;margin-left: 20px;}
//                             55%{margin-top: 25px;margin-left: 45px;}
//                             60%{margin-top: 50px;margin-left: 15px;}
//                             65%{margin-top: 20px;margin-left: 50px;}
//                             70%{margin-top: 0px;margin-left: 30px;}
//                             75%{margin-top: 15px;margin-left: 25px;}
//                             80%{margin-top: 50px;margin-left: 35px;}
//                             85%{margin-top: 10px;margin-left: 35px;}
//                             90%{margin-top: 45px;margin-left: 15px;}
//                             95%{margin-top: 60px;margin-left: 30px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballssss7 {
//                             animation: spinStats7 5s linear infinite alternate;
//                             -webkit-animation: spinStats7 5s linear infinite alternate;
//                         }
//                         `;
//                 ball7.appendChild(keyFramesw);
//                 //=========================blue balls8====================================
//                 document.getElementById("ballssss8").style.animationName = "spinStats8";
//                 var ball8 = document.querySelector('#ballssss8');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats8 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 15px;margin-left: 50px;}
//                             10%{margin-top: 55px;margin-left: 30px;}
//                             15%{margin-top: 40px;margin-left: 23px;}
//                             20%{margin-top: 25px;margin-left: 35px;}
//                             25%{margin-top: 40px;margin-left: 40px;}
//                             30%{margin-top: 60px;margin-left: 30px;}
//                             35%{margin-top: 45px;margin-left: 10px;}
//                             40%{margin-top: 55px;margin-left: 25px;}
//                             45%{margin-top: 15px;margin-left: 27px;}
//                             50%{margin-top: 30px;margin-left: 60px;}
//                             55%{margin-top: 55px;margin-left: 55px;}
//                             60%{margin-top: 60px;margin-left: 30px;}
//                             65%{margin-top: 40px;margin-left: 25px;}
//                             70%{margin-top: 10px;margin-left: 12px;}
//                             75%{margin-top: 45px;margin-left: 15px;}
//                             80%{margin-top: 40px;margin-left: 55px;}
//                             85%{margin-top: 0px;margin-left: 30px;}
//                             90%{margin-top: 55px;margin-left: 25px;}
//                             95%{margin-top: 30px;margin-left: 30px;}
//                             100%{margin-top: 58px;margin-left: 28px;background-position: 100%;}

//                         }
//                         #ballssss8 {
//                             animation: spinStats8 5s linear infinite alternate;
//                             -webkit-animation: spinStats8 5s linear infinite alternate;
//                         }
//                         `;
//                 ball8.appendChild(keyFramesw);
//                 //=========================blue balls9====================================
//                 document.getElementById("ballssss9").style.animationName = "spinStats9";
//                 var ball9 = document.querySelector('#ballssss9');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats9 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 45px;margin-left: 15px;}
//                             10%{margin-top: 55px;margin-left: 15px;}
//                             15%{margin-top: 60px;margin-left: 30px;}
//                             20%{margin-top: 45px;margin-left: 40px;}
//                             25%{margin-top: 55px;margin-left: 25px;}
//                             30%{margin-top: 10px;margin-left: 25px;}
//                             35%{margin-top: 45px;margin-left: 45px;}
//                             40%{margin-top: 60px;margin-left: 30px;}
//                             45%{margin-top: 30px;margin-left: 0px;}
//                             50%{margin-top: 10px;margin-left: 25px;}
//                             55%{margin-top: 40px;margin-left: 35px;}
//                             60%{margin-top: 55px;margin-left: 25px;}
//                             65%{margin-top: 60px;margin-left: 33px;}
//                             70%{margin-top: 40px;margin-left: 40px;}
//                             75%{margin-top: 15px;margin-left: 20px;}
//                             80%{margin-top: 30px;margin-left: 15px;}
//                             85%{margin-top: 60px;margin-left: 30px;}
//                             90%{margin-top: 0px;margin-left: 30px;}
//                             95%{margin-top: 30px;margin-left: 0px;}
//                             100%{margin-top: 61px;margin-left: 35px;background-position: 100%;}

//                         }
//                         #ballssss9 {
//                             animation: spinStats9 5s linear infinite alternate;
//                             -webkit-animation: spinStats9 5s linear infinite alternate;
//                         }
//                         `;
//                 ball9.appendChild(keyFramesw);
//                 //=========================blue balls0====================================
//                 document.getElementById("ballssss0").style.animationName = "spinStats0";
//                 var ball0 = document.querySelector('#ballssss0');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats0 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 50px;margin-left: 15px;}
//                             10%{margin-top: 45px;margin-left: 20px;}
//                             15%{margin-top: 20px;margin-left: 15px;}
//                             20%{margin-top: 0px;margin-left: 30px;}
//                             25%{margin-top: 20px;margin-left: 38px;}
//                             30%{margin-top: 35px;margin-left: 40px;}
//                             35%{margin-top: 45px;margin-left: 45px;}
//                             40%{margin-top: 58px;margin-left: 50px;}
//                             45%{margin-top: 30px;margin-left: 0px;}
//                             50%{margin-top: 0px;margin-left: 30px;}
//                             55%{margin-top: 57px;margin-left: 28px;}
//                             60%{margin-top: 15px;margin-left: 35px;}
//                             65%{margin-top: 40px;margin-left: 20px;}
//                             70%{margin-top: 15px;margin-left: 35px;}
//                             75%{margin-top: 60px;margin-left: 30px;}
//                             80%{margin-top: 50px;margin-left: 15px;}
//                             85%{margin-top: 10px;margin-left: 40px;}
//                             90%{margin-top: 40px;margin-left: 23px;}
//                             95%{margin-top: 20px;margin-left: 30px;}
//                             100%{margin-top: 58px;margin-left: 28px;background-position: 100%;}

//                         }
//                         #ballssss0 {
//                             animation: spinStats0 5s linear infinite alternate;
//                             -webkit-animation: spinStats0 5s linear infinite alternate;
//                         }
//                         `;
//                 ball0.appendChild(keyFramesw);
//                 psound=parseInt(document.getElementById("pSound").innerHTML);
//                 if(psound==2){
//                     puaseplay();
//                 }else{
//                     play();
//                 }
//             }
//             if (cnt == 106) {
//                 var result9 = Math.floor(Math.random() * 10);
//                 document.getElementById("boxball4").innerHTML = result9;
//                 document.getElementById("boxBall4").style.animation = "";
//                 document.getElementById("ballssss0").style.animationName = "anib0";
//                 document.getElementById("ballssss9").style.animationName = "anib9";
//                 document.getElementById("ballssss8").style.animationName = "anib8";
//                 document.getElementById("ballssss7").style.animationName = "anib7";
//                 document.getElementById("ballssss6").style.animationName = "anib6";
//                 document.getElementById("ballssss5").style.animationName = "anib5";
//                 document.getElementById("ballssss4").style.animationName = "anib4";
//                 document.getElementById("ballssss3").style.animationName = "anib3";
//                 document.getElementById("ballssss2").style.animationName = "anib2";
//                 document.getElementById("ballssss1").style.animationName = "anib1";
//                 document.getElementById("imgspin4").style.animation = "none";
//                 var runball = document.querySelector('#boxBall4');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes run8 {
//                             from {
//                                 height: 60px;
//                                 width: 60px;
//                                 margin-top: 0px;
//                                 margin-left: 80px;
//                                 opacity: 1;
//                             }
//                             to {
//                                 margin-top: 80px;
//                                 margin-left: -200px;
//                                 height: 40px;
//                                 width: 40px;
//                                 z-index: 1;
//                                 opacity: 0;

//                             }
//                         }
//                         #boxBall4 {
//                             animation: run8 1s linear infinite;
//                             -webkit-animation: run8 1s linear infinite;
//                         }
//                         `;
//                 runball.appendChild(keyFramesw);
//                 psound=parseInt(document.getElementById("pSound").innerHTML);
//                 if(psound==2){
//                      puase1();
//                 }else{
//                    play1();
//                 }
//             }
//             /*10*/
//             if (cnt == 108) {
//                 document.getElementById("boxBall3").style.animation = "none";
//                 var result8 = document.getElementById("boxball3").innerHTML;
//                 document.getElementById("nums8").innerHTML = result8;
//                 document.getElementById("imgspin5").style.animation = "";
//                 var spinball = document.querySelector('#imgspin5');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spin2 {
//                             from {
//                                 transform: rotate(0deg);
//                                 -webkit-transform: rotate(0deg);
//                             }
//                             to {
//                                 transform: rotate(360deg);
//                                 -webkit-transform: rotate(360deg);
//                             }
//                         }
//                         #imgspin5 {
//                             animation: spin2 0.8s linear infinite;
//                             -webkit-animation: spin2 0.8s linear infinite;
//                         }
//                         `;
//                 spinball.appendChild(keyFramesw);
//                 // =========================blue ball1====================================
//                 document.getElementById("ballsssss1").style.animationName = "spinStat1";
//                 var balls1 = document.querySelector('#ballsssss1');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat1 {
//                             0%{margin-top: 60px;margin-left: 50px;}
//                             5%{margin-top: 30px;margin-left: 0px;}
//                             10%{margin-top: 50px;margin-left: 20px;}
//                             15%{margin-top: 0px;margin-left: 30px;}
//                             20%{margin-top: 60px;margin-left: 40px;}
//                             25%{margin-top: 50px;margin-left: 40px;}
//                             30%{margin-top: 10px;margin-left: 20px;}
//                             35%{margin-top: 0px;margin-left: 20px;}
//                             40%{margin-top: 30px;margin-left: 60px;}
//                             45%{margin-top: 10px;margin-left: 40px;}
//                             50%{margin-top: 63px;margin-left: 30px;}
//                             55{margin-top: 10px;margin-left: 35px;}
//                             60%{margin-top: 33px;margin-left: 0px;}
//                             65%{margin-top: 10px;margin-left: 30px;}
//                             70%{margin-top: 0px;margin-left: 25px;}
//                             75%{margin-top: 20px;margin-left: 20px;}
//                             80%{margin-top: 20px;margin-left: 40px;}
//                             85%{margin-top:20px;margin-left: 12px;}
//                             90%{margin-top: 50px;margin-left: 20px;}
//                             95%{margin-top: 0px;margin-left: 35px;}
//                             100%{margin-top: 27px;margin-left: 33px;background-position: 100%;}
//                         }
//                         #ballsssss1 {
//                             animation: spinStat1 5s linear infinite alternate;
//                             -webkit-animation: spinstat1 5s linear infinite alternate;
//                         }
//                         `;
//                 balls1.appendChild(keyFramesw);
//                 // =========================blue balls2====================================
//                 document.getElementById("ballsssss2").style.animationName = "spinStats2";
//                 var ball2 = document.querySelector('#ballsssss2');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats2 {
//                             0%{margin-top: 60px;margin-left: 31px;}
//                                 5%{margin-top: 8px;margin-left: 30px;}
//                                 10%{margin-top: 30px;margin-left: 50px;}
//                                 15%{margin-top: 20px;margin-left: 10px;}
//                                 20%{margin-top: 50px;margin-left: 30px;}
//                                 25%{margin-top: 0px;margin-left: 30px;}
//                                 30%{margin-top: 60px;margin-left: 30px;}
//                                 35%{margin-top: 0px;margin-left: 30px;}
//                                 40%{margin-top: 30px;margin-left: 10px;}
//                                 45%{margin-top: 30px;margin-left: 60px;}
//                                 50%{margin-top: 63px;margin-left: 30px;}
//                                 55%{margin-top: 10px;margin-left: 45px;}
//                                 60%{margin-top: 55px;margin-left: 10px;}
//                                 65%{margin-top: 20px;margin-left: 35px;}
//                                 70%{margin-top: 45px;margin-left: 60px;}
//                                 75%{margin-top: 10px;margin-left: 49px;}
//                                 80%{margin-top: 48px;margin-left: 50px;}
//                                 85%{margin-top: 18px;margin-left: 30px;}
//                                 90%{margin-top: 20px;margin-left: 10px;}
//                                 95%{margin-top: 0px;margin-left: 30px;}
//                                 100%{margin-top: 63px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballsssss2 {
//                             animation: spinStats2 5s linear infinite alternate;
//                             -webkit-animation: spinStats2 5s linear infinite alternate;
//                         }
//                         `;
//                 ball2.appendChild(keyFramesw);
//                 // =========================blue balls3====================================
//                 document.getElementById("ballsssss3").style.animationName = "spinStats3";
//                 var ball3 = document.querySelector('#ballsssss3');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats3 {
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 30px;margin-left: 0px;}
//                             10%{margin-top: 0px;margin-left: 30px;}
//                             15%{margin-top: 30px;margin-left: 60px;}
//                             20%{margin-top: 60px;margin-left: 30px;}
//                             25%{margin-top: 0px;margin-left: 27px;}
//                             30%{margin-top: 20px;margin-left: 50px;}
//                             35%{margin-top: 60px;margin-left: 30px;}
//                             40%{margin-top: 30px;margin-left: 15px;}
//                             45%{margin-top: 45px;margin-left: 45px;}
//                             50%{margin-top: 10px;margin-left: 50px;}
//                             55%{margin-top: 55px;margin-left: 30px;}
//                             60%{margin-top: 30px;margin-left: 20px;}
//                             65%{margin-top: 60px;margin-left: 30px;}
//                             70%{margin-top: 40px;margin-left: 15px;}
//                             75%{margin-top: 15px;margin-left: 30px;}
//                             80%{margin-top: 18px;margin-left: 20px;}
//                             85%{margin-top: 20px;margin-left: 60px;}
//                             90%{margin-top: 60px;margin-left: 30px;}
//                             95%{margin-top: 10px;margin-left: 35px;}
//                             100%{margin-top: 63px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballsssss3 {
//                             animation: spinStats3 5s linear infinite alternate;
//                             -webkit-animation: spinStats3 5s linear infinite alternate;
//                         }
//                         `;
//                 ball3.appendChild(keyFramesw);
//                 // =========================blue balls4====================================
//                 document.getElementById("ballsssss4").style.animationName = "spinStats4";
//                 var ball4 = document.querySelector('#ballsssss4');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats4 {
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 15px;margin-left: 30px;}
//                             10%{margin-top: 40px;margin-left: 50px;}
//                             15%{margin-top: 60px;margin-left: 30px;}
//                             20%{margin-top: 50px;margin-left: 50px;}
//                             25%{margin-top: 6px;margin-left: 30px;}
//                             30%{margin-top: 45px;margin-left: 20px;}
//                             35%{margin-top: 15px;margin-left: 20px;}
//                             40%{margin-top: 0px;margin-left: 30px;}
//                             45%{margin-top: 20px;margin-left: 50px;}
//                             50%{margin-top: 35px;margin-left: 60px;}
//                             55%{margin-top: 55px;margin-left: 45px;}
//                             60%{margin-top: 60px;margin-left: 30px;}
//                             65%{margin-top: 0px;margin-left: 30px;}
//                             70%{margin-top: 60px;margin-left: 30px;}
//                             75%{margin-top: 15px;margin-left: 25px;}
//                             80%{margin-top: 55px;margin-left: 20px;}
//                             85%{margin-top: 0px;margin-left: 30px;}
//                             90%{margin-top: 55px;margin-left: 27px;}
//                             95%{margin-top: 20px;margin-left: 58px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballsssss4 {
//                             animation: spinStats4 5s linear infinite alternate;
//                             -webkit-animation: spinStats4 5s linear infinite alternate;
//                         }
//                         `;
//                 ball4.appendChild(keyFramesw);
//                 // =========================blue balls5====================================
//                 document.getElementById("ballsssss5").style.animationName = "spinStats5";
//                 var ball5 = document.querySelector('#ballsssss5');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats5 { 
//                             0%{margin-top: 60px;margin-left: 35px;}
//                             5%{margin-top: 40px;margin-left: 50px;}
//                             10%{margin-top: 60px;margin-left: 30px;}
//                             15%{margin-top: 30px;margin-left: 0px;}
//                             20%{margin-top: 20px;margin-left: 20px;}
//                             25%{margin-top: 0px;margin-left: 30px;}
//                             30%{margin-top: 60px;margin-left: 30px;}
//                             35%{margin-top: 40px;margin-left: 25px;}
//                             40%{margin-top: 60px;margin-left: 30px;}
//                             45%{margin-top: 10px;margin-left: 30px;}
//                             50%{margin-top: 30px;margin-left: 60px;}
//                             55%{margin-top: 60px;margin-left: 35px;}
//                             60%{margin-top: 0px;margin-left: 30px;}
//                             65%{margin-top: 15px;margin-left: 25px;}
//                             70%{margin-top: 20px;margin-left: 50px;}
//                             75%{margin-top: 35px;margin-left: 0px;}
//                             80%{margin-top: 12px;margin-left: 20px;}
//                             85%{margin-top: 0px;margin-left: 35px;}
//                             90%{margin-top: 60px;margin-left: 30px;}
//                             95%{margin-top: 30px;margin-left: 60px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}

//                         }
//                         #ballsssss5 {
//                             animation: spinStats5 5s linear infinite alternate;
//                             -webkit-animation: spinStats5 5s linear infinite alternate;
//                         }
//                         `;
//                 ball5.appendChild(keyFramesw);
//                 //=========================blue balls6====================================
//                 document.getElementById("ballsssss6").style.animationName = "spinStats6";
//                 var ball6 = document.querySelector('#ballsssss6');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats6 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 0px;margin-left: 30px;}
//                             10%{margin-top: 10px;margin-left: 45px;}
//                             15%{margin-top: 60px;margin-left: 28px;}
//                             20%{margin-top: 10px;margin-left: 25px;}
//                             25%{margin-top: 30px;margin-left: 0px;}
//                             30%{margin-top: 0px;margin-left: 30px;}
//                             35%{margin-top: 44px;margin-left: 44px;}
//                             40%{margin-top: 60px;margin-left: 30x;}
//                             45%{margin-top: 40px;margin-left: 30px;}
//                             50%{margin-top: 20px;margin-left: 45px;}
//                             55%{margin-top: 40px;margin-left: 40px;}
//                             60%{margin-top: 55px;margin-left: 35px;}
//                             65%{margin-top: 50px;margin-left: 30px;}
//                             70%{margin-top: 0px;margin-left: 30px;}
//                             75%{margin-top: 60px;margin-left: 10px;}
//                             80%{margin-top: 30px;margin-left: 60px;}
//                             85%{margin-top: 25px;margin-left: 55px;}
//                             90%{margin-top: 5px;margin-left: 40px;}
//                             95%{margin-top: 20px;margin-left: 25x;}
//                             100%{margin-top: 60px;margin-left: 31px;background-position: 100%;}

//                         }
//                         #ballsssss6 {
//                             animation: spinStats6 5s linear infinite alternate;
//                             -webkit-animation: spinStats6 5s linear infinite alternate;
//                         }
//                         `;
//                 ball6.appendChild(keyFramesw);
//                 //=========================blue balls7====================================
//                 document.getElementById("ballsssss7").style.animationName = "spinStats7";
//                 var ball7 = document.querySelector('#ballsssss7');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats7 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 40px;margin-left: 20px;}
//                             10%{margin-top: 30px;margin-left: 0px;}
//                             15%{margin-top: 25px;margin-left: 20px;}
//                             20%{margin-top: 0px;margin-left: 30px;}
//                             25%{margin-top: 25px;margin-left: 40px;}
//                             30%{margin-top: 50px;margin-left: 40px;}
//                             35%{margin-top: 60px;margin-left: 30px;}
//                             40%{margin-top: 0px;margin-left: 30px;}
//                             45%{margin-top: 55px;margin-left: 10px;}
//                             50%{margin-top: 15px;margin-left: 20px;}
//                             55%{margin-top: 25px;margin-left: 45px;}
//                             60%{margin-top: 50px;margin-left: 15px;}
//                             65%{margin-top: 20px;margin-left: 50px;}
//                             70%{margin-top: 0px;margin-left: 30px;}
//                             75%{margin-top: 15px;margin-left: 25px;}
//                             80%{margin-top: 50px;margin-left: 35px;}
//                             85%{margin-top: 10px;margin-left: 35px;}
//                             90%{margin-top: 45px;margin-left: 15px;}
//                             95%{margin-top: 60px;margin-left: 30px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}

//                         }
//                         #ballsssss7 {
//                             animation: spinStats7 5s linear infinite alternate;
//                             -webkit-animation: spinStats7 5s linear infinite alternate;
//                         }
//                         `;
//                 ball7.appendChild(keyFramesw);
//                 //=========================blue balls8====================================
//                 document.getElementById("ballsssss8").style.animationName = "spinStats8";
//                 var ball8 = document.querySelector('#ballsssss8');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats8 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 15px;margin-left: 50px;}
//                             10%{margin-top: 55px;margin-left: 30px;}
//                             15%{margin-top: 40px;margin-left: 23px;}
//                             20%{margin-top: 25px;margin-left: 35px;}
//                             25%{margin-top: 40px;margin-left: 40px;}
//                             30%{margin-top: 60px;margin-left: 30px;}
//                             35%{margin-top: 45px;margin-left: 10px;}
//                             40%{margin-top: 55px;margin-left: 25px;}
//                             45%{margin-top: 15px;margin-left: 27px;}
//                             50%{margin-top: 30px;margin-left: 60px;}
//                             55%{margin-top: 55px;margin-left: 55px;}
//                             60%{margin-top: 60px;margin-left: 30px;}
//                             65%{margin-top: 40px;margin-left: 25px;}
//                             70%{margin-top: 10px;margin-left: 12px;}
//                             75%{margin-top: 45px;margin-left: 15px;}
//                             80%{margin-top: 40px;margin-left: 55px;}
//                             85%{margin-top: 0px;margin-left: 30px;}
//                             90%{margin-top: 55px;margin-left: 25px;}
//                             95%{margin-top: 30px;margin-left: 30px;}
//                             100%{margin-top: 58px;margin-left: 28px;background-position: 100%;}

//                         }
//                         #ballsssss8 {
//                             animation: spinStats8 5s linear infinite alternate;
//                             -webkit-animation: spinStats8 5s linear infinite alternate;
//                         }
//                         `;
//                 ball8.appendChild(keyFramesw);
//                 //=========================blue balls9====================================
//                 document.getElementById("ballsssss9").style.animationName = "spinStats9";
//                 var ball9 = document.querySelector('#ballsssss9');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats9 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 45px;margin-left: 15px;}
//                             10%{margin-top: 55px;margin-left: 15px;}
//                             15%{margin-top: 60px;margin-left: 30px;}
//                             20%{margin-top: 45px;margin-left: 40px;}
//                             25%{margin-top: 55px;margin-left: 25px;}
//                             30%{margin-top: 10px;margin-left: 25px;}
//                             35%{margin-top: 45px;margin-left: 45px;}
//                             40%{margin-top: 60px;margin-left: 30px;}
//                             45%{margin-top: 30px;margin-left: 0px;}
//                             50%{margin-top: 10px;margin-left: 25px;}
//                             55%{margin-top: 40px;margin-left: 35px;}
//                             60%{margin-top: 55px;margin-left: 25px;}
//                             65%{margin-top: 60px;margin-left: 33px;}
//                             70%{margin-top: 40px;margin-left: 40px;}
//                             75%{margin-top: 15px;margin-left: 20px;}
//                             80%{margin-top: 30px;margin-left: 15px;}
//                             85%{margin-top: 60px;margin-left: 30px;}
//                             90%{margin-top: 0px;margin-left: 30px;}
//                             95%{margin-top: 30px;margin-left: 0px;}
//                             100%{margin-top: 61px;margin-left: 35px;background-position: 100%;}

//                         }
//                         #ballsssss9 {
//                             animation: spinStats9 5s linear infinite alternate;
//                             -webkit-animation: spinStats9 5s linear infinite alternate;
//                         }
//                         `;
//                 ball9.appendChild(keyFramesw);
//                 //=========================blue balls0====================================
//                 document.getElementById("ballsssss0").style.animationName = "spinStats0";
//                 var ball0 = document.querySelector('#ballsssss0');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats0 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 50px;margin-left: 15px;}
//                             10%{margin-top: 45px;margin-left: 20px;}
//                             15%{margin-top: 20px;margin-left: 15px;}
//                             20%{margin-top: 0px;margin-left: 30px;}
//                             25%{margin-top: 20px;margin-left: 38px;}
//                             30%{margin-top: 35px;margin-left: 40px;}
//                             35%{margin-top: 45px;margin-left: 45px;}
//                             40%{margin-top: 58px;margin-left: 50px;}
//                             45%{margin-top: 30px;margin-left: 0px;}
//                             50%{margin-top: 0px;margin-left: 30px;}
//                             55%{margin-top: 57px;margin-left: 28px;}
//                             60%{margin-top: 15px;margin-left: 35px;}
//                             65%{margin-top: 40px;margin-left: 20px;}
//                             70%{margin-top: 15px;margin-left: 35px;}
//                             75%{margin-top: 60px;margin-left: 30px;}
//                             80%{margin-top: 50px;margin-left: 15px;}
//                             85%{margin-top: 10px;margin-left: 40px;}
//                             90%{margin-top: 40px;margin-left: 23px;}
//                             95%{margin-top: 20px;margin-left: 30px;}
//                             100%{margin-top: 58px;margin-left: 28px;background-position: 100%;}

//                         }
//                         #ballsssss0 {
//                             animation: spinStats0 5s linear infinite alternate;
//                             -webkit-animation: spinStats0 5s linear infinite alternate;
//                         }
//                         `;
//                 ball0.appendChild(keyFramesw);
//                 psound=parseInt(document.getElementById("pSound").innerHTML);
//                 if(psound==2){
//                     puaseplay();
//                 }else{
//                     play();
//                 }
//             }
//             if (cnt == 103) {
//                 var result10 = Math.floor(Math.random() * 10);
//                 document.getElementById("boxball5").innerHTML = result10;
//                 document.getElementById("boxBall5").style.animation = "";
//                 document.getElementById("boxball1").innerHTML = "?";
//                 document.getElementById("boxball2").innerHTML = "?";
//                 document.getElementById("boxball3").innerHTML = "?";
//                 document.getElementById("boxball4").innerHTML = "?";
//                 document.getElementById("ballsssss0").style.animationName = "anib0";
//                 document.getElementById("ballsssss9").style.animationName = "anib9";
//                 document.getElementById("ballsssss8").style.animationName = "anib8";
//                 document.getElementById("ballsssss7").style.animationName = "anib7";
//                 document.getElementById("ballsssss6").style.animationName = "anib6";
//                 document.getElementById("ballsssss5").style.animationName = "anib5";
//                 document.getElementById("ballsssss4").style.animationName = "anib4";
//                 document.getElementById("ballsssss3").style.animationName = "anib3";
//                 document.getElementById("ballsssss2").style.animationName = "anib2";
//                 document.getElementById("ballsssss1").style.animationName = "anib1";
//                 document.getElementById("imgspin5").style.animation = "none";
//                 var runball = document.querySelector('#boxBall5');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes run9 {
//                             from {
//                                 height: 60px;
//                                 width: 60px;
//                                 margin-top: 0px;
//                                 margin-left: 80px;
//                                 opacity: 1;

//                             }
//                             to {
//                                 margin-top: 80px;
//                                 margin-left: -500px;
//                                 height: 40px;
//                                 width: 40px;
//                                 z-index: 1;
//                                 opacity: 0;

//                             }
//                         }
//                         #boxBall5 {
//                             animation: run9 1s linear infinite;
//                             -webkit-animation: run9 1s linear infinite;
//                         }
//                         `;
//                 runball.appendChild(keyFramesw);
//                 psound=parseInt(document.getElementById("pSound").innerHTML);
//                 if(psound==2){
//                       puase1();
//                 }else{
//                   play1();
//                 }
//             }
//             //================sections C=================
//             /*11*/
//             if (cnt == 105) {
//                 document.getElementById("boxBall4").style.animation = "none";
//                 var result9 = document.getElementById("boxball4").innerHTML;
//                 document.getElementById("nums9").innerHTML = result9;
//                 document.getElementById("boxball5").innerHTML = "?";
//                 document.getElementById("imgspin").style.animation = "";
//                 var spinball = document.querySelector('#imgspin');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spin {
//                             from {
//                                 transform: rotate(0deg);
//                                 -webkit-transform: rotate(0deg);
//                             }
//                             to {
//                                 transform: rotate(360deg);
//                                 -webkit-transform: rotate(360deg);
//                             }
//                         }
//                         #imgspin {
//                             animation: spin 0.8s linear infinite;
//                             -webkit-animation: spin 0.8s linear infinite;
//                         }
//                         `;
//                 spinball.appendChild(keyFramesw);
//                 // =========================blue ball1====================================
//                 document.getElementById("balls1").style.animationName = "spinStat1";
//                 var ball1 = document.querySelector('#balls1');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat1 {
//                             0%{margin-top: 60px;margin-left: 50px;}
//                             5%{margin-top: 30px;margin-left: 0px;}
//                             10%{margin-top: 50px;margin-left: 20px;}
//                             15%{margin-top: 0px;margin-left: 30px;}
//                             20%{margin-top: 60px;margin-left: 40px;}
//                             25%{margin-top: 50px;margin-left: 40px;}
//                             30%{margin-top: 10px;margin-left: 20px;}
//                             35%{margin-top: 0px;margin-left: 20px;}
//                             40%{margin-top: 30px;margin-left: 60px;}
//                             45%{margin-top: 10px;margin-left: 40px;}
//                             50%{margin-top: 63px;margin-left: 30px;}
//                             55{margin-top: 10px;margin-left: 35px;}
//                             60%{margin-top: 33px;margin-left: 0px;}
//                             65%{margin-top: 10px;margin-left: 30px;}
//                             70%{margin-top: 0px;margin-left: 25px;}
//                             75%{margin-top: 20px;margin-left: 20px;}
//                             80%{margin-top: 20px;margin-left: 40px;}
//                             85%{margin-top:20px;margin-left: 12px;}
//                             90%{margin-top: 50px;margin-left: 20px;}
//                             95%{margin-top: 0px;margin-left: 35px;}
//                             100%{margin-top: 27px;margin-left: 33px;background-position: 100%;}
//                         }
//                         #balls1 {
//                             animation: spinStat1 5s linear infinite alternate;
//                             -webkit-animation: spinstat1 5s linear infinite alternate;
//                         }
//                         `;
//                 ball1.appendChild(keyFramesw);
//                 // =========================blue ball2====================================
//                 document.getElementById("balls2").style.animationName = "spinStat2";
//                 var ball2 = document.querySelector('#balls2');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat2 {
//                             0%{margin-top: 60px;margin-left: 31px;}
//                                 5%{margin-top: 8px;margin-left: 30px;}
//                                 10%{margin-top: 30px;margin-left: 50px;}
//                                 15%{margin-top: 20px;margin-left: 10px;}
//                                 20%{margin-top: 50px;margin-left: 30px;}
//                                 25%{margin-top: 0px;margin-left: 30px;}
//                                 30%{margin-top: 60px;margin-left: 30px;}
//                                 35%{margin-top: 0px;margin-left: 30px;}
//                                 40%{margin-top: 30px;margin-left: 10px;}
//                                 45%{margin-top: 30px;margin-left: 60px;}
//                                 50%{margin-top: 63px;margin-left: 30px;}
//                                 55%{margin-top: 10px;margin-left: 45px;}
//                                 60%{margin-top: 55px;margin-left: 10px;}
//                                 65%{margin-top: 20px;margin-left: 35px;}
//                                 70%{margin-top: 45px;margin-left: 60px;}
//                                 75%{margin-top: 10px;margin-left: 49px;}
//                                 80%{margin-top: 48px;margin-left: 50px;}
//                                 85%{margin-top: 18px;margin-left: 30px;}
//                                 90%{margin-top: 20px;margin-left: 10px;}
//                                 95%{margin-top: 0px;margin-left: 30px;}
//                                 100%{margin-top: 63px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #balls2 {
//                             animation: spinStat2 5s linear infinite alternate;
//                             -webkit-animation: spinStat2 5s linear infinite alternate;
//                         }
//                         `;
//                 ball2.appendChild(keyFramesw);
//                 // =========================blue ball3====================================
//                 document.getElementById("balls3").style.animationName = "spinStat3";
//                 var ball3 = document.querySelector('#balls3');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat3 {
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 30px;margin-left: 0px;}
//                             10%{margin-top: 0px;margin-left: 30px;}
//                             15%{margin-top: 30px;margin-left: 60px;}
//                             20%{margin-top: 60px;margin-left: 30px;}
//                             25%{margin-top: 0px;margin-left: 27px;}
//                             30%{margin-top: 20px;margin-left: 50px;}
//                             35%{margin-top: 60px;margin-left: 30px;}
//                             40%{margin-top: 30px;margin-left: 15px;}
//                             45%{margin-top: 45px;margin-left: 45px;}
//                             50%{margin-top: 10px;margin-left: 50px;}
//                             55%{margin-top: 55px;margin-left: 30px;}
//                             60%{margin-top: 30px;margin-left: 20px;}
//                             65%{margin-top: 60px;margin-left: 30px;}
//                             70%{margin-top: 40px;margin-left: 15px;}
//                             75%{margin-top: 15px;margin-left: 30px;}
//                             80%{margin-top: 18px;margin-left: 20px;}
//                             85%{margin-top: 20px;margin-left: 60px;}
//                             90%{margin-top: 60px;margin-left: 30px;}
//                             95%{margin-top: 10px;margin-left: 35px;}
//                             100%{margin-top: 63px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #balls3 {
//                             animation: spinStat3 5s linear infinite alternate;
//                             -webkit-animation: spinStat3 5s linear infinite alternate;
//                         }
//                         `;
//                 ball3.appendChild(keyFramesw);
//                 // =========================blue ball4====================================
//                 document.getElementById("balls4").style.animationName = "spinStat4";
//                 var ball4 = document.querySelector('#balls4');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat4 {
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 15px;margin-left: 30px;}
//                             10%{margin-top: 40px;margin-left: 50px;}
//                             15%{margin-top: 60px;margin-left: 30px;}
//                             20%{margin-top: 50px;margin-left: 50px;}
//                             25%{margin-top: 6px;margin-left: 30px;}
//                             30%{margin-top: 45px;margin-left: 20px;}
//                             35%{margin-top: 15px;margin-left: 20px;}
//                             40%{margin-top: 0px;margin-left: 30px;}
//                             45%{margin-top: 20px;margin-left: 50px;}
//                             50%{margin-top: 35px;margin-left: 60px;}
//                             55%{margin-top: 55px;margin-left: 45px;}
//                             60%{margin-top: 60px;margin-left: 30px;}
//                             65%{margin-top: 0px;margin-left: 30px;}
//                             70%{margin-top: 60px;margin-left: 30px;}
//                             75%{margin-top: 15px;margin-left: 25px;}
//                             80%{margin-top: 55px;margin-left: 20px;}
//                             85%{margin-top: 0px;margin-left: 30px;}
//                             90%{margin-top: 55px;margin-left: 27px;}
//                             95%{margin-top: 20px;margin-left: 58px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #balls4 {
//                             animation: spinStat4 5s linear infinite alternate;
//                             -webkit-animation: spinStat4 5s linear infinite alternate;
//                         }
//                         `;
//                 ball4.appendChild(keyFramesw);
//                 // =========================blue ball5====================================
//                 document.getElementById("balls5").style.animationName = "spinStat5";
//                 var ball5 = document.querySelector('#balls5');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat5 { 
//                             0%{margin-top: 60px;margin-left: 35px;}
//                             5%{margin-top: 40px;margin-left: 50px;}
//                             10%{margin-top: 60px;margin-left: 30px;}
//                             15%{margin-top: 30px;margin-left: 0px;}
//                             20%{margin-top: 20px;margin-left: 20px;}
//                             25%{margin-top: 0px;margin-left: 30px;}
//                             30%{margin-top: 60px;margin-left: 30px;}
//                             35%{margin-top: 40px;margin-left: 25px;}
//                             40%{margin-top: 60px;margin-left: 30px;}
//                             45%{margin-top: 10px;margin-left: 30px;}
//                             50%{margin-top: 30px;margin-left: 60px;}
//                             55%{margin-top: 60px;margin-left: 35px;}
//                             60%{margin-top: 0px;margin-left: 30px;}
//                             65%{margin-top: 15px;margin-left: 25px;}
//                             70%{margin-top: 20px;margin-left: 50px;}
//                             75%{margin-top: 35px;margin-left: 0px;}
//                             80%{margin-top: 12px;margin-left: 20px;}
//                             85%{margin-top: 0px;margin-left: 35px;}
//                             90%{margin-top: 60px;margin-left: 30px;}
//                             95%{margin-top: 30px;margin-left: 60px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}

//                         }
//                         #balls5 {
//                             animation: spinStat5 5s linear infinite alternate;
//                             -webkit-animation: spinStat5 5s linear infinite alternate;
//                         }
//                         `;
//                 ball5.appendChild(keyFramesw);
//                 //=========================blue ball6====================================
//                 document.getElementById("balls6").style.animationName = "spinStat6";
//                 var ball6 = document.querySelector('#balls6');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat6 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 0px;margin-left: 30px;}
//                             10%{margin-top: 10px;margin-left: 45px;}
//                             15%{margin-top: 60px;margin-left: 28px;}
//                             20%{margin-top: 10px;margin-left: 25px;}
//                             25%{margin-top: 30px;margin-left: 0px;}
//                             30%{margin-top: 0px;margin-left: 30px;}
//                             35%{margin-top: 44px;margin-left: 44px;}
//                             40%{margin-top: 60px;margin-left: 30x;}
//                             45%{margin-top: 40px;margin-left: 30px;}
//                             50%{margin-top: 20px;margin-left: 45px;}
//                             55%{margin-top: 40px;margin-left: 40px;}
//                             60%{margin-top: 55px;margin-left: 35px;}
//                             65%{margin-top: 50px;margin-left: 30px;}
//                             70%{margin-top: 0px;margin-left: 30px;}
//                             75%{margin-top: 60px;margin-left: 10px;}
//                             80%{margin-top: 30px;margin-left: 60px;}
//                             85%{margin-top: 25px;margin-left: 55px;}
//                             90%{margin-top: 5px;margin-left: 40px;}
//                             95%{margin-top: 20px;margin-left: 25x;}
//                             100%{margin-top: 60px;margin-left: 31px;background-position: 100%;}

//                         }
//                         #balls6 {
//                             animation: spinStat6 5s linear infinite alternate;
//                             -webkit-animation: spinStat6 5s linear infinite alternate;
//                         }
//                         `;
//                 ball6.appendChild(keyFramesw);
//                 //=========================blue ball7====================================
//                 document.getElementById("balls7").style.animationName = "spinStat7";
//                 var ball7 = document.querySelector('#balls7');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat7 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 40px;margin-left: 20px;}
//                             10%{margin-top: 30px;margin-left: 0px;}
//                             15%{margin-top: 25px;margin-left: 20px;}
//                             20%{margin-top: 0px;margin-left: 30px;}
//                             25%{margin-top: 25px;margin-left: 40px;}
//                             30%{margin-top: 50px;margin-left: 40px;}
//                             35%{margin-top: 60px;margin-left: 30px;}
//                             40%{margin-top: 0px;margin-left: 30px;}
//                             45%{margin-top: 55px;margin-left: 10px;}
//                             50%{margin-top: 15px;margin-left: 20px;}
//                             55%{margin-top: 25px;margin-left: 45px;}
//                             60%{margin-top: 50px;margin-left: 15px;}
//                             65%{margin-top: 20px;margin-left: 50px;}
//                             70%{margin-top: 0px;margin-left: 30px;}
//                             75%{margin-top: 15px;margin-left: 25px;}
//                             80%{margin-top: 50px;margin-left: 35px;}
//                             85%{margin-top: 10px;margin-left: 35px;}
//                             90%{margin-top: 45px;margin-left: 15px;}
//                             95%{margin-top: 60px;margin-left: 30px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}

//                         }
//                         #balls7 {
//                             animation: spinStat7 5s linear infinite alternate;
//                             -webkit-animation: spinStat7 5s linear infinite alternate;
//                         }
//                         `;
//                 ball7.appendChild(keyFramesw);
//                 //=========================blue ball8====================================
//                 document.getElementById("balls8").style.animationName = "spinStat8";
//                 var ball8 = document.querySelector('#balls8');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat8 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 15px;margin-left: 50px;}
//                             10%{margin-top: 55px;margin-left: 30px;}
//                             15%{margin-top: 40px;margin-left: 23px;}
//                             20%{margin-top: 25px;margin-left: 35px;}
//                             25%{margin-top: 40px;margin-left: 40px;}
//                             30%{margin-top: 60px;margin-left: 30px;}
//                             35%{margin-top: 45px;margin-left: 10px;}
//                             40%{margin-top: 55px;margin-left: 25px;}
//                             45%{margin-top: 15px;margin-left: 27px;}
//                             50%{margin-top: 30px;margin-left: 60px;}
//                             55%{margin-top: 55px;margin-left: 55px;}
//                             60%{margin-top: 60px;margin-left: 30px;}
//                             65%{margin-top: 40px;margin-left: 25px;}
//                             70%{margin-top: 10px;margin-left: 12px;}
//                             75%{margin-top: 45px;margin-left: 15px;}
//                             80%{margin-top: 40px;margin-left: 55px;}
//                             85%{margin-top: 0px;margin-left: 30px;}
//                             90%{margin-top: 55px;margin-left: 25px;}
//                             95%{margin-top: 30px;margin-left: 30px;}
//                             100%{margin-top: 58px;margin-left: 28px;background-position: 100%;}

//                         }
//                         #balls8 {
//                             animation: spinStat8 5s linear infinite alternate;
//                             -webkit-animation: spinStat8 5s linear infinite alternate;
//                         }
//                         `;
//                 ball8.appendChild(keyFramesw);
//                 //=========================blue ball9====================================
//                 document.getElementById("balls9").style.animationName = "spinStat9";
//                 var ball9 = document.querySelector('#balls9');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat9 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 45px;margin-left: 15px;}
//                             10%{margin-top: 55px;margin-left: 15px;}
//                             15%{margin-top: 60px;margin-left: 30px;}
//                             20%{margin-top: 45px;margin-left: 40px;}
//                             25%{margin-top: 55px;margin-left: 25px;}
//                             30%{margin-top: 10px;margin-left: 25px;}
//                             35%{margin-top: 45px;margin-left: 45px;}
//                             40%{margin-top: 60px;margin-left: 30px;}
//                             45%{margin-top: 30px;margin-left: 0px;}
//                             50%{margin-top: 10px;margin-left: 25px;}
//                             55%{margin-top: 40px;margin-left: 35px;}
//                             60%{margin-top: 55px;margin-left: 25px;}
//                             65%{margin-top: 60px;margin-left: 33px;}
//                             70%{margin-top: 40px;margin-left: 40px;}
//                             75%{margin-top: 15px;margin-left: 20px;}
//                             80%{margin-top: 30px;margin-left: 15px;}
//                             85%{margin-top: 60px;margin-left: 30px;}
//                             90%{margin-top: 0px;margin-left: 30px;}
//                             95%{margin-top: 30px;margin-left: 0px;}
//                             100%{margin-top: 61px;margin-left: 35px;background-position: 100%;}

//                         }
//                         #balls9 {
//                             animation: spinStat9 5s linear infinite alternate;
//                             -webkit-animation: spinStat9 5s linear infinite alternate;
//                         }
//                         `;
//                 ball9.appendChild(keyFramesw);
//                 //=========================blue ball0====================================
//                 document.getElementById("balls0").style.animationName = "spinStat0";
//                 var ball0 = document.querySelector('#balls0');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat0 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 50px;margin-left: 15px;}
//                             10%{margin-top: 45px;margin-left: 20px;}
//                             15%{margin-top: 20px;margin-left: 15px;}
//                             20%{margin-top: 0px;margin-left: 30px;}
//                             25%{margin-top: 20px;margin-left: 38px;}
//                             30%{margin-top: 35px;margin-left: 40px;}
//                             35%{margin-top: 45px;margin-left: 45px;}
//                             40%{margin-top: 58px;margin-left: 50px;}
//                             45%{margin-top: 30px;margin-left: 0px;}
//                             50%{margin-top: 0px;margin-left: 30px;}
//                             55%{margin-top: 57px;margin-left: 28px;}
//                             60%{margin-top: 15px;margin-left: 35px;}
//                             65%{margin-top: 40px;margin-left: 20px;}
//                             70%{margin-top: 15px;margin-left: 35px;}
//                             75%{margin-top: 60px;margin-left: 30px;}
//                             80%{margin-top: 50px;margin-left: 15px;}
//                             85%{margin-top: 10px;margin-left: 40px;}
//                             90%{margin-top: 40px;margin-left: 23px;}
//                             95%{margin-top: 20px;margin-left: 30px;}
//                             100%{margin-top: 58px;margin-left: 28px;background-position: 100%;}

//                         }
//                         #balls0 {
//                             animation: spinStat0 5s linear infinite alternate;
//                             -webkit-animation: spinStat0 5s linear infinite alternate;
//                         }
//                         `;
//                 ball0.appendChild(keyFramesw);
//                 psound=parseInt(document.getElementById("pSound").innerHTML);
//                 if(psound==2){
//                     puaseplay();
//                 }else{
//                     play();
//                 }
//             }
//             if (cnt == 100) {
//                 var result11 = Math.floor(Math.random() * 10);
//                 document.getElementById("boxball1").innerHTML = result11;
//                 document.getElementById("boxBall1").style.animation = "";
//                 document.getElementById("balls0").style.animationName = "anib0";
//                 document.getElementById("balls9").style.animationName = "anib9";
//                 document.getElementById("balls8").style.animationName = "anib8";
//                 document.getElementById("balls7").style.animationName = "anib7";
//                 document.getElementById("balls6").style.animationName = "anib6";
//                 document.getElementById("balls5").style.animationName = "anib5";
//                 document.getElementById("balls4").style.animationName = "anib4";
//                 document.getElementById("balls3").style.animationName = "anib3";
//                 document.getElementById("balls2").style.animationName = "anib2";
//                 document.getElementById("balls1").style.animationName = "anib1";
//                 document.getElementById("imgspin").style.animation = "none";
//                 var runball = document.querySelector('#boxBall1');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes run10 {
//                             from {
//                                 height: 60px;
//                                 width: 60px;
//                                 margin-top: 0px;
//                                 margin-left: 80px;
//                                 opacity: 1;
//                             }
//                             to {
//                                 margin-top: 80px;
//                                 margin-left: 620px;
//                                 height: 40px;
//                                 width: 40px;
//                                 z-index: 1;
//                                 opacity: 0;
//                             }
//                         }
//                         #boxBall1 {
//                             animation: run10 1s linear infinite;
//                             -webkit-animation: run10 1s linear infinite;
//                         }
//                         `;
//                 runball.appendChild(keyFramesw);
//                 psound=parseInt(document.getElementById("pSound").innerHTML);
//                 if(psound==2){
//                       puase1();
//                 }else{
//                   play1();
//                 }
//             }
//             /*12*/
//             if (cnt == 102) {
//                 document.getElementById("boxBall5").style.animation = "none";
//                 var result10 = document.getElementById("boxball5").innerHTML;
//                 document.getElementById("nums10").innerHTML = result10;
//                 document.getElementById("boxball5").innerHTML = "?";
//                 document.getElementById("boxball1").innerHTML = "?";
//                 document.getElementById("boxball2").innerHTML = "?";
//                 document.getElementById("boxball3").innerHTML = "?";
//                 document.getElementById("boxball4").innerHTML = "?";
//                 document.getElementById("imgspin2").style.animation = "";
//                 var spinball = document.querySelector('#imgspin2');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spin2 {
//                             from {
//                                 transform: rotate(0deg);
//                                 -webkit-transform: rotate(0deg);
//                             }
//                             to {
//                                 transform: rotate(360deg);
//                                 -webkit-transform: rotate(360deg);
//                             }
//                         }
//                         #imgspin2 {
//                             animation: spin2 0.8s linear infinite;
//                             -webkit-animation: spin 0.8s linear infinite;
//                         }
//                         `;
//                 spinball.appendChild(keyFramesw);
//                 // =========================blue ball1====================================
//                 document.getElementById("ballss1").style.animationName = "spinStat1";
//                 var balls1 = document.querySelector('#ballss1');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat1 {
//                             0%{margin-top: 60px;margin-left: 50px;}
//                             5%{margin-top: 30px;margin-left: 0px;}
//                             10%{margin-top: 50px;margin-left: 20px;}
//                             15%{margin-top: 0px;margin-left: 30px;}
//                             20%{margin-top: 60px;margin-left: 40px;}
//                             25%{margin-top: 50px;margin-left: 40px;}
//                             30%{margin-top: 10px;margin-left: 20px;}
//                             35%{margin-top: 0px;margin-left: 20px;}
//                             40%{margin-top: 30px;margin-left: 60px;}
//                             45%{margin-top: 10px;margin-left: 40px;}
//                             50%{margin-top: 63px;margin-left: 30px;}
//                             55{margin-top: 10px;margin-left: 35px;}
//                             60%{margin-top: 33px;margin-left: 0px;}
//                             65%{margin-top: 10px;margin-left: 30px;}
//                             70%{margin-top: 0px;margin-left: 25px;}
//                             75%{margin-top: 20px;margin-left: 20px;}
//                             80%{margin-top: 20px;margin-left: 40px;}
//                             85%{margin-top:20px;margin-left: 12px;}
//                             90%{margin-top: 50px;margin-left: 20px;}
//                             95%{margin-top: 0px;margin-left: 35px;}
//                             100%{margin-top: 27px;margin-left: 33px;background-position: 100%;}
//                         }
//                         #ballss1 {
//                             animation: spinStat1 5s linear infinite alternate;
//                             -webkit-animation: spinstat1 5s linear infinite alternate;
//                         }
//                         `;
//                 balls1.appendChild(keyFramesw);
//                 // =========================blue balls2====================================
//                 document.getElementById("ballss2").style.animationName = "spinStats2";
//                 var ball2 = document.querySelector('#ballss2');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats2 {
//                             0%{margin-top: 60px;margin-left: 31px;}
//                                 5%{margin-top: 8px;margin-left: 30px;}
//                                 10%{margin-top: 30px;margin-left: 50px;}
//                                 15%{margin-top: 20px;margin-left: 10px;}
//                                 20%{margin-top: 50px;margin-left: 30px;}
//                                 25%{margin-top: 0px;margin-left: 30px;}
//                                 30%{margin-top: 60px;margin-left: 30px;}
//                                 35%{margin-top: 0px;margin-left: 30px;}
//                                 40%{margin-top: 30px;margin-left: 10px;}
//                                 45%{margin-top: 30px;margin-left: 60px;}
//                                 50%{margin-top: 63px;margin-left: 30px;}
//                                 55%{margin-top: 10px;margin-left: 45px;}
//                                 60%{margin-top: 55px;margin-left: 10px;}
//                                 65%{margin-top: 20px;margin-left: 35px;}
//                                 70%{margin-top: 45px;margin-left: 60px;}
//                                 75%{margin-top: 10px;margin-left: 49px;}
//                                 80%{margin-top: 48px;margin-left: 50px;}
//                                 85%{margin-top: 18px;margin-left: 30px;}
//                                 90%{margin-top: 20px;margin-left: 10px;}
//                                 95%{margin-top: 0px;margin-left: 30px;}
//                                 100%{margin-top: 63px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballss2 {
//                             animation: spinStats2 5s linear infinite alternate;
//                             -webkit-animation: spinStats2 5s linear infinite alternate;
//                         }
//                         `;
//                 ball2.appendChild(keyFramesw);
//                 // =========================blue balls3====================================
//                 document.getElementById("ballss3").style.animationName = "spinStats3";
//                 var ball3 = document.querySelector('#ballss3');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats3 {
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 30px;margin-left: 0px;}
//                             10%{margin-top: 0px;margin-left: 30px;}
//                             15%{margin-top: 30px;margin-left: 60px;}
//                             20%{margin-top: 60px;margin-left: 30px;}
//                             25%{margin-top: 0px;margin-left: 27px;}
//                             30%{margin-top: 20px;margin-left: 50px;}
//                             35%{margin-top: 60px;margin-left: 30px;}
//                             40%{margin-top: 30px;margin-left: 15px;}
//                             45%{margin-top: 45px;margin-left: 45px;}
//                             50%{margin-top: 10px;margin-left: 50px;}
//                             55%{margin-top: 55px;margin-left: 30px;}
//                             60%{margin-top: 30px;margin-left: 20px;}
//                             65%{margin-top: 60px;margin-left: 30px;}
//                             70%{margin-top: 40px;margin-left: 15px;}
//                             75%{margin-top: 15px;margin-left: 30px;}
//                             80%{margin-top: 18px;margin-left: 20px;}
//                             85%{margin-top: 20px;margin-left: 60px;}
//                             90%{margin-top: 60px;margin-left: 30px;}
//                             95%{margin-top: 10px;margin-left: 35px;}
//                             100%{margin-top: 63px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballss3 {
//                             animation: spinStats3 5s linear infinite alternate;
//                             -webkit-animation: spinStats3 5s linear infinite alternate;
//                         }
//                         `;
//                 ball3.appendChild(keyFramesw);
//                 // =========================blue balls4====================================
//                 document.getElementById("ballss4").style.animationName = "spinStats4";
//                 var ball4 = document.querySelector('#ballss4');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats4 {
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 15px;margin-left: 30px;}
//                             10%{margin-top: 40px;margin-left: 50px;}
//                             15%{margin-top: 60px;margin-left: 30px;}
//                             20%{margin-top: 50px;margin-left: 50px;}
//                             25%{margin-top: 6px;margin-left: 30px;}
//                             30%{margin-top: 45px;margin-left: 20px;}
//                             35%{margin-top: 15px;margin-left: 20px;}
//                             40%{margin-top: 0px;margin-left: 30px;}
//                             45%{margin-top: 20px;margin-left: 50px;}
//                             50%{margin-top: 35px;margin-left: 60px;}
//                             55%{margin-top: 55px;margin-left: 45px;}
//                             60%{margin-top: 60px;margin-left: 30px;}
//                             65%{margin-top: 0px;margin-left: 30px;}
//                             70%{margin-top: 60px;margin-left: 30px;}
//                             75%{margin-top: 15px;margin-left: 25px;}
//                             80%{margin-top: 55px;margin-left: 20px;}
//                             85%{margin-top: 0px;margin-left: 30px;}
//                             90%{margin-top: 55px;margin-left: 27px;}
//                             95%{margin-top: 20px;margin-left: 58px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballss4 {
//                             animation: spinStats4 5s linear infinite alternate;
//                             -webkit-animation: spinStats4 5s linear infinite alternate;
//                         }
//                         `;
//                 ball4.appendChild(keyFramesw);
//                 // =========================blue balls5====================================
//                 document.getElementById("ballss5").style.animationName = "spinStats5";
//                 var ball5 = document.querySelector('#ballss5');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats5 { 
//                             0%{margin-top: 60px;margin-left: 35px;}
//                             5%{margin-top: 40px;margin-left: 50px;}
//                             10%{margin-top: 60px;margin-left: 30px;}
//                             15%{margin-top: 30px;margin-left: 0px;}
//                             20%{margin-top: 20px;margin-left: 20px;}
//                             25%{margin-top: 0px;margin-left: 30px;}
//                             30%{margin-top: 60px;margin-left: 30px;}
//                             35%{margin-top: 40px;margin-left: 25px;}
//                             40%{margin-top: 60px;margin-left: 30px;}
//                             45%{margin-top: 10px;margin-left: 30px;}
//                             50%{margin-top: 30px;margin-left: 60px;}
//                             55%{margin-top: 60px;margin-left: 35px;}
//                             60%{margin-top: 0px;margin-left: 30px;}
//                             65%{margin-top: 15px;margin-left: 25px;}
//                             70%{margin-top: 20px;margin-left: 50px;}
//                             75%{margin-top: 35px;margin-left: 0px;}
//                             80%{margin-top: 12px;margin-left: 20px;}
//                             85%{margin-top: 0px;margin-left: 35px;}
//                             90%{margin-top: 60px;margin-left: 30px;}
//                             95%{margin-top: 30px;margin-left: 60px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}

//                         }
//                         #ballss5 {
//                             animation: spinStats5 5s linear infinite alternate;
//                             -webkit-animation: spinStats5 5s linear infinite alternate;
//                         }
//                         `;
//                 ball5.appendChild(keyFramesw);
//                 //=========================blue balls6====================================
//                 document.getElementById("ballss6").style.animationName = "spinStats6";
//                 var ball6 = document.querySelector('#ballss6');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats6 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 0px;margin-left: 30px;}
//                             10%{margin-top: 10px;margin-left: 45px;}
//                             15%{margin-top: 60px;margin-left: 28px;}
//                             20%{margin-top: 10px;margin-left: 25px;}
//                             25%{margin-top: 30px;margin-left: 0px;}
//                             30%{margin-top: 0px;margin-left: 30px;}
//                             35%{margin-top: 44px;margin-left: 44px;}
//                             40%{margin-top: 60px;margin-left: 30x;}
//                             45%{margin-top: 40px;margin-left: 30px;}
//                             50%{margin-top: 20px;margin-left: 45px;}
//                             55%{margin-top: 40px;margin-left: 40px;}
//                             60%{margin-top: 55px;margin-left: 35px;}
//                             65%{margin-top: 50px;margin-left: 30px;}
//                             70%{margin-top: 0px;margin-left: 30px;}
//                             75%{margin-top: 60px;margin-left: 10px;}
//                             80%{margin-top: 30px;margin-left: 60px;}
//                             85%{margin-top: 25px;margin-left: 55px;}
//                             90%{margin-top: 5px;margin-left: 40px;}
//                             95%{margin-top: 20px;margin-left: 25x;}
//                             100%{margin-top: 60px;margin-left: 31px;background-position: 100%;}

//                         }
//                         #ballss6 {
//                             animation: spinStats6 5s linear infinite alternate;
//                             -webkit-animation: spinStats6 5s linear infinite alternate;
//                         }
//                         `;
//                 ball6.appendChild(keyFramesw);
//                 //=========================blue balls7====================================
//                 document.getElementById("ballss7").style.animationName = "spinStats7";
//                 var ball7 = document.querySelector('#ballss7');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats7 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 40px;margin-left: 20px;}
//                             10%{margin-top: 30px;margin-left: 0px;}
//                             15%{margin-top: 25px;margin-left: 20px;}
//                             20%{margin-top: 0px;margin-left: 30px;}
//                             25%{margin-top: 25px;margin-left: 40px;}
//                             30%{margin-top: 50px;margin-left: 40px;}
//                             35%{margin-top: 60px;margin-left: 30px;}
//                             40%{margin-top: 0px;margin-left: 30px;}
//                             45%{margin-top: 55px;margin-left: 10px;}
//                             50%{margin-top: 15px;margin-left: 20px;}
//                             55%{margin-top: 25px;margin-left: 45px;}
//                             60%{margin-top: 50px;margin-left: 15px;}
//                             65%{margin-top: 20px;margin-left: 50px;}
//                             70%{margin-top: 0px;margin-left: 30px;}
//                             75%{margin-top: 15px;margin-left: 25px;}
//                             80%{margin-top: 50px;margin-left: 35px;}
//                             85%{margin-top: 10px;margin-left: 35px;}
//                             90%{margin-top: 45px;margin-left: 15px;}
//                             95%{margin-top: 60px;margin-left: 30px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}

//                         }
//                         #ballss7 {
//                             animation: spinStats7 5s linear infinite alternate;
//                             -webkit-animation: spinStats7 5s linear infinite alternate;
//                         }
//                         `;
//                 ball7.appendChild(keyFramesw);
//                 //=========================blue balls8====================================
//                 document.getElementById("ballss8").style.animationName = "spinStats8";
//                 var ball8 = document.querySelector('#ballss8');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats8 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 15px;margin-left: 50px;}
//                             10%{margin-top: 55px;margin-left: 30px;}
//                             15%{margin-top: 40px;margin-left: 23px;}
//                             20%{margin-top: 25px;margin-left: 35px;}
//                             25%{margin-top: 40px;margin-left: 40px;}
//                             30%{margin-top: 60px;margin-left: 30px;}
//                             35%{margin-top: 45px;margin-left: 10px;}
//                             40%{margin-top: 55px;margin-left: 25px;}
//                             45%{margin-top: 15px;margin-left: 27px;}
//                             50%{margin-top: 30px;margin-left: 60px;}
//                             55%{margin-top: 55px;margin-left: 55px;}
//                             60%{margin-top: 60px;margin-left: 30px;}
//                             65%{margin-top: 40px;margin-left: 25px;}
//                             70%{margin-top: 10px;margin-left: 12px;}
//                             75%{margin-top: 45px;margin-left: 15px;}
//                             80%{margin-top: 40px;margin-left: 55px;}
//                             85%{margin-top: 0px;margin-left: 30px;}
//                             90%{margin-top: 55px;margin-left: 25px;}
//                             95%{margin-top: 30px;margin-left: 30px;}
//                             100%{margin-top: 58px;margin-left: 28px;background-position: 100%;}

//                         }
//                         #ballss8 {
//                             animation: spinStats8 5s linear infinite alternate;
//                             -webkit-animation: spinStats8 5s linear infinite alternate;
//                         }
//                         `;
//                 ball8.appendChild(keyFramesw);
//                 //=========================blue balls9====================================
//                 document.getElementById("ballss9").style.animationName = "spinStats9";
//                 var ball9 = document.querySelector('#ballss9');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats9 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 45px;margin-left: 15px;}
//                             10%{margin-top: 55px;margin-left: 15px;}
//                             15%{margin-top: 60px;margin-left: 30px;}
//                             20%{margin-top: 45px;margin-left: 40px;}
//                             25%{margin-top: 55px;margin-left: 25px;}
//                             30%{margin-top: 10px;margin-left: 25px;}
//                             35%{margin-top: 45px;margin-left: 45px;}
//                             40%{margin-top: 60px;margin-left: 30px;}
//                             45%{margin-top: 30px;margin-left: 0px;}
//                             50%{margin-top: 10px;margin-left: 25px;}
//                             55%{margin-top: 40px;margin-left: 35px;}
//                             60%{margin-top: 55px;margin-left: 25px;}
//                             65%{margin-top: 60px;margin-left: 33px;}
//                             70%{margin-top: 40px;margin-left: 40px;}
//                             75%{margin-top: 15px;margin-left: 20px;}
//                             80%{margin-top: 30px;margin-left: 15px;}
//                             85%{margin-top: 60px;margin-left: 30px;}
//                             90%{margin-top: 0px;margin-left: 30px;}
//                             95%{margin-top: 30px;margin-left: 0px;}
//                             100%{margin-top: 61px;margin-left: 35px;background-position: 100%;}

//                         }
//                         #ballss9 {
//                             animation: spinStats9 5s linear infinite alternate;
//                             -webkit-animation: spinStats9 5s linear infinite alternate;
//                         }
//                         `;
//                 ball9.appendChild(keyFramesw);
//                 //=========================blue balls0====================================
//                 document.getElementById("ballss0").style.animationName = "spinStats0";
//                 var ball0 = document.querySelector('#ballss0');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats0 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 50px;margin-left: 15px;}
//                             10%{margin-top: 45px;margin-left: 20px;}
//                             15%{margin-top: 20px;margin-left: 15px;}
//                             20%{margin-top: 0px;margin-left: 30px;}
//                             25%{margin-top: 20px;margin-left: 38px;}
//                             30%{margin-top: 35px;margin-left: 40px;}
//                             35%{margin-top: 45px;margin-left: 45px;}
//                             40%{margin-top: 58px;margin-left: 50px;}
//                             45%{margin-top: 30px;margin-left: 0px;}
//                             50%{margin-top: 0px;margin-left: 30px;}
//                             55%{margin-top: 57px;margin-left: 28px;}
//                             60%{margin-top: 15px;margin-left: 35px;}
//                             65%{margin-top: 40px;margin-left: 20px;}
//                             70%{margin-top: 15px;margin-left: 35px;}
//                             75%{margin-top: 60px;margin-left: 30px;}
//                             80%{margin-top: 50px;margin-left: 15px;}
//                             85%{margin-top: 10px;margin-left: 40px;}
//                             90%{margin-top: 40px;margin-left: 23px;}
//                             95%{margin-top: 20px;margin-left: 30px;}
//                             100%{margin-top: 58px;margin-left: 28px;background-position: 100%;}

//                         }
//                         #ballss0 {
//                             animation: spinStats0 5s linear infinite alternate;
//                             -webkit-animation: spinStats0 5s linear infinite alternate;
//                         }
//                         `;
//                 ball0.appendChild(keyFramesw);
//                 psound=parseInt(document.getElementById("pSound").innerHTML);
//                 if(psound==2){
//                     puaseplay();
//                 }else{
//                     play();
//                 }
//             }
//             if (cnt == 97) {
//                 var result12 = Math.floor(Math.random() * 10);
//                 document.getElementById("boxball2").innerHTML = result12;
//                 document.getElementById("boxBall2").style.animation = "";
//                 document.getElementById("ballss0").style.animationName = "anib0";
//                 document.getElementById("ballss9").style.animationName = "anib9";
//                 document.getElementById("ballss8").style.animationName = "anib8";
//                 document.getElementById("ballss7").style.animationName = "anib7";
//                 document.getElementById("ballss6").style.animationName = "anib6";
//                 document.getElementById("ballss5").style.animationName = "anib5";
//                 document.getElementById("ballss4").style.animationName = "anib4";
//                 document.getElementById("ballss3").style.animationName = "anib3";
//                 document.getElementById("ballss2").style.animationName = "anib2";
//                 document.getElementById("ballss1").style.animationName = "anib1";
//                 document.getElementById("imgspin2").style.animation = "none";
//                 var runball = document.querySelector('#boxBall2');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes run11 {
//                             from {
//                                 height: 60px;
//                                 width: 60px;
//                                 margin-top: 0px;
//                                 margin-left: 80px;
//                                 opacity: 1;
//                             }
//                             to {
//                                 margin-top: 80px;
//                                 margin-left: 400px;
//                                 height: 40px;
//                                 width: 40px;
//                                 z-index: 1;
//                                 opacity: 0;
//                             }
//                         }
//                         #boxBall2 {
//                             animation: run11 1s linear infinite;
//                             -webkit-animation: run11 1s linear infinite;
//                         }
//                         `;
//                 runball.appendChild(keyFramesw);
//                 psound=parseInt(document.getElementById("pSound").innerHTML);
//                 if(psound==2){
//                      puase1();
//                 }else{
//                    play1();
//                 }
//             }
//             /*13*/
//             if (cnt == 99) {
//                 document.getElementById("boxBall1").style.animation = "none";
//                 var result11 = document.getElementById("boxball1").innerHTML;
//                 document.getElementById("nums11").innerHTML = result11;
//                 document.getElementById("imgspin3").style.animation = "";
//                 var spinball = document.querySelector('#imgspin3');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spin2 {
//                             from {
//                                 transform: rotate(0deg);
//                                 -webkit-transform: rotate(0deg);
//                             }
//                             to {
//                                 transform: rotate(360deg);
//                                 -webkit-transform: rotate(360deg);
//                             }
//                         }
//                         #imgspin3 {
//                             animation: spin2 0.8s linear infinite;
//                             -webkit-animation: spin2 0.8s linear infinite;
//                         }
//                         `;
//                 spinball.appendChild(keyFramesw);
//                 // =========================blue ball1====================================
//                 document.getElementById("ballsss1").style.animationName = "spinStat1";
//                 var balls1 = document.querySelector('#ballsss1');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat1 {
//                             0%{margin-top: 60px;margin-left: 50px;}
//                             5%{margin-top: 30px;margin-left: 0px;}
//                             10%{margin-top: 50px;margin-left: 20px;}
//                             15%{margin-top: 0px;margin-left: 30px;}
//                             20%{margin-top: 60px;margin-left: 40px;}
//                             25%{margin-top: 50px;margin-left: 40px;}
//                             30%{margin-top: 10px;margin-left: 20px;}
//                             35%{margin-top: 0px;margin-left: 20px;}
//                             40%{margin-top: 30px;margin-left: 60px;}
//                             45%{margin-top: 10px;margin-left: 40px;}
//                             50%{margin-top: 63px;margin-left: 30px;}
//                             55{margin-top: 10px;margin-left: 35px;}
//                             60%{margin-top: 33px;margin-left: 0px;}
//                             65%{margin-top: 10px;margin-left: 30px;}
//                             70%{margin-top: 0px;margin-left: 25px;}
//                             75%{margin-top: 20px;margin-left: 20px;}
//                             80%{margin-top: 20px;margin-left: 40px;}
//                             85%{margin-top:20px;margin-left: 12px;}
//                             90%{margin-top: 50px;margin-left: 20px;}
//                             95%{margin-top: 0px;margin-left: 35px;}
//                             100%{margin-top: 27px;margin-left: 33px;background-position: 100%;}
//                         }
//                         #ballsss1 {
//                             animation: spinStat1 5s linear infinite alternate;
//                             -webkit-animation: spinstat1 5s linear infinite alternate;
//                         }
//                         `;
//                 balls1.appendChild(keyFramesw);
//                 // =========================blue balls2====================================
//                 document.getElementById("ballsss2").style.animationName = "spinStats2";
//                 var ball2 = document.querySelector('#ballsss2');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats2 {
//                             0%{margin-top: 60px;margin-left: 31px;}
//                                 5%{margin-top: 8px;margin-left: 30px;}
//                                 10%{margin-top: 30px;margin-left: 50px;}
//                                 15%{margin-top: 20px;margin-left: 10px;}
//                                 20%{margin-top: 50px;margin-left: 30px;}
//                                 25%{margin-top: 0px;margin-left: 30px;}
//                                 30%{margin-top: 60px;margin-left: 30px;}
//                                 35%{margin-top: 0px;margin-left: 30px;}
//                                 40%{margin-top: 30px;margin-left: 10px;}
//                                 45%{margin-top: 30px;margin-left: 60px;}
//                                 50%{margin-top: 63px;margin-left: 30px;}
//                                 55%{margin-top: 10px;margin-left: 45px;}
//                                 60%{margin-top: 55px;margin-left: 10px;}
//                                 65%{margin-top: 20px;margin-left: 35px;}
//                                 70%{margin-top: 45px;margin-left: 60px;}
//                                 75%{margin-top: 10px;margin-left: 49px;}
//                                 80%{margin-top: 48px;margin-left: 50px;}
//                                 85%{margin-top: 18px;margin-left: 30px;}
//                                 90%{margin-top: 20px;margin-left: 10px;}
//                                 95%{margin-top: 0px;margin-left: 30px;}
//                                 100%{margin-top: 63px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballsss2 {
//                             animation: spinStats2 5s linear infinite alternate;
//                             -webkit-animation: spinStats2 5s linear infinite alternate;
//                         }
//                         `;
//                 ball2.appendChild(keyFramesw);
//                 // =========================blue balls3====================================
//                 document.getElementById("ballsss3").style.animationName = "spinStats3";
//                 var ball3 = document.querySelector('#ballsss3');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats3 {
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 30px;margin-left: 0px;}
//                             10%{margin-top: 0px;margin-left: 30px;}
//                             15%{margin-top: 30px;margin-left: 60px;}
//                             20%{margin-top: 60px;margin-left: 30px;}
//                             25%{margin-top: 0px;margin-left: 27px;}
//                             30%{margin-top: 20px;margin-left: 50px;}
//                             35%{margin-top: 60px;margin-left: 30px;}
//                             40%{margin-top: 30px;margin-left: 15px;}
//                             45%{margin-top: 45px;margin-left: 45px;}
//                             50%{margin-top: 10px;margin-left: 50px;}
//                             55%{margin-top: 55px;margin-left: 30px;}
//                             60%{margin-top: 30px;margin-left: 20px;}
//                             65%{margin-top: 60px;margin-left: 30px;}
//                             70%{margin-top: 40px;margin-left: 15px;}
//                             75%{margin-top: 15px;margin-left: 30px;}
//                             80%{margin-top: 18px;margin-left: 20px;}
//                             85%{margin-top: 20px;margin-left: 60px;}
//                             90%{margin-top: 60px;margin-left: 30px;}
//                             95%{margin-top: 10px;margin-left: 35px;}
//                             100%{margin-top: 63px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballsss3 {
//                             animation: spinStats3 5s linear infinite alternate;
//                             -webkit-animation: spinStats3 5s linear infinite alternate;
//                         }
//                         `;
//                 ball3.appendChild(keyFramesw);
//                 // =========================blue balls4====================================
//                 document.getElementById("ballsss4").style.animationName = "spinStats4";
//                 var ball4 = document.querySelector('#ballsss4');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats4 {
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 15px;margin-left: 30px;}
//                             10%{margin-top: 40px;margin-left: 50px;}
//                             15%{margin-top: 60px;margin-left: 30px;}
//                             20%{margin-top: 50px;margin-left: 50px;}
//                             25%{margin-top: 6px;margin-left: 30px;}
//                             30%{margin-top: 45px;margin-left: 20px;}
//                             35%{margin-top: 15px;margin-left: 20px;}
//                             40%{margin-top: 0px;margin-left: 30px;}
//                             45%{margin-top: 20px;margin-left: 50px;}
//                             50%{margin-top: 35px;margin-left: 60px;}
//                             55%{margin-top: 55px;margin-left: 45px;}
//                             60%{margin-top: 60px;margin-left: 30px;}
//                             65%{margin-top: 0px;margin-left: 30px;}
//                             70%{margin-top: 60px;margin-left: 30px;}
//                             75%{margin-top: 15px;margin-left: 25px;}
//                             80%{margin-top: 55px;margin-left: 20px;}
//                             85%{margin-top: 0px;margin-left: 30px;}
//                             90%{margin-top: 55px;margin-left: 27px;}
//                             95%{margin-top: 20px;margin-left: 58px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballsss4 {
//                             animation: spinStats4 5s linear infinite alternate;
//                             -webkit-animation: spinStats4 5s linear infinite alternate;
//                         }
//                         `;
//                 ball4.appendChild(keyFramesw);
//                 // =========================blue balls5====================================
//                 document.getElementById("ballsss5").style.animationName = "spinStats5";
//                 var ball5 = document.querySelector('#ballsss5');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats5 { 
//                             0%{margin-top: 60px;margin-left: 35px;}
//                             5%{margin-top: 40px;margin-left: 50px;}
//                             10%{margin-top: 60px;margin-left: 30px;}
//                             15%{margin-top: 30px;margin-left: 0px;}
//                             20%{margin-top: 20px;margin-left: 20px;}
//                             25%{margin-top: 0px;margin-left: 30px;}
//                             30%{margin-top: 60px;margin-left: 30px;}
//                             35%{margin-top: 40px;margin-left: 25px;}
//                             40%{margin-top: 60px;margin-left: 30px;}
//                             45%{margin-top: 10px;margin-left: 30px;}
//                             50%{margin-top: 30px;margin-left: 60px;}
//                             55%{margin-top: 60px;margin-left: 35px;}
//                             60%{margin-top: 0px;margin-left: 30px;}
//                             65%{margin-top: 15px;margin-left: 25px;}
//                             70%{margin-top: 20px;margin-left: 50px;}
//                             75%{margin-top: 35px;margin-left: 0px;}
//                             80%{margin-top: 12px;margin-left: 20px;}
//                             85%{margin-top: 0px;margin-left: 35px;}
//                             90%{margin-top: 60px;margin-left: 30px;}
//                             95%{margin-top: 30px;margin-left: 60px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}

//                         }
//                         #ballsss5 {
//                             animation: spinStats5 5s linear infinite alternate;
//                             -webkit-animation: spinStats5 5s linear infinite alternate;
//                         }
//                         `;
//                 ball5.appendChild(keyFramesw);
//                 //=========================blue balls6====================================
//                 document.getElementById("ballsss6").style.animationName = "spinStats6";
//                 var ball6 = document.querySelector('#ballsss6');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats6 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 0px;margin-left: 30px;}
//                             10%{margin-top: 10px;margin-left: 45px;}
//                             15%{margin-top: 60px;margin-left: 28px;}
//                             20%{margin-top: 10px;margin-left: 25px;}
//                             25%{margin-top: 30px;margin-left: 0px;}
//                             30%{margin-top: 0px;margin-left: 30px;}
//                             35%{margin-top: 44px;margin-left: 44px;}
//                             40%{margin-top: 60px;margin-left: 30x;}
//                             45%{margin-top: 40px;margin-left: 30px;}
//                             50%{margin-top: 20px;margin-left: 45px;}
//                             55%{margin-top: 40px;margin-left: 40px;}
//                             60%{margin-top: 55px;margin-left: 35px;}
//                             65%{margin-top: 50px;margin-left: 30px;}
//                             70%{margin-top: 0px;margin-left: 30px;}
//                             75%{margin-top: 60px;margin-left: 10px;}
//                             80%{margin-top: 30px;margin-left: 60px;}
//                             85%{margin-top: 25px;margin-left: 55px;}
//                             90%{margin-top: 5px;margin-left: 40px;}
//                             95%{margin-top: 20px;margin-left: 25x;}
//                             100%{margin-top: 60px;margin-left: 31px;background-position: 100%;}

//                         }
//                         #ballsss6 {
//                             animation: spinStats6 5s linear infinite alternate;
//                             -webkit-animation: spinStats6 5s linear infinite alternate;
//                         }
//                         `;
//                 ball6.appendChild(keyFramesw);
//                 //=========================blue balls7====================================
//                 document.getElementById("ballsss7").style.animationName = "spinStats7";
//                 var ball7 = document.querySelector('#ballsss7');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats7 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 40px;margin-left: 20px;}
//                             10%{margin-top: 30px;margin-left: 0px;}
//                             15%{margin-top: 25px;margin-left: 20px;}
//                             20%{margin-top: 0px;margin-left: 30px;}
//                             25%{margin-top: 25px;margin-left: 40px;}
//                             30%{margin-top: 50px;margin-left: 40px;}
//                             35%{margin-top: 60px;margin-left: 30px;}
//                             40%{margin-top: 0px;margin-left: 30px;}
//                             45%{margin-top: 55px;margin-left: 10px;}
//                             50%{margin-top: 15px;margin-left: 20px;}
//                             55%{margin-top: 25px;margin-left: 45px;}
//                             60%{margin-top: 50px;margin-left: 15px;}
//                             65%{margin-top: 20px;margin-left: 50px;}
//                             70%{margin-top: 0px;margin-left: 30px;}
//                             75%{margin-top: 15px;margin-left: 25px;}
//                             80%{margin-top: 50px;margin-left: 35px;}
//                             85%{margin-top: 10px;margin-left: 35px;}
//                             90%{margin-top: 45px;margin-left: 15px;}
//                             95%{margin-top: 60px;margin-left: 30px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}


//                         }
//                         #ballsss7 {
//                             animation: spinStats7 5s linear infinite alternate;
//                             -webkit-animation: spinStats7 5s linear infinite alternate;
//                         }
//                         `;
//                 ball7.appendChild(keyFramesw);
//                 //=========================blue balls8====================================
//                 document.getElementById("ballsss8").style.animationName = "spinStats8";
//                 var ball8 = document.querySelector('#ballsss8');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats8 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 15px;margin-left: 50px;}
//                             10%{margin-top: 55px;margin-left: 30px;}
//                             15%{margin-top: 40px;margin-left: 23px;}
//                             20%{margin-top: 25px;margin-left: 35px;}
//                             25%{margin-top: 40px;margin-left: 40px;}
//                             30%{margin-top: 60px;margin-left: 30px;}
//                             35%{margin-top: 45px;margin-left: 10px;}
//                             40%{margin-top: 55px;margin-left: 25px;}
//                             45%{margin-top: 15px;margin-left: 27px;}
//                             50%{margin-top: 30px;margin-left: 60px;}
//                             55%{margin-top: 55px;margin-left: 55px;}
//                             60%{margin-top: 60px;margin-left: 30px;}
//                             65%{margin-top: 40px;margin-left: 25px;}
//                             70%{margin-top: 10px;margin-left: 12px;}
//                             75%{margin-top: 45px;margin-left: 15px;}
//                             80%{margin-top: 40px;margin-left: 55px;}
//                             85%{margin-top: 0px;margin-left: 30px;}
//                             90%{margin-top: 55px;margin-left: 25px;}
//                             95%{margin-top: 30px;margin-left: 30px;}
//                             100%{margin-top: 58px;margin-left: 28px;background-position: 100%;}

//                         }
//                         #ballsss8 {
//                             animation: spinStats8 5s linear infinite alternate;
//                             -webkit-animation: spinStats8 5s linear infinite alternate;
//                         }
//                         `;
//                 ball8.appendChild(keyFramesw);
//                 //=========================blue balls9====================================
//                 document.getElementById("ballsss9").style.animationName = "spinStats9";
//                 var ball9 = document.querySelector('#ballsss9');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats9 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 45px;margin-left: 15px;}
//                             10%{margin-top: 55px;margin-left: 15px;}
//                             15%{margin-top: 60px;margin-left: 30px;}
//                             20%{margin-top: 45px;margin-left: 40px;}
//                             25%{margin-top: 55px;margin-left: 25px;}
//                             30%{margin-top: 10px;margin-left: 25px;}
//                             35%{margin-top: 45px;margin-left: 45px;}
//                             40%{margin-top: 60px;margin-left: 30px;}
//                             45%{margin-top: 30px;margin-left: 0px;}
//                             50%{margin-top: 10px;margin-left: 25px;}
//                             55%{margin-top: 40px;margin-left: 35px;}
//                             60%{margin-top: 55px;margin-left: 25px;}
//                             65%{margin-top: 60px;margin-left: 33px;}
//                             70%{margin-top: 40px;margin-left: 40px;}
//                             75%{margin-top: 15px;margin-left: 20px;}
//                             80%{margin-top: 30px;margin-left: 15px;}
//                             85%{margin-top: 60px;margin-left: 30px;}
//                             90%{margin-top: 0px;margin-left: 30px;}
//                             95%{margin-top: 30px;margin-left: 0px;}
//                             100%{margin-top: 61px;margin-left: 35px;background-position: 100%;}

//                         }
//                         #ballsss9 {
//                             animation: spinStats9 5s linear infinite alternate;
//                             -webkit-animation: spinStats9 5s linear infinite alternate;
//                         }
//                         `;
//                 ball9.appendChild(keyFramesw);
//                 //=========================blue balls0====================================
//                 document.getElementById("ballsss0").style.animationName = "spinStats0";
//                 var ball0 = document.querySelector('#ballsss0');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats0 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 50px;margin-left: 15px;}
//                             10%{margin-top: 45px;margin-left: 20px;}
//                             15%{margin-top: 20px;margin-left: 15px;}
//                             20%{margin-top: 0px;margin-left: 30px;}
//                             25%{margin-top: 20px;margin-left: 38px;}
//                             30%{margin-top: 35px;margin-left: 40px;}
//                             35%{margin-top: 45px;margin-left: 45px;}
//                             40%{margin-top: 58px;margin-left: 50px;}
//                             45%{margin-top: 30px;margin-left: 0px;}
//                             50%{margin-top: 0px;margin-left: 30px;}
//                             55%{margin-top: 57px;margin-left: 28px;}
//                             60%{margin-top: 15px;margin-left: 35px;}
//                             65%{margin-top: 40px;margin-left: 20px;}
//                             70%{margin-top: 15px;margin-left: 35px;}
//                             75%{margin-top: 60px;margin-left: 30px;}
//                             80%{margin-top: 50px;margin-left: 15px;}
//                             85%{margin-top: 10px;margin-left: 40px;}
//                             90%{margin-top: 40px;margin-left: 23px;}
//                             95%{margin-top: 20px;margin-left: 30px;}
//                             100%{margin-top: 58px;margin-left: 28px;background-position: 100%;}

//                         }
//                         #ballsss0 {
//                             animation: spinStats0 5s linear infinite alternate;
//                             -webkit-animation: spinStats0 5s linear infinite alternate;
//                         }
//                         `;
//                 ball0.appendChild(keyFramesw);
//                 psound=parseInt(document.getElementById("pSound").innerHTML);
//                 if(psound==2){
//                     puaseplay();
//                 }else{
//                     play();
//                 }
//             }
//             if (cnt == 94) {
//                 var result13 = Math.floor(Math.random() * 10);
//                 document.getElementById("boxball3").innerHTML = result13;
//                 document.getElementById("boxBall3").style.animation = "";
//                 document.getElementById("ballsss0").style.animationName = "anib0";
//                 document.getElementById("ballsss9").style.animationName = "anib9";
//                 document.getElementById("ballsss8").style.animationName = "anib8";
//                 document.getElementById("ballsss7").style.animationName = "anib7";
//                 document.getElementById("ballsss6").style.animationName = "anib6";
//                 document.getElementById("ballsss5").style.animationName = "anib5";
//                 document.getElementById("ballsss4").style.animationName = "anib4";
//                 document.getElementById("ballsss3").style.animationName = "anib3";
//                 document.getElementById("ballsss2").style.animationName = "anib2";
//                 document.getElementById("ballsss1").style.animationName = "anib1";
//                 document.getElementById("imgspin3").style.animation = "none";
//                 var runball = document.querySelector('#boxBall3');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes run12 {
//                             from {
//                                 height: 60px;
//                                 width: 60px;
//                                 margin-top: 0px;
//                                 margin-left: 80px;
//                                 opacity: 1;
//                             }
//                             to {
//                                 margin-top: 80px;
//                                 margin-left: 220px;
//                                 height: 40px;
//                                 width: 40px;
//                                 z-index: 1;
//                                 opacity: 0;
//                             }
//                         }
//                         #boxBall3 {
//                             animation: run12 1s linear infinite;
//                             -webkit-animation: run12 1s linear infinite;
//                         }
//                         `;
//                 runball.appendChild(keyFramesw);
//                 psound=parseInt(document.getElementById("pSound").innerHTML);
//                 if(psound==2){
//                    puase1(); 
//                 }else{
//                     play1();
//                 }
//             }
//             /*14*/
//             if (cnt == 96) {
//                 document.getElementById("boxBall2").style.animation = "none";
//                 var result12 = document.getElementById("boxball2").innerHTML;
//                 document.getElementById("nums12").innerHTML = result12;
//                 document.getElementById("imgspin4").style.animation = "";
//                 var spinball = document.querySelector('#imgspin4');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spin2 {
//                             from {
//                                 transform: rotate(0deg);
//                                 -webkit-transform: rotate(0deg);
//                             }
//                             to {
//                                 transform: rotate(360deg);
//                                 -webkit-transform: rotate(360deg);
//                             }
//                         }
//                         #imgspin4 {
//                             animation: spin2 0.8s linear infinite;
//                             -webkit-animation: spin2 0.8s linear infinite;
//                         }
//                         `;
//                 spinball.appendChild(keyFramesw);
//                 // =========================blue ball1====================================
//                 document.getElementById("ballssss1").style.animationName = "spinStat1";
//                 var balls1 = document.querySelector('#ballssss1');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat1 {
//                             0%{margin-top: 60px;margin-left: 50px;}
//                             5%{margin-top: 30px;margin-left: 0px;}
//                             10%{margin-top: 50px;margin-left: 20px;}
//                             15%{margin-top: 0px;margin-left: 30px;}
//                             20%{margin-top: 60px;margin-left: 40px;}
//                             25%{margin-top: 50px;margin-left: 40px;}
//                             30%{margin-top: 10px;margin-left: 20px;}
//                             35%{margin-top: 0px;margin-left: 20px;}
//                             40%{margin-top: 30px;margin-left: 60px;}
//                             45%{margin-top: 10px;margin-left: 40px;}
//                             50%{margin-top: 63px;margin-left: 30px;}
//                             55{margin-top: 10px;margin-left: 35px;}
//                             60%{margin-top: 33px;margin-left: 0px;}
//                             65%{margin-top: 10px;margin-left: 30px;}
//                             70%{margin-top: 0px;margin-left: 25px;}
//                             75%{margin-top: 20px;margin-left: 20px;}
//                             80%{margin-top: 20px;margin-left: 40px;}
//                             85%{margin-top:20px;margin-left: 12px;}
//                             90%{margin-top: 50px;margin-left: 20px;}
//                             95%{margin-top: 0px;margin-left: 35px;}
//                             100%{margin-top: 27px;margin-left: 33px;background-position: 100%;}
//                         }
//                         #ballssss1 {
//                             animation: spinStat1 5s linear infinite alternate;
//                             -webkit-animation: spinstat1 5s linear infinite alternate;
//                         }
//                         `;
//                 balls1.appendChild(keyFramesw);
//                 // =========================blue balls2====================================
//                 document.getElementById("ballssss2").style.animationName = "spinStats2";
//                 var ball2 = document.querySelector('#ballssss2');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats2 {
//                             0%{margin-top: 60px;margin-left: 31px;}
//                                 5%{margin-top: 8px;margin-left: 30px;}
//                                 10%{margin-top: 30px;margin-left: 50px;}
//                                 15%{margin-top: 20px;margin-left: 10px;}
//                                 20%{margin-top: 50px;margin-left: 30px;}
//                                 25%{margin-top: 0px;margin-left: 30px;}
//                                 30%{margin-top: 60px;margin-left: 30px;}
//                                 35%{margin-top: 0px;margin-left: 30px;}
//                                 40%{margin-top: 30px;margin-left: 10px;}
//                                 45%{margin-top: 30px;margin-left: 60px;}
//                                 50%{margin-top: 63px;margin-left: 30px;}
//                                 55%{margin-top: 10px;margin-left: 45px;}
//                                 60%{margin-top: 55px;margin-left: 10px;}
//                                 65%{margin-top: 20px;margin-left: 35px;}
//                                 70%{margin-top: 45px;margin-left: 60px;}
//                                 75%{margin-top: 10px;margin-left: 49px;}
//                                 80%{margin-top: 48px;margin-left: 50px;}
//                                 85%{margin-top: 18px;margin-left: 30px;}
//                                 90%{margin-top: 20px;margin-left: 10px;}
//                                 95%{margin-top: 0px;margin-left: 30px;}
//                                 100%{margin-top: 63px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballssss2 {
//                             animation: spinStats2 5s linear infinite alternate;
//                             -webkit-animation: spinStats2 5s linear infinite alternate;
//                         }
//                         `;
//                 ball2.appendChild(keyFramesw);
//                 // =========================blue balls3====================================
//                 document.getElementById("ballssss3").style.animationName = "spinStats3";
//                 var ball3 = document.querySelector('#ballssss3');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats3 {
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 30px;margin-left: 0px;}
//                             10%{margin-top: 0px;margin-left: 30px;}
//                             15%{margin-top: 30px;margin-left: 60px;}
//                             20%{margin-top: 60px;margin-left: 30px;}
//                             25%{margin-top: 0px;margin-left: 27px;}
//                             30%{margin-top: 20px;margin-left: 50px;}
//                             35%{margin-top: 60px;margin-left: 30px;}
//                             40%{margin-top: 30px;margin-left: 15px;}
//                             45%{margin-top: 45px;margin-left: 45px;}
//                             50%{margin-top: 10px;margin-left: 50px;}
//                             55%{margin-top: 55px;margin-left: 30px;}
//                             60%{margin-top: 30px;margin-left: 20px;}
//                             65%{margin-top: 60px;margin-left: 30px;}
//                             70%{margin-top: 40px;margin-left: 15px;}
//                             75%{margin-top: 15px;margin-left: 30px;}
//                             80%{margin-top: 18px;margin-left: 20px;}
//                             85%{margin-top: 20px;margin-left: 60px;}
//                             90%{margin-top: 60px;margin-left: 30px;}
//                             95%{margin-top: 10px;margin-left: 35px;}
//                             100%{margin-top: 63px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballssss3 {
//                             animation: spinStats3 5s linear infinite alternate;
//                             -webkit-animation: spinStats3 5s linear infinite alternate;
//                         }
//                         `;
//                 ball3.appendChild(keyFramesw);
//                 // =========================blue balls4====================================
//                 document.getElementById("ballssss4").style.animationName = "spinStats4";
//                 var ball4 = document.querySelector('#ballssss4');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats4 {
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 15px;margin-left: 30px;}
//                             10%{margin-top: 40px;margin-left: 50px;}
//                             15%{margin-top: 60px;margin-left: 30px;}
//                             20%{margin-top: 50px;margin-left: 50px;}
//                             25%{margin-top: 6px;margin-left: 30px;}
//                             30%{margin-top: 45px;margin-left: 20px;}
//                             35%{margin-top: 15px;margin-left: 20px;}
//                             40%{margin-top: 0px;margin-left: 30px;}
//                             45%{margin-top: 20px;margin-left: 50px;}
//                             50%{margin-top: 35px;margin-left: 60px;}
//                             55%{margin-top: 55px;margin-left: 45px;}
//                             60%{margin-top: 60px;margin-left: 30px;}
//                             65%{margin-top: 0px;margin-left: 30px;}
//                             70%{margin-top: 60px;margin-left: 30px;}
//                             75%{margin-top: 15px;margin-left: 25px;}
//                             80%{margin-top: 55px;margin-left: 20px;}
//                             85%{margin-top: 0px;margin-left: 30px;}
//                             90%{margin-top: 55px;margin-left: 27px;}
//                             95%{margin-top: 20px;margin-left: 58px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballssss4 {
//                             animation: spinStats4 5s linear infinite alternate;
//                             -webkit-animation: spinStats4 5s linear infinite alternate;
//                         }
//                         `;
//                 ball4.appendChild(keyFramesw);
//                 // =========================blue balls5====================================
//                 document.getElementById("ballssss5").style.animationName = "spinStats5";
//                 var ball5 = document.querySelector('#ballssss5');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats5 { 
//                             0%{margin-top: 60px;margin-left: 35px;}
//                             5%{margin-top: 40px;margin-left: 50px;}
//                             10%{margin-top: 60px;margin-left: 30px;}
//                             15%{margin-top: 30px;margin-left: 0px;}
//                             20%{margin-top: 20px;margin-left: 20px;}
//                             25%{margin-top: 0px;margin-left: 30px;}
//                             30%{margin-top: 60px;margin-left: 30px;}
//                             35%{margin-top: 40px;margin-left: 25px;}
//                             40%{margin-top: 60px;margin-left: 30px;}
//                             45%{margin-top: 10px;margin-left: 30px;}
//                             50%{margin-top: 30px;margin-left: 60px;}
//                             55%{margin-top: 60px;margin-left: 35px;}
//                             60%{margin-top: 0px;margin-left: 30px;}
//                             65%{margin-top: 15px;margin-left: 25px;}
//                             70%{margin-top: 20px;margin-left: 50px;}
//                             75%{margin-top: 35px;margin-left: 0px;}
//                             80%{margin-top: 12px;margin-left: 20px;}
//                             85%{margin-top: 0px;margin-left: 35px;}
//                             90%{margin-top: 60px;margin-left: 30px;}
//                             95%{margin-top: 30px;margin-left: 60px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}

//                         }
//                         #ballssss5 {
//                             animation: spinStats5 5s linear infinite alternate;
//                             -webkit-animation: spinStats5 5s linear infinite alternate;
//                         }
//                         `;
//                 ball5.appendChild(keyFramesw);
//                 //=========================blue balls6====================================
//                 document.getElementById("ballssss6").style.animationName = "spinStats6";
//                 var ball6 = document.querySelector('#ballssss6');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats6 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 0px;margin-left: 30px;}
//                             10%{margin-top: 10px;margin-left: 45px;}
//                             15%{margin-top: 60px;margin-left: 28px;}
//                             20%{margin-top: 10px;margin-left: 25px;}
//                             25%{margin-top: 30px;margin-left: 0px;}
//                             30%{margin-top: 0px;margin-left: 30px;}
//                             35%{margin-top: 44px;margin-left: 44px;}
//                             40%{margin-top: 60px;margin-left: 30x;}
//                             45%{margin-top: 40px;margin-left: 30px;}
//                             50%{margin-top: 20px;margin-left: 45px;}
//                             55%{margin-top: 40px;margin-left: 40px;}
//                             60%{margin-top: 55px;margin-left: 35px;}
//                             65%{margin-top: 50px;margin-left: 30px;}
//                             70%{margin-top: 0px;margin-left: 30px;}
//                             75%{margin-top: 60px;margin-left: 10px;}
//                             80%{margin-top: 30px;margin-left: 60px;}
//                             85%{margin-top: 25px;margin-left: 55px;}
//                             90%{margin-top: 5px;margin-left: 40px;}
//                             95%{margin-top: 20px;margin-left: 25x;}
//                             100%{margin-top: 60px;margin-left: 31px;background-position: 100%;}

//                         }
//                         #ballssss6 {
//                             animation: spinStats6 5s linear infinite alternate;
//                             -webkit-animation: spinStats6 5s linear infinite alternate;
//                         }
//                         `;
//                 ball6.appendChild(keyFramesw);
//                 //=========================blue balls7====================================
//                 document.getElementById("ballssss7").style.animationName = "spinStats7";
//                 var ball7 = document.querySelector('#ballssss7');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats7 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 40px;margin-left: 20px;}
//                             10%{margin-top: 30px;margin-left: 0px;}
//                             15%{margin-top: 25px;margin-left: 20px;}
//                             20%{margin-top: 0px;margin-left: 30px;}
//                             25%{margin-top: 25px;margin-left: 40px;}
//                             30%{margin-top: 50px;margin-left: 40px;}
//                             35%{margin-top: 60px;margin-left: 30px;}
//                             40%{margin-top: 0px;margin-left: 30px;}
//                             45%{margin-top: 55px;margin-left: 10px;}
//                             50%{margin-top: 15px;margin-left: 20px;}
//                             55%{margin-top: 25px;margin-left: 45px;}
//                             60%{margin-top: 50px;margin-left: 15px;}
//                             65%{margin-top: 20px;margin-left: 50px;}
//                             70%{margin-top: 0px;margin-left: 30px;}
//                             75%{margin-top: 15px;margin-left: 25px;}
//                             80%{margin-top: 50px;margin-left: 35px;}
//                             85%{margin-top: 10px;margin-left: 35px;}
//                             90%{margin-top: 45px;margin-left: 15px;}
//                             95%{margin-top: 60px;margin-left: 30px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}

//                         }
//                         #ballssss7 {
//                             animation: spinStats7 5s linear infinite alternate;
//                             -webkit-animation: spinStats7 5s linear infinite alternate;
//                         }
//                         `;
//                 ball7.appendChild(keyFramesw);
//                 //=========================blue balls8====================================
//                 document.getElementById("ballssss8").style.animationName = "spinStats8";
//                 var ball8 = document.querySelector('#ballssss8');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats8 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 15px;margin-left: 50px;}
//                             10%{margin-top: 55px;margin-left: 30px;}
//                             15%{margin-top: 40px;margin-left: 23px;}
//                             20%{margin-top: 25px;margin-left: 35px;}
//                             25%{margin-top: 40px;margin-left: 40px;}
//                             30%{margin-top: 60px;margin-left: 30px;}
//                             35%{margin-top: 45px;margin-left: 10px;}
//                             40%{margin-top: 55px;margin-left: 25px;}
//                             45%{margin-top: 15px;margin-left: 27px;}
//                             50%{margin-top: 30px;margin-left: 60px;}
//                             55%{margin-top: 55px;margin-left: 55px;}
//                             60%{margin-top: 60px;margin-left: 30px;}
//                             65%{margin-top: 40px;margin-left: 25px;}
//                             70%{margin-top: 10px;margin-left: 12px;}
//                             75%{margin-top: 45px;margin-left: 15px;}
//                             80%{margin-top: 40px;margin-left: 55px;}
//                             85%{margin-top: 0px;margin-left: 30px;}
//                             90%{margin-top: 55px;margin-left: 25px;}
//                             95%{margin-top: 30px;margin-left: 30px;}
//                             100%{margin-top: 58px;margin-left: 28px;background-position: 100%;}

//                         }
//                         #ballssss8 {
//                             animation: spinStats8 5s linear infinite alternate;
//                             -webkit-animation: spinStats8 5s linear infinite alternate;
//                         }
//                         `;
//                 ball8.appendChild(keyFramesw);
//                 //=========================blue balls9====================================
//                 document.getElementById("ballssss9").style.animationName = "spinStats9";
//                 var ball9 = document.querySelector('#ballssss9');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats9 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 45px;margin-left: 15px;}
//                             10%{margin-top: 55px;margin-left: 15px;}
//                             15%{margin-top: 60px;margin-left: 30px;}
//                             20%{margin-top: 45px;margin-left: 40px;}
//                             25%{margin-top: 55px;margin-left: 25px;}
//                             30%{margin-top: 10px;margin-left: 25px;}
//                             35%{margin-top: 45px;margin-left: 45px;}
//                             40%{margin-top: 60px;margin-left: 30px;}
//                             45%{margin-top: 30px;margin-left: 0px;}
//                             50%{margin-top: 10px;margin-left: 25px;}
//                             55%{margin-top: 40px;margin-left: 35px;}
//                             60%{margin-top: 55px;margin-left: 25px;}
//                             65%{margin-top: 60px;margin-left: 33px;}
//                             70%{margin-top: 40px;margin-left: 40px;}
//                             75%{margin-top: 15px;margin-left: 20px;}
//                             80%{margin-top: 30px;margin-left: 15px;}
//                             85%{margin-top: 60px;margin-left: 30px;}
//                             90%{margin-top: 0px;margin-left: 30px;}
//                             95%{margin-top: 30px;margin-left: 0px;}
//                             100%{margin-top: 61px;margin-left: 35px;background-position: 100%;}

//                         }
//                         #ballssss9 {
//                             animation: spinStats9 5s linear infinite alternate;
//                             -webkit-animation: spinStats9 5s linear infinite alternate;
//                         }
//                         `;
//                 ball9.appendChild(keyFramesw);
//                 //=========================blue balls0====================================
//                 document.getElementById("ballssss0").style.animationName = "spinStats0";
//                 var ball0 = document.querySelector('#ballssss0');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats0 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 50px;margin-left: 15px;}
//                             10%{margin-top: 45px;margin-left: 20px;}
//                             15%{margin-top: 20px;margin-left: 15px;}
//                             20%{margin-top: 0px;margin-left: 30px;}
//                             25%{margin-top: 20px;margin-left: 38px;}
//                             30%{margin-top: 35px;margin-left: 40px;}
//                             35%{margin-top: 45px;margin-left: 45px;}
//                             40%{margin-top: 58px;margin-left: 50px;}
//                             45%{margin-top: 30px;margin-left: 0px;}
//                             50%{margin-top: 0px;margin-left: 30px;}
//                             55%{margin-top: 57px;margin-left: 28px;}
//                             60%{margin-top: 15px;margin-left: 35px;}
//                             65%{margin-top: 40px;margin-left: 20px;}
//                             70%{margin-top: 15px;margin-left: 35px;}
//                             75%{margin-top: 60px;margin-left: 30px;}
//                             80%{margin-top: 50px;margin-left: 15px;}
//                             85%{margin-top: 10px;margin-left: 40px;}
//                             90%{margin-top: 40px;margin-left: 23px;}
//                             95%{margin-top: 20px;margin-left: 30px;}
//                             100%{margin-top: 58px;margin-left: 28px;background-position: 100%;}

//                         }
//                         #ballssss0 {
//                             animation: spinStats0 5s linear infinite alternate;
//                             -webkit-animation: spinStats0 5s linear infinite alternate;
//                         }
//                         `;
//                 ball0.appendChild(keyFramesw);
//                 psound=parseInt(document.getElementById("pSound").innerHTML);
//                 if(psound==2){
//                     puaseplay();
//                 }else{
//                     play();
//                 }
//             }
//             if (cnt == 91) {
//                 var result14 = Math.floor(Math.random() * 10);
//                 document.getElementById("boxball4").innerHTML = result14;
//                 document.getElementById("boxBall4").style.animation = "";
//                 document.getElementById("ballssss0").style.animationName = "anib0";
//                 document.getElementById("ballssss9").style.animationName = "anib9";
//                 document.getElementById("ballssss8").style.animationName = "anib8";
//                 document.getElementById("ballssss7").style.animationName = "anib7";
//                 document.getElementById("ballssss6").style.animationName = "anib6";
//                 document.getElementById("ballssss5").style.animationName = "anib5";
//                 document.getElementById("ballssss4").style.animationName = "anib4";
//                 document.getElementById("ballssss3").style.animationName = "anib3";
//                 document.getElementById("ballssss2").style.animationName = "anib2";
//                 document.getElementById("ballssss1").style.animationName = "anib1";
//                 document.getElementById("imgspin4").style.animation = "none";
//                 var runball = document.querySelector('#boxBall4');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes run13 {
//                             from {
//                                 height: 60px;
//                                 width: 60px;
//                                 margin-top: 0px;
//                                 margin-left: 80px;
//                                 opacity: 1;
//                             }
//                             to {
//                                 margin-top: 80px;
//                                 margin-left: 30px;
//                                 height: 40px;
//                                 width: 40px;
//                                 z-index: 1;
//                                 opacity: 0;

//                             }
//                         }
//                         #boxBall4 {
//                             animation: run13 1s linear infinite;
//                             -webkit-animation: run13 1s linear infinite;
//                         }
//                         `;
//                 runball.appendChild(keyFramesw);
//                 psound=parseInt(document.getElementById("pSound").innerHTML);
//                 if(psound==2){
//                     puase1();
//                 }else{
//                     play1();
//                 }
//             }
//             /*15*/
//             if (cnt == 93) {
//                 document.getElementById("boxBall3").style.animation = "none";
//                 var result13 = document.getElementById("boxball3").innerHTML;
//                 document.getElementById("nums13").innerHTML = result13;
//                 document.getElementById("imgspin5").style.animation = "";
//                 var spinball = document.querySelector('#imgspin5');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spin2 {
//                             from {
//                                 transform: rotate(0deg);
//                                 -webkit-transform: rotate(0deg);
//                             }
//                             to {
//                                 transform: rotate(360deg);
//                                 -webkit-transform: rotate(360deg);
//                             }
//                         }
//                         #imgspin5 {
//                             animation: spin2 0.8s linear infinite;
//                             -webkit-animation: spin2 0.8s linear infinite;
//                         }
//                         `;
//                 spinball.appendChild(keyFramesw);
//                 // =========================blue ball1====================================
//                 document.getElementById("ballsssss1").style.animationName = "spinStat1";
//                 var balls1 = document.querySelector('#ballsssss1');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat1 {
//                             0%{margin-top: 60px;margin-left: 50px;}
//                             5%{margin-top: 30px;margin-left: 0px;}
//                             10%{margin-top: 50px;margin-left: 20px;}
//                             15%{margin-top: 0px;margin-left: 30px;}
//                             20%{margin-top: 60px;margin-left: 40px;}
//                             25%{margin-top: 50px;margin-left: 40px;}
//                             30%{margin-top: 10px;margin-left: 20px;}
//                             35%{margin-top: 0px;margin-left: 20px;}
//                             40%{margin-top: 30px;margin-left: 60px;}
//                             45%{margin-top: 10px;margin-left: 40px;}
//                             50%{margin-top: 63px;margin-left: 30px;}
//                             55{margin-top: 10px;margin-left: 35px;}
//                             60%{margin-top: 33px;margin-left: 0px;}
//                             65%{margin-top: 10px;margin-left: 30px;}
//                             70%{margin-top: 0px;margin-left: 25px;}
//                             75%{margin-top: 20px;margin-left: 20px;}
//                             80%{margin-top: 20px;margin-left: 40px;}
//                             85%{margin-top:20px;margin-left: 12px;}
//                             90%{margin-top: 50px;margin-left: 20px;}
//                             95%{margin-top: 0px;margin-left: 35px;}
//                             100%{margin-top: 27px;margin-left: 33px;background-position: 100%;}
//                         }
//                         #ballsssss1 {
//                             animation: spinStat1 5s linear infinite alternate;
//                             -webkit-animation: spinstat1 5s linear infinite alternate;
//                         }
//                         `;
//                 balls1.appendChild(keyFramesw);
//                 // =========================blue balls2====================================
//                 document.getElementById("ballsssss2").style.animationName = "spinStats2";
//                 var ball2 = document.querySelector('#ballsssss2');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats2 {
//                             0%{margin-top: 60px;margin-left: 31px;}
//                                 5%{margin-top: 8px;margin-left: 30px;}
//                                 10%{margin-top: 30px;margin-left: 50px;}
//                                 15%{margin-top: 20px;margin-left: 10px;}
//                                 20%{margin-top: 50px;margin-left: 30px;}
//                                 25%{margin-top: 0px;margin-left: 30px;}
//                                 30%{margin-top: 60px;margin-left: 30px;}
//                                 35%{margin-top: 0px;margin-left: 30px;}
//                                 40%{margin-top: 30px;margin-left: 10px;}
//                                 45%{margin-top: 30px;margin-left: 60px;}
//                                 50%{margin-top: 63px;margin-left: 30px;}
//                                 55%{margin-top: 10px;margin-left: 45px;}
//                                 60%{margin-top: 55px;margin-left: 10px;}
//                                 65%{margin-top: 20px;margin-left: 35px;}
//                                 70%{margin-top: 45px;margin-left: 60px;}
//                                 75%{margin-top: 10px;margin-left: 49px;}
//                                 80%{margin-top: 48px;margin-left: 50px;}
//                                 85%{margin-top: 18px;margin-left: 30px;}
//                                 90%{margin-top: 20px;margin-left: 10px;}
//                                 95%{margin-top: 0px;margin-left: 30px;}
//                                 100%{margin-top: 63px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballsssss2 {
//                             animation: spinStats2 5s linear infinite alternate;
//                             -webkit-animation: spinStats2 5s linear infinite alternate;
//                         }
//                         `;
//                 ball2.appendChild(keyFramesw);
//                 // =========================blue balls3====================================
//                 document.getElementById("ballsssss3").style.animationName = "spinStats3";
//                 var ball3 = document.querySelector('#ballsssss3');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats3 {
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 30px;margin-left: 0px;}
//                             10%{margin-top: 0px;margin-left: 30px;}
//                             15%{margin-top: 30px;margin-left: 60px;}
//                             20%{margin-top: 60px;margin-left: 30px;}
//                             25%{margin-top: 0px;margin-left: 27px;}
//                             30%{margin-top: 20px;margin-left: 50px;}
//                             35%{margin-top: 60px;margin-left: 30px;}
//                             40%{margin-top: 30px;margin-left: 15px;}
//                             45%{margin-top: 45px;margin-left: 45px;}
//                             50%{margin-top: 10px;margin-left: 50px;}
//                             55%{margin-top: 55px;margin-left: 30px;}
//                             60%{margin-top: 30px;margin-left: 20px;}
//                             65%{margin-top: 60px;margin-left: 30px;}
//                             70%{margin-top: 40px;margin-left: 15px;}
//                             75%{margin-top: 15px;margin-left: 30px;}
//                             80%{margin-top: 18px;margin-left: 20px;}
//                             85%{margin-top: 20px;margin-left: 60px;}
//                             90%{margin-top: 60px;margin-left: 30px;}
//                             95%{margin-top: 10px;margin-left: 35px;}
//                             100%{margin-top: 63px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballsssss3 {
//                             animation: spinStats3 5s linear infinite alternate;
//                             -webkit-animation: spinStats3 5s linear infinite alternate;
//                         }
//                         `;
//                 ball3.appendChild(keyFramesw);
//                 // =========================blue balls4====================================
//                 document.getElementById("ballsssss4").style.animationName = "spinStats4";
//                 var ball4 = document.querySelector('#ballsssss4');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats4 {
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 15px;margin-left: 30px;}
//                             10%{margin-top: 40px;margin-left: 50px;}
//                             15%{margin-top: 60px;margin-left: 30px;}
//                             20%{margin-top: 50px;margin-left: 50px;}
//                             25%{margin-top: 6px;margin-left: 30px;}
//                             30%{margin-top: 45px;margin-left: 20px;}
//                             35%{margin-top: 15px;margin-left: 20px;}
//                             40%{margin-top: 0px;margin-left: 30px;}
//                             45%{margin-top: 20px;margin-left: 50px;}
//                             50%{margin-top: 35px;margin-left: 60px;}
//                             55%{margin-top: 55px;margin-left: 45px;}
//                             60%{margin-top: 60px;margin-left: 30px;}
//                             65%{margin-top: 0px;margin-left: 30px;}
//                             70%{margin-top: 60px;margin-left: 30px;}
//                             75%{margin-top: 15px;margin-left: 25px;}
//                             80%{margin-top: 55px;margin-left: 20px;}
//                             85%{margin-top: 0px;margin-left: 30px;}
//                             90%{margin-top: 55px;margin-left: 27px;}
//                             95%{margin-top: 20px;margin-left: 58px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballsssss4 {
//                             animation: spinStats4 5s linear infinite alternate;
//                             -webkit-animation: spinStats4 5s linear infinite alternate;
//                         }
//                         `;
//                 ball4.appendChild(keyFramesw);
//                 // =========================blue balls5====================================
//                 document.getElementById("ballsssss5").style.animationName = "spinStats5";
//                 var ball5 = document.querySelector('#ballsssss5');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats5 { 
//                             0%{margin-top: 60px;margin-left: 35px;}
//                             5%{margin-top: 40px;margin-left: 50px;}
//                             10%{margin-top: 60px;margin-left: 30px;}
//                             15%{margin-top: 30px;margin-left: 0px;}
//                             20%{margin-top: 20px;margin-left: 20px;}
//                             25%{margin-top: 0px;margin-left: 30px;}
//                             30%{margin-top: 60px;margin-left: 30px;}
//                             35%{margin-top: 40px;margin-left: 25px;}
//                             40%{margin-top: 60px;margin-left: 30px;}
//                             45%{margin-top: 10px;margin-left: 30px;}
//                             50%{margin-top: 30px;margin-left: 60px;}
//                             55%{margin-top: 60px;margin-left: 35px;}
//                             60%{margin-top: 0px;margin-left: 30px;}
//                             65%{margin-top: 15px;margin-left: 25px;}
//                             70%{margin-top: 20px;margin-left: 50px;}
//                             75%{margin-top: 35px;margin-left: 0px;}
//                             80%{margin-top: 12px;margin-left: 20px;}
//                             85%{margin-top: 0px;margin-left: 35px;}
//                             90%{margin-top: 60px;margin-left: 30px;}
//                             95%{margin-top: 30px;margin-left: 60px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}

//                         }
//                         #ballsssss5 {
//                             animation: spinStats5 5s linear infinite alternate;
//                             -webkit-animation: spinStats5 5s linear infinite alternate;
//                         }
//                         `;
//                 ball5.appendChild(keyFramesw);
//                 //=========================blue balls6====================================
//                 document.getElementById("ballsssss6").style.animationName = "spinStats6";
//                 var ball6 = document.querySelector('#ballsssss6');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats6 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 0px;margin-left: 30px;}
//                             10%{margin-top: 10px;margin-left: 45px;}
//                             15%{margin-top: 60px;margin-left: 28px;}
//                             20%{margin-top: 10px;margin-left: 25px;}
//                             25%{margin-top: 30px;margin-left: 0px;}
//                             30%{margin-top: 0px;margin-left: 30px;}
//                             35%{margin-top: 44px;margin-left: 44px;}
//                             40%{margin-top: 60px;margin-left: 30x;}
//                             45%{margin-top: 40px;margin-left: 30px;}
//                             50%{margin-top: 20px;margin-left: 45px;}
//                             55%{margin-top: 40px;margin-left: 40px;}
//                             60%{margin-top: 55px;margin-left: 35px;}
//                             65%{margin-top: 50px;margin-left: 30px;}
//                             70%{margin-top: 0px;margin-left: 30px;}
//                             75%{margin-top: 60px;margin-left: 10px;}
//                             80%{margin-top: 30px;margin-left: 60px;}
//                             85%{margin-top: 25px;margin-left: 55px;}
//                             90%{margin-top: 5px;margin-left: 40px;}
//                             95%{margin-top: 20px;margin-left: 25x;}
//                             100%{margin-top: 60px;margin-left: 31px;background-position: 100%;}

//                         }
//                         #ballsssss6 {
//                             animation: spinStats6 5s linear infinite alternate;
//                             -webkit-animation: spinStats6 5s linear infinite alternate;
//                         }
//                         `;
//                 ball6.appendChild(keyFramesw);
//                 //=========================blue balls7====================================
//                 document.getElementById("ballsssss7").style.animationName = "spinStats7";
//                 var ball7 = document.querySelector('#ballsssss7');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats7 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 40px;margin-left: 20px;}
//                             10%{margin-top: 30px;margin-left: 0px;}
//                             15%{margin-top: 25px;margin-left: 20px;}
//                             20%{margin-top: 0px;margin-left: 30px;}
//                             25%{margin-top: 25px;margin-left: 40px;}
//                             30%{margin-top: 50px;margin-left: 40px;}
//                             35%{margin-top: 60px;margin-left: 30px;}
//                             40%{margin-top: 0px;margin-left: 30px;}
//                             45%{margin-top: 55px;margin-left: 10px;}
//                             50%{margin-top: 15px;margin-left: 20px;}
//                             55%{margin-top: 25px;margin-left: 45px;}
//                             60%{margin-top: 50px;margin-left: 15px;}
//                             65%{margin-top: 20px;margin-left: 50px;}
//                             70%{margin-top: 0px;margin-left: 30px;}
//                             75%{margin-top: 15px;margin-left: 25px;}
//                             80%{margin-top: 50px;margin-left: 35px;}
//                             85%{margin-top: 10px;margin-left: 35px;}
//                             90%{margin-top: 45px;margin-left: 15px;}
//                             95%{margin-top: 60px;margin-left: 30px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}

//                         }
//                         #ballsssss7 {
//                             animation: spinStats7 5s linear infinite alternate;
//                             -webkit-animation: spinStats7 5s linear infinite alternate;
//                         }
//                         `;
//                 ball7.appendChild(keyFramesw);
//                 //=========================blue balls8====================================
//                 document.getElementById("ballsssss8").style.animationName = "spinStats8";
//                 var ball8 = document.querySelector('#ballsssss8');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats8 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 15px;margin-left: 50px;}
//                             10%{margin-top: 55px;margin-left: 30px;}
//                             15%{margin-top: 40px;margin-left: 23px;}
//                             20%{margin-top: 25px;margin-left: 35px;}
//                             25%{margin-top: 40px;margin-left: 40px;}
//                             30%{margin-top: 60px;margin-left: 30px;}
//                             35%{margin-top: 45px;margin-left: 10px;}
//                             40%{margin-top: 55px;margin-left: 25px;}
//                             45%{margin-top: 15px;margin-left: 27px;}
//                             50%{margin-top: 30px;margin-left: 60px;}
//                             55%{margin-top: 55px;margin-left: 55px;}
//                             60%{margin-top: 60px;margin-left: 30px;}
//                             65%{margin-top: 40px;margin-left: 25px;}
//                             70%{margin-top: 10px;margin-left: 12px;}
//                             75%{margin-top: 45px;margin-left: 15px;}
//                             80%{margin-top: 40px;margin-left: 55px;}
//                             85%{margin-top: 0px;margin-left: 30px;}
//                             90%{margin-top: 55px;margin-left: 25px;}
//                             95%{margin-top: 30px;margin-left: 30px;}
//                             100%{margin-top: 58px;margin-left: 28px;background-position: 100%;}

//                         }
//                         #ballsssss8 {
//                             animation: spinStats8 5s linear infinite alternate;
//                             -webkit-animation: spinStats8 5s linear infinite alternate;
//                         }
//                         `;
//                 ball8.appendChild(keyFramesw);
//                 //=========================blue balls9====================================
//                 document.getElementById("ballsssss9").style.animationName = "spinStats9";
//                 var ball9 = document.querySelector('#ballsssss9');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats9 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 45px;margin-left: 15px;}
//                             10%{margin-top: 55px;margin-left: 15px;}
//                             15%{margin-top: 60px;margin-left: 30px;}
//                             20%{margin-top: 45px;margin-left: 40px;}
//                             25%{margin-top: 55px;margin-left: 25px;}
//                             30%{margin-top: 10px;margin-left: 25px;}
//                             35%{margin-top: 45px;margin-left: 45px;}
//                             40%{margin-top: 60px;margin-left: 30px;}
//                             45%{margin-top: 30px;margin-left: 0px;}
//                             50%{margin-top: 10px;margin-left: 25px;}
//                             55%{margin-top: 40px;margin-left: 35px;}
//                             60%{margin-top: 55px;margin-left: 25px;}
//                             65%{margin-top: 60px;margin-left: 33px;}
//                             70%{margin-top: 40px;margin-left: 40px;}
//                             75%{margin-top: 15px;margin-left: 20px;}
//                             80%{margin-top: 30px;margin-left: 15px;}
//                             85%{margin-top: 60px;margin-left: 30px;}
//                             90%{margin-top: 0px;margin-left: 30px;}
//                             95%{margin-top: 30px;margin-left: 0px;}
//                             100%{margin-top: 61px;margin-left: 35px;background-position: 100%;}
//                         }
//                         #ballsssss9 {
//                             animation: spinStats9 5s linear infinite alternate;
//                             -webkit-animation: spinStats9 5s linear infinite alternate;
//                         }
//                         `;
//                 ball9.appendChild(keyFramesw);
//                 //=========================blue balls0====================================
//                 document.getElementById("ballsssss0").style.animationName = "spinStats0";
//                 var ball0 = document.querySelector('#ballsssss0');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats0 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 50px;margin-left: 15px;}
//                             10%{margin-top: 45px;margin-left: 20px;}
//                             15%{margin-top: 20px;margin-left: 15px;}
//                             20%{margin-top: 0px;margin-left: 30px;}
//                             25%{margin-top: 20px;margin-left: 38px;}
//                             30%{margin-top: 35px;margin-left: 40px;}
//                             35%{margin-top: 45px;margin-left: 45px;}
//                             40%{margin-top: 58px;margin-left: 50px;}
//                             45%{margin-top: 30px;margin-left: 0px;}
//                             50%{margin-top: 0px;margin-left: 30px;}
//                             55%{margin-top: 57px;margin-left: 28px;}
//                             60%{margin-top: 15px;margin-left: 35px;}
//                             65%{margin-top: 40px;margin-left: 20px;}
//                             70%{margin-top: 15px;margin-left: 35px;}
//                             75%{margin-top: 60px;margin-left: 30px;}
//                             80%{margin-top: 50px;margin-left: 15px;}
//                             85%{margin-top: 10px;margin-left: 40px;}
//                             90%{margin-top: 40px;margin-left: 23px;}
//                             95%{margin-top: 20px;margin-left: 30px;}
//                             100%{margin-top: 58px;margin-left: 28px;background-position: 100%;}

//                         }
//                         #ballsssss0 {
//                             animation: spinStats0 5s linear infinite alternate;
//                             -webkit-animation: spinStats0 5s linear infinite alternate;
//                         }
//                         `;
//                 ball0.appendChild(keyFramesw);
//                 psound=parseInt(document.getElementById("pSound").innerHTML);
//                 if(psound==2){
//                     puaseplay();
//                 }else{
//                     play();
//                 }
//             }
//             if (cnt == 88) {
//                 var result15 = Math.floor(Math.random() * 10);
//                 document.getElementById("boxball5").innerHTML = result15;
//                 document.getElementById("boxBall5").style.animation = "";
//                 document.getElementById("boxball1").innerHTML = "?";
//                 document.getElementById("boxball2").innerHTML = "?";
//                 document.getElementById("boxball3").innerHTML = "?";
//                 document.getElementById("boxball4").innerHTML = "?";
//                 document.getElementById("ballsssss0").style.animationName = "anib0";
//                 document.getElementById("ballsssss9").style.animationName = "anib9";
//                 document.getElementById("ballsssss8").style.animationName = "anib8";
//                 document.getElementById("ballsssss7").style.animationName = "anib7";
//                 document.getElementById("ballsssss6").style.animationName = "anib6";
//                 document.getElementById("ballsssss5").style.animationName = "anib5";
//                 document.getElementById("ballsssss4").style.animationName = "anib4";
//                 document.getElementById("ballsssss3").style.animationName = "anib3";
//                 document.getElementById("ballsssss2").style.animationName = "anib2";
//                 document.getElementById("ballsssss1").style.animationName = "anib1";
//                 document.getElementById("imgspin5").style.animation = "none";
//                 var runball = document.querySelector('#boxBall5');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes run14 {
//                             from {
//                                 height: 60px;
//                                 width: 60px;
//                                 margin-top: 0px;
//                                 margin-left: 80px;
//                                 opacity: 1;

//                             }
//                             to {
//                                 margin-top: 80px;
//                                 margin-left: -170px;
//                                 height: 40px;
//                                 width: 40px;
//                                 z-index: 1;
//                                 opacity: 0;

//                             }
//                         }
//                         #boxBall5 {
//                             animation: run14 1s linear infinite;
//                             -webkit-animation: run14 1s linear infinite;
//                         }
//                         `;
//                 runball.appendChild(keyFramesw);
//                 psound=parseInt(document.getElementById("pSound").innerHTML);
//                 if(psound==2){
//                    puase1();
//                 }else{
//                      play1();
//                 }
//             }
//             //================sections D=================
//             /*16*/
//             if (cnt == 90) {
//                 document.getElementById("boxball5").innerHTML = "?";
//                 document.getElementById("boxBall4").style.animation = "none";
//                 var result14 = document.getElementById("boxball4").innerHTML;
//                 document.getElementById("nums14").innerHTML = result14;
//                 document.getElementById("imgspin").style.animation = "";
//                 var spinball = document.querySelector('#imgspin');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spin {
//                             from {
//                                 transform: rotate(0deg);
//                                 -webkit-transform: rotate(0deg);
//                             }
//                             to {
//                                 transform: rotate(360deg);
//                                 -webkit-transform: rotate(360deg);
//                             }
//                         }
//                         #imgspin {
//                             animation: spin 0.8s linear infinite;
//                             -webkit-animation: spin 0.8s linear infinite;
//                         }
//                         `;
//                 spinball.appendChild(keyFramesw);
//                 // =========================blue ball1====================================
//                 document.getElementById("balls1").style.animationName = "spinStat1";
//                 var ball1 = document.querySelector('#balls1');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat1 {
//                             0%{margin-top: 60px;margin-left: 50px;}
//                             5%{margin-top: 30px;margin-left: 0px;}
//                             10%{margin-top: 50px;margin-left: 20px;}
//                             15%{margin-top: 0px;margin-left: 30px;}
//                             20%{margin-top: 60px;margin-left: 40px;}
//                             25%{margin-top: 50px;margin-left: 40px;}
//                             30%{margin-top: 10px;margin-left: 20px;}
//                             35%{margin-top: 0px;margin-left: 20px;}
//                             40%{margin-top: 30px;margin-left: 60px;}
//                             45%{margin-top: 10px;margin-left: 40px;}
//                             50%{margin-top: 63px;margin-left: 30px;}
//                             55{margin-top: 10px;margin-left: 35px;}
//                             60%{margin-top: 33px;margin-left: 0px;}
//                             65%{margin-top: 10px;margin-left: 30px;}
//                             70%{margin-top: 0px;margin-left: 25px;}
//                             75%{margin-top: 20px;margin-left: 20px;}
//                             80%{margin-top: 20px;margin-left: 40px;}
//                             85%{margin-top:20px;margin-left: 12px;}
//                             90%{margin-top: 50px;margin-left: 20px;}
//                             95%{margin-top: 0px;margin-left: 35px;}
//                             100%{margin-top: 27px;margin-left: 33px;background-position: 100%;}
//                         }
//                         #balls1 {
//                             animation: spinStat1 5s linear infinite alternate;
//                             -webkit-animation: spinstat1 5s linear infinite alternate;
//                         }
//                         `;
//                 ball1.appendChild(keyFramesw);
//                 // =========================blue ball2====================================
//                 document.getElementById("balls2").style.animationName = "spinStat2";
//                 var ball2 = document.querySelector('#balls2');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat2 {
//                             0%{margin-top: 60px;margin-left: 31px;}
//                                 5%{margin-top: 8px;margin-left: 30px;}
//                                 10%{margin-top: 30px;margin-left: 50px;}
//                                 15%{margin-top: 20px;margin-left: 10px;}
//                                 20%{margin-top: 50px;margin-left: 30px;}
//                                 25%{margin-top: 0px;margin-left: 30px;}
//                                 30%{margin-top: 60px;margin-left: 30px;}
//                                 35%{margin-top: 0px;margin-left: 30px;}
//                                 40%{margin-top: 30px;margin-left: 10px;}
//                                 45%{margin-top: 30px;margin-left: 60px;}
//                                 50%{margin-top: 63px;margin-left: 30px;}
//                                 55%{margin-top: 10px;margin-left: 45px;}
//                                 60%{margin-top: 55px;margin-left: 10px;}
//                                 65%{margin-top: 20px;margin-left: 35px;}
//                                 70%{margin-top: 45px;margin-left: 60px;}
//                                 75%{margin-top: 10px;margin-left: 49px;}
//                                 80%{margin-top: 48px;margin-left: 50px;}
//                                 85%{margin-top: 18px;margin-left: 30px;}
//                                 90%{margin-top: 20px;margin-left: 10px;}
//                                 95%{margin-top: 0px;margin-left: 30px;}
//                                 100%{margin-top: 63px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #balls2 {
//                             animation: spinStat2 5s linear infinite alternate;
//                             -webkit-animation: spinStat2 5s linear infinite alternate;
//                         }
//                         `;
//                 ball2.appendChild(keyFramesw);
//                 // =========================blue ball3====================================
//                 document.getElementById("balls3").style.animationName = "spinStat3";
//                 var ball3 = document.querySelector('#balls3');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat3 {
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 30px;margin-left: 0px;}
//                             10%{margin-top: 0px;margin-left: 30px;}
//                             15%{margin-top: 30px;margin-left: 60px;}
//                             20%{margin-top: 60px;margin-left: 30px;}
//                             25%{margin-top: 0px;margin-left: 27px;}
//                             30%{margin-top: 20px;margin-left: 50px;}
//                             35%{margin-top: 60px;margin-left: 30px;}
//                             40%{margin-top: 30px;margin-left: 15px;}
//                             45%{margin-top: 45px;margin-left: 45px;}
//                             50%{margin-top: 10px;margin-left: 50px;}
//                             55%{margin-top: 55px;margin-left: 30px;}
//                             60%{margin-top: 30px;margin-left: 20px;}
//                             65%{margin-top: 60px;margin-left: 30px;}
//                             70%{margin-top: 40px;margin-left: 15px;}
//                             75%{margin-top: 15px;margin-left: 30px;}
//                             80%{margin-top: 18px;margin-left: 20px;}
//                             85%{margin-top: 20px;margin-left: 60px;}
//                             90%{margin-top: 60px;margin-left: 30px;}
//                             95%{margin-top: 10px;margin-left: 35px;}
//                             100%{margin-top: 63px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #balls3 {
//                             animation: spinStat3 5s linear infinite alternate;
//                             -webkit-animation: spinStat3 5s linear infinite alternate;
//                         }
//                         `;
//                 ball3.appendChild(keyFramesw);
//                 // =========================blue ball4====================================
//                 document.getElementById("balls4").style.animationName = "spinStat4";
//                 var ball4 = document.querySelector('#balls4');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat4 {
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 15px;margin-left: 30px;}
//                             10%{margin-top: 40px;margin-left: 50px;}
//                             15%{margin-top: 60px;margin-left: 30px;}
//                             20%{margin-top: 50px;margin-left: 50px;}
//                             25%{margin-top: 6px;margin-left: 30px;}
//                             30%{margin-top: 45px;margin-left: 20px;}
//                             35%{margin-top: 15px;margin-left: 20px;}
//                             40%{margin-top: 0px;margin-left: 30px;}
//                             45%{margin-top: 20px;margin-left: 50px;}
//                             50%{margin-top: 35px;margin-left: 60px;}
//                             55%{margin-top: 55px;margin-left: 45px;}
//                             60%{margin-top: 60px;margin-left: 30px;}
//                             65%{margin-top: 0px;margin-left: 30px;}
//                             70%{margin-top: 60px;margin-left: 30px;}
//                             75%{margin-top: 15px;margin-left: 25px;}
//                             80%{margin-top: 55px;margin-left: 20px;}
//                             85%{margin-top: 0px;margin-left: 30px;}
//                             90%{margin-top: 55px;margin-left: 27px;}
//                             95%{margin-top: 20px;margin-left: 58px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #balls4 {
//                             animation: spinStat4 5s linear infinite alternate;
//                             -webkit-animation: spinStat4 5s linear infinite alternate;
//                         }
//                         `;
//                 ball4.appendChild(keyFramesw);
//                 // =========================blue ball5====================================
//                 document.getElementById("balls5").style.animationName = "spinStat5";
//                 var ball5 = document.querySelector('#balls5');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat5 { 
//                             0%{margin-top: 60px;margin-left: 35px;}
//                             5%{margin-top: 40px;margin-left: 50px;}
//                             10%{margin-top: 60px;margin-left: 30px;}
//                             15%{margin-top: 30px;margin-left: 0px;}
//                             20%{margin-top: 20px;margin-left: 20px;}
//                             25%{margin-top: 0px;margin-left: 30px;}
//                             30%{margin-top: 60px;margin-left: 30px;}
//                             35%{margin-top: 40px;margin-left: 25px;}
//                             40%{margin-top: 60px;margin-left: 30px;}
//                             45%{margin-top: 10px;margin-left: 30px;}
//                             50%{margin-top: 30px;margin-left: 60px;}
//                             55%{margin-top: 60px;margin-left: 35px;}
//                             60%{margin-top: 0px;margin-left: 30px;}
//                             65%{margin-top: 15px;margin-left: 25px;}
//                             70%{margin-top: 20px;margin-left: 50px;}
//                             75%{margin-top: 35px;margin-left: 0px;}
//                             80%{margin-top: 12px;margin-left: 20px;}
//                             85%{margin-top: 0px;margin-left: 35px;}
//                             90%{margin-top: 60px;margin-left: 30px;}
//                             95%{margin-top: 30px;margin-left: 60px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}

//                         }
//                         #balls5 {
//                             animation: spinStat5 5s linear infinite alternate;
//                             -webkit-animation: spinStat5 5s linear infinite alternate;
//                         }
//                         `;
//                 ball5.appendChild(keyFramesw);
//                 //=========================blue ball6====================================
//                 document.getElementById("balls6").style.animationName = "spinStat6";
//                 var ball6 = document.querySelector('#balls6');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat6 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 0px;margin-left: 30px;}
//                             10%{margin-top: 10px;margin-left: 45px;}
//                             15%{margin-top: 60px;margin-left: 28px;}
//                             20%{margin-top: 10px;margin-left: 25px;}
//                             25%{margin-top: 30px;margin-left: 0px;}
//                             30%{margin-top: 0px;margin-left: 30px;}
//                             35%{margin-top: 44px;margin-left: 44px;}
//                             40%{margin-top: 60px;margin-left: 30x;}
//                             45%{margin-top: 40px;margin-left: 30px;}
//                             50%{margin-top: 20px;margin-left: 45px;}
//                             55%{margin-top: 40px;margin-left: 40px;}
//                             60%{margin-top: 55px;margin-left: 35px;}
//                             65%{margin-top: 50px;margin-left: 30px;}
//                             70%{margin-top: 0px;margin-left: 30px;}
//                             75%{margin-top: 60px;margin-left: 10px;}
//                             80%{margin-top: 30px;margin-left: 60px;}
//                             85%{margin-top: 25px;margin-left: 55px;}
//                             90%{margin-top: 5px;margin-left: 40px;}
//                             95%{margin-top: 20px;margin-left: 25x;}
//                             100%{margin-top: 60px;margin-left: 31px;background-position: 100%;}

//                         }
//                         #balls6 {
//                             animation: spinStat6 5s linear infinite alternate;
//                             -webkit-animation: spinStat6 5s linear infinite alternate;
//                         }
//                         `;
//                 ball6.appendChild(keyFramesw);
//                 //=========================blue ball7====================================
//                 document.getElementById("balls7").style.animationName = "spinStat7";
//                 var ball7 = document.querySelector('#balls7');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat7 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 40px;margin-left: 20px;}
//                             10%{margin-top: 30px;margin-left: 0px;}
//                             15%{margin-top: 25px;margin-left: 20px;}
//                             20%{margin-top: 0px;margin-left: 30px;}
//                             25%{margin-top: 25px;margin-left: 40px;}
//                             30%{margin-top: 50px;margin-left: 40px;}
//                             35%{margin-top: 60px;margin-left: 30px;}
//                             40%{margin-top: 0px;margin-left: 30px;}
//                             45%{margin-top: 55px;margin-left: 10px;}
//                             50%{margin-top: 15px;margin-left: 20px;}
//                             55%{margin-top: 25px;margin-left: 45px;}
//                             60%{margin-top: 50px;margin-left: 15px;}
//                             65%{margin-top: 20px;margin-left: 50px;}
//                             70%{margin-top: 0px;margin-left: 30px;}
//                             75%{margin-top: 15px;margin-left: 25px;}
//                             80%{margin-top: 50px;margin-left: 35px;}
//                             85%{margin-top: 10px;margin-left: 35px;}
//                             90%{margin-top: 45px;margin-left: 15px;}
//                             95%{margin-top: 60px;margin-left: 30px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}

//                         }
//                         #balls7 {
//                             animation: spinStat7 5s linear infinite alternate;
//                             -webkit-animation: spinStat7 5s linear infinite alternate;
//                         }
//                         `;
//                 ball7.appendChild(keyFramesw);
//                 //=========================blue ball8====================================
//                 document.getElementById("balls8").style.animationName = "spinStat8";
//                 var ball8 = document.querySelector('#balls8');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat8 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 15px;margin-left: 50px;}
//                             10%{margin-top: 55px;margin-left: 30px;}
//                             15%{margin-top: 40px;margin-left: 23px;}
//                             20%{margin-top: 25px;margin-left: 35px;}
//                             25%{margin-top: 40px;margin-left: 40px;}
//                             30%{margin-top: 60px;margin-left: 30px;}
//                             35%{margin-top: 45px;margin-left: 10px;}
//                             40%{margin-top: 55px;margin-left: 25px;}
//                             45%{margin-top: 15px;margin-left: 27px;}
//                             50%{margin-top: 30px;margin-left: 60px;}
//                             55%{margin-top: 55px;margin-left: 55px;}
//                             60%{margin-top: 60px;margin-left: 30px;}
//                             65%{margin-top: 40px;margin-left: 25px;}
//                             70%{margin-top: 10px;margin-left: 12px;}
//                             75%{margin-top: 45px;margin-left: 15px;}
//                             80%{margin-top: 40px;margin-left: 55px;}
//                             85%{margin-top: 0px;margin-left: 30px;}
//                             90%{margin-top: 55px;margin-left: 25px;}
//                             95%{margin-top: 30px;margin-left: 30px;}
//                             100%{margin-top: 58px;margin-left: 28px;background-position: 100%;}

//                         }
//                         #balls8 {
//                             animation: spinStat8 5s linear infinite alternate;
//                             -webkit-animation: spinStat8 5s linear infinite alternate;
//                         }
//                         `;
//                 ball8.appendChild(keyFramesw);
//                 //=========================blue ball9====================================
//                 document.getElementById("balls9").style.animationName = "spinStat9";
//                 var ball9 = document.querySelector('#balls9');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat9 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 45px;margin-left: 15px;}
//                             10%{margin-top: 55px;margin-left: 15px;}
//                             15%{margin-top: 60px;margin-left: 30px;}
//                             20%{margin-top: 45px;margin-left: 40px;}
//                             25%{margin-top: 55px;margin-left: 25px;}
//                             30%{margin-top: 10px;margin-left: 25px;}
//                             35%{margin-top: 45px;margin-left: 45px;}
//                             40%{margin-top: 60px;margin-left: 30px;}
//                             45%{margin-top: 30px;margin-left: 0px;}
//                             50%{margin-top: 10px;margin-left: 25px;}
//                             55%{margin-top: 40px;margin-left: 35px;}
//                             60%{margin-top: 55px;margin-left: 25px;}
//                             65%{margin-top: 60px;margin-left: 33px;}
//                             70%{margin-top: 40px;margin-left: 40px;}
//                             75%{margin-top: 15px;margin-left: 20px;}
//                             80%{margin-top: 30px;margin-left: 15px;}
//                             85%{margin-top: 60px;margin-left: 30px;}
//                             90%{margin-top: 0px;margin-left: 30px;}
//                             95%{margin-top: 30px;margin-left: 0px;}
//                             100%{margin-top: 61px;margin-left: 35px;background-position: 100%;}

//                         }
//                         #balls9 {
//                             animation: spinStat9 5s linear infinite alternate;
//                             -webkit-animation: spinStat9 5s linear infinite alternate;
//                         }
//                         `;
//                 ball9.appendChild(keyFramesw);
//                 //=========================blue ball0====================================
//                 document.getElementById("balls0").style.animationName = "spinStat0";
//                 var ball0 = document.querySelector('#balls0');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat0 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 50px;margin-left: 15px;}
//                             10%{margin-top: 45px;margin-left: 20px;}
//                             15%{margin-top: 20px;margin-left: 15px;}
//                             20%{margin-top: 0px;margin-left: 30px;}
//                             25%{margin-top: 20px;margin-left: 38px;}
//                             30%{margin-top: 35px;margin-left: 40px;}
//                             35%{margin-top: 45px;margin-left: 45px;}
//                             40%{margin-top: 58px;margin-left: 50px;}
//                             45%{margin-top: 30px;margin-left: 0px;}
//                             50%{margin-top: 0px;margin-left: 30px;}
//                             55%{margin-top: 57px;margin-left: 28px;}
//                             60%{margin-top: 15px;margin-left: 35px;}
//                             65%{margin-top: 40px;margin-left: 20px;}
//                             70%{margin-top: 15px;margin-left: 35px;}
//                             75%{margin-top: 60px;margin-left: 30px;}
//                             80%{margin-top: 50px;margin-left: 15px;}
//                             85%{margin-top: 10px;margin-left: 40px;}
//                             90%{margin-top: 40px;margin-left: 23px;}
//                             95%{margin-top: 20px;margin-left: 30px;}
//                             100%{margin-top: 58px;margin-left: 28px;background-position: 100%;}

//                         }
//                         #balls0 {
//                             animation: spinStat0 5s linear infinite alternate;
//                             -webkit-animation: spinStat0 5s linear infinite alternate;
//                         }
//                         `;
//                 ball0.appendChild(keyFramesw);
//                 psound=parseInt(document.getElementById("pSound").innerHTML);
//                 if(psound==2){
//                     puaseplay();
//                 }else{
//                     play();
//                 }
//             }
//             if (cnt == 85) {
//                 var result16 = Math.floor(Math.random() * 10);
//                 document.getElementById("boxball1").innerHTML = result16;
//                 document.getElementById("boxBall1").style.animation = "";
//                 document.getElementById("balls0").style.animationName = "anib0";
//                 document.getElementById("balls9").style.animationName = "anib9";
//                 document.getElementById("balls8").style.animationName = "anib8";
//                 document.getElementById("balls7").style.animationName = "anib7";
//                 document.getElementById("balls6").style.animationName = "anib6";
//                 document.getElementById("balls5").style.animationName = "anib5";
//                 document.getElementById("balls4").style.animationName = "anib4";
//                 document.getElementById("balls3").style.animationName = "anib3";
//                 document.getElementById("balls2").style.animationName = "anib2";
//                 document.getElementById("balls1").style.animationName = "anib1";
//                 document.getElementById("imgspin").style.animation = "none";
//                 var runball = document.querySelector('#boxBall1');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes run15 {
//                             from {
//                                 height: 60px;
//                                 width: 60px;
//                                 margin-top: 0px;
//                                 margin-left: 80px;
//                                 opacity: 1;
//                             }
//                             to {
//                                 margin-top: 80px;
//                                 margin-left: 900px;
//                                 height: 40px;
//                                 width: 40px;
//                                 z-index: 1;
//                                 opacity: 0;
//                             }
//                         }
//                         #boxBall1 {
//                             animation: run15 1s linear infinite;
//                             -webkit-animation: run15 1s linear infinite;
//                         }
//                         `;
//                 runball.appendChild(keyFramesw);
//                 psound=parseInt(document.getElementById("pSound").innerHTML);
//                 if(psound==2){
//                      puase1();
//                 }else{
//                    play1();
//                 }
//             }
//             /*17*/
//             if (cnt == 87) {
//                 document.getElementById("boxBall5").style.animation = "none";
//                 var result15 = document.getElementById("boxball5").innerHTML;
//                 document.getElementById("nums15").innerHTML = result15;
//                 document.getElementById("boxball5").innerHTML = "?";
//                 document.getElementById("boxball1").innerHTML = "?";
//                 document.getElementById("boxball2").innerHTML = "?";
//                 document.getElementById("boxball3").innerHTML = "?";
//                 document.getElementById("boxball4").innerHTML = "?";
//                 document.getElementById("imgspin2").style.animation = "";
//                 var spinball = document.querySelector('#imgspin2');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spin2 {
//                             from {
//                                 transform: rotate(0deg);
//                                 -webkit-transform: rotate(0deg);
//                             }
//                             to {
//                                 transform: rotate(360deg);
//                                 -webkit-transform: rotate(360deg);
//                             }
//                         }
//                         #imgspin2 {
//                             animation: spin2 0.8s linear infinite;
//                             -webkit-animation: spin 0.8s linear infinite;
//                         }
//                         `;
//                 spinball.appendChild(keyFramesw);
//                 // =========================blue ball1====================================
//                 document.getElementById("ballss1").style.animationName = "spinStat1";
//                 var balls1 = document.querySelector('#ballss1');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat1 {
//                             0%{margin-top: 60px;margin-left: 50px;}
//                             5%{margin-top: 30px;margin-left: 0px;}
//                             10%{margin-top: 50px;margin-left: 20px;}
//                             15%{margin-top: 0px;margin-left: 30px;}
//                             20%{margin-top: 60px;margin-left: 40px;}
//                             25%{margin-top: 50px;margin-left: 40px;}
//                             30%{margin-top: 10px;margin-left: 20px;}
//                             35%{margin-top: 0px;margin-left: 20px;}
//                             40%{margin-top: 30px;margin-left: 60px;}
//                             45%{margin-top: 10px;margin-left: 40px;}
//                             50%{margin-top: 63px;margin-left: 30px;}
//                             55{margin-top: 10px;margin-left: 35px;}
//                             60%{margin-top: 33px;margin-left: 0px;}
//                             65%{margin-top: 10px;margin-left: 30px;}
//                             70%{margin-top: 0px;margin-left: 25px;}
//                             75%{margin-top: 20px;margin-left: 20px;}
//                             80%{margin-top: 20px;margin-left: 40px;}
//                             85%{margin-top:20px;margin-left: 12px;}
//                             90%{margin-top: 50px;margin-left: 20px;}
//                             95%{margin-top: 0px;margin-left: 35px;}
//                             100%{margin-top: 27px;margin-left: 33px;background-position: 100%;}
//                         }
//                         #ballss1 {
//                             animation: spinStat1 5s linear infinite alternate;
//                             -webkit-animation: spinstat1 5s linear infinite alternate;
//                         }
//                         `;
//                 balls1.appendChild(keyFramesw);
//                 // =========================blue balls2====================================
//                 document.getElementById("ballss2").style.animationName = "spinStats2";
//                 var ball2 = document.querySelector('#ballss2');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats2 {
//                             0%{margin-top: 60px;margin-left: 31px;}
//                                 5%{margin-top: 8px;margin-left: 30px;}
//                                 10%{margin-top: 30px;margin-left: 50px;}
//                                 15%{margin-top: 20px;margin-left: 10px;}
//                                 20%{margin-top: 50px;margin-left: 30px;}
//                                 25%{margin-top: 0px;margin-left: 30px;}
//                                 30%{margin-top: 60px;margin-left: 30px;}
//                                 35%{margin-top: 0px;margin-left: 30px;}
//                                 40%{margin-top: 30px;margin-left: 10px;}
//                                 45%{margin-top: 30px;margin-left: 60px;}
//                                 50%{margin-top: 63px;margin-left: 30px;}
//                                 55%{margin-top: 10px;margin-left: 45px;}
//                                 60%{margin-top: 55px;margin-left: 10px;}
//                                 65%{margin-top: 20px;margin-left: 35px;}
//                                 70%{margin-top: 45px;margin-left: 60px;}
//                                 75%{margin-top: 10px;margin-left: 49px;}
//                                 80%{margin-top: 48px;margin-left: 50px;}
//                                 85%{margin-top: 18px;margin-left: 30px;}
//                                 90%{margin-top: 20px;margin-left: 10px;}
//                                 95%{margin-top: 0px;margin-left: 30px;}
//                                 100%{margin-top: 63px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballss2 {
//                             animation: spinStats2 5s linear infinite alternate;
//                             -webkit-animation: spinStats2 5s linear infinite alternate;
//                         }
//                         `;
//                 ball2.appendChild(keyFramesw);
//                 // =========================blue balls3====================================
//                 document.getElementById("ballss3").style.animationName = "spinStats3";
//                 var ball3 = document.querySelector('#ballss3');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats3 {
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 30px;margin-left: 0px;}
//                             10%{margin-top: 0px;margin-left: 30px;}
//                             15%{margin-top: 30px;margin-left: 60px;}
//                             20%{margin-top: 60px;margin-left: 30px;}
//                             25%{margin-top: 0px;margin-left: 27px;}
//                             30%{margin-top: 20px;margin-left: 50px;}
//                             35%{margin-top: 60px;margin-left: 30px;}
//                             40%{margin-top: 30px;margin-left: 15px;}
//                             45%{margin-top: 45px;margin-left: 45px;}
//                             50%{margin-top: 10px;margin-left: 50px;}
//                             55%{margin-top: 55px;margin-left: 30px;}
//                             60%{margin-top: 30px;margin-left: 20px;}
//                             65%{margin-top: 60px;margin-left: 30px;}
//                             70%{margin-top: 40px;margin-left: 15px;}
//                             75%{margin-top: 15px;margin-left: 30px;}
//                             80%{margin-top: 18px;margin-left: 20px;}
//                             85%{margin-top: 20px;margin-left: 60px;}
//                             90%{margin-top: 60px;margin-left: 30px;}
//                             95%{margin-top: 10px;margin-left: 35px;}
//                             100%{margin-top: 63px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballss3 {
//                             animation: spinStats3 5s linear infinite alternate;
//                             -webkit-animation: spinStats3 5s linear infinite alternate;
//                         }
//                         `;
//                 ball3.appendChild(keyFramesw);
//                 // =========================blue balls4====================================
//                 document.getElementById("ballss4").style.animationName = "spinStats4";
//                 var ball4 = document.querySelector('#ballss4');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats4 {
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 15px;margin-left: 30px;}
//                             10%{margin-top: 40px;margin-left: 50px;}
//                             15%{margin-top: 60px;margin-left: 30px;}
//                             20%{margin-top: 50px;margin-left: 50px;}
//                             25%{margin-top: 6px;margin-left: 30px;}
//                             30%{margin-top: 45px;margin-left: 20px;}
//                             35%{margin-top: 15px;margin-left: 20px;}
//                             40%{margin-top: 0px;margin-left: 30px;}
//                             45%{margin-top: 20px;margin-left: 50px;}
//                             50%{margin-top: 35px;margin-left: 60px;}
//                             55%{margin-top: 55px;margin-left: 45px;}
//                             60%{margin-top: 60px;margin-left: 30px;}
//                             65%{margin-top: 0px;margin-left: 30px;}
//                             70%{margin-top: 60px;margin-left: 30px;}
//                             75%{margin-top: 15px;margin-left: 25px;}
//                             80%{margin-top: 55px;margin-left: 20px;}
//                             85%{margin-top: 0px;margin-left: 30px;}
//                             90%{margin-top: 55px;margin-left: 27px;}
//                             95%{margin-top: 20px;margin-left: 58px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballss4 {
//                             animation: spinStats4 5s linear infinite alternate;
//                             -webkit-animation: spinStats4 5s linear infinite alternate;
//                         }
//                         `;
//                 ball4.appendChild(keyFramesw);
//                 // =========================blue balls5====================================
//                 document.getElementById("ballss5").style.animationName = "spinStats5";
//                 var ball5 = document.querySelector('#ballss5');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats5 { 
//                             0%{margin-top: 60px;margin-left: 35px;}
//                             5%{margin-top: 40px;margin-left: 50px;}
//                             10%{margin-top: 60px;margin-left: 30px;}
//                             15%{margin-top: 30px;margin-left: 0px;}
//                             20%{margin-top: 20px;margin-left: 20px;}
//                             25%{margin-top: 0px;margin-left: 30px;}
//                             30%{margin-top: 60px;margin-left: 30px;}
//                             35%{margin-top: 40px;margin-left: 25px;}
//                             40%{margin-top: 60px;margin-left: 30px;}
//                             45%{margin-top: 10px;margin-left: 30px;}
//                             50%{margin-top: 30px;margin-left: 60px;}
//                             55%{margin-top: 60px;margin-left: 35px;}
//                             60%{margin-top: 0px;margin-left: 30px;}
//                             65%{margin-top: 15px;margin-left: 25px;}
//                             70%{margin-top: 20px;margin-left: 50px;}
//                             75%{margin-top: 35px;margin-left: 0px;}
//                             80%{margin-top: 12px;margin-left: 20px;}
//                             85%{margin-top: 0px;margin-left: 35px;}
//                             90%{margin-top: 60px;margin-left: 30px;}
//                             95%{margin-top: 30px;margin-left: 60px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}

//                         }
//                         #ballss5 {
//                             animation: spinStats5 5s linear infinite alternate;
//                             -webkit-animation: spinStats5 5s linear infinite alternate;
//                         }
//                         `;
//                 ball5.appendChild(keyFramesw);
//                 //=========================blue balls6====================================
//                 document.getElementById("ballss6").style.animationName = "spinStats6";
//                 var ball6 = document.querySelector('#ballss6');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats6 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 0px;margin-left: 30px;}
//                             10%{margin-top: 10px;margin-left: 45px;}
//                             15%{margin-top: 60px;margin-left: 28px;}
//                             20%{margin-top: 10px;margin-left: 25px;}
//                             25%{margin-top: 30px;margin-left: 0px;}
//                             30%{margin-top: 0px;margin-left: 30px;}
//                             35%{margin-top: 44px;margin-left: 44px;}
//                             40%{margin-top: 60px;margin-left: 30x;}
//                             45%{margin-top: 40px;margin-left: 30px;}
//                             50%{margin-top: 20px;margin-left: 45px;}
//                             55%{margin-top: 40px;margin-left: 40px;}
//                             60%{margin-top: 55px;margin-left: 35px;}
//                             65%{margin-top: 50px;margin-left: 30px;}
//                             70%{margin-top: 0px;margin-left: 30px;}
//                             75%{margin-top: 60px;margin-left: 10px;}
//                             80%{margin-top: 30px;margin-left: 60px;}
//                             85%{margin-top: 25px;margin-left: 55px;}
//                             90%{margin-top: 5px;margin-left: 40px;}
//                             95%{margin-top: 20px;margin-left: 25x;}
//                             100%{margin-top: 60px;margin-left: 31px;background-position: 100%;}

//                         }
//                         #ballss6 {
//                             animation: spinStats6 5s linear infinite alternate;
//                             -webkit-animation: spinStats6 5s linear infinite alternate;
//                         }
//                         `;
//                 ball6.appendChild(keyFramesw);
//                 //=========================blue balls7====================================
//                 document.getElementById("ballss7").style.animationName = "spinStats7";
//                 var ball7 = document.querySelector('#ballss7');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats7 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 40px;margin-left: 20px;}
//                             10%{margin-top: 30px;margin-left: 0px;}
//                             15%{margin-top: 25px;margin-left: 20px;}
//                             20%{margin-top: 0px;margin-left: 30px;}
//                             25%{margin-top: 25px;margin-left: 40px;}
//                             30%{margin-top: 50px;margin-left: 40px;}
//                             35%{margin-top: 60px;margin-left: 30px;}
//                             40%{margin-top: 0px;margin-left: 30px;}
//                             45%{margin-top: 55px;margin-left: 10px;}
//                             50%{margin-top: 15px;margin-left: 20px;}
//                             55%{margin-top: 25px;margin-left: 45px;}
//                             60%{margin-top: 50px;margin-left: 15px;}
//                             65%{margin-top: 20px;margin-left: 50px;}
//                             70%{margin-top: 0px;margin-left: 30px;}
//                             75%{margin-top: 15px;margin-left: 25px;}
//                             80%{margin-top: 50px;margin-left: 35px;}
//                             85%{margin-top: 10px;margin-left: 35px;}
//                             90%{margin-top: 45px;margin-left: 15px;}
//                             95%{margin-top: 60px;margin-left: 30px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}

//                         }
//                         #ballss7 {
//                             animation: spinStats7 5s linear infinite alternate;
//                             -webkit-animation: spinStats7 5s linear infinite alternate;
//                         }
//                         `;
//                 ball7.appendChild(keyFramesw);
//                 //=========================blue balls8====================================
//                 document.getElementById("ballss8").style.animationName = "spinStats8";
//                 var ball8 = document.querySelector('#ballss8');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats8 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 15px;margin-left: 50px;}
//                             10%{margin-top: 55px;margin-left: 30px;}
//                             15%{margin-top: 40px;margin-left: 23px;}
//                             20%{margin-top: 25px;margin-left: 35px;}
//                             25%{margin-top: 40px;margin-left: 40px;}
//                             30%{margin-top: 60px;margin-left: 30px;}
//                             35%{margin-top: 45px;margin-left: 10px;}
//                             40%{margin-top: 55px;margin-left: 25px;}
//                             45%{margin-top: 15px;margin-left: 27px;}
//                             50%{margin-top: 30px;margin-left: 60px;}
//                             55%{margin-top: 55px;margin-left: 55px;}
//                             60%{margin-top: 60px;margin-left: 30px;}
//                             65%{margin-top: 40px;margin-left: 25px;}
//                             70%{margin-top: 10px;margin-left: 12px;}
//                             75%{margin-top: 45px;margin-left: 15px;}
//                             80%{margin-top: 40px;margin-left: 55px;}
//                             85%{margin-top: 0px;margin-left: 30px;}
//                             90%{margin-top: 55px;margin-left: 25px;}
//                             95%{margin-top: 30px;margin-left: 30px;}
//                             100%{margin-top: 58px;margin-left: 28px;background-position: 100%;}

//                         }
//                         #ballss8 {
//                             animation: spinStats8 5s linear infinite alternate;
//                             -webkit-animation: spinStats8 5s linear infinite alternate;
//                         }
//                         `;
//                 ball8.appendChild(keyFramesw);
//                 //=========================blue balls9====================================
//                 document.getElementById("ballss9").style.animationName = "spinStats9";
//                 var ball9 = document.querySelector('#ballss9');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats9 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 45px;margin-left: 15px;}
//                             10%{margin-top: 55px;margin-left: 15px;}
//                             15%{margin-top: 60px;margin-left: 30px;}
//                             20%{margin-top: 45px;margin-left: 40px;}
//                             25%{margin-top: 55px;margin-left: 25px;}
//                             30%{margin-top: 10px;margin-left: 25px;}
//                             35%{margin-top: 45px;margin-left: 45px;}
//                             40%{margin-top: 60px;margin-left: 30px;}
//                             45%{margin-top: 30px;margin-left: 0px;}
//                             50%{margin-top: 10px;margin-left: 25px;}
//                             55%{margin-top: 40px;margin-left: 35px;}
//                             60%{margin-top: 55px;margin-left: 25px;}
//                             65%{margin-top: 60px;margin-left: 33px;}
//                             70%{margin-top: 40px;margin-left: 40px;}
//                             75%{margin-top: 15px;margin-left: 20px;}
//                             80%{margin-top: 30px;margin-left: 15px;}
//                             85%{margin-top: 60px;margin-left: 30px;}
//                             90%{margin-top: 0px;margin-left: 30px;}
//                             95%{margin-top: 30px;margin-left: 0px;}
//                             100%{margin-top: 61px;margin-left: 35px;background-position: 100%;}

//                         }
//                         #ballss9 {
//                             animation: spinStats9 5s linear infinite alternate;
//                             -webkit-animation: spinStats9 5s linear infinite alternate;
//                         }
//                         `;
//                 ball9.appendChild(keyFramesw);
//                 //=========================blue balls0====================================
//                 document.getElementById("ballss0").style.animationName = "spinStats0";
//                 var ball0 = document.querySelector('#ballss0');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats0 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 50px;margin-left: 15px;}
//                             10%{margin-top: 45px;margin-left: 20px;}
//                             15%{margin-top: 20px;margin-left: 15px;}
//                             20%{margin-top: 0px;margin-left: 30px;}
//                             25%{margin-top: 20px;margin-left: 38px;}
//                             30%{margin-top: 35px;margin-left: 40px;}
//                             35%{margin-top: 45px;margin-left: 45px;}
//                             40%{margin-top: 58px;margin-left: 50px;}
//                             45%{margin-top: 30px;margin-left: 0px;}
//                             50%{margin-top: 0px;margin-left: 30px;}
//                             55%{margin-top: 57px;margin-left: 28px;}
//                             60%{margin-top: 15px;margin-left: 35px;}
//                             65%{margin-top: 40px;margin-left: 20px;}
//                             70%{margin-top: 15px;margin-left: 35px;}
//                             75%{margin-top: 60px;margin-left: 30px;}
//                             80%{margin-top: 50px;margin-left: 15px;}
//                             85%{margin-top: 10px;margin-left: 40px;}
//                             90%{margin-top: 40px;margin-left: 23px;}
//                             95%{margin-top: 20px;margin-left: 30px;}
//                             100%{margin-top: 58px;margin-left: 28px;background-position: 100%;}

//                         }
//                         #ballss0 {
//                             animation: spinStats0 5s linear infinite alternate;
//                             -webkit-animation: spinStats0 5s linear infinite alternate;
//                         }
//                         `;
//                 ball0.appendChild(keyFramesw);
//                 psound=parseInt(document.getElementById("pSound").innerHTML);
//                 if(psound==2){
//                     puaseplay();
//                 }else{
//                     play();
//                 }
//             }
//             if (cnt == 82) {
//                 var result17 = Math.floor(Math.random() * 10);
//                 document.getElementById("boxball2").innerHTML = result17;
//                 document.getElementById("boxBall2").style.animation = "";
//                 document.getElementById("ballss0").style.animationName = "anib0";
//                 document.getElementById("ballss9").style.animationName = "anib9";
//                 document.getElementById("ballss8").style.animationName = "anib8";
//                 document.getElementById("ballss7").style.animationName = "anib7";
//                 document.getElementById("ballss6").style.animationName = "anib6";
//                 document.getElementById("ballss5").style.animationName = "anib5";
//                 document.getElementById("ballss4").style.animationName = "anib4";
//                 document.getElementById("ballss3").style.animationName = "anib3";
//                 document.getElementById("ballss2").style.animationName = "anib2";
//                 document.getElementById("ballss1").style.animationName = "anib1";
//                 document.getElementById("imgspin2").style.animation = "none";
//                 var runball = document.querySelector('#boxBall2');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes run16 {
//                             from {
//                                 height: 60px;
//                                 width: 60px;
//                                 margin-top: 0px;
//                                 margin-left: 80px;
//                                 opacity: 1;
//                             }
//                             to {
//                                 margin-top: 80px;
//                                 margin-left: 650px;
//                                 height: 40px;
//                                 width: 40px;
//                                 z-index: 1;
//                                 opacity: 0;
//                             }
//                         }
//                         #boxBall2 {
//                             animation: run16 1s linear infinite;
//                             -webkit-animation: run16 1s linear infinite;
//                         }
//                         `;
//                 runball.appendChild(keyFramesw);
//                 psound=parseInt(document.getElementById("pSound").innerHTML);
//                 if(psound==2){
//                      puase1();
//                 }else{
//                    play1();
//                 }
//             }
//             /*18*/
//             if (cnt == 84) {
//                 document.getElementById("boxBall1").style.animation = "none";
//                 var result16 = document.getElementById("boxball1").innerHTML;
//                 document.getElementById("nums16").innerHTML = result16;
//                 document.getElementById("imgspin3").style.animation = "";
//                 var spinball = document.querySelector('#imgspin3');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spin2 {
//                             from {
//                                 transform: rotate(0deg);
//                                 -webkit-transform: rotate(0deg);
//                             }
//                             to {
//                                 transform: rotate(360deg);
//                                 -webkit-transform: rotate(360deg);
//                             }
//                         }
//                         #imgspin3 {
//                             animation: spin2 0.8s linear infinite;
//                             -webkit-animation: spin2 0.8s linear infinite;
//                         }
//                         `;
//                 spinball.appendChild(keyFramesw);
//                 // =========================blue ball1====================================
//                 document.getElementById("ballsss1").style.animationName = "spinStat1";
//                 var balls1 = document.querySelector('#ballsss1');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat1 {
//                             0%{margin-top: 60px;margin-left: 50px;}
//                             5%{margin-top: 30px;margin-left: 0px;}
//                             10%{margin-top: 50px;margin-left: 20px;}
//                             15%{margin-top: 0px;margin-left: 30px;}
//                             20%{margin-top: 60px;margin-left: 40px;}
//                             25%{margin-top: 50px;margin-left: 40px;}
//                             30%{margin-top: 10px;margin-left: 20px;}
//                             35%{margin-top: 0px;margin-left: 20px;}
//                             40%{margin-top: 30px;margin-left: 60px;}
//                             45%{margin-top: 10px;margin-left: 40px;}
//                             50%{margin-top: 63px;margin-left: 30px;}
//                             55{margin-top: 10px;margin-left: 35px;}
//                             60%{margin-top: 33px;margin-left: 0px;}
//                             65%{margin-top: 10px;margin-left: 30px;}
//                             70%{margin-top: 0px;margin-left: 25px;}
//                             75%{margin-top: 20px;margin-left: 20px;}
//                             80%{margin-top: 20px;margin-left: 40px;}
//                             85%{margin-top:20px;margin-left: 12px;}
//                             90%{margin-top: 50px;margin-left: 20px;}
//                             95%{margin-top: 0px;margin-left: 35px;}
//                             100%{margin-top: 27px;margin-left: 33px;background-position: 100%;}
//                         }
//                         #ballsss1 {
//                             animation: spinStat1 5s linear infinite alternate;
//                             -webkit-animation: spinstat1 5s linear infinite alternate;
//                         }
//                         `;
//                 balls1.appendChild(keyFramesw);
//                 // =========================blue balls2====================================
//                 document.getElementById("ballsss2").style.animationName = "spinStats2";
//                 var ball2 = document.querySelector('#ballsss2');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats2 {
//                             0%{margin-top: 60px;margin-left: 31px;}
//                                 5%{margin-top: 8px;margin-left: 30px;}
//                                 10%{margin-top: 30px;margin-left: 50px;}
//                                 15%{margin-top: 20px;margin-left: 10px;}
//                                 20%{margin-top: 50px;margin-left: 30px;}
//                                 25%{margin-top: 0px;margin-left: 30px;}
//                                 30%{margin-top: 60px;margin-left: 30px;}
//                                 35%{margin-top: 0px;margin-left: 30px;}
//                                 40%{margin-top: 30px;margin-left: 10px;}
//                                 45%{margin-top: 30px;margin-left: 60px;}
//                                 50%{margin-top: 63px;margin-left: 30px;}
//                                 55%{margin-top: 10px;margin-left: 45px;}
//                                 60%{margin-top: 55px;margin-left: 10px;}
//                                 65%{margin-top: 20px;margin-left: 35px;}
//                                 70%{margin-top: 45px;margin-left: 60px;}
//                                 75%{margin-top: 10px;margin-left: 49px;}
//                                 80%{margin-top: 48px;margin-left: 50px;}
//                                 85%{margin-top: 18px;margin-left: 30px;}
//                                 90%{margin-top: 20px;margin-left: 10px;}
//                                 95%{margin-top: 0px;margin-left: 30px;}
//                                 100%{margin-top: 63px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballsss2 {
//                             animation: spinStats2 5s linear infinite alternate;
//                             -webkit-animation: spinStats2 5s linear infinite alternate;
//                         }
//                         `;
//                 ball2.appendChild(keyFramesw);
//                 // =========================blue balls3====================================
//                 document.getElementById("ballsss3").style.animationName = "spinStats3";
//                 var ball3 = document.querySelector('#ballsss3');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats3 {
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 30px;margin-left: 0px;}
//                             10%{margin-top: 0px;margin-left: 30px;}
//                             15%{margin-top: 30px;margin-left: 60px;}
//                             20%{margin-top: 60px;margin-left: 30px;}
//                             25%{margin-top: 0px;margin-left: 27px;}
//                             30%{margin-top: 20px;margin-left: 50px;}
//                             35%{margin-top: 60px;margin-left: 30px;}
//                             40%{margin-top: 30px;margin-left: 15px;}
//                             45%{margin-top: 45px;margin-left: 45px;}
//                             50%{margin-top: 10px;margin-left: 50px;}
//                             55%{margin-top: 55px;margin-left: 30px;}
//                             60%{margin-top: 30px;margin-left: 20px;}
//                             65%{margin-top: 60px;margin-left: 30px;}
//                             70%{margin-top: 40px;margin-left: 15px;}
//                             75%{margin-top: 15px;margin-left: 30px;}
//                             80%{margin-top: 18px;margin-left: 20px;}
//                             85%{margin-top: 20px;margin-left: 60px;}
//                             90%{margin-top: 60px;margin-left: 30px;}
//                             95%{margin-top: 10px;margin-left: 35px;}
//                             100%{margin-top: 63px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballsss3 {
//                             animation: spinStats3 5s linear infinite alternate;
//                             -webkit-animation: spinStats3 5s linear infinite alternate;
//                         }
//                         `;
//                 ball3.appendChild(keyFramesw);
//                 // =========================blue balls4====================================
//                 document.getElementById("ballsss4").style.animationName = "spinStats4";
//                 var ball4 = document.querySelector('#ballsss4');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats4 {
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 15px;margin-left: 30px;}
//                             10%{margin-top: 40px;margin-left: 50px;}
//                             15%{margin-top: 60px;margin-left: 30px;}
//                             20%{margin-top: 50px;margin-left: 50px;}
//                             25%{margin-top: 6px;margin-left: 30px;}
//                             30%{margin-top: 45px;margin-left: 20px;}
//                             35%{margin-top: 15px;margin-left: 20px;}
//                             40%{margin-top: 0px;margin-left: 30px;}
//                             45%{margin-top: 20px;margin-left: 50px;}
//                             50%{margin-top: 35px;margin-left: 60px;}
//                             55%{margin-top: 55px;margin-left: 45px;}
//                             60%{margin-top: 60px;margin-left: 30px;}
//                             65%{margin-top: 0px;margin-left: 30px;}
//                             70%{margin-top: 60px;margin-left: 30px;}
//                             75%{margin-top: 15px;margin-left: 25px;}
//                             80%{margin-top: 55px;margin-left: 20px;}
//                             85%{margin-top: 0px;margin-left: 30px;}
//                             90%{margin-top: 55px;margin-left: 27px;}
//                             95%{margin-top: 20px;margin-left: 58px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballsss4 {
//                             animation: spinStats4 5s linear infinite alternate;
//                             -webkit-animation: spinStats4 5s linear infinite alternate;
//                         }
//                         `;
//                 ball4.appendChild(keyFramesw);
//                 // =========================blue balls5====================================
//                 document.getElementById("ballsss5").style.animationName = "spinStats5";
//                 var ball5 = document.querySelector('#ballsss5');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats5 { 
//                             0%{margin-top: 60px;margin-left: 35px;}
//                             5%{margin-top: 40px;margin-left: 50px;}
//                             10%{margin-top: 60px;margin-left: 30px;}
//                             15%{margin-top: 30px;margin-left: 0px;}
//                             20%{margin-top: 20px;margin-left: 20px;}
//                             25%{margin-top: 0px;margin-left: 30px;}
//                             30%{margin-top: 60px;margin-left: 30px;}
//                             35%{margin-top: 40px;margin-left: 25px;}
//                             40%{margin-top: 60px;margin-left: 30px;}
//                             45%{margin-top: 10px;margin-left: 30px;}
//                             50%{margin-top: 30px;margin-left: 60px;}
//                             55%{margin-top: 60px;margin-left: 35px;}
//                             60%{margin-top: 0px;margin-left: 30px;}
//                             65%{margin-top: 15px;margin-left: 25px;}
//                             70%{margin-top: 20px;margin-left: 50px;}
//                             75%{margin-top: 35px;margin-left: 0px;}
//                             80%{margin-top: 12px;margin-left: 20px;}
//                             85%{margin-top: 0px;margin-left: 35px;}
//                             90%{margin-top: 60px;margin-left: 30px;}
//                             95%{margin-top: 30px;margin-left: 60px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}

//                         }
//                         #ballsss5 {
//                             animation: spinStats5 5s linear infinite alternate;
//                             -webkit-animation: spinStats5 5s linear infinite alternate;
//                         }
//                         `;
//                 ball5.appendChild(keyFramesw);
//                 //=========================blue balls6====================================
//                 document.getElementById("ballsss6").style.animationName = "spinStats6";
//                 var ball6 = document.querySelector('#ballsss6');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats6 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 0px;margin-left: 30px;}
//                             10%{margin-top: 10px;margin-left: 45px;}
//                             15%{margin-top: 60px;margin-left: 28px;}
//                             20%{margin-top: 10px;margin-left: 25px;}
//                             25%{margin-top: 30px;margin-left: 0px;}
//                             30%{margin-top: 0px;margin-left: 30px;}
//                             35%{margin-top: 44px;margin-left: 44px;}
//                             40%{margin-top: 60px;margin-left: 30x;}
//                             45%{margin-top: 40px;margin-left: 30px;}
//                             50%{margin-top: 20px;margin-left: 45px;}
//                             55%{margin-top: 40px;margin-left: 40px;}
//                             60%{margin-top: 55px;margin-left: 35px;}
//                             65%{margin-top: 50px;margin-left: 30px;}
//                             70%{margin-top: 0px;margin-left: 30px;}
//                             75%{margin-top: 60px;margin-left: 10px;}
//                             80%{margin-top: 30px;margin-left: 60px;}
//                             85%{margin-top: 25px;margin-left: 55px;}
//                             90%{margin-top: 5px;margin-left: 40px;}
//                             95%{margin-top: 20px;margin-left: 25x;}
//                             100%{margin-top: 60px;margin-left: 31px;background-position: 100%;}

//                         }
//                         #ballsss6 {
//                             animation: spinStats6 5s linear infinite alternate;
//                             -webkit-animation: spinStats6 5s linear infinite alternate;
//                         }
//                         `;
//                 ball6.appendChild(keyFramesw);
//                 //=========================blue balls7====================================
//                 document.getElementById("ballsss7").style.animationName = "spinStats7";
//                 var ball7 = document.querySelector('#ballsss7');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats7 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 40px;margin-left: 20px;}
//                             10%{margin-top: 30px;margin-left: 0px;}
//                             15%{margin-top: 25px;margin-left: 20px;}
//                             20%{margin-top: 0px;margin-left: 30px;}
//                             25%{margin-top: 25px;margin-left: 40px;}
//                             30%{margin-top: 50px;margin-left: 40px;}
//                             35%{margin-top: 60px;margin-left: 30px;}
//                             40%{margin-top: 0px;margin-left: 30px;}
//                             45%{margin-top: 55px;margin-left: 10px;}
//                             50%{margin-top: 15px;margin-left: 20px;}
//                             55%{margin-top: 25px;margin-left: 45px;}
//                             60%{margin-top: 50px;margin-left: 15px;}
//                             65%{margin-top: 20px;margin-left: 50px;}
//                             70%{margin-top: 0px;margin-left: 30px;}
//                             75%{margin-top: 15px;margin-left: 25px;}
//                             80%{margin-top: 50px;margin-left: 35px;}
//                             85%{margin-top: 10px;margin-left: 35px;}
//                             90%{margin-top: 45px;margin-left: 15px;}
//                             95%{margin-top: 60px;margin-left: 30px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}

//                         }
//                         #ballsss7 {
//                             animation: spinStats7 5s linear infinite alternate;
//                             -webkit-animation: spinStats7 5s linear infinite alternate;
//                         }
//                         `;
//                 ball7.appendChild(keyFramesw);
//                 //=========================blue balls8====================================
//                 document.getElementById("ballsss8").style.animationName = "spinStats8";
//                 var ball8 = document.querySelector('#ballsss8');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats8 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 15px;margin-left: 50px;}
//                             10%{margin-top: 55px;margin-left: 30px;}
//                             15%{margin-top: 40px;margin-left: 23px;}
//                             20%{margin-top: 25px;margin-left: 35px;}
//                             25%{margin-top: 40px;margin-left: 40px;}
//                             30%{margin-top: 60px;margin-left: 30px;}
//                             35%{margin-top: 45px;margin-left: 10px;}
//                             40%{margin-top: 55px;margin-left: 25px;}
//                             45%{margin-top: 15px;margin-left: 27px;}
//                             50%{margin-top: 30px;margin-left: 60px;}
//                             55%{margin-top: 55px;margin-left: 55px;}
//                             60%{margin-top: 60px;margin-left: 30px;}
//                             65%{margin-top: 40px;margin-left: 25px;}
//                             70%{margin-top: 10px;margin-left: 12px;}
//                             75%{margin-top: 45px;margin-left: 15px;}
//                             80%{margin-top: 40px;margin-left: 55px;}
//                             85%{margin-top: 0px;margin-left: 30px;}
//                             90%{margin-top: 55px;margin-left: 25px;}
//                             95%{margin-top: 30px;margin-left: 30px;}
//                             100%{margin-top: 58px;margin-left: 28px;background-position: 100%;}

//                         }
//                         #ballsss8 {
//                             animation: spinStats8 5s linear infinite alternate;
//                             -webkit-animation: spinStats8 5s linear infinite alternate;
//                         }
//                         `;
//                 ball8.appendChild(keyFramesw);
//                 //=========================blue balls9====================================
//                 document.getElementById("ballsss9").style.animationName = "spinStats9";
//                 var ball9 = document.querySelector('#ballsss9');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats9 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 45px;margin-left: 15px;}
//                             10%{margin-top: 55px;margin-left: 15px;}
//                             15%{margin-top: 60px;margin-left: 30px;}
//                             20%{margin-top: 45px;margin-left: 40px;}
//                             25%{margin-top: 55px;margin-left: 25px;}
//                             30%{margin-top: 10px;margin-left: 25px;}
//                             35%{margin-top: 45px;margin-left: 45px;}
//                             40%{margin-top: 60px;margin-left: 30px;}
//                             45%{margin-top: 30px;margin-left: 0px;}
//                             50%{margin-top: 10px;margin-left: 25px;}
//                             55%{margin-top: 40px;margin-left: 35px;}
//                             60%{margin-top: 55px;margin-left: 25px;}
//                             65%{margin-top: 60px;margin-left: 33px;}
//                             70%{margin-top: 40px;margin-left: 40px;}
//                             75%{margin-top: 15px;margin-left: 20px;}
//                             80%{margin-top: 30px;margin-left: 15px;}
//                             85%{margin-top: 60px;margin-left: 30px;}
//                             90%{margin-top: 0px;margin-left: 30px;}
//                             95%{margin-top: 30px;margin-left: 0px;}
//                             100%{margin-top: 61px;margin-left: 35px;background-position: 100%;}

//                         }
//                         #ballsss9 {
//                             animation: spinStats9 5s linear infinite alternate;
//                             -webkit-animation: spinStats9 5s linear infinite alternate;
//                         }
//                         `;
//                 ball9.appendChild(keyFramesw);
//                 //=========================blue balls0====================================
//                 document.getElementById("ballsss0").style.animationName = "spinStats0";
//                 var ball0 = document.querySelector('#ballsss0');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats0 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 50px;margin-left: 15px;}
//                             10%{margin-top: 45px;margin-left: 20px;}
//                             15%{margin-top: 20px;margin-left: 15px;}
//                             20%{margin-top: 0px;margin-left: 30px;}
//                             25%{margin-top: 20px;margin-left: 38px;}
//                             30%{margin-top: 35px;margin-left: 40px;}
//                             35%{margin-top: 45px;margin-left: 45px;}
//                             40%{margin-top: 58px;margin-left: 50px;}
//                             45%{margin-top: 30px;margin-left: 0px;}
//                             50%{margin-top: 0px;margin-left: 30px;}
//                             55%{margin-top: 57px;margin-left: 28px;}
//                             60%{margin-top: 15px;margin-left: 35px;}
//                             65%{margin-top: 40px;margin-left: 20px;}
//                             70%{margin-top: 15px;margin-left: 35px;}
//                             75%{margin-top: 60px;margin-left: 30px;}
//                             80%{margin-top: 50px;margin-left: 15px;}
//                             85%{margin-top: 10px;margin-left: 40px;}
//                             90%{margin-top: 40px;margin-left: 23px;}
//                             95%{margin-top: 20px;margin-left: 30px;}
//                             100%{margin-top: 58px;margin-left: 28px;background-position: 100%;}

//                         }
//                         #ballsss0 {
//                             animation: spinStats0 5s linear infinite alternate;
//                             -webkit-animation: spinStats0 5s linear infinite alternate;
//                         }
//                         `;
//                 ball0.appendChild(keyFramesw);
//                 psound=parseInt(document.getElementById("pSound").innerHTML);
//                 if(psound==2){
//                     puaseplay();
//                 }else{
//                     play();
//                 }
//             }
//             if (cnt == 79) {
//                 var result18 = Math.floor(Math.random() * 10);
//                 document.getElementById("boxball3").innerHTML = result18;
//                 document.getElementById("boxBall3").style.animation = "";
//                 document.getElementById("ballsss0").style.animationName = "anib0";
//                 document.getElementById("ballsss9").style.animationName = "anib9";
//                 document.getElementById("ballsss8").style.animationName = "anib8";
//                 document.getElementById("ballsss7").style.animationName = "anib7";
//                 document.getElementById("ballsss6").style.animationName = "anib6";
//                 document.getElementById("ballsss5").style.animationName = "anib5";
//                 document.getElementById("ballsss4").style.animationName = "anib4";
//                 document.getElementById("ballsss3").style.animationName = "anib3";
//                 document.getElementById("ballsss2").style.animationName = "anib2";
//                 document.getElementById("ballsss1").style.animationName = "anib1";
//                 document.getElementById("imgspin3").style.animation = "none";
//                 var runball = document.querySelector('#boxBall3');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes run17 {
//                             from {
//                                 height: 60px;
//                                 width: 60px;
//                                 margin-top: 0px;
//                                 margin-left: 80px;
//                                 opacity: 1;
//                             }
//                             to {
//                                 margin-top: 80px;
//                                 margin-left: 460px;
//                                 height: 40px;
//                                 width: 40px;
//                                 z-index: 1;
//                                 opacity: 0;
//                             }
//                         }
//                         #boxBall3 {
//                             animation: run17 1s linear infinite;
//                             -webkit-animation: run17 1s linear infinite;
//                         }
//                         `;
//                 runball.appendChild(keyFramesw);
//                 psound=parseInt(document.getElementById("pSound").innerHTML);
//                 if(psound==2){
//                      puase1();
//                 }else{
//                    play1();
//                 }
//             }
//             /*19*/
//             if (cnt == 81) {
//                 document.getElementById("boxBall2").style.animation = "none";
//                 var result17 = document.getElementById("boxball2").innerHTML;
//                 document.getElementById("nums17").innerHTML = result17;
//                 document.getElementById("imgspin4").style.animation = "";
//                 var spinball = document.querySelector('#imgspin4');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spin2 {
//                             from {
//                                 transform: rotate(0deg);
//                                 -webkit-transform: rotate(0deg);
//                             }
//                             to {
//                                 transform: rotate(360deg);
//                                 -webkit-transform: rotate(360deg);
//                             }
//                         }
//                         #imgspin4 {
//                             animation: spin2 0.8s linear infinite;
//                             -webkit-animation: spin2 0.8s linear infinite;
//                         }
//                         `;
//                 spinball.appendChild(keyFramesw);
//                 // =========================blue ball1====================================
//                 document.getElementById("ballssss1").style.animationName = "spinStat1";
//                 var balls1 = document.querySelector('#ballssss1');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat1 {
//                             0%{margin-top: 60px;margin-left: 50px;}
//                             5%{margin-top: 30px;margin-left: 0px;}
//                             10%{margin-top: 50px;margin-left: 20px;}
//                             15%{margin-top: 0px;margin-left: 30px;}
//                             20%{margin-top: 60px;margin-left: 40px;}
//                             25%{margin-top: 50px;margin-left: 40px;}
//                             30%{margin-top: 10px;margin-left: 20px;}
//                             35%{margin-top: 0px;margin-left: 20px;}
//                             40%{margin-top: 30px;margin-left: 60px;}
//                             45%{margin-top: 10px;margin-left: 40px;}
//                             50%{margin-top: 63px;margin-left: 30px;}
//                             55{margin-top: 10px;margin-left: 35px;}
//                             60%{margin-top: 33px;margin-left: 0px;}
//                             65%{margin-top: 10px;margin-left: 30px;}
//                             70%{margin-top: 0px;margin-left: 25px;}
//                             75%{margin-top: 20px;margin-left: 20px;}
//                             80%{margin-top: 20px;margin-left: 40px;}
//                             85%{margin-top:20px;margin-left: 12px;}
//                             90%{margin-top: 50px;margin-left: 20px;}
//                             95%{margin-top: 0px;margin-left: 35px;}
//                             100%{margin-top: 27px;margin-left: 33px;background-position: 100%;}
//                         }
//                         #ballssss1 {
//                             animation: spinStat1 5s linear infinite alternate;
//                             -webkit-animation: spinstat1 5s linear infinite alternate;
//                         }
//                         `;
//                 balls1.appendChild(keyFramesw);
//                 // =========================blue balls2====================================
//                 document.getElementById("ballssss2").style.animationName = "spinStats2";
//                 var ball2 = document.querySelector('#ballssss2');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats2 {
//                             0%{margin-top: 60px;margin-left: 31px;}
//                                 5%{margin-top: 8px;margin-left: 30px;}
//                                 10%{margin-top: 30px;margin-left: 50px;}
//                                 15%{margin-top: 20px;margin-left: 10px;}
//                                 20%{margin-top: 50px;margin-left: 30px;}
//                                 25%{margin-top: 0px;margin-left: 30px;}
//                                 30%{margin-top: 60px;margin-left: 30px;}
//                                 35%{margin-top: 0px;margin-left: 30px;}
//                                 40%{margin-top: 30px;margin-left: 10px;}
//                                 45%{margin-top: 30px;margin-left: 60px;}
//                                 50%{margin-top: 63px;margin-left: 30px;}
//                                 55%{margin-top: 10px;margin-left: 45px;}
//                                 60%{margin-top: 55px;margin-left: 10px;}
//                                 65%{margin-top: 20px;margin-left: 35px;}
//                                 70%{margin-top: 45px;margin-left: 60px;}
//                                 75%{margin-top: 10px;margin-left: 49px;}
//                                 80%{margin-top: 48px;margin-left: 50px;}
//                                 85%{margin-top: 18px;margin-left: 30px;}
//                                 90%{margin-top: 20px;margin-left: 10px;}
//                                 95%{margin-top: 0px;margin-left: 30px;}
//                                 100%{margin-top: 63px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballssss2 {
//                             animation: spinStats2 5s linear infinite alternate;
//                             -webkit-animation: spinStats2 5s linear infinite alternate;
//                         }
//                         `;
//                 ball2.appendChild(keyFramesw);
//                 // =========================blue balls3====================================
//                 document.getElementById("ballssss3").style.animationName = "spinStats3";
//                 var ball3 = document.querySelector('#ballssss3');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats3 {
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 30px;margin-left: 0px;}
//                             10%{margin-top: 0px;margin-left: 30px;}
//                             15%{margin-top: 30px;margin-left: 60px;}
//                             20%{margin-top: 60px;margin-left: 30px;}
//                             25%{margin-top: 0px;margin-left: 27px;}
//                             30%{margin-top: 20px;margin-left: 50px;}
//                             35%{margin-top: 60px;margin-left: 30px;}
//                             40%{margin-top: 30px;margin-left: 15px;}
//                             45%{margin-top: 45px;margin-left: 45px;}
//                             50%{margin-top: 10px;margin-left: 50px;}
//                             55%{margin-top: 55px;margin-left: 30px;}
//                             60%{margin-top: 30px;margin-left: 20px;}
//                             65%{margin-top: 60px;margin-left: 30px;}
//                             70%{margin-top: 40px;margin-left: 15px;}
//                             75%{margin-top: 15px;margin-left: 30px;}
//                             80%{margin-top: 18px;margin-left: 20px;}
//                             85%{margin-top: 20px;margin-left: 60px;}
//                             90%{margin-top: 60px;margin-left: 30px;}
//                             95%{margin-top: 10px;margin-left: 35px;}
//                             100%{margin-top: 63px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballssss3 {
//                             animation: spinStats3 5s linear infinite alternate;
//                             -webkit-animation: spinStats3 5s linear infinite alternate;
//                         }
//                         `;
//                 ball3.appendChild(keyFramesw);
//                 // =========================blue balls4====================================
//                 document.getElementById("ballssss4").style.animationName = "spinStats4";
//                 var ball4 = document.querySelector('#ballssss4');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats4 {
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 15px;margin-left: 30px;}
//                             10%{margin-top: 40px;margin-left: 50px;}
//                             15%{margin-top: 60px;margin-left: 30px;}
//                             20%{margin-top: 50px;margin-left: 50px;}
//                             25%{margin-top: 6px;margin-left: 30px;}
//                             30%{margin-top: 45px;margin-left: 20px;}
//                             35%{margin-top: 15px;margin-left: 20px;}
//                             40%{margin-top: 0px;margin-left: 30px;}
//                             45%{margin-top: 20px;margin-left: 50px;}
//                             50%{margin-top: 35px;margin-left: 60px;}
//                             55%{margin-top: 55px;margin-left: 45px;}
//                             60%{margin-top: 60px;margin-left: 30px;}
//                             65%{margin-top: 0px;margin-left: 30px;}
//                             70%{margin-top: 60px;margin-left: 30px;}
//                             75%{margin-top: 15px;margin-left: 25px;}
//                             80%{margin-top: 55px;margin-left: 20px;}
//                             85%{margin-top: 0px;margin-left: 30px;}
//                             90%{margin-top: 55px;margin-left: 27px;}
//                             95%{margin-top: 20px;margin-left: 58px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballssss4 {
//                             animation: spinStats4 5s linear infinite alternate;
//                             -webkit-animation: spinStats4 5s linear infinite alternate;
//                         }
//                         `;
//                 ball4.appendChild(keyFramesw);
//                 // =========================blue balls5====================================
//                 document.getElementById("ballssss5").style.animationName = "spinStats5";
//                 var ball5 = document.querySelector('#ballssss5');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats5 { 
//                             0%{margin-top: 60px;margin-left: 35px;}
//                             5%{margin-top: 40px;margin-left: 50px;}
//                             10%{margin-top: 60px;margin-left: 30px;}
//                             15%{margin-top: 30px;margin-left: 0px;}
//                             20%{margin-top: 20px;margin-left: 20px;}
//                             25%{margin-top: 0px;margin-left: 30px;}
//                             30%{margin-top: 60px;margin-left: 30px;}
//                             35%{margin-top: 40px;margin-left: 25px;}
//                             40%{margin-top: 60px;margin-left: 30px;}
//                             45%{margin-top: 10px;margin-left: 30px;}
//                             50%{margin-top: 30px;margin-left: 60px;}
//                             55%{margin-top: 60px;margin-left: 35px;}
//                             60%{margin-top: 0px;margin-left: 30px;}
//                             65%{margin-top: 15px;margin-left: 25px;}
//                             70%{margin-top: 20px;margin-left: 50px;}
//                             75%{margin-top: 35px;margin-left: 0px;}
//                             80%{margin-top: 12px;margin-left: 20px;}
//                             85%{margin-top: 0px;margin-left: 35px;}
//                             90%{margin-top: 60px;margin-left: 30px;}
//                             95%{margin-top: 30px;margin-left: 60px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballssss5 {
//                             animation: spinStats5 5s linear infinite alternate;
//                             -webkit-animation: spinStats5 5s linear infinite alternate;
//                         }
//                         `;
//                 ball5.appendChild(keyFramesw);
//                 //=========================blue balls6====================================
//                 document.getElementById("ballssss6").style.animationName = "spinStats6";
//                 var ball6 = document.querySelector('#ballssss6');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats6 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 0px;margin-left: 30px;}
//                             10%{margin-top: 10px;margin-left: 45px;}
//                             15%{margin-top: 60px;margin-left: 28px;}
//                             20%{margin-top: 10px;margin-left: 25px;}
//                             25%{margin-top: 30px;margin-left: 0px;}
//                             30%{margin-top: 0px;margin-left: 30px;}
//                             35%{margin-top: 44px;margin-left: 44px;}
//                             40%{margin-top: 60px;margin-left: 30x;}
//                             45%{margin-top: 40px;margin-left: 30px;}
//                             50%{margin-top: 20px;margin-left: 45px;}
//                             55%{margin-top: 40px;margin-left: 40px;}
//                             60%{margin-top: 55px;margin-left: 35px;}
//                             65%{margin-top: 50px;margin-left: 30px;}
//                             70%{margin-top: 0px;margin-left: 30px;}
//                             75%{margin-top: 60px;margin-left: 10px;}
//                             80%{margin-top: 30px;margin-left: 60px;}
//                             85%{margin-top: 25px;margin-left: 55px;}
//                             90%{margin-top: 5px;margin-left: 40px;}
//                             95%{margin-top: 20px;margin-left: 25x;}
//                             100%{margin-top: 60px;margin-left: 31px;background-position: 100%;}
//                         }
//                         #ballssss6 {
//                             animation: spinStats6 5s linear infinite alternate;
//                             -webkit-animation: spinStats6 5s linear infinite alternate;
//                         }
//                         `;
//                 ball6.appendChild(keyFramesw);
//                 //=========================blue balls7====================================
//                 document.getElementById("ballssss7").style.animationName = "spinStats7";
//                 var ball7 = document.querySelector('#ballssss7');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats7 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 40px;margin-left: 20px;}
//                             10%{margin-top: 30px;margin-left: 0px;}
//                             15%{margin-top: 25px;margin-left: 20px;}
//                             20%{margin-top: 0px;margin-left: 30px;}
//                             25%{margin-top: 25px;margin-left: 40px;}
//                             30%{margin-top: 50px;margin-left: 40px;}
//                             35%{margin-top: 60px;margin-left: 30px;}
//                             40%{margin-top: 0px;margin-left: 30px;}
//                             45%{margin-top: 55px;margin-left: 10px;}
//                             50%{margin-top: 15px;margin-left: 20px;}
//                             55%{margin-top: 25px;margin-left: 45px;}
//                             60%{margin-top: 50px;margin-left: 15px;}
//                             65%{margin-top: 20px;margin-left: 50px;}
//                             70%{margin-top: 0px;margin-left: 30px;}
//                             75%{margin-top: 15px;margin-left: 25px;}
//                             80%{margin-top: 50px;margin-left: 35px;}
//                             85%{margin-top: 10px;margin-left: 35px;}
//                             90%{margin-top: 45px;margin-left: 15px;}
//                             95%{margin-top: 60px;margin-left: 30px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}

//                         }
//                         #ballssss7 {
//                             animation: spinStats7 5s linear infinite alternate;
//                             -webkit-animation: spinStats7 5s linear infinite alternate;
//                         }
//                         `;
//                 ball7.appendChild(keyFramesw);
//                 //=========================blue balls8====================================
//                 document.getElementById("ballssss8").style.animationName = "spinStats8";
//                 var ball8 = document.querySelector('#ballssss8');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats8 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 15px;margin-left: 50px;}
//                             10%{margin-top: 55px;margin-left: 30px;}
//                             15%{margin-top: 40px;margin-left: 23px;}
//                             20%{margin-top: 25px;margin-left: 35px;}
//                             25%{margin-top: 40px;margin-left: 40px;}
//                             30%{margin-top: 60px;margin-left: 30px;}
//                             35%{margin-top: 45px;margin-left: 10px;}
//                             40%{margin-top: 55px;margin-left: 25px;}
//                             45%{margin-top: 15px;margin-left: 27px;}
//                             50%{margin-top: 30px;margin-left: 60px;}
//                             55%{margin-top: 55px;margin-left: 55px;}
//                             60%{margin-top: 60px;margin-left: 30px;}
//                             65%{margin-top: 40px;margin-left: 25px;}
//                             70%{margin-top: 10px;margin-left: 12px;}
//                             75%{margin-top: 45px;margin-left: 15px;}
//                             80%{margin-top: 40px;margin-left: 55px;}
//                             85%{margin-top: 0px;margin-left: 30px;}
//                             90%{margin-top: 55px;margin-left: 25px;}
//                             95%{margin-top: 30px;margin-left: 30px;}
//                             100%{margin-top: 58px;margin-left: 28px;background-position: 100%;}

//                         }
//                         #ballssss8 {
//                             animation: spinStats8 5s linear infinite alternate;
//                             -webkit-animation: spinStats8 5s linear infinite alternate;
//                         }
//                         `;
//                 ball8.appendChild(keyFramesw);
//                 //=========================blue balls9====================================
//                 document.getElementById("ballssss9").style.animationName = "spinStats9";
//                 var ball9 = document.querySelector('#ballssss9');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats9 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 45px;margin-left: 15px;}
//                             10%{margin-top: 55px;margin-left: 15px;}
//                             15%{margin-top: 60px;margin-left: 30px;}
//                             20%{margin-top: 45px;margin-left: 40px;}
//                             25%{margin-top: 55px;margin-left: 25px;}
//                             30%{margin-top: 10px;margin-left: 25px;}
//                             35%{margin-top: 45px;margin-left: 45px;}
//                             40%{margin-top: 60px;margin-left: 30px;}
//                             45%{margin-top: 30px;margin-left: 0px;}
//                             50%{margin-top: 10px;margin-left: 25px;}
//                             55%{margin-top: 40px;margin-left: 35px;}
//                             60%{margin-top: 55px;margin-left: 25px;}
//                             65%{margin-top: 60px;margin-left: 33px;}
//                             70%{margin-top: 40px;margin-left: 40px;}
//                             75%{margin-top: 15px;margin-left: 20px;}
//                             80%{margin-top: 30px;margin-left: 15px;}
//                             85%{margin-top: 60px;margin-left: 30px;}
//                             90%{margin-top: 0px;margin-left: 30px;}
//                             95%{margin-top: 30px;margin-left: 0px;}
//                             100%{margin-top: 61px;margin-left: 35px;background-position: 100%;}

//                         }
//                         #ballssss9 {
//                             animation: spinStats9 5s linear infinite alternate;
//                             -webkit-animation: spinStats9 5s linear infinite alternate;
//                         }
//                         `;
//                 ball9.appendChild(keyFramesw);
//                 //=========================blue balls0====================================
//                 document.getElementById("ballssss0").style.animationName = "spinStats0";
//                 var ball0 = document.querySelector('#ballssss0');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats0 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 50px;margin-left: 15px;}
//                             10%{margin-top: 45px;margin-left: 20px;}
//                             15%{margin-top: 20px;margin-left: 15px;}
//                             20%{margin-top: 0px;margin-left: 30px;}
//                             25%{margin-top: 20px;margin-left: 38px;}
//                             30%{margin-top: 35px;margin-left: 40px;}
//                             35%{margin-top: 45px;margin-left: 45px;}
//                             40%{margin-top: 58px;margin-left: 50px;}
//                             45%{margin-top: 30px;margin-left: 0px;}
//                             50%{margin-top: 0px;margin-left: 30px;}
//                             55%{margin-top: 57px;margin-left: 28px;}
//                             60%{margin-top: 15px;margin-left: 35px;}
//                             65%{margin-top: 40px;margin-left: 20px;}
//                             70%{margin-top: 15px;margin-left: 35px;}
//                             75%{margin-top: 60px;margin-left: 30px;}
//                             80%{margin-top: 50px;margin-left: 15px;}
//                             85%{margin-top: 10px;margin-left: 40px;}
//                             90%{margin-top: 40px;margin-left: 23px;}
//                             95%{margin-top: 20px;margin-left: 30px;}
//                             100%{margin-top: 58px;margin-left: 28px;background-position: 100%;}

//                         }
//                         #ballssss0 {
//                             animation: spinStats0 5s linear infinite alternate;
//                             -webkit-animation: spinStats0 5s linear infinite alternate;
//                         }
//                         `;
//                 ball0.appendChild(keyFramesw);
//                 psound=parseInt(document.getElementById("pSound").innerHTML);
//                 if(psound==2){
//                     puaseplay();
//                 }else{
//                     play();
//                 }
//             }
//             if (cnt == 76) {
//                 document.getElementById("boxBall4").style.animation = "";
//                 var result19 = Math.floor(Math.random() * 10);
//                 document.getElementById("boxball4").innerHTML = result19;
//                 document.getElementById("ballssss0").style.animationName = "anib0";
//                 document.getElementById("ballssss9").style.animationName = "anib9";
//                 document.getElementById("ballssss8").style.animationName = "anib8";
//                 document.getElementById("ballssss7").style.animationName = "anib7";
//                 document.getElementById("ballssss6").style.animationName = "anib6";
//                 document.getElementById("ballssss5").style.animationName = "anib5";
//                 document.getElementById("ballssss4").style.animationName = "anib4";
//                 document.getElementById("ballssss3").style.animationName = "anib3";
//                 document.getElementById("ballssss2").style.animationName = "anib2";
//                 document.getElementById("ballssss1").style.animationName = "anib1";
//                 document.getElementById("imgspin4").style.animation = "none";
//                 var runball = document.querySelector('#boxBall4');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes run18 {
//                             from {
//                                 height: 60px;
//                                 width: 60px;
//                                 margin-top: 0px;
//                                 margin-left: 140px;
//                                 opacity: 1;
//                             }
//                             to {
//                                 margin-top: 80px;
//                                 margin-left: 330px;
//                                 height: 40px;
//                                 width: 40px;
//                                 z-index: 1;
//                                 opacity: 0;

//                             }
//                         }
//                         #boxBall4 {
//                             animation: run18 1s linear infinite;
//                             -webkit-animation: run18 1s linear infinite;
//                         }
//                         `;
//                 runball.appendChild(keyFramesw);
//                 psound=parseInt(document.getElementById("pSound").innerHTML);
//                 if(psound==2){
//                      puase1();
//                 }else{
//                    play1();
//                 }
//             }
//             /*20*/
//             if (cnt == 78) {
//                 document.getElementById("boxBall3").style.animation = "none";
//                 var result18 = document.getElementById("boxball3").innerHTML;
//                 document.getElementById("nums18").innerHTML = result18;
//                 document.getElementById("imgspin5").style.animation = "";
//                 var spinball = document.querySelector('#imgspin5');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spin2 {
//                             from {
//                                 transform: rotate(0deg);
//                                 -webkit-transform: rotate(0deg);
//                             }
//                             to {
//                                 transform: rotate(360deg);
//                                 -webkit-transform: rotate(360deg);
//                             }
//                         }
//                         #imgspin5 {
//                             animation: spin2 0.8s linear infinite;
//                             -webkit-animation: spin2 0.8s linear infinite;
//                         }
//                         `;
//                 spinball.appendChild(keyFramesw);
//                 // =========================blue ball1====================================
//                 document.getElementById("ballsssss1").style.animationName = "spinStat1";
//                 var balls1 = document.querySelector('#ballsssss1');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStat1 {
//                             0%{margin-top: 60px;margin-left: 50px;}
//                             5%{margin-top: 30px;margin-left: 0px;}
//                             10%{margin-top: 50px;margin-left: 20px;}
//                             15%{margin-top: 0px;margin-left: 30px;}
//                             20%{margin-top: 60px;margin-left: 40px;}
//                             25%{margin-top: 50px;margin-left: 40px;}
//                             30%{margin-top: 10px;margin-left: 20px;}
//                             35%{margin-top: 0px;margin-left: 20px;}
//                             40%{margin-top: 30px;margin-left: 60px;}
//                             45%{margin-top: 10px;margin-left: 40px;}
//                             50%{margin-top: 63px;margin-left: 30px;}
//                             55{margin-top: 10px;margin-left: 35px;}
//                             60%{margin-top: 33px;margin-left: 0px;}
//                             65%{margin-top: 10px;margin-left: 30px;}
//                             70%{margin-top: 0px;margin-left: 25px;}
//                             75%{margin-top: 20px;margin-left: 20px;}
//                             80%{margin-top: 20px;margin-left: 40px;}
//                             85%{margin-top:20px;margin-left: 12px;}
//                             90%{margin-top: 50px;margin-left: 20px;}
//                             95%{margin-top: 0px;margin-left: 35px;}
//                             100%{margin-top: 27px;margin-left: 33px;background-position: 100%;}
//                         }
//                         #ballsssss1 {
//                             animation: spinStat1 5s linear infinite;
//                             -webkit-animation: spinstat1 5s linear infinite;
//                         }
//                         `;
//                 balls1.appendChild(keyFramesw);
//                 // =========================blue balls2====================================
//                 document.getElementById("ballsssss2").style.animationName = "spinStats2";
//                 var ball2 = document.querySelector('#ballsssss2');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats2 {
//                             0%{margin-top: 60px;margin-left: 31px;}
//                                 5%{margin-top: 8px;margin-left: 30px;}
//                                 10%{margin-top: 30px;margin-left: 50px;}
//                                 15%{margin-top: 20px;margin-left: 10px;}
//                                 20%{margin-top: 50px;margin-left: 30px;}
//                                 25%{margin-top: 0px;margin-left: 30px;}
//                                 30%{margin-top: 60px;margin-left: 30px;}
//                                 35%{margin-top: 0px;margin-left: 30px;}
//                                 40%{margin-top: 30px;margin-left: 10px;}
//                                 45%{margin-top: 30px;margin-left: 60px;}
//                                 50%{margin-top: 63px;margin-left: 30px;}
//                                 55%{margin-top: 10px;margin-left: 45px;}
//                                 60%{margin-top: 55px;margin-left: 10px;}
//                                 65%{margin-top: 20px;margin-left: 35px;}
//                                 70%{margin-top: 45px;margin-left: 60px;}
//                                 75%{margin-top: 10px;margin-left: 49px;}
//                                 80%{margin-top: 48px;margin-left: 50px;}
//                                 85%{margin-top: 18px;margin-left: 30px;}
//                                 90%{margin-top: 20px;margin-left: 10px;}
//                                 95%{margin-top: 0px;margin-left: 30px;}
//                                 100%{margin-top: 63px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballsssss2 {
//                             animation: spinStats2 5s linear infinite;
//                             -webkit-animation: spinStats2 5s linear infinite;
//                         }
//                         `;
//                 ball2.appendChild(keyFramesw);
//                 // =========================blue balls3====================================
//                 document.getElementById("ballsssss3").style.animationName = "spinStats3";
//                 var ball3 = document.querySelector('#ballsssss3');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats3 {
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 30px;margin-left: 0px;}
//                             10%{margin-top: 0px;margin-left: 30px;}
//                             15%{margin-top: 30px;margin-left: 60px;}
//                             20%{margin-top: 60px;margin-left: 30px;}
//                             25%{margin-top: 0px;margin-left: 27px;}
//                             30%{margin-top: 20px;margin-left: 50px;}
//                             35%{margin-top: 60px;margin-left: 30px;}
//                             40%{margin-top: 30px;margin-left: 15px;}
//                             45%{margin-top: 45px;margin-left: 45px;}
//                             50%{margin-top: 10px;margin-left: 50px;}
//                             55%{margin-top: 55px;margin-left: 30px;}
//                             60%{margin-top: 30px;margin-left: 20px;}
//                             65%{margin-top: 60px;margin-left: 30px;}
//                             70%{margin-top: 40px;margin-left: 15px;}
//                             75%{margin-top: 15px;margin-left: 30px;}
//                             80%{margin-top: 18px;margin-left: 20px;}
//                             85%{margin-top: 20px;margin-left: 60px;}
//                             90%{margin-top: 60px;margin-left: 30px;}
//                             95%{margin-top: 10px;margin-left: 35px;}
//                             100%{margin-top: 63px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballsssss3 {
//                             animation: spinStats3 5s linear infinite;
//                             -webkit-animation: spinStats3 5s linear infinite;
//                         }
//                         `;
//                 ball3.appendChild(keyFramesw);
//                 // =========================blue balls4====================================
//                 document.getElementById("ballsssss4").style.animationName = "spinStats4";
//                 var ball4 = document.querySelector('#ballsssss4');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats4 {
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 15px;margin-left: 30px;}
//                             10%{margin-top: 40px;margin-left: 50px;}
//                             15%{margin-top: 60px;margin-left: 30px;}
//                             20%{margin-top: 50px;margin-left: 50px;}
//                             25%{margin-top: 6px;margin-left: 30px;}
//                             30%{margin-top: 45px;margin-left: 20px;}
//                             35%{margin-top: 15px;margin-left: 20px;}
//                             40%{margin-top: 0px;margin-left: 30px;}
//                             45%{margin-top: 20px;margin-left: 50px;}
//                             50%{margin-top: 35px;margin-left: 60px;}
//                             55%{margin-top: 55px;margin-left: 45px;}
//                             60%{margin-top: 60px;margin-left: 30px;}
//                             65%{margin-top: 0px;margin-left: 30px;}
//                             70%{margin-top: 60px;margin-left: 30px;}
//                             75%{margin-top: 15px;margin-left: 25px;}
//                             80%{margin-top: 55px;margin-left: 20px;}
//                             85%{margin-top: 0px;margin-left: 30px;}
//                             90%{margin-top: 55px;margin-left: 27px;}
//                             95%{margin-top: 20px;margin-left: 58px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}
//                         }
//                         #ballsssss4 {
//                             animation: spinStats4 5s linear infinite;
//                             -webkit-animation: spinStats4 5s linear infinite;
//                         }
//                         `;
//                 ball4.appendChild(keyFramesw);
//                 // =========================blue balls5====================================
//                 document.getElementById("ballsssss5").style.animationName = "spinStats5";
//                 var ball5 = document.querySelector('#ballsssss5');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats5 { 
//                             0%{margin-top: 60px;margin-left: 35px;}
//                             5%{margin-top: 40px;margin-left: 50px;}
//                             10%{margin-top: 60px;margin-left: 30px;}
//                             15%{margin-top: 30px;margin-left: 0px;}
//                             20%{margin-top: 20px;margin-left: 20px;}
//                             25%{margin-top: 0px;margin-left: 30px;}
//                             30%{margin-top: 60px;margin-left: 30px;}
//                             35%{margin-top: 40px;margin-left: 25px;}
//                             40%{margin-top: 60px;margin-left: 30px;}
//                             45%{margin-top: 10px;margin-left: 30px;}
//                             50%{margin-top: 30px;margin-left: 60px;}
//                             55%{margin-top: 60px;margin-left: 35px;}
//                             60%{margin-top: 0px;margin-left: 30px;}
//                             65%{margin-top: 15px;margin-left: 25px;}
//                             70%{margin-top: 20px;margin-left: 50px;}
//                             75%{margin-top: 35px;margin-left: 0px;}
//                             80%{margin-top: 12px;margin-left: 20px;}
//                             85%{margin-top: 0px;margin-left: 35px;}
//                             90%{margin-top: 60px;margin-left: 30px;}
//                             95%{margin-top: 30px;margin-left: 60px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}

//                         }
//                         #ballsssss5 {
//                             animation: spinStats5 5s linear infinite;
//                             -webkit-animation: spinStats5 5s linear infinite;
//                         }
//                         `;
//                 ball5.appendChild(keyFramesw);
//                 //=========================blue balls6====================================
//                 document.getElementById("ballsssss6").style.animationName = "spinStats6";
//                 var ball6 = document.querySelector('#ballsssss6');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats6 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 0px;margin-left: 30px;}
//                             10%{margin-top: 10px;margin-left: 45px;}
//                             15%{margin-top: 60px;margin-left: 28px;}
//                             20%{margin-top: 10px;margin-left: 25px;}
//                             25%{margin-top: 30px;margin-left: 0px;}
//                             30%{margin-top: 0px;margin-left: 30px;}
//                             35%{margin-top: 44px;margin-left: 44px;}
//                             40%{margin-top: 60px;margin-left: 30x;}
//                             45%{margin-top: 40px;margin-left: 30px;}
//                             50%{margin-top: 20px;margin-left: 45px;}
//                             55%{margin-top: 40px;margin-left: 40px;}
//                             60%{margin-top: 55px;margin-left: 35px;}
//                             65%{margin-top: 50px;margin-left: 30px;}
//                             70%{margin-top: 0px;margin-left: 30px;}
//                             75%{margin-top: 60px;margin-left: 10px;}
//                             80%{margin-top: 30px;margin-left: 60px;}
//                             85%{margin-top: 25px;margin-left: 55px;}
//                             90%{margin-top: 5px;margin-left: 40px;}
//                             95%{margin-top: 20px;margin-left: 25x;}
//                             100%{margin-top: 60px;margin-left: 31px;background-position: 100%;}

//                         }
//                         #ballsssss6 {
//                             animation: spinStats6 5s linear infinite;
//                             -webkit-animation: spinStats6 5s linear infinite;
//                         }
//                         `;
//                 ball6.appendChild(keyFramesw);
//                 //=========================blue balls7====================================
//                 document.getElementById("ballsssss7").style.animationName = "spinStats7";
//                 var ball7 = document.querySelector('#ballsssss7');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats7 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 40px;margin-left: 20px;}
//                             10%{margin-top: 30px;margin-left: 0px;}
//                             15%{margin-top: 25px;margin-left: 20px;}
//                             20%{margin-top: 0px;margin-left: 30px;}
//                             25%{margin-top: 25px;margin-left: 40px;}
//                             30%{margin-top: 50px;margin-left: 40px;}
//                             35%{margin-top: 60px;margin-left: 30px;}
//                             40%{margin-top: 0px;margin-left: 30px;}
//                             45%{margin-top: 55px;margin-left: 10px;}
//                             50%{margin-top: 15px;margin-left: 20px;}
//                             55%{margin-top: 25px;margin-left: 45px;}
//                             60%{margin-top: 50px;margin-left: 15px;}
//                             65%{margin-top: 20px;margin-left: 50px;}
//                             70%{margin-top: 0px;margin-left: 30px;}
//                             75%{margin-top: 15px;margin-left: 25px;}
//                             80%{margin-top: 50px;margin-left: 35px;}
//                             85%{margin-top: 10px;margin-left: 35px;}
//                             90%{margin-top: 45px;margin-left: 15px;}
//                             95%{margin-top: 60px;margin-left: 30px;}
//                             100%{margin-top: 60px;margin-left: 30px;background-position: 100%;}

//                         }
//                         #ballsssss7 {
//                             animation: spinStats7 5s linear infinite;
//                             -webkit-animation: spinStats7 5s linear infinite;
//                         }
//                         `;
//                 ball7.appendChild(keyFramesw);
//                 //=========================blue balls8====================================
//                 document.getElementById("ballsssss8").style.animationName = "spinStats8";
//                 var ball8 = document.querySelector('#ballsssss8');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats8 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 15px;margin-left: 50px;}
//                             10%{margin-top: 55px;margin-left: 30px;}
//                             15%{margin-top: 40px;margin-left: 23px;}
//                             20%{margin-top: 25px;margin-left: 35px;}
//                             25%{margin-top: 40px;margin-left: 40px;}
//                             30%{margin-top: 60px;margin-left: 30px;}
//                             35%{margin-top: 45px;margin-left: 10px;}
//                             40%{margin-top: 55px;margin-left: 25px;}
//                             45%{margin-top: 15px;margin-left: 27px;}
//                             50%{margin-top: 30px;margin-left: 60px;}
//                             55%{margin-top: 55px;margin-left: 55px;}
//                             60%{margin-top: 60px;margin-left: 30px;}
//                             65%{margin-top: 40px;margin-left: 25px;}
//                             70%{margin-top: 10px;margin-left: 12px;}
//                             75%{margin-top: 45px;margin-left: 15px;}
//                             80%{margin-top: 40px;margin-left: 55px;}
//                             85%{margin-top: 0px;margin-left: 30px;}
//                             90%{margin-top: 55px;margin-left: 25px;}
//                             95%{margin-top: 30px;margin-left: 30px;}
//                             100%{margin-top: 58px;margin-left: 28px;background-position: 100%;}

//                         }
//                         #ballsssss8 {
//                             animation: spinStats8 5s linear infinite;
//                             -webkit-animation: spinStats8 5s linear infinite;
//                         }
//                         `;
//                 ball8.appendChild(keyFramesw);
//                 //=========================blue balls9====================================
//                 document.getElementById("ballsssss9").style.animationName = "spinStats9";
//                 var ball9 = document.querySelector('#ballsssss9');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats9 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 45px;margin-left: 15px;}
//                             10%{margin-top: 55px;margin-left: 15px;}
//                             15%{margin-top: 60px;margin-left: 30px;}
//                             20%{margin-top: 45px;margin-left: 40px;}
//                             25%{margin-top: 55px;margin-left: 25px;}
//                             30%{margin-top: 10px;margin-left: 25px;}
//                             35%{margin-top: 45px;margin-left: 45px;}
//                             40%{margin-top: 60px;margin-left: 30px;}
//                             45%{margin-top: 30px;margin-left: 0px;}
//                             50%{margin-top: 10px;margin-left: 25px;}
//                             55%{margin-top: 40px;margin-left: 35px;}
//                             60%{margin-top: 55px;margin-left: 25px;}
//                             65%{margin-top: 60px;margin-left: 33px;}
//                             70%{margin-top: 40px;margin-left: 40px;}
//                             75%{margin-top: 15px;margin-left: 20px;}
//                             80%{margin-top: 30px;margin-left: 15px;}
//                             85%{margin-top: 60px;margin-left: 30px;}
//                             90%{margin-top: 0px;margin-left: 30px;}
//                             95%{margin-top: 30px;margin-left: 0px;}
//                             100%{margin-top: 61px;margin-left: 35px;background-position: 100%;}

//                         }
//                         #ballsssss9 {
//                             animation: spinStats9 5s linear infinite;
//                             -webkit-animation: spinStats9 5s linear infinite;
//                         }
//                         `;
//                 ball9.appendChild(keyFramesw);
//                 //=========================blue balls0====================================
//                 document.getElementById("ballsssss0").style.animationName = "spinStats0";
//                 var ball0 = document.querySelector('#ballsssss0');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes spinStats0 { 
//                             0%{margin-top: 60px;margin-left: 30px;}
//                             5%{margin-top: 50px;margin-left: 15px;}
//                             10%{margin-top: 45px;margin-left: 20px;}
//                             15%{margin-top: 20px;margin-left: 15px;}
//                             20%{margin-top: 0px;margin-left: 30px;}
//                             25%{margin-top: 20px;margin-left: 38px;}
//                             30%{margin-top: 35px;margin-left: 40px;}
//                             35%{margin-top: 45px;margin-left: 45px;}
//                             40%{margin-top: 58px;margin-left: 50px;}
//                             45%{margin-top: 30px;margin-left: 0px;}
//                             50%{margin-top: 0px;margin-left: 30px;}
//                             55%{margin-top: 57px;margin-left: 28px;}
//                             60%{margin-top: 15px;margin-left: 35px;}
//                             65%{margin-top: 40px;margin-left: 20px;}
//                             70%{margin-top: 15px;margin-left: 35px;}
//                             75%{margin-top: 60px;margin-left: 30px;}
//                             80%{margin-top: 50px;margin-left: 15px;}
//                             85%{margin-top: 10px;margin-left: 40px;}
//                             90%{margin-top: 40px;margin-left: 23px;}
//                             95%{margin-top: 20px;margin-left: 30px;}
//                             100%{margin-top: 58px;margin-left: 28px;background-position: 100%;}

//                         }
//                         #ballsssss0 {
//                             animation: spinStats0 5s linear infinite;
//                             -webkit-animation: spinStats0 5s linear infinite;
//                         }
//                         `;
//                 ball0.appendChild(keyFramesw);
//                 psound=parseInt(document.getElementById("pSound").innerHTML);
//                 if(psound==2){
//                     puaseplay();
//                 }else{
//                     play();
//                 }
//             }
//             if (cnt == 73) {
//                 document.getElementById("boxBall5").style.animation = "";
//                 var result20 = Math.floor(Math.random() * 10);
//                 document.getElementById("boxball5").innerHTML = result20;
//                 document.getElementById("ballsssss0").style.animationName = "anib0";
//                 document.getElementById("ballsssss9").style.animationName = "anib9";
//                 document.getElementById("ballsssss8").style.animationName = "anib8";
//                 document.getElementById("ballsssss7").style.animationName = "anib7";
//                 document.getElementById("ballsssss6").style.animationName = "anib6";
//                 document.getElementById("ballsssss5").style.animationName = "anib5";
//                 document.getElementById("ballsssss4").style.animationName = "anib4";
//                 document.getElementById("ballsssss3").style.animationName = "anib3";
//                 document.getElementById("ballsssss2").style.animationName = "anib2";
//                 document.getElementById("ballsssss1").style.animationName = "anib1";
//                 document.getElementById("imgspin5").style.animation = "none";
//                 var runball = document.querySelector('#boxBall5');
//                 var keyFramesw = document.createElement("style");
//                 keyFramesw.innerHTML = `
//                            @keyframes run19 {
//                             from {
//                                 height: 60px;
//                                 width: 60px;
//                                 margin-top: 0px;
//                                 margin-left: 80px;
//                                 opacity: 1;

//                             }
//                             to {
//                                 margin-top: 80px;
//                                 margin-left: 120px;
//                                 height: 40px;
//                                 width: 40px;
//                                 z-index: 1;
//                                 opacity: 0;

//                             }
//                         }
//                         #boxBall5 {
//                             animation: run19 1s linear infinite;
//                             -webkit-animation: run19 1s linear infinite;
//                         }
//                         `;
//                 runball.appendChild(keyFramesw);
//                var psound=parseInt(document.getElementById("pSound").innerHTML);
//                 if(psound==2){
//                     puase1();
//                }else{
//                   play1();
//                }
//             }
//             /*21*/
//             if (cnt == 75) {
//                 document.getElementById("boxBall4").style.animation = "none";
//                 var result19 = document.getElementById("boxball4").innerHTML;
//                 document.getElementById("nums19").innerHTML = result19;
//             }
//             if (cnt == 72) {
//                 document.getElementById("boxBall5").style.animation = "none";
//                 var result20 = document.getElementById("boxball5").innerHTML;
//                 document.getElementById("nums20").innerHTML = result20;
//             }
//             if (cnt == 71) {
//                 //================================================
//                 var num1 = document.getElementById("r3col1b1").innerHTML;
//                 var num2 = document.getElementById("r3col1b2").innerHTML;
//                 var num3 = document.getElementById("r3col1b3").innerHTML;
//                 var num4 = document.getElementById("r3col1b4").innerHTML;
//                 var num5 = document.getElementById("r3col1b5").innerHTML;
//                 document.getElementById("r4col1b1").innerHTML = num1;
//                 document.getElementById("r4col1b2").innerHTML = num2;
//                 document.getElementById("r4col1b3").innerHTML = num3;
//                 document.getElementById("r4col1b4").innerHTML = num4;
//                 document.getElementById("r4col1b5").innerHTML = num5;
//                 //====================================================================
//                 var num1 = document.getElementById("r3col2b1").innerHTML;
//                 var num2 = document.getElementById("r3col2b2").innerHTML;
//                 var num3 = document.getElementById("r3col2b3").innerHTML;
//                 var num4 = document.getElementById("r3col2b4").innerHTML;
//                 var num5 = document.getElementById("r3col2b5").innerHTML;
//                 document.getElementById("r4col2b1").innerHTML = num1;
//                 document.getElementById("r4col2b2").innerHTML = num2;
//                 document.getElementById("r4col2b3").innerHTML = num3;
//                 document.getElementById("r4col2b4").innerHTML = num4;
//                 document.getElementById("r4col2b5").innerHTML = num5;
//                 //====================================================================
//                 var num1 = document.getElementById("r3col3b1").innerHTML;
//                 var num2 = document.getElementById("r3col3b2").innerHTML;
//                 var num3 = document.getElementById("r3col3b3").innerHTML;
//                 var num4 = document.getElementById("r3col3b4").innerHTML;
//                 var num5 = document.getElementById("r3col3b5").innerHTML;
//                 document.getElementById("r4col3b1").innerHTML = num1;
//                 document.getElementById("r4col3b2").innerHTML = num2;
//                 document.getElementById("r4col3b3").innerHTML = num3;
//                 document.getElementById("r4col3b4").innerHTML = num4;
//                 document.getElementById("r4col3b5").innerHTML = num5;
//                 //====================================================================
//                 var num1 = document.getElementById("r3col4b1").innerHTML;
//                 var num2 = document.getElementById("r3col4b2").innerHTML;
//                 var num3 = document.getElementById("r3col4b3").innerHTML;
//                 var num4 = document.getElementById("r3col4b4").innerHTML;
//                 var num5 = document.getElementById("r3col4b5").innerHTML;
//                 document.getElementById("r4col4b1").innerHTML = num1;
//                 document.getElementById("r4col4b2").innerHTML = num2;
//                 document.getElementById("r4col4b3").innerHTML = num3;
//                 document.getElementById("r4col4b4").innerHTML = num4;
//                 document.getElementById("r4col4b5").innerHTML = num5;
//                 //============================end table result row2================================
//                 //================================================
//                 var num1 = document.getElementById("r2col1b1").innerHTML;
//                 var num2 = document.getElementById("r2col1b2").innerHTML;
//                 var num3 = document.getElementById("r2col1b3").innerHTML;
//                 var num4 = document.getElementById("r2col1b4").innerHTML;
//                 var num5 = document.getElementById("r2col1b5").innerHTML;
//                 document.getElementById("r3col1b1").innerHTML = num1;
//                 document.getElementById("r3col1b2").innerHTML = num2;
//                 document.getElementById("r3col1b3").innerHTML = num3;
//                 document.getElementById("r3col1b4").innerHTML = num4;
//                 document.getElementById("r3col1b5").innerHTML = num5;
//                 //====================================================================
//                 var num1 = document.getElementById("r2col2b1").innerHTML;
//                 var num2 = document.getElementById("r2col2b2").innerHTML;
//                 var num3 = document.getElementById("r2col2b3").innerHTML;
//                 var num4 = document.getElementById("r2col2b4").innerHTML;
//                 var num5 = document.getElementById("r2col2b5").innerHTML;
//                 document.getElementById("r3col2b1").innerHTML = num1;
//                 document.getElementById("r3col2b2").innerHTML = num2;
//                 document.getElementById("r3col2b3").innerHTML = num3;
//                 document.getElementById("r3col2b4").innerHTML = num4;
//                 document.getElementById("r3col2b5").innerHTML = num5;
//                 //====================================================================
//                 var num1 = document.getElementById("r2col3b1").innerHTML;
//                 var num2 = document.getElementById("r2col3b2").innerHTML;
//                 var num3 = document.getElementById("r2col3b3").innerHTML;
//                 var num4 = document.getElementById("r2col3b4").innerHTML;
//                 var num5 = document.getElementById("r2col3b5").innerHTML;
//                 document.getElementById("r3col3b1").innerHTML = num1;
//                 document.getElementById("r3col3b2").innerHTML = num2;
//                 document.getElementById("r3col3b3").innerHTML = num3;
//                 document.getElementById("r3col3b4").innerHTML = num4;
//                 document.getElementById("r3col3b5").innerHTML = num5;
//                 //====================================================================
//                 var num1 = document.getElementById("r2col4b1").innerHTML;
//                 var num2 = document.getElementById("r2col4b2").innerHTML;
//                 var num3 = document.getElementById("r2col4b3").innerHTML;
//                 var num4 = document.getElementById("r2col4b4").innerHTML;
//                 var num5 = document.getElementById("r2col4b5").innerHTML;
//                 document.getElementById("r3col4b1").innerHTML = num1;
//                 document.getElementById("r3col4b2").innerHTML = num2;
//                 document.getElementById("r3col4b3").innerHTML = num3;
//                 document.getElementById("r3col4b4").innerHTML = num4;
//                 document.getElementById("r3col4b5").innerHTML = num5;
//                 //============================end table result row2================================
//                 //================================================
//                 var num1 = document.getElementById("r1col1b1").innerHTML;
//                 var num2 = document.getElementById("r1col1b2").innerHTML;
//                 var num3 = document.getElementById("r1col1b3").innerHTML;
//                 var num4 = document.getElementById("r1col1b4").innerHTML;
//                 var num5 = document.getElementById("r1col1b5").innerHTML;
//                 document.getElementById("r2col1b1").innerHTML = num1;
//                 document.getElementById("r2col1b2").innerHTML = num2;
//                 document.getElementById("r2col1b3").innerHTML = num3;
//                 document.getElementById("r2col1b4").innerHTML = num4;
//                 document.getElementById("r2col1b5").innerHTML = num5;
//                 //====================================================================
//                 var num1 = document.getElementById("r1col2b1").innerHTML;
//                 var num2 = document.getElementById("r1col2b2").innerHTML;
//                 var num3 = document.getElementById("r1col2b3").innerHTML;
//                 var num4 = document.getElementById("r1col2b4").innerHTML;
//                 var num5 = document.getElementById("r1col2b5").innerHTML;
//                 document.getElementById("r2col2b1").innerHTML = num1;
//                 document.getElementById("r2col2b2").innerHTML = num2;
//                 document.getElementById("r2col2b3").innerHTML = num3;
//                 document.getElementById("r2col2b4").innerHTML = num4;
//                 document.getElementById("r2col2b5").innerHTML = num5;
//                 //====================================================================
//                 var num1 = document.getElementById("r1col3b1").innerHTML;
//                 var num2 = document.getElementById("r1col3b2").innerHTML;
//                 var num3 = document.getElementById("r1col3b3").innerHTML;
//                 var num4 = document.getElementById("r1col3b4").innerHTML;
//                 var num5 = document.getElementById("r1col3b5").innerHTML;
//                 document.getElementById("r2col3b1").innerHTML = num1;
//                 document.getElementById("r2col3b2").innerHTML = num2;
//                 document.getElementById("r2col3b3").innerHTML = num3;
//                 document.getElementById("r2col3b4").innerHTML = num4;
//                 document.getElementById("r2col3b5").innerHTML = num5;
//                 //====================================================================
//                 var num1 = document.getElementById("r1col4b1").innerHTML;
//                 var num2 = document.getElementById("r1col4b2").innerHTML;
//                 var num3 = document.getElementById("r1col4b3").innerHTML;
//                 var num4 = document.getElementById("r1col4b4").innerHTML;
//                 var num5 = document.getElementById("r1col4b5").innerHTML;
//                 document.getElementById("r2col4b1").innerHTML = num1;
//                 document.getElementById("r2col4b2").innerHTML = num2;
//                 document.getElementById("r2col4b3").innerHTML = num3;
//                 document.getElementById("r2col4b4").innerHTML = num4;
//                 document.getElementById("r2col4b5").innerHTML = num5;
//                 //============================end table result row2================================
//                 //============================table result row2================================
//                 var num1 = document.getElementById("col1b1").innerHTML;
//                 var num2 = document.getElementById("col1b2").innerHTML;
//                 var num3 = document.getElementById("col1b3").innerHTML;
//                 var num4 = document.getElementById("col1b4").innerHTML;
//                 var num5 = document.getElementById("col1b5").innerHTML;
//                 document.getElementById("r1col1b1").innerHTML = num1;
//                 document.getElementById("r1col1b2").innerHTML = num2;
//                 document.getElementById("r1col1b3").innerHTML = num3;
//                 document.getElementById("r1col1b4").innerHTML = num4;
//                 document.getElementById("r1col1b5").innerHTML = num5;
//                 //====================================================================
//                 var num1 = document.getElementById("col2b1").innerHTML;
//                 var num2 = document.getElementById("col2b2").innerHTML;
//                 var num3 = document.getElementById("col2b3").innerHTML;
//                 var num4 = document.getElementById("col2b4").innerHTML;
//                 var num5 = document.getElementById("col2b5").innerHTML;
//                 document.getElementById("r1col2b1").innerHTML = num1;
//                 document.getElementById("r1col2b2").innerHTML = num2;
//                 document.getElementById("r1col2b3").innerHTML = num3;
//                 document.getElementById("r1col2b4").innerHTML = num4;
//                 document.getElementById("r1col2b5").innerHTML = num5;
//                 //====================================================================
//                 var num1 = document.getElementById("col3b1").innerHTML;
//                 var num2 = document.getElementById("col3b2").innerHTML;
//                 var num3 = document.getElementById("col3b3").innerHTML;
//                 var num4 = document.getElementById("col3b4").innerHTML;
//                 var num5 = document.getElementById("col3b5").innerHTML;
//                 document.getElementById("r1col3b1").innerHTML = num1;
//                 document.getElementById("r1col3b2").innerHTML = num2;
//                 document.getElementById("r1col3b3").innerHTML = num3;
//                 document.getElementById("r1col3b4").innerHTML = num4;
//                 document.getElementById("r1col3b5").innerHTML = num5;
//                 //====================================================================
//                 var num1 = document.getElementById("col4b1").innerHTML;
//                 var num2 = document.getElementById("col4b2").innerHTML;
//                 var num3 = document.getElementById("col4b3").innerHTML;
//                 var num4 = document.getElementById("col4b4").innerHTML;
//                 var num5 = document.getElementById("col4b5").innerHTML;
//                 document.getElementById("r1col4b1").innerHTML = num1;
//                 document.getElementById("r1col4b2").innerHTML = num2;
//                 document.getElementById("r1col4b3").innerHTML = num3;
//                 document.getElementById("r1col4b4").innerHTML = num4;
//                 document.getElementById("r1col4b5").innerHTML = num5;
//                 //============================end table result row2================================

//                 //============================table result row1================================
//                 var num1 = document.getElementById("nums1").innerHTML;
//                 var num2 = document.getElementById("nums2").innerHTML;
//                 var num3 = document.getElementById("nums3").innerHTML;
//                 var num4 = document.getElementById("nums4").innerHTML;
//                 var num5 = document.getElementById("nums5").innerHTML;
//                 document.getElementById("col1b1").innerHTML = num1;
//                 document.getElementById("col1b2").innerHTML = num2;
//                 document.getElementById("col1b3").innerHTML = num3;
//                 document.getElementById("col1b4").innerHTML = num4;
//                 document.getElementById("col1b5").innerHTML = num5;
//                 //============================end table result row1================================
//                 //============================table result================================
//                 var num1 = document.getElementById("nums6").innerHTML;
//                 var num2 = document.getElementById("nums7").innerHTML;
//                 var num3 = document.getElementById("nums8").innerHTML;
//                 var num4 = document.getElementById("nums9").innerHTML;
//                 var num5 = document.getElementById("nums10").innerHTML;
//                 document.getElementById("col2b1").innerHTML = num1;
//                 document.getElementById("col2b2").innerHTML = num2;
//                 document.getElementById("col2b3").innerHTML = num3;
//                 document.getElementById("col2b4").innerHTML = num4;
//                 document.getElementById("col2b5").innerHTML = num5;
//                 //============================end table result================================
//                 var num1 = document.getElementById("nums11").innerHTML;
//                 var num2 = document.getElementById("nums12").innerHTML;
//                 var num3 = document.getElementById("nums13").innerHTML;
//                 var num4 = document.getElementById("nums14").innerHTML;
//                 var num5 = document.getElementById("nums15").innerHTML;
//                 document.getElementById("col3b1").innerHTML = num1;
//                 document.getElementById("col3b2").innerHTML = num2;
//                 document.getElementById("col3b3").innerHTML = num3;
//                 document.getElementById("col3b4").innerHTML = num4;
//                 document.getElementById("col3b5").innerHTML = num5;
//                 //============================================================================
//                 var num1 = document.getElementById("nums16").innerHTML;
//                 var num2 = document.getElementById("nums17").innerHTML;
//                 var num3 = document.getElementById("nums18").innerHTML;
//                 var num4 = document.getElementById("nums19").innerHTML;
//                 var num5 = document.getElementById("nums20").innerHTML;
//                 document.getElementById("col4b1").innerHTML = num1;
//                 document.getElementById("col4b2").innerHTML = num2;
//                 document.getElementById("col4b3").innerHTML = num3;
//                 document.getElementById("col4b4").innerHTML = num4;
//                 document.getElementById("col4b5").innerHTML = num5;
//                 document.getElementById("boxball5").innerHTML = "?";
//                 document.getElementById("boxball1").innerHTML = "?";
//                 document.getElementById("boxball2").innerHTML = "?";
//                 document.getElementById("boxball3").innerHTML = "?";
//                 document.getElementById("boxball4").innerHTML = "?";
//                 document.getElementById("nums1").innerHTML = "?";
//                 document.getElementById("nums2").innerHTML = "?";
//                 document.getElementById("nums3").innerHTML = "?";
//                 document.getElementById("nums4").innerHTML = "?";
//                 document.getElementById("nums5").innerHTML = "?";
//                 document.getElementById("nums6").innerHTML = "?";
//                 document.getElementById("nums7").innerHTML = "?";
//                 document.getElementById("nums8").innerHTML = "?";
//                 document.getElementById("nums9").innerHTML = "?";
//                 document.getElementById("nums10").innerHTML = "?";
//                 document.getElementById("nums11").innerHTML = "?";
//                 document.getElementById("nums12").innerHTML = "?";
//                 document.getElementById("nums13").innerHTML = "?";
//                 document.getElementById("nums14").innerHTML = "?";
//                 document.getElementById("nums15").innerHTML = "?";
//                 document.getElementById("nums16").innerHTML = "?";
//                 document.getElementById("nums17").innerHTML = "?";
//                 document.getElementById("nums18").innerHTML = "?";
//                 document.getElementById("nums19").innerHTML = "?";
//                 document.getElementById("nums20").innerHTML = "?";
//             }
//             if (cnt == 70) {
//                 clearInterval(checks);
//                 checks = null;
//                 // location.reload();
//                 printDurations();
//             }

//         }, 1000);
//     }
// }
// printDurations();