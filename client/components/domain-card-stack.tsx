"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Home, Globe, Cpu, Heart, DollarSign, Briefcase } from "lucide-react"

interface DomainCard {
  id: number
  domain: string
  category: string
  description: string
  icon: string
  colors: {
    primary: string
    secondary: string
    text: string
    shadow: string
  }
}

// Function to categorize domains and assign colors
const categorizeDomain = (domain: string) => {
  // Real Estate related domains
  if (
    domain.includes("property") ||
    domain.includes("estate") ||
    domain.includes("house") ||
    domain.includes("home") ||
    domain.includes("rent") ||
    domain.includes("inmuebles") ||
    domain.includes("casa") ||
    domain.includes("apartments") ||
    domain.includes("immo")
  ) {
    return {
      category: "Real Estate",
      icon: "home",
      colors: {
        primary: "#2d4a22",
        secondary: "#4a7a38",
        text: "#ffffff",
        shadow: "rgba(45, 74, 34, 0.6)",
      },
    }
  }

  // Blockchain/Crypto related domains
  else if (
    domain.includes("btc") ||
    domain.includes("blockchain") ||
    domain.includes("token") ||
    domain.includes("onchain") ||
    domain.includes("crypto") ||
    domain.includes("wallet") ||
    domain.includes("eth") ||
    domain.includes("nft") ||
    domain.includes("chain")
  ) {
    return {
      category: "Blockchain & Crypto",
      icon: "dollar",
      colors: {
        primary: "#1a3a5f",
        secondary: "#2d5f8a",
        text: "#ffffff",
        shadow: "rgba(26, 58, 95, 0.6)",
      },
    }
  }

  // AI/Tech related domains
  else if (
    domain.includes("ai") ||
    domain.includes("tech") ||
    domain.includes("digital") ||
    domain.includes("smart") ||
    domain.includes("software") ||
    domain.includes("data") ||
    domain.includes("intelligent") ||
    domain.includes("innovation")
  ) {
    return {
      category: "AI & Technology",
      icon: "cpu",
      colors: {
        primary: "#5a3a31",
        secondary: "#8c5b4a",
        text: "#ffffff",
        shadow: "rgba(90, 58, 49, 0.6)",
      },
    }
  }

  // Healthcare related domains
  else if (
    domain.includes("medical") ||
    domain.includes("health") ||
    domain.includes("cure") ||
    domain.includes("doctor") ||
    domain.includes("clinic") ||
    domain.includes("dental")
  ) {
    return {
      category: "Healthcare",
      icon: "heart",
      colors: {
        primary: "#7a1f1f",
        secondary: "#a82929",
        text: "#ffffff",
        shadow: "rgba(122, 31, 31, 0.6)",
      },
    }
  }

  // Travel/Hospitality related domains
  else if (
    domain.includes("hotel") ||
    domain.includes("resort") ||
    domain.includes("tour") ||
    domain.includes("travel") ||
    domain.includes("holiday") ||
    domain.includes("viajes") ||
    domain.includes("visit")
  ) {
    return {
      category: "Travel & Hospitality",
      icon: "globe",
      colors: {
        primary: "#0f2b46",
        secondary: "#1e4976",
        text: "#ffffff",
        shadow: "rgba(15, 43, 70, 0.6)",
      },
    }
  }

  // Finance related domains
  else if (
    domain.includes("loan") ||
    domain.includes("bank") ||
    domain.includes("money") ||
    domain.includes("finance") ||
    domain.includes("capital") ||
    domain.includes("insure") ||
    domain.includes("broker")
  ) {
    return {
      category: "Finance & Banking",
      icon: "briefcase",
      colors: {
        primary: "#3a2d5f",
        secondary: "#5a468a",
        text: "#ffffff",
        shadow: "rgba(58, 45, 95, 0.6)",
      },
    }
  }

  // Default category for other domains
  else {
    return {
      category: "Business & Services",
      icon: "arrowUpRight",
      colors: {
        primary: "#1a1a1a",
        secondary: "#333333",
        text: "#ffffff",
        shadow: "rgba(0, 0, 0, 0.5)",
      },
    }
  }
}

