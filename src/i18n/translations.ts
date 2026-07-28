export const languages = {
  fr: "Français",
  en: "English",
  es: "Español",
};

export const defaultLang = "fr";
export type Lang = keyof typeof languages;

export const translations = {
  fr: {
    // Nav
    "nav.home": "Accueil",
    "nav.vision": "Le Mouvement",
    "nav.history": "Notre histoire",
    "nav.actions": "Le Laboratoire du Vivant",
    "nav.coffee": "Le café",
    "nav.support": "Participer",
    "nav.passeport": "Passeport Pachatopia",
    "nav.parrainage": "Parrainage de culture",
    "nav.parrainage_espaces": "Parrainage d'espaces de liberté",
    "nav.partenaire": "Devenir partenaire",
    "nav.ambassadeur": "Devenir ambassadeur",
    "nav.depots_ventes": "Dépôts-ventes / points relais",
    "nav.volontariat": "Volontariat",
    "nav.volontariat_experience": "Volontariat / Vivre l'expérience",
    "nav.contact_faq": "Contact + FAQ",
    "nav.experience": "Venir vivre l'expérience",
    "nav.volunteer": "Participer / volontariat",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",

    // Hero
    "hero.welcome": "Pachatopia",
    "hero.tagline": "Reprendre notre place avec le vivant.",
    "hero.taglineSub":
      "Et si nous pouvions laisser la Terre plus vivante que nous l'avons trouvée ?",
    "hero.description": `Un mouvement de femmes et d'hommes qui choisissent de faire grandir le vivant en eux, autour d'eux et de le transmettre aux générations futures.
Le Mouvement Pachatopia est né d'une conviction simple : l'être humain peut redevenir une force de régénération pour le vivant.
À San Carlos, au cœur des montagnes colombiennes, nous expérimentons une manière de vivre qui cherche à réconcilier les êtres humains avec le vivant.

Nous apprenons du vivant.

En nous inspirant du vivant, nous restaurons les sols, développons des systèmes agroforestiers, protégeons la biodiversité et créons des liens durables entre l'être humain et la nature.

Pachatopia est plus qu'un lieu.
C'est une invitation.

Une invitation à observer, apprendre, transmettre et agir pour construire un avenir où le vivant retrouve toute sa place.
Bienvenue dans le Mouvement Pachatopia.`,
    "hero.cta.discover": "Découvrir le mouvement",
    "hero.cta.support": "Soutenir Pachatopia",

    // About (homepage section)
    "about.title": "Chez Pachatopia",
    "about.subtitle": "Qui sommes-nous ?",
    "about.text1":
      "Chez Pachatopia, inspirée par la sagesse des Amérindiens et leur respect profond pour la Pachamama, la Terre mère, notre association œuvre pour un modèle agricole et un mode de vie valorisant la nature.",
    "about.text2":
      "Notre mission est simple mais ambitieuse : créer un avenir durable en harmonie avec son environnement. Pachatopia, c'est plus qu'un projet, c'est un mouvement pour réapprendre à vivre en accord avec la Terre. Ensemble, nous pouvons bâtir un monde où la durabilité et le bien-être collectif sont au cœur de chaque action. Rejoignez-nous dans cette quête pour protéger la vie et créer un futur harmonieux pour les générations à venir.",
    "about.association":
      "Nous sommes une association. Nous créons des réserves naturelles, promouvons l'agriculture et un mode de vie éco-responsable.",

    // About Page
    "aboutPage.title": "A propos de nous",
    "aboutPage.tagline": "Rêvons, agissons, transformons",
    "aboutPage.vision.title": "Notre Vision",
    "aboutPage.vision.intro":
      "Pachatopia est né de la conviction que nous devons vivre en accord avec nos valeurs fondamentales :",
    "aboutPage.values.love.title": "Amour",
    "aboutPage.values.love.desc":
      "C'est la base de toutes nos actions et interactions, motivant notre engagement envers la nature et les autres.",
    "aboutPage.values.benevolence.title": "Bienveillance",
    "aboutPage.values.benevolence.desc":
      "Elle guide notre approche envers les personnes et l'environnement, promouvant des actions positives et constructives.",
    "aboutPage.values.altruism.title": "Altruisme",
    "aboutPage.values.altruism.desc":
      "Cette valeur nous pousse à penser au bien-être des autres et à agir de manière désintéressée pour le bénéfice collectif.",
    "aboutPage.mission":
      "Ces trois valeurs encapsulent l'essence de Pachatopia et sont essentielles pour créer un impact durable et positif. Face aux défis environnementaux et sociaux, nous avons décidé d'agir pour un monde meilleur, en nous engageant à protéger notre planète et à promouvoir un modèle économique durable.",

    // Metrics
    "metrics.projects": "Projets développés",
    "metrics.countries": "Pays dans le monde",
    "metrics.volunteers": "Bénévoles engagées",
    "metrics.jobs": "emplois créés",

    // Actions (homepage section)
    "actions.title": "Nos Actions, Offres et Services",
    "actions.subtitle": "Découvrez nos projets et initiatives",
    "actions.reserve.title": "Création d'une Réserve Naturelle",
    "actions.reserve.desc":
      "Préserver la biodiversité locale en créant des espaces protégés pour la faune et la flore.",
    "actions.agriculture.title": "Développer une Agriculture Durable",
    "actions.agriculture.desc":
      "Promouvoir des pratiques agricoles respectueuses de l'environnement et économiquement viables.",
    "actions.aquaculture.title": "Aquaculture Durable",
    "actions.aquaculture.desc":
      "Développer une aquaculture responsable qui préserve les écosystèmes aquatiques.",
    "actions.production.title": "Valorisation des Productions",
    "actions.production.desc":
      "Transformer et valoriser les productions locales pour créer de la valeur ajoutée.",
    "actions.participate.title": "Invitation à Participer",
    "actions.participate.desc":
      "Rejoignez notre communauté de volontaires et contribuez à nos projets durables.",
    "actions.pachacoin.title": "Pachacoin",
    "actions.pachacoin.desc":
      "Notre monnaie écologique pour soutenir l'économie locale et les initiatives durables.",
    "actions.funded": "fonds récoltés",

    // Actions Page
    "actionsPage.title": "Nos Actions, Offres et Services",
    "actionsPage.subtitle": "Découvrez en détail nos projets et initiatives",
    "actionsPage.reserve.detail":
      "Notre ambition est de créer des réserves naturelles pour préserver la biodiversité. Cette initiative a pour objectif de compenser les émissions de gaz à effet de serre, que ce soit pour un particulier, une famille ou une entreprise. Notre consommation a déséquilibré les espaces naturels, et nous cherchons à rétablir cet équilibre. Nous œuvrons pour préserver les ressources locales et protéger la faune et la flore de nos régions. La sauvegarde de nos forêts jouera également un rôle clé dans la préservation des sources d'eau douce.",
    "actionsPage.agriculture.detail":
      "Notre vision inclut le développement d'un système agricole basé sur le mimétisme naturel. Nous croyons fermement qu'en intégrant les activités agricoles et d'élevage, nous pourrons augmenter les rendements tout en réduisant notre dépendance aux énergies fossiles. S'inspirer des processus naturels nous aidera à être plus efficaces et à produire des aliments de meilleure qualité par rapport à une agriculture utilisant des intrants de synthèse. Augmenter la biodiversité dans les systèmes de culture permet d'améliorer la santé de la Terre, des plantes et des animaux.",
    "actionsPage.production.detail":
      "Nous transformons nos produits pour élargir notre réseau et réduire les pertes énergétiques. Par exemple, pour le café, nous valorisons les graines enveloppées de mucilage et de pulpe. Nous souhaitons les torréfier localement, produire un café régional, et dynamiser le tourisme avec la réouverture de chemins historiques. Cette torréfaction serait alimentée par un méthaniseur utilisant les déchets agricoles, rendant le processus plus écologique. Le mucilage et la pulpe, riches en sucre, pourraient aussi être transformés en vin ou en eau-de-vie, et leurs sous-produits fermentés servir à fabriquer des engrais naturels pour améliorer nos rendements. Bien que nous commencions par le café, d'autres secteurs pourront être valorisés à l'avenir.",
    "actionsPage.aquaculture.detail":
      "Notre région, riche en eau, est également un berceau de la production piscicole. Actuellement, le système est rudimentaire et ne valorise pas les déchets, ce qui constitue une source de pollution. Nous voyons ici une opportunité de transformer ces déchets en ressources, rendant nos productions piscicoles plus abondantes et plus saines.",
    "actionsPage.participate.text":
      "Chez Pachatopia, nous croyons fermement que chaque individu a le pouvoir de contribuer positivement à notre mission commune : préserver notre environnement et promouvoir un mode de vie durable. Que vous souhaitiez vous engager activement sur le terrain, soutenir nos initiatives par vos achats, ou faire un don pour renforcer notre impact, nous vous invitons chaleureusement à rejoindre notre communauté engagée. Votre soutien est essentiel pour faire croître ce projet et étendre notre influence, afin de créer un avenir meilleur pour tous.",
    "actionsPage.association":
      "Nous sommes une association. Nous créons des réserves naturelles, promouvons l'agriculture et un mode de vie éco-responsable.",

    // Participate Page
    "participatePage.title": "Comment participer",
    "participatePage.tagline":
      "Semez des actions durables : parrainez, aidez, inspirez",
    "participatePage.support.title": "Comment Pouvez-Vous Nous Soutenir ?",
    "participatePage.support.text":
      "Chez Pachatopia, nous croyons que chaque individu peut jouer un rôle essentiel dans la préservation de l'environnement et la promotion d'un mode de vie durable.",
    "participatePage.forest.title": "Parrainage de la Forêt",
    "participatePage.forest.desc":
      "Chaque don permet de préserver 1 m² de forêt, absorbant ainsi 2 kg de CO₂ par an. En parrainant notre forêt, vous compensez vos émissions de gaz à effet de serre tout en soutenant la biodiversité locale.",
    "participatePage.forest.price": "1€ = 1m² de forêt préservée",
    "participatePage.coffee.title": "Parrainage du Café",
    "participatePage.coffee.desc":
      "Avec votre contribution, vous pouvez parrainer un pied de caféier.",
    "participatePage.coffee.price": "20€ = 0.5Kg de café de haute qualité",
    "participatePage.cocoa.title": "Parrainage du Cacao",
    "participatePage.cocoa.desc":
      "Avec votre contribution, vous pouvez parrainer un demi pied de cacao.",
    "participatePage.cocoa.price": "20€ = 0,5Kg de fèves de Cacao de haute qualité",
    "participatePage.habitat.title": "Développement d'Habitats Écologiques",
    "participatePage.habitat.desc":
      "Votre don soutiendra la création d'habitats écologiques, alliant matériaux durables et technologies vertes. Afin de promouvoir un tourisme écoresponsable et réduire l'empreinte écologique. Ce projet sera mené main dans la main avec les habitants de la région, en respectant l'environnement naturel et ses écosystèmes, tout en améliorant le bien-être social et la qualité de vie locale.",
    "participatePage.donation.title": "Donation Libre",
    "participatePage.donation.desc":
      "Votre donation soutiendra le développement de notre station de torréfaction et l'exploration de nouvelles méthodes de valorisation du café. Ces fonds seront utilisés pour investir dans des technologies de transformation innovantes et pour optimiser notre efficacité énergétique. Grâce à votre soutien, nous pourrons non seulement améliorer la qualité de notre production, mais aussi réduire notre empreinte écologique et promouvoir des pratiques durables dans l'industrie du café.",
    "participatePage.getInvolved": "Impliquez-vous dès aujourd'hui",

    // Currency Page
    "currencyPage.title": "Notre monnaie écologique",
    "currencyPage.tagline":
      "PachaCoin : Où votre investissement fleurit en futurs verts",
    "currencyPage.intro.title": "Introduction au PachaCoin",
    "currencyPage.intro.text":
      "Le PachaCoin est une initiative innovante visant à soutenir la préservation de l'environnement et à promouvoir une agriculture durable. Chaque PachaCoin (PC) vaut 60 CHF ou EUR pour la monnaie virtuelle et 70 CHF ou EUR pour la version matérielle. Les fonds sont répartis équitablement entre la conservation de la forêt, la production agricole, et le développement d'habitats écologiques.",
    "currencyPage.howItWorks.title": "Comment Fonctionne le PachaCoin ?",
    "currencyPage.howItWorks.text":
      "Chaque PachaCoin est distribué en trois parties égales : préservation forestière, parrainage agricole et création d'habitats écologiques.",
    "currencyPage.values.virtual": "Version virtuelle : 60 CHF/EUR",
    "currencyPage.values.physical": "Version physique : 70 CHF/EUR",
    "currencyPage.distribution.forest":
      "20 CHF ou EUR pour la préservation de la forêt: Chaque PC finance la préservation de 20 m² de forêt, équivalant à l'absorption de 40 kg de CO₂ par an.",
    "currencyPage.distribution.agriculture":
      "20 CHF ou EUR pour la production agricole: Parrainage d'un pied de café ou d'un demi-pied de cacao pour 20 CHF ou EUR. Recevez une livre (±0.5 kg) de café ou une quantité équivalente de cacao une fois la production atteinte.",
    "currencyPage.distribution.habitat":
      "20 CHF ou EUR pour le développement d'habitats écologiques: Financer la création de logements respectueux de l'environnement pour nos communautés locales.",
    "currencyPage.transformation.title": "Transformation et Accumulation",
    "currencyPage.transformation.pc":
      "Utilisé pour parrainer et soutenir les initiatives écologiques. Le PC permet de consommer les productions agricoles, ce qui le transforme ensuite en PachaPeso (PP).",
    "currencyPage.transformation.pp":
      "Chaque PC se transforme en PP après consommation du produit agricole. Les PP peuvent être utilisés lors d'événements sur nos terrains protégés pour des repas ou pour séjourner dans des habitats légers à faible impact environnemental.",
    "currencyPage.transformation.pd":
      "Après utilisation des PP, ceux-ci se transforment en PD, utilisés pour la création de réserves naturelles dédiées à l'observation et aux études environnementales. De plus, les détenteurs de PD peuvent voter sur les prochains projets à développer.",
    "currencyPage.transparency.title": "Suivi et Transparence",
    "currencyPage.transparency.text":
      "Une plateforme en ligne permet de suivre l'évolution des contributions et des projets financés par les PachaCoins, PachaPesos et PachaDreams. Les contributeurs peuvent voir en temps réel les travaux de préservation, de production et de développement financés par leurs contributions.",
    "currencyPage.incentives.title": "Incentives pour la Participation Active",
    "currencyPage.incentives.text":
      "Les plus grands contributeurs se voient offrir des récompenses supplémentaires, telles que des séjours à Pachatopia avec hébergement et nourriture inclus. Les contributeurs majeurs peuvent obtenir des places au sein du projet, participant aux décisions et à la direction de Pachatopia.",
    "currencyPage.whyParticipate.title": "Pourquoi Participer ?",
    "currencyPage.whyParticipate.impact": "Contribuez à la réduction des gaz à effet de serre en finançant la préservation des forêts.",
    "currencyPage.whyParticipate.products": "Recevez des produits cultivés de manière durable, comme le café et le cacao.",
    "currencyPage.whyParticipate.habitat": "Participez au développement de logements respectueux de l'environnement pour nos communautés locales.",
    "currencyPage.whyParticipate.longterm": "Accumulez des PachaPesos et PachaDreams, et utilisez-les pour venir manger ou séjourner à Pachatopia, avec des opportunités d'implication accrue pour les plus grands contributeurs.",
    "currencyPage.future.title": "Projets Futurs",
    "currencyPage.future.coffee": "Nous nous concentrons d'abord sur le café en Colombie, où nous prévoyons de créer une petite unité de transformation. Cette unité nous permettra de sélectionner les grains, de les fermenter, de les torréfier et de les sécher localement, garantissant ainsi une qualité optimale.",
    "currencyPage.future.forest": "La création de réserves naturelles est essentielle pour protéger la forêt. Nous investissons dans la conservation des forêts en Colombie, contribuant à la préservation de la biodiversité et à la réduction des émissions de CO₂.",
    "currencyPage.future.europe": "Parallèlement, nous cherchons à établir une unité en Europe pour créer des jardins-forêts. Ces espaces serviront de lieux de rencontre, de partage et de production, renforçant les liens communautaires.",
    "currencyPage.howToParticipate.title": "Comment Participer ?",
    "currencyPage.howToParticipate.step1": "Acheter des PachaCoins: Contribuez en CHF ou en EUR. Choisissez entre la monnaie virtuelle (60 CHF/EUR) ou matérielle (70 CHF/EUR).",
    "currencyPage.howToParticipate.step2": "Suivi des Contributions: Accédez à notre plateforme en ligne pour suivre l'évolution de vos contributions.",
    "currencyPage.howToParticipate.step3": "Distribution des Produits: Récupérez vos produits dans nos points relais ou faites-les expédier à domicile (frais de port non inclus).",
    "currencyPage.vision.title": "Vision d'Agrandissement",
    "currencyPage.vision.text":
      "Notre vision est d'étendre l'impact du PachaCoin à l'échelle internationale pour un futur plus vert.",

    // FAQ Page
    "faqPage.title": "FAQ",
    "faqPage.subtitle": "A Little Help Can Make A Big Change",
    "faqPage.q1": "Où puis-je trouver des informations ?",
    "faqPage.a1":
      "Vous pouvez trouver toutes les informations sur nos projets, nos actions et comment participer sur notre site web et nos réseaux sociaux. N'hésitez pas à nous contacter directement par email ou téléphone.",
    "faqPage.q2": "Quelles sont vos conditions générales ?",
    "faqPage.a2":
      "Nos conditions sont transparentes et basées sur le respect mutuel. Chaque parrainage et don est utilisé directement pour nos projets environnementaux. Contactez-nous pour plus de détails.",
    "faqPage.q3": "Puis-je acheter directement ?",
    "faqPage.a3":
      "Oui, vous pouvez acheter nos produits directement via notre site ou nous contacter pour des commandes personnalisées.",
    "faqPage.q4": "Quels types de paiement acceptez-vous ?",
    "faqPage.a4":
      "Nous acceptons les virements bancaires, PayPal et les PachaCoins. Pour les dons, toutes les formes de contribution sont les bienvenues.",
    "faqPage.q5": "Quand est-ce que je reçois ma commande ?",
    "faqPage.a5":
      "Les délais de livraison varient selon le produit et votre localisation. Le café et le cacao sont des produits saisonniers. Contactez-nous pour des estimations précises.",

    // Info Page
    "infoPage.title": "Informations de l'association",
    "infoPage.subtitle":
      "Pachatopia : Ensemble, réapprenons l'art de vivre en harmonie.",
    "infoPage.founder.title": "Texte Fondateur de PACHATOPIA",
    "infoPage.founder.text1":
      "Nous, membres et fondateurs de l'association « Pachatopia », sommes conscients de l'impérieuse nécessité de préserver notre précieux environnement, et de se reconnecter à un cycle vertueux comme le monde du vivant. Pour cela nous voulons favoriser un modèle agricole respectueux de la nature, renforcer les liens entre les producteurs locaux et les consommateurs engagés, tout en soutenant le développement de la créativité et du bien-être qui restent une partie essentielle pour l'équilibre d'une vie. Nous nous engageons solennellement à poursuivre une vision commune pour un avenir durable.",
    "infoPage.founder.text2":
      "Pachatopia, un nom qui incarne notre engagement profond envers la Terre, un nom qui nous a été inspiré des Amérindiens qui l'appelaient la Pachamama, la Terre mère, notre mère à tous. Pachatopia trouve son origine dans un élan personnel de réapprendre à vivre en harmonie avec la nature. J'ai impulsé la création de cette association dans le but d'évoluer avec plus de cohérence et de protéger ce qui m'est de plus important : la vie. Comment faire pour répondre aux besoins des êtres humains tout en respectant l'essence même de la vie ?",
    "infoPage.founder.text3":
      "Il me fallait agir.",
    "infoPage.founder.text4":
      "J'ai investi tout mon pouvoir d'actions dans ce projet qui met la Pachamama au centre de mes préoccupations, cette Terre si généreuse qui nous fait respirer, nous donne à boire, nous nourrit, donne la vie...",
    "infoPage.founder.text5":
      "Ainsi, j'ai réuni mes fonds propres et ceux de mes proches afin de poursuivre cette quête, une quête pour renouer avec les enseignements anciens, un retour à l'essentiel de notre existence, d'insuffler l'énergie familiale autour d'un projet commun avec un but qui dépasse notre existence : servir et protéger la vie pour le bien-être de tous. Aujourd'hui l'heure est venue pour que ce projet personnel et familiale grandissent. Les terres de Pachatopia sont des espaces ouverts, des sanctuaires de connaissances, des lieux pour apprendre, partager et grandir ensemble.",
    "infoPage.geography.title": "Focus Géographique",
    "infoPage.geography.text1":
      "Les actions de notre association seront concentrées dans les hameaux d'Agua Bonita et de la Mirandita dans la municipalité de San Carlos Antioquia, en Colombie : une terre magique, riche en ressources naturelles qui fut dévastée par une guerre idéologique à la fin des années 90. Le village se reconstruit depuis que la paix a pu s'installer, avec les traumatismes d'une guerre encore présente dans le cœur de tous et des enjeux sociaux et environnementaux encore plus importants pour ce genre de village en développement.",
    "infoPage.geography.text2":
      "La demande accrue de matières premières par les pays industriels déstabilise le pays et son écosystème. Ce pays qui fut jadis profondément connecté avec sa Terre et toute sa magie voit également son équilibre fragilisé par la consommation de stupéfiants qui reflète un mal-être global de nos sociétés occidentales. Ensemble, avec nos actions, nous pouvons transformer cette énergie et participer à la construction d'une paix durable. Grâce à une connaissance profonde de l'écosystème dans lequel nous vivons, nous rêvons d'un monde harmonieux dans lequel « rien ne perd, rien ne se crée, tout se transforme ».",
    "infoPage.aspiration":
      "Dans cet esprit, notre aspiration est de construire un lieu d'apprentissage et de partage dédié à l'art de vivre en accord avec la nature, où chacun pourra découvrir les leçons essentielles de la durabilité, de la protection de l'environnement et du partage. Ce lieu sera un phare de lumière pour l'humanité, un lieu où les générations futures apprendront les valeurs essentielles de la préservation de notre planète et du vivre-ensemble.",
    "infoPage.inspiration":
      "Notre Association tire son inspiration de l'amour inconditionnel envers la planète Terre, notre seule et unique demeure, ainsi que de la conviction que l'harmonie entre l'humanité et la nature est essentielle pour notre bien-être collectif.",
    "infoPage.principles.intro":
      "Dans cette optique, nous énonçons les principes fondateurs suivants :",
    "infoPage.principles.title": "Principes Fondamentaux",
    "infoPage.principles.1":
      "Protection de l'environnement. Nous nous engageons à œuvrer sans relâche pour la préservation des écosystèmes fragiles, la conservation de la biodiversité, et la création de réserves naturelles qui serviront de sanctuaires pour la faune et la flore.",
    "infoPage.principles.2":
      "Agriculture biologique. Nous promouvons activement des pratiques agricoles durables et biologiques, favorisant ainsi la santé de nos sols, la qualité de nos récoltes et la santé de nos concitoyens. Nous encourageons la transition vers une agriculture respectueuse de l'environnement et la réduction de l'utilisation de produits chimiques nocifs.",
    "infoPage.principles.3":
      "Économie locale et création d'emplois. Nous croyons en la puissance de l'économie locale. En soutenant les producteurs locaux et en favorisant l'accès aux marchés pour leurs produits, nous contribuons à la croissance économique de nos communautés tout en créant des emplois durables.",
    "infoPage.principles.4":
      "Rapprochement producteurs-consommateurs. Nous facilitons la connexion entre les producteurs locaux et les consommateurs soucieux de leur alimentation. En raccourcissant la chaîne d'approvisionnement, nous encourageons une consommation responsable et un soutien direct à nos producteurs.",
    "infoPage.principles.5":
      "Tourisme éducatif. Nous accueillons les personnes sensibles à nos objectifs, nous échangeons sur nos méthodes de production, nous leur permettons d'accéder à plus de connaissances grâce à une participation active aux activités inhérentes au projet.",
    "infoPage.closing":
      "Ensemble, nous nous engageons à mettre en œuvre ces principes, à sensibiliser la société à l'importance de la durabilité et à travailler sans relâche pour un avenir où l'harmonie entre l'homme et la nature sera la norme. Nous invitons tous ceux qui partagent notre vision à se joindre à nous dans cette noble cause.",
    "infoPage.preamble":
      "Ce préambule reflète notre engagement à créer un monde meilleur, plus équilibré et plus durable pour les générations présentes et futures.",
    "infoPage.signature": "Benoit Nocart Membre fondateur de l'association Pachatopia",
    "infoPage.documents.title": "Documents Clés",
    "infoPage.documents.1": "Assemblée Constitutive",
    "infoPage.documents.2": "Statuts de l'Association",
    "infoPage.documents.3": "Compte Parrainage Café",

    // Contact Page
    "contactPage.title": "Contact",
    "contactPage.tagline": "Rêvons, agissons, transformons.",
    "contactPage.form.title": "Envoie moi un message",
    "contactPage.form.name": "Nom",
    "contactPage.form.phone": "Téléphone",
    "contactPage.form.email": "Email",
    "contactPage.form.subject": "Sujet",
    "contactPage.form.message": "Message",
    "contactPage.form.send": "Envoyer le message",
    "contactPage.europe.title": "Représentant Europe",
    "contactPage.europe.name": "Benoit Nocart",
    "contactPage.europe.phone": "+33 6 31 66 36 24",
    "contactPage.europe.email": "info.pachatopia@gmail.com",
    "contactPage.europe.relay":
      "Points relais : Commune de Présilly (Haute Savoie, France) ; Commune de Gryon (Canton de Vaud, Suisse) — pour le café",
    "contactPage.colombia.title": "Représentant Colombie",
    "contactPage.colombia.name": "Victor Hugo Contreras Cano",
    "contactPage.colombia.phone": "+57 311 76 24348",
    "contactPage.colombia.address":
      "Pachatopia Agua Bonita Direction la Mirandita San Carlos, Antioquia en Colombie",
    "contactPage.social.title": "Suivez nos réseaux sociaux",

    // Objectives
    "objectives.title": "Impliquez-vous dès aujourd'hui",
    "objectives.subtitle": "Ce que nous visons",
    "objectives.1":
      "Développer des infrastructures écoresponsables pour un avenir durable",
    "objectives.2":
      "Encourager un tourisme durable qui préserve l'environnement et soutient les communautés locales",
    "objectives.3":
      "Maintenir la diversité de la faune et de la flore de la région",
    "objectives.4":
      "Avec la communauté Pachatopia, soutenir et participer à des initiatives locales durables",
    "objectives.5":
      "Promouvoir une culture respectueuse de l'environnement",
    "objectives.6":
      "Promouvoir l'emploi local et soutenir les travailleurs locaux",
    "objectives.7":
      "Œuvrer dans le respect des ressources naturelles et de l'environnement",

    // Testimonials
    "testimonials.title": "Mots de bénévoles",
    "testimonials.subtitle": "Ce que disent nos volontaires",

    // Call to Action
    "cta.title": "Rejoignez l'aventure Pachatopia",
    "cta.text": "Ensemble, régénérons la Terre et construisons un futur plus harmonieux. Chaque geste compte.",
    "cta.button": "Nous contacter",

    // Footer
    "footer.description": "Association pour la régénération écologique et la protection du vivant.",
    "footer.location": "San Carlos – Antioquia – Colombie",
    "footer.address": "Pachatopia Agua Bonita – San Carlos, Antioquia, Colombie",
    "footer.quicklinks": "Liens rapides",
    "footer.discover": "Découvrir",
    "footer.participate": "Participer",
    "footer.support": "Soutenir",
    "footer.contact": "Contact",
    "footer.newsletter.title": "Newsletter",
    "footer.newsletter.text": "Restez informé de nos avancées et de nos projets.",
    "footer.newsletter.placeholder": "Votre adresse email",
    "footer.newsletter.button": "S'inscrire",
    "footer.rights": "Tous droits réservés",

    // ── Unified Homepage Sections ──

    // Land Reborn
    "home.land.title": "Une terre qui renaît",
    "home.land.p1": "San Carlos est un territoire d'une beauté exceptionnelle. C'est aussi un territoire marqué par l'histoire du conflit armé colombien.",
    "home.land.p2": "Aujourd'hui, les habitants reconstruisent leur avenir. La nature repousse. Les rivières continuent de couler. Les forêts retrouvent peu à peu leur place.",
    "home.land.p3": "À Pachatopia, nous croyons que la régénération d'un territoire est à la fois écologique, humaine et culturelle. En prenant soin du vivant, nous contribuons aussi à recréer des liens entre les personnes.",
    "home.land.imageAlt": "Paysage de San Carlos",

    // Living Laboratory (6 cards)
    "home.lab.title": "Notre laboratoire du vivant",
    "home.lab.desc": "Pachatopia est un lieu d'expérimentation où nous apprenons directement auprès du vivant, pour construire des systèmes capables de produire tout en régénérant les écosystèmes. Chaque jour, nous observons, expérimentons, partageons et améliorons nos pratiques.",
    "home.lab.card1.title": "L'agroforesterie régénérative",
    "home.lab.card1.desc": "Produire tout en régénérant les sols, en s'inspirant du fonctionnement des écosystèmes naturels.",
    "home.lab.card2.title": "Le café et le cacao",
    "home.lab.card2.desc": "Des cultures en transition agroforestière, cultivées dans le respect des équilibres naturels.",
    "home.lab.card3.title": "Les espaces de liberté pour le vivant",
    "home.lab.card3.desc": "Des zones laissées au vivant, pour que la biodiversité puisse continuer d'évoluer librement.",
    "home.lab.card4.title": "La protection de la biodiversité",
    "home.lab.card4.desc": "Préserver les espèces animales et végétales qui font la richesse du territoire.",
    "home.lab.card5.title": "La préservation de l'eau",
    "home.lab.card5.desc": "Protéger les sources, les rivières et les cycles de l'eau dont dépend toute forme de vie.",
    "home.lab.card6.title": "La coopération avec les communautés",
    "home.lab.card6.desc": "Travailler avec les habitants du territoire pour construire un avenir partagé.",
    "home.lab.footer": "Notre ambition n'est pas seulement de produire autrement. Nous souhaitons démontrer qu'il est possible de réconcilier la nature avec les activités humaines pour les générations futures.",

    // Growing Community
    "home.community.title": "Une communauté qui grandit",
    "home.community.p1": "Le Mouvement Pachatopia souhaite réveiller des gardiens du vivant, des femmes et des hommes qui choisissent de protéger la Terre, l'eau, les forêts et toutes les formes de vie dont dépend notre avenir commun.",
    "home.community.p2": "Nous ne demandons pas au monde de croire en notre rêve. Nous invitons chacun à planter sa propre graine d'espérance au service du vivant.",
    "home.community.subtitle": "Une même direction, mille façons d'agir",
    "home.community.p3": "Il n'existe pas une seule manière de contribuer au vivant.",
    "home.community.p4": "Chaque personne possède une histoire, des talents et une sensibilité qui lui sont propres.",
    "home.community.p5": "Le Mouvement Pachatopia existe pour permettre à chacun d'apporter le meilleur de lui-même au service du bien commun.",
    "home.community.pill1": "Un arbre",
    "home.community.pill2": "Une idée",
    "home.community.pill3": "Du temps",
    "home.community.pill4": "Une compétence",
    "home.community.pill5": "Un sourire",
    "home.community.pill6": "Une rencontre",
    "home.community.closing": "Chacun peut apporter quelque chose d'unique",

    // Join the Movement (CTA cards)
    "home.join.title": "Rejoindre le Mouvement",
    "home.join.subtitle": "Aujourd'hui, vous pouvez participer de nombreuses façons.",
    "home.join.card1.title": "Devenir Gardien du Vivant",
    "home.join.card1.sub": "Grâce au Passeport Pachatopia",
    "home.join.card2.title": "Parrainer une culture",
    "home.join.card2.sub": "En transition agroforestière",
    "home.join.card3.title": "Parrainer des espaces de liberté pour le vivant",
    "home.join.card3.sub": "",
    "home.join.card4.title": "Venir vivre l'expérience",
    "home.join.card4.sub": "Sur le terrain",
    "home.join.card5.title": "Devenir partenaire",
    "home.join.card5.sub": "Du Mouvement",
    "home.join.card6.title": "Inspirer autour de vous",
    "home.join.card6.sub": "Devenir ambassadeur",
    "home.join.footer1": "Une forêt ne grandit jamais grâce à une seule graine. Un mouvement non plus.",
    "home.join.footer2": "Le vivant nous attend tous.",
    "home.join.footer3": "À votre tour de planter une graine d'espérance.",

    // Ecosystem (5 cards)
    "home.ecosystem.title": "L'écosystème Pachatopia",
    "home.ecosystem.subtitle": "Pachatopia est conçu comme un lieu où les différentes activités se soutiennent mutuellement.",
    "home.ecosystem.card1": "Réserve naturelle",
    "home.ecosystem.card2": "Café et cacao",
    "home.ecosystem.card3": "Pépinière d'arbres",
    "home.ecosystem.card4": "Espace d'accueil",
    "home.ecosystem.card5": "Cuisine locale",
    "home.ecosystem.footer": "Un projet qui cherche à démontrer qu'il est possible de produire, protéger et partager en harmonie avec la nature.",

    // Living Project
    "home.living.title": "Un projet vivant",
    "home.living.p1": "Pachatopia est un projet qui évolue.",
    "home.living.p2": "Chaque année, nous plantons des arbres, restaurons de nouvelles parcelles et développons des initiatives pour renforcer la biodiversité et la résilience du territoire.",
    "home.living.quote": "\"Petit à petit, une forêt et un écosystème régénératif prennent forme.\"",

    // Conviction
    "home.conviction.title": "Notre conviction",
    "home.conviction.intro": "Nous croyons que…",
    "home.conviction.card1": "Régénérer la Terre peut aider à régénérer les relations humaines",
    "home.conviction.card2": "Planter des arbres est un acte d'espérance",
    "home.conviction.card3": "Chaque action positive peut inspirer un changement plus large",

    // Enter as you are
    "home.enter.title": "Entre comme tu es.",
    "home.enter.observe": "Observe",
    "home.enter.learn": "Apprends",
    "home.enter.transmit": "Transmets",
    "home.enter.leave": "Et repars en laissant la Terre un peu plus vivante que tu ne l'as trouvée.",
    "home.enter.closing": "Nous apprenons du vivant.",
  },
  en: {
    // Nav
    "nav.home": "Home",
    "nav.vision": "The Movement",
    "nav.history": "Our story",
    "nav.actions": "The Living Laboratory",
    "nav.coffee": "Coffee",
    "nav.support": "Participate",
    "nav.passeport": "Pachatopia Passport",
    "nav.parrainage": "Culture Sponsorship",
    "nav.parrainage_espaces": "Freedom Spaces Sponsorship",
    "nav.partenaire": "Become a Partner",
    "nav.ambassadeur": "Become an Ambassador",
    "nav.depots_ventes": "Drop-off and sales points",
    "nav.volontariat": "Volunteering",
    "nav.volontariat_experience": "Volunteer / Live the Experience",
    "nav.contact_faq": "Contact + FAQ",
    "nav.experience": "Live the experience",
    "nav.volunteer": "Participate / Volunteer",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",

    // Hero
    "hero.welcome": "The Pachatopia Movement",
    "hero.tagline": "Reclaiming our place within the living world.",
    "hero.taglineSub":
      "What if we could leave the Earth more alive than we found it?",
    "hero.description":
      "A movement of women and men who choose to nurture life within themselves, around themselves, and to pass it on to future generations.\nThe Pachatopia Movement was born from a simple conviction: human beings can once again become a force of regeneration for the living world.\nIn San Carlos, in the heart of the Colombian mountains, we are experimenting with a way of life that seeks to reconcile human beings with the living world.\n\nWe learn from life.\n\nInspired by the living world, we restore soils, develop agroforestry systems, protect biodiversity, and create lasting bonds between human beings and nature.\n\nPachatopia is more than a place.\nIt is an invitation.\n\nAn invitation to observe, learn, transmit, and act to build a future where life reclaims its rightful place.\nWelcome to the Pachatopia Movement.",
    "hero.cta.discover": "Discover the Movement",
    "hero.cta.support": "Support Pachatopia",

    // About (homepage section)
    "about.title": "At Pachatopia",
    "about.subtitle": "Who are we?",
    "about.text1":
      "At Pachatopia, inspired by the wisdom of Indigenous peoples and their deep respect for Pachamama, Mother Earth, our association works toward an agricultural model and a way of life that values nature.",
    "about.text2":
      "Our mission is simple yet ambitious: to create a sustainable future in harmony with the environment. Pachatopia is more than a project, it's a movement to relearn how to live in accord with the Earth. Together, we can build a world where sustainability and collective well-being are at the heart of every action. Join us in this quest to protect life and create a harmonious future for generations to come.",
    "about.association":
      "We are an association. We create natural reserves, promote agriculture and eco-responsible lifestyles.",

    // About Page
    "aboutPage.title": "About Pachatopia",
    "aboutPage.tagline": "Dream, act, transform",
    "aboutPage.vision.title": "Our Vision",
    "aboutPage.vision.intro":
      "Pachatopia was born from the conviction that we must live in accordance with our fundamental values:",
    "aboutPage.values.love.title": "Love",
    "aboutPage.values.love.desc":
      "It is the foundation of all our actions and interactions, motivating our commitment to nature and others.",
    "aboutPage.values.benevolence.title": "Benevolence",
    "aboutPage.values.benevolence.desc":
      "It guides our approach toward people and the environment, promoting positive and constructive actions.",
    "aboutPage.values.altruism.title": "Altruism",
    "aboutPage.values.altruism.desc":
      "This value drives us to think about the well-being of others and to act selflessly for the collective benefit.",
    "aboutPage.mission":
      "These three values encapsulate the essence of Pachatopia and are essential for creating a lasting and positive impact. Facing environmental and social challenges, we decided to act for a better world, committing to protect our planet and promote a sustainable economic model.",

    // Metrics
    "metrics.projects": "Projects Developed",
    "metrics.countries": "Countries Worldwide",
    "metrics.volunteers": "Engaged Volunteers",
    "metrics.jobs": "Jobs Created",

    // Actions (homepage section)
    "actions.title": "Our Actions, Offers and Services",
    "actions.subtitle": "Discover our projects and initiatives",
    "actions.reserve.title": "Natural Reserve Creation",
    "actions.reserve.desc":
      "Preserving local biodiversity by creating protected spaces for fauna and flora.",
    "actions.agriculture.title": "Developing Sustainable Agriculture",
    "actions.agriculture.desc":
      "Promoting environmentally friendly and economically viable farming practices.",
    "actions.aquaculture.title": "Sustainable Aquaculture",
    "actions.aquaculture.desc":
      "Developing responsible aquaculture that preserves aquatic ecosystems.",
    "actions.production.title": "Production Enhancement",
    "actions.production.desc":
      "Transforming and enhancing local productions to create added value.",
    "actions.participate.title": "Invitation to Participate",
    "actions.participate.desc":
      "Join our volunteer community and contribute to our sustainable projects.",
    "actions.pachacoin.title": "Pachacoin",
    "actions.pachacoin.desc":
      "Our ecological currency to support the local economy and sustainable initiatives.",
    "actions.funded": "funds raised",

    // Actions Page
    "actionsPage.title": "Our Actions, Offers and Services",
    "actionsPage.subtitle": "Discover our projects and initiatives in detail",
    "actionsPage.reserve.detail":
      "Our ambition is to create natural reserves to preserve biodiversity. This initiative aims to compensate greenhouse gas emissions, whether for an individual, a family, or a company. Our consumption has disrupted natural spaces, and we seek to restore this balance. We work to preserve local resources and protect the wildlife and flora of our regions. Safeguarding our forests will also play a key role in preserving freshwater sources.",
    "actionsPage.agriculture.detail":
      "Our vision includes developing an agricultural system based on natural mimicry. We firmly believe that by integrating farming and livestock activities, we can increase yields while reducing our dependence on fossil fuels. Drawing inspiration from natural processes will help us be more efficient and produce higher quality food compared to agriculture using synthetic inputs. Increasing biodiversity in cultivation systems helps improve the health of the Earth, plants, and animals.",
    "actionsPage.production.detail":
      "We transform our products to expand our network and reduce energy losses. For example, with coffee, we enhance the seeds wrapped in mucilage and pulp. We aim to roast them locally, produce regional coffee, and revitalize tourism by reopening historical paths. This roasting would be powered by a methane digester using agricultural waste, making the process more ecological. The mucilage and pulp, rich in sugar, could also be transformed into wine or spirits, and their fermented byproducts used to make natural fertilizers to improve our yields. Although we start with coffee, other sectors may be developed in the future.",
    "actionsPage.aquaculture.detail":
      "Our region, rich in water, is also a cradle of fish production. Currently, the system is rudimentary and does not make use of waste, which constitutes a source of pollution. We see here an opportunity to transform this waste into resources, making our fish production more abundant and healthier.",
    "actionsPage.participate.text":
      "At Pachatopia, we firmly believe that every individual has the power to contribute positively to our common mission: preserving our environment and promoting a sustainable way of life. Whether you wish to actively engage in the field, support our initiatives through your purchases, or make a donation to strengthen our impact, we warmly invite you to join our committed community. Your support is essential to grow this project and extend our influence, to create a better future for all.",
    "actionsPage.association":
      "We are an association. We create natural reserves, promote agriculture and an eco-responsible way of life.",

    // Participate Page
    "participatePage.title": "How to Participate",
    "participatePage.tagline":
      "Plant sustainable actions: sponsor, help, inspire",
    "participatePage.support.title": "How Can You Support Us?",
    "participatePage.support.text":
      "At Pachatopia, we believe that every individual can play an essential role in environmental preservation and promoting a sustainable way of life.",
    "participatePage.forest.title": "Forest Sponsorship",
    "participatePage.forest.desc":
      "Each donation preserves 1 m² of forest, absorbing 2 kg of CO₂ per year. By sponsoring our forest, you offset your greenhouse gas emissions while supporting local biodiversity.",
    "participatePage.forest.price": "€1 = 1m² of preserved forest",
    "participatePage.coffee.title": "Coffee Sponsorship",
    "participatePage.coffee.desc":
      "With your contribution, you can sponsor a coffee plant.",
    "participatePage.coffee.price": "€20 = 0.5Kg of high-quality coffee",
    "participatePage.cocoa.title": "Cocoa Sponsorship",
    "participatePage.cocoa.desc":
      "With your contribution, you can sponsor half a cacao plant.",
    "participatePage.cocoa.price": "€20 = 0.5Kg of high-quality cocoa beans",
    "participatePage.habitat.title": "Ecological Habitat Development",
    "participatePage.habitat.desc":
      "Your donation will support the creation of ecological habitats, combining sustainable materials and green technologies. To promote eco-responsible tourism and reduce the ecological footprint. This project will be carried out hand in hand with local residents, respecting the natural environment and its ecosystems, while improving social well-being and local quality of life.",
    "participatePage.donation.title": "Free Donation",
    "participatePage.donation.desc":
      "Your donation will support the development of our roasting station and the exploration of new coffee valorization methods. These funds will be used to invest in innovative processing technologies and optimize our energy efficiency. Thanks to your support, we will be able to improve the quality of our production, reduce our ecological footprint, and promote sustainable practices in the coffee industry.",
    "participatePage.getInvolved": "Get Involved Today",

    // Currency Page
    "currencyPage.title": "Our Ecological Currency",
    "currencyPage.tagline":
      "PachaCoin: Where your investment blooms into green futures",
    "currencyPage.intro.title": "Introduction to PachaCoin",
    "currencyPage.intro.text":
      "PachaCoin is an innovative initiative aimed at supporting environmental preservation and promoting sustainable agriculture. Each PachaCoin (PC) is worth 60 CHF or EUR for the virtual currency and 70 CHF or EUR for the physical version. The funds are equally distributed between forest conservation, agricultural production, and ecological habitat development.",
    "currencyPage.howItWorks.title": "How Does PachaCoin Work?",
    "currencyPage.howItWorks.text":
      "Each PachaCoin is distributed in three equal parts: forest preservation, agricultural sponsorship, and ecological habitat creation.",
    "currencyPage.values.virtual": "Virtual version: 60 CHF/EUR",
    "currencyPage.values.physical": "Physical version: 70 CHF/EUR",
    "currencyPage.distribution.forest":
      "20 CHF or EUR for forest preservation: Each PC finances the preservation of 20 m² of forest, equivalent to absorbing 40 kg of CO₂ per year.",
    "currencyPage.distribution.agriculture":
      "20 CHF or EUR for agricultural production: Sponsorship of one coffee plant or half a cacao plant for 20 CHF or EUR. Receive a pound (±0.5 kg) of coffee or equivalent amount of cacao once production is reached.",
    "currencyPage.distribution.habitat":
      "20 CHF or EUR for ecological habitat development: Financing the creation of environmentally friendly housing for our local communities.",
    "currencyPage.transformation.title": "Transformation and Accumulation",
    "currencyPage.transformation.pc":
      "Used to sponsor and support ecological initiatives. The PC allows consuming agricultural products, which then transforms into PachaPeso (PP).",
    "currencyPage.transformation.pp":
      "Each PC transforms into PP after agricultural product consumption. PPs can be used at events on our protected lands for meals or to stay in lightweight, low environmental impact habitats.",
    "currencyPage.transformation.pd":
      "After using PPs, they transform into PDs, used for creating natural reserves dedicated to observation and environmental studies. Additionally, PD holders can vote on the next projects to develop.",
    "currencyPage.transparency.title": "Tracking and Transparency",
    "currencyPage.transparency.text":
      "An online platform allows tracking the evolution of contributions and projects funded by PachaCoins, PachaPesos, and PachaDreams. Contributors can see in real time the preservation, production, and development work funded by their contributions.",
    "currencyPage.incentives.title": "Incentives for Active Participation",
    "currencyPage.incentives.text":
      "Top contributors receive additional rewards, such as stays at Pachatopia with accommodation and meals included. Major contributors can obtain positions within the project, participating in decisions and the direction of Pachatopia.",
    "currencyPage.whyParticipate.title": "Why Participate?",
    "currencyPage.whyParticipate.impact": "Contribute to reducing greenhouse gases by financing forest preservation.",
    "currencyPage.whyParticipate.products": "Receive sustainably grown products like coffee and cacao.",
    "currencyPage.whyParticipate.habitat": "Participate in developing environmentally friendly housing for our local communities.",
    "currencyPage.whyParticipate.longterm": "Accumulate PachaPesos and PachaDreams, and use them to eat or stay at Pachatopia, with increased involvement opportunities for top contributors.",
    "currencyPage.future.title": "Future Projects",
    "currencyPage.future.coffee": "We focus first on coffee in Colombia, where we plan to create a small processing unit. This unit will allow us to select beans, ferment, roast, and dry them locally, ensuring optimal quality.",
    "currencyPage.future.forest": "Creating natural reserves is essential for protecting the forest. We invest in forest conservation in Colombia, contributing to biodiversity preservation and CO₂ emission reduction.",
    "currencyPage.future.europe": "In parallel, we seek to establish a unit in Europe to create forest-gardens. These spaces will serve as meeting places, sharing, and production, strengthening community bonds.",
    "currencyPage.howToParticipate.title": "How to Participate?",
    "currencyPage.howToParticipate.step1": "Buy PachaCoins: Contribute in CHF or EUR. Choose between virtual currency (60 CHF/EUR) or physical (70 CHF/EUR).",
    "currencyPage.howToParticipate.step2": "Track Contributions: Access our online platform to follow the evolution of your contributions.",
    "currencyPage.howToParticipate.step3": "Product Distribution: Pick up your products at our relay points or have them shipped to your home (shipping costs not included).",
    "currencyPage.vision.title": "Expansion Vision",
    "currencyPage.vision.text":
      "Our vision is to extend PachaCoin's impact internationally for a greener future.",

    // FAQ Page
    "faqPage.title": "FAQ",
    "faqPage.subtitle": "A Little Help Can Make A Big Change",
    "faqPage.q1": "Where can I find information?",
    "faqPage.a1":
      "You can find all information about our projects, actions, and how to participate on our website and social media. Don't hesitate to contact us directly by email or phone.",
    "faqPage.q2": "What are your terms and conditions?",
    "faqPage.a2":
      "Our terms are transparent and based on mutual respect. Every sponsorship and donation is used directly for our environmental projects. Contact us for more details.",
    "faqPage.q3": "Can I buy directly?",
    "faqPage.a3":
      "Yes, you can buy our products directly through our site or contact us for custom orders.",
    "faqPage.q4": "What kinds of payment do you accept?",
    "faqPage.a4":
      "We accept bank transfers, PayPal, and PachaCoins. For donations, all forms of contribution are welcome.",
    "faqPage.q5": "When do I receive my order?",
    "faqPage.a5":
      "Delivery times vary depending on the product and your location. Coffee and cocoa are seasonal products. Contact us for precise estimates.",

    // Info Page
    "infoPage.title": "Association Information",
    "infoPage.subtitle":
      "Pachatopia: Together, let's relearn the art of living in harmony.",
    "infoPage.founder.title": "Founding Text of PACHATOPIA",
    "infoPage.founder.text1":
      "We, members and founders of the association 'Pachatopia,' are conscious of the imperative need to preserve our precious environment and reconnect to a virtuous cycle like the living world. To this end, we want to promote an agricultural model respectful of nature, strengthen links between local producers and committed consumers, while supporting the development of creativity and well-being, which remain an essential part of a balanced life. We solemnly commit to pursuing a common vision for a sustainable future.",
    "infoPage.founder.text2":
      "Pachatopia, a name that embodies our deep commitment to the Earth, a name inspired by the Indigenous peoples who called it Pachamama, Mother Earth, our mother. Pachatopia finds its origin in a personal drive to relearn how to live in harmony with nature. I spearheaded the creation of this association with the aim of evolving with more coherence and protecting what is most important to me: life. How can we meet the needs of human beings while respecting the very essence of life?",
    "infoPage.founder.text3":
      "I had to act.",
    "infoPage.founder.text4":
      "I invested all my power of action into this project that places Pachamama at the center of my concerns, this generous Earth that lets us breathe, gives us drink, feeds us, gives life...",
    "infoPage.founder.text5":
      "Thus, I gathered my own funds and those of my loved ones to pursue this quest, a quest to reconnect with ancient teachings, a return to the essentials of our existence, to infuse family energy around a common project with a purpose that transcends our existence: to serve and protect life for the well-being of all. Today the time has come for this personal and family project to grow. The lands of Pachatopia are open spaces, sanctuaries of knowledge, places to learn, share, and grow together.",
    "infoPage.geography.title": "Geographic Focus",
    "infoPage.geography.text1":
      "Our association's actions will be concentrated in the hamlets of Agua Bonita and la Mirandita in the municipality of San Carlos Antioquia, Colombia: a magical land rich in natural resources that was devastated by an ideological war in the late 1990s. The village has been rebuilding since peace was established, with the traumas of a war still present in everyone's hearts and social and environmental challenges even more important for this type of developing village.",
    "infoPage.geography.text2":
      "The growing demand for raw materials from industrial countries destabilizes the country and its ecosystem. This country, once deeply connected to its Earth and all its magic, also sees its balance weakened by drug consumption reflecting a global malaise in our Western societies. Together, with our actions, we can transform this energy and participate in building lasting peace. Through deep knowledge of the ecosystem in which we live, we dream of a harmonious world in which 'nothing is lost, nothing is created, everything is transformed.'",
    "infoPage.aspiration":
      "In this spirit, our aspiration is to build a place of learning and sharing dedicated to the art of living in harmony with nature, where everyone can discover the essential lessons of sustainability, environmental protection, and sharing. This place will be a beacon of light for humanity, a place where future generations will learn the essential values of preserving our planet and living together.",
    "infoPage.inspiration":
      "Our Association draws its inspiration from unconditional love for planet Earth, our one and only home, as well as from the conviction that harmony between humanity and nature is essential for our collective well-being.",
    "infoPage.principles.intro":
      "With this in mind, we set forth the following founding principles:",
    "infoPage.principles.title": "Core Principles",
    "infoPage.principles.1":
      "Environmental protection. We commit to working tirelessly for the preservation of fragile ecosystems, the conservation of biodiversity, and the creation of natural reserves that will serve as sanctuaries for wildlife and flora.",
    "infoPage.principles.2":
      "Organic agriculture. We actively promote sustainable and organic agricultural practices, thus promoting the health of our soils, the quality of our harvests, and the health of our fellow citizens. We encourage the transition to environmentally friendly agriculture and the reduction of harmful chemical use.",
    "infoPage.principles.3":
      "Local economy and job creation. We believe in the power of the local economy. By supporting local producers and facilitating market access for their products, we contribute to the economic growth of our communities while creating sustainable jobs.",
    "infoPage.principles.4":
      "Producer-consumer rapprochement. We facilitate the connection between local producers and consumers concerned about their food. By shortening the supply chain, we encourage responsible consumption and direct support for our producers.",
    "infoPage.principles.5":
      "Educational tourism. We welcome people sensitive to our goals, we exchange about our production methods, we allow them to access more knowledge through active participation in activities inherent to the project.",
    "infoPage.closing":
      "Together, we commit to implementing these principles, raising society's awareness of the importance of sustainability, and working tirelessly for a future where harmony between humanity and nature is the norm. We invite all who share our vision to join us in this noble cause.",
    "infoPage.preamble":
      "This preamble reflects our commitment to creating a better, more balanced, and more sustainable world for present and future generations.",
    "infoPage.signature": "Benoit Nocart Founding member of the Pachatopia association",
    "infoPage.documents.title": "Key Documents",
    "infoPage.documents.1": "Founding Assembly",
    "infoPage.documents.2": "Association Bylaws",
    "infoPage.documents.3": "Coffee Sponsorship Account",

    // Contact Page
    "contactPage.title": "Contact",
    "contactPage.tagline": "Dream, act, transform.",
    "contactPage.form.title": "Send me a message",
    "contactPage.form.name": "Name",
    "contactPage.form.phone": "Phone",
    "contactPage.form.email": "Email",
    "contactPage.form.subject": "Subject",
    "contactPage.form.message": "Message",
    "contactPage.form.send": "Send message",
    "contactPage.europe.title": "Europe Representative",
    "contactPage.europe.name": "Benoit Nocart",
    "contactPage.europe.phone": "+33 6 31 66 36 24",
    "contactPage.europe.email": "info.pachatopia@gmail.com",
    "contactPage.europe.relay":
      "Relay points: Commune of Présilly (Haute Savoie, France); Commune of Gryon (Canton of Vaud, Switzerland) — for coffee",
    "contactPage.colombia.title": "Colombia Representative",
    "contactPage.colombia.name": "Victor Hugo Contreras Cano",
    "contactPage.colombia.phone": "+57 311 76 24348",
    "contactPage.colombia.address":
      "Pachatopia Agua Bonita Direction la Mirandita San Carlos, Antioquia en Colombie",
    "contactPage.social.title": "Follow us on social media",

    // Objectives
    "objectives.title": "Get Involved Today",
    "objectives.subtitle": "What we aim for",
    "objectives.1":
      "Develop eco-responsible infrastructure for a sustainable future",
    "objectives.2":
      "Encourage sustainable tourism that preserves the environment and supports local communities",
    "objectives.3":
      "Maintain the diversity of regional fauna and flora",
    "objectives.4":
      "With the Pachatopia community, support and participate in local sustainable initiatives",
    "objectives.5":
      "Promote an environmentally respectful culture",
    "objectives.6":
      "Promote local employment and support local workers",
    "objectives.7":
      "Work with respect for natural resources and the environment",

    // Testimonials
    "testimonials.title": "Volunteer Testimonials",
    "testimonials.subtitle": "What our volunteers say",

    // Call to Action
    "cta.title": "Join the Pachatopia adventure",
    "cta.text": "Together, let's regenerate the Earth and build a more harmonious future. Every action counts.",
    "cta.button": "Contact us",

    // Footer
    "footer.description": "Association for ecological regeneration and protection of life.",
    "footer.location": "San Carlos – Antioquia – Colombia",
    "footer.address": "Pachatopia Agua Bonita – San Carlos, Antioquia, Colombia",
    "footer.quicklinks": "Quick links",
    "footer.discover": "Discover",
    "footer.participate": "Participate",
    "footer.support": "Support",
    "footer.contact": "Contact",
    "footer.newsletter.title": "Newsletter",
    "footer.newsletter.text": "Stay informed about our progress and projects.",
    "footer.newsletter.placeholder": "Your email address",
    "footer.newsletter.button": "Subscribe",
    "footer.rights": "All rights reserved",

    // ── Unified Homepage Sections ──

    // Land Reborn
    "home.land.title": "A land reborn",
    "home.land.p1": "San Carlos is a region of great natural beauty, but one deeply marked by the history of the Colombian armed conflict.",
    "home.land.p2": "Today, the inhabitants are rebuilding their future. Nature is regrowing. The rivers continue to flow. The forests are gradually reclaiming their place.",
    "home.land.p3": "At Pachatopia, we believe that the regeneration of a territory is ecological, human, and cultural all at once. By caring for the living world, we also help rebuild bonds between people.",
    "home.land.imageAlt": "San Carlos landscape",

    // Living Laboratory (6 cards)
    "home.lab.title": "The Living Laboratory",
    "home.lab.desc": "Pachatopia is a place of experimentation where we learn directly from nature, building systems that produce while regenerating ecosystems. Every day, we observe, experiment, share, and improve our practices.",
    "home.lab.card1.title": "Regenerative agroforestry",
    "home.lab.card1.desc": "Producing while regenerating soils, inspired by how natural ecosystems function.",
    "home.lab.card2.title": "Coffee and cacao",
    "home.lab.card2.desc": "Crops in agroforestry transition, cultivated in respect of natural balances.",
    "home.lab.card3.title": "Freedom spaces for life",
    "home.lab.card3.desc": "Areas left to nature, so biodiversity can continue to evolve freely.",
    "home.lab.card4.title": "Biodiversity protection",
    "home.lab.card4.desc": "Preserving the animal and plant species that make up the richness of the territory.",
    "home.lab.card5.title": "Water preservation",
    "home.lab.card5.desc": "Protecting springs, rivers, and water cycles on which all life depends.",
    "home.lab.card6.title": "Cooperation with communities",
    "home.lab.card6.desc": "Working with local residents to build a shared future.",
    "home.lab.footer": "Our ambition is not only to produce differently. We aim to demonstrate that it is possible to reconcile nature with human activities for future generations.",

    // Growing Community
    "home.community.title": "A growing community",
    "home.community.p1": "The Pachatopia Movement seeks to awaken guardians of life — women and men who choose to protect the Earth, water, forests, and all forms of life on which our shared future depends.",
    "home.community.p2": "We do not ask the world to believe in our dream. We invite everyone to plant their own seed of hope in service of life.",
    "home.community.subtitle": "One direction, a thousand ways to act",
    "home.community.p3": "There is no single way to contribute to life.",
    "home.community.p4": "Every person has a unique story, talents, and sensibility.",
    "home.community.p5": "The Pachatopia Movement exists so that everyone can bring the best of themselves in service of the common good.",
    "home.community.pill1": "A tree",
    "home.community.pill2": "An idea",
    "home.community.pill3": "Time",
    "home.community.pill4": "A skill",
    "home.community.pill5": "A smile",
    "home.community.pill6": "A meeting",
    "home.community.closing": "Everyone can bring something unique",

    // Join the Movement (CTA cards)
    "home.join.title": "Join the Movement",
    "home.join.subtitle": "Today, there are many ways to participate.",
    "home.join.card1.title": "Become a Guardian of Life",
    "home.join.card1.sub": "With the Pachatopia Passport",
    "home.join.card2.title": "Sponsor a crop",
    "home.join.card2.sub": "In agroforestry transition",
    "home.join.card3.title": "Sponsor freedom spaces for life",
    "home.join.card3.sub": "",
    "home.join.card4.title": "Come live the experience",
    "home.join.card4.sub": "On the ground",
    "home.join.card5.title": "Become a partner",
    "home.join.card5.sub": "Of the Movement",
    "home.join.card6.title": "Inspire those around you",
    "home.join.card6.sub": "Become an ambassador",
    "home.join.footer1": "A forest never grows from a single seed. Neither does a movement.",
    "home.join.footer2": "Life is waiting for all of us.",
    "home.join.footer3": "Your turn to plant a seed of hope.",

    // Ecosystem (5 cards)
    "home.ecosystem.title": "The Pachatopia ecosystem",
    "home.ecosystem.subtitle": "Pachatopia is designed as a place where different activities support each other.",
    "home.ecosystem.card1": "Nature reserve",
    "home.ecosystem.card2": "Coffee and cacao",
    "home.ecosystem.card3": "Tree nursery",
    "home.ecosystem.card4": "Visitor space",
    "home.ecosystem.card5": "Local cuisine",
    "home.ecosystem.footer": "A project that seeks to demonstrate that it is possible to produce, protect and share in harmony with nature.",

    // Living Project
    "home.living.title": "A living project",
    "home.living.p1": "Pachatopia is an evolving project.",
    "home.living.p2": "Every year, we plant trees, restore new plots and develop initiatives to strengthen biodiversity and territorial resilience.",
    "home.living.quote": "\"Little by little, a forest and a regenerative ecosystem are taking shape.\"",

    // Conviction
    "home.conviction.title": "Our conviction",
    "home.conviction.intro": "We believe that…",
    "home.conviction.card1": "Regenerating the Earth can help regenerate human relationships",
    "home.conviction.card2": "Planting trees is an act of hope",
    "home.conviction.card3": "Every positive action can inspire a broader change",

    // Enter as you are
    "home.enter.title": "Enter as you are.",
    "home.enter.observe": "Observe",
    "home.enter.learn": "Learn",
    "home.enter.transmit": "Transmit",
    "home.enter.leave": "And leave the Earth a little more alive than you found it.",
    "home.enter.closing": "We learn from life.",
  },
  es: {
    "nav.home": "Inicio",
    "nav.vision": "El Movimiento",
    "nav.history": "Nuestra historia",
    "nav.actions": "El Laboratorio de lo Vivo",
    "nav.coffee": "El café",
    "nav.support": "Participar",
    "nav.passeport": "Pasaporte Pachatopia",
    "nav.parrainage": "Apadrinamiento de cultivo",
    "nav.parrainage_espaces": "Apadrinamiento de espacios de libertad",
    "nav.partenaire": "Convertirse en socio",
    "nav.ambassadeur": "Convertirse en embajador",
    "nav.depots_ventes": "Puntos de venta / relevo",
    "nav.volontariat": "Voluntariado",
    "nav.volontariat_experience": "Voluntariado / Vivir la experiencia",
    "nav.contact_faq": "Contacto + FAQ",
    "nav.experience": "Venir a vivir la experiencia",
    "nav.volunteer": "Participar / voluntariado",
    "nav.faq": "FAQ",
    "nav.contact": "Contacto",
    "hero.welcome": "Pachatopia",
    "hero.tagline": "Retomar nuestro lugar junto a lo vivo.",
    "hero.taglineSub": "¿Y si pudiéramos dejar la Tierra más viva de lo que la encontramos?",
    "hero.description": `Un movimiento de mujeres y hombres que eligen hacer crecer lo vivo en sí mismos, a su alrededor, y transmitirlo a las generaciones futuras.
El Movimiento Pachatopia nace de una convicción sencilla: el ser humano puede volver a ser una fuerza de regeneración para lo vivo.
En San Carlos, en el corazón de las montañas colombianas, experimentamos una manera de vivir que busca reconciliar a los seres humanos con lo vivo.

Aprendemos de lo vivo.

Inspirándonos en lo vivo, restauramos los suelos, desarrollamos sistemas agroforestales, protegemos la biodiversidad y creamos vínculos duraderos entre el ser humano y la naturaleza.

Pachatopia es más que un lugar.
Es una invitación.

Una invitación a observar, aprender, transmitir y actuar para construir un futuro en el que lo vivo recupere todo su lugar.
Bienvenidos al Movimiento Pachatopia.`,
    "hero.cta.discover": "Descubrir el movimiento",
    "hero.cta.support": "Apoyar Pachatopia",
    "about.title": "En Pachatopia",
    "about.subtitle": "¿Quiénes somos?",
    "about.text1": "En Pachatopia, inspirada por la sabiduría de los pueblos amerindios y su profundo respeto por la Pachamama, la Madre Tierra, nuestra asociación trabaja por un modelo agrícola y un modo de vida que valoran la naturaleza.",
    "about.text2": "Nuestra misión es simple pero ambiciosa: crear un futuro sostenible en armonía con su entorno. Pachatopia es más que un proyecto: es un movimiento para reaprender a vivir en armonía con la Tierra. Juntos, podemos construir un mundo donde la sostenibilidad y el bienestar colectivo estén en el centro de cada acción. Únanse a nosotros en esta búsqueda para proteger la vida y crear un futuro armonioso para las generaciones venideras.",
    "about.association": "Somos una asociación. Creamos reservas naturales, promovemos la agricultura y un modo de vida ecorresponsable.",
    "aboutPage.title": "Acerca de nosotros",
    "aboutPage.tagline": "Soñemos, actuemos, transformemos",
    "aboutPage.vision.title": "Nuestra visión",
    "aboutPage.vision.intro": "Pachatopia nació de la convicción de que debemos vivir de acuerdo con nuestros valores fundamentales:",
    "aboutPage.values.love.title": "Amor",
    "aboutPage.values.love.desc": "Es la base de todas nuestras acciones e interacciones, y motiva nuestro compromiso con la naturaleza y con los demás.",
    "aboutPage.values.benevolence.title": "Benevolencia",
    "aboutPage.values.benevolence.desc": "Guía nuestro enfoque hacia las personas y el entorno, promoviendo acciones positivas y constructivas.",
    "aboutPage.values.altruism.title": "Altruismo",
    "aboutPage.values.altruism.desc": "Este valor nos impulsa a pensar en el bienestar de los demás y a actuar de manera desinteresada por el beneficio colectivo.",
    "aboutPage.mission": "Estos tres valores encapsulan la esencia de Pachatopia y son esenciales para crear un impacto duradero y positivo. Ante los desafíos ambientales y sociales, decidimos actuar por un mundo mejor, comprometiéndonos a proteger nuestro planeta y promover un modelo económico sostenible.",
    "metrics.projects": "Proyectos desarrollados",
    "metrics.countries": "Países en el mundo",
    "metrics.volunteers": "Voluntarios comprometidos",
    "metrics.jobs": "empleos creados",
    "actions.title": "Nuestras acciones, ofertas y servicios",
    "actions.subtitle": "Descubran nuestros proyectos e iniciativas",
    "actions.reserve.title": "Creación de una reserva natural",
    "actions.reserve.desc": "Preservar la biodiversidad local creando espacios protegidos para la fauna y la flora.",
    "actions.agriculture.title": "Desarrollar una agricultura sostenible",
    "actions.agriculture.desc": "Promover prácticas agrícolas respetuosas con el medio ambiente y económicamente viables.",
    "actions.aquaculture.title": "Acuicultura sostenible",
    "actions.aquaculture.desc": "Desarrollar una acuicultura responsable que preserve los ecosistemas acuáticos.",
    "actions.production.title": "Valorización de las producciones",
    "actions.production.desc": "Transformar y valorizar las producciones locales para crear valor añadido.",
    "actions.participate.title": "Invitación a participar",
    "actions.participate.desc": "Únanse a nuestra comunidad de voluntarios y contribuyan a nuestros proyectos sostenibles.",
    "actions.pachacoin.title": "Pachacoin",
    "actions.pachacoin.desc": "Nuestra moneda ecológica para apoyar la economía local y las iniciativas sostenibles.",
    "actions.funded": "fondos recaudados",
    "actionsPage.title": "Nuestras acciones, ofertas y servicios",
    "actionsPage.subtitle": "Descubran en detalle nuestros proyectos e iniciativas",
    "actionsPage.reserve.detail": "Nuestra ambición es crear reservas naturales para preservar la biodiversidad. Esta iniciativa tiene por objetivo compensar las emisiones de gases de efecto invernadero, ya sea para un particular, una familia o una empresa. Nuestro consumo ha desequilibrado los espacios naturales, y buscamos restablecer ese equilibrio. Trabajamos para preservar los recursos locales y proteger la fauna y la flora de nuestras regiones. La salvaguarda de nuestros bosques también desempeñará un papel clave en la preservación de las fuentes de agua dulce.",
    "actionsPage.agriculture.detail": "Nuestra visión incluye el desarrollo de un sistema agrícola basado en el mimetismo natural. Creemos firmemente que al integrar las actividades agrícolas y de ganadería, podremos aumentar los rendimientos reduciendo al mismo tiempo nuestra dependencia de las energías fósiles. Inspirarnos en los procesos naturales nos ayudará a ser más eficientes y a producir alimentos de mejor calidad en comparación con una agricultura que usa insumos de síntesis. Aumentar la biodiversidad en los sistemas de cultivo permite mejorar la salud de la Tierra, de las plantas y de los animales.",
    "actionsPage.production.detail": "Transformamos nuestros productos para ampliar nuestra red y reducir las pérdidas energéticas. Por ejemplo, para el café, valorizamos las semillas envueltas en mucílago y pulpa. Deseamos torrefactarlas localmente, producir un café regional y dinamizar el turismo con la reapertura de caminos históricos. Esta torrefacción se alimentaría con un digestor de metano que use residuos agrícolas, haciendo el proceso más ecológico. El mucílago y la pulpa, ricos en azúcar, también podrían transformarse en vino o aguardiente, y sus subproductos fermentados servir para fabricar abonos naturales y mejorar nuestros rendimientos. Aunque empecemos por el café, otros sectores podrán valorizarse en el futuro.",
    "actionsPage.aquaculture.detail": "Nuestra región, rica en agua, es también una cuna de la producción piscícola. Actualmente, el sistema es rudimentario y no valoriza los residuos, lo que constituye una fuente de contaminación. Vemos aquí una oportunidad de transformar esos residuos en recursos, haciendo nuestras producciones piscícolas más abundantes y más sanas.",
    "actionsPage.participate.text": "En Pachatopia, creemos firmemente que cada persona tiene el poder de contribuir positivamente a nuestra misión común: preservar nuestro entorno y promover un modo de vida sostenible. Ya sea que deseen comprometerse activamente en el terreno, apoyar nuestras iniciativas con sus compras o hacer un donativo para reforzar nuestro impacto, les invitamos cordialmente a unirse a nuestra comunidad comprometida. Su apoyo es esencial para hacer crecer este proyecto y ampliar nuestra influencia, a fin de crear un futuro mejor para todos.",
    "actionsPage.association": "Somos una asociación. Creamos reservas naturales, promovemos la agricultura y un modo de vida ecorresponsable.",
    "participatePage.title": "Cómo participar",
    "participatePage.tagline": "Siembren acciones sostenibles: apadrinen, ayuden, inspiren",
    "participatePage.support.title": "¿Cómo pueden apoyarnos?",
    "participatePage.support.text": "En Pachatopia, creemos que cada persona puede desempeñar un papel esencial en la preservación del medio ambiente y la promoción de un modo de vida sostenible.",
    "participatePage.forest.title": "Apadrinamiento del bosque",
    "participatePage.forest.desc": "Cada donativo permite preservar 1 m² de bosque, absorbiendo así 2 kg de CO₂ al año. Al apadrinar nuestro bosque, compensan sus emisiones de gases de efecto invernadero y apoyan la biodiversidad local.",
    "participatePage.forest.price": "1 € = 1 m² de bosque preservado",
    "participatePage.coffee.title": "Apadrinamiento del café",
    "participatePage.coffee.desc": "Con su contribución, pueden apadrinar un pie de cafeto.",
    "participatePage.coffee.price": "20 € = 0,5 kg de café de alta calidad",
    "participatePage.cocoa.title": "Apadrinamiento del cacao",
    "participatePage.cocoa.desc": "Con su contribución, pueden apadrinar medio pie de cacao.",
    "participatePage.cocoa.price": "20 € = 0,5 kg de granos de cacao de alta calidad",
    "participatePage.habitat.title": "Desarrollo de hábitats ecológicos",
    "participatePage.habitat.desc": "Su donativo apoyará la creación de hábitats ecológicos, combinando materiales sostenibles y tecnologías verdes, para promover un turismo ecorresponsable y reducir la huella ecológica. Este proyecto se llevará a cabo de la mano con los habitantes de la región, respetando el entorno natural y sus ecosistemas, y mejorando el bienestar social y la calidad de vida local.",
    "participatePage.donation.title": "Donación libre",
    "participatePage.donation.desc": "Su donación apoyará el desarrollo de nuestra estación de torrefacción y la exploración de nuevos métodos de valorización del café. Estos fondos se usarán para invertir en tecnologías de transformación innovadoras y optimizar nuestra eficiencia energética. Gracias a su apoyo, podremos no solo mejorar la calidad de nuestra producción, sino también reducir nuestra huella ecológica y promover prácticas sostenibles en la industria del café.",
    "participatePage.getInvolved": "Implíquense desde hoy",
    "currencyPage.title": "Nuestra moneda ecológica",
    "currencyPage.tagline": "PachaCoin: donde su inversión florece en futuros verdes",
    "currencyPage.intro.title": "Introducción al PachaCoin",
    "currencyPage.intro.text": "El PachaCoin es una iniciativa innovadora para apoyar la preservación del medio ambiente y promover una agricultura sostenible. Cada PachaCoin (PC) vale 60 CHF o EUR para la moneda virtual y 70 CHF o EUR para la versión material. Los fondos se reparten equitativamente entre la conservación del bosque, la producción agrícola y el desarrollo de hábitats ecológicos.",
    "currencyPage.howItWorks.title": "¿Cómo funciona el PachaCoin?",
    "currencyPage.howItWorks.text": "Cada PachaCoin se distribuye en tres partes iguales: preservación forestal, apadrinamiento agrícola y creación de hábitats ecológicos.",
    "currencyPage.values.virtual": "Versión virtual: 60 CHF/EUR",
    "currencyPage.values.physical": "Versión física: 70 CHF/EUR",
    "currencyPage.distribution.forest": "20 CHF o EUR para la preservación del bosque: cada PC financia la preservación de 20 m² de bosque, equivalentes a la absorción de 40 kg de CO₂ al año.",
    "currencyPage.distribution.agriculture": "20 CHF o EUR para la producción agrícola: apadrinamiento de un pie de café o de medio pie de cacao por 20 CHF o EUR. Reciban una libra (±0,5 kg) de café o una cantidad equivalente de cacao una vez alcanzada la producción.",
    "currencyPage.distribution.habitat": "20 CHF o EUR para el desarrollo de hábitats ecológicos: financiar la creación de viviendas respetuosas con el medio ambiente para nuestras comunidades locales.",
    "currencyPage.transformation.title": "Transformación y acumulación",
    "currencyPage.transformation.pc": "Se usa para apadrinar y apoyar las iniciativas ecológicas. El PC permite consumir las producciones agrícolas, lo que lo transforma después en PachaPeso (PP).",
    "currencyPage.transformation.pp": "Cada PC se transforma en PP tras el consumo del producto agrícola. Los PP pueden usarse en eventos en nuestros terrenos protegidos para comidas o para alojarse en hábitats ligeros de bajo impacto ambiental.",
    "currencyPage.transformation.pd": "Tras el uso de los PP, estos se transforman en PD, usados para la creación de reservas naturales dedicadas a la observación y a los estudios ambientales. Además, los titulares de PD pueden votar sobre los próximos proyectos a desarrollar.",
    "currencyPage.transparency.title": "Seguimiento y transparencia",
    "currencyPage.transparency.text": "Una plataforma en línea permite seguir la evolución de las contribuciones y de los proyectos financiados por los PachaCoins, PachaPesos y PachaDreams. Los contribuyentes pueden ver en tiempo real los trabajos de preservación, producción y desarrollo financiados por sus aportes.",
    "currencyPage.incentives.title": "Incentivos para la participación activa",
    "currencyPage.incentives.text": "Los mayores contribuyentes reciben recompensas adicionales, como estancias en Pachatopia con alojamiento y comida incluidos. Los contribuyentes principales pueden obtener un lugar en el proyecto, participando en las decisiones y en la dirección de Pachatopia.",
    "currencyPage.whyParticipate.title": "¿Por qué participar?",
    "currencyPage.whyParticipate.impact": "Contribuyan a la reducción de los gases de efecto invernadero financiando la preservación de los bosques.",
    "currencyPage.whyParticipate.products": "Reciban productos cultivados de manera sostenible, como el café y el cacao.",
    "currencyPage.whyParticipate.habitat": "Participen en el desarrollo de viviendas respetuosas con el medio ambiente para nuestras comunidades locales.",
    "currencyPage.whyParticipate.longterm": "Acumulen PachaPesos y PachaDreams, y úsenlos para comer o alojarse en Pachatopia, con oportunidades de mayor implicación para los mayores contribuyentes.",
    "currencyPage.future.title": "Proyectos futuros",
    "currencyPage.future.coffee": "Nos concentramos primero en el café en Colombia, donde prevemos crear una pequeña unidad de transformación. Esta unidad nos permitirá seleccionar los granos, fermentarlos, torrefactarlos y secarlos localmente, garantizando así una calidad óptima.",
    "currencyPage.future.forest": "La creación de reservas naturales es esencial para proteger el bosque. Invertimos en la conservación de los bosques en Colombia, contribuyendo a la preservación de la biodiversidad y a la reducción de las emisiones de CO₂.",
    "currencyPage.future.europe": "En paralelo, buscamos establecer una unidad en Europa para crear jardines-bosque. Estos espacios servirán de lugares de encuentro, de intercambio y de producción, reforzando los lazos comunitarios.",
    "currencyPage.howToParticipate.title": "¿Cómo participar?",
    "currencyPage.howToParticipate.step1": "Comprar PachaCoins: contribuyan en CHF o en EUR. Elijan entre la moneda virtual (60 CHF/EUR) o material (70 CHF/EUR).",
    "currencyPage.howToParticipate.step2": "Seguimiento de las contribuciones: accedan a nuestra plataforma en línea para seguir la evolución de sus aportes.",
    "currencyPage.howToParticipate.step3": "Distribución de los productos: recojan sus productos en nuestros puntos de relevo o háganlos enviar a domicilio (gastos de envío no incluidos).",
    "currencyPage.vision.title": "Visión de crecimiento",
    "currencyPage.vision.text": "Nuestra visión es extender el impacto del PachaCoin a escala internacional para un futuro más verde.",
    "faqPage.title": "FAQ",
    "faqPage.subtitle": "Una pequeña ayuda puede generar un gran cambio",
    "faqPage.q1": "¿Dónde puedo encontrar información?",
    "faqPage.a1": "Pueden encontrar toda la información sobre nuestros proyectos, nuestras acciones y cómo participar en nuestro sitio web y redes sociales. No duden en contactarnos directamente por correo o teléfono.",
    "faqPage.q2": "¿Cuáles son sus condiciones generales?",
    "faqPage.a2": "Nuestras condiciones son transparentes y se basan en el respeto mutuo. Cada apadrinamiento y donativo se usa directamente para nuestros proyectos ambientales. Contáctennos para más detalles.",
    "faqPage.q3": "¿Puedo comprar directamente?",
    "faqPage.a3": "Sí, pueden comprar nuestros productos directamente a través de nuestro sitio o contactarnos para pedidos personalizados.",
    "faqPage.q4": "¿Qué tipos de pago aceptan?",
    "faqPage.a4": "Aceptamos transferencias bancarias, PayPal y PachaCoins. Para los donativos, todas las formas de contribución son bienvenidas.",
    "faqPage.q5": "¿Cuándo recibo mi pedido?",
    "faqPage.a5": "Los plazos de entrega varían según el producto y su ubicación. El café y el cacao son productos de temporada. Contáctennos para estimaciones precisas.",
    "infoPage.title": "Información de la asociación",
    "infoPage.subtitle": "Pachatopia: juntos, reaprendamos el arte de vivir en armonía.",
    "infoPage.founder.title": "Texto fundador de PACHATOPIA",
    "infoPage.founder.text1": "Nosotros, miembros y fundadores de la asociación «Pachatopia», somos conscientes de la imperiosa necesidad de preservar nuestro precioso entorno y de reconectarnos a un ciclo virtuoso como el del mundo vivo. Para ello queremos favorecer un modelo agrícola respetuoso con la naturaleza, reforzar los lazos entre los productores locales y los consumidores comprometidos, y apoyar el desarrollo de la creatividad y del bienestar, que siguen siendo una parte esencial del equilibrio de una vida. Nos comprometemos solemnemente a perseguir una visión común por un futuro sostenible.",
    "infoPage.founder.text2": "Pachatopia, un nombre que encarna nuestro profundo compromiso con la Tierra, un nombre inspirado en los pueblos amerindios que la llamaban la Pachamama, la Madre Tierra, nuestra madre a todos. Pachatopia encuentra su origen en un impulso personal de reaprender a vivir en armonía con la naturaleza. Impulsé la creación de esta asociación con el fin de evolucionar con más coherencia y proteger lo que más me importa: la vida. ¿Cómo responder a las necesidades de los seres humanos respetando la esencia misma de la vida?",
    "infoPage.founder.text3": "Tenía que actuar.",
    "infoPage.founder.text4": "Invertí todo mi poder de acción en este proyecto que pone a la Pachamama en el centro de mis preocupaciones, esta Tierra tan generosa que nos hace respirar, nos da de beber, nos alimenta, da la vida…",
    "infoPage.founder.text5": "Así reuní mis fondos propios y los de mis seres queridos para proseguir esta búsqueda, una búsqueda para reencontrar las enseñanzas antiguas, un regreso a lo esencial de nuestra existencia, e infundir la energía familiar alrededor de un proyecto común con un propósito que supera nuestra existencia: servir y proteger la vida por el bienestar de todos. Hoy ha llegado la hora de que este proyecto personal y familiar crezca. Las tierras de Pachatopia son espacios abiertos, santuarios de conocimiento, lugares para aprender, compartir y crecer juntos.",
    "infoPage.geography.title": "Enfoque geográfico",
    "infoPage.geography.text1": "Las acciones de nuestra asociación se concentrarán en las aldeas de Agua Bonita y la Mirandita en el municipio de San Carlos, Antioquia, Colombia: una tierra mágica, rica en recursos naturales, devastada por una guerra ideológica a finales de los años 90. El pueblo se reconstruye desde que la paz pudo instalarse, con los traumas de una guerra aún presentes en el corazón de todos y con retos sociales y ambientales aún más importantes para este tipo de pueblo en desarrollo.",
    "infoPage.geography.text2": "La demanda creciente de materias primas por los países industriales desestabiliza el país y su ecosistema. Este país, antaño profundamente conectado con su Tierra y toda su magia, ve también su equilibrio fragilizado por el consumo de estupefacientes, que refleja un malestar global de nuestras sociedades occidentales. Juntos, con nuestras acciones, podemos transformar esa energía y participar en la construcción de una paz duradera. Gracias a un conocimiento profundo del ecosistema en el que vivimos, soñamos con un mundo armonioso en el que «nada se pierde, nada se crea, todo se transforma».",
    "infoPage.aspiration": "En ese espíritu, nuestra aspiración es construir un lugar de aprendizaje e intercambio dedicado al arte de vivir en armonía con la naturaleza, donde cada persona pueda descubrir las lecciones esenciales de la sostenibilidad, la protección del medio ambiente y el compartir. Este lugar será un faro de luz para la humanidad, un lugar donde las generaciones futuras aprenderán los valores esenciales de la preservación de nuestro planeta y de la convivencia.",
    "infoPage.inspiration": "Nuestra asociación se inspira en el amor incondicional hacia el planeta Tierra, nuestro único hogar, y en la convicción de que la armonía entre la humanidad y la naturaleza es esencial para nuestro bienestar colectivo.",
    "infoPage.principles.intro": "Con esa óptica, enunciamos los siguientes principios fundadores:",
    "infoPage.principles.title": "Principios fundamentales",
    "infoPage.principles.1": "Protección del medio ambiente. Nos comprometemos a trabajar sin descanso por la preservación de los ecosistemas frágiles, la conservación de la biodiversidad y la creación de reservas naturales que servirán de santuarios para la fauna y la flora.",
    "infoPage.principles.2": "Agricultura ecológica. Promovemos activamente prácticas agrícolas sostenibles y ecológicas, favoreciendo así la salud de nuestros suelos, la calidad de nuestras cosechas y la salud de nuestros conciudadanos. Alentamos la transición hacia una agricultura respetuosa con el medio ambiente y la reducción del uso de productos químicos nocivos.",
    "infoPage.principles.3": "Economía local y creación de empleos. Creemos en la potencia de la economía local. Al apoyar a los productores locales y favorecer el acceso a los mercados para sus productos, contribuimos al crecimiento económico de nuestras comunidades y creamos empleos sostenibles.",
    "infoPage.principles.4": "Acercamiento productores-consumidores. Facilitamos la conexión entre los productores locales y los consumidores preocupados por su alimentación. Al acortar la cadena de suministro, alentamos un consumo responsable y un apoyo directo a nuestros productores.",
    "infoPage.principles.5": "Turismo educativo. Acogemos a las personas sensibles a nuestros objetivos, intercambiamos sobre nuestros métodos de producción y les permitimos acceder a más conocimientos mediante una participación activa en las actividades inherentes al proyecto.",
    "infoPage.closing": "Juntos, nos comprometemos a aplicar estos principios, a sensibilizar a la sociedad sobre la importancia de la sostenibilidad y a trabajar sin descanso por un futuro en el que la armonía entre el ser humano y la naturaleza sea la norma. Invitamos a todos quienes comparten nuestra visión a unirse a nosotros en esta noble causa.",
    "infoPage.preamble": "Este preámbulo refleja nuestro compromiso de crear un mundo mejor, más equilibrado y más sostenible para las generaciones presentes y futuras.",
    "infoPage.signature": "Benoit Nocart, miembro fundador de la asociación Pachatopia",
    "infoPage.documents.title": "Documentos clave",
    "infoPage.documents.1": "Asamblea constitutiva",
    "infoPage.documents.2": "Estatutos de la asociación",
    "infoPage.documents.3": "Cuenta de apadrinamiento de café",
    "contactPage.title": "Contacto",
    "contactPage.tagline": "Soñemos, actuemos, transformemos.",
    "contactPage.form.title": "Envíame un mensaje",
    "contactPage.form.name": "Nombre",
    "contactPage.form.phone": "Teléfono",
    "contactPage.form.email": "Correo electrónico",
    "contactPage.form.subject": "Asunto",
    "contactPage.form.message": "Mensaje",
    "contactPage.form.send": "Enviar el mensaje",
    "contactPage.europe.title": "Representante Europa",
    "contactPage.europe.name": "Benoit Nocart",
    "contactPage.europe.phone": "+33 6 31 66 36 24",
    "contactPage.europe.email": "info.pachatopia@gmail.com",
    "contactPage.europe.relay": "Puntos de relevo: Comuna de Présilly (Alta Saboya, Francia); Comuna de Gryon (Cantón de Vaud, Suiza) — para el café",
    "contactPage.colombia.title": "Representante Colombia",
    "contactPage.colombia.name": "Victor Hugo Contreras Cano",
    "contactPage.colombia.phone": "+57 311 76 24348",
    "contactPage.colombia.address": "Pachatopia Agua Bonita, dirección la Mirandita, San Carlos, Antioquia, Colombia",
    "contactPage.social.title": "Síguenos en las redes sociales",
    "objectives.title": "Implíquense desde hoy",
    "objectives.subtitle": "Lo que buscamos",
    "objectives.1": "Desarrollar infraestructuras ecorresponsables para un futuro sostenible",
    "objectives.2": "Fomentar un turismo sostenible que preserve el medio ambiente y apoye a las comunidades locales",
    "objectives.3": "Mantener la diversidad de la fauna y la flora de la región",
    "objectives.4": "Con la comunidad Pachatopia, apoyar y participar en iniciativas locales sostenibles",
    "objectives.5": "Promover una cultura respetuosa con el medio ambiente",
    "objectives.6": "Promover el empleo local y apoyar a los trabajadores locales",
    "objectives.7": "Trabajar con respeto por los recursos naturales y el medio ambiente",
    "testimonials.title": "Palabras de voluntarios",
    "testimonials.subtitle": "Lo que dicen nuestros voluntarios",
    "cta.title": "Únanse a la aventura Pachatopia",
    "cta.text": "Juntos, regeneremos la Tierra y construyamos un futuro más armonioso. Cada gesto cuenta.",
    "cta.button": "Contactarnos",
    "footer.description": "Asociación para la regeneración ecológica y la protección de lo vivo.",
    "footer.location": "San Carlos – Antioquia – Colombia",
    "footer.address": "Pachatopia Agua Bonita – San Carlos, Antioquia, Colombia",
    "footer.quicklinks": "Enlaces rápidos",
    "footer.discover": "Descubrir",
    "footer.participate": "Participar",
    "footer.support": "Apoyar",
    "footer.contact": "Contacto",
    "footer.newsletter.title": "Boletín",
    "footer.newsletter.text": "Manténganse informados de nuestros avances y proyectos.",
    "footer.newsletter.placeholder": "Su correo electrónico",
    "footer.newsletter.button": "Suscribirse",
    "footer.rights": "Todos los derechos reservados",
  
    "home.community.closing": "Cada uno puede aportar algo único",
    "home.community.p1": "El Movimiento Pachatopia desea despertar guardianes de lo vivo: mujeres y hombres que eligen proteger la Tierra, el agua, los bosques y todas las formas de vida de las que depende nuestro futuro común.",
    "home.community.p2": "No pedimos al mundo que crea en nuestro sueño. Invitamos a cada persona a plantar su propia semilla de esperanza al servicio de lo vivo.",
    "home.community.p3": "No existe una sola manera de contribuir a lo vivo.",
    "home.community.p4": "Cada persona tiene una historia, talentos y una sensibilidad que le son propios.",
    "home.community.p5": "El Movimiento Pachatopia existe para permitir que cada uno aporte lo mejor de sí mismo al servicio del bien común.",
    "home.community.pill1": "Un árbol",
    "home.community.pill2": "Una idea",
    "home.community.pill3": "Tiempo",
    "home.community.pill4": "Una competencia",
    "home.community.pill5": "Una sonrisa",
    "home.community.pill6": "Un encuentro",
    "home.community.subtitle": "Una misma dirección, mil formas de actuar",
    "home.community.title": "Una comunidad que crece",
    "home.conviction.card1": "Regenerar la Tierra puede ayudar a regenerar las relaciones humanas",
    "home.conviction.card2": "Plantar árboles es un acto de esperanza",
    "home.conviction.card3": "Cada acción positiva puede inspirar un cambio más amplio",
    "home.conviction.intro": "Creemos que…",
    "home.conviction.title": "Nuestra convicción",
    "home.ecosystem.card1": "Reserva natural",
    "home.ecosystem.card2": "Café y cacao",
    "home.ecosystem.card3": "Vivero de árboles",
    "home.ecosystem.card4": "Espacio de acogida",
    "home.ecosystem.card5": "Cocina local",
    "home.ecosystem.footer": "Un proyecto que busca demostrar que es posible producir, proteger y compartir en armonía con la naturaleza.",
    "home.ecosystem.subtitle": "Pachatopia está concebido como un lugar donde las distintas actividades se apoyan mutuamente.",
    "home.ecosystem.title": "El ecosistema Pachatopia",
    "home.enter.closing": "Aprendemos de lo vivo.",
    "home.enter.learn": "Aprende",
    "home.enter.leave": "Y reparte dejando la Tierra un poco más viva de lo que la encontraste.",
    "home.enter.observe": "Observa",
    "home.enter.title": "Entra como eres.",
    "home.enter.transmit": "Transmite",
    "home.join.card1.sub": "Gracias al Pasaporte Pachatopia",
    "home.join.card1.title": "Convertirse en Guardián de lo Vivo",
    "home.join.card2.sub": "En transición agroforestal",
    "home.join.card2.title": "Apadrinar un cultivo",
    "home.join.card3.sub": "",
    "home.join.card3.title": "Apadrinar espacios de libertad para lo vivo",
    "home.join.card4.sub": "En el terreno",
    "home.join.card4.title": "Venir a vivir la experiencia",
    "home.join.card5.sub": "Del Movimiento",
    "home.join.card5.title": "Convertirse en socio",
    "home.join.card6.sub": "Convertirse en embajador",
    "home.join.card6.title": "Inspirar a su alrededor",
    "home.join.footer1": "Un bosque nunca crece gracias a una sola semilla. Un movimiento tampoco.",
    "home.join.footer2": "Lo vivo nos espera a todos.",
    "home.join.footer3": "Les toca a ustedes plantar una semilla de esperanza.",
    "home.join.subtitle": "Hoy pueden participar de muchas formas.",
    "home.join.title": "Unirse al Movimiento",
    "home.lab.card1.desc": "Producir regenerando los suelos, inspirándose en el funcionamiento de los ecosistemas naturales.",
    "home.lab.card1.title": "La agroforestería regenerativa",
    "home.lab.card2.desc": "Cultivos en transición agroforestal, cultivados respetando los equilibrios naturales.",
    "home.lab.card2.title": "El café y el cacao",
    "home.lab.card3.desc": "Zonas dejadas a lo vivo, para que la biodiversidad pueda seguir evolucionando libremente.",
    "home.lab.card3.title": "Los espacios de libertad para lo vivo",
    "home.lab.card4.desc": "Preservar las especies animales y vegetales que hacen la riqueza del territorio.",
    "home.lab.card4.title": "La protección de la biodiversidad",
    "home.lab.card5.desc": "Proteger las fuentes, los ríos y los ciclos del agua de los que depende toda forma de vida.",
    "home.lab.card5.title": "La preservación del agua",
    "home.lab.card6.desc": "Trabajar con los habitantes del territorio para construir un futuro compartido.",
    "home.lab.card6.title": "La cooperación con las comunidades",
    "home.lab.desc": "Pachatopia es un lugar de experimentación donde aprendemos directamente de lo vivo, para construir sistemas capaces de producir regenerando al mismo tiempo los ecosistemas. Cada día observamos, experimentamos, compartimos y mejoramos nuestras prácticas.",
    "home.lab.footer": "Nuestra ambición no es solo producir de otra manera. Deseamos demostrar que es posible reconciliar la naturaleza con las actividades humanas para las generaciones futuras.",
    "home.lab.title": "Nuestro laboratorio de lo vivo",
    "home.land.imageAlt": "Paisaje de San Carlos",
    "home.land.p1": "San Carlos es un territorio de una belleza excepcional. También es un territorio marcado por la historia del conflicto armado colombiano.",
    "home.land.p2": "Hoy, los habitantes reconstruyen su futuro. La naturaleza vuelve a brotar. Los ríos siguen fluyendo. Los bosques recuperan poco a poco su lugar.",
    "home.land.p3": "En Pachatopia, creemos que la regeneración de un territorio es a la vez ecológica, humana y cultural. Al cuidar de lo vivo, también contribuimos a recrear lazos entre las personas.",
    "home.land.title": "Una tierra que renace",
    "home.living.p1": "Pachatopia es un proyecto que evoluciona.",
    "home.living.p2": "Cada año plantamos árboles, restauramos nuevas parcelas y desarrollamos iniciativas para reforzar la biodiversidad y la resiliencia del territorio.",
    "home.living.quote": "\"Poco a poco, un bosque y un ecosistema regenerativo toman forma.\"",
    "home.living.title": "Un proyecto vivo",
},
} as const;

export type TranslationKey = keyof (typeof translations)["fr"];

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang === "en") return "en";
  if (lang === "es") return "es";
  return "fr";
}

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    const dictionaries = translations as Record<string, Partial<Record<TranslationKey, string>>>;
    return dictionaries[lang]?.[key] || dictionaries[defaultLang]?.[key] || key;
  };
}

export function getLocalizedPath(path: string, lang: Lang): string {
  if (lang === "fr") return path;
  return `/${lang}${path}`;
}
