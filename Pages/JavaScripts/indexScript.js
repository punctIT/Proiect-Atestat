let filtru=",";
let bfil=1;
const filme=[
    {
        title:"The Shawshank Redemption",
        imageLink:"",
        gendre:"action,drama",
        gen:["Actiune "," Drama"],
        type:"Film",
        
        text:"Pe parcursul mai multor ani, doi condamnați formează o prietenie, căutând consolare și, în cele din urmă, răscumpărare prin compasiune de bază",
        director:"Frank Darabont",
        writers:"Stephen King ● Frank Darabont",
        stars:"Tim Robbins Morgan ● Freeman Bob Gunton",
        rating:10
    
    },
    {
      title:"",
      imageLink:"",
      gendre:"action , drama",
      gen:["Actiune","",""],
      type:"Film",

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
      if(filme[i].gendre.includes(filtru)){
        movielist.innerHTML+=movieComponet(i+1,filme[i]);
       
      }
          
    }
 }


  const movieComponet=function(index,movieInfo)
  {
    return `<div class="movie1">
        <span href="https://www.w3schools.com/" class="movie-title">
         <a href="https://www.w3schools.com/" style="text-decoration:none">  <p  > ${movieInfo.title}</p> </a>
        </span>
         
      <section>
      <article1>
        
        <p > ${movieInfo.text}</p>
        <p> Director: ${movieInfo.director}</p>
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
      FiltreFilme.style.display = 'none';
      filtru=",";
      const Filtru=document.getElementById("btn"+bfil);
      Filtru.style.backgroundColor = "black";
      genetareFilme();
    }
  }
  
  //generare filme in functie de genul selectat

  function Action(cv)
  {
    const genuri=['0',"action","adventure","comedy","crime","drama","fantacy","history","horror","mystery","Sci-Fi","thriler"];
    filtru=genuri[cv];
    genetareFilme();
    const Filtru=document.getElementById("btn"+bfil);
    Filtru.style.backgroundColor = "black";
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