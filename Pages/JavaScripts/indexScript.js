let filtruGen="";
let filtruType="";
let bfil=1;
let bTypeFill=1;
var originalbuttonbackcolor;
const filme=[
    {
        title:"The Shawshank Redemption",
        imageLink:"",
        gendre:"action,drama",
        gen:["Actiune "," Drama"],
        rating:5,
        ratingImage:"",
        type:"Film",
        
        text:"Pe parcursul mai multor ani, doi condamnați formează o prietenie, căutând consolare și, în cele din urmă, răscumpărare prin compasiune de bază",
        director:"Frank Darabont",
        writers:"Stephen King ● Frank Darabont",
        stars:"Tim Robbins Morgan ● Freeman Bob Gunton",
     
    
    },
    {
      title:"",
      imageLink:"",
      gendre:"action , drama",
      gen:["Actiune","",""],
      rating:1,
      ratingImage:"",
      type:"Serial",

    },
    {
      title:"cev3",
      imageLink:"",
      gendre:"drama,",
      gen:["Drama"],
      type:"Film",
    }
  ];

 
  window.onload=function(){
    const Filtru=document.getElementById("btn1");
    originalbuttonbackcolor=Filtru.style;
    if(document.getElementById("filtreCheck").checked==true)
    {
      const FiltreFilme=document.getElementById("Filtre-Options");
      FiltreFilme.style.display = 'block';
    }
    else{
      const FiltreFilme=document.getElementById("Filtre-Options");
      FiltreFilme.style.display = 'none';
    }
    genetareFilme();
  }
 function genetareFilme()
 {
    const movielist=document.getElementById("movie-wrapper");
    movielist.innerHTML="";
    for(let i =0;i<filme.length;i++)
    {
      filme[i].imageLink="./Assets/MovieImages/"+filme[i].title+".jpg";
      filme[i].ratingImage="./Assets/RatingImages/stars"+filme[i].rating+".png";
      if(filme[i].gendre.includes(filtruGen)&&filme[i].type.includes(filtruType)){
        movielist.innerHTML+=movieComponet(i+1,filme[i]);
       
      }
          
    }
 }


  const movieComponet=function(index,movieInfo)
  {
    return `<div class="movie1">
        <span  class="movie-title">
        <p  > <a href="https://www.w3schools.com/" style="text-decoration:none">  ${movieInfo.title} </a></p>
        </span>
         
      <section>
      <article1>
      <img class="movie-rating"  src="${movieInfo.ratingImage}" ></img>
        <p > ${movieInfo.text}</p>
        <p> Director: ${movieInfo.director}</p>
        <p> Scriitori: ${movieInfo.writers}</p>
        <p> Staruri: ${movieInfo.stars}</p>
        <textrounded>${movieInfo.type} </textrounded>
        <textrounded>${movieInfo.gen }</textrounded>

      </article1>

      <nav1>
          <a href="https://www.w3schools.com/"><img  src="${movieInfo.imageLink}" class="movie-cover"></img></a>
      </nav1>
    </section>
    </div>`
  }


  //genereare filme in fuctie de Filtru swich (da e On/Off)

  function handleClick(cb) {
    if(document.getElementById("filtreCheck").checked==true)
    {
      const FiltreFilme=document.getElementById("Filtre-Options");
      FiltreFilme.style.display = 'block';
    }
    else{
      const FiltreFilme=document.getElementById("Filtre-Options");
      const Filtru=document.getElementById("btn"+bfil);
      const Filtru1 =  document.getElementById("btntype"+bTypeFill);
      FiltreFilme.style.display = 'none';
      filtruGen="";
      filtruType="";
    
      Filtru.style=originalbuttonbackcolor;
      Filtru1.style=originalbuttonbackcolor;
      genetareFilme();
    }
  }
  
  //generare filme in functie de genul selectat
  function ActionType(cv)
  {
      if(cv==1){
          filtruType="Film";
      }
      if(cv==2){
        filtruType="Serial";
      }
      if(cv==3) {
        filtruType="";
      }
      genetareFilme();
      const Filtru=document.getElementById("btntype"+bTypeFill);
      Filtru.style=originalbuttonbackcolor;
      const Filtru2=document.getElementById("btntype"+cv);
      Filtru2.style.backgroundColor = "#055d62";
      bTypeFill=cv;

  }
  function ActionGen(cv)
  {
    const genuri=['0',"action","adventure","comedy","crime","drama","fantacy","history","horror","mystery","Sci-Fi","thriler",""];
    filtruGen=genuri[cv];
    genetareFilme();
    const Filtru=document.getElementById("btn"+bfil);
    Filtru.style=originalbuttonbackcolor;
    const Filtru2=document.getElementById("btn"+cv);
    Filtru2.style.backgroundColor = "#055d62";
    bfil=cv;
  }

  //menirui
  function openNav() {
      document.getElementById("myNav").style.width = "100%";
    }

    function closeNav() {
      document.getElementById("myNav").style.width = "0%";
    } 

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
  }