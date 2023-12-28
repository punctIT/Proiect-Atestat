let filtruGen="";
let filtruType="";
let bfil=1;
let bTypeFill=1;
var originalbuttonbackcolor;

let istart=0,icnt=0;

const filme=[
    {
        title:"The Shawshank Redemption",
        imageLink:"",
        gendre:"action,drama",
        gen:["Actiune "," Drama"],
        year:1994,
        rating:5,
        ratingImage:"",
        type:"Film",
        
        text:"Pe parcursul mai multor ani, doi condamnați formează o prietenie, căutând consolare și, în cele din urmă, răscumpărare prin compasiune de bază",
        director:"Frank Darabont",
        writers:"Stephen King ● Frank Darabont",
        stars:"Tim Robbins ● Morgan Freeman ● Bob Gunton",
        streaming:["PrimeVideo","netflix"],
     
    
    },
    {
      title:"Star Wars Episode I  The Phantom Menace",
      imageLink:"",
      gendre:"action,fantacy,adventure",
      gen:["Actiune ","Aventura","Fantezie"],
      year:1999,
      rating:5,
      ratingImage:"",
      type:"Film",
      
      text:"Doi Jedi scapă de o blocadă ostilă pentru a găsi aliați și dau peste un băiat care ar putea aduce echilibrul Forței, dar Sithul adormit de mult reapare pentru a-și revendica gloria inițială.",
      director:"George Lucas",
      writers:"George Lucas",
      stars:"Ewan McGregor ● Liam Neeson  ●  Natalie Portman",
      streaming:["DisneyPlus","PrimeVideo"],
   
  
    },
    {
      title:"Breaking Bad",
      imageLink:"",
      gendre:"crime,drama,thriler",
      gen:["Crima "," Drama", "Thriler"],
      year:2008,
      rating:5,
      ratingImage:"",
      type:"Serial",
      
      text:"Un profesor de chimie diagnosticat cu cancer pulmonar inoperabil apelează la fabricarea și vânzarea de metamfetamină cu un fost student pentru a-și asigura viitorul familiei.",
      director:"Vince Gilligan",
      writers:"Vince Gilligan",
      stars:"Bryan Cranston ● Aaron Paul ● Anna Gunn",
      streaming:["Netflix"],
  

    },
    {
      title:"IT",
      imageLink:"",
      gendre:"horror",
      gen:["Horor"],
      year:2017,
      rating:4,
      ratingImage:"",
      type:"Film",
      
      text:"În vara anului 1989, un grup de copii s-au unit pentru a distruge un monstru care își schimbă forma, care se deghizează în clovn și care ucide copiii din Derry, micul oraș din Maine.",
      director:"Andy Muschietti",
      writers:"Chase Palmer ● Cary Joji Fukunaga ● Gary Dauberman",
      stars:"Bill Skarsgård ● Jaeden Martell ● Finn Wolfhard",
      streaming:["Netflix", "PrimeVideo"],
  

    },
    {
      title:"IT Chapter Two",
      imageLink:"",
      gendre:"horror,drama,fantasy",
      gen:["Horor","Drama","Fantezie"],
      year:2019,
      rating:3,
      ratingImage:"",
      type:"Film",
      
      text:"La douăzeci și șapte de ani de la prima lor întâlnire cu terifianta Pennywise, Clubul Perdanților au crescut și s-au îndepărtat, până când un telefon devastator îi aduce înapoi.",
      director:"Andy Muschietti",
      writers:"Stephen King ● Gary Dauberman",
      stars:" Jessica Chastain ● James McAvoy ● Bill Hader",
      streaming:["Netflix", "PrimeVideo"],
    },
    {
      title:"The Walking Dead",
      imageLink:"",
      gendre:"horror,drama,thriler",
      gen:["Horor","Drama","Thriler"],
      year:2010,
      rating:5,
      ratingImage:"",
      type:"Serial",
      
      text:"Adjunctul șeriful Rick Grimes se trezește din comă pentru a afla că lumea este în ruine și trebuie să conducă un grup de supraviețuitori pentru a rămâne în viață..",
      director:"Frank Darabont",
      writers:"Frank Darabont",
      stars:"Andrew Lincoln ● Norman Reedus ● Melissa McBride",
      streaming:["Netflix", "HBOMax"],
    },
    {
      title:"Reacher",
      imageLink:"",
      gendre:"action,crime,drama",
      gen:["Action","Crime","Drama"],
      year:2022,
      rating:5,
      ratingImage:"",
      type:"Serial",
    
      text:"Jack Reacher a fost arestat pentru crimă și acum poliția are nevoie de ajutorul lui. Bazat pe cărțile lui Lee Child.",
      director:"Nick Santora",
      writers:"Nick Santora",
      stars:" Alan Ritchson ● Maria Sten ● Malcolm Goodwin",
      streaming:["PrimeVideo"],
    },
    
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
    //searchmenu
    const search=document.getElementById("SearchMenu")
    for(let i =0; i<filme.length;i++)
    {
      search.innerHTML+=(` <li><a href="./Pages/${filme[i].title}.html" target="_blank">${filme[i].title}</a></li>`)
    }
    
  }
