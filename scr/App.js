import React, { useState } from 'react';
import {
  MapPin,
  Calendar,
  ArrowRight,
  Search,
  Instagram,
  Mail,
  ChevronRight,
  Menu,
  X,
  ExternalLink,
  Users,
  Home,
  ChevronLeft,
  Clock,
  Heart,
  MessageSquare,
  Send,
  Target,
  Globe,
  Zap,
  Link as LinkIcon
} from 'lucide-react';


// --- Données ---
const assos = [
  {
    id: 1,
    name: "Math'Rix",
    cat: "Maths & Informatique",
    desc: "Association de Maths de l'université Paris Cité.",
    fullDesc: "Math'Rix P7 est l'association des filières de Maths, Miashs et Math-Info. Elle vise à renforcer la cohésion entre étudiants à travers des événements pédagogiques (conférences, parrainage, Pi Day), culturels, ludiques (tournois) et festifs (afterworks, soirées). Elle participe également aux grands événements étudiants du campus.",
    loc: "Halle aux Farines",
    email: "mathrixp7@gmail.com, mathrix.paris7@gmail.com",
    instagram: "@mathrixup",
    linktree: "https://linktr.ee/mathrix ",
    image: "∑"  
  },
  {
    id: 4,
    name: "SCIVI",
    cat: "Sciences du Vivant",
    desc: "Représente les étudiants de l'UFR Sciences du Vivant.",
    fullDesc: "SciVi représente les étudiants au sein de l'UFR Sciences du Vivant. Elle a pour objectif d'aider, d'informer et d'animer la vie étudiante au sein de l'UFR et du campus des GM. Projet pédagogique et caritatifs sont egalement mis en place",
    loc: "Grands Moulins",
    email: "scivip7@gmail.com",
    website: "https://sciviupc.wordpress.com/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnE4nRUvjFASaPx_w6P1ZFAu_4oEWBfVokBci40wyWhKjzmD3DjaLo4EdU_Go_aem_tlKxmJ-Wu5XCi2gWN_nANw ",
    instagram: "@sciviup",
    linktree: "https://linktr.ee/SciviUp?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnhKvHeyzpCIy-towsXF3HQM7wNl3ZOdHkZRv2YS-C9ogM5WXeHqI2V89xpJs_aem_PKMy2Q1Atp2jq-s2bet6AQ ",
    image: "🧬"
  },
  {
    id: 2,
    name: "Phisis",
    cat: "Sciences & Physique",
    desc: "L'association des étudiants en Physique de Paris Cité.",
    fullDesc: "Phisis est l'association de physique de l'UPC. Elle organise des soirées, afterworks, conférences et cafés physiques pour permettre d'échanger, d'apprendre et d'enrichir la vie étudiante.",
    loc: "Grands moulins, au deuxième étage du bâtiment Condorcet, salle 256A",
    email: "phisis7@gmail.com",
    website: "https://u-paris.fr/physique/association-phisis/ ",
    instagram: "@phisis_upcite",
    linktree:"https://l.instagram.com/?u=https%3A%2F%2Flinktr.ee%2FPhisis%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnxpvKLgBjURYOq2nHT2hG2lBq854f-5Sm__H89UakvOBl-TGSceZFjimPiUM_aem_HuLR97rB-432lUicDcdQWw&e=AT7vF2nHlaIQWMctZlYCr8HxaT5Z-08dWJf03ZD2Jp8uelIrooXosG_Mirec53dKVh4yEZ4y-RhlSvDQZ4jzttY1cso1Rd5IfAssQxHqYSIzz0ydZrmzV8dCVQ ",
    image: "φ"
  },
  {
    id: 5,
    name: "Cinésept",
    cat: "Cinéma & Arts & Culture",
    desc: "L'association cinéma de l'Université Paris Cité.",
    fullDesc: "Cinesept propose de nombreuses projections de films, mais egalement du prêt de matériel pour réalisation de films et rédaction d'articles. Tout cela en plus des soirées et bars tout au long de l'année.",
    loc: "Grands Moulins",
    email: "contact.cinesept@gmail.com",
    instagram: "@cinesept + ses 3 pôles @septiemeclub @larevueseptieme @cine7_prod",
    image: "🎬"
  },
  {
    id: 6,
    name: "Diderot & Dragons",
    cat: "Jeux & Loisirs & Culture",
    desc: "L'association de jeux de société sur le campus des Grands Moulins.",
    fullDesc: "Diderot et Dragons réunit les amateurs de jeux de société, de jeux de rôle et de strategie dans une ambiance conviviale.",
    loc: "BU des Grands Moulins (les mardis et vendredis après-midi)",
    email:"diderot.et.dragons@gmail.com",
    instagram: "@diderot_et_dragons",
    linktree: "https://linktr.ee/diderotetdragons ",
    image: "🎲"
  },
  {
    id: 3,
    name: "Nanopotes",
    cat: "Chimie & Sciences",
    desc: "Association des étudiants chimistes de l'Université Paris Cité.",
    fullDesc: "Les Nanopotes regroupent les étudiants passionnés de chimie. L'association anime la vie étudiante à travers l'organisation de soirées, d'afterworks conviviaux et de sessions de tutorat pour accompagner les étudiants.",
    loc: "Grands Moulins",
    email: "nanopotes.chimie@gmail.com",
    instagram: "@nanopotesparis",
    linktree:"https://l.instagram.com/?u=https%3A%2F%2Flinktr.ee%2FNanopotesUPC%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn2YgEuS8sASImwVydgb1Ct0Vq-rlQIlPkjMgLVUtAovSBm1woLb8EuLTnz3k_aem_ICVx4lqgsZ-8HmmAPINNsg&e=AT6zjVp6ZtRGhCOMqqM_xBVf_hZCmzti5otSXY6WF7C_crFz16I0Mv0uWc88slNdxHgyHrRn_PJLW1lzaIBO1S95qXPSidXo45D3BUIRG5HEPD3KbP-Q9mci6w ",
    image: "🧪"
  },
  {
    id: 9,
    name: "Lettre Aimé",
    cat: "Littérature & Culture",
    desc: "Association littéraire et culturelle de l'université Paris Cité",
    fullDesc: "Lettre Aimé est l'association des étudiants en lettres de l'Université Paris Cité. Elle organise tout au long de l'année des soirées, afterworks, cafés-débats et cinés-débats, ainsi qu'un concours de nouvelles. L'association participe également aux grands événements étudiants du campus et aux projets inter-associatifs.",
    loc: "Grands Moulins",
    email:"bde.lettreaime.p7@gmail.com ??",
    instagram: "@lettreaime",
    linktree:"https://l.instagram.com/?u=https%3A%2F%2Flinktr.ee%2Flettreaime%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnGAHYAGPxUzKS_M7BIcUVL4zUoRb06hxQZeK9fQJ1hrNfGAsVs7nQCymeH9o_aem_1RxWtECXnMc-3yeoo7El_Q&e=AT6m242oFHq6y6ncV_mthMNklRxmMNkxcBqNFG_uklXPfyrwK791KSoNuxeyYeO6RGg5XoN8Aa74WlLKuoyIWu0D8gJl6fN-fxAQZgDD-Al6MgGHcmGVcV1E4Q ",
    image: "📖"
  },
  {
    id: 10,
    name: "Recup",
    cat: "Solidarité",
    desc: "Association de distributions alimentaires.",
    fullDesc: "Réseau écologique coopératif des universités de Paris. Association engagée dans la lutte contre la précarité étudiante et le gaspillage alimentaire via des distributions alimentaires régulières ouvertes à tous.",
    loc: "Grands moulins et autres campus",
    email:"asso.recup@gmail.com",
    instagram:"@assorecup",
    linktree:"https://l.instagram.com/?u=https%3A%2F%2Flinktr.ee%2Frecup%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnqvqbU1Rj7kZOtCItuKD0ndrhaODa9yZdq1iQKTuIEVIYd5vApC2feJGnYJs_aem_53Li2lJOYYK4J5A654h_uw&e=AT7qtNg7_lCeKxw5s3TS16_cvLcxeIeNUjtxyK5gzgkq_WimIPSEvMs-YQlRdcYwNAfnBnQGIIU04uaRHB7JFYwz6DqnTbzufqUa8VKCm1UYkE19NNDVx0oBWw ",
    image: "🍎"
  },
  {
    id: 11,
    name: "Pangéo",
    cat: "Géographie",
    desc: "Association de filière des étudiants en géographie.",
    fullDesc: "Pangéo organise des soirées, afterworks, cafés-débats, conférences et sorties culturelles, propose du tutorat et met à disposition des cours et fiches. Pangéo s'engage également dans des projets sociaux et écologiques sur le campus, publie des articles de vulgarisation géographique et participe aux événements universitaires et inter-associatifs.",
    loc: "Grands Moulins",
    instagram:"@assopangeo",
    email:"asso.pangeo@gmail.com, contact@assopangeo.fr",
    linktree:"https://l.instagram.com/?u=https%3A%2F%2Flinktr.ee%2Fassopangeo%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnuXnd3_1hoXZZPWaNQFbNJ4Ipn8i8P2WVPv0Dz049i63tWvYgIaWZGml5z_I_aem_sNXReUVqqynX2AUnctCvLw&e=AT6qlE6Fr-JgWuDTn0HrdgYlY_6dBTKv-0N2T7Gi_qgKYQS9wUfXz41o6yN3xEIWaaI0_h5uUgPtnvvzweD0fVSDVrhOpJqOabue5bU_JmT1TqfODCWogi0E0Q ",
    website:"https://www.assopangeo.fr/ ",
    image: "🗺️"
  },
  {
    id: 12,
    name: "HIGH'STORY",
    cat: "Histoire & Culture",
    desc: "L'association des étudiants en Histoire de l'Université Paris Cité-campus GM.",
    fullDesc: "Elle accompagne les étudiants dans leur parcours académique à travers des chroniques liées au programme, tout en favorisant l'intégration grâce à des événements conviviaux (afterworks, soirées, escape games) et des activités culturelles comme des expositions, conférences et rencontres professionnelles.",
    loc: "Grands Moulins",
    email:"lili.stoirep7@gmail.com ??",
    instagram: "@highstory7",
    linktree: "https://linktr.ee/highstory0 ",
    image: "🏺"
  },
  {
    id: 7,
    name: "Cuddle",
    cat: "Langues Étrangères & Culture & Solidarité",
    desc: "Coin universitaire des différentes langues étrangères de l'UPC.",
    fullDesc: "Organisateur d'événements, de cafés des langues, de conventions et autres événements pour les étudiants. Propose également un Drive et du soutien scolaire pour aider les étudiants dans leur cursus linguistique.",
    loc: "Grands Moulins",
    email:"cuddle.uparis@gmail.com",
    instagram: "@cuddle.uparis",
    linktree: "https://l.instagram.com/?u=https%3A%2F%2Flinktr.ee%2Fcuddle_upc%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn301vxmma4hH-vuOFxvLIq0KdbZnigCNl0pzCBpgr027TlWNCYDNunN4Y9yE_aem_zFjgCI6sQuNlcTtwPBcHlA&e=AT4qQlZLSOcKlbWGkyRUXIMjv7US8avd3Ue-jumCLc426tkjax5wWtdo5_PWKqdpnI-6A2h8bFjLarj8EpFhmmaZk4w1rZYeVw_1pD7YE9MKB3rtJkS-K2HoWA ",
    image: "🌍"
  },
  {
    id: 8,
    name: "AS'SOCIO",
    cat: "Sociologie & Sciences",
    desc: "Association des étudiants en sociologie à l'UPC.",
    fullDesc: "L'association dédiée à tous les passionnés de sociologie. Elle permet de développer la cohésion entre étudiants de la filière, anciens et actuels",
    loc: "Grands Moulins",
    email: "sociop7.diderot@gmail.com",
    instagram: "@as_socio",
    linktree: "https://l.instagram.com/?u=http%3A%2F%2Flinktr.ee%2Fas_socio%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnlRSgeG_dvp5z70WQlKca_TGePpJCfKreDsEmub5ZctMdCPLZ42qmzMsNowA_aem_zRcZ41zEUjn4B1qOtewz1Q&e=AT76rHxLyqFLmBGPguasYBp8PzgH5X6QMdSAkXKlz3nYBgsZrRV7UoJ2Z5z3lIbkM6oZafO0LWAD2ItFVGbqVCkFhzFbC7ZojKzk3J7CKVzA6nqzGA9nAPGnAQ ",
    image: "🗣️"
  }
];


