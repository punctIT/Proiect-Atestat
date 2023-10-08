let filtru=",";
let bfil=1;
const filme=[
    {
        title:"The Shawshank Redemption",
        imageLink:"",
        gendre:"action,drama"
    },
    {
      title:"",
      imageLink:"",
      gendre:"action,drama"
    },
    {
      title:"cev3",
      imageLink:"",
      gendre:"drama,"
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
      filme[i].imageLink="./Assets/"+filme[i].title+".jpg";
      if(filme[i].gendre.includes(filtru))
          movielist.innerHTML+=movieComponet(i+1,filme[i]);
    }
 }

  const movieComponet=function(index,movieInfo)
  {
    return `<div class="movie1">
        <span class="movie-title">
            ${movieInfo.title}
        </span>
    
      <section>

      <article1>
        <h1>London</h1>
        <p>London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
        <p>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</p>
      </article1>

      <nav1>
          <img src="${movieInfo.imageLink}" class="movie-cover"></img>
      </nav1>
    </section>
    </div>`
  }



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
      genetareFilme();
    }
  }
  
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