let aux=0,stack = [],aux2=0,start=-1;
 function genetareFilme()
 {
    const movielist=document.getElementById("movie-wrapper");
    movielist.innerHTML="";
    icnt=0;
    for(let i = istart;i<filme.length;i++)
    {
      if(icnt==2)
      {
        aux2=aux;
        aux=i;
        break;
      }
      filme[i].imageLink="./Assets/MovieImages/"+filme[i].title+".jpg";
      filme[i].ratingImage="./Assets/RatingImages/stars"+filme[i].rating+".png";
      if(filme[i].gendre.includes(filtruGen)&&filme[i].type.includes(filtruType)){
        movielist.innerHTML+=movieComponet(i+1,filme[i]);
        let cv="art"+(i+1);
        const movielist1=document.getElementById(cv);
        icnt++;
        if(start==-1)
          start=i,stack.push(i);
        for(let q=0;q<filme[i].gen.length;q++)
        {
          movielist1.innerHTML+=(` <textrounded>${filme[i].gen[q]}</textrounded>`);
        }
        movielist1.innerHTML+=(`<p></p`);  
      
        for(let q=0;q<filme[i].streaming.length;q++)
        {
          movielist1.innerHTML+=(`<a href="https://www.${filme[i].streaming[q]}.com" target="_blank"><img class="minimage" src="./Assets/StreamingPlatformsIcons/${filme[i].streaming[q]}.png"></img></a>`)
        }
      }
      
      
    }

 }




  const movieComponet=function(index,movieInfo)
  {
    return `<div class="movie1">
        <span  class="movie-title">
        <p  > <a href="./Pages/${movieInfo.title}.html" target="_blank" style="text-decoration:none">  ${movieInfo.title} (${movieInfo.year}) </a></p>
        </span>
         
      <section>
      <article1 id="art${index}">
        <img class="movie-rating"  src="${movieInfo.ratingImage}" ></img>
        <p > ${movieInfo.text}</p>
        <p> Director: ${movieInfo.director}</p>
        <p> Scriitor: ${movieInfo.writers}</p>
        <p> Actori: ${movieInfo.stars}</p>
        <textrounded>${movieInfo.type} </textrounded>
      </article1>
      <nav1>
          <a href="./Pages/${movieInfo.title}.html" target="_blank" ><img  src="${movieInfo.imageLink}" class="movie-cover"></img></a>
      </nav1>
    </section>
    </div>`
  }


  //genereare filme in fuctie de Filtru swich (da e On/Off) 

  function handleClick(cb) {
   
    clearStack(stack);
    if(document.getElementById("filtreCheck").checked==true)
    {
      const FiltreFilme=document.getElementById("Filtre-Options");
      ActionType(3);
      ActionGen(12);
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
      istart=0;
      genetareFilme();
    }
  }
  
  //generare filme in functie de genul selectat
  function ActionType(cv)
  {
      clearStack(stack);
      if(cv==1){
          filtruType="Film";
      }
      if(cv==2){
        filtruType="Serial";
      }
      if(cv==3) {
        filtruType="";
      }
      istart=0;
      genetareFilme();
      const Filtru=document.getElementById("btntype"+bTypeFill);
      Filtru.style=originalbuttonbackcolor;
      const Filtru2=document.getElementById("btntype"+cv);
      Filtru2.style.backgroundColor = "#055d62";
      bTypeFill=cv;

  }
  //generare in fucntie de butonul apasat
  // colorare specifica buton
  function ActionGen(cv)
  {
    clearStack(stack);
    const genuri=['0',"action","adventure","comedy","crime","drama","fantacy","history","horror","mystery","Sci-Fi","thriler",""];
    filtruGen=genuri[cv];
    istart=0;
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

  //search
  function searchFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("SearchMenu");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
// butonanele next si previous bazate pe un vector de tip stiva
function clearStack(s)
{
    start=-1;
    aux=aux2=0;
    while (s.length != 0) {
        s.pop();
    }
    return;
}
  function Next()
  {
      
      istart=aux;
      let cv=stack.pop();
      if(aux2!=cv&&aux!=aux2){
        stack.push(cv);
        stack.push(aux2);
      }
      else stack.push(cv);
      console.log(stack); 
      genetareFilme();
  }
  function Previous()
  {
      istart=stack.pop();
      aux=istart;
      if(istart==start)
        stack.push(start);
      console.log(stack); 
      genetareFilme();
    
  }