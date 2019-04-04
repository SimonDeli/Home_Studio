// JavaScript Document
$(window).ready(function(){
	$("header").hide();
	console.log($(window).scrollTop());
if($(window).scrollTop() > 100){
	$("header").show();
}
});


$(".entrezTitre a").click(function(){
	console.log("bonjour");
	$("header").fadeIn(200);
});

$(".entrezMain img").click(function(){
	$("#pageApropos").animate({
		top:"-100%"
	}, 800, function(){

	});
	$("#pageTelecharger").css("filter", "brightness(0.2)");
	$("header").css("filter", "brightness(0.2)");
	$("#background").css("filter", "brightness(0.2)");
});
$(".entrezApropos img").click(function(){
	$("#pageApropos").animate({
		top:"0px"
	}, 800, function(){

	});
	$("#pageTelecharger").css("filter", "brightness(1) blur(0px)");
	$("header").css("filter", "brightness(1) blur(0px)");
	$("#background").css("filter", "brightness(1)");
});


$("#ouvrir_menu").click(function(){
	console.log("bonjour");
	$("#menuGauche").animate({
		left:"0px"
	}, 800, function(){

	});
	$("#contenu").css("filter", "brightness(0.5)");
});

$("#fermer_menu").click(function(){
	$("#menuGauche").animate({
		left:"-30%"
	}, 800, function(){

	});
	$("#contenu").css("filter", "brightness(1)");
});



var tableauMenuStyles = Array();
tableauMenuStyles.push("<h1>Metal</h1><p>Le heavy metal est un genre dérivé du rock apparu au Royaume-Uni et aux États-Unis à la fin des années 1960. Cependant, le terme de « heavy metal » est sujet à confusion car il peut prendre plusieurs sens différents selon le contexte dans lequel il est employé. Dans son contexte d'origine, il était indifféremment utilisé comme un synonyme de hard rock. Dans un second sens, le terme désigne le heavy metal traditionnel, une tendance esthétique plus radicale qui, au cours des années 1970 et 1980, s’est démarquée du hard rock, en s’éloignant de ses racines blues, même si cette distinction est contestée par des recherches récentes. Dans un sens large et généralisé, le heavy metal ou metal (tout court) désigne toutes les musiques qui descendent du heavy metal traditionnel et du hard rock.Dans le cadre de cet article, le terme heavy metal est employé dans son sens large. En ce sens, il est aussi communément appelé metal. Le heavy metal puise son inspiration, entre 1969 et 19746, dans des groupes de hard rock tels que Black Sabbath et Deep Purple qui, en combinant blues et rock, ont créé un hybride aux sonorités lourdes et épaisses, centré sur les impulsions de la batterie et de la guitare à la distorsion très amplifiée. Au fil des années, le heavy metal a donné naissance à des sous-genres variés. Le genre s'est popularisé dans les années 1970 et 1980, au fur et à mesure de l'apparition de ses sous-genres, et il génère toujours dans les années 2000 un fort engouement de la part de ses fans à travers le monde.</p><p class='source'>Source : <a href='https://fr.wikipedia.org/wiki/Heavy_metal'>Wikipédia</a></p>"); //METAL (en)
tableauMenuStyles.push("<h1>Electro</h1><p>Le terme « electro » définit un genre de musique électronique. Son tempo moyen varie entre 120 et 140 BPM, sa rythmique syncopée étant fondamentalement construite sur le modèle de base « kick-snare-kick-kick-snare-kick » dont l'exemple-type est le morceau Numbers de Kraftwerk. L'electro est ainsi une musique explicitement « machinique ». En fonction de l'influence musicale du moment et de l'inspiration du musicien s'y greffe une ligne de basse de quelques notes (souvent sans portamento) qui vient renforcer le côté saccadé et « robotique » de la rythmique et/ou une combinaison de nappes mélodiques évoquant la science-fiction ou des univers aquatiques (typiques chez Drexciya et nombre de musiciens de Détroit tels Juan Atkins ou Aux 88). À Détroit, il est également fait référence au style electro par l'expression « techno bass ». Tout comme le terme « techno » qui a, un temps, servi à désigner de manière générique toute musique électronique dansante, le terme « electro » est depuis quelques années utilisé en ce sens, et ce plus particulièrement dans les pays francophones. La profusion des genres et sous-genres dans les musiques électroniques et la popularité grandissante de ces sonorités impose, notamment aux médias généralistes, de recourir à des étiquettes englobant des styles parfois très éloignés les uns des autres. « Cette culture à l'intérieur de laquelle se sont déployées ces nouvelles pratiques musicales et artistiques, cette scène qui a su si rapidement adopter les outils de son temps, c'est ce que l'on a appelé techno dans les années quatre-vingt-dix, les musiques électroniques au cours de la décennie suivante et aujourd'hui l'electro8. »</p><p class='source'>Source : <a href='https://fr.wikipedia.org/wiki/Electro'>Wikipédia</a></p>"); //ELECTRO (ménager)
tableauMenuStyles.push("<h1>Pop</h1><p>La musique pop est un genre musical apparu dans les années 1960 aux États-Unis. Ces chansons parlent en général de l'amour ou des relations entre les femmes et les hommes. Elle met l'accent sur la chanson individuelle plutôt que sur l'album, et utilise essentiellement des chansons courtes avec des rythmes associés à la danse1. La musique pop fut beaucoup influencée par les technologies, comme l'enregistrement à pistes multiples (vers la fin des années 1960) et le synthétiseur (durant les années 1970 et 1980).</p><p class='source'>Source : <a href='https://fr.wikipedia.org/wiki/Pop_(musique)'>Wikipédia</a></p>"); //POP CORN
tableauMenuStyles.push("<h1>Rock</h1><p>Le rock est un genre musical apparu dans les années 1950 aux États-Unis et qui s'est développé en différents sous-genres à partir des années 1960, notamment aux États-Unis et au Royaume-Uni1. Il prend ses racines dans le rock 'n' roll des années 1940 et 1950, lui-même grandement influencé par le rhythm and blues et la country. Le rock a également incorporé des éléments provenant d'autres genres dont la folk, le blues, le jazz et la musique classique. Le terme « rock » est aujourd'hui utilisé comme un terme générique incluant des formes artistiques comme la pop music, la musique soul, et parfois même le hip-hop, auquel il est souvent opposé2. Son influence culturelle est désormais prééminente dans l'industrie musicale, et se diffuse également dans d'autres arts (cinéma, bande dessinée, mode vestimentaire).</p><p class='source'>Source : <a href='https://fr.wikipedia.org/wiki/Rock'>Wikipédia</a></p>");//ROCK (a billy)