// Generate description based on domain name and category
const generateDescription = (domain: string, category: string) => {
  const domainName = domain.split(".")[0]

  const descriptions = {
    "Real Estate": [
      `Premium ${domainName} platform for property listings, management, and real estate investments.`,
      `Showcase luxury ${domainName} properties and connect buyers with sellers in an exclusive marketplace.`,
      `Revolutionize the real estate industry with innovative ${domainName} solutions and property management tools.`,
    ],
    "Blockchain & Crypto": [
      `Secure ${domainName} blockchain solutions for digital assets, smart contracts, and decentralized applications.`,
      `Next-generation ${domainName} cryptocurrency platform with advanced trading features and wallet security.`,
      `Tokenize real-world assets with ${domainName} blockchain technology for transparent and efficient transactions.`,
    ],
    "AI & Technology": [
      `Cutting-edge ${domainName} AI solutions that transform businesses through intelligent automation and insights.`,
      `Harness the power of artificial intelligence with ${domainName} to solve complex problems and drive innovation.`,
      `Advanced ${domainName} technology platform offering smart solutions for businesses and consumers alike.`,
    ],
    Healthcare: [
      `Comprehensive ${domainName} healthcare services and solutions for improved patient outcomes and wellbeing.`,
      `Innovative ${domainName} medical platform connecting patients with healthcare providers and resources.`,
      `Transform healthcare delivery with ${domainName} digital solutions for clinics, hospitals, and medical practices.`,
    ],
    "Travel & Hospitality": [
      `Exclusive ${domainName} travel experiences and luxury accommodations for discerning travelers worldwide.`,
      `Book unforgettable ${domainName} vacations, tours, and adventures with our premium travel platform.`,
      `Revolutionize the hospitality industry with ${domainName} innovative solutions for hotels, resorts, and tourism.`,
    ],
    "Finance & Banking": [
      `Secure ${domainName} financial services platform offering loans, investments, and wealth management solutions.`,
      `Transform your financial future with ${domainName} innovative banking solutions and investment opportunities.`,
      `Comprehensive ${domainName} insurance and risk management services for individuals and businesses.`,
    ],
    "Business & Services": [
      `Elevate your business with ${domainName} professional services and innovative solutions.`,
      `Connect with ${domainName} industry experts and access premium business resources and tools.`,
      `Transform your operations with ${domainName} cutting-edge business solutions and strategic services.`,
    ],
  }

  // Select a random description from the appropriate category
  const categoryDescriptions =
    descriptions[category as keyof typeof descriptions] || descriptions["Business & Services"]
  return categoryDescriptions[Math.floor(Math.random() * categoryDescriptions.length)]
}

// Create domain cards from the list
const createDomainCards = (domainList: string[]) => {
  return domainList.map((domain, index) => {
    const { category, icon, colors } = categorizeDomain(domain)
    return {
      id: index + 1,
      domain,
      category,
      description: generateDescription(domain, category),
      icon,
      colors,
    }
  })
}