// --- Composants ---


const Navbar = ({ activeTab, setActiveTab, setSelectedAsso }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const navItems = [
    { id: 'home', label: '🏠 Accueil', icon: Home },
    { id: 'assos', label: '👥 Associations', icon: Users },
    { id: 'mission', label: '✨ À propos / Mission', icon: Heart },
    { id: 'contact', label: '📩 Contact', icon: MessageSquare },
  ];


  const handleNav = (id) => {
    setActiveTab(id);
    setSelectedAsso(null);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Nom de la plateforme sans logo */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNav('home')}>
            <span className="text-xl font-bold text-[#8A1538] tracking-tighter">Asso'UP</span>
          </div>


          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`text-sm font-semibold transition-colors ${
                  activeTab === item.id ? 'text-[#8A1538]' : 'text-gray-500 hover:text-[#8A1538]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>


          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-500 p-2">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>


      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 py-4 space-y-1 shadow-xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl font-bold ${
                activeTab === item.id ? 'bg-[#8A1538]/5 text-[#8A1538]' : 'text-gray-600'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};


const AssoDetail = ({ asso, onBack }) => (
  <div className="max-w-4xl mx-auto px-4 py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <button onClick={onBack} className="flex items-center text-gray-500 hover:text-[#8A1538] mb-8 transition-colors font-bold">
      <ChevronLeft className="w-5 h-5 mr-1" /> Retour
    </button>


    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="h-32 bg-gradient-to-r from-[#8A1538] to-[#b01c48]"></div>
      <div className="px-8 pb-10">
        <div className="relative -mt-12 mb-6">
          <div className="w-24 h-24 bg-white rounded-2xl shadow-xl border-4 border-white flex items-center justify-center text-4xl">
            {asso.image}
          </div>
        </div>
       
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-black text-gray-900 leading-tight">{asso.name}</h1>
            <p className="text-[#8A1538] font-bold">{asso.cat}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {asso.email && (
              <a href={`mailto:${asso.email}`} className="px-4 py-2 bg-gray-50 rounded-xl text-gray-600 hover:text-[#8A1538] transition-colors border border-gray-100 flex items-center gap-2 font-bold text-sm">
                <Mail className="w-5 h-5 text-[#8A1538]" /> {asso.email}
              </a>
            )}
            {asso.instagram && (
              <div className="px-4 py-2 bg-gray-50 rounded-xl text-gray-600 flex items-center gap-2 font-bold text-sm border border-gray-100">
                <Instagram className="w-5 h-5 text-[#8A1538]" /> {asso.instagram}
              </div>
            )}
          </div>
        </div>


        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h2 className="text-lg font-black mb-4 uppercase tracking-wider text-gray-400">Description</h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">{asso.fullDesc}</p>
           
            <div className="flex flex-wrap gap-4">
              {asso.website && (
                <a href={asso.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-[#8A1538] text-white rounded-xl font-bold hover:bg-[#6d112d] transition-all gap-2 shadow-lg shadow-[#8A1538]/20">
                  Site de l'asso <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {asso.linktree && (
                <a href={asso.linktree} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-[#43E860] text-gray-900 rounded-xl font-bold hover:bg-[#39c852] transition-all gap-2 shadow-lg shadow-[#43E860]/20">
                  Linktree <LinkIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h3 className="font-bold mb-3 flex items-center text-gray-900 gap-2">
                <MapPin className="w-4 h-4 text-[#8A1538]" /> Localisation
              </h3>
              <p className="text-sm text-gray-700 font-bold">{asso.loc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);


// --- Main App ---


export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAsso, setSelectedAsso] = useState(null);


  const filteredAssos = assos.filter(asso =>
    asso.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    asso.cat.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#8A1538] selection:text-white">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} setSelectedAsso={setSelectedAsso} />


      <main>
        {selectedAsso ? (
          <AssoDetail asso={selectedAsso} onBack={() => setSelectedAsso(null)} />
        ) : (
          <>
            {activeTab === 'home' && (
              <>
                {/* Hero Section */}
                <section className="bg-gray-50 py-16 md:py-24 overflow-hidden relative">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
                      Trouve ton association <br />
                      <span className="text-[#8A1538]">aux Grands Moulins</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                      L'annuaire des associations du campus des Grands Moulins.<br />
                      Découvrez-les. Rejoignez-les.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <button
                        onClick={() => setActiveTab('assos')}
                        className="bg-[#8A1538] text-white px-10 py-4 rounded-2xl font-black hover:bg-[#6d112d] transition-all hover:scale-105 inline-flex items-center shadow-2xl shadow-[#8A1538]/30"
                      >
                        Voir les assos <ArrowRight className="ml-2 w-6 h-6" />
                      </button>
                    </div>
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#8A1538]/5 rounded-full blur-3xl"></div>
                </section>


                {/* Quick Search / A la une */}
                <section className="max-w-7xl mx-auto px-4 py-20">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
                    <div>
                      <h2 className="text-3xl font-black tracking-tight mb-2">À découvrir</h2>
                      <p className="text-gray-500 font-medium italic">Les assos qui font bouger ton campus </p>
                    </div>
                    <div className="relative w-full md:w-96">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Rechercher par nom ou filière..."
                        className="w-full pl-12 pr-6 py-4 border-2 border-gray-100 rounded-2xl outline-none focus:border-[#8A1538] focus:ring-4 focus:ring-[#8A1538]/5 transition-all font-semibold"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>


                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredAssos.map(asso => (
                      <div
                        key={asso.id}
                        onClick={() => setSelectedAsso(asso)}
                        className="group bg-white border-2 border-gray-50 p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-[#8A1538]/10 transition-all cursor-pointer relative"
                      >
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-[#8A1538]/5 transition-all">
                          {asso.image}
                        </div>
                        <h3 className="text-2xl font-black mb-2 group-hover:text-[#8A1538] transition-colors">{asso.name}</h3>
                        <p className="text-gray-500 font-medium line-clamp-2 mb-6 leading-relaxed">{asso.desc}</p>
                        <div className="flex items-center text-[#8A1538] font-black uppercase text-xs tracking-widest">
                          Détails <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </>
            )}


            {activeTab === 'assos' && (
              <section className="max-w-7xl mx-auto px-4 py-16 animate-in fade-in duration-500">
                <h2 className="text-4xl font-black mb-12 tracking-tight">Annuaire Complet</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {assos.map(asso => (
                    <div
                      key={asso.id}
                      onClick={() => setSelectedAsso(asso)}
                      className="flex items-center p-6 bg-white border-2 border-gray-50 rounded-2xl hover:border-[#8A1538]/20 hover:shadow-md cursor-pointer transition-all"
                    >
                      <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center text-2xl mr-5 shrink-0">
                        {asso.image}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-black text-gray-900 truncate text-lg">{asso.name}</h3>
                        <p className="text-sm text-[#8A1538] font-bold">{asso.cat}</p>
                      </div>
                      <ChevronRight className="ml-auto w-6 h-6 text-gray-200" />
                    </div>
                  ))}
                </div>
              </section>
            )}


            {activeTab === 'mission' && (
              <section className="animate-in fade-in duration-700">
                {/* Header Mission */}
                <div className="bg-[#8A1538] text-white py-20">
                  <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 italic">À propos / Mission</h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium leading-relaxed">
                      Asso'UP est la passerelle numérique entre les étudiants et la richesse associative de l'Université Paris Cité.
                    </p>
                  </div>
                </div>


                {/* Grid Content */}
                <div className="max-w-7xl mx-auto px-4 -mt-10 mb-20">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Colonne 1: Vision */}
                    <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-10 md:p-14 shadow-xl border border-gray-50">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-[#8A1538]/5 rounded-2xl flex items-center justify-center">
                          <Target className="text-[#8A1538] w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-black">Notre Projet</h3>
                      </div>
                      <p className="text-lg text-gray-600 leading-relaxed mb-6 font-medium">
                        Par sondage il a été retenu que plus de la moitié des étudiants du campus ne connaissent pas ne serait-ce qu' 1 association. Un constat étonnant au regard de leur nombre sur le campus.
                      </p>
                      <p className="text-lg text-gray-600 leading-relaxed font-medium italic border-l-4 border-[#8A1538] pl-6">
                        L'objectif de ce site est clair : mettre fin à la dispersion de l'information et faciliter la découverte des associations du campus.
                      </p>
                    </div>


                    {/* Colonne 2: Stats / Focus */}
                    <div className="space-y-8">
                      <div className="bg-gray-50 rounded-[2.5rem] p-8 border border-gray-100">
                        <div className="text-4xl font-black text-[#8A1538] mb-1">{assos.length}</div>
                        <div className="text-xs font-black uppercase tracking-widest text-gray-400">associations actives</div>
                      </div>
                      <div className="bg-gray-50 rounded-[2.5rem] p-8 border border-gray-100">
                        <div className="text-4xl font-black text-[#8A1538] mb-1">+25k</div>
                        <div className="text-xs font-black uppercase tracking-widest text-gray-400">étudiants impactés</div>
                      </div>
                    </div>
                  </div>
                </div>


                {/* Valeurs */}
                <div className="max-w-7xl mx-auto px-4 pb-20">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 bg-[#8A1538] text-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#8A1538]/30">
                        <Globe className="w-8 h-8" />
                      </div>
                      <h4 className="text-xl font-black mb-3">Visibilité</h4>
                      <p className="text-gray-500 font-medium leading-relaxed">Mettre en lumière les associations du campus des Grands Moulins grâce à une centralisation claire et accessible.</p>
                    </div>
                    <div className="text-center p-6">
                      <div className="w-16 h-16 bg-[#8A1538] text-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#8A1538]/30">
                        <Users className="w-8 h-8" />
                      </div>
                      <h4 className="text-xl font-black mb-3">Clarté</h4>
                      <p className="text-gray-500 font-medium leading-relaxed">Structurer les informations publiques pour les rendre simples, lisibles et comparables.</p>
                    </div>
                    <div className="text-center p-6">
                      <div className="w-16 h-16 bg-[#8A1538] text-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#8A1538]/30">
                        <Zap className="w-8 h-8" />
                      </div>
                      <h4 className="text-xl font-black mb-3">Accessibilité</h4>
                      <p className="text-gray-500 font-medium leading-relaxed">Permettre à chaque étudiant de découvrir rapidement les initiatives et de trouver comment s'y engager.</p>
                    </div>
                  </div>
                </div>
              </section>
            )}


            {activeTab === 'contact' && (
              <section className="max-w-4xl mx-auto px-4 py-20 animate-in fade-in duration-500">
                <div className="bg-gray-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden">
                  <div className="relative z-10 text-center md:text-left">
                    <h2 className="text-4xl font-black mb-6 leading-tight text-center md:text-left">Contact & édition</h2>
                    <p className="text-gray-400 text-lg mb-10 max-w-lg font-medium mx-auto md:mx-0">
                      Vous souhaitez ajouter votre association ou modifier/réctifier des informations ? Contactez-nous directement par e-mail.
                    </p>
                   
                    <div className="flex justify-center md:justify-start">
                      <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/10 w-full md:w-auto min-w-[300px]">
                        <Mail className="w-10 h-10 text-[#8A1538] mb-4 mx-auto md:mx-0" />
                        <h3 className="font-bold text-2xl mb-2">Par Email</h3>
                        <p className="text-gray-400 mb-6 text-sm font-medium">Pour toute demande d'édition</p>
                        <a
                          href="mailto:manuelortin97@gmail.com"
                          className="text-[#8A1538] text-xl font-black hover:underline break-all"
                        >
                          manuelortin97@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Decorative background circle */}
                  <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#8A1538]/20 rounded-full blur-3xl"></div>
                </div>
              </section>
            )}
          </>
        )}
      </main>


      <footer className="bg-white border-t border-gray-100 py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-8">
            <div className="text-2xl font-black text-[#8A1538] tracking-tighter">Asso'UP</div>
            <div className="flex gap-10 text-gray-400 text-sm font-bold uppercase tracking-widest">
              <span className="cursor-pointer hover:text-[#8A1538] transition-colors" onClick={() => setActiveTab('mission')}>À propos</span>
              <span className="cursor-pointer hover:text-[#8A1538] transition-colors" onClick={() => setActiveTab('assos')}>Annuaire</span>
              <span className="cursor-pointer hover:text-[#8A1538] transition-colors" onClick={() => setActiveTab('contact')}>Contact</span>
            </div>
            <p className="text-gray-300 text-xs font-bold uppercase tracking-widest">© 2026 Campus Grands Moulins</p>
          </div>
          <div className="text-center">
             <p className="text-gray-400 text-xs font-medium">
                Infos issues de sources publiques. Des erreurs ou omissions peuvent exister.
             </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
