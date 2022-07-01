html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: 'Poppins', sans-serif;
}

header{
  
position: absolute;
width: 100%;
height: 80px;
top: 0%;

background: #226ED8;
box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content:space-around;
    align-items: center;
}

header h1{
    font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 45px;
/* identical to box height */

display: flex;
align-items: center;
text-align:flex ;

color: #FAFAFA;
}

.logo{
  height: 40px;
  width: 23.28125px;

}

/* Modal */
.modal{
  position:absolute;
  left: 0;
  top: 0;
  padding: 0;
  width:100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
background: rgba(20, 20, 20, 0.4);
opacity: 0;
display: none;
}

.afazer{
  width:293px ;
  height: 35px;

  align-items: center;
  margin-left: 0%;
  overflow: auto;
  overflow-x: hidden;
  align-items: center;
  justify-content: center;
  height: 74%;
  
  font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 21px;
/* identical to box height */


color: #141414;
}

.buttonD{
width: 50px;
height: 50px;



border-radius: 20px;
}

.fazer-item{
  display: flex;
  justify-content: space-between;
}

.material-icons.more_vert{
  font-family: 'Material Icons';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 16px;
/* identical to box height */

color: #141414;

cursor: pointer;

}

.emandamento{
  width:293px ;
  height: 35px;
  overflow: auto;
    overflow-x: hidden;
 
  height: 74%;
}
.feito{

  width:293px ;
  height: 35px;
  overflow: auto;
    overflow-x: hidden;
 
  height: 74%;
}

.modal-content{
width: 474px;
height: 421px;
left: 403px;
top: 150px;

background: #FFFFFF;
box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.25);
border-radius: 20px;
display: flex;
justify-content: center;

}
.show-modal{
  opacity: 1;
  display: flex;
}

.modalDelete{
  left: 1000px;
  top: 150px;
  
  background: #FFFFFF;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: none;
  justify-content: center;
  opacity: 0;
  
  }
  .show-modalDelete{
    opacity: 1;
    display: flex;
  }


  
.m1{
  width: 474px;
  display: flex;
  justify-content: space-around;
  margin-top: 5%;
  
}
.titulodesc{
  width: 80%;
  margin-left: 10%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.modal h2{

  width: 106px;
  height: 30px;
  left: 586px;
  top:500px;
  
  margin-left: 30%;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height */
  
  display: flex;
  align-items: center;
  text-align: center;
  
  color: #3867D6;
}

.fecharmodal{
 
box-sizing: border-box;

width: 30px;
height: 30px;
left: 600px;
top: 183px;
padding: 5px;
border: 2px solid #3867D6;
border-radius: 20px;
cursor: pointer;
}

.modal input{
  width: 374px;
height: 40px;
left: 453px;
top: 276px;
background: #EEEEEE;
border-radius: 10px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
/* identical to box height */

display: flex;
align-items: center;

color: #141414;

}

.btnExcluir{
  
}

.modal h3{
  width: 44px;
height: 18px;
left: 453px;
top: 252px;

font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 18px;
/* identical to box height */

display: flex;
align-items: center;

color: #141414;
}

.material-icons.close{
  width: 14px;
height: 14px;
left: 805px;
top: 191px;

font-family: 'Material Icons';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 14px;
/* identical to box height */

display: flex;
align-items: center;
color: #3867D6;
}

.task-criar{
  margin-top: 10%;
  width: 374px;
height: 41px;
left: 453px;
top: 490px;
cursor: pointer;
background: linear-gradient(90.35deg, #4890F5 0%, #226ED8 99.7%);
border-radius: 20px;
}
.titulodesc p{
  font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
/* identical to box height */

color: #FFFFFF;
}


/* box */
.divP{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  margin-top: 15%;
  width: 100vh;
  height: 5vh;
  max-width: 100%;
}
.divP2{
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: auto;
  margin-top: 0%;
  width: 100vh;
  height: 60vh;
  max-width: 100%;
}


.task{
  margin-top: 10%;
  display: flex;
}

main div h2{
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
/* identical to box height */
display: flex;
align-items: center;
}

.abrirmodal{
  padding: 5px;
  box-sizing: border-box;
width: 30px;
height: 30px;

border: 2px solid #226ED8;
border-radius: 40px;
cursor: pointer;

}
.material-icons.add{
  width: 16px;
height: 16px;


font-family: 'Material Icons';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 16px;
/* identical to box height */



color: #226ED8;


}

.td{
  width: 50%;
}

.taskTitulo{
  width: 192px;
height: 21px;
left: 12px;
top: 12px;

font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 21px;
/* identical to box height */

display: flex;
align-items: center;

color: #141414;
}

.taskDesc{
  margin-top: 7%;
  width: 192px;
height: 21px;
left: 12px;
top: 12px;

font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 21px;
/* identical to box height */

display: flex;
align-items: center;

color: #141414;

}

.pDesc{
  width: 163px;
height: 36px;
left: 12px;
top: 155px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
display: flex;
align-items: center;

color: #141414;
}

.AFazer{
  width: 293px;
  height: 35px;
  display: flex;
  justify-content: space-between;
  
}

 h2{
width:  293px;
height: 30px;
left: 160px;
top: 263px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 30px;
/* identical to box height */

display: flex;
align-items: center;

color: #141414;

}


.EmAndamento{
  
    width:293px ;
    height: 35px;
    display: flex;
    align-items: center;
    margin-left: 0%;
}

.error{
  border: solid red;
}



footer{
    Height: 50px;
    width: 100%;
    background: #114FA7;
    position: absolute;
    bottom: 0%;
    display: flex;
    align-items: center;
    
}
.material-icons.coracao{
  width: 16px;
height: 16px;
left: 1001px;
top: 687px;

font-family: 'Material Icons';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 16px;
/* identical to box height */

display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.017em;

color: #FFAFAF;
}
footer p{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height */
    
    color: #FFFFFF;
    
}
footer div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-right: 10%;
    margin-left: 10%;
}
.assinatura{
  display: flex;
  align-items: center;
}
.material-symbols-outlined{

  width: 16px;
  height: 16px;
  left: 1001px;
  top: 687px;
  
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  /* identical to box height */
  
  color: #FFAFAF;
  
  }

/* The switch - the box around the slider */
.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }
  
  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  input:checked + .slider {
    background-color: #2196F3;
  }
  
  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }
  
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  
  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }
  
  .slider.round:before {
    border-radius: 50%;
  }