// List of domains from the provided text
const domainList = [
  "felicity.lol",
  "rwa.bingo",
  "resort.tours",
  "hotel.insure",
  "carrier.boats",
  "room.holiday",
  "inn.apartments",
  "program.expert",
  "property.cruises",
  "walletlink.click",
  "onchain.red",
  "btc.reisen",
  "property.delivery",
  "aiai.sbs",
  "loan.lat",
  "loot.lat",
  "ownership.tokyo",
  "friend.college",
  "integration.tokyo",
  "sushi.support",
  "loan.beauty",
  "rwa.beauty",
  "ia.viajes",
  "realestate.irish",
  "dubaihotline.com",
  "realestateagency.vip",
  "btc.plumbing",
  "arcane.mobi",
  "btcs.poker",
  "property.solar",
  "wenft.buzz",
  "natty.lol",
  "greeninnovate.green",
  "rwa.coupons",
  "profits.autos",
  "greenplanet.earth",
  "getcryptobank.com",
  "digitaltokenflow.com",
  "techtribehub.com",
  "tokenelevator.com",
  "sipdebut.com",
  "information.homes",
  "homelux.design",
  "immutable.homes",
  "details.homes",
  "dataanalysis.homes",
  "cures.homes",
  "estates.immo",
  "medical.baby",
  "blockchain.nagoya",
  "fabrication.one",
  "payhost.xyz",
  "medicalinstitute.net",
  "payhost.net",
  "mostai.xyz",
  "futuretech.my",
  "subasta.my",
  "sip.quest",
  "mastery.quest",
  "buys.cheap",
  "loan.kim",
  "cocktail.lat",
  "landmass.xyz",
  "locale.blog",
  "universi.dad",
  "crypto.dentist",
  "joinai.club",
  "skill.lat",
  "smarttokenize.com",
  "property.baby",
  "properties.ninja",
  "ideas.tokyo",
  "loan.hair",
  "onchain.autos",
  "teamrwa.com",
  "dubaiconection.com",
  "ia.bingo",
  "healths.insure",
  "medtech.care",
  "rwacapital.net",
  "iconic.lat",
  "infantia.xyz",
  "solutionsai.xyz",
  "statesky.com",
  "housesolar.xyz",
  "tokenization.lat",
  "sip.motorcycles",
  "loan.immobilien",
  "loan.cruises",
  "trends.lat",
  "btcs.casino",
  "feme.cyou",
  "btc.catering",
  "buys.immo",
  "rwa.makeup",
  "steps.tokyo",
  "hotel.giving",
  "casa.cyou",
  "agente.ninja",
  "arcanegames.net",
  "beanbegin.bet",
  "beanbegin.com",
  "broker.lat",
  "btc.watches",
  "btc.wedding",
  "chainkeep.locker",
  "connection.baby",
  "cover.rest",
  "digitalization.shop",
  "diversity.lat",
  "domain.industries",
  "dubai.jetzt",
  "dubaiconection.contractors",
  "espacio.rent",
  "eth.deal",
  "exclusivo.gold",
  "expedition.lol",
  "gpt.gd",
  "guard.college",
  "guardiansoflowi.city",
  "guardiansoflowi.com",
  "guinoki.com",
  "idaudit.xyz",
  "imperio.gold",
  "inmuebles.asia",
  "innovators.quest",
  "intelligentnetworks.xyz",
  "joyeria.gold",
  "laia.lat",
  "legacybias.com",
  "legacybias.domains",
  "lujo.gold",
  "luxestatenow.capital",
  "luxestatenow.com",
  "medical.cyou",
  "money.football",
  "noid.democrat",
  "pal.lat",
  "piso.rent",
  "rulo.pro",
  "secrets.tours",
  "snazzy.my",
  "sushi.email",
  "tesoro.gold",
  "tokenizar.co",
  "tokenizar.pro",
  "tokenizar.xyz",
  "trustless.vip",
  "visit.singles",
  "voguedentalclinic.xyz",
  "w4ll3t.com",
  "w4ll3t.fund",
  "wall37.com",
  "wallet.charity",
  "wcoin.one",
  "ai.viajes",
  "aiblockchain.dev",
  "aicad.pro",
  "aiinsights.dev",
  "airemote.org",
  "animalstrends.top",
  "aprobaciones.com",
  "architect.casa",
  "autenticaciones.com",
  "bakegrill.com",
  "betglobal.dev",
  "betinnovations.dev",
  "blazeglow.com",
  "blockchain.dentist",
  "blockchain.reisen",
  "blockchain.yokohama",
  "blockchainrenewables.com",
  "bloom.yachts",
  "buddygather.com",
  "car.engineer",
  "car.ltda",
  "cars.vet",
  "carshub.dev",
  "casinonewspaper.com",
  "centraliot.com",
  "chainaura.com",
  "chainprogress.com",
  "clavechain.com",
  "datoblock.com",
  "digitalwallettech.com",
  "drinktaste.com",
  "ecofy.life",
  "empujes.com",
  "fabricate.casa",
  "feelscary.com",
  "fitnessprogress.top",
  "fluxpulse.com",
  "futuretechpredictions.com",
  "goalscareers.top",
  "helpkids.gives",
  "hobbiesstrategies.top",
  "house.fitness",
  "housing.apartments",
  "improverepair.com",
  "iwontletyoudown.com",
  "joinushub.com",
  "joltpath.com",
  "land.casa",
  "lifestyleinvesting.top",
  "lyriccoin.com",
  "matrixmatter.com",
  "meal.business",
  "netframer.com",
  "newsgaming.top",
  "oocyber.com",
  "parent.family",
  "pleasantonrent.com",
  "plot.casa",
  "prestigious.top",
  "progressai.top",
  "renewablehive.com",
  "resourcescommunity.top",
  "savorywave.com",
  "sectorify.com",
  "skillssolutions.top",
  "software.fashion",
  "softwarebet.top",
  "softwaretech.xyz",
  "softwaretrends.me",
  "spaceprojects.online",
  "spaceprojects.top",
  "styleglam.beauty",
  "sustainablefuture.ai",
  "syncluxe.com",
  "traditionalcuban.com",
  "trailblazer.top",
  "ultrasteps.com",
  "visualibrary.com",
  "webtokenize.com",
  "yard.casa",
  "zurep.com",
  "D4pp.com",
  "reproductions.info",
  "reproductions.online",
  "reproductions.xyz",
  "aizima.com",
  "aiinnovatenews.com",
  "cureweb3.com",
]

