let filtruGen="";
let filtruType="";
let bfil=1;
let bTypeFill=1;
var originalbuttonbackcolor;

let istart=0,icnt=0;

const Filme=[
    {
      title:"A Nightmare On Elm Street",
      imageLink:"",
      genre:"horror",
      gen:["Horor"],
      year:1984,
      rating:5,
      ratingImage:"",
      pageLink:"", 
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
      genre:"action,comedy,crime",
      gen:["Actiune","Comedie","Crima"],
      year:2017,
      rating:4,
      ratingImage:"",
      pageLink:"", 
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
      genre:"action,adventure,fantasy,sci-fi",
      gen:["Actiune","Aventura","Fantezie","Sci-Fi"],
      year:2009,
      rating:4,
      ratingImage:"",
      pageLink:"", 
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
      genre:"action,adventure,fantasy,sci-fi",
      gen:["Actiune","Aventura","Fantezie","Sci-Fi"],
      year:2022,
      rating:4,
      ratingImage:"",
      pageLink:"", 
      type:"Film",
    
      text:"Situat la mai bine de un deceniu după evenimentele din primul Film, „Avatar: Calea apei” începe să spună povestea familiei Sully (Jake, Neytiri și copiii lor), necazurile care îi urmăresc, lucrurile pe care sunt dispuși să le facă pentru a se proteja reciproc, bătăliile pe care le duc pentru a rămâne în viață și tragediile pe care le îndură.",
      director:"James Cameron",
      writers:"James Cameron ●  Rick Jaffa ● Amanda Silver ",
      stars:"Sam Worthington ● Zoe Saldana ● Sigourney Weaver",
      streaming:["DisneyPlus","Hbomax"],
    },
    //////////////STRAT///////////////////
    {
      title: "A Quiet Place",
      imageLink: "",
      genre: "horror",
      gen: ["Horror"],
      year: 2018,
      rating: 4,
      ratingImage: "",
      pageLink:"", 
      type: "Film",
      text: "Într-un viitor post-apocaliptic, o familie trebuie să trăiască în tăcere pentru a evita creaturi misterioase care vânează prin sunet.",
      director: "John Krasinski",
      writers: "Bryan Woods●Scott Beck●John Krasinski",
      stars: "Emily Blunt, John Krasinski, Millicent Simmonds",
      streaming: ["PrimeVideo"]
  },
  
  {
      title: "A Quiet Place 2",
      imageLink: "",
      genre: "horror",
      gen: ["Horror"],
      year: 2020,
      rating: 4,
      ratingImage: "",
      pageLink:"", 
      type: "Film",
      text: "După evenimentele primului Film, familia Abbott se confruntă cu noi amenințări în timp ce își continuă lupta pentru supraviețuire în tăcere.",
      director: "John Krasinski",
      writers: "John Krasinski",
      stars: "Emily Blunt, Cillian Murphy, Millicent Simmonds",
      streaming: ["PrimeVideo"]
  },
  
  {
      title: "Alien",
      imageLink: "",
      genre: "horror, sci-fi",
      gen: ["Horror", "Sci-Fi"],
      year: 1979,
      rating: 5,
      ratingImage: "",
      pageLink:"", 
      type: "Film",
      text: "Echipajul unei nave spațiale comerciale descoperă o prezență extraterestră pe un planetă îndepărtat, ducând la o bătălie înfricoșătoare pentru supraviețuire.",
      director: "Ridley Scott",
      writers: "Dan O'Bannon",
      stars: "Sigourney Weaver, Tom Skerritt, John Hurt",
      streaming: ["PrimeVideo"]
  },
  
  {
      title: "Aliens",
      imageLink: "",
      genre: "action, adventure, sci-fi",
      gen: ["Acțiune", "Aventură", "Sci-Fi"],
      year: 1986,
      rating: 5,
      ratingImage: "",
      pageLink:"", 
      type: "Film",
      text: "Ellen Ripley se confruntă din nou cu Xenomorphs, de data aceasta însoțită de o echipă de marini spațiali.",
      director: "James Cameron",
      writers: "James Cameron",
      stars: "Sigourney Weaver, Michael Biehn, Carrie Henn",
      streaming: ["PrimeVideo"]
  },
  
  {
      title: "All Quiet on the Western Front",
      imageLink: "",
      genre: "war, drama",
      gen: ["Război", "Dramă"],
      year: 1930,
      rating: 4,
      ratingImage: "",
      pageLink:"", 
      type: "Film",
      text: "Un puternic Film anti-război care prezintă experiențele unui tânăr soldat german în timpul Primului Război Mondial.",
      director: "Lewis Milestone",
      writers: "Erich Maria Remarque (roman)●Maxwell Anderson",
      stars: "Lew Ayres, Louis Wolheim, John Wray",
      streaming: ["PrimeVideo"]
  },
  
  {
      title: "Annihilation",
      imageLink: "",
      genre: "adventure, drama, fantasy, horror",
      gen: ["Aventură", "Dramă", "Fantezie", "Horror"],
      year: 2018,
      rating: 4,
      ratingImage: "",
      pageLink:"", 
      type: "Film",
      text: "Un biolog conduce o echipă într-o zonă misterioasă și periculoasă cunoscută sub numele de 'The Shimmer' pentru a descoperi secretele sale extraterestre.",
      director: "Alex Garland",
      writers: "Alex Garland●Jeff VanderMeer (roman)",
      stars: "Natalie Portman, Jennifer Jason Leigh, Tessa Thompson",
      streaming: ["PrimeVideo"]
  },
  
  
  {
      title: "Arrow",
      imageLink: "",
      genre: "action, adventure, crime, drama",
      gen: ["Acțiune", "Aventură", "Crimă", "Dramă"],
      year: 2012,
      rating: 3,
      ratingImage: "",
      pageLink:"", 
      type: "Serial",
      text: "Miliardarul playboy Oliver Queen devine arcașul vigilent cunoscut sub numele de Arrow, căutând justiție pentru orașul său.",
      director: "●",
      writers: "●",
      stars: "Stephen Amell, Katie Cassidy, David Ramsey",
      streaming: ["Netflix"]
  },
  
  {
      title: "Avengers Age of Ultron",

      imageLink: "",
      genre: "action, adventure, sci-fi",
      gen: ["Acțiune", "Aventură", "Sci-Fi"],
      year: 2015,
      rating: 4,
      ratingImage: "",
      pageLink:"", 
      type: "Film",
      text: "Avengers trebuie să se unească pentru a opri villainul Ultron să-și pună în aplicare planurile de extincție a omenirii.",
      director: "Joss Whedon",
      writers: "Joss Whedon",
      stars: "Robert Downey Jr., Chris Evans, Scarlett Johansson",
      streaming: ["DisneyPlus"]
  },
  
  {
      title: "Avengers Endgame",
      imageLink: "",
      genre: "action, adventure, drama, sci-fi",
      gen: ["Acțiune", "Aventură", "Dramă", "Sci-Fi"],
      year: 2019,
      rating: 5,
      ratingImage: "",
      pageLink:"", 
      type: "Film",
      text: "Avengers se lansează într-o bătălie finală și epică împotriva puternicului Thanos pentru a salva universul.",
      director: "Anthony Russo, Joe Russo",
      writers: "Christopher Markus●Stephen McFeely",
      stars: "Robert Downey Jr., Chris Evans, Scarlett Johansson",
      streaming: ["DisneyPlus"]
  },
  
  {
      title: "Avengers Infinity War",
      imageLink: "",
      genre: "action, adventure, sci-fi",
      gen: ["Acțiune", "Aventură", "Sci-Fi"],
      year: 2018,
      rating: 5,
      ratingImage: "",
      pageLink:"", 
      type: "Film",
      text: "Avengers și aliații lor trebuie să oprească puternicul Thanos să obțină Piatra Infinită și să declanșeze haosul.",
      director: "Anthony Russo, Joe Russo",
      writers: "Christopher Markus●Stephen McFeely",
      stars: "Robert Downey Jr., Chris Hemsworth, Mark Ruffalo",
      streaming: ["DisneyPlus"]
  },
  
  {
      title: "Awakenings",
      imageLink: "",
      genre: "biography, drama",
      gen: ["Biografie", "Dramă"],
      year: 1990,
      rating: 4,
      ratingImage: "",
      pageLink:"", 
      type: "Film",
      text: "Based on a true story, a doctor discovers a beneficial drug for catatonic patients, awakening them to a new life.",
      director: "Penny Marshall",
      writers: "Oliver Sacks (book)●Steven Zaillian",
      stars: "Robert De Niro, Robin Williams, Julie Kavner",
      streaming: ["PrimeVideo"]
  },
    ////////////// END//////////////////
    
    {
      title:"Bad Boys",
      imageLink:"",
      genre:"action,comedy,crima",
      gen:["Actiune","Comedie","Crima"],
      year:1995,
      rating:3,
      ratingImage:"",
      pageLink:"", 
      type:"Film",
    
      text:"Intr-o noapte torida de vara, este furata o cantitate foarte mare de heroina in valoare de 100 de milioane de dolari, chiar din incaperea destinata depozitarii dovezilor. Marcus Burnett (Martin Lawrence) si Mike Lowrey, doi detectivi cam trasniti vad in rezolvarea acestui caz sansa vietii lor. Ei trebuie sa recupereze drogurile inainte ca unitatea lor sa ajunga de rasul lumii",
      director:"Michael Bay",
      writers:"George Gallo ● Michael Barrie ● Jim Mulholland",
      stars:"Will Smith ● Martin Lawrence ● Lisa Boyle",
      streaming:["netflix","hbomax"],
    },
    
    {
      title:"Breaking Bad",
      imageLink:"",
      genre:"crime,drama,thriller",
      gen:["Crima "," Drama", "thriller"],
      year:2008,
      rating:5,
      ratingImage:"",
      pageLink:"", 
      type:"Serial",
      
      text:"Un profesor de chimie diagnosticat cu cancer pulmonar inoperabil apelează la fabricarea și vânzarea de metamfetamină cu un fost student pentru a-și asigura viitorul familiei.",
      director:"Vince Gilligan",
      writers:"Vince Gilligan",
      stars:"Bryan Cranston ● Aaron Paul ● Anna Gunn",
      streaming:["Netflix"],
  

    },

    ///////START///////
    {
      title: "Bad Boys 2",
      imageLink: "",
      genre: "action, comedy, crime, thriller",
      gen: ["Acțiune", "Comedie", "Crimă", "Thriller"],
      year: 2003,
      rating: 4,
      ratingImage: "",
      pageLink:"", 
      type: "Film",
      text: "Detectivii Mike Lowrey și Marcus Burnett se reunesc pentru a doborî un cartel de droguri care face ravagii în Miami.",
      director: "Michael Bay",
      writers: "Ron Shelton●Jerry Stahl",
      stars: "Will Smith, Martin Lawrence, Gabrielle Union",
      streaming: ["Netflix"]
  },
  
  {
      title: "Batman",
      imageLink: "",
      genre: "action, adventure",
      gen: ["Acțiune", "Aventură"],
      year: 1989,
      rating: 4,
      ratingImage: "",
      pageLink:"", 
      type: "Film",
      text: "Interpretarea iconică a lui Tim Burton asupra lui Batman, în confruntarea cu Jokerul în Gotham City.",
      director: "Tim Burton",
      writers: "Sam Hamm●Warren Skaaren",
      stars: "Michael Keaton, Jack Nicholson, Kim Basinger",
      streaming: ["PrimeVideo"]
  },
  
  {
      title: "Batman Begins",
      imageLink: "",
      genre: "action, adventure",
      gen: ["Acțiune", "Aventură"],
      year: 2005,
      rating: 5,
      ratingImage: "",
      pageLink:"", 
      type: "Film",
      text: "Povestea de origine a lui Bruce Wayne în călătoria sa de a deveni Batman și a salva Gotham de la corupție.",
      director: "Christopher Nolan",
      writers: "Christopher Nolan●David S. Goyer",
      stars: "Christian Bale, Michael Caine, Liam Neeson",
      streaming: ["Netflix"]
  },
  
  {
      title: "Batman Returns",
      imageLink: "",
      genre: "action, crime, fantasy",
      gen: ["Acțiune", "Crimă", "Fantezie"],
      year: 1992,
      rating: 4,
      ratingImage: "",
      pageLink:"", 
      type: "Film",
      text: "Continuarea întunecată și atmosferică a lui Tim Burton, în care Batman se confruntă cu Penguin și Catwoman în Gotham City.",
      director: "Tim Burton",
      writers: "Daniel Waters",
      stars: "Michael Keaton, Danny DeVito, Michelle Pfeiffer",
      streaming: ["PrimeVideo"]
  },
  
  {
      title: "Batman v Superman",
      imageLink: "",
      genre: "action, adventure, fantasy, sci-fi",
      gen: ["Acțiune", "Aventură", "Fantezie", "Sci-Fi"],
      year: 2016,
      rating: 3,
      ratingImage: "",
      pageLink:"", 
      type: "Film",
      text: "Confruntarea dintre Batman și Superman duce la consecințe neașteptate în timp ce o nouă amenințare apare.",
      director: "Zack Snyder",
      writers: "Chris Terrio●David S. Goyer",
      stars: "Ben Affleck, Henry Cavill, Amy Adams",
      streaming: ["HBOmax"]
  },
  
  {
      title: "Better Call Saul",
      imageLink: "",
      genre: "crime, drama",
      gen: ["Crimă", "Dramă"],
      year: 2015,
      rating: 5,
      ratingImage: "",
      pageLink:"", 
      type: "Serial",
      text: "Preludiul la Breaking Bad urmărește transformarea lui Jimmy McGill în avocatul moralmente încercat Saul Goodman.",
      director: "●",
      writers: "Vince Gilligan●Peter Gould",
      stars: "Bob Odenkirk, Jonathan Banks, Rhea Seehorn",
      streaming: ["Netflix"]
  },
  
  {
      title: "Between",
      imageLink: "",
      genre: "drama, mystery, sci-fi, thriller",
      gen: ["Dramă", "Mister", "Sci-Fi", "Thriller"],
      year: 2015,
      rating: 3,
      ratingImage: "",
      pageLink:"", 
      type: "Serial",
      text: "Un oraș este lovit de o boală misterioasă care ucide toți cei care au vârsta peste 22 de ani, lăsând supraviețuitorii să-și gestioneze singuri comunitatea.",
      director: "●",
      writers: "Michael McGowan",
      stars: "Jennette McCurdy, Jesse Carere, Ryan Allen",
      streaming: ["Netflix"]
  },
  
  {
      title: "Big Daddy",
      imageLink: "",
      genre: "comedy, drama",
      gen: ["Comedie", "Dramă"],
      year: 1999,
      rating: 3,
      ratingImage: "",
      pageLink:"", 
      type: "Film",
      text: "Un bărbat adoptă un copil pentru a impresiona o femeie și începe o călătorie neașteptată a părinților și a responsabilităților.",
      director: "Dennis Dugan",
      writers: "Steve Franks",
      stars: "Adam Sandler, Joey Lauren Adams, Jon Stewart",
      streaming: ["Netflix"]
  },
  
  {
      title: "Black Summer",
      imageLink: "",
      genre: "action, drama, horror, thriller",
      gen: ["Acțiune", "Dramă", "Horror", "Thriller"],
      year: 2019,
      rating: 4,
      ratingImage: "",
      pageLink:"", 
      type: "Serial",
      text: "În timpul unei apocalipse zombie, supraviețuitorii călătoresc printr-o lume periculoasă în căutarea siguranței și a familiei pierdute.",
      director: "●",
      writers: "Karl Schaefer●John Hyams",
      stars: "Jaime King, Justin Chu Cary, Christine Lee",
      streaming: ["Netflix"]
  },
  
  {
      title: "Bodyguard",
      imageLink: "",
      genre: "crime, drama, thriller",
      gen: ["Crimă", "Dramă", "Thriller"],
      year: 2018,
      rating: 4,
      ratingImage: "",
      pageLink:"", 
      type: "Serial",
      text: "Un fost soldat devine bodyguard pentru un politician controversat, iar relația lor devine centrală într-o conspirație periculoasă.",
      director: "●",
      writers: "Jed Mercurio",
      stars: "Richard Madden, Keeley Hawes, Gina McKee",
      streaming: ["Netflix"]
  },
  
  {
      title: "Bonnie and Clyde",
      imageLink: "",
      genre: "action, biography, crime, drama",
      gen: ["Acțiune", "Biografie", "Crimă", "Dramă"],
      year: 1967,
      rating: 4,
      ratingImage: "",
      pageLink:"", 
      type: "Film",
      text: "O interpretare romantică a celebrei povești a criminalilor Bonnie și Clyde, care au terorizat America în anii '30.",
      director: "Arthur Penn",
      writers: "David Newman●Robert Benton",
      stars: "Warren Beatty, Faye Dunaway, Michael J. Pollard",
      streaming: ["PrimeVideo"]
  },
  
  {
      title: "Brawl in Cell Block 99",
      imageLink: "",
      genre: "action, crime, drama, thriller",
      gen: ["Acțiune", "Crimă", "Dramă", "Thriller"],
      year: 2017,
      rating: 4,
      ratingImage: "",
      pageLink:"", 
      type: "Film",
      text: "Un fost boxer intră în lumea criminală pentru a-și salva familia, ajungând într-o închisoare de maximă securitate.",
      director: "S. Craig Zahler",
      writers: "S. Craig Zahler",
      stars: "Vince Vaughn, Jennifer Carpenter, Don Johnson",
      streaming: ["PrimeVideo"]
  },
    /////End//////////



    //////start/////
      {
        title: "Captain America Civil War",
        imageLink: "",
        genre: "action, adventure, sci-fi",
        gen: ["Acțiune", "Aventură", "Sci-Fi"],
        year: 2016,
        rating: 4,
        ratingImage: "",
       pageLink:"", 
        type: "Film",
        text: "Avengerii sunt divizați atunci când intervenția politică duce la implementarea Acordului Sokovia.",
        director: "Anthony Russo●Joe Russo",
        writers: "Christopher Markus●Stephen McFeely",
        stars: "Chris Evans, Robert Downey Jr., Scarlett Johansson",
        streaming: ["DisneyPlus"]
    },
    
    {
        title: "Captain America The First Avenger",
        imageLink: "",
        genre: "action, adventure, sci-fi",
        gen: ["Acțiune", "Aventură", "Sci-Fi"],
        year: 2011,
        rating: 4,
        ratingImage: "",
       pageLink:"", 
        type: "Film",
        text: "Steve Rogers devine Captain America și luptă împotriva Craniului Roșu în timpul celui de-al Doilea Război Mondial.",
        director: "Joe Johnston",
        writers: "Christopher Markus●Stephen McFeely",
        stars: "Chris Evans, Hayley Atwell, Sebastian Stan",
        streaming: ["DisneyPlus"]
    },
    
    {
        title: "Captain America The Winter Soldier",
        imageLink: "",
        genre: "action, adventure, sci-fi",
        gen: ["Acțiune", "Aventură", "Sci-Fi"],
        year: 2014,
        rating: 4,
        ratingImage: "",
       pageLink:"", 
        type: "Film",
        text: "Captain America se confruntă cu secrete întunecate din trecutul său și o amenințare din prezent.",
        director: "Anthony Russo●Joe Russo",
        writers: "Christopher Markus●Stephen McFeely",
        stars: "Chris Evans, Scarlett Johansson, Sebastian Stan",
        streaming: ["DisneyPlus"]
    },
    
    {
        title: "Captain Phillips",
        imageLink: "",
        genre: "biography, drama, thriller",
        gen: ["Biografie", "Dramă", "Thriller"],
        year: 2013,
        rating: 4,
        ratingImage: "",
       pageLink:"", 
        type: "Film",
        text: "Adevărata poveste a răpirii navei Maersk Alabama de către pirați somalezi și a eforturilor de salvare ulterioare.",
        director: "Paul Greengrass",
        writers: "Billy Ray",
        stars: "Tom Hanks, Barkhad Abdi, Barkhad Abdirahman",
        streaming: ["Netflix"]
    },
    
    {
        title: "Case 39",
        imageLink: "",
        genre: "horror, mystery, thriller",
        gen: ["Horror", "Mister", "Thriller"],
        year: 2009,
        rating: 3,
        ratingImage: "",
       pageLink:"", 
        type: "Film",
        text: "O asistentă socială descoperă că copilul pe care l-a salvat de la părinții abuzivi are un secret întunecat.",
        director: "Christian Alvart",
        writers: "Ray Wright",
        stars: "Renée Zellweger, Jodelle Ferland, Ian McShane",
        streaming: ["Netflix"]
    },
    
    {
        title: "Cast Away",
        imageLink: "",
        genre: "adventure, drama, romance",
        gen: ["Aventură", "Dramă", "Romantic"],
        year: 2000,
        rating: 4,
        ratingImage: "",
       pageLink:"", 
        type: "Film",
        text: "Un angajat FedEx se trezește singur pe o insulă pustie și încearcă să supraviețuiască și să se întoarcă acasă.",
        director: "Robert Zemeckis",
        writers: "William Broyles Jr.",
        stars: "Tom Hanks, Helen Hunt, Paul Sanchez",
        streaming: ["PrimeVideo"]
    },
    
    {
        title: "Catch Me If You Can",
        imageLink: "",
        genre: "biography, crime, drama",
        gen: ["Biografie", "Crimă", "Dramă"],
        year: 2002,
        rating: 5,
        ratingImage: "",
       pageLink:"", 
        type: "Film",
        text: "Adevărata poveste a unui tânăr falsificator care a înșelat sistemul și a fost urmărit de un agent FBI.",
        director: "Steven Spielberg",
        writers: "Jeff Nathanson",
        stars: "Leonardo DiCaprio, Tom Hanks, Christopher Walken",
        streaming: ["Netflix"]
    },
    
    {
        title: "Central Intelligence",
        imageLink: "",
        genre: "action, comedy, crime",
        gen: ["Acțiune", "Comedie", "Crimă"],
        year: 2016,
        rating: 3,
        ratingImage: "",
       pageLink:"", 
        type: "Film",
        text: "Un contabil aparent banal este atras într-un complot periculos al unei agenții guvernamentale.",
        director: "Rawson Marshall Thurber",
        writers: "Ike Barinholtz●David Stassen",
        stars: "Dwayne Johnson, Kevin Hart, Danielle Nicolet",
        streaming: ["Netflix"]
    },
    
    {
        title: "Chernobyl",
        imageLink: "",
        genre: "drama, history, thriller",
        gen: ["Dramă", "Istoric", "Thriller"],
        year: 2019,
        rating: 5,
        ratingImage: "",
       pageLink:"", 
        type: "Serial",
        text: "O reconstituire detaliată a dezastrului nuclear de la Cernobîl și a consecințelor sale devastatoare.",
        director: "●",
        writers: "Craig Mazin",
        stars: "Jessie Buckley, Jared Harris, Stellan Skarsgård",
        streaming: ["HBOmax"]
    },
    
    {
        title: "Chernobyl 1986",
        imageLink: "",
        genre: "action, drama, history, thriller",
        gen: ["Acțiune", "Dramă", "Istoric", "Thriller"],
        year: 2021,
        rating: 4,
        ratingImage: "",
       pageLink:"", 
        type: "Film",
        text: "O dramatizare a evenimentelor care au dus la dezastrul nuclear de la Cernobîl în anul 1986.",
        director: "Danila Kozlovsky",
        writers: "Aleksandr Tsybulsky",
        stars: "Danila Kozlovsky, Oksana Akinshina, Filipp Avdeev",
        streaming: ["Netflix"]
    },
    
    {
        title: "Chernobyl Diaries",
        imageLink: "",
        genre: "horror, mystery, sci-fi",
        gen: ["Horror", "Mister", "Sci-Fi"],
        year: 2012,
        rating: 3,
        ratingImage: "",
       pageLink:"", 
        type: "Film",
        text: "Un grup de turiști explorează orașul abandonat Pripyat, aproape de centrala nucleară dezastruoasă.",
        director: "Bradley Parker",
        writers: "Oren Peli●Carey Van Dyke",
        stars: "Jesse McCartney, Jonathan Sadowski, Olivia Taylor Dudley",
        streaming: ["PrimeVideo"]
    },
    
    {
        title: "Children of Men",
        imageLink: "",
        genre: "drama, sci-fi, thriller",
        gen: ["Dramă", "Sci-Fi", "Thriller"],
        year: 2006,
        rating: 5,
        ratingImage: "",
       pageLink:"", 
        type: "Film",
        text: "Într-un viitor în care omenirea a devenit sterilă, un bărbat este însărcinat să protejeze o femeie însărcinată.",
        director: "Alfonso Cuarón",
        writers: "Alfonso Cuarón",
        stars: "Clive Owen, Julianne Moore, Michael Caine",
        streaming: ["PrimeVideo"]
    },
    
    {
        title: "Coach Carter",
        imageLink: "",
        genre: "biography, drama, sport",
        gen: ["Biografie", "Dramă", "Sport"],
        year: 2005,
        rating: 4,
        ratingImage: "",
       pageLink:"", 
        type: "Film",
        text: "Un antrenor de baschet impune standarde înalte academice și de comportament pentru echipa sa.",
        director: "Thomas Carter",
        writers: "Mark Schwahn●John Gatins",
        stars: "Samuel L. Jackson, Rick Gonzalez, Robert Ri'chard",
        streaming: ["PrimeVideo"]
    },
    
    {
        title: "Colony",
        imageLink: "",
        genre: "action, adventure, drama",
        gen: ["Acțiune", "Aventură", "Dramă"],
        year: 2016,
        rating: 3,
        ratingImage: "",
       pageLink:"", 
        type: "Serial",
        text: "O familie luptă pentru supraviețuire în Los Angelesul ocupat de o forță extraterestră misterioasă.",
        director: "●",
        writers: "Carlton Cuse ● Ryan J. Condal",
        stars: "Josh Holloway, Sarah Wayne Callies, Peter Jacobson",
        streaming: ["Netflix"]
    },
    
    {
        title: "Contact",
        imageLink: "",
        genre: "drama, mystery, sci-fi",
        gen: ["Dramă", "Mister", "Sci-Fi"],
        year: 1997,
        rating: 4,
        ratingImage: "",
       pageLink:"", 
        type: "Film",
        text: "O cercetătoare primește un semnal misterios din spațiul extraterestru și începe o călătorie interstelară.",
        director: "Robert Zemeckis",
        writers: "James V. Hart●Michael Goldenberg",
        stars: "Jodie Foster, Matthew McConaughey, Tom Skerritt",
        streaming: ["PrimeVideo"]
    },
    
    {
        title: "Creed",
        imageLink: "",
        genre: "drama, sport",
        gen: ["Dramă", "Sport"],
        year: 2015,
        rating: 4,
        ratingImage: "",
       pageLink:"", 
        type: "Film",
        text: "Fiul lui Apollo Creed, Adonis Johnson, își dorește să devină un campion de box ca tatăl său.",
        director: "Ryan Coogler",
        writers: "Ryan Coogler●Aaron Covington",
        stars: "Michael B. Jordan, Sylvester Stallone, Tessa Thompson",
        streaming: ["PrimeVideo"]
    },
    
    {
        title: "Creed 2",
        imageLink: "",
        genre: "drama, sport",
        gen: ["Dramă", "Sport"],
        year: 2018,
        rating: 4,
        ratingImage: "",
       pageLink:"", 
        type: "Film",
        text: "Adonis Creed se confruntă cu trecutul său și cu o nouă provocare în ring.",
        director: "Steven Caple Jr.",
        writers: "Juel Taylor●Sylvester Stallone",
        stars: "Michael B. Jordan, Sylvester Stallone, Tessa Thompson",
        streaming: ["PrimeVideo"]
    },
      ////endl/////

      ///////start//////////
  {
      title: "Dawn of the Dead",
      imageLink: "",
      genre: "horror, action, thriller",
      gen: ["Horror", "Acțiune", "Thriller"],
      year: 2004,
      rating: 4,
      ratingImage: "",
      pageLink:"", 
      type: "Film",
      text: "O grupă de supraviețuitori se adăpostește într-un centru comercial în timp ce lumea este invadată de zombi.",
      director: "Zack Snyder",
      writers: "James Gunn",
      stars: "Sarah Polley, Ving Rhames, Mekhi Phifer",
      streaming: ["PrimeVideo"]
  },

  {
      title: "Day of the Dead",
      imageLink: "",
      genre: "horror, sci-fi, thriller",
      gen: ["Horror", "Sci-Fi", "Thriller"],
      year: 1985,
      rating: 3,
      ratingImage: "",
      pageLink:"", 
      type: "Film",
      text: "Oamenii supraviețuitori încearcă să reziste în fața unei apocalipse zombie, dar trebuie să facă față și altor amenințări.",
      director: "George A. Romero",
      writers: "George A. Romero",
      stars: "Lori Cardille, Terry Alexander, Joseph Pilato",
      streaming: ["PrimeVideo"]
  },

  {
      title: "Deadpool",
      imageLink: "",
      genre: "action, adventure, comedy",
      gen: ["Acțiune", "Aventură", "Comedie"],
      year: 2016,
      rating: 4,
      ratingImage: "",
      pageLink:"", 
      type: "Film",
      text: "Un fost soldat al Forțelor Speciale devine mercenar și își caută răzbunarea într-un mod unic și comic.",
      director: "Tim Miller",
      writers: "Rhett Reese●Paul Wernick",
      stars: "Ryan Reynolds, Morena Baccarin, T.J. Miller",
      streaming: ["PrimeVideo"]
  },

  {
      title: "Doctor Strange",
      imageLink: "",
      genre: "action, adventure, fantasy",
      gen: ["Acțiune", "Aventură", "Fantezie"],
      year: 2016,
      rating: 4,
      ratingImage: "",
      pageLink:"", 
      type: "Film",
      text: "Un neurochirurg talentat își recâștigă abilitățile după un accident grav și descoperă lumea magiei și a dimensiunilor paralele.",
      director: "Scott Derrickson",
      writers: "Jon Spaihts●Scott Derrickson",
      stars: "Benedict Cumberbatch, Chiwetel Ejiofor, Rachel McAdams",
      streaming: ["DisneyPlus"]
  },



  {
      title: "Dog",
      imageLink: "",
      genre: "drama",
      gen: ["Dramă"],
      year: 2022,
      rating: 4,
      ratingImage: "",
      pageLink:"", 
      type: "Film",
      text: "O comedie-dramă despre relația complexă dintre om și câine și impactul pe care îl au unul asupra celuilalt.",
      director: "Channing Tatum",
      writers: "Reid Carolin●Brett Rodriguez",
      stars: "Channing Tatum, Jane Adams, Kevin Nash",
      streaming: ["PrimeVideo"]
  },

  
  {
      title: "El Camino A Breaking Bad Movie",
      imageLink: "",
      genre: "action, drama",
      gen: ["Acțiune", "Dramă"],
      year: 2019,
      rating: 4,
      ratingImage: "",
      pageLink:"", 
      type: "Film",
      text: "Continuarea povestei lui Jesse Pinkman după evenimentele din seria Breaking Bad.",
      director: "Vince Gilligan",
      writers: "Vince Gilligan",
      stars: "Aaron Paul, Charles Baker, Matt Jones",
      streaming: ["Netflix"]
  },
  
  {
      title: "Escape",
      imageLink: "",
      genre: "action, crime, thriller",
      gen: ["Acțiune", "Crimă", "Thriller"],
      year: 2012,
      rating: 3,
      ratingImage: "",
      pageLink:"", 
      type: "Film",
      text: "Un expert în securitate trebuie să evadeze din cea mai sigură închisoare din lume pentru a-și salva familia.",
      director: "Mikael Håfström",
      writers: "Miles Chapman●Jason Keller",
      stars: "Sylvester Stallone, Arnold Schwarzenegger, 50 Cent",
      streaming: ["PrimeVideo"]
  },
  
  {
      title: "Escape from Alcatraz",
      imageLink: "",
      genre: "biography, crime, drama",
      gen: ["Biografie", "Crimă", "Dramă"],
      year: 1979,
      rating: 4,
      ratingImage: "",
      pageLink:"", 
      type: "Film",
      text: "Povestea încercării incredibile de evadare a unui prizonier din Alcatraz.",
      director: "Don Siegel",
      writers: "J. Campbell Bruce●Richard Tuggle",
      stars: "Clint Eastwood, Patrick McGoohan, Roberts Blossom",
      streaming: ["PrimeVideo"]
  },
  
  {
      title: "Eternal Sunshine of the Spotless Mind",
      imageLink: "",
      genre: "drama, romance, sci-fi",
      gen: ["Dramă", "Romantic", "Sci-Fi"],
      year: 2004,
      rating: 5,
      ratingImage: "",
      pageLink:"", 
      type: "Film",
      text: "Un cuplu se decide să-și șteargă amintirile despre relația lor complicată.",
      director: "Michel Gondry",
      writers: "Charlie Kaufman",
      stars: "Jim Carrey, Kate Winslet, Tom Wilkinson",
      streaming: ["PrimeVideo"]
  },
  
  {
      title: "Fear The Walking Dead",
      imageLink: "",
      genre: "drama, horror, sci-fi",
      gen: ["Dramă", "Horror", "Sci-Fi"],
      year: 2015,
      rating: 3,
      ratingImage: "",
      pageLink:"", 
      type: "Serial",
      text: "Un spin-off al The Walking Dead care explorează apocalipsa zombie din perspectiva altor supraviețuitori.",
      director: "●",
      writers: "Dave Erickson●Robert Kirkman",
      stars: "Kim Dickens, Frank Dillane, Cliff Curtis",
      streaming: ["PrimeVideo"]
  },
  
  {
      title: "Fight Club",
      imageLink: "",
      genre: "drama",
      gen: ["Dramă"],
      year: 1999,
      rating: 5,
      ratingImage: "",
      pageLink:"", 
      type: "Film",
      text: "Un bărbat obosit de viața sa monotonă își schimbă complet perspectiva asupra lumii prin intermediul unui club secret.",
      director: "David Fincher",
      writers: "Chuck Palahniuk●Jim Uhls",
      stars: "Brad Pitt, Edward Norton, Helena Bonham Carter",
      streaming: ["PrimeVideo"]
  },
  
  {
      title: "Finch",
      imageLink: "",
      genre: "drama, sci-fi",
      gen: ["Dramă", "Sci-Fi"],
      year: 2021,
      rating: 4,
      ratingImage: "",
      pageLink:"", 
      type: "Film",
      text: "Un inventator solitar și câinele său robotic călătoresc printr-o lume post-apocaliptică.",
      director: "Miguel Sapochnik",
      writers: "Craig Luck●Ivory Hanley",
      stars: "Tom Hanks, Caleb Landry Jones",
      streaming: ["AppleTV"]
  },
  
  {
      title: "Forrest Gump",
      imageLink: "",
      genre: "drama, romance",
      gen: ["Dramă", "Romantic"],
      year: 1994,
      rating: 5,
      ratingImage: "",
      pageLink:"", 
      type: "Film",
      text: "Povestea remarcabilă a lui Forrest Gump, un bărbat cu inteligență limitată, dar cu o viață extraordinară.",
      director: "Robert Zemeckis",
      writers: "Winston Groom●Eric Roth",
      stars: "Tom Hanks, Robin Wright, Gary Sinise",
      streaming: ["PrimeVideo"]
  },
  
  {
      title: "Free Guy",
      imageLink: "",
      genre: "action, adventure, comedy",
      gen: ["Acțiune", "Aventură", "Comedie"],
      year: 2021,
      rating: 4,
      ratingImage: "",
      pageLink:"", 
      type: "Film",
      text: "Un NPC dintr-un joc video devine conștient de propria sa existență și decide să devină un erou.",
      director: "Shawn Levy",
      writers: "Matt Lieberman●Zak Penn",
      stars: "Ryan Reynolds, Jodie Comer, Taika Waititi",
      streaming: ["DisneyPlus"]
  },
  
  {
      title: "Frequency",
      imageLink: "",
      genre: "crime, drama, fantasy",
      gen: ["Crimă", "Dramă", "Fantezie"],
      year: 2000,
      rating: 4,
      ratingImage: "",
      pageLink:"", 
      type: "Film",
      text: "Un polițist din New York intră în contact cu tatăl său decedat printr-un radio vechi și încearcă să prevină o tragedie.",
      director: "Gregory Hoblit",
      writers: "Toby Emmerich",
      stars: "Dennis Quaid, Jim Caviezel, Shawn Doyle",
      streaming: ["PrimeVideo"]
  },
  
  {
      title: "Fury",
      imageLink: "",
      genre: "action, drama, war",
      gen: ["Acțiune", "Dramă", "Război"],
      year: 2014,
      rating: 4,
      ratingImage: "",
      pageLink:"", 
      type: "Film",
      text: "Echipajul unui tanc american din Al Doilea Război Mondial se confruntă cu ororile războiului.",
      director: "David Ayer",
      writers: "David Ayer",
      stars: "Brad Pitt, Shia LaBeouf, Logan Lerman",
      streaming: ["PrimeVideo"]
  },
  
  {
      title: "Geostorm",
      imageLink: "",
      genre: "action, sci-fi, thriller",
      gen: ["Acțiune", "Sci-Fi", "Thriller"],
      year: 2017,
      rating: 3,
      ratingImage: "",
      pageLink:"", 
      type: "Film",
      text: "O rețea globală de sateliți menită să controleze clima Pământului începe să provoace dezastre naturale.",
      director: "Dean Devlin",
      writers: "Dean Devlin●Paul Guyot",
      stars: "Gerard Butler, Jim Sturgess, Abbie Cornish",
      streaming: ["PrimeVideo"]
  },
  
  {
      title: "Get Out",
      imageLink: "",
      genre: "horror, mystery, thriller",
      gen: ["Horror", "Mister", "Thriller"],
      year: 2017,
      rating: 5,
      ratingImage: "",
      pageLink:"", 
      type: "Film",
      text: "Un bărbat afro-american vizitează familia albă a prietenei sale și descoperă lucruri înspăimântătoare despre comunitatea lor.",
      director: "Jordan Peele",
      writers: "Jordan Peele",
      stars: "Daniel Kaluuya, Allison Williams, Bradley Whitford",
      streaming: ["PrimeVideo"]
  },
  
  {
      title: "Going in Style",
      imageLink: "",
      genre: "comedy, crime",
      gen: ["Comedie", "Crimă"],
      year: 2017,
      rating: 3,
      ratingImage: "",
      pageLink:"", 
      type: "Film",
      text: "Trei prieteni bătrâni decid să jefuiască o bancă după ce pensiile lor sunt anulate.",
      director: "Zach Braff",
      writers: "Theodore Melfi",
      stars: "Michael Caine, Morgan Freeman, Alan Arkin",
      streaming: ["PrimeVideo"]
  },
  
  {
      title: "Good Will Hunting",
      imageLink: "",
      genre: "drama",
      gen: ["Dramă"],
      year: 1997,
      rating: 5,
      ratingImage: "",
      pageLink:"", 
      type: "Film",
      text: "Un geniu autodidact din Boston este descoperit de un terapeut care încearcă să-l ajute să-și depășească trecutul tumultos.",
      director: "Gus Van Sant",
      writers: "Matt Damon●Ben Affleck",
      stars: "Robin Williams, Matt Damon, Ben Affleck",
      streaming: ["PrimeVideo"]
  },
  
  {
      title: "Gotham",
      imageLink: "",
      genre: "action, crime, drama",
      gen: ["Acțiune", "Crimă", "Dramă"],
      year: 2014,
      rating: 4,
      ratingImage: "",
      pageLink:"", 
      type: "Serial",
      text: "Povestea orașului Gotham și a originii personajelor din universul Batman.",
      director: "●",
      writers: "Bruno Heller",
      stars: "Ben McKenzie, Jada Pinkett Smith, Donal Logue",
      streaming: ["Netflix"]
  },
  
  {
      title: "Gravity",
      imageLink: "",
      genre: "drama, sci-fi, thriller",
      gen: ["Dramă", "Sci-Fi", "Thriller"],
      year: 2013,
      rating: 4,
      ratingImage: "",
      pageLink:"", 
      type: "Film",
      text: "Doi astronauți luptă pentru supraviețuire în spațiu după ce nava lor este distrusă în timpul unei misiuni.",
      director: "Alfonso Cuarón",
      writers: "Alfonso Cuarón●Jonás Cuarón",
      stars: "Sandra Bullock, George Clooney",
      streaming: ["PrimeVideo"]
  },
  
  {
      title: "Green Lantern",
      imageLink: "",
      genre: "action, adventure, sci-fi",
      gen: ["Acțiune", "Aventură", "Sci-Fi"],
      year: 2011,
      rating: 3,
      ratingImage: "",
      pageLink:"", 
      type: "Film",
      text: "Un pilot de teste devine membru al unei forțe intergalactice cu puteri supraomenești.",
      director: "Martin Campbell",
      writers: "Greg Berlanti●Michael Green",
      stars: "Ryan Reynolds, Blake Lively, Peter Sarsgaard",
      streaming: ["PrimeVideo"]
  },
  
  {
      title: "Groundhog Day",
      imageLink: "",
      genre: "comedy, drama, fantasy",
      gen: ["Comedie", "Dramă", "Fantezie"],
      year: 1993,
      rating: 5,
      ratingImage: "",
      pageLink:"", 
      type: "Film",
      text: "Un bărbat se trezește în fiecare zi pentru a trăi aceeași zi în mod repetat.",
      director: "Harold Ramis",
      writers: "Danny Rubin●Harold Ramis",
      stars: "Bill Murray, Andie MacDowell, Chris Elliott",
      streaming: ["PrimeVideo"]
  },

{
    title: "Guardians of The Galaxy Vol 2",
    imageLink: "unknown.jpg",
    genre: "action, adventure, comedy",
    gen: ["Acțiune", "Aventură", "Comedie"],
    year: 2017,
    rating: 4,
    ratingImage: "",
    type: "Film",
    text: "Echipa excentrică de eroi spațiali se confruntă cu noi amenințări și descoperă secrete despre trecutul lui Star-Lord.",
    director: "James Gunn",
    writers: "James Gunn",
    stars: "Chris Pratt, Zoe Saldana, Dave Bautista",
    streaming: ["Netflix", "DisneyPlus"]
},

{
    title: "Guardians of the Galaxy",
    imageLink: "unknown.jpg",
    genre: "action, adventure, comedy",
    gen: ["Acțiune", "Aventură", "Comedie"],
    year: 2014,
    rating: 4,
    ratingImage: "",
    type: "Film",
    text: "Un grup neconvențional de eroi spațiali se aliază pentru a împiedica un criminal intergalactic să distrugă lumea.",
    director: "James Gunn",
    writers: "James Gunn",
    stars: "Chris Pratt, Zoe Saldana, Dave Bautista",
    streaming: ["Netflix", "DisneyPlus"]
},

{
    title: "Hacksaw Ridge",
    imageLink: "unknown.jpg",
    genre: "biography, drama, history",
    gen: ["Biografie", "Dramă", "Istoric"],
    year: 2016,
    rating: 5,
    ratingImage: "",
    type: "Film",
    text: "Un erou al celui de-Al Doilea Război Mondial refuză să tragă în inamici, salvând vieți în timpul Bătăliei de la Okinawa.",
    director: "Mel Gibson",
    writers: "Andrew Knight●Robert Schenkkan",
    stars: "Andrew Garfield, Sam Worthington, Luke Bracey",
    streaming: ["PrimeVideo"]
},

{
    title: "Halloween",
    imageLink: "unknown.jpg",
    genre: "horror, thriller",
    gen: ["Horror", "Thriller"],
    year: 2018,
    rating: 3,
    ratingImage: "",
    type: "Film",
    text: "Michael Myers se întoarce după patruzeci de ani pentru a o confrunta pe sora sa, Laurie Strode.",
    director: "David Gordon Green",
    writers: "David Gordon Green●Danny McBride",
    stars: "Jamie Lee Curtis, Judy Greer, Andi Matichak",
    streaming: ["PrimeVideo"]
},

{
    title: "Halloween II",
    imageLink: "unknown.jpg",
    genre: "horror, thriller",
    gen: ["Horror", "Thriller"],
    year: 1981,
    rating: 3,
    ratingImage: "",
    type: "Film",
    text: "Continuarea evenimentelor din Halloween, Laurie Strode este dusă la spital după atacul lui Michael Myers.",
    director: "Rick Rosenthal",
    writers: "John Carpenter●Debra Hill",
    stars: "Jamie Lee Curtis, Donald Pleasence, Charles Cyphers",
    streaming: ["PrimeVideo"]
},

{
    title: "Harry Potter and the Chamber of Secrets",
    imageLink: "unknown.jpg",
    genre: "adventure, family, fantasy",
    gen: ["Aventură", "Familie", "Fantezie"],
    year: 2002,
    rating: 4,
    ratingImage: "",
    type: "Film",
    text: "Harry descoperă o cameră secretă la școală și trebuie să salveze elevii de o bestie misterioasă.",
    director: "Chris Columbus",
    writers: "J.K. Rowling●Steve Kloves",
    stars: "Daniel Radcliffe, Rupert Grint, Emma Watson",
    streaming: ["PrimeVideo"]
},

{
    title: "Harry Potter and the Deathly Hallows - Part 1",
    imageLink: "unknown.jpg",
    genre: "adventure, drama, fantasy",
    gen: ["Aventură", "Dramă", "Fantezie"],
    year: 2010,
    rating: 5,
    ratingImage: "",
    type: "Film",
    text: "Harry, Ron și Hermione încearcă să distrugă Horcruxesle lui Voldemort pentru a-l înfrunta pe Lordul Cap-de-Mort.",
    director: "David Yates",
    writers: "J.K. Rowling●Steve Kloves",
    stars: "Daniel Radcliffe, Emma Watson, Rupert Grint",
    streaming: ["PrimeVideo"]
},

{
    title: "Harry Potter and the Deathly Hallows - Part 2",
    imageLink: "unknown.jpg",
    genre: "adventure, drama, fantasy",
    gen: ["Aventură", "Dramă", "Fantezie"],
    year: 2011,
    rating: 5,
    ratingImage: "",
    type: "Film",
    text: "Bătălia finală dintre forțele lui Harry și Voldemort are loc la Hogwarts.",
    director: "David Yates",
    writers: "J.K. Rowling●Steve Kloves",
    stars: "Daniel Radcliffe, Emma Watson, Rupert Grint",
    streaming: ["PrimeVideo"]
},

{
    title: "Harry Potter and the Goblet of Fire",
    imageLink: "unknown.jpg",
    genre: "adventure, family, fantasy",
    gen: ["Aventură", "Familie", "Fantezie"],
    year: 2005,
    rating: 4,
    ratingImage: "",
    type: "Film",
    text: "Harry participă la Turnirul Triwizard, descoperind conspirații întunecate în jurul lui.",
    director: "Mike Newell",
    writers: "J.K. Rowling●Steve Kloves",
    stars: "Daniel Radcliffe, Emma Watson, Rupert Grint",
    streaming: ["PrimeVideo"]
},

{
    title: "Harry Potter and the Half-Blood Prince",
    imageLink: "unknown.jpg",
    genre: "adventure, family, fantasy",
    gen: ["Aventură", "Familie", "Fantezie"],
    year: 2009,
    rating: 5,
    ratingImage: "",
    type: "Film",
    text: "Harry primește lecții de la Dumbledore pentru a descoperi secretele trecutului lui Voldemort.",
    director: "David Yates",
    writers: "J.K. Rowling●Steve Kloves",
    stars: "Daniel Radcliffe, Emma Watson, Rupert Grint",
    streaming: ["PrimeVideo"]
},

{
    title: "Harry Potter and the Order of Phoenix",
    imageLink: "unknown.jpg",
    genre: "adventure, family, fantasy",
    gen: ["Aventură", "Familie", "Fantezie"],
    year: 2007,
    rating: 4,
    ratingImage: "",
    type: "Film",
    text: "Harry se confruntă cu opoziția Ministerului Magiei și descoperă organizația secretă numită Ordinul Phoenix.",
    director: "David Yates",
    writers: "J.K. Rowling●Michael Goldenberg",
    stars: "Daniel Radcliffe, Emma Watson, Rupert Grint",
    streaming: ["PrimeVideo"]
},

{
    title: "Harry Potter and the Prisoner of Azkaban",
    imageLink: "unknown.jpg",
    genre: "adventure, family, fantasy",
    gen: ["Aventură", "Familie", "Fantezie"],
    year: 2004,
    rating: 4,
    ratingImage: "",
    type: "Film",
    text: "Harry află că Sirius Black, un prizonier periculos, este pe urmele sale.",
    director: "Alfonso Cuarón",
    writers: "J.K. Rowling●Steve Kloves",
    stars: "Daniel Radcliffe, Emma Watson, Rupert Grint",
    streaming: ["PrimeVideo"]
},

{
    title: "Harry Potter and the Sorcerer's Stone",
    imageLink: "unknown.jpg",
    genre: "adventure, family, fantasy",
    gen: ["Aventură", "Familie", "Fantezie"],
    year: 2001,
    rating: 4,
    ratingImage: "",
    type: "Film",
    text: "Harry descoperă că este un vrăjitor și începe aventurile sale la școala Hogwarts.",
    director: "Chris Columbus",
    writers: "J.K. Rowling●Steve Kloves",
    stars: "Daniel Radcliffe, Emma Watson, Rupert Grint",
    streaming: ["PrimeVideo"]
},

{
    title: "House",
    imageLink: "unknown.jpg",
    genre: "drama, mystery",
    gen: ["Dramă", "Mister"],
    year: 2004,
    rating: 5,
    ratingImage: "",
    type: "Serial",
    text: "Un medic genial, dar excentric, rezolvă cazuri medicale complexe cu ajutorul echipei sale.",
    director: "●",
    writers: "David Shore",
    stars: "Hugh Laurie, Omar Epps, Robert Sean Leonard",
    streaming: ["PrimeVideo"]
},
{
  title: "Identity",
  imageLink: "unknown.jpg",
  genre: "mystery, thriller",
  gen: ["Mister", "Thriller"],
  year: 2003,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Un grup divers de străini este blocat într-un motel în timpul unei furtuni și începe să fie ucis unul câte unul.",
  director: "James Mangold",
  writers: "Michael Cooney",
  stars: "John Cusack, Ray Liotta, Amanda Peet",
  streaming: ["Netflix"]
},

{
  title: "In the Tall Grass",
  imageLink: "unknown.jpg",
  genre: "drama, horror, thriller",
  gen: ["Dramă", "Groază", "Thriller"],
  year: 2019,
  rating: 3,
  ratingImage: "",
  type: "Film",
  text: "O femeie însărcinată și fratele ei intră într-un câmp înalt după ce aud strigăte de ajutor, dar devin prizonieri ai unei prezențe malefice.",
  director: "Vincenzo Natali",
  writers: "Stephen King●Joe Hill",
  stars: "Laysla De Oliveira, Avery Whitted, Patrick Wilson",
  streaming: ["Netflix"]
},

{
  title: "Inception",
  imageLink: "unknown.jpg",
  genre: "action, adventure, sci-fi",
  gen: ["Acțiune", "Aventură", "Sc-Fi"],
  year: 2010,
  rating: 5,
  ratingImage: "",
  type: "Film",
  text: "Un hoț priceput intră în visele altor oameni pentru a fura secretele lor cele mai intime.",
  director: "Christopher Nolan",
  writers: "Christopher Nolan",
  stars: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
  streaming: ["Netflix"]
},

{
  title: "Independence Day",
  imageLink: "unknown.jpg",
  genre: "action, adventure, sci-fi",
  gen: ["Acțiune", "Aventură", "Sc-Fi"],
  year: 1996,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Omenirea se unite pentru a respinge o invazie extraterestră gigantică în ziua independenței Americii.",
  director: "Roland Emmerich",
  writers: "Dean Devlin●Roland Emmerich",
  stars: "Will Smith, Bill Pullman, Jeff Goldblum",
  streaming: ["Netflix"]
},

{
  title: "Independence Day Resurgence",
  imageLink: "unknown.jpg",
  genre: "action, adventure, sci-fi",
  gen: ["Acțiune", "Aventură", "Sc-Fi"],
  year: 2016,
  rating: 2,
  ratingImage: "",
  type: "Film",
  text: "După o invazie extraterestră anterioară, o nouă amenințare apare și Pământul se pregătește pentru o luptă finală.",
  director: "Roland Emmerich",
  writers: "Nicolas Wright●James A. Woods",
  stars: "Liam Hemsworth, Jeff Goldblum, Bill Pullman",
  streaming: ["Netflix"]
},

{
  title: "Interstellar",
  imageLink: "unknown.jpg",
  genre: "adventure, drama, sci-fi",
  gen: ["Aventură", "Dramă", "Sc-Fi"],
  year: 2014,
  rating: 5,
  ratingImage: "",
  type: "Film",
  text: "Un grup de exploratori spațiali călătorește printr-un wormhole pentru a găsi o nouă casă pentru omenirea amenințată de foamete.",
  director: "Christopher Nolan",
  writers: "Jonathan Nolan●Christopher Nolan",
  stars: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
  streaming: ["Netflix"]
},

{
  title: "Into the Night",
  imageLink: "unknown.jpg",
  genre: "action, drama, thriller",
  gen: ["Acțiune", "Dramă", "Thriller"],
  year: 2020,
  rating: 3,
  ratingImage: "",
  type: "Serial",
  text: "O serie de evenimente ciudate și violente izbucnesc în timpul unui zbor de noapte către Bruxelles.",
  director: "●",
  writers: "Jason George",
  stars: "Pauline Etienne, Laurent Capelluto, Stefano Cassetti",
  streaming: ["Netflix"]
},

{
  title: "Iron Man",
  imageLink: "unknown.jpg",
  genre: "action, adventure, sci-fi",
  gen: ["Acțiune", "Aventură", "Sc-Fi"],
  year: 2008,
  rating: 5,
  ratingImage: "",
  type: "Film",
  text: "Geniul miliardar Tony Stark construiește o armură puternică și devine supererouul cunoscut sub numele de Iron Man.",
  director: "Jon Favreau",
  writers: "Mark Fergus●Hawk Ostby",
  stars: "Robert Downey Jr., Gwyneth Paltrow, Jeff Bridges",
  streaming: ["Netflix"]
},

{
  title: "Iron Man 2",
  imageLink: "unknown.jpg",
  genre: "action, adventure, sci-fi",
  gen: ["Acțiune", "Aventură", "Sc-Fi"],
  year: 2010,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Tony Stark se confruntă cu presiuni politice și noi amenințări, în timp ce încearcă să-și păstreze identitatea de Iron Man secretă.",
  director: "Jon Favreau",
  writers: "Justin Theroux",
  stars: "Robert Downey Jr., Mickey Rourke, Scarlett Johansson",
  streaming: ["Netflix"]
},

{
  title: "Iron Man 3",
  imageLink: "unknown.jpg",
  genre: "action, adventure, sci-fi",
  gen: ["Acțiune", "Aventură", "Sc-Fi"],
  year: 2013,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Tony Stark se confruntă cu un inamic nou și puternic, cunoscut sub numele de Mandarin.",
  director: "Shane Black",
  writers: "Drew Pearce●Shane Black",
  stars: "Robert Downey Jr., Gwyneth Paltrow, Don Cheadle",
  streaming: ["Netflix"]
},
{
  title:"IT",
  imageLink:"",
  genre:"horror",
  gen:["Horor"],
  year:2017,
  rating:4,
  ratingImage:"",
  pageLink:"", 
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
  genre:"horror,drama,fantasy",
  gen:["Horor","Drama","Fantezie"],
  year:2019,
  rating:3,
  ratingImage:"",
  pageLink:"", 
  type:"Film",
  
  text:"La douăzeci și șapte de ani de la prima lor întâlnire cu terifianta Pennywise, Clubul Perdanților au crescut și s-au îndepărtat, până când un telefon devastator îi aduce înapoi.",
  director:"Andy Muschietti",
  writers:"Stephen King ● Gary Dauberman",
  stars:" Jessica Chastain ● James McAvoy ● Bill Hader",
  streaming:["Netflix", "PrimeVideo"],
},
    

{
  title: "Jack Reacher",
  imageLink: "unknown.jpg",
  genre: "action, crime, thriller",
  gen: ["Acțiune", "Crimă", "Thriller"],
  year: 2012,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Jack Reacher, un fost ofițer de poliție militară, investighează un caz de crimă complicat.",
  director: "Christopher McQuarrie",
  writers: "Christopher McQuarrie",
  stars: "Tom Cruise, Rosamund Pike, Richard Jenkins",
  streaming: ["Netflix"]
},

{
  title: "Jack Reacher Never Go Back",
  imageLink: "unknown.jpg",
  genre: "action, adventure, crime",
  gen: ["Acțiune", "Aventură", "Crimă"],
  year: 2016,
  rating: 3,
  ratingImage: "",
  type: "Film",
  text: "Jack Reacher este implicat într-un complot guvernamental și încearcă să-și dovedească nevinovăția.",
  director: "Edward Zwick",
  writers: "Richard Wenk●Edward Zwick",
  stars: "Tom Cruise, Cobie Smulders, Aldis Hodge",
  streaming: ["Netflix"]
},

{
  title: "Joker",
  imageLink: "unknown.jpg",
  genre: "crime, drama, thriller",
  gen: ["Crimă", "Dramă", "Thriller"],
  year: 2019,
  rating: 5,
  ratingImage: "",
  type: "Film",
  text: "O privire întunecată asupra originilor și evoluției legendarului personaj Joker din universul DC Comics.",
  director: "Todd Phillips",
  writers: "Todd Phillips●Scott Silver",
  stars: "Joaquin Phoenix, Robert De Niro, Zazie Beetz",
  streaming: ["Netflix"]
},
{
  title: "Knight and Day",
  imageLink: "unknown.jpg",
  genre: "action, adventure, comedy",
  gen: ["Acțiune", "Aventură", "Comedie"],
  year: 2010,
  rating: 3,
  ratingImage: "",
  type: "Film",
  text: "O femeie se află în mijlocul unei conspirații globale și este luată sub aripa unui bărbat misterios și agil.",
  director: "James Mangold",
  writers: "Patrick O'Neill",
  stars: "Tom Cruise, Cameron Diaz, Peter Sarsgaard",
  streaming: ["Netflix"]
},

{
  title: "Leon",
  imageLink: "unknown.jpg",
  genre: "action, crime, drama",
  gen: ["Acțiune", "Crimă", "Dramă"],
  year: 1994,
  rating: 5,
  ratingImage: "",
  type: "Film",
  text: "Un asasin plătit devine protectorul unei tânărașe orfane, instruind-o în tainele artei asasinatului.",
  director: "Luc Besson",
  writers: "Luc Besson",
  stars: "Jean Reno, Gary Oldman, Natalie Portman",
  streaming: ["Netflix"]
},

{
  title: "Loki",
  imageLink: "unknown.jpg",
  genre: "action, adventure, fantasy",
  gen: ["Acțiune", "Aventură", "Fantezie"],
  year: 2021,
  rating: 4,
  ratingImage: "",
  type: "Serial",
  text: "Dioscurul mitologic Loki este pus într-un program de protecție a martorilor și trebuie să navigheze prin timp pentru a remedia tulburările temporale.",
  director: "●",
  writers: "Michael Waldron",
  stars: "Tom Hiddleston, Owen Wilson, Sophia Di Martino",
  streaming: ["DisneyPlus"]
},

{
  title: "Lupin",
  imageLink: "unknown.jpg",
  genre: "action, crime, drama",
  gen: ["Acțiune", "Crimă", "Dramă"],
  year: 2021,
  rating: 4,
  ratingImage: "",
  type: "Serial",
  text: "Un hoț inspirat de aventurile lui Arsène Lupin încearcă să descopere adevărul din spatele unei nedreptăți comise familiei sale.",
  director: "●",
  writers: "George Kay",
  stars: "Omar Sy, Vincent Londez, Ludivine Sagnier",
  streaming: ["Netflix"]
},

{
  title: "Man of Steel",
  imageLink: "unknown.jpg",
  genre: "action, adventure, sci-fi",
  gen: ["Acțiune", "Aventură", "Sc-Fi"],
  year: 2013,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Clark Kent descoperă puterile sale supraomenești și își asumă rolul de protector al Pământului sub numele de Superman.",
  director: "Zack Snyder",
  writers: "David S. Goyer",
  stars: "Henry Cavill, Amy Adams, Michael Shannon",
  streaming: ["Netflix"]
},

{
  title: "Man on Fire",
  imageLink: "unknown.jpg",
  genre: "action, crime, drama",
  gen: ["Acțiune", "Crimă", "Dramă"],
  year: 2004,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Un fost agent CIA devine bodyguard pentru o fetiță în Mexic și se răzbună nemilos când ea este răpită.",
  director: "Tony Scott",
  writers: "Brian Helgeland",
  stars: "Denzel Washington, Christopher Walken, Dakota Fanning",
  streaming: ["Netflix"]
},

{
  title: "Me Time",
  imageLink: "unknown.jpg",
  genre: "comedy",
  gen: ["Comedie"],
  year: 2022,
  rating: 3,
  ratingImage: "",
  type: "Film",
  text: "Doi prieteni de lungă durată decid să-și acorde un concediu de la viața lor cotidiană și să trăiască aventuri nebunești.",
  director: "Paula Pell●John Lutz",
  writers: "Paula Pell●John Lutz",
  stars: "Melissa McCarthy, Octavia Spencer, Bobby Cannavale",
  streaming: ["Netflix"]
},

{
  title: "Mirciulica",
  imageLink: "unknown.jpg",
  genre: "comedy",
  gen: ["Comedie"],
  year: 2022,
  rating: 3,
  ratingImage: "",
  type: "Film",
  text: "O comedie românească plină de umor și situații neașteptate care se desfășoară într-un mic sat din România.",
  director: "●",
  writers: "●",
  stars: "Eugen Cristea, Gheorghe Dinică, Florin Piersic Jr.",
  streaming: ["Netflix"]
},

{
  title: "Misery",
  imageLink: "unknown.jpg",
  genre: "drama, thriller",
  gen: ["Dramă", "Thriller"],
  year: 1990,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Un autor este salvat de o fană aparent binevoitoare după un accident, dar descoperă curând că este ținut captiv și torturat.",
  director: "Rob Reiner",
  writers: "Stephen King",
  stars: "James Caan, Kathy Bates, Richard Farnsworth",
  streaming: ["Netflix"]
},

{
  title: "Money Heist",
  imageLink: "unknown.jpg",
  genre: "action, crime, drama",
  gen: ["Acțiune", "Crimă", "Dramă"],
  year: 2017,
  rating: 5,
  ratingImage: "",
  type: "Serial",
  text: "Un grup de hoți geniali, sub conducerea Profesorului, încearcă să comită cel mai mare jaf din istorie la Fabrica Națională de Monedă și Timbru din Spania.",
  director: "●",
  writers: "Álex Pina",
  stars: "Úrsula Corberó, Álvaro Morte, Itziar Ituño",
  streaming: ["Netflix"]
},

{
  title: "Morometii",
  imageLink: "unknown.jpg",
  genre: "drama",
  gen: ["Dramă"],
  year: 1987,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Ecranizare a romanului lui Marin Preda, povestind viața unei familii de țărani în perioada interbelică.",
  director: "Sterea Cernat",
  writers: "Marin Preda●Nicolae Corjos",
  stars: "Victor Rebengiuc, Luminița Gheorghiu, Gina Patrichi",
  streaming: ["Netflix"]
},

{
  title: "Morometii 2",
  imageLink: "unknown.jpg",
  genre: "drama",
  gen: ["Dramă"],
  year: 2018,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Continuarea poveștii familiei Moromete în contextul schimbărilor sociale și politice din România anilor '80.",
  director: "Sterea Cernat",
  writers: "Marin Preda",
  stars: "Horatiu Malaele, Dana Dogaru, Dorina Lazar",
  streaming: ["Netflix"]
},

{
  title: "Mr. and Mrs. Smith",
  imageLink: "unknown.jpg",
  genre: "action, comedy, crime",
  gen: ["Acțiune", "Comedie", "Crimă"],
  year: 2005,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Un cuplu aparent obișnuit descoperă că sunt asasini plătiți care au fost angajați să se ucidă reciproc.",
  director: "Doug Liman",
  writers: "Simon Kinberg",
  stars: "Brad Pitt, Angelina Jolie, Adam Brody",
  streaming: ["Netflix"]
},

{
  title: "Nobody",
  imageLink: "unknown.jpg",
  genre: "action, crime, drama",
  gen: ["Acțiune", "Crimă", "Dramă"],
  year: 2021,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Un bărbat aparent obișnuit devine eroul involuntar al unei lupte împotriva unor infractori periculoși.",
  director: "Ilya Naishuller",
  writers: "Derek Kolstad",
  stars: "Bob Odenkirk, Aleksey Serebryakov, Connie Nielsen",
  streaming: ["Netflix"]
},

{
  title: "Non-stop",
  imageLink: "unknown.jpg",
  genre: "action, mystery, thriller",
  gen: ["Acțiune", "Mister", "Thriller"],
  year: 2014,
  rating: 3,
  ratingImage: "",
  type: "Film",
  text: "Un agent federal începe să primească amenințări de la un necunoscut în timpul unui zbor transatlantic.",
  director: "Jaume Collet-Serra",
  writers: "John W. Richardson●Christopher Roach",
  stars: "Liam Neeson, Julianne Moore, Scoot McNairy",
  streaming: ["Netflix"]
},
{
  title: "Oblivion",
  imageLink: "unknown.jpg",
  genre: "action, adventure, sci-fi",
  gen: ["Acțiune", "Aventură", "Sc-Fi"],
  year: 2013,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Într-o lume post-apocaliptică, un tehnician de mentenanță descoperă adevărul despre ceea ce a rămas din Pământ.",
  director: "Joseph Kosinski",
  writers: "Joseph Kosinski",
  stars: "Tom Cruise, Morgan Freeman, Andrea Riseborough",
  streaming: ["Netflix"]
},

{
  title: "Outside the Wire",
  imageLink: "unknown.jpg",
  genre: "action, adventure, fantasy",
  gen: ["Acțiune", "Aventură", "Fantezie"],
  year: 2021,
  rating: 3,
  ratingImage: "",
  type: "Film",
  text: "Un ofițer androizic și un soldat uman se aliază pentru a preveni un atac nuclear periculos.",
  director: "Mikael Håfström",
  writers: "Rob Yescombe●Rowan Athale",
  stars: "Anthony Mackie, Damson Idris, Emily Beecham",
  streaming: ["Netflix"]
},

{
  title: "Papillon",
  imageLink: "unknown.jpg",
  genre: "biography, crime, drama",
  gen: ["Biografie", "Crimă", "Dramă"],
  year: 2017,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Condamnat pe nedrept la o închisoare de pe o insulă, Henri Charrière încearcă să evadeze în repetate rânduri.",
  director: "Michael Noer",
  writers: "Aaron Guzikowski",
  stars: "Charlie Hunnam, Rami Malek, Eve Hewson",
  streaming: ["Netflix"]
},

{
  title: "Passengers",
  imageLink: "unknown.jpg",
  genre: "drama, romance, sci-fi",
  gen: ["Dramă", "Romantic", "Sc-Fi"],
  year: 2016,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Doi pasageri ai unei nave spațiale care călătorește către o colonie îndepărtată se trezesc din hibernare cu 90 de ani înainte de a ajunge.",
  director: "Morten Tyldum",
  writers: "Jon Spaihts",
  stars: "Jennifer Lawrence, Chris Pratt, Michael Sheen",
  streaming: ["Netflix"]
},

{
  title: "Peaky Blinders",
  imageLink: "unknown.jpg",
  genre: "crime, drama",
  gen: ["Crimă", "Dramă"],
  year: 2013,
  rating: 5,
  ratingImage: "",
  type: "Serial",
  text: "Familia Shelby, cunoscută sub numele de Peaky Blinders, este implicată în lumea interlopă din Birmingham, Anglia, după Primul Război Mondial.",
  director: "●",
  writers: "Steven Knight",
  stars: "Cillian Murphy, Paul Anderson, Helen McCrory",
  streaming: ["Netflix"]
},

{
  title: "Pirates of the Caribbean Dead Men Tell No Tales",
  imageLink: "unknown.jpg",
  genre: "action, adventure, fantasy",
  gen: ["Acțiune", "Aventură", "Fantezie"],
  year: 2017,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Căpitanul Jack Sparrow se confruntă cu un vânător de fantome malefic în căutarea Tridentului lui Poseidon.",
  director: "Joachim Rønning●Espen Sandberg",
  writers: "Jeff Nathanson",
  stars: "Johnny Depp, Javier Bardem, Geoffrey Rush",
  streaming: ["Netflix"]
},

{
  title: "Pirates of the Caribbean On Stranger Tides",
  imageLink: "unknown.jpg",
  genre: "action, adventure, fantasy",
  gen: ["Acțiune", "Aventură", "Fantezie"],
  year: 2011,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Jack Sparrow se alătură unei expediții pentru a găsi Fântâna Tinereții, doar pentru a se confrunta cu vechiul său dușman Barbossa.",
  director: "Rob Marshall",
  writers: "Ted Elliott●Terry Rossio",
  stars: "Johnny Depp, Penélope Cruz, Ian McShane",
  streaming: ["Netflix"]
},

{
  title: "Pirates of the Caribbean Dead Man's Chest",
  imageLink: "unknown.jpg",
  genre: "action, adventure, fantasy",
  gen: ["Acțiune", "Aventură", "Fantezie"],
  year: 2006,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Jack Sparrow este obligat să plătească o datorie veche către căpitanul Davy Jones, iar aventura ia o turnură întunecată.",
  director: "Gore Verbinski",
  writers: "Ted Elliott●Terry Rossio",
  stars: "Johnny Depp, Orlando Bloom, Keira Knightley",
  streaming: ["Netflix"]
},

{
  title: "Pirates of the Caribbean At World's End",
  imageLink: "unknown.jpg",
  genre: "action, adventure, fantasy",
  gen: ["Acțiune", "Aventură", "Fantezie"],
  year: 2007,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Echipajul navei Black Pearl se aliază pentru a salva Jack Sparrow și pentru a opri planurile malefice ale Companiei Indiilor de Est.",
  director: "Gore Verbinski",
  writers: "Ted Elliott●Terry Rossio",
  stars: "Johnny Depp, Orlando Bloom, Keira Knightley",
  streaming: ["Netflix"]
},

{
  title: "Pirates of the Caribbean The Curse of the Black Pearl",
  imageLink: "unknown.jpg",
  genre: "action, adventure, fantasy",
  gen: ["Acțiune", "Aventură", "Fantezie"],
  year: 2003,
  rating: 5,
  ratingImage: "",
  type: "Film",
  text: "Căpitanul Jack Sparrow se aliază cu Will Turner și Elizabeth Swann pentru a recupera Perla Neagră și a înfrunta blestemul.",
  director: "Gore Verbinski",
  writers: "Ted Elliott●Terry Rossio",
  stars: "Johnny Depp, Geoffrey Rush, Orlando Bloom",
  streaming: ["Netflix"]
},

{
  title: "Plane",
  imageLink: "unknown.jpg",
  genre: "action, thriller",
  gen: ["Acțiune", "Thriller"],
  year: 2014,
  rating: 3,
  ratingImage: "",
  type: "Film",
  text: "În timpul unui zbor transatlantic, un misterios străin oferă ajutorul său pentru a salva pasagerii de la un dezastru iminent.",
  director: "Jaume Collet-Serra",
  writers: "John W. Richardson●Christopher Roach",
  stars: "Liam Neeson, Julianne Moore, Scoot McNairy",
  streaming: ["Netflix"]
},

{
  title: "Predator",
  imageLink: "unknown.jpg",
  genre: "action, adventure, sci-fi",
  gen: ["Acțiune", "Aventură", "Sc-Fi"],
  year: 1987,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "O echipă de comando este vânată de un extraterestru nemilos în jungla Centrală Americană.",
  director: "John McTiernan",
  writers: "Jim Thomas●John Thomas",
  stars: "Arnold Schwarzenegger, Carl Weathers, Kevin Peter Hall",
  streaming: ["Netflix"]
},

{
  title: "Prison Break",
  imageLink: "unknown.jpg",
  genre: "action, crime, drama",
  gen: ["Acțiune", "Crimă", "Dramă"],
  year: 2005,
  rating: 5,
  ratingImage: "",
  type: "Serial",
  text: "Un om ingenios își planifică evadarea din închisoare pentru a-și salva fratele condamnat pe nedrept de la pedeapsa cu moartea.",
  director: "●",
  writers: "Paul Scheuring",
  stars: "Dominic Purcell, Wentworth Miller, Amaury Nolasco",
  streaming: ["Netflix"]
},
{
  title: "Red Notice",
  imageLink: "unknown.jpg",
  genre: "action, adventure, comedy",
  gen: ["Acțiune", "Aventură", "Comedie"],
  year: 2021,
  rating: 3,
  ratingImage: "",
  type: "Film",
  text: "Un agent FBI și doi hoți internaționali se aliază pentru a recupera artefacte furate.",
  director: "Rawson Marshall Thurber",
  writers: "Rawson Marshall Thurber",
  stars: "Dwayne Johnson, Gal Gadot, Ryan Reynolds",
  streaming: ["Netflix"]
},

{
  title: "Reservoir Dogs",
  imageLink: "unknown.jpg",
  genre: "crime, drama, thriller",
  gen: ["Crimă", "Dramă", "Thriller"],
  year: 1992,
  rating: 5,
  ratingImage: "",
  type: "Film",
  text: "Un grup de infractori se confruntă cu suspiciuni și trădări după ce un jaf eșuează.",
  director: "Quentin Tarantino",
  writers: "Quentin Tarantino",
  stars: "Harvey Keitel, Tim Roth, Michael Madsen",
  streaming: ["Netflix"]
},

{
  title: "Resident Evil Welcome to Raccoon City",
  imageLink: "unknown.jpg",
  genre: "action, horror, sci-fi",
  gen: ["Acțiune", "Groază", "Sc-Fi"],
  year: 2021,
  rating: 3,
  ratingImage: "",
  type: "Film",
  text: "O echipă încearcă să supraviețuiască izbucnirii unui virus mortal și să dezvăluie secretele Umbrella Corporation.",
  director: "Johannes Roberts",
  writers: "Johannes Roberts",
  stars: "Kaya Scodelario, Hannah John-Kamen, Neal McDonough",
  streaming: ["Netflix"]
},

{
  title: "Rise of the Planet of the Apes",
  imageLink: "unknown.jpg",
  genre: "action, drama, sci-fi",
  gen: ["Acțiune", "Dramă", "Sc-Fi"],
  year: 2011,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Un cercetător încearcă să găsească o soluție pentru bolile neurologice folosind maimuțe modificate genetic.",
  director: "Rupert Wyatt",
  writers: "Rick Jaffa●Amanda Silver",
  stars: "James Franco, Andy Serkis, Freida Pinto",
  streaming: ["Netflix"]
},

{
  title: "Rocky",
  imageLink: "unknown.jpg",
  genre: "drama, sport",
  gen: ["Dramă", "Sport"],
  year: 1976,
  rating: 5,
  ratingImage: "",
  type: "Film",
  text: "Un boxer amator primește o șansă la titlul mondial și încearcă să dovedească că poate concura cu cei mai buni.",
  director: "John G. Avildsen",
  writers: "Sylvester Stallone",
  stars: "Sylvester Stallone, Talia Shire, Burt Young",
  streaming: ["Netflix"]
},

{
  title: "Rocky II",
  imageLink: "unknown.jpg",
  genre: "drama, sport",
  gen: ["Dramă", "Sport"],
  year: 1979,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Rocky Balboa se întoarce în ring pentru a-și dovedi valoarea și a-și câștiga respectul în lumea boxului.",
  director: "Sylvester Stallone",
  writers: "Sylvester Stallone",
  stars: "Sylvester Stallone, Talia Shire, Burt Young",
  streaming: ["Netflix"]
},

{
  title: "Rocky III",
  imageLink: "unknown.jpg",
  genre: "drama, sport",
  gen: ["Dramă", "Sport"],
  year: 1982,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Rocky Balboa se confruntă cu Clubber Lang într-o luptă pentru a-și recăpăta titlul de campion.",
  director: "Sylvester Stallone",
  writers: "Sylvester Stallone",
  stars: "Sylvester Stallone, Mr. T, Talia Shire",
  streaming: ["Netflix"]
},

{
  title: "Rocky IV",
  imageLink: "unknown.jpg",
  genre: "drama, sport",
  gen: ["Dramă", "Sport"],
  year: 1985,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Rocky se confruntă cu un pericol mortal în ring când se luptă împotriva lui Ivan Drago, un pugilist sovietic.",
  director: "Sylvester Stallone",
  writers: "Sylvester Stallone",
  stars: "Sylvester Stallone, Dolph Lundgren, Talia Shire",
  streaming: ["Netflix"]
},

{
  title: "Rocky Balboa",
  imageLink: "unknown.jpg",
  genre: "drama, sport",
  gen: ["Dramă", "Sport"],
  year: 2006,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Rocky se întoarce în ring pentru o ultimă luptă, dovedind că încă mai are ceva de demonstrat.",
  director: "Sylvester Stallone",
  writers: "Sylvester Stallone",
  stars: "Sylvester Stallone, Antonio Tarver, Milo Ventimiglia",
  streaming: ["Netflix"]
},

{
  title: "Rogue One A Star Wars Story",
  imageLink: "unknown.jpg",
  genre: "action, adventure, sci-fi",
  gen: ["Acțiune", "Aventură", "Sc-Fi"],
  year: 2016,
  rating: 5,
  ratingImage: "",
  type: "Film",
  text: "Un grup de rebeli încearcă să fure planurile pentru Death Star și să salveze galaxia de sub dominația Imperiului.",
  director: "Gareth Edwards",
  writers: "Chris Weitz●Tony Gilroy",
  stars: "Felicity Jones, Diego Luna, Alan Tudyk",
  streaming: ["Netflix"]
},
{
  title:"Reacher",
  imageLink:"",
  genre:"action,crime,drama",
  gen:["Action","Crime","Drama"],
  year:2022,
  rating:5,
  ratingImage:"",
  pageLink:"", 
  type:"Serial",

  text:"Jack Reacher a fost arestat pentru crimă și acum poliția are nevoie de ajutorul lui. Bazat pe cărțile lui Lee Child.",
  director:"Nick Santora",
  writers:"Nick Santora",
  stars:" Alan Ritchson ● Maria Sten ● Malcolm Goodwin",
  streaming:["PrimeVideo"],
},
{
  title: "Saving Private Ryan",
  imageLink: "unknown.jpg",
  genre: "drama, war",
  gen: ["Dramă", "Război"],
  year: 1998,
  rating: 5,
  ratingImage: "",
  type: "Film",
  text: "O echipă de soldați este trimisă să salveze un parașutist din Normandia în timpul celui de-al Doilea Război Mondial.",
  director: "Steven Spielberg",
  writers: "Robert Rodat",
  stars: "Tom Hanks, Matt Damon, Tom Sizemore",
  streaming: ["Netflix"]
},

{
  title: "Scarface",
  imageLink: "unknown.jpg",
  genre: "crime, drama",
  gen: ["Crimă", "Dramă"],
  year: 1983,
  rating: 5,
  ratingImage: "",
  type: "Film",
  text: "Un imigrant cubanez se ridică în lumea crimei din Miami pentru a-și construi imperiul.",
  director: "Brian De Palma",
  writers: "Oliver Stone",
  stars: "Al Pacino, Michelle Pfeiffer, Steven Bauer",
  streaming: ["Netflix"]
},

{
  title: "Scent of a Woman",
  imageLink: "unknown.jpg",
  genre: "drama",
  gen: ["Dramă"],
  year: 1992,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Un student îl însoțește pe un bărbat orb și amar într-o călătorie care îi schimbă perspectivele asupra vieții.",
  director: "Martin Brest",
  writers: "Giovanni Arpino●Bo Goldman",
  stars: "Al Pacino, Chris O'Donnell, James Rebhorn",
  streaming: ["Netflix"]
},

{
  title: "Scream",
  imageLink: "unknown.jpg",
  genre: "horror, mystery",
  gen: ["Groază", "Mister"],
  year: 1996,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Un asasin mascat bântuie un mic oraș și terorizează un grup de adolescenți, ducând la descoperirea unor secrete întunecate.",
  director: "Wes Craven",
  writers: "Kevin Williamson",
  stars: "Neve Campbell, Courteney Cox, David Arquette",
  streaming: ["Netflix"]
},

{
  title: "Se7en",
  imageLink: "unknown.jpg",
  genre: "crime, drama, mystery",
  gen: ["Crimă", "Dramă", "Mister"],
  year: 1995,
  rating: 5,
  ratingImage: "",
  type: "Film",
  text: "Doi detectivi încearcă să prindă un criminal în serie care comite crime bazate pe cele șapte păcate capitale.",
  director: "David Fincher",
  writers: "Andrew Kevin Walker",
  stars: "Morgan Freeman, Brad Pitt, Kevin Spacey",
  streaming: ["Netflix"]
},

{
  title: "Seven Years in Tibet",
  imageLink: "unknown.jpg",
  genre: "adventure, biography, drama",
  gen: ["Aventură", "Biografie", "Dramă"],
  year: 1997,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Un alpinist austriac și companionul său tibetan trăiesc experiențe remarcabile în Tibet în timpul celui de-al Doilea Război Mondial.",
  director: "Jean-Jacques Annaud",
  writers: "Heinrich Harrer●Becky Johnston",
  stars: "Brad Pitt, David Thewlis, BD Wong",
  streaming: ["Netflix"]
},
{
  title: "Solo A Star Wars Story",
  imageLink: "unknown.jpg",
  genre: "action, adventure, fantasy",
  gen: ["Acțiune", "Aventură", "Fantezie"],
  year: 2018,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Povestea lui Han Solo și cum a devenit contrabandistul icônei din Galaxia Star Wars.",
  director: "Ron Howard",
  writers: "Jonathan Kasdan●Lawrence Kasdan",
  stars: "Alden Ehrenreich, Woody Harrelson, Emilia Clarke",
  streaming: ["DisneyPlus"]
},

{
  title: "Spider-Man",
  imageLink: "unknown.jpg",
  genre: "action, adventure, sci-fi",
  gen: ["Acțiune", "Aventură", "Sc-Fi"],
  year: 2002,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Peter Parker își descoperă abilitățile de om-păianjen și începe să-și folosească puterile pentru a lupta împotriva răului.",
  director: "Sam Raimi",
  writers: "David Koepp",
  stars: "Tobey Maguire, Kirsten Dunst, Willem Dafoe",
  streaming: ["DisneyPlus"]
},

{
  title: "Spider-Man 2",
  imageLink: "unknown.jpg",
  genre: "action, adventure, sci-fi",
  gen: ["Acțiune", "Aventură", "Sc-Fi"],
  year: 2004,
  rating: 5,
  ratingImage: "",
  type: "Film",
  text: "Peter Parker se luptă cu responsabilitățile vieții de supererou și relațiile personale, în timp ce un nou dușman apare.",
  director: "Sam Raimi",
  writers: "Alfred Gough●Miles Millar",
  stars: "Tobey Maguire, Kirsten Dunst, Alfred Molina",
  streaming: ["DisneyPlus"]
},

{
  title: "Spider-Man 3",
  imageLink: "unknown.jpg",
  genre: "action, adventure, sci-fi",
  gen: ["Acțiune", "Aventură", "Sc-Fi"],
  year: 2007,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Peter Parker se confruntă cu propriile sale umbre și cu apariția a doi noi inamici, Venom și Sandman.",
  director: "Sam Raimi",
  writers: "Sam Raimi●Ivan Raimi",
  stars: "Tobey Maguire, Kirsten Dunst, Topher Grace",
  streaming: ["DisneyPlus"]
},

{
  title: "Spider-Man Far From Home",
  imageLink: "unknown.jpg",
  genre: "action, adventure, sci-fi",
  gen: ["Acțiune", "Aventură", "Sc-Fi"],
  year: 2019,
  rating: 5,
  ratingImage: "",
  type: "Film",
  text: "Peter Parker încearcă să își reia viața de student, dar este tras într-o misiune internațională cu supereroi.",
  director: "Jon Watts",
  writers: "Chris McKenna●Erik Sommers",
  stars: "Tom Holland, Jake Gyllenhaal, Zendaya",
  streaming: ["DisneyPlus"]
},

{
  title: "Spider-Man Homecoming",
  imageLink: "unknown.jpg",
  genre: "action, adventure, sci-fi",
  gen: ["Acțiune", "Aventură", "Sc-Fi"],
  year: 2017,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Peter Parker încearcă să se adapteze la viața de supererou adolescent și să învețe să folosească abilitățile sale.",
  director: "Jon Watts",
  writers: "Jonathan Goldstein●John Francis Daley",
  stars: "Tom Holland, Michael Keaton, Robert Downey Jr.",
  streaming: ["DisneyPlus"]
},

{
  title: "Spider-Man No Way Home",
  imageLink: "unknown.jpg",
  genre: "action, adventure, fantasy",
  gen: ["Acțiune", "Aventură", "Fantezie"],
  year: 2021,
  rating: 5,
  ratingImage: "",
  type: "Film",
  text: "Peter Parker apelează la ajutorul unor personaje din alte universuri pentru a rezolva o problemă magică care îi afectează viața.",
  director: "Jon Watts",
  writers: "Chris McKenna●Erik Sommers",
  stars: "Tom Holland, Zendaya, Benedict Cumberbatch",
  streaming: ["DisneyPlus"]
},

{
  title: "Stand by Me",
  imageLink: "unknown.jpg",
  genre: "adventure, drama",
  gen: ["Aventură", "Dramă"],
  year: 1986,
  rating: 5,
  ratingImage: "",
  type: "Film",
  text: "Un grup de băieți pornește într-o călătorie pentru a găsi cadavrul unui băiat dispărut.",
  director: "Rob Reiner",
  writers: "Stephen King●Raynold Gideon",
  stars: "Wil Wheaton, River Phoenix, Corey Feldman",
  streaming: ["DisneyPlus"]
},
{
  title:"Star Wars Episode I  The Phantom Menace",
  imageLink:"",
  genre:"action,fantasy,adventure",
  gen:["Actiune ","Aventura","Fantezie"],
  year:1999,
  rating:5,
  ratingImage:"",
  pageLink:"", 
  type:"Film",
  
  text:"Doi Jedi scapă de o blocadă ostilă pentru a găsi aliați și dau peste un băiat care ar putea aduce echilibrul Forței, dar Sithul adormit de mult reapare pentru a-și revendica gloria inițială.",
  director:"George Lucas",
  writers:"George Lucas",
  stars:"Ewan McGregor ● Liam Neeson  ●  Natalie Portman",
  streaming:["DisneyPlus","PrimeVideo"],


},
{
  title: "Star Wars Episode II - Attack of the Clones",
  imageLink: "unknown.jpg",
  genre: "action, adventure, fantasy",
  gen: ["Acțiune", "Aventură", "Fantezie"],
  year: 2002,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Anakin Skywalker începe să-și descopere puterile Jedi, iar războiul se apropie în galaxie.",
  director: "George Lucas",
  writers: "George Lucas",
  stars: "Hayden Christensen, Natalie Portman, Ewan McGregor",
  streaming: ["DisneyPlus"]
},

{
  title: "Star Wars Episode III - Revenge of the Sith",
  imageLink: "unknown.jpg",
  genre: "action, adventure, fantasy",
  gen: ["Acțiune", "Aventură", "Fantezie"],
  year: 2005,
  rating: 5,
  ratingImage: "",
  type: "Film",
  text: "Anakin Skywalker devine Darth Vader în timp ce Republica Galactică se transformă în Imperiul Galactic.",
  director: "George Lucas",
  writers: "George Lucas",
  stars: "Hayden Christensen, Natalie Portman, Ewan McGregor",
  streaming: ["DisneyPlus"]
},

{
  title: "Star Wars Episode IV - A New Hope",
  imageLink: "unknown.jpg",
  genre: "action, adventure, fantasy",
  gen: ["Acțiune", "Aventură", "Fantezie"],
  year: 1977,
  rating: 5,
  ratingImage: "",
  type: "Film",
  text: "Un tânăr fermier pe nume Luke Skywalker se alătură Rezistenței împotriva Imperiului Galactic.",
  director: "George Lucas",
  writers: "George Lucas",
  stars: "Mark Hamill, Harrison Ford, Carrie Fisher",
  streaming: ["DisneyPlus"]
},

{
  title: "Star Wars Episode IX - The Rise of Skywalker",
  imageLink: "unknown.jpg",
  genre: "action, adventure, fantasy",
  gen: ["Acțiune", "Aventură", "Fantezie"],
  year: 2019,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Rezistența se pregătește pentru o bătălie finală împotriva Primului Ordin și a lui Palpatine revenit.",
  director: "J.J. Abrams",
  writers: "Chris Terrio●J.J. Abrams",
  stars: "Daisy Ridley, John Boyega, Oscar Isaac",
  streaming: ["DisneyPlus"]
},

{
  title: "Star Wars Episode V - The Empire Strikes Back",
  imageLink: "unknown.jpg",
  genre: "action, adventure, fantasy",
  gen: ["Acțiune", "Aventură", "Fantezie"],
  year: 1980,
  rating: 5,
  ratingImage: "",
  type: "Film",
  text: "Rezistența se confruntă cu pierderi majore, iar Luke Skywalker începe antrenamentul Jedi.",
  director: "Irvin Kershner",
  writers: "Leigh Brackett●Lawrence Kasdan",
  stars: "Mark Hamill, Harrison Ford, Carrie Fisher",
  streaming: ["DisneyPlus"]
},

{
  title: "Star Wars Episode VI - Return of the Jedi",
  imageLink: "unknown.jpg",
  genre: "action, adventure, fantasy",
  gen: ["Acțiune", "Aventură", "Fantezie"],
  year: 1983,
  rating: 5,
  ratingImage: "",
  type: "Film",
  text: "Luke Skywalker încearcă să aducă Darth Vader înapoi în Lumină în timp ce Rezistența începe atacul final asupra Imperiului Galactic.",
  director: "Richard Marquand",
  writers: "Lawrence Kasdan●George Lucas",
  stars: "Mark Hamill, Harrison Ford, Carrie Fisher",
  streaming: ["DisneyPlus"]
},

{
  title: "Star Wars Episode VII - The Force Awakens",
  imageLink: "unknown.jpg",
  genre: "action, adventure, fantasy",
  gen: ["Acțiune", "Aventură", "Fantezie"],
  year: 2015,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "O nouă amenințare apare, iar un grup variat de eroi începe o căutare pentru a o înfrunta.",
  director: "J.J. Abrams",
  writers: "Lawrence Kasdan●J.J. Abrams",
  stars: "Daisy Ridley, John Boyega, Oscar Isaac",
  streaming: ["DisneyPlus"]
},

{
  title: "Star Wars Episode VIII - The Last Jedi",
  imageLink: "unknown.jpg",
  genre: "action, adventure, fantasy",
  gen: ["Acțiune", "Aventură", "Fantezie"],
  year: 2017,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Rezistența se retrage în fața Primei Ordini, iar Rey caută răspunsuri despre trecutul său.",
  director: "Rian Johnson",
  writers: "Rian Johnson",
  stars: "Daisy Ridley, John Boyega, Mark Hamill",
  streaming: ["DisneyPlus"]
},
{
  title: "Stargate Atlantis",
  imageLink: "unknown.jpg",
  genre: "action, drama, adventure",
  gen: ["Acțiune", "Dramă", "Aventură"],
  year: 2004,
  rating: 4,
  ratingImage: "",
  type: "Serial",
  text: "O expediție într-o galaxie îndepărtată dezvăluie o lume nouă și periculoasă, Atlantis.",
  director: "Robert C. Cooper●Brad Wright",
  writers: "Robert C. Cooper●Brad Wright",
  stars: "Joe Flanigan, Rachel Luttrell, David Hewlett",
  streaming: ["Netflix"]
},

{
  title: "Sully",
  imageLink: "unknown.jpg",
  genre: "biography, drama",
  gen: ["Biografie", "Dramă"],
  year: 2016,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Povestea adevărată a eroului american Chesley 'Sully' Sullenberger, pilotul care a aterizat în siguranță pe râul Hudson.",
  director: "Clint Eastwood",
  writers: "Todd Komarnicki",
  stars: "Tom Hanks, Aaron Eckhart, Laura Linney",
  streaming: ["Netflix"]
},

{
  title: "Superman",
  imageLink: "unknown.jpg",
  genre: "action, adventure, drama",
  gen: ["Acțiune", "Aventură", "Dramă"],
  year: 1978,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Clark Kent, jurnalistul timid, descoperă că are superputeri și devine Superman pentru a lupta împotriva răului.",
  director: "Richard Donner",
  writers: "Jerry Siegel●Joe Shuster",
  stars: "Christopher Reeve, Margot Kidder, Gene Hackman",
  streaming: ["Netflix"]
},

{
  title: "Superman 2",
  imageLink: "unknown.jpg",
  genre: "action, adventure, drama",
  gen: ["Acțiune", "Aventură", "Dramă"],
  year: 1980,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Superman renunță la puterile sale pentru a deveni om, dar amenințarea generalului Zod îl forțează să revină la supereroism.",
  director: "Richard Lester",
  writers: "Mario Puzo●David Newman",
  stars: "Christopher Reeve, Margot Kidder, Gene Hackman",
  streaming: ["Netflix"]
},

{
  title: "Superman Returns",
  imageLink: "unknown.jpg",
  genre: "action, adventure, sci-fi",
  gen: ["Acțiune", "Aventură", "Sc-Fi"],
  year: 2006,
  rating: 3,
  ratingImage: "",
  type: "Film",
  text: "Superman se întoarce pe Pământ după o absență de cinci ani pentru a descoperi schimbări majore în viața sa.",
  director: "Bryan Singer",
  writers: "Michael Dougherty●Dan Harris",
  stars: "Brandon Routh, Kate Bosworth, Kevin Spacey",
  streaming: ["Netflix"]
},

{
  title: "Taken",
  imageLink: "unknown.jpg",
  genre: "action, thriller",
  gen: ["Acțiune", "Thriller"],
  year: 2008,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Un fost agent CIA își folosește abilitățile letale pentru a salva fiica răpită.",
  director: "Pierre Morel",
  writers: "Luc Besson●Robert Mark Kamen",
  stars: "Liam Neeson, Maggie Grace, Famke Janssen",
  streaming: ["Netflix"]
},

{
  title: "Taken 2",
  imageLink: "unknown.jpg",
  genre: "action, thriller",
  gen: ["Acțiune", "Thriller"],
  year: 2012,
  rating: 3,
  ratingImage: "",
  type: "Film",
  text: "Agentul CIA Bryan Mills și familia sa sunt vizați de răzbunarea unui traficant de arme.",
  director: "Olivier Megaton",
  writers: "Luc Besson●Robert Mark Kamen",
  stars: "Liam Neeson, Famke Janssen, Maggie Grace",
  streaming: ["Netflix"]
},

{
  title: "Taking Lives",
  imageLink: "unknown.jpg",
  genre: "crime, mystery, thriller",
  gen: ["Crimă", "Mister", "Thriller"],
  year: 2004,
  rating: 3,
  ratingImage: "",
  type: "Film",
  text: "Un detectiv FBI urmărește un criminal în serie care își asume identitățile victimelor.",
  director: "D.J. Caruso",
  writers: "Michael Pye●Jon Bokenkamp",
  stars: "Angelina Jolie, Ethan Hawke, Kiefer Sutherland",
  streaming: ["Netflix"]
},

{
  title: "Taxi Driver",
  imageLink: "unknown.jpg",
  genre: "crime, drama",
  gen: ["Crimă", "Dramă"],
  year: 1976,
  rating: 5,
  ratingImage: "",
  type: "Film",
  text: "Un veteran de război alienat devine șofer de taxi și intră în lumea coruptă a crimelor din New York.",
  director: "Martin Scorsese",
  writers: "Paul Schrader",
  stars: "Robert De Niro, Jodie Foster, Cybill Shepherd",
  streaming: ["Netflix"]
},

{
  title: "Ted",
  imageLink: "unknown.jpg",
  genre: "comedy, fantasy",
  gen: ["Comedie", "Fantezie"],
  year: 2012,
  rating: 3,
  ratingImage: "",
  type: "Film",
  text: "Un urs de pluș vorbitor, adus la viață printr-un dor al copilului său, devine un prieten nesăbuit și vulgarc.",
  director: "Seth MacFarlane",
  writers: "Seth MacFarlane",
  stars: "Mark Wahlberg, Mila Kunis, Seth MacFarlane",
  streaming: ["Netflix"]
},

{
  title: "Ted 2",
  imageLink: "unknown.jpg",
  genre: "comedy",
  gen: ["Comedie"],
  year: 2015,
  rating: 3,
  ratingImage: "",
  type: "Film",
  text: "Ted luptă în instanță pentru a dovedi că este o persoană și are dreptul să-și crească un copil.",
  director: "Seth MacFarlane",
  writers: "Seth MacFarlane",
  stars: "Mark Wahlberg, Amanda Seyfried, Seth MacFarlane",
  streaming: ["Netflix"]
},

{
  title: "The 100",
  imageLink: "unknown.jpg",
  genre: "drama, mystery, sci-fi",
  gen: ["Dramă", "Mister", "Sc-Fi"],
  year: 2014,
  rating: 4,
  ratingImage: "",
  type: "Serial",
  text: "100 de adolescenți criminali sunt trimiși pe Pământ pentru a vedea dacă acesta este locuibil după un război nuclear.",
  director: "Jason Rothenberg",
  writers: "Jason Rothenberg",
  stars: "Eliza Taylor, Bob Morley, Marie Avgeropoulos",
  streaming: ["Netflix"]
},

{
  title: "The Adam Project",
  imageLink: "unknown.jpg",
  genre: "action, adventure, comedy",
  gen: ["Acțiune", "Aventură", "Comedie"],
  year: 2022,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Un pilot de vânătoare din viitor se întâlnește cu tânărul său eu pentru a salva viitorul lumii.",
  director: "Shawn Levy",
  writers: "Jonathan Tropper●T.S. Nowlin",
  stars: "Ryan Reynolds, Mark Ruffalo, Jennifer Garner",
  streaming: ["Netflix"]
},

{
  title: "The Age of Stupid",
  imageLink: "unknown.jpg",
  genre: "documentary, drama",
  gen: ["Documentar", "Dramă"],
  year: 2009,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Un arhivist din viitor examinează deciziile noastre privind mediu în prezentul său distrus.",
  director: "Franny Armstrong",
  writers: "Franny Armstrong",
  stars: "Pete Postlethwaite, Jeh Wadia, Alvin DuVernay",
  streaming: ["Netflix"]
},

{
  title: "The Avengers",
  imageLink: "unknown.jpg",
  genre: "action, adventure, sci-fi",
  gen: ["Acțiune", "Aventură", "Sc-Fi"],
  year: 2012,
  rating: 5,
  ratingImage: "",
  type: "Film",
  text: "Supereroii Marvel se adună pentru a împiedica răufăcătorii să cucerească lumea.",
  director: "Joss Whedon",
  writers: "Joss Whedon",
  stars: "Robert Downey Jr., Chris Evans, Scarlett Johansson",
  streaming: ["Netflix"]
},
{
  title: "The Batman",
  imageLink: "unknown.jpg",
  genre: "action, crime, drama",
  gen: ["Acțiune", "Crimă", "Dramă"],
  year: 2022,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Batman se confruntă cu o serie de infractori notorii în Gotham City, inclusiv cu Riddler, în timp ce dezvăluie secrete întunecate.",
  director: "Matt Reeves",
  writers: "Matt Reeves●Peter Craig",
  stars: "Robert Pattinson, Zoe Kravitz, Jeffrey Wright",
  streaming: ["Netflix"]
},

{
  title: "The BlackList",
  imageLink: "unknown.jpg",
  genre: "crime, drama, mystery",
  gen: ["Crimă", "Dramă", "Mister"],
  year: 2013,
  rating: 4,
  ratingImage: "",
  type: "Serial",
  text: "Un fost agent guvernamental se predă FBI și oferă să dezvăluie lista completă a criminalilor periculoși pe care i-a ajutat.",
  director: "Jon Bokenkamp",
  writers: "Jon Bokenkamp",
  stars: "James Spader, Megan Boone, Diego Klattenhoff",
  streaming: ["Netflix"]
},

{
  title: "The Book of Eli",
  imageLink: "unknown.jpg",
  genre: "action, adventure, drama",
  gen: ["Acțiune", "Aventură", "Dramă"],
  year: 2010,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Într-un viitor postapocaliptic, Eli călătorește prin America pentru a proteja o carte sfântă care deține secretul salvării umanității.",
  director: "Albert Hughes●Allen Hughes",
  writers: "Gary Whitta",
  stars: "Denzel Washington, Mila Kunis, Gary Oldman",
  streaming: ["Netflix"]
},

{
  title: "The Butterfly Effect",
  imageLink: "unknown.jpg",
  genre: "drama, sci-fi, thriller",
  gen: ["Dramă", "Sci-Fi", "Thriller"],
  year: 2004,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Un bărbat descoperă că are puterea de a călători în trecut și începe să schimbe evenimente pentru a îmbunătăți viitorul.",
  director: "Eric Bress●J. Mackye Gruber",
  writers: "J. Mackye Gruber●Eric Bress",
  stars: "Ashton Kutcher, Amy Smart, Melora Walters",
  streaming: ["Netflix"]
},

{
  title: "The Change Up",
  imageLink: "unknown.jpg",
  genre: "comedy, fantasy",
  gen: ["Comedie", "Fantezie"],
  year: 2011,
  rating: 3,
  ratingImage: "",
  type: "Film",
  text: "Doi prieteni se trezesc să fi schimbat trupurile și viețile în urma unei nopți nebune.",
  director: "David Dobkin",
  writers: "Jon Lucas●Scott Moore",
  stars: "Jason Bateman, Ryan Reynolds, Olivia Wilde",
  streaming: ["Netflix"]
},

{
  title: "The Dark Knight",
  imageLink: "unknown.jpg",
  genre: "action, crime, drama",
  gen: ["Acțiune", "Crimă", "Dramă"],
  year: 2008,
  rating: 5,
  ratingImage: "",
  type: "Film",
  text: "Batman se confruntă cu Joker, un criminal psihopat care vrea să aducă haos în Gotham City.",
  director: "Christopher Nolan",
  writers: "Jonathan Nolan●Christopher Nolan",
  stars: "Christian Bale, Heath Ledger, Aaron Eckhart",
  streaming: ["Netflix"]
},

{
  title: "The Dark Knight Rises",
  imageLink: "unknown.jpg",
  genre: "action, adventure",
  gen: ["Acțiune", "Aventură"],
  year: 2012,
  rating: 5,
  ratingImage: "",
  type: "Film",
  text: "Batman reapare pentru a salva Gotham City de la un terorist mascat cunoscut sub numele de Bane.",
  director: "Christopher Nolan",
  writers: "Jonathan Nolan●Christopher Nolan",
  stars: "Christian Bale, Tom Hardy, Anne Hathaway",
  streaming: ["Netflix"]
},

{
  title: "The Decline",
  imageLink: "unknown.jpg",
  genre: "action, drama, thriller",
  gen: ["Acțiune", "Dramă", "Thriller"],
  year: 2020,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Participanții la un antrenament de supraviețuire descoperă că au devenit parte a unui adevărat test de viață și moarte.",
  director: "Patrice Laliberté",
  writers: "Charles Dionne●Nicolas Krief",
  stars: "Réal Bossé, Marc-André Grondin, Guillaume Laurin",
  streaming: ["Netflix"]
},

{
  title: "The Dictator",
  imageLink: "unknown.jpg",
  genre: "comedy",
  gen: ["Comedie"],
  year: 2012,
  rating: 3,
  ratingImage: "",
  type: "Film",
  text: "Un dictator excentric și lipsit de griji este prins în lumea reală când își pierde puterea.",
  director: "Larry Charles",
  writers: "Sacha Baron Cohen●Alec Berg",
  stars: "Sacha Baron Cohen, Anna Faris, Ben Kingsley",
  streaming: ["Netflix"]
},

{
  title: "The Edge",
  imageLink: "unknown.jpg",
  genre: "action, adventure, drama",
  gen: ["Acțiune", "Aventură", "Dramă"],
  year: 1997,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Doi bărbați trebuie să lupte pentru supraviețuire în sălbăticia Alaskă după ce avionul lor se prăbușește.",
  director: "Lee Tamahori",
  writers: "David Mamet",
  stars: "Anthony Hopkins, Alec Baldwin, Elle Macpherson",
  streaming: ["Netflix"]
},

{
  title: "The Equalizer",
  imageLink: "unknown.jpg",
  genre: "action, crime, thriller",
  gen: ["Acțiune", "Crimă", "Thriller"],
  year: 2014,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Un fost agent guvernamental devine justițiar pentru cei nedreptățiți, folosindu-și abilitățile letale.",
  director: "Antoine Fuqua",
  writers: "Richard Wenk",
  stars: "Denzel Washington, Marton Csokas, Chloë Grace Moretz",
  streaming: ["Netflix"]
},

{
  title: "The Equalizer 2",
  imageLink: "unknown.jpg",
  genre: "action, crime, thriller",
  gen: ["Acțiune", "Crimă", "Thriller"],
  year: 2018,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Robert McCall se întoarce pentru a-și face dreptate, de data aceasta când un prieten este ucis.",
  director: "Antoine Fuqua",
  writers: "Richard Wenk",
  stars: "Denzel Washington, Pedro Pascal, Ashton Sanders",
  streaming: ["Netflix"]
},

{
  title: "The Equalizer 3",
  imageLink: "unknown.jpg",
  genre: "action, crime, thriller",
  gen: ["Acțiune", "Crimă", "Thriller"],
  year: 2023,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Robert McCall se implică într-o nouă misiune pentru a aduce dreptate celor nedreptățiți.",
  director: "Antoine Fuqua",
  writers: "Richard Wenk",
  stars: "Denzel Washington",
  streaming: ["Netflix"]
},

{
  title: "The Fighter",
  imageLink: "unknown.jpg",
  genre: "biography, drama, sport",
  gen: ["Biografie", "Dramă", "Sport"],
  year: 2010,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Povestea adevărată a pugilistului Micky Ward și a antrenorului său, fratele Dicky Eklund.",
  director: "David O. Russell",
  writers: "Scott Silver●Paul Tamasy",
  stars: "Mark Wahlberg, Christian Bale, Amy Adams",
  streaming: ["Netflix"]
},

{
  title: "The Fly",
  imageLink: "unknown.jpg",
  genre: "drama, horror, sci-fi",
  gen: ["Dramă", "Horror", "Sci-Fi"],
  year: 1986,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Un om de știință devine victima propriei sale invenții, transformându-se într-o creatură uman-insectă.",
  director: "David Cronenberg",
  writers: "David Cronenberg",
  stars: "Jeff Goldblum, Geena Davis, John Getz",
  streaming: ["Netflix"]
},

{
  title: "The Forgotten Battle",
  imageLink: "unknown.jpg",
  genre: "drama, history, war",
  gen: ["Dramă", "Istoric", "Război"],
  year: 2020,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "În timpul celei de-a doua conflagrații mondiale, oamenii obișnuiți sunt prinși în lupta pentru eliberarea Olandei.",
  director: "Matthias Schrooten",
  writers: "Paula van der Oest",
  stars: "Tom Felton, Gijs Blom, Jamie Flatters",
  streaming: ["Netflix"]
},

{
  title: "The Fugitive",
  imageLink: "unknown.jpg",
  genre: "action, crime, drama",
  gen: ["Acțiune", "Crimă", "Dramă"],
  year: 1993,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Un chirurg este condamnat pe nedrept pentru uciderea soției sale și fuge pentru a-și dovedi nevinovăția.",
  director: "Andrew Davis",
  writers: "David Twohy●Jeb Stuart",
  stars: "Harrison Ford, Tommy Lee Jones, Sela Ward",
  streaming: ["Netflix"]
},

{
  title: "The Green Mile",
  imageLink: "unknown.jpg",
  genre: "crime, drama, fantasy",
  gen: ["Crimă", "Dramă", "Fantezie"],
  year: 1999,
  rating: 5,
  ratingImage: "",
  type: "Film",
  text: "Povestea supranaturală a unui paznic de închisoare care descoperă că un deținut condamnat la moarte posedă abilități miraculoase.",
  director: "Frank Darabont",
  writers: "Frank Darabont",
  stars: "Tom Hanks, Michael Clarke Duncan, David Morse",
  streaming: ["Netflix"]
},

{
  title: "The Grey",
  imageLink: "unknown.jpg",
  genre: "action, adventure, drama",
  gen: ["Acțiune", "Aventură", "Dramă"],
  year: 2011,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Supraviețuitorii unui accident aviatic trebuie să lupte cu lupii și să-și găsească calea spre siguranță.",
  director: "Joe Carnahan",
  writers: "Joe Carnahan●Ian Mackenzie Jeffers",
  stars: "Liam Neeson, Dermot Mulroney, Frank Grillo",
  streaming: ["Netflix"]
},
{
  title: "The Last Kingdom",
  imageLink: "unknown.jpg",
  genre: "action, drama, history",
  gen: ["Acțiune", "Dramă", "Istoric"],
  year: 2015,
  rating: 4,
  ratingImage: "",
  type: "Serial",
  text: "Un nobil englez se luptă să-și păstreze tronul în timpul invaziei daneze în Anglia medievală.",
  director: "Stephen Butchard",
  writers: "Bernard Cornwell (romane), Stephen Butchard",
  stars: "Alexander Dreymon, Eliza Butterworth, Ian Hart",
  streaming: ["Netflix"]
},

{
  title: "The Martian",
  imageLink: "unknown.jpg",
  genre: "adventure, drama, sci-fi",
  gen: ["Aventură", "Dramă", "Sci-Fi"],
  year: 2015,
  rating: 5,
  ratingImage: "",
  type: "Film",
  text: "Un astronaut este lăsat în urmă pe Marte și încearcă să supraviețuiască până când echipa sa îl poate salva.",
  director: "Ridley Scott",
  writers: "Drew Goddard , Andy Weir (book)",
  stars: "Matt Damon, Jessica Chastain, Kristen Wiig",
  streaming: ["Netflix"]
},

{
  title: "The Mask",
  imageLink: "unknown.jpg",
  genre: "action, comedy, crime",
  gen: ["Acțiune", "Comedie", "Crimă"],
  year: 1994,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Un bărbat timid descoperă o mască care îi conferă puteri supranaturale și personalitatea unui nebun.",
  director: "Chuck Russell",
  writers: "Michael Fallon (story), Mark Verheiden (story)",
  stars: "Jim Carrey, Cameron Diaz, Peter Riegert",
  streaming: ["Netflix"]
},

{
  title: "The Mist",
  imageLink: "unknown.jpg",
  genre: "horror, sci-fi, thriller",
  gen: ["Horror", "Sci-Fi", "Thriller"],
  year: 2007,
  rating: 3,
  ratingImage: "",
  type: "Film",
  text: "Locuitorii unei mici localități sunt prinși într-un supermarket, unde sunt amenințați de o ceață misterioasă plină de creaturi înspăimântătoare.",
  director: "Frank Darabont",
  writers: "Frank Darabont , Stephen King (novel)",
  stars: "Thomas Jane, Marcia Gay Harden, Laurie Holden",
  streaming: ["Netflix"]
},

{
  title: "The Pianist",
  imageLink: "unknown.jpg",
  genre: "biography, drama, music",
  gen: ["Biografie", "Dramă", "Muzică"],
  year: 2002,
  rating: 5,
  ratingImage: "",
  type: "Film",
  text: "Povestea adevărată a pianistului evreu polonez Władysław Szpilman, care a supraviețuit în timpul ocupației naziste.",
  director: "Roman Polanski",
  writers: "Ronald Harwood , Władysław Szpilman (book)",
  stars: "Adrien Brody, Thomas Kretschmann, Frank Finlay",
  streaming: ["Netflix"]
},

{
  title: "The Platform",
  imageLink: "unknown.jpg",
  genre: "horror, sci-fi, thriller",
  gen: ["Horror", "Sci-Fi", "Thriller"],
  year: 2019,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Într-o închisoare verticală, un prizonier primește zilnic o masă care coboară prin toate nivelurile, iar lupta pentru supraviețuire devine brutală.",
  director: "Galder Gaztelu-Urrutia",
  writers: "David Desola , Pedro Rivero ",
  stars: "Ivan Massagué, Zorion Eguileor, Antonia San Juan",
  streaming: ["Netflix"]
},

{
  title: "The Rain",
  imageLink: "unknown.jpg",
  genre: "sci-fi, thriller",
  gen: ["Sci-Fi", "Thriller"],
  year: 2018,
  rating: 3,
  ratingImage: "",
  type: "Serial",
  text: "Un virus transmis prin ploaie ucide majoritatea populației din Scandinavia, iar frații supraviețuitori încearcă să găsească un refugiu sigur.",
  director: "Jannik Tai Mosholt, Christian Potalivo, Esben Toft Jacobsen",
  writers: "Jannik Tai Mosholt, Esben Toft Jacobsen, Christian Potalivo",
  stars: "Alba August, Lucas Lynggaard Tønnesen, Mikkel Boe Følsgaard",
  streaming: ["Netflix"]
},

{
  title: "The Relevant",
  imageLink: "unknown.jpg",
  genre: "action, adventure, crime",
  gen: ["Acțiune", "Aventură", "Crimă"],
  year: 2014,
  rating: 3,
  ratingImage: "",
  type: "Film",
  text: "Un fost agent CIA și o tânără misterioasă sunt implicați într-o conspirație internațională periculoasă.",
  director: "Michael Cuesta",
  writers: "Michael Finch, Michael Leslie",
  stars: "Jeremy Renner, Rachel Weisz, Edward Norton",
  streaming: ["Netflix"]
},

{
  title: "The Silence of the Lambs",
  imageLink: "unknown.jpg",
  genre: "crime, drama, thriller",
  gen: ["Crimă", "Dramă", "Thriller"],
  year: 1991,
  rating: 5,
  ratingImage: "",
  type: "Film",
  text: "Un agent FBI solicită ajutorul unui psihiatru criminalistic în capturarea unui criminal în serie notoriu.",
  director: "Jonathan Demme",
  writers: "Thomas Harris (novel), Ted Tally ",
  stars: "Jodie Foster, Anthony Hopkins, Lawrence A. Bonney",
  streaming: ["Netflix"]
},

{
  title: "The Terminal",
  imageLink: "unknown.jpg",
  genre: "comedy, drama, romance",
  gen: ["Comedie", "Dramă", "Romantic"],
  year: 2004,
  rating: 4,
  ratingImage: "",
  type: "Film",
  text: "Un cetățean străin rămâne blocat într-un aeroport din New York și începe să își facă o viață acolo.",
  director: "Steven Spielberg",
  writers: "Andrew Niccol , Sacha Gervasi (story)",
  stars: "Tom Hanks, Catherine Zeta-Jones, Chi McBride",
  streaming: ["Netflix"]
},

{
  title: "The Tourist",
  imageLink: "unknown.jpg",
  genre: "action, adventure, crime",
  gen: ["Acțiune", "Aventură", "Crimă"],
  year: 2010,
  rating: 3,
  ratingImage: "",
  type: "Film",
  text: "Un turist american devine ținta unui agent interlop în timpul unei vacanțe în Europa.",
  director: "Florian Henckel von Donnersmarck",
  writers: "Florian Henckel von Donnersmarck , Christopher McQuarrie ",
  stars: "Johnny Depp, Angelina Jolie, Paul Bettany",
  streaming: ["Netflix"]
},

{
  title: "The Truman Show",
  imageLink: "unknown.jpg",
  genre: "comedy, drama, sci-fi",
  gen: ["Comedie", "Dramă", "Sci-Fi"],
  year: 1998,
  rating: 5,
  ratingImage: "",
  type: "Film",
  text: "Viața unui bărbat obișnuit este transmisă în direct la nivel mondial, fără ca el să știe că este o vedetă TV.",
  director: "Peter Weir",
  writers: "Andrew Niccol",
  stars: "Jim Carrey, Ed Harris, Laura Linney",
  streaming: ["Netflix"]
},
  {
    title:"The Shawshank Redemption",
    imageLink:"",
    genre:"action,drama",
    gen:["Actiune "," Drama"],
    year:1994,
    rating:5,
    ratingImage:"",
    pageLink:"", 
    type:"Film",
    
    text:"Pe parcursul mai multor ani, doi condamnați formează o prietenie, căutând consolare și, în cele din urmă, răscumpărare prin compasiune de bază",
    director:"Frank Darabont",
    writers:"Stephen King ● Frank Darabont",
    stars:"Tim Robbins ● Morgan Freeman ● Bob Gunton",
    streaming:["PrimeVideo","netflix"],


  },

  {
  title:"The Walking Dead",
  imageLink:"",
  genre:"horror,drama,thriller",
  gen:["Horor","Drama","thriller"],
  year:2010,
  rating:5,
  ratingImage:"",
  pageLink:"", 
  type:"Serial",

  text:"Adjunctul șeriful Rick Grimes se trezește din comă pentru a afla că lumea este în ruine și trebuie să conducă un grup de supraviețuitori pentru a rămâne în viață..",
  director:"Frank Darabont",
  writers:"Frank Darabont",
  stars:"Andrew Lincoln ● Norman Reedus ● Melissa McBride",
  streaming:["Netflix", "HBOMax"],
  },
  {
    title: "The Walking Dead - Dead City",
    imageLink: "unknown.jpg",
    genre: "action, drama, horror",
    gen: ["Acțiune", "Dramă", "Groază"],
    year: 2010,
    rating: 4,
    ratingImage: "",
    type: "Serial",
    text: "Supraviețuitorii unei apocalipse zombie luptă pentru a supraviețui într-un oraș plin de pericole.",
    director: "Frank Darabont",
    writers: "Frank Darabont (developed by), Robert Kirkman (based on the series of graphic novels by)",
    stars: "Andrew Lincoln, Norman Reedus, Melissa McBride",
    streaming: ["Netflix"]
},

{
    title: "The Way Back",
    imageLink: "unknown.jpg",
    genre: "drama, sport",
    gen: ["Dramă", "Sport"],
    year: 2020,
    rating: 4,
    ratingImage: "",
    type: "Film",
    text: "Un antrenor de baschet alcoolizat primește o a doua șansă când este angajat să antreneze echipa liceului său.",
    director: "Gavin O'Connor",
    writers: "Brad Ingelsby",
    stars: "Ben Affleck, Al Madrigal, Janina Gavankar",
    streaming: ["Netflix"]
},

{
    title: "The Wolf of Wall Street",
    imageLink: "unknown.jpg",
    genre: "biography, crime, drama",
    gen: ["Biografie", "Crimă", "Dramă"],
    year: 2013,
    rating: 5,
    ratingImage: "",
    type: "Film",
    text: "Povestea adevărată a lui Jordan Belfort, un broker de acțiuni corupt, și ascensiunea și căderea sa spectaculoasă.",
    director: "Martin Scorsese",
    writers: "Terence Winter , Jordan Belfort (book)",
    stars: "Leonardo DiCaprio, Jonah Hill, Margot Robbie",
    streaming: ["Netflix"]
},

{
    title: "Thor",
    imageLink: "unknown.jpg",
    genre: "action, adventure, fantasy",
    gen: ["Acțiune", "Aventură", "Fantezie"],
    year: 2011,
    rating: 4,
    ratingImage: "",
    type: "Film",
    text: "Thor, zeul tunetului, este trimis pe Pământ, unde învață umanitatea și își redobândește puterile divine.",
    director: "Kenneth Branagh",
    writers: "Ashley Miller , Zack Stentz ",
    stars: "Chris Hemsworth, Anthony Hopkins, Natalie Portman",
    streaming: ["Netflix"]
},

{
    title: "Thor Love and Thunder",
    imageLink: "unknown.jpg",
    genre: "action, adventure, comedy",
    gen: ["Acțiune", "Aventură", "Comedie"],
    year: 2022,
    rating: 4,
    ratingImage: "",
    type: "Film",
    text: "În această continuare, Thor se confruntă cu noi amenințări și se aliază cu Valkyrie și Jane Foster.",
    director: "Taika Waititi",
    writers: "Taika Waititi , Jennifer Kaytin Robinson ",
    stars: "Chris Hemsworth, Natalie Portman, Tessa Thompson",
    streaming: ["Netflix"]
},

{
    title: "Thor Ragnarok",
    imageLink: "unknown.jpg",
    genre: "action, adventure, comedy",
    gen: ["Acțiune", "Aventură", "Comedie"],
    year: 2017,
    rating: 4,
    ratingImage: "",
    type: "Film",
    text: "Thor este capturat și forțat să lupte într-o arenă, iar el își formează o echipă pentru a salva Asgardul.",
    director: "Taika Waititi",
    writers: "Eric Pearson , Craig Kyle ",
    stars: "Chris Hemsworth, Tom Hiddleston, Cate Blanchett",
    streaming: ["Netflix"]
},

{
    title: "Thor The Dark World",
    imageLink: "unknown.jpg",
    genre: "action, adventure, fantasy",
    gen: ["Acțiune", "Aventură", "Fantezie"],
    year: 2013,
    rating: 3,
    ratingImage: "",
    type: "Film",
    text: "Thor se aliază cu Loki pentru a salva cele Novele Regate de o amenințare întunecată.",
    director: "Alan Taylor",
    writers: "Christopher L. Yost , Christopher Markus ",
    stars: "Chris Hemsworth, Natalie Portman, Tom Hiddleston",
    streaming: ["Netflix"]
},

{
    title: "Travelers",
    imageLink: "unknown.jpg",
    genre: "drama, mystery, sci-fi",
    gen: ["Dramă", "Mister", "Sci-Fi"],
    year: 2016,
    rating: 3,
    ratingImage: "",
    type: "Serial",
    text: "Călători din viitor vin în prezent pentru a împiedica apocalipsa și a salva umanitatea.",
    director: "Brad Wright",
    writers: "Brad Wright",
    stars: "Eric McCormack, MacKenzie Porter, Nesta Cooper",
    streaming: ["Netflix"]
},

{
    title: "Unbroken",
    imageLink: "unknown.jpg",
    genre: "biography, drama, sport",
    gen: ["Biografie", "Dramă", "Sport"],
    year: 2014,
    rating: 4,
    ratingImage: "",
    type: "Film",
    text: "Povestea lui Louis Zamperini, un atlet olimpic care a supraviețuit în timpul celui de-Al Doilea Război Mondial.",
    director: "Angelina Jolie",
    writers: "Joel Coen , Ethan Coen ",
    stars: "Jack O'Connell, Miyavi, Domhnall Gleeson",
    streaming: ["Netflix"]
},

{
    title: "Uncharted",
    imageLink: "unknown.jpg",
    genre: "action, adventure, fantasy",
    gen: ["Acțiune", "Aventură", "Fantezie"],
    year: 2022,
    rating: 4,
    ratingImage: "",
    type: "Film",
    text: "Un vânător de comori și partenerul său de încredere caută un artefact valoros în jungla periculoasă.",
    director: "Ruben Fleischer",
    writers: "Rafe Judkins , Art Marcum ",
    stars: "Tom Holland, Mark Wahlberg, Antonio Banderas",
    streaming: ["Netflix"]
},


{
    title: "Vikings",
    imageLink: "unknown.jpg",
    genre: "action, adventure, drama",
    gen: ["Acțiune", "Aventură", "Dramă"],
    year: 2013,
    rating: 5,
    ratingImage: "",
    type: "Serial",
    text: "Povestea vikingilor și a legendarului lor lider Ragnar Lothbrok.",
    director: "Michael Hirst",
    writers: "Michael Hirst",
    stars: "Travis Fimmel, Katheryn Winnick, Clive Standen",
    streaming: ["Netflix"]
},

{
    title: "Wanted",
    imageLink: "unknown.jpg",
    genre: "action, crime, fantasy",
    gen: ["Acțiune", "Crimă", "Fantezie"],
    year: 2008,
    rating: 4,
    ratingImage: "",
    type: "Film",
    text: "Un om obișnuit este recrutat într-o societate secretă pentru a deveni un asasin.",
    director: "Timur Bekmambetov",
    writers: "Michael Brandt , Derek Haas ",
    stars: "Angelina Jolie, James McAvoy, Morgan Freeman",
    streaming: ["Netflix"]
},

{
    title: "Zack Snyder's Justice League",
    imageLink: "unknown.jpg",
    genre: "action, adventure, fantasy",
    gen: ["Acțiune", "Aventură", "Fantezie"],
    year: 2021,
    rating: 4,
    ratingImage: "",
    type: "Film",
    text: "Directorul Zack Snyder aduce o versiune extinsă și întunecată a Ligii Dreptății.",
    director: "Zack Snyder",
    writers: "Chris Terrio , Zack Snyder (story)",
    stars: "Ben Affleck, Gal Gadot, Jason Momoa",
    streaming: ["Netflix"]
},

{
    title: "Zombieland",
    imageLink: "unknown.jpg",
    genre: "adventure, comedy, horror",
    gen: ["Aventură", "Comedie", "Groază"],
    year: 2009,
    rating: 4,
    ratingImage: "",
    type: "Film",
    text: "Un grup de supraviețuitori trebuie să navigheze printr-o lume plină de zombi pentru a găsi un loc sigur.",
    director: "Ruben Fleischer",
    writers: "Rhett Reese , Paul Wernick ",
    stars: "Jesse Eisenberg, Emma Stone, Woody Harrelson",
    streaming: ["Netflix"]
},


    ////////end/////////

  
  

    {
      title:"1917",
      imageLink:"",
      genre:"action,drama,history",
      gen:["Actiune","Drama","Istorie","Razboi"],
      year:2019,
      rating:5,
      ratingImage:"",
      pageLink:"", 
      type:"Film",
    
      text:"In timpul Primului Război Mondial, în aprilie 1917, doi tineri soldaţi dintr-un regiment britanic primesc ordinul să parcurgă „no man's land”-ul lăsat în urmă de nemţii aparent în retragere şi să transmită un mesaj comandantului unui alt regiment britanic gata să atace.",
      director:"Sam Mendes",
      writers:"Sam Mendes ● Krysty Wilson-Cairns",
      stars:" Dean-Charles ● Chapman George  ● MacKay Daniel Mays  ",
      streaming:["Netflix"],
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
    for(let i =0; i<Filme.length;i++)
    {
      var filePath = "./Pages/"+Filme[i].title+".html";

      search.innerHTML+=(` <li><a href="./Pages/${Filme[i].title}.html" target="_blank">${Filme[i].title}</a></li>`)
     
    }

  }

/*
  document.addEventListener('DOMContentLoaded', function() {
    for(let i = istart;i<226;i++)
    {

      var url_image = './Assets/MovieImages/'+Filme[i].title+'.jpg';
      Filme[i].imageLink="./Assets/MovieImages/"+Filme[i].title+".jpg";
      var image= new Image();
      
      image.src = url_image;
      if (image.width == 0) {
        Filme[i].imageLink="./Assets/MovieImages/unknow.jpg";
      } else {
        Filme[i].imageLink="./Assets/MovieImages/"+Filme[i].title+".jpg";
      }      
      Filme[i].ratingImage="./Assets/RatingImages/stars"+Filme[i].rating+".png";
    }
    
  }, false);
*/
  
let aux=0,stack = [],aux2=0,start=-1;

 function genetareFilme()
 {
    const movielist=document.getElementById("movie-wrapper");
    movielist.innerHTML="";
    const movietotal=document.getElementById("movieTotal");
    movietotal.innerHTML="";
    let c=0,c1=0;
    for(let i = 0;i<Filme.length;i++)
    {   if(Filme[i].genre.includes(filtruGen)&&Filme[i].type.includes(filtruType)){
         c++;
         if(i>=istart)
          c1++;
     }
    }
    movietotal.innerHTML+=(` <textrounded>${c1}/${c}</textrounded>`);
    icnt=0;
    for(let i = istart;i<Filme.length;i++)
    {
      if(icnt==5)//cate Filme sa fie generate pe o pg
      {
        aux2=aux;
        aux=i;
        break;
      }
      var url_image = './Assets/MovieImages/'+Filme[i].title+'.jpg';
      Filme[i].imageLink="./Assets/MovieImages/"+Filme[i].title+".jpg";
      /*
      var image= new Image();
      
      image.src = url_image;
      if (image.width == 0) {
        Filme[i].imageLink="./Assets/MovieImages/unknow.jpg";
      } else {
        Filme[i].imageLink="./Assets/MovieImages/"+Filme[i].title+".jpg";
      }      
      */
      Filme[i].ratingImage="./Assets/RatingImages/stars"+Filme[i].rating+".png";

      if(Filme[i].genre.includes(filtruGen)&&Filme[i].type.includes(filtruType)){
        movielist.innerHTML+=movieComponet(i+1,Filme[i]);
        let cv="art"+(i+1);
        const movielist1=document.getElementById(cv);
        icnt++;
        if(start==-1)
          start=i,stack.push(i);
        for(let q=0;q<Filme[i].gen.length;q++)
        {
          movielist1.innerHTML+=(` <textrounded>${Filme[i].gen[q]}</textrounded>`);
        }
        movielist1.innerHTML+=(`<p></p`);  
      
        for(let q=0;q<Filme[i].streaming.length;q++)
        {
          movielist1.innerHTML+=(`<a href="https://www.${Filme[i].streaming[q]}.com" target="_blank"><img class="minimage" src="./Assets/StreamingPlatformsIcons/${Filme[i].streaming[q]}.png"></img></a>`)
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


  //genereare Filme in fuctie de Filtru swich (da e On/Off) 

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
  
  //generare Filme in functie de genul selectat
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
      genetareFilme();

  }
  //generare in fucntie de butonul apasat
  // colorare specifica buton
  function ActionGen(cv)
  {
    clearStack(stack);
    const genuri=['0',"action","adventure","comedy","crime","drama","fantasy","history","horror","mystery","sci-fi","thriller",""];
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