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
      gendre:"action,fantacy,adventure,sci-fi",
      gen:["Actiune ","Aventura","Fantezie","Sci-Fi"],
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
    {
      title:"1917",
      imageLink:"",
      gendre:"action,drama,history",
      gen:["Actiune","Drama","Istorie","Razboi"],
      year:2019,
      rating:5,
      ratingImage:"",
      type:"Film",
    
      text:"In timpul Primului Război Mondial, în aprilie 1917, doi tineri soldaţi dintr-un regiment britanic primesc ordinul să parcurgă „no man's land”-ul lăsat în urmă de nemţii aparent în retragere şi să transmită un mesaj comandantului unui alt regiment britanic gata să atace.",
      director:"Sam Mendes",
      writers:"Sam Mendes ● Krysty Wilson-Cairns",
      stars:" Dean-Charles ● Chapman George  ● MacKay Daniel Mays  ",
      streaming:["Netflix"],
    },
    {
      title:"A Nightmare On Elm Street",
      imageLink:"",
      gendre:"horror",
      gen:["Horor"],
      year:1984,
      rating:5,
      ratingImage:"",
      type:"Film",
    
      text:"Nancy are un coșmar teribil legat de o figură înspăimântătoare care îi va pătrunde în viață. Figura este cea a lui Freddy Krugger și a făcut carieră cu ajutorul celebrelor degete lungi, sub formă de cuțite, de la mâna dreaptă.",
      director:"Wes Craven",
      writers:"Wes Craven",
      stars:"Heather Langenkamp ● Johnny Depp ● Robert Englund",
      streaming:["Netflix","Hbomax"],
    },
      
    {
      title:"American Made",
      imageLink:"",
      gendre:"action,comedy,crime",
      gen:["Actiune","Comedie","Crima"],
      year:2017,
      rating:4,
      ratingImage:"",
      type:"Film",

      text:"Barry Seal: Trafic în stil American e povestea incredibil de adevărată a unui pilot care a reușit să conducă una din cele mai mari operațiuni sub acoperire derulate vreodată de CIA.",
      director:"Doung Liman",
      writers:"Gary Spinelii",
      stars:"Tom Cruise ● Domhnall Gleeson ● Sarah Wright",
      streaming:["PrimeVideo","netflix"],
    },
    {
      title:"Avatar",
      imageLink:"",
      gendre:"action,adventure,fantacy,sci-fi",
      gen:["Actiune","Aventura","Fantezie","Sci-Fi"],
      year:2009,
      rating:4,
      ratingImage:"",
      type:"Film",
    
      text:"200 de ani în viitor, Jake, un veteran de război paralizat, este adus împreună cu alți pământeni pe planeta Pandora. Aceasta este locuită de o rasă umanoidă, Na'vi, o veche civilizație deloc încântată de oaspeți. Jake și semenii săi trebuie să lupte pentru a-și găsi locul pe luxurianta Pandora și între timp tânărul se îndrăgostește de Neytiri, o localnică. ",
      director:"James Cameron",
      writers:"James Cameron",
      stars:"Sam Worthington ● Zoe Saldana ● Sigourney Weaver",
      streaming:["DisneyPlus","Hbomax"],
    },
    {
      title:"Avatar The Way of Water",
      imageLink:"",
      gendre:"action,adventure,fantacy,sci-fi",
      gen:["Actiune","Aventura","Fantezie","Sci-Fi"],
      year:2022,
      rating:4,
      ratingImage:"",
      type:"Film",
    
      text:"Situat la mai bine de un deceniu după evenimentele din primul film, „Avatar: Calea apei” începe să spună povestea familiei Sully (Jake, Neytiri și copiii lor), necazurile care îi urmăresc, lucrurile pe care sunt dispuși să le facă pentru a se proteja reciproc, bătăliile pe care le duc pentru a rămâne în viață și tragediile pe care le îndură.",
      director:"James Cameron",
      writers:"James Cameron ●  Rick Jaffa ● Amanda Silver ",
      stars:"Sam Worthington ● Zoe Saldana ● Sigourney Weaver",
      streaming:["DisneyPlus","Hbomax"],
    },
    {
      title:"Bad Boys",
      imageLink:"",
      gendre:"action,comedy,crima",
      gen:["Actiune","Comedie","Crima"],
      year:1995,
      rating:3,
      ratingImage:"",
      type:"Film",
    
      text:"Intr-o noapte torida de vara, este furata o cantitate foarte mare de heroina in valoare de 100 de milioane de dolari, chiar din incaperea destinata depozitarii dovezilor. Marcus Burnett (Martin Lawrence) si Mike Lowrey, doi detectivi cam trasniti vad in rezolvarea acestui caz sansa vietii lor. Ei trebuie sa recupereze drogurile inainte ca unitatea lor sa ajunga de rasul lumii",
      director:"Michael Bay",
      writers:"George Gallo ● Michael Barrie ● Jim Mulholland",
      stars:"Will Smith ● Martin Lawrence ● Lisa Boyle",
      streaming:["netflix","hbomax"],
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
      if(icnt==5)//cate filme sa fie generate pe o pg
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
    const genuri=['0',"action","adventure","comedy","crime","drama","fantacy","history","horror","mystery","sci-fi","thriler",""];
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
      document.body.scrollTop = 0; 
      document.documentElement.scrollTop = 0; 
  }
  function Previous()
  {
      istart=stack.pop();
      aux=istart;
      if(istart==start)
        stack.push(start);
      console.log(stack); 
      genetareFilme();
      document.body.scrollTop = 0; 
      document.documentElement.scrollTop = 0;
    
  }