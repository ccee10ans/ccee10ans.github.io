import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, BookOpen, Users, Calendar, ChevronRight, X, Heart, MessageCircle, Bookmark } from 'lucide-react'
import CarrouselConditionnel from '../Components/CarrouselConditionnel'
import temoignage1 from '../assets/Images/temoignage1.jpg'
import temoignage2 from '../assets/Images/temoignage2.jpg'
import Fetes from '../assets/Images/Fetes.jpg'
import temoignage3 from '../assets/Images/temoignage3.jpg'
import actualité1 from '../assets/Images/actualité1.jpg'
import actualité2 from '../assets/Images/actualité2.jpg'
import actualité3 from '../assets/Images/actualités3.jpg'
import prière from '../assets/Images/priere.jpg'
import formation from '../assets/Images/formation.jpg'

export default function ToutSavoir() {
  const [selectedActivity, setSelectedActivity] = useState(null)

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  function FadeInWhenVisible({ children }) {
    const controls = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
      if (inView) {
        controls.start("visible")
      }
    }, [controls, inView])

    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 20 }
        }}
      >
        {children}
      </motion.div>
    )
  }

  const activities = [
    {
      title: "Prière en communauté",
      description: "Tous les Mardis de 19h00 - 21h00 à l'ESATIC (TWIN 1)",
      icon: Users,
      link: "#",
      image: prière,
      details: "Nos séances de prière communautaire sont un moment privilégié pour se ressourcer spirituellement et renforcer les liens entre les membres de la CCEE."
    },
    {
      title: "Formation spirituelle",
      description: "Sessions mensuelles de formation et de partage",
      icon: BookOpen,
      link: "#",
      image: formation,
      details: "Nos formations spirituelles visent à approfondir la foi et la connaissance de la doctrine catholique, adaptées au contexte étudiant."
    },
    {
      title: "Événements spéciaux",
      description: "Célébrations et rassemblements communautaires",
      icon: Calendar,
      link: "#",
      image: Fetes,
      details: "Nous organisons régulièrement des événements spéciaux pour célébrer les temps forts de l'année liturgique et renforcer notre communauté."
    }
  ]

  const events = [
    { date: '21 Nov 2024', title: 'Messe de Rentrée', location: `A l Amphi de l ESATIC ` },
    { date: '14 Dec2024', title: 'Célèbration des 10ans ', location: ' Lieu :  A Définir' },
    { date: 'Déc 2024', title: 'Noël anticipé(Festinoël)', location: 'Lieu : A Définir' },
    { date: ' Avril 2025', title: 'Jardins des Oliviers(JDO)', location: 'Lieu : A Définir' }
  ]

  const testimonials = [
    { name: 'Jaurès Mian', text:` Mon expérience à la CCEE m'a fait grandir spirituellement ✝️ et humainement 🤝. Les moments de prière 🙏 et de communion fraternelle 🤗 ont renforcé ma relation avec Dieu et les membres de la communauté. J'y ai aussi reçu une formation sur la foi catholique 📖, tout en forgeant des amitiés sincères et durables ❤️. ` , avatar: temoignage1 },
    { name: 'Anderson ABE, Promo IT11', text: `Les louanges adressées à Dieu à travers la musique chrétienne 🎶✝️ sont devenues aujourd'hui mon quotidien. Je ne peux pas travailler sans écouter 🎧 et chanter 🎤 des louanges à l'endroit de Dieu 🙌. Je dois cela à la CCEE ❤️. ` , avatar: temoignage2 },
    { name: 'Prince-Junior Demeyia SREUSSI', text: `J'ai été président de la Commission évangélisation de la CCEE à l'ESATIC (2018-2019), une expérience enrichissante qui a renforcé ma spiritualité ✝️ et mon leadership 👨‍💼. La CCEE a été une véritable famille ❤️, incarnant des valeurs d'amour 🤝, d'entraide 🤲 et de soutien 🌟.`, avatar: temoignage3 }
  ]

  const createWhatsAppLink = (message) => {
    const phoneNumber = "+225 01 03 81 16 91";
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <CarrouselConditionnel />

      {/* Section Héro */}
      <motion.div
        className="container mx-auto px-4 pt-16 pb-24 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="absolute inset-0 z-0"
          animate={{
            backgroundImage: [
              'radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(255,255,255,0) 70%)',
              'radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(255,255,255,0) 70%)',
              'radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(255,255,255,0) 70%)'
            ]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div className="text-center relative z-10" variants={staggerContainer} initial="initial" animate="animate">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-blue-600 mb-6"
            variants={fadeInUp}
          >
            Découvrez nos activités
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            La Communauté Catholique des Étudiants de l'ESATIC vous propose diverses activités pour enrichir votre vie spirituelle et communautaire.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold flex items-center mx-auto transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={pulseAnimation}
            >
              En savoir plus <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Grille d'activités */}
      <div className="container mx-auto px-4 py-16 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/placeholder.svg?height=600&width=800")',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            opacity: 0.1
          }}
        />
        <FadeInWhenVisible>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-600 relative z-10">
            Nos activités principales
          </h2>
        </FadeInWhenVisible>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg p-6 h-full cursor-pointer transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2"
                onClick={() => setSelectedActivity(activity)}
              >
                <activity.icon className="h-16 w-16 text-blue-600 mb-6 mx-auto" />
                <h3 className="text-2xl font-semibold mb-4 text-center">{activity.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{activity.description}</p>
                <div className="text-blue-600 hover:text-blue-700 flex items-center justify-center transition-colors">
                  En savoir plus <ChevronRight className="ml-1 h-5 w-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal pour les détails d'activité */}
      <AnimatePresence>
        {selectedActivity && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl p-6 max-w-2xl w-full"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 15 }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-blue-600">{selectedActivity.title}</h3>
                <button
                  onClick={() => setSelectedActivity(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <img src={selectedActivity.image} alt={selectedActivity.title} className="w-full h-64 object-cover rounded-lg mb-6" />
              <p className="text-gray-700 mb-4">{selectedActivity.details}</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors">
                Participer
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Calendrier des événements */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Calendrier des événements
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {events.map((event, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-xs text-center transform transition-all duration-300 hover:shadow-xl">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{event.date}</div>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.location}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Témoignages */}
      <div className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-600">
              Témoignages
            </h2>
          </FadeInWhenVisible>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition-all duration-300 hover:shadow-xl">
                  <motion.img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-200"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  />
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-blue-600">{testimonial.name}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Section Actualités */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Actualités récentes
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { id: 1, title: "Titre de l'actualité 1", image: actualité1 },
              { id: 2, title: "Titre de l'actualité 2", image: actualité2 },
              { id: 3, title: "Titre de l'actualité 3", image: actualité3 },
            ].map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <img
                    src={item.image}
                    alt={`Actualité ${item.id}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">
                      Description courte de l'actualité ou de l'événement...
                    </p>
                    <button className="text-blue-600 hover:text-blue-700 flex items-center transition-colors">
                      Lire plus <ChevronRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Section S'impliquer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            S'impliquer dans la CCEE
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }}>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <Heart className="h-16 w-16 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Devenir bénévole</h3>
                <p className="text-gray-600 mb-4">Participez activement à l'organisation de nos événements et activités.</p>
                <a href={createWhatsAppLink("Je veux devenir bénévole pour la CCEE")} target="_blank" rel="noopener noreferrer" className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full transition-colors inline-block">
                  Je veux aider
                </a>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }}>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <MessageCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Partager son témoignage</h3>
                <p className="text-gray-600 mb-4">Inspirez d'autres étudiants en partageant votre expérience au sein de la CCEE.</p>
                <a href={createWhatsAppLink("Je souhaite partager mon témoignage sur la CCEE")} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition-colors inline-block">
                  Partager
                </a>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }}>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <Bookmark className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Proposer une activité</h3>
                <p className="text-gray-600 mb-4">Vous avez une idée pour une nouvelle activité ? Partagez-la avec nous !</p>
                <a href={createWhatsAppLink("J'ai une proposition d'activité pour la CCEE")} target="_blank" rel="noopener noreferrer" className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full transition-colors inline-block">
                  Proposer
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

