/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: 'All that Glitters is Gold',
    date: 'Feb 30, 1999',
    firstParagraph: `Somebody once told me she was thumb in the world is her finger dumb with sharpest tool in the shed the shape of an L on her I
     ain't thesomebody looking kinda forehead gonna roll me once told me and her dumb with sharpest on her thumb in of an L the shape I ain't the her
     finger once told me she was tool in the shed looking kinda forehead the world is and her somebody gonna roll me gonna roll me I ain't the she was
     sharpest forehead the shape her finger looking kinda of an L somebody dumb with the world is once told me and her tool in the shed on her thumb in`,

    secondParagraph: `Well, your brain gets smart start coming fed to the rules and they don't well the years and I hit the ground running not to live for 
     fun but your head gets dumb stop coming didn't make sense start coming and I hit the ground running well the years your brain gets smart didn't make
     sense not to live for fun and they don't stop coming but your head gets dumb fed to the rules start coming well the years didn't make sense your brain
     gets smart but your head gets dumb fed to the rules and I hit the ground running not to live for fun and they don't stop coming`,

    thirdParagraph: `Hey now, on go play get your game you're a get paid all star rock star hey now get your show on hey now you're an you're an rock star
     you're a hey now get paid get your game get your show on all star hey now on go play you're a get your show on get paid you're an on go play get your
     game all star rock star hey now hey nowon go play rock star get paid you're an all star get your show on hey now get your game hey now you're a `
  },
  {
  title: 'Bebop',
    date: 'Wednesday 49, 2010',
    firstParagraph: `bebopbebopbeoboebeobpeboebopeboebopebopebopebope bope bopebopebope bope bope bope bope bop ebop ebope bope bope e bopebop bop
     bebeop eopb oebope bopebopeopebope bope bope bope bopepoebob pobe pobe pobe bopebope bope bope bope bope bope bope bope bop ebope bopeb boeboeb 
     bebop ebo ebope bope bopepobe pobe opbe opbe pobeboep ebope bope bope bopebop boe bopebop bope bopebop ope bope bopebop bope bope bop ebope bop b
     bebe ope be pobe opbe opbe opbe bope bope bope bope bope boe bope bopeboebeb ebope be boe bope boe boe boeb b bop ebopebop bopebopebiop ebopopbe`,

    secondParagraph: `bebopbebopbeoboebeobpeboebopeboebopebopebopebope bope bopebopebope bope bope bope bope bop ebop ebope bope bope e bopebop bop
    bebeop eopb oebope bopebopeopebope bope bope bope bopepoebob pobe pobe pobe bopebope bope bope bope bope bope bope bope bop ebope bopeb boeboeb 
    bebop ebo ebope bope bopepobe pobe opbe opbe pobeboep ebope bope bope bopebop boe bopebop bope bopebop ope bope bopebop bope bope bop ebope bop b
    bebe ope be pobe opbe opbe opbe bope bope bope bope bope boe bope bopeboebeb ebope be boe bope boe boe boeb b bop ebopebop bopebopebiop ebopopbe`,

    thirdParagraph: `bebopbebopbeoboebeobpeboebopeboebopebopebopebope bope bopebopebope bope bope bope bope bop ebop ebope bope bope e bopebop bop
    bebeop eopb oebope bopebopeopebope bope bope bope bopepoebob pobe pobe pobe bopebope bope bope bope bope bope bope bope bop ebope bopeb boeboeb 
    bebop ebo ebope bope bopepobe pobe opbe opbe pobeboep ebope bope bope bopebop boe bopebop bope bopebop ope bope bopebop bope bope bop ebope bop b
    bebe ope be pobe opbe opbe opbe bope bope bope bope bope boe bope bopeboebeb ebope be boe bope boe boe boeb b bop ebopebop bopebopebiop ebopopbe `
  }
];

function createArticle(nm, day, p1, p2, p3){
  const article = document.createElement('div');
  const name = document.createElement('h2');
  const date = document.createElement('p');
  const par1 = document.createElement('p');
  const par2 = document.createElement('p');
  const par3 = document.createElement('p');
  const expandButton = document.createElement('span');

  article.append(name);
  article.append(date);
  article.append(par1);
  article.append(par2);
  article.append(par3);
  article.append(expandButton);

  article.classList.add('article');
  date.classList.add('date');
  expandButton.classList.add('expandButton');

  name.textContent = nm;
  date.textContent = day;
  par1.textContent = p1;
  par2.textContent = p2;
  par3.textContent = p3;
  expandButton.textContent = "Expand";

  expandButton.addEventListener('click', () =>{
    article.classList.toggle('article-open');
  })


  return article;
}

const articles = document.querySelector('.articles');
 data.map(element => {
   articles.append(createArticle(element.title, element.date, element.firstParagraph, element.secondParagraph, element.thirdParagraph));
 })
/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.

  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.

*/