var tableauApropos = Array();

//POURQUOI
tableauApropos.push('<div id="conteneurPourquoi"><div id="menuPourquoi"><div id="cadre"><div id="titre">Pourquoi ce projet ? / Comment je m\'y suis pris ?</div></div></div><div id="textePourquoi"><h1>Pourquoi ?</h1><article><p>HomeStudio est un projet étudiant, créé de toute pièce par Simon DELINEAU.Ce projet a été mis en place au cours du DUT Métiers du Multimédia et de l\'Internet (MMI), à l\'IUT Nancy Charlemagne.Le but du projet était de créer un site/programme interactif sur le thème de la musique, afin d\'en apprendre davantage sur un instrument, un style de musique, etc... Pour ma part, j\'ai choisi de créer un programme de composition musicale, HomeStudio.</p><p>Le principe est simple : vous avez le choix entre 4 styles de musiques différents (metal, rock, pop et electronique). Chaque style est composé de 4 à 5 instruments, qui ont chacun 5 samples à leur disposition. Chaque sample a été travaillé afin d\'être cohérent avec tout autre sample du même style. Votre but sera de mélanger tous ces samples afin de créer votre propre rythme.</p><p> Par manque de temps et d\'expériences, chaque style à un tempo fixe, et chaque sample dure 2 mesures.</p><p>Le programme a été créé sur Unity, et le site a été conçu à la main, en HTML5, CSS3, JavaScript, et grâce à la librairie jQuery, et le background du site à été modélisé et rendu grâce aux logiciels Cinema4D et Adobe AfterEffects.</p></article></div></div><div class="entrez entrezApropos"><div>Retourner en haut</div><div><a href="#pageTelecharger"><img src="image/fleche.svg" alt="fleche_entrez"</a></div></div><script>$(".entrezApropos img").click(function(){$("#pageApropos").animate({top:"0px"}, 800, function(){});$("#pageTelecharger").css("filter", "brightness(1) blur(0px)");$("header").css("filter", "brightness(1) blur(0px)");$("#background").css("filter", "brightness(1)");});</script>');