export default function DomainCardStack() {
  const initialDomainCards = createDomainCards(domainList)
  const [cards, setCards] = useState<DomainCard[]>(initialDomainCards)
  const [currentIndex, setCurrentIndex] = useState(0)

  const removeCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length)
  }

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "home":
        return <Home className="h-5 w-5" />
      case "globe":
        return <Globe className="h-5 w-5" />
      case "cpu":
        return <Cpu className="h-5 w-5" />
      case "heart":
        return <Heart className="h-5 w-5" />
      case "dollar":
        return <DollarSign className="h-5 w-5" />
      case "briefcase":
        return <Briefcase className="h-5 w-5" />
      case "arrowUpRight":
      default:
        return <ArrowUpRight className="h-5 w-5" />
    }
  }

  // Get the cards to display (current and next two)
  const displayCards = Array.from({ length: 3 }, (_, i) => {
    const index = (currentIndex + i) % cards.length
    return cards[index]
  })

  return (
    <div className="relative h-[600px] w-full">
      <AnimatePresence mode="popLayout">
        {displayCards.map((card, index) => (
          <Card
            key={`${card.id}-${index}`}
            card={card}
            index={index}
            removeCard={removeCard}
            getIconComponent={getIconComponent}
            totalCards={3}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}

interface CardProps {
  card: DomainCard
  index: number
  removeCard: () => void
  getIconComponent: (iconName: string) => JSX.Element
  totalCards: number
}

function Card({ card, index, removeCard, getIconComponent, totalCards }: CardProps) {
  const zIndex = totalCards - index
  const yOffset = index * 30 // Vertical offset
  const xOffset = index * 5 // Horizontal offset

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 100, x: xOffset }}
      animate={{
        opacity: 1,
        y: yOffset,
        x: xOffset,
        scale: 1 - index * 0.04,
        rotateZ: index * -3, // Slight rotation for each card
      }}
      exit={{
        opacity: 0,
        transition: { duration: 0.2 },
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 50,
        mass: 1,
      }}
      style={{
        zIndex,
        boxShadow: `0 ${10 + index * 5}px ${30 + index * 10}px ${card.colors.shadow}`,
        backgroundColor: card.colors.primary,
      }}
      className="absolute left-0 top-0 h-full w-full cursor-grab overflow-hidden rounded-2xl active:cursor-grabbing"
      drag={index === 0} // Allow drag only for the top card
      dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
      dragElastic={0.6}
      onDragEnd={(_, info) => {
        if (index === 0) {
          const distance = Math.sqrt(Math.pow(info.offset.x, 2) + Math.pow(info.offset.y, 2))
          if (distance > 150) {
            removeCard()
          }
        }
      }}
      whileDrag={{
        scale: 1.05,
        boxShadow: `0 ${15 + index * 5}px ${40 + index * 10}px ${card.colors.shadow}`,
      }}
    >
      <motion.div
        className="relative flex h-full flex-col overflow-hidden rounded-2xl"
        style={{ color: card.colors.text }}
      >
        {/* Card Header */}
        <div className="flex items-center justify-between p-4">
          <div className="rounded-full bg-opacity-20 p-2" style={{ backgroundColor: `${card.colors.text}20` }}>
            {getIconComponent(card.icon)}
          </div>
          <div className="rounded-full bg-opacity-20 p-2" style={{ backgroundColor: `${card.colors.text}20` }}>
            <ArrowUpRight className="h-5 w-5" />
          </div>
        </div>

        {/* Card Title */}
        <div className="px-4 py-2">
          <h2 className="text-3xl font-bold">{card.domain}</h2>
          <h3 className="text-xl font-medium" style={{ color: `${card.colors.text}99` }}>
            {card.category}
          </h3>
        </div>

        {/* Card Content */}
        <div className="mt-2 px-4">
          <div
            className="aspect-video w-full overflow-hidden rounded-xl bg-cover bg-center p-6"
            style={{
              backgroundColor: `${card.colors.secondary}`,
              boxShadow: `0 10px 30px ${card.colors.shadow}`,
            }}
          >
            <div className="flex h-full flex-col items-center justify-center">
              <div className="mb-4 rounded-full bg-opacity-20 p-4" style={{ backgroundColor: `${card.colors.text}20` }}>
                {getIconComponent(card.icon)}
              </div>
              <h3 className="mb-2 text-center text-2xl font-bold">{card.domain.split(".")[0]}</h3>
              <p className="text-center text-sm">.{card.domain.split(".")[1]}</p>
            </div>
          </div>
        </div>

        {/* Card Footer */}
        <div className="mt-auto p-4">
          <div
            className="rounded-full px-3 py-1 text-sm"
            style={{
              backgroundColor: `${card.colors.text}20`,
              display: "inline-flex",
              alignItems: "center",
              gap: "0.25rem",
            }}
          >
            {getIconComponent(card.icon)}
            {card.category}
          </div>
          <p className="mt-3 text-sm opacity-80">{card.description}</p>
        </div>

        {/* Drag indicator for the top card */}
        {index === 0 && (
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 flex-col items-center">
            <motion.div
              className="h-1 w-10 rounded-full"
              style={{ backgroundColor: `${card.colors.text}40` }}
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            />
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

