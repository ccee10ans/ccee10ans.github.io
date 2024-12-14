import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Affiche10Ans from '../assets/Images/Affiche10Ans.jpg';
import LogoCCEE from '../assets/Images/logo_ccee.png';

function Formulaire() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });

  const [showVerse, setShowVerse] = useState(false);

  const verses = [
    { reference: "Philippiens 4:13", text: "Je peux tout par celui qui me fortifie.", emoji: "💪" },
    { reference: "Psaumes 23:1", text: "L'Éternel est mon berger: je ne manquerai de rien.", emoji: "🐑" },
    { reference: "Jean 3:16", text: "Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu'il ait la vie éternelle.", emoji: "❤️" },
    { reference: "Jérémie 29:11", text: "Car je connais les projets que j'ai formés sur vous, dit l'Éternel, projets de paix et non de malheur, afin de vous donner un avenir et de l'espérance.", emoji: "🌟" },
    { reference: "Romains 8:28", text: "Nous savons, du reste, que toutes choses concourent au bien de ceux qui aiment Dieu, de ceux qui sont appelés selon son dessein.", emoji: "🙏" },
    { reference: "Ésaïe 41:10", text: "Ne crains rien, car je suis avec toi; Ne promène pas des regards inquiets, car je suis ton Dieu; Je te fortifie, je viens à ton secours, Je te soutiens de ma droite triomphante.", emoji: "🦁" },
    { reference: "Matthieu 11:28", text: "Venez à moi, vous tous qui êtes fatigués et chargés, et je vous donnerai du repos.", emoji: "😌" },
    { reference: "Proverbes 3:5-6", text: "Confie-toi en l'Éternel de tout ton cœur, Et ne t'appuie pas sur ta sagesse; Reconnais-le dans toutes tes voies, Et il aplanira tes sentiers.", emoji: "🛤️" },
    { reference: "2 Corinthiens 5:17", text: "Si quelqu'un est en Christ, il est une nouvelle créature. Les choses anciennes sont passées; voici, toutes choses sont devenues nouvelles.", emoji: "🦋" },
    { reference: "Galates 5:22-23", text: "Mais le fruit de l'Esprit, c'est l'amour, la joie, la paix, la patience, la bonté, la bénignité, la fidélité, la douceur, la tempérance.", emoji: "🍎" },
    { reference: "1 Pierre 5:7", text: "Déchargez-vous sur lui de tous vos soucis, car lui-même prend soin de vous.", emoji: "☁️" },
    { reference: "Josué 1:9", text: "Ne t'ai-je pas donné cet ordre: Fortifie-toi et prends courage? Ne t'effraie point et ne t'épouvante point, car l'Éternel, ton Dieu, est avec toi dans tout ce que tu entreprendras.", emoji: "🦸" },
    { reference: "Psaumes 46:1", text: "Dieu est pour nous un refuge et un appui, Un secours qui ne manque jamais dans la détresse.", emoji: "🏰" },
    { reference: "Romains 12:2", text: "Ne vous conformez pas au siècle présent, mais soyez transformés par le renouvellement de l'intelligence, afin que vous discerniez quelle est la volonté de Dieu, ce qui est bon, agréable et parfait.", emoji: "🧠" },
    { reference: "1 Corinthiens 16:14", text: "Que tout ce que vous faites se fasse avec charité.", emoji: "💖" },
    { reference: "Psaumes 119:105", text: "Ta parole est une lampe à mes pieds, Et une lumière sur mon sentier.", emoji: "🔦" },
    { reference: "Colossiens 3:23", text: "Tout ce que vous faites, faites-le de bon cœur, comme pour le Seigneur et non pour des hommes.", emoji: "💼" },
    { reference: "Hébreux 11:1", text: "Or la foi est une ferme assurance des choses qu'on espère, une démonstration de celles qu'on ne voit pas.", emoji: "👁️" },
    { reference: "Jacques 1:5", text: "Si quelqu'un d'entre vous manque de sagesse, qu'il la demande à Dieu, qui donne à tous simplement et sans reproche, et elle lui sera donnée.", emoji: "🧠" },
    { reference: "1 Jean 4:19", text: "Nous l'aimons, parce qu'il nous a aimés le premier.", emoji: "❤️" },
    { reference: "Psaumes 37:4", text: "Fais de l'Éternel tes délices, Et il te donnera ce que ton cœur désire.", emoji: "🎁" },
    { reference: "Ésaïe 40:31", text: "Mais ceux qui se confient en l'Éternel renouvellent leur force. Ils prennent le vol comme les aigles; Ils courent, et ne se lassent point, Ils marchent, et ne se fatiguent point.", emoji: "🦅" },
    { reference: "Matthieu 5:16", text: "Que votre lumière luise ainsi devant les hommes, afin qu'ils voient vos bonnes œuvres, et qu'ils glorifient votre Père qui est dans les cieux.", emoji: "🕯️" },
    { reference: "Jean 14:27", text: "Je vous laisse la paix, je vous donne ma paix. Je ne vous donne pas comme le monde donne. Que votre cœur ne se trouble point, et ne s'alarme point.", emoji: "☮️" },
    { reference: "Romains 15:13", text: "Que le Dieu de l'espérance vous remplisse de toute joie et de toute paix dans la foi, pour que vous abondiez en espérance, par la puissance du Saint-Esprit!", emoji: "🌈" },
    { reference: "2 Timothée 1:7", text: "Car ce n'est pas un esprit de timidité que Dieu nous a donné, mais un esprit de force, d'amour et de sagesse.", emoji: "🦁" },
    { reference: "Hébreux 13:8", text: "Jésus-Christ est le même hier, aujourd'hui, et éternellement.", emoji: "⏳" },
    { reference: "Jacques 4:7", text: "Soumettez-vous donc à Dieu; résistez au diable, et il fuira loin de vous.", emoji: "🛡️" },
    { reference: "1 Pierre 3:15", text: "Mais sanctifiez dans vos cœurs Christ le Seigneur, étant toujours prêts à vous défendre, avec douceur et respect, devant quiconque vous demande raison de l'espérance qui est en vous.", emoji: "💬" },
    { reference: "1 Jean 1:9", text: "Si nous confessons nos péchés, il est fidèle et juste pour nous les pardonner, et pour nous purifier de toute iniquité.", emoji: "🧼" },
    { reference: "Apocalypse 3:20", text: "Voici, je me tiens à la porte, et je frappe. Si quelqu'un entend ma voix et ouvre la porte, j'entrerai chez lui, je souperai avec lui, et lui avec moi.", emoji: "🚪" },
    { reference: "Psaumes 34:8", text: "Sentez et voyez combien l'Éternel est bon! Heureux l'homme qui cherche en lui son refuge!", emoji: "😊" },
    { reference: "Proverbes 16:9", text: "Le cœur de l'homme médite sa voie, Mais c'est l'Éternel qui dirige ses pas.", emoji: "👣" },
    { reference: "Ecclésiaste 3:11", text: "Il fait toute chose bonne en son temps; même il a mis dans leur cœur la pensée de l'éternité, bien que l'homme ne puisse pas saisir l'œuvre que Dieu fait, du commencement jusqu'à la fin.", emoji: "⏰" },
    { reference: "Ésaïe 26:3", text: "À celui qui est ferme dans ses sentiments Tu assures la paix, la paix, Parce qu'il se confie en toi.", emoji: "🕊️" },
    { reference: "Lamentations 3:22-23", text: "Les bontés de l'Éternel ne sont pas épuisées, Ses compassions ne sont pas à leur terme; Elles se renouvellent chaque matin. Oh! que ta fidélité est grande!", emoji: "🌅" },
    { reference: "Michée 6:8", text: "On t'a fait connaître, ô homme, ce qui est bien; Et ce que l'Éternel demande de toi, C'est que tu pratiques la justice, Que tu aimes la miséricorde, Et que tu marches humblement avec ton Dieu.", emoji: "⚖️" },
    { reference: "Habacuc 3:19", text: "L'Éternel, le Seigneur, est ma force; Il rend mes pieds semblables à ceux des biches, Et il me fait marcher sur mes lieux élevés.", emoji: "🦌" },
    { reference: "Matthieu 6:33", text: "Cherchez premièrement le royaume et la justice de Dieu; et toutes ces choses vous seront données par-dessus.", emoji: "👑" },
    { reference: "Marc 11:24", text: "C'est pourquoi je vous dis: Tout ce que vous demanderez en priant, croyez que vous l'avez reçu, et vous le verrez s'accomplir.", emoji: "🙏" },
    { reference: "Luc 6:31", text: "Ce que vous voulez que les hommes fassent pour vous, faites-le de même pour eux.", emoji: "🤝" },
    { reference: "Jean 8:32", text: "Vous connaîtrez la vérité, et la vérité vous affranchira.", emoji: "🔓" },
    { reference: "Actes 1:8", text: "Mais vous recevrez une puissance, le Saint-Esprit survenant sur vous, et vous serez mes témoins à Jérusalem, dans toute la Judée, dans la Samarie, et jusqu'aux extrémités de la terre.", emoji: "🌍" },
    { reference: "Romains 5:8", text: "Mais Dieu prouve son amour envers nous, en ce que, lorsque nous étions encore des pécheurs, Christ est mort pour nous.", emoji: "❤️" },
    { reference: "1 Corinthiens 10:13", text: "Aucune tentation ne vous est survenue qui n'ait été humaine, et Dieu, qui est fidèle, ne permettra pas que vous soyez tentés au delà de vos forces; mais avec la tentation il préparera aussi le moyen d'en sortir, afin que vous puissiez la supporter.", emoji: "💪" },
    { reference: "2 Corinthiens 4:18", text: "Nous regardons, non point aux choses visibles, mais à celles qui sont invisibles; car les choses visibles sont passagères, et les invisibles sont éternelles.", emoji: "👁️" },
    { reference: "Galates 2:20", text: "J'ai été crucifié avec Christ; et si je vis, ce n'est plus moi qui vis, c'est Christ qui vit en moi; si je vis maintenant dans la chair, je vis dans la foi au Fils de Dieu, qui m'a aimé et qui s'est livré lui-même pour moi.", emoji: "✝️" },
    { reference: "Éphésiens 2:8-9", text: "Car c'est par la grâce que vous êtes sauvés, par le moyen de la foi. Et cela ne vient pas de vous, c'est le don de Dieu. Ce n'est point par les œuvres, afin que personne ne se glorifie.", emoji: "🎁" },
    { reference: "Philippiens 1:6", text: "Je suis persuadé que celui qui a commencé en vous cette bonne œuvre la rendra parfaite pour le jour de Jésus-Christ.", emoji: "🏁" },
    { reference: "Colossiens 3:2", text: "Affectionnez-vous aux choses d'en haut, et non à celles qui sont sur la terre.", emoji: "🌠" },
    { reference: "1 Thessaloniciens 5:16-18", text: "Soyez toujours joyeux. Priez sans cesse. Rendez grâces en toutes choses, car c'est à votre égard la volonté de Dieu en Jésus-Christ.", emoji: "😊" },
    { reference: "2 Thessaloniciens 3:3", text: "Le Seigneur est fidèle, il vous affermira et vous préservera du malin.", emoji: "🛡️" },
    { reference: "1 Timothée 4:12", text: "Que personne ne méprise ta jeunesse; mais sois un modèle pour les fidèles, en parole, en conduite, en charité, en foi, en pureté.", emoji: "🌟" },
    { reference: "2 Timothée 3:16-17", text: "Toute Écriture est inspirée de Dieu, et utile pour enseigner, pour convaincre, pour corriger, pour instruire dans la justice, afin que l'homme de Dieu soit accompli et propre à toute bonne œuvre.", emoji: "📖" },
    { reference: "Tite 2:11-12", text: "Car la grâce de Dieu, source de salut pour tous les hommes, a été manifestée. Elle nous enseigne à renoncer à l'impiété et aux convoitises mondaines, et à vivre dans le siècle présent selon la sagesse, la justice et la piété.", emoji: "🎓" },
    { reference: "Philémon 1:6", text: "Je lui demande que ta participation à la foi soit efficace pour la cause de Christ, en faisant reconnaître en nous toute espèce de bien.", emoji: "🤝" },
    { reference: "Hébreux 4:12", text: "Car la parole de Dieu est vivante et efficace, plus tranchante qu'une épée quelconque à deux tranchants, pénétrante jusqu'à partager âme et esprit, jointures et moelles; elle juge les sentiments et les pensées du cœur.", emoji: "⚔️" },
    { reference: "Jacques 1:22", text: "Mettez en pratique la parole, et ne vous bornez pas à l'écouter, en vous trompant vous-mêmes par de faux raisonnements.", emoji: "🚶" },
    { reference: "1 Pierre 2:9", text: "Vous, au contraire, vous êtes une race élue, un sacerdoce royal, une nation sainte, un peuple acquis, afin que vous annonciez les vertus de celui qui vous a appelés des ténèbres à son admirable lumière.", emoji: "👑" },
    { reference: "2 Pierre 1:4", text: "Lesquelles nous assurent de sa part les plus grandes et les plus précieuses promesses, afin que par elles vous deveniez participants de la nature divine, en fuyant la corruption qui existe dans le monde par la convoitise.", emoji: "🌱" },
    { reference: "1 Jean 3:1", text: "Voyez quel amour le Père nous a témoigné, pour que nous soyons appelés enfants de Dieu! Et nous le sommes.", emoji: "👨‍👩‍👧‍👦" },
    { reference: "2 Jean 1:6", text: "Et l'amour consiste à marcher selon ses commandements. C'est là le commandement dans lequel vous devez marcher, comme vous l'avez appris dès le commencement.", emoji: "❤️" },
    { reference: "3 Jean 1:11", text: "Bien-aimé, n'imite pas le mal, mais le bien. Celui qui fait le bien est de Dieu; celui qui fait le mal n'a point vu Dieu.", emoji: "👀" },
    { reference: "Jude 1:20-21", text: "Pour vous, bien-aimés, vous édifiant vous-mêmes sur votre très sainte foi, et priant par le Saint-Esprit, maintenez-vous dans l'amour de Dieu, en attendant la miséricorde de notre Seigneur Jésus-Christ pour la vie éternelle.", emoji: "🏗️" },
    { reference: "Apocalypse 21:4", text: "Il essuiera toute larme de leurs yeux, et la mort ne sera plus, et il n'y aura plus ni deuil, ni cri, ni douleur, car les premières choses ont disparu.", emoji: "🌈" },
    { reference: "Genèse 1:1", text: "Au commencement, Dieu créa les cieux et la terre.", emoji: "🌎" },
    { reference: "Exode 14:14", text: "L'Éternel combattra pour vous; et vous, gardez le silence.", emoji: "🤫" },
    { reference: "Lévitique 19:18", text: "Tu aimeras ton prochain comme toi-même. Je suis l'Éternel.", emoji: "🤝" },
    { reference: "Nombres 6:24-26", text: "Que l'Éternel te bénisse, et qu'il te garde! Que l'Éternel fasse luire sa face sur toi, et qu'il t'accorde sa grâce! Que l'Éternel tourne sa face vers toi, et qu'il te donne la paix!", emoji: "🙌" },
    { reference: "Deutéronome 31:6", text: "Fortifiez-vous et ayez du courage! Ne craignez point et ne soyez point effrayés devant eux; car l'Éternel, ton Dieu, marchera lui-même avec toi, il ne te délaissera point, il ne t'abandonnera point.", emoji: "💪" },
    { reference: "Josué 24:15", text: "Et si vous ne trouvez pas bon de servir l'Éternel, choisissez aujourd'hui qui vous voulez servir... Moi et ma maison, nous servirons l'Éternel.", emoji: "🏠" },
    { reference: "Juges 5:31", text: "Ainsi périssent tous tes ennemis, ô Éternel! Ceux qui l'aiment sont comme le soleil, quand il paraît dans sa force.", emoji: "☀️" },
    { reference: "Ruth 1:16", text: "Ruth répondit: Ne me presse pas de te laisser, de retourner loin de toi! Où tu iras j'irai, où tu demeureras je demeurerai; ton peuple sera mon peuple, et ton Dieu sera mon Dieu.", emoji: "👣" },
    { reference: "1 Samuel 16:7", text: "Et l'Éternel dit à Samuel: Ne prends point garde à son apparence et à la hauteur de sa taille, car je l'ai rejeté. L'Éternel ne considère pas ce que l'homme considère; l'homme regarde à ce qui frappe les yeux, mais l'Éternel regarde au cœur.", emoji: "❤️" },
    { reference: "2 Samuel 22:31", text: "Les voies de Dieu sont parfaites, La parole de l'Éternel est éprouvée; Il est un bouclier pour tous ceux qui se confient en lui.", emoji: "🛡️" },
    { reference: "1 Rois 8:23", text: "Éternel, Dieu d'Israël! Il n'y a point de Dieu semblable à toi, ni en haut dans les cieux, ni en bas sur la terre: tu gardes l'alliance et la miséricorde envers tes serviteurs qui marchent en ta présence de tout leur cœur!", emoji: "🙏" },
    { reference: "2 Rois 6:16", text: "Il répondit: Ne crains point, car ceux qui sont avec nous sont en plus grand nombre que ceux qui sont avec eux.", emoji: "👥" },
    { reference: "1 Chroniques 16:11", text: "Cherchez l'Éternel et son appui, Recherchez continuellement sa face!", emoji: "🔍" },
    { reference: "2 Chroniques 7:14", text: "Si mon peuple sur qui est invoqué mon nom s'humilie, prie, et cherche ma face, et s'il se détourne de ses mauvaises voies, je l'exaucerai des cieux, je lui pardonnerai son péché, et je guérirai son pays.", emoji: "🌿" },
    { reference: "Esdras 8:22", text: "J'aurais eu honte de demander au roi une escorte et des cavaliers pour nous protéger contre l'ennemi pendant la route, car nous avions dit au roi: La main de notre Dieu est pour leur bien sur tous ceux qui le cherchent, mais sa force et sa colère sont sur tous ceux qui l'abandonnent.", emoji: "🐎" },
    { reference: "Néhémie 8:10", text: "Ne vous affligez pas, car la joie de l'Éternel sera votre force.", emoji: "😊" },
    { reference: "Esther 4:14", text: "Car, si tu te tais maintenant, le secours et la délivrance surgiront d'autre part pour les Juifs, et toi et la maison de ton père vous périrez. Et qui sait si ce n'est pas pour un temps comme celui-ci que tu es parvenue à la royauté?", emoji: "👑" },
    { reference: "Job 19:25", text: "Mais je sais que mon rédempteur est vivant, Et qu'il se lèvera le dernier sur la terre.", emoji: "🌅" },
    { reference: "Psaumes 1:1-2", text: "Heureux l'homme qui ne marche pas selon le conseil des méchants, Qui ne s'arrête pas sur la voie des pécheurs, Et qui ne s'assied pas en compagnie des moqueurs, Mais qui trouve son plaisir dans la loi de l'Éternel, Et qui la médite jour et nuit!", emoji: "📖" },
    { reference: "Proverbes 3:5-6", text: "Confie-toi en l'Éternel de tout ton cœur, Et ne t'appuie pas sur ta sagesse; Reconnais-le dans toutes tes voies, Et il aplanira tes sentiers.", emoji: "🛤️" },
    { reference: "Ecclésiaste 3:1", text: "Il y a un temps pour tout, un temps pour toute chose sous les cieux.", emoji: "⏳" },
    { reference: "Cantique des Cantiques 8:7", text: "Les grandes eaux ne peuvent éteindre l'amour, Et les fleuves ne le submergeraient pas; Quand un homme offrirait tous les biens de sa maison contre l'amour, Il ne s'attirerait que le mépris.", emoji: "🌊" },
    { reference: "Ésaïe 40:31", text: "Mais ceux qui se confient en l'Éternel renouvellent leur force. Ils prennent le vol comme les aigles; Ils courent, et ne se lassent point, Ils marchent, et ne se fatiguent point.", emoji: "🦅" },
    { reference: "Jérémie 29:11", text: "Car je connais les projets que j'ai formés sur vous, dit l'Éternel, projets de paix et non de malheur, afin de vous donner un avenir et de l'espérance.", emoji: "🌟" },
    { reference: "Lamentations 3:22-23", text: "Les bontés de l'Éternel ne sont pas épuisées, Ses compassions ne sont pas à leur terme; Elles se renouvellent chaque matin. Oh! que ta fidélité est grande!", emoji: "🌅" },
    { reference: "Ézéchiel 36:26", text: "Je vous donnerai un cœur nouveau, et je mettrai en vous un esprit nouveau; j'ôterai de votre corps le cœur de pierre, et je vous donnerai un cœur de chair.", emoji: "❤️" },
    { reference: "Daniel 3:17-18", text: "Voici, notre Dieu que nous servons peut nous délivrer de la fournaise ardente, et il nous délivrera de ta main, ô roi. Sinon, sache, ô roi, que nous ne servirons pas tes dieux, et que nous n'adorerons pas la statue d'or que tu as élevée.", emoji: "🔥" },
    { reference: "Osée 6:3", text: "Connaissons, cherchons à connaître l'Éternel; Sa venue est aussi certaine que celle de l'aurore. Il viendra pour nous comme la pluie, Comme la pluie du printemps qui arrose la terre.", emoji: "🌧️" },
    { reference: "Joël 2:28", text: "Après cela, je répandrai mon esprit sur toute chair; Vos fils et vos filles prophétiseront, Vos vieillards auront des songes, Et vos jeunes gens des visions.", emoji: "👥" },
    { reference: "Amos 5:24", text: "Mais que la droiture soit comme un courant d'eau, Et la justice comme un torrent qui jamais ne tarit.", emoji: "⚖️" },
    { reference: "Abdias 1:15", text: "Car le jour de l'Éternel est proche, pour toutes les nations; Il te sera fait comme tu as fait, Tes œuvres retomberont sur ta tête.", emoji: "⚖️" },
    { reference: "Jonas 2:9", text: "Ceux qui s'attachent à de vaines idoles Éloignent d'eux la miséricorde. Pour moi, je t'offrirai des sacrifices avec un cri d'actions de grâces, J'accomplirai les vœux que j'ai faits: Le salut vient de l'Éternel.", emoji: "🐳" },
    { reference: "Michée 6:8", text: "On t'a fait connaître, ô homme, ce qui est bien; Et ce que l'Éternel demande de toi, C'est que tu pratiques la justice, Que tu aimes la miséricorde, Et que tu marches humblement avec ton Dieu.", emoji: "⚖️" },
    { reference: "Nahum 1:7", text: "L'Éternel est bon, Il est un refuge au jour de la détresse; Il connaît ceux qui se confient en lui.", emoji: "🏰" },
    { reference: "Habacuc 3:17-18", text: "Car le figuier ne fleurira pas, La vigne ne produira rien, Le fruit de l'olivier manquera, Les champs ne donneront pas de nourriture; Les brebis disparaîtront du pâturage, Et il n'y aura plus de bœufs dans les étables. Toutefois, je veux me réjouir en l'Éternel, Je veux me réjouir dans le Dieu de mon salut.", emoji: "🌳" },
    { reference: "Sophonie 3:17", text: "L'Éternel, ton Dieu, est au milieu de toi, comme un héros qui sauve; Il fera de toi sa plus grande joie; Il gardera le silence dans son amour; Il aura pour toi des transports d'allégresse.", emoji: "🎉" },
    { reference: "Aggée 2:9", text: "La gloire de cette dernière maison sera plus grande que celle de la première, dit l'Éternel des armées; Et c'est dans ce lieu que je donnerai la paix, dit l'Éternel des armées.", emoji: "🏛️" },
    { reference: "Zacharie 4:6", text: "Alors il me dit: C'est ici la parole que l'Éternel adresse à Zorobabel: Ce n'est ni par la puissance ni par la force, mais c'est par mon esprit, dit l'Éternel des armées.", emoji: "💨" },
    { reference: "Malachie 3:10", text: "Apportez à la maison du trésor toutes les dîmes, Afin qu'il y ait de la nourriture dans ma maison; Mettez-moi de la sorte à l'épreuve, Dit l'Éternel des armées. Et vous verrez si je n'ouvre pas pour vous les écluses des cieux, Si je ne répands pas sur vous la bénédiction en abondance.", emoji: "🌧️" },
    { reference: "Matthieu 5:16", text: "Que votre lum ière luise ainsi devant les hommes, afin qu'ils voient vos bonnes œuvres, et qu'ils glorifient votre Père qui est dans les cieux.", emoji: "🕯️" },
    { reference: "Marc 10:27", text: "Jésus les regarda, et dit: Aux hommes cela est impossible, mais non à Dieu: car tout est possible à Dieu.", emoji: "✨" },
    { reference: "Luc 6:31", text: "Ce que vous voulez que les hommes fassent pour vous, faites-le de même pour eux.", emoji: "🤝" },
    { reference: "Jean 14:6", text: "Jésus lui dit: Je suis le chemin, la vérité, et la vie. Nul ne vient au Père que par moi.", emoji: "🛤️" },
    { reference: "Actes 4:12", text: "Il n'y a de salut en aucun autre; car il n'y a sous le ciel aucun autre nom qui ait été donné parmi les hommes, par lequel nous devions être sauvés.", emoji: "🙏" },
    { reference: "Romains 8:38-39", text: "Car j'ai l'assurance que ni la mort ni la vie, ni les anges ni les dominations, ni les choses présentes ni les choses à venir, ni les puissances, ni la hauteur, ni la profondeur, ni aucune autre créature ne pourra nous séparer de l'amour de Dieu manifesté en Jésus-Christ notre Seigneur.", emoji: "❤️" },
    { reference: "1 Corinthiens 13:4-7", text: "L'amour est patient, il est plein de bonté; l'amour n'est point envieux; l'amour ne se vante point, il ne s'enfle point d'orgueil, il ne fait rien de malhonnête, il ne cherche point son intérêt, il ne s'irrite point, il ne soupçonne point le mal, il ne se réjouit point de l'injustice, mais il se réjouit de la vérité; il excuse tout, il croit tout, il espère tout, il supporte tout.", emoji: "💖" },
    { reference: "2 Corinthiens 12:9", text: "Et il m'a dit: Ma grâce te suffit, car ma puissance s'accomplit dans la faiblesse. Je me glorifierai donc bien plus volontiers de mes faiblesses, afin que la puissance de Christ repose sur moi.", emoji: "💪" },
    { reference: "Galates 5:22-23", text: "Mais le fruit de l'Esprit, c'est l'amour, la joie, la paix, la patience, la bonté, la bénignité, la fidélité, la douceur, la tempérance; la loi n'est pas contre ces choses.", emoji: "🍎" },
    { reference: "Éphésiens 6:10-11", text: "Au reste, fortifiez-vous dans le Seigneur, et par sa force toute-puissante. Revêtez-vous de toutes les armes de Dieu, afin de pouvoir tenir ferme contre les ruses du diable.", emoji: "🛡️" },
    { reference: "Philippiens 4:6-7", text: "Ne vous inquiétez de rien; mais en toute chose faites connaître vos besoins à Dieu par des prières et des supplications, avec des actions de grâces. Et la paix de Dieu, qui surpasse toute intelligence, gardera vos cœurs et vos pensées en Jésus-Christ.", emoji: "🕊️" },
    { reference: "Colossiens 3:23", text: "Tout ce que vous faites, faites-le de bon cœur, comme pour le Seigneur et non pour des hommes.", emoji: "💼" },
    { reference: "1 Thessaloniciens 5:16-18", text: "Soyez toujours joyeux. Priez sans cesse. Rendez grâces en toutes choses, car c'est à votre égard la volonté de Dieu en Jésus-Christ.", emoji: "🙌" },
    { reference: "2 Thessaloniciens 3:3", text: "Le Seigneur est fidèle, il vous affermira et vous préservera du malin.", emoji: "🛡️" },
    { reference: "1 Timothée 4:12", text: "Que personne ne méprise ta jeunesse; mais sois un modèle pour les fidèles, en parole, en conduite, en charité, en foi, en pureté.", emoji: "🌟" },
    { reference: "2 Timothée 1:7", text: "Car ce n'est pas un esprit de timidité que Dieu nous a donné, mais un esprit de force, d'amour et de sagesse.", emoji: "💪" },
    { reference: "Tite 2:11-12", text: "Car la grâce de Dieu, source de salut pour tous les hommes, a été manifestée. Elle nous enseigne à renoncer à l'impiété et aux convoitises mondaines, et à vivre dans le siècle présent selon la sagesse, la justice et la piété.", emoji: "🎓" },
    { reference: "Philémon 1:6", text: "Je lui demande que ta participation à la foi soit efficace pour la cause de Christ, en faisant reconnaître en nous toute espèce de bien.", emoji: "🤝" },
    { reference: "Hébreux 11:1", text: "Or la foi est une ferme assurance des choses qu'on espère, une démonstration de celles qu'on ne voit pas.", emoji: "👁️" },
    { reference: "Jacques 1:22", text: "Mettez en pratique la parole, et ne vous bornez pas à l'écouter, en vous trompant vous-mêmes par de faux raisonnements.", emoji: "🚶" },
    { reference: "1 Pierre 5:7", text: "Déchargez-vous sur lui de tous vos soucis, car lui-même prend soin de vous.", emoji: "☁️" },
    { reference: "2 Pierre 3:9", text: "Le Seigneur ne tarde pas dans l'accomplissement de la promesse, comme quelques-uns le croient; mais il use de patience envers vous, ne voulant pas qu'aucun périsse, mais voulant que tous arrivent à la repentance.", emoji: "⏳" },
    { reference: "1 Jean 4:7", text: "Bien-aimés, aimons nous les uns les autres; car l'amour est de Dieu, et quiconque aime est né de Dieu et connaît Dieu.", emoji: "❤️" },
    { reference: "2 Jean 1:6", text: "Et l'amour consiste à marcher selon ses commandements. C'est là le commandement dans lequel vous devez marcher, comme vous l'avez appris dès le commencement.", emoji: "👣" },
    { reference: "3 Jean 1:11", text: "Bien-aimé, n'imite pas le mal, mais le bien. Celui qui fait le bien est de Dieu; celui qui fait le mal n'a point vu Dieu.", emoji: "👀" },
    { reference: "Jude 1:20-21", text: "Pour vous, bien-aimés, vous édifiant vous-mêmes sur votre très sainte foi, et priant par le Saint-Esprit, maintenez-vous dans l'amour de Dieu, en attendant la miséricorde de notre Seigneur Jésus-Christ pour la vie éternelle.", emoji: "🏗️" },
    { reference: "Apocalypse 3:20", text: "Voici, je me tiens à la porte, et je frappe. Si quelqu'un entend ma voix et ouvre la porte, j'entrerai chez lui, je souperai avec lui, et lui avec moi.", emoji: "🚪" },
    { reference: "Genèse 12:2", text: "Je ferai de toi une grande nation, et je te bénirai; je rendrai ton nom grand, et tu seras une source de bénédiction.", emoji: "🌱" },
    { reference: "Exode 33:14", text: "L'Éternel répondit: Je marcherai moi-même avec toi, et je te donnerai du repos.", emoji: "👣" },
    { reference: "Lévitique 26:12", text: "Je marcherai au milieu de vous, je serai votre Dieu, et vous serez mon peuple.", emoji: "🚶" },
    { reference: "Nombres 23:19", text: "Dieu n'est point un homme pour mentir, Ni fils d'un homme pour se repentir. Ce qu'il a dit, ne le fera-t-il pas? Ce qu'il a déclaré, ne l'exécutera-t-il pas?", emoji: "✅" },
    { reference: "Deutéronome 7:9", text: "Sache donc que c'est l'Éternel, ton Dieu, qui est Dieu. Ce Dieu fidèle garde son alliance et sa miséricorde jusqu'à la millième génération envers ceux qui l'aiment et qui observent ses commandements.", emoji: "🤝" },
    { reference: "Josué 1:8", text: "Que ce livre de la loi ne s'éloigne point de ta bouche; médite-le jour et nuit, pour agir fidèlement selon tout ce qui y est écrit; car c'est alors que tu auras du succès dans tes entreprises, c'est alors que tu réussiras.", emoji: "📖" },
    { reference: "Juges 6:12", text: "L'ange de l'Éternel lui apparut, et lui dit: L'Éternel est avec toi, vaillant héros!", emoji: "🦸" },
    { reference: "Ruth 2:12", text: "Que l'Éternel te rende ce que tu as fait, et que ta récompense soit entière de la part de l'Éternel, le Dieu d'Israël, sous les ailes duquel tu es venue te réfugier!", emoji: "🕊️" },
    { reference: "1 Samuel 2:2", text: "Nul n'est saint comme l'Éternel; Il n'y a point d'autre Dieu que toi; Il n'y a point de rocher comme notre Dieu.", emoji: "🏔️" },
    { reference: "2 Samuel 7:22", text: "Que tu es donc grand, Éternel Dieu! car nul n'est semblable à toi, et il n'y a point d'autre Dieu que toi, d'après tout ce que nous avons entendu de nos oreilles.", emoji: "👑" },
    { reference: "1 Rois 8:56", text: "Béni soit l'Éternel, qui a donné du repos à son peuple d'Israël, selon toutes ses promesses! De toutes les bonnes paroles qu'il avait prononcées par Moïse, son serviteur, aucune n'est restée sans effet.", emoji: "🙌" },
    { reference: "2 Rois 20:5", text: "Retourne, et dis à Ézéchias, chef de mon peuple: Ainsi parle l'Éternel, le Dieu de David, ton père: J'ai entendu ta prière, j'ai vu tes larmes. Voici, je te guérirai; le troisième jour, tu monteras à la maison de l'Éternel.", emoji: "🏥" },
    { reference: "1 Chroniques 16:34", text: "Louez l'Éternel, car il est bon, Car sa miséricorde dure à toujours!", emoji: "🎵" },
    { reference: "2 Chroniques 16:9", text: "Car l'Éternel étend ses regards sur toute la terre, pour soutenir ceux dont le cœur est tout entier à lui.", emoji: "👀" },
    { reference: "Esdras 8:22", text: "J'aurais eu honte de demander au roi une escorte et des cavaliers pour nous protéger contre l'ennemi pendant la route, car nous avions dit au roi: La main de notre Dieu est pour leur bien sur tous ceux qui le cherchent, mais sa force et sa colère sont sur tous ceux qui l'abandonnent.", emoji: "🛡️" },
    { reference: "Néhémie 9:17", text: "Ils refusèrent d'obéir, et ils mirent en oubli les merveilles que tu avais faites en leur faveur. Ils raidirent leur cou; et, dans leur rébellion, ils se donnèrent un chef pour retourner à leur servitude. Mais toi, tu es un Dieu prêt à pardonner, compatissant et miséricordieux, lent à la colère et riche en bonté, et tu ne les abandonnas pas.", emoji: "🙏" },
    { reference: "Esther 4:14", text: "Car, si tu te tais maintenant, le secours et la délivrance surgiront d'autre part pour les Juifs, et toi et la maison de ton père vous périrez. Et qui sait si ce n'est pas pour un temps comme celui-ci que tu es parvenue à la royauté?", emoji: "👑" },
    { reference: "Job 42:2", text: "Je reconnais que tu peux tout, Et que rien ne s'oppose à tes pensées.", emoji: "💭" },
    { reference: "Psaumes 34:8", text: "Sentez et voyez combien l'Éternel est bon! Heureux l'homme qui cherche en lui son refuge!", emoji: "😊" },
    { reference: "Proverbes 18:10", text: "Le nom de l'Éternel est une tour forte; Le juste s'y réfugie, et se trouve en sûreté.", emoji: "🏰" },
    { reference: "Ecclésiaste 12:13", text: "Écoutons la fin du discours: Crains Dieu et observe ses commandements. C'est là ce que doit faire tout homme.", emoji: "📜" },
    { reference: "Cantique des Cantiques 2:4", text: "Il m'a fait entrer dans la maison du vin; Et la bannière qu'il déploie sur moi, c'est l'amour.", emoji: "🍷" },
    { reference: "Ésaïe 43:2", text: "Si tu traverses les eaux, je serai avec toi; Et les fleuves, ils ne te submergeront point; Si tu marches dans le feu, tu ne te brûleras pas, Et la flamme ne t'embrasera pas.", emoji: "🌊" },
    { reference: "Jérémie 33:3", text: "Invoque-moi, et je te répondrai; Je t'annoncerai de grandes choses, des choses cachées, Que tu ne connais pas.", emoji: "📞" },
    { reference: "Lamentations 3:25", text: "L'Éternel a de la bonté pour qui espère en lui, Pour l'âme qui le cherche.", emoji: "🔍" },
    { reference: "Ézéchiel 36:26", text: "Je vous donnerai un cœur nouveau, et je mettrai en vous un esprit nouveau; j'ôterai de votre corps le cœur de pierre, et je vous donnerai un cœur de chair.", emoji: "❤️" },
    { reference: "Daniel 9:9", text: "Auprès du Seigneur, notre Dieu, la miséricorde et le pardon, car nous avons été rebelles envers lui.", emoji: "🙌" },
    { reference: "Osée 10:12", text: "Semez selon la justice, moissonnez selon la miséricorde, Défrichez-vous un champ nouveau! Il est temps de chercher l'Éternel, Jusqu'à ce qu'il vienne, et répande pour vous la justice.", emoji: "🌱" },
    { reference: "Joël 2:13", text: "Déchirez vos cœurs et non vos vêtements, Et revenez à l'Éternel, votre Dieu; Car il est compatissant et miséricordieux, Lent à la colère et riche en bonté, Et il se repent des maux qu'il envoie.", emoji: "💔" },
    { reference: "Amos 5:14", text: "Recherchez le bien et non le mal, afin que vous viviez, Et qu'ainsi l'Éternel, le Dieu des armées, soit avec vous, Comme vous le dites.", emoji: "🔍" },
    { reference: "Abdias 1:17", text: "Mais le salut sera sur la montagne de Sion, elle sera sainte, Et la maison de Jacob reprendra ses possessions.", emoji: "⛰️" },
    { reference: "Jonas 2:9", text: "Pour moi, je t'offrirai des sacrifices avec un cri d'actions de grâces, J'accomplirai les vœux que j'ai faits: Le salut vient de l'Éternel.", emoji: "🙏" },
    { reference: "Michée 7:7", text: "Pour moi, je regarderai vers l'Éternel, Je mettrai mon espérance dans le Dieu de mon salut; Mon Dieu m'exaucera.", emoji: "👀" },
    { reference: "Nahum 1:7", text: "L'Éternel est bon, Il est un refuge au jour de la détresse; Il connaît ceux qui se confient en lui.", emoji: "🏰" },
    { reference: "Habacuc 3:19", text: "L'Éternel, le Seigneur, est ma force; Il rend mes pieds semblables à ceux des biches, Et il me fait marcher sur mes lieux élevés.", emoji: "🦌" },
    { reference: "Sophonie 3:17", text: "L'Éternel, ton Dieu, est au milieu de toi, comme un héros qui sauve; Il fera de toi sa plus grande joie; Il gardera le silence dans son amour; Il aura pour toi des transports d'allégresse.", emoji: "🎉" },
    { reference: "Aggée 2:9", text: "La gloire de cette dernière maison sera plus grande que celle de la première, dit l'Éternel des armées; Et c'est dans ce lieu que je donnerai la paix, dit l'Éternel des armées.", emoji: "🏛️" },
    { reference: "Zacharie 4:6", text: "Alors il me dit: C'est ici la parole que l'Éternel adresse à Zorobabel: Ce n'est ni par la puissance ni par la force, mais c'est par mon esprit, dit l'Éternel des armées.", emoji: "💨" },
    { reference: "Malachie 3:10", text: "Apportez à la maison du trésor toutes les dîmes, Afin qu'il y ait de la nourriture dans ma maison; Mettez-moi de la sorte à l'épreuve, Dit l'Éternel des armées. Et vous verrez si je n'ouvre pas pour vous les écluses des cieux, Si je ne répands pas sur vous la bénédiction en abondance.", emoji: "🌧️" },
  ];

  const getRandomVerse = () => {
    const randomIndex = Math.floor(Math.random() * verses.length);
    return verses[randomIndex];
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setStatus({ type: 'info', message: 'Envoi en cours...' });
      
      const response = await fetch('http://localhost:5000/api/messages/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message envoyé avec succès!' });
        setFormData({ nom: '', email: '', message: '' });
        setTimeout(() => setShowVerse(true), 1000);
      } else {
        setStatus({ type: 'error', message: data.message || 'Une erreur est survenue' });
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus({ type: 'error', message: 'Erreur de connexion au serveur' });
    }
  };

  const selectedVerse = useMemo(() => getRandomVerse(), []);
  const handleReturnToForm = () => {
    setShowVerse(false);
  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-50 to-green-50 p-4">
      <AnimatePresence mode="wait">
        {!showVerse ? (
          <motion.div 
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col md:flex-row bg-white shadow-lg rounded-2xl max-w-4xl w-full overflow-hidden"
          >
            <div className="md:w-1/2 p-4 relative overflow-hidden">
              <img
                src={Affiche10Ans}
                alt="Affiche 10 ans"
                className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            <div className="md:w-1/2 p-6 md:p-8 bg-gradient-to-br from-white to-blue-50">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-green-600 font-serif">Formulaire 📝</h2>
              
              <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6 rounded-r-lg shadow-md">
                <img src={LogoCCEE} alt="Logo CCEE" className="w-8 h-8 mr-2 inline-block align-middle" />
                <p className="inline-block align-middle">Nous vous invitons chaleureusement à participer à ce formulaire. 🤗</p>
              </div>

              {status.message && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-4 p-4 rounded-lg shadow-md ${
                    status.type === 'success' ? 'bg-green-100 text-green-700' :
                    status.type === 'error' ? 'bg-red-100 text-red-700' :
                    'bg-blue-100 text-blue-700'
                  }`}
                >
                  {status.message}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nom" className="block text-green-600 font-bold mb-2">Nom 👤</label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-green-600 font-bold mb-2">Email 📧</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-green-600 font-bold mb-2">Message 💬</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={status.type === 'info'}
                >
                  {status.type === 'info' ? 'Envoi en cours...' : 'Envoyer 🚀'}
                </motion.button>
              </form>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="verse"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="max-w-2xl w-full mx-auto p-8"
          >
            <div className="relative">
              <div 
                className="absolute inset-0 bg-gradient-to-br from-blue-200 to-green-200 opacity-50 blur-xl rounded-3xl"
              />
              <motion.div 
                className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-4xl md:text-5xl font-serif text-center text-green-700 mb-8">
                  Pain de vie 🍞✨
                </h2>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-center"
                >
                  <h3 className="text-2xl font-serif text-blue-600 mb-6 flex items-center justify-center">
                    <span className="mr-2">{selectedVerse.emoji}</span>
                    {selectedVerse.reference}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed font-serif italic">
                    "{selectedVerse.text}"
                  </p>
                </motion.div>
                <motion.div
                  className="mt-8 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
               <p className="text-green-600 font-semibold mb-4">Que cette parole vous inspire et vous guide. 🙏</p>
                  <motion.button
                    onClick={handleReturnToForm}
                    className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Retour au formulaire
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


export default Formulaire;