//sTYLES
tableauApropos.push('<div id="conteneurApropos"><div id="colonneMenu"><div id="metal_btn"><div >Metal</div></div><div id="electro_btn"><div >Electro</div></div><div id="pop_btn"><div >Pop</div></div><div id="rock_btn"><div >Rock</div></div></div><div id="textePhoto"><div id="texte"><h1>Bonjour</h1><p>Sur cette page, vous trouverez des informations sur les 4 styles que j\'ai décidé de développer dans mon projet Unity.</p><p> Cliquer sur les différents styles ci-dessus afin d\'en savoir plus !</p></div><div id="photo"><img src="image/styles/bonjour.jpg" alt="bonjour"></div></div></div><div class="entrez entrezApropos"><div>Retourner en haut</div><div><a href="#pageTelecharger"><img src="image/fleche.svg" alt="fleche_entrez"/></a></div></div><script>$("#metal_btn").click(function(){console.log("bonjour");apparitionFade("#texte", tableauMenuStyles[0]);apparitionFade("#photo", tableauPhotos[0]);	});$("#electro_btn").click(function(){apparitionFade("#texte", tableauMenuStyles[1]);apparitionFade("#photo", tableauPhotos[1]);});$("#pop_btn").click(function(){apparitionFade("#texte", tableauMenuStyles[2]);apparitionFade("#photo", tableauPhotos[2]);});$("#rock_btn").click(function(){apparitionFade("#texte", tableauMenuStyles[3]);apparitionFade("#photo", tableauPhotos[3]);});$(".entrezApropos img").click(function(){$("#pageApropos").animate({top:"0px"}, 800, function(){});$("#pageTelecharger").css("filter", "brightness(1) blur(0px)");$("header").css("filter", "brightness(1) blur(0px)");$("#background").css("filter", "brightness(1)");});</script>');

//CONTACT
tableauApropos.push('<script>$(".entrezApropos img").click(function(){$("#pageApropos").animate({top:"0px"}, 800, function(){});$("#pageTelecharger").css("filter", "brightness(1) blur(0px)");$("header").css("filter", "brightness(1) blur(0px)");$("#background").css("filter", "brightness(1)");});</script><div id="conteneurContact"><h1>Contact</h1><form id="formContact"><label>Nom</label><input type="text" name="nom" placeholder="Votre nom"><label>Prénom</label><input type="text" name="prenom" placeholder="Votre prénom"><label>Adresse e-mail</label><input type="email" name="mail" placeholder="Votre adresse e-mail"><label>Message</label><textarea name="message" rows="15"></textarea><input id="boutton_envoyer" type="submit" value="Envoyer"/></form></div><div class="entrez entrezApropos entrezContact"><div>Retourner en haut</div><div><a href="#pageTelecharger"><img src="image/fleche.svg" alt="fleche_entrez"/></a></div></div>');

var tableauPhotos = Array();

tableauPhotos.push("<img src='image/styles/metal.jpg' alt='metal'>");
tableauPhotos.push("<img src='image/styles/electro.jpg' alt='electro'>");
tableauPhotos.push("<img src='image/styles/pop.jpeg' alt='pop'>");
tableauPhotos.push("<img src='image/styles/rock.jpg' alt='rock'>");


/* metalActive = false;
var electroActive = false;
var popActive = false;
var rockActive = false;*/


$("#metal_btn").click(function(){
	console.log("bonjour");
	apparitionFade("#texte", tableauMenuStyles[0]);
	apparitionFade("#photo", tableauPhotos[0]);
});

$("#electro_btn").click(function(){
	apparitionFade("#texte", tableauMenuStyles[1]);
	apparitionFade("#photo", tableauPhotos[1]);
});

$("#pop_btn").click(function(){
	apparitionFade("#texte", tableauMenuStyles[2]);
	apparitionFade("#photo", tableauPhotos[2]);
});

$("#rock_btn").click(function(){
	apparitionFade("#texte", tableauMenuStyles[3]);
	apparitionFade("#photo", tableauPhotos[3]);
});


var pourquoiActive = true;
var stylesActive = false;
var contactActive = false;

$("#btnPourquoi").click(function(){
	if(!pourquoiActive){
		apparitionFade("#contenu", tableauApropos[0]);
		pourquoiActive = true;
		stylesActive = false;
		contactActive = false;
		}
});
$("#btnStyles").click(function(){
	if(!stylesActive){
		apparitionFade("#contenu", tableauApropos[1]);
		pourquoiActive = false;
		stylesActive = true;
		contactActive = false;
		}
});
$("#btnContact").click(function(){
	if(!contactActive){
		apparitionFade("#contenu", tableauApropos[2]);
		pourquoiActive = false;
		stylesActive = false;
		contactActive = true;
		}
});



function apparitionFade(id, tableau){
	$(id).css("opacity", "0");
	setTimeout(function(){
		$(id).empty();
		$(id).append(tableau);
		$(id).css("opacity", "1");
	}, 500);
}
