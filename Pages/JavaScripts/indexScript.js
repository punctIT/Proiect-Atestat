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
      genre:"action,adventure,fantacy,sci-fi",
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
      genre:"action,adventure,fantacy,sci-fi",
      gen:["Actiune","Aventura","Fantezie","Sci-Fi"],
      year:2022,
      rating:4,
      ratingImage:"",
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
        title: "Captain America: Civil War",
        imageLink: "",
        genre: "action, adventure, sci-fi",
        gen: ["Acțiune", "Aventură", "Sci-Fi"],
        year: 2016,
        rating: 4,
        ratingImage: "",
        type: "Film",
        text: "Avengerii sunt divizați atunci când intervenția politică duce la implementarea Acordului Sokovia.",
        director: "Anthony Russo●Joe Russo",
        writers: "Christopher Markus●Stephen McFeely",
        stars: "Chris Evans, Robert Downey Jr., Scarlett Johansson",
        streaming: ["DisneyPlus"]
    },
    
    {
        title: "Captain America: The First Avenger",
        imageLink: "",
        genre: "action, adventure, sci-fi",
        gen: ["Acțiune", "Aventură", "Sci-Fi"],
        year: 2011,
        rating: 4,
        ratingImage: "",
        type: "Film",
        text: "Steve Rogers devine Captain America și luptă împotriva Craniului Roșu în timpul celui de-al Doilea Război Mondial.",
        director: "Joe Johnston",
        writers: "Christopher Markus●Stephen McFeely",
        stars: "Chris Evans, Hayley Atwell, Sebastian Stan",
        streaming: ["DisneyPlus"]
    },
    
    {
        title: "Captain America: The Winter Soldier",
        imageLink: "",
        genre: "action, adventure, sci-fi",
        gen: ["Acțiune", "Aventură", "Sci-Fi"],
        year: 2014,
        rating: 4,
        ratingImage: "",
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
      type: "Film",
      text: "O comedie-dramă despre relația complexă dintre om și câine și impactul pe care îl au unul asupra celuilalt.",
      director: "Channing Tatum",
      writers: "Reid Carolin●Brett Rodriguez",
      stars: "Channing Tatum, Jane Adams, Kevin Nash",
      streaming: ["PrimeVideo"]
  },

  {
      title: "Don't Look Up",
      imageLink: "",
      genre: "comedy, drama, sci-fi",
      gen: ["Comedie", "Dramă", "Sci-Fi"],
      year: 2021,
      rating: 4,
      ratingImage: "",
      type: "Film",
      text: "Două astronome descoperă că un asteroid se îndreaptă spre Pământ și încearcă să avertizeze lumea despre iminența impactului.",
      director: "Adam McKay",
      writers: "Adam McKay",
      stars: "Leonardo DiCaprio, Jennifer Lawrence, Meryl Streep",
      streaming: ["Netflix"]
  },
  !
  
  {
      title: "El Camino: A Breaking Bad Movie",
      imageLink: "",
      genre: "action, drama",
      gen: ["Acțiune", "Dramă"],
      year: 2019,
      rating: 4,
      ratingImage: "",
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
      type: "Film",
      text: "Un bărbat se trezește în fiecare zi pentru a trăi aceeași zi în mod repetat.",
      director: "Harold Ramis",
      writers: "Danny Rubin●Harold Ramis",
      stars: "Bill Murray, Andie MacDowell, Chris Elliott",
      streaming: ["PrimeVideo"]
  },

    ////////end/////////
    {
      title:"IT",
      imageLink:"",
      genre:"horror",
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
      genre:"horror,drama,fantasy",
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
      title:"Reacher",
      imageLink:"",
      genre:"action,crime,drama",
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
        title:"The Shawshank Redemption",
        imageLink:"",
        genre:"action,drama",
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
      title:"The Walking Dead",
      imageLink:"",
      genre:"horror,drama,thriller",
      gen:["Horor","Drama","thriller"],
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
      title:"Star Wars Episode I  The Phantom Menace",
      imageLink:"",
      genre:"action,fantacy,adventure,sci-fi",
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
      title:"1917",
      imageLink:"",
      genre:"action,drama,history",
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
      search.innerHTML+=(` <li><a href="./Pages/${Filme[i].title}.html" target="_blank">${Filme[i].title}</a></li>`)
    }
  
  }
let aux=0,stack = [],aux2=0,start=-1;

 function genetareFilme()
 {
    const movielist=document.getElementById("movie-wrapper");
    movielist.innerHTML="";
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
      var image= new Image();
      image.src = url_image;
      if (image.width == 0) {
        Filme[i].imageLink="./Assets/MovieImages/unknow.jpg";
      } else {
        Filme[i].imageLink="./Assets/MovieImages/"+Filme[i].title+".jpg";
      }
      

      
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

  }
  //generare in fucntie de butonul apasat
  // colorare specifica buton
  function ActionGen(cv)
  {
    clearStack(stack);
    const genuri=['0',"action","adventure","comedy","crime","drama","fantacy","history","horror","mystery","sci-fi","thriller",""];
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