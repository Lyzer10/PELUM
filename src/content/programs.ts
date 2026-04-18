import aboutWindmill from "@/assets/about-windmill.jpg";
import blogGrain from "@/assets/blog-grain.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import projectPlanting from "@/assets/project-planting.jpg";
import projectTea from "@/assets/project-tea.jpg";
import serviceOrganic from "@/assets/service-organic.jpg";

export type PelumProgram = {
  id: string;
  navLabel: string;
  title: string;
  kicker: string;
  image: string;
  imageAlt: string;
  cardDescription: string;
  paragraphs: string[];
  keyPointsTitle?: string;
  keyPoints?: string[];
  secondaryTitle?: string;
  secondaryPoints?: string[];
  stats?: Array<{ value: string; label: string }>;
};

export const pelumPrograms: PelumProgram[] = [
  {
    id: "seed-right",
    navLabel: "Seed Right",
    title: "Our Seed Our Right",
    kicker: "Seed sovereignty and farmer-owned seed systems",
    image: blogGrain,
    imageAlt: "Hands holding seeds",
    cardDescription:
      "PELUM Tanzania promotes farmer-owned seed systems so smallholder farmers can access quality seeds, protect indigenous knowledge, and strengthen seed sovereignty.",
    paragraphs: [
      "Most smallholder farmers depend on seeds from informal seed systems. In Tanzania, 83% of smallholder farmers use seeds from the informal seed system while the formal seed system supplies only 17% of the seeds used by smallholder farmers. Tanzanian smallholder farmers produce an average of 95% of the national food demand, making it essential to recognize, support, and improve this system for income, food, and nutrition security.",
      "Despite this reality, there is still limited understanding and recognition of local knowledge in seed management, the state of agro-biodiversity from which seed is drawn, and the implications this has for future seed and food security. Stakeholders also do not sufficiently acknowledge how local seed systems connect with and support the formal seed system.",
      "PELUM Tanzania's working hypothesis is that when farmer-owned seed systems and indigenous knowledge in seed management are promoted, seed sovereignty, income, and food security are strengthened while seed biodiversity is preserved and conserved. The program therefore strengthens the capacity of member organizations in seed production and management so they can support smallholder farmers to produce and use quality seeds in their localities.",
      "The program also advocates for a seed legal framework that recognizes smallholder farmers' seed rights. Farmer-owned seed systems ensure diversity of seeds, multiple ways of accessing seed, fair prices in local markets, and timely availability of quality seeds to smallholder farmers.",
    ],
    keyPointsTitle: "What this program protects",
    keyPoints: [
      "Farmer seed rights and seed sovereignty",
      "Indigenous knowledge in seed management",
      "Seed biodiversity preservation and conservation",
      "Income, food, and nutrition security for smallholder farmers",
    ],
  },
  {
    id: "land-rights",
    navLabel: "Land Rights",
    title: "Land Rights for Smallholder Farmers",
    kicker: "Empowering farmers to participate in village land governance",
    image: aboutWindmill,
    imageAlt: "Open farmland landscape",
    cardDescription:
      "This program builds the knowledge and voice of smallholder farmers and local leaders so land governance becomes more transparent, inclusive, and accountable.",
    paragraphs: [
      "Land is one of Tanzania's major resources, alongside forests, water, and minerals. About 82% of the total rural population is employed in the agricultural sector, meaning access to land is central to food security, livelihoods, and national development.",
      "Although Tanzania established the National Land Policy of 1995 and the Land Laws of 1999 through the Village Land Act No. 5 and the Land Act No. 4, much less effort has gone into helping smallholder farmers understand the legal framework, the implications of large-scale agricultural investment, and how land decisions affect livelihoods and sustainable development.",
      "PELUM Tanzania's development hypothesis is that if smallholder farmers are empowered to play their roles in land rights governance, village land will be used for sustainable development and local governments will become more accountable to citizens, resulting in improved livelihoods.",
      "PELUM Tanzania and its implementing members pursue this through capacity building for smallholder farmers and local leaders, networking and advocacy at village, district, and national level, and the use of land rights Information, Education and Communication materials. The expected result is increased transparency, accountability, and inclusive participation in village land decision-making.",
    ],
    keyPointsTitle: "How the program works",
    keyPoints: [
      "Build capacities on land rights governance",
      "Support networking and advocacy from village to national level",
      "Use IEC materials to improve awareness and participation",
      "Promote transparent and accountable village land management",
    ],
  },
  {
    id: "women-empowerment",
    navLabel: "Women empowerment",
    title: "Rural Women Cultivating Change",
    kicker: "Women's rights, climate adaptation, and resilient food systems",
    image: projectTea,
    imageAlt: "Woman working in a green agricultural field",
    cardDescription:
      "RWCC strengthens leadership, participation, and economic opportunity for rural women while advancing climate resilience, agroecology, and local food systems.",
    paragraphs: [
      "Rural Women Cultivating Change in East Africa is funded by SeedChange and the Government of Canada through Global Affairs Canada. The program strengthens leadership of smallholder farm women and their participation in decision-making processes, including women's and farmers' rights and climate adaptation, while enhancing benefits for rural women in climate resilient and local food systems.",
      "The program targets remote rural regions of Ethiopia, Kenya, and Tanzania where farming is the primary occupation and a major source of women's labour. In Tanzania it works in Morogoro and Gairo District Councils of Morogoro, Babati and Mbulu District Councils of Manyara, and Mwanga and Same District Councils of Kilimanjaro, in collaboration with women's rights organizations and agriculture-based organizations.",
      "The program invests in women's economic productivity and uses agroecological approaches such as community-based water conservation, on-farm crop diversification, tree planting, soil conservation, participatory crop diversity development, community seed banking, and the use of local designs and materials for small structures. These actions support climate adaptation, increase food security, reduce sexual and gender-based violence, and improve livelihoods.",
      "A rights-based framework guides the program, with strong attention to equality, non-discrimination, participation, inclusion, transparency, accountability, and strengthening the human rights capacity of key stakeholders. Women rights-holders are encouraged to take up leadership roles and hold others accountable, while diverse women and men are trained in advocacy that influences local government implementation of women's and farmers' rights.",
    ],
    stats: [
      { value: "24,077", label: "Young and adult rural women engaged" },
      { value: "8,151", label: "Young and adult rural men engaged" },
      { value: "93,070", label: "Direct rural beneficiaries" },
      { value: "10M+", label: "Estimated indirect beneficiaries" },
    ],
    keyPointsTitle: "Intermediate outcomes",
    keyPoints: [
      "Enhanced leadership and systematic participation of diverse rural women in public decision-making, women's rights, farmers' rights, and climate adaptation.",
      "Strengthened prevention of and response to sexual and gender-based violence by individuals and state or civil society actors.",
      "Enhanced benefits for rural women in climate-resilient local food systems, including income generation and access to productive resources.",
    ],
  },
  {
    id: "eoa",
    navLabel: "EOA",
    title: "Ecological Organic Agriculture (EOA)",
    kicker: "Mainstreaming ecological organic agriculture into national systems",
    image: serviceOrganic,
    imageAlt: "Fresh organic vegetables",
    cardDescription:
      "PELUM Tanzania supports the Information and Communication pillar of the EOA initiative in Tanzania so producers, institutions, and policymakers can act on ecological organic agriculture knowledge.",
    paragraphs: [
      "Ecological Organic Agriculture is an African initiative with the mission of promoting ecologically sound strategies and practices among diverse stakeholders in production, processing, marketing, and policy making to safeguard the environment, improve livelihoods, alleviate poverty, and guarantee food security.",
      "The initiative is implemented through the project 'Mainstreaming Ecological Organic Agriculture into National Policies, Strategies and Programmes in Africa'. In Eastern Africa it operates in Kenya, Tanzania, Uganda, and Ethiopia. The initiative is driven by four pillars: Research, Training and Extension; Information and Communication; Value Chain and Market Development; and Supporting and Cementing Steering, Coordination and Management.",
      "Its goal is to mainstream Ecological Organic Agriculture into national agricultural production systems by 2025 in order to improve agricultural productivity, food security, market access, and sustainable development in Africa. Tanzania Organic Agriculture Movement is the lead agency in Tanzania, while PELUM Tanzania implements Pillar Two on Information and Communication.",
      "Through this role, PELUM Tanzania uses information and communication strategies, products, and technologies to share insights and lessons from farmers, processors, marketers, extension agents, and researchers so the public and policymakers better understand the importance of EOA.",
    ],
    keyPointsTitle: "Project objectives",
    keyPoints: [
      "Increase documentation of information and knowledge on organic agricultural products along the complete value chain and support translation into practice.",
      "Systematically inform producers about EOA approaches and good practices and motivate uptake through stronger advisory and support services.",
      "Increase the share of quality organic products in local, national, and regional markets.",
      "Strengthen inclusive stakeholder engagement in organic commodities value chain development through multi-stakeholder platforms.",
    ],
    secondaryTitle: "Expected outcomes",
    secondaryPoints: [
      "EOA knowledge along the value chain is increasingly documented and applied in practice.",
      "Producers are better informed and motivated to use EOA approaches and good practices.",
      "A substantially increased share of organic quality products reaches local, national, and regional markets.",
      "National, regional, and continental platforms lead to positive changes in policy, investment plans, standards, research, training, information, and markets.",
    ],
  },
  {
    id: "access-to-markets",
    navLabel: "Access to Markets",
    title: "Farmers Access to Markets",
    kicker: "Fair agro-markets for improved smallholder farmers' livelihoods",
    image: heroBg,
    imageAlt: "Wide agricultural landscape",
    cardDescription:
      "This program improves smallholder access to fair agro-markets by building business linkages, advocacy capacity, institutional strength, and inclusive value chains.",
    paragraphs: [
      "Tanzania has huge market potential for agricultural and value-added products, but smallholder farmers still face major barriers including inadequate quantities and quality, poor access to market information, limited entrepreneurship capacity, weak policy support, a lack of farmer-friendly financial services, and poor infrastructure.",
      "Through this program, PELUM Tanzania establishes agribusiness development and market linkages among chain actors and smallholder farmers, enhances the capacity of member organizations to undertake market-related advocacy, mainstreams gender across the entire value chain, and builds the institutional capacity of member organizations.",
      "The program is participatory in nature and involves the PELUM Country Secretariat, member organizations, market access and advocacy thematic committees, and smallholder farmers themselves. Their direct participation strengthens advocacy because affected farmers speak for themselves.",
      "PELUM Tanzania's core working strategies in this program include capacity building, networking and information sharing, and advocacy for sustainable access to fair agro-markets.",
    ],
    keyPointsTitle: "Program priorities",
    keyPoints: [
      "Agri-business development and market linkages",
      "Market-related advocacy by member organizations",
      "Gender mainstreaming across the value chain",
      "Institutional strengthening of member organizations",
    ],
  },
  {
    id: "small-projects",
    navLabel: "Small projects",
    title: "Small projects to strengthen local agro-ecological development initiatives (IMARIKA)",
    kicker: "Local grants for community-led agro-ecological development",
    image: projectPlanting,
    imageAlt: "Hands planting young crops in the field",
    cardDescription:
      "IMARIKA supports farmer groups, CBOs, and small NGOs with grants and capacity support so local agro-ecological development initiatives can grow sustainably.",
    paragraphs: [
      "The IMARIKA project is funded by Bread for the World - Protestant Development through its Protestant Agency for Diakonia and Development. Its goal is to ensure that rural development in Tanzania takes place with the inclusion of, and in harmony with, local smallholders' agro-ecological development initiatives.",
      "The project provides grants to farmer groups, community-based organizations, and small NGOs. These community organizations often emerge from the needs of ordinary people and can play a strong role in improving livelihoods, economic empowerment through agricultural value chains, and sustainable use of natural resources, but they often face serious capacity challenges.",
      "Those challenges include weak financial management, poor group and CBO management, inadequate planning, monitoring and evaluation, weak information and communication systems, low knowledge of agro-ecological methods, and limited skills in natural resource management and value addition.",
      "IMARIKA has been designed to address these issues so community organizations can better fulfil their role in improving rural livelihoods. Under the program, PELUM Tanzania serves as the Central Project Holder while supported groups, CBOs, and small NGOs act as Decentralised Local Project Holders.",
    ],
    keyPointsTitle: "Core themes supported",
    keyPoints: [
      "Economic empowerment in agricultural value chains",
      "Natural resource management, including agroforestry, afforestation, reforestation, and wetland and water catchment protection",
      "Capacity strengthening for CBOs, farmer groups, and small NGOs",
      "Environmental awareness, law enforcement, clean energy technologies, land rights, and governance",
    ],
  },
];
