// WildLife Explorer uses data arrays only. No backend, database, or framework is required.
document.body.classList.add("loading");

const featuredAnimals = [
  {
    name: "Amur Leopard",
    status: "Critically Endangered",
    image: "amur-leopard,wildlife",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/123024/leopard2.jpg",
    line: "A rare forest cat moving silently through the snowy mountains of the Russian Far East.",
  },
  {
    name: "Asiatic Lion",
    status: "Endangered",
    image: "asiatic-lion,wildlife",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/123024/lion2.jpg",
    line: "The last wild Asiatic lions survive in India's Gir landscape, protected by careful conservation.",
  },
  {
    name: "Siberian Tiger",
    status: "Endangered",
    image: "siberian-tiger,wildlife",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/123024/tiger2.jpg",
    line: "A cold-forest predator built for power, patience, and long journeys through deep snow.",
  },
  {
    name: "Brown Bear",
    status: "Least Concern",
    image: "brown-bear,wildlife",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/123024/bear2.jpg",
    line: "A strong omnivore that shapes forests, rivers, and mountain valleys across the north.",
  },
  {
    name: "Snow Leopard",
    status: "Vulnerable",
    image: "snow-leopard,mountains",
    line: "The ghost of the mountains, perfectly adapted to cliffs, cold air, and hidden movement.",
  },
  {
    name: "Black Panther",
    status: "Near Threatened",
    image: "black-panther,wildlife",
    line: "A dark-coated leopard or jaguar with a mysterious presence in dense forests.",
  },
  {
    name: "Arctic Wolf",
    status: "Least Concern",
    image: "arctic-wolf,snow",
    line: "A resilient pack hunter surviving long winters across tundra and ice-covered plains.",
  },
  {
    name: "Gorilla",
    status: "Endangered",
    image: "gorilla,forest",
    src: "https://images.pexels.com/photos/6949387/pexels-photo-6949387.jpeg?auto=compress&cs=tinysrgb&w=1600",
    line: "A powerful great ape with close family bonds and a vital role in forest ecosystems.",
  },
  {
    name: "Elephant",
    status: "Endangered",
    image: "elephant,savanna",
    src: "https://images.pexels.com/photos/9533759/pexels-photo-9533759.jpeg?auto=compress&cs=tinysrgb&w=1600",
    line: "A wise giant that travels ancient routes and keeps grassland habitats alive.",
  },
  {
    name: "Polar Bear",
    status: "Vulnerable",
    image: "polar-bear,arctic",
    src: "https://images.pexels.com/photos/19082894/pexels-photo-19082894.jpeg?auto=compress&cs=tinysrgb&w=1600",
    line: "A marine bear dependent on sea ice, silence, and patience in the Arctic wilderness.",
  },
];

const animals = [
  {
    name: "Tiger",
    habitat: "Asian forests and grasslands",
    region: "Asia",
    lifespan: "10 to 15 years",
    status: "Endangered",
    image: "tiger,wildlife",
    description:
      "Tigers are solitary hunters with powerful bodies and sharp senses. They need large forest territories and healthy prey populations. Their presence shows that a forest ecosystem is still strong.",
  },
  {
    name: "Lion",
    habitat: "African savannas and Gir Forest",
    region: "Africa",
    lifespan: "10 to 16 years",
    status: "Vulnerable",
    image: "lion,savanna",
    description:
      "Lions live in social prides and hunt across open grasslands. They are major predators that help balance herbivore populations. Habitat loss and conflict make their protection important.",
  },
  {
    name: "Elephant",
    habitat: "Savannas, forests, and wetlands",
    region: "Africa",
    lifespan: "60 to 70 years",
    status: "Endangered",
    image: "elephant,wildlife",
    description:
      "Elephants are intelligent family animals with long memories. They create paths, spread seeds, and open water holes. Their movement supports many other species in the same habitat.",
  },
  {
    name: "Leopard",
    habitat: "Forests, mountains, and grasslands",
    region: "Asia",
    lifespan: "12 to 17 years",
    status: "Vulnerable",
    image: "leopard,wildlife",
    description:
      "Leopards are adaptable cats that can live in many landscapes. They climb trees well and often move at night. Their spotted coat helps them disappear into shadows and branches.",
  },
  {
    name: "Polar Bear",
    habitat: "Arctic sea ice and coasts",
    region: "Arctic",
    lifespan: "20 to 25 years",
    status: "Vulnerable",
    image: "polar-bear,ice",
    description:
      "Polar bears are marine mammals that depend on sea ice for hunting seals. Their thick fur and fat protect them from cold. Climate change is the biggest pressure on their habitat.",
  },
  {
    name: "Wolf",
    habitat: "Forests, tundra, and plains",
    region: "North America",
    lifespan: "6 to 13 years",
    status: "Least Concern",
    image: "wolf,wildlife",
    description:
      "Wolves live in packs with strong social structure. They communicate through calls, scent, and body language. As predators, they help keep prey herds healthy and alert.",
  },
  {
    name: "Fox",
    habitat: "Forests, farms, grasslands, and cities",
    region: "Worldwide",
    lifespan: "3 to 6 years",
    status: "Least Concern",
    image: "red-fox,wildlife",
    description:
      "Foxes are clever hunters that adjust well to many environments. They eat small animals, fruit, and insects. Their adaptability lets them survive near both wild spaces and human settlements.",
  },
  {
    name: "Panda",
    habitat: "Mountain bamboo forests",
    region: "Asia",
    lifespan: "20 years",
    status: "Vulnerable",
    image: "giant-panda,bamboo",
    description:
      "Giant pandas feed mainly on bamboo and spend many hours eating each day. They are symbols of wildlife conservation. Protected forests have helped their population recover slowly.",
  },
  {
    name: "Gorilla",
    habitat: "Central African tropical forests",
    region: "Africa",
    lifespan: "35 to 40 years",
    status: "Endangered",
    image: "gorilla,wildlife",
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Western_lowland_gorilla_%28Gorilla_gorilla_gorilla%29.jpg?width=900",
    description:
      "Gorillas are gentle great apes that live in family groups. They feed on leaves, fruit, and stems. Protecting them also protects large areas of rainforest.",
  },
  {
    name: "Kangaroo",
    habitat: "Australian grasslands and scrublands",
    region: "Australia",
    lifespan: "8 to 12 years",
    status: "Least Concern",
    image: "kangaroo,australia",
    description:
      "Kangaroos are marsupials built for efficient hopping. Mothers carry young in a pouch until they grow stronger. They are well adapted to dry open landscapes.",
  },
  {
    name: "Zebra",
    habitat: "African grasslands",
    region: "Africa",
    lifespan: "20 to 25 years",
    status: "Near Threatened",
    image: "zebra,grassland",
    description:
      "Zebras live in herds and rely on group alertness for safety. Each stripe pattern is unique. They graze across open plains and support predator-prey balance.",
  },
  {
    name: "Rhino",
    habitat: "Grasslands, savannas, and forests",
    region: "Africa",
    lifespan: "35 to 50 years",
    status: "Critically Endangered",
    image: "rhinoceros,wildlife",
    description:
      "Rhinos are heavy herbivores with horns made of keratin. They shape vegetation by grazing and browsing. Anti-poaching work is essential for their survival.",
  },
  {
    name: "Hippo",
    habitat: "African rivers and wetlands",
    region: "Africa",
    lifespan: "40 to 50 years",
    status: "Vulnerable",
    image: "hippopotamus,river",
    description:
      "Hippos spend hot days in water and graze on land at night. They create pathways between rivers and grasslands. Their river activity affects fish and wetland systems.",
  },
  {
    name: "Jaguar",
    habitat: "Rainforests and wetlands",
    region: "South America",
    lifespan: "12 to 15 years",
    status: "Near Threatened",
    image: "jaguar,forest",
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Panthera_onca.jpg?width=900",
    description:
      "Jaguars are strong cats with powerful jaws and excellent swimming ability. They hunt in dense forests and wetlands. Protecting jaguars means protecting large connected habitats.",
  },
  {
    name: "Cheetah",
    habitat: "Open grasslands and savannas",
    region: "Africa",
    lifespan: "10 to 12 years",
    status: "Vulnerable",
    image: "cheetah,savanna",
    description:
      "Cheetahs are the fastest land animals over short distances. Their slim bodies are designed for speed instead of strength. They need open land to hunt successfully.",
  },
  {
    name: "Koala",
    habitat: "Eucalyptus forests",
    region: "Australia",
    lifespan: "10 to 15 years",
    status: "Vulnerable",
    image: "koala,eucalyptus",
    description:
      "Koalas live in trees and feed mostly on eucalyptus leaves. They rest for long hours to save energy. Forest loss and heat stress are major threats.",
  },
  {
    name: "Red Panda",
    habitat: "Eastern Himalayan forests",
    region: "Asia",
    lifespan: "8 to 12 years",
    status: "Endangered",
    image: "red-panda,forest",
    description:
      "Red pandas are small tree-dwelling mammals with long tails. They eat bamboo, fruit, and small foods. Their forest homes are fragmented by human activity.",
  },
  {
    name: "Snow Leopard",
    habitat: "High Asian mountains",
    region: "Asia",
    lifespan: "15 to 18 years",
    status: "Vulnerable",
    image: "snow-leopard,wildlife",
    description:
      "Snow leopards move across cliffs and cold mountain slopes. Their thick tails help with balance and warmth. They are rarely seen, which makes research difficult.",
  },
  {
    name: "Deer",
    habitat: "Forests, meadows, and wetlands",
    region: "Worldwide",
    lifespan: "6 to 14 years",
    status: "Least Concern",
    image: "deer,forest",
    description:
      "Deer are alert herbivores found in many habitats. They browse leaves, shoots, and grasses. Their movements support predators and influence plant growth.",
  },
  {
    name: "Crocodile",
    habitat: "Rivers, wetlands, and mangroves",
    region: "Asia",
    lifespan: "35 to 75 years",
    status: "Least Concern",
    image: "crocodile,river",
    description:
      "Crocodiles are ancient reptiles adapted for water ambush hunting. They wait patiently and move with sudden power. Wetland protection keeps their ecosystem stable.",
  },
  {
    name: "Owl",
    habitat: "Forests, deserts, farms, and cities",
    region: "Worldwide",
    lifespan: "10 to 25 years",
    status: "Least Concern",
    image: "owl,bird",
    description:
      "Owls hunt mostly at night with silent wings and strong hearing. Their eyes are adapted for low light. They help control small mammal populations.",
  },
  {
    name: "Peacock",
    habitat: "Forests and farms of South Asia",
    region: "Asia",
    lifespan: "15 to 20 years",
    status: "Least Concern",
    image: "peacock,bird",
    description:
      "Peacocks are known for brilliant display feathers. Males spread their trains during courtship. They are common around forests, fields, and villages in South Asia.",
  },
  {
    name: "Eagle",
    habitat: "Mountains, forests, lakes, and coasts",
    region: "Worldwide",
    lifespan: "20 to 30 years",
    status: "Least Concern",
    image: "eagle,bird",
    description:
      "Eagles are powerful birds of prey with sharp eyesight. They hunt fish, mammals, and birds depending on species. Their nests are often large and reused for years.",
  },
  {
    name: "Penguin",
    habitat: "Southern coasts and Antarctic regions",
    region: "Antarctica",
    lifespan: "15 to 20 years",
    status: "Near Threatened",
    image: "penguin,antarctica",
    description:
      "Penguins are flightless seabirds built for swimming. Their bodies move through water with speed and control. Many species depend on cold ocean food chains.",
  },
  {
    name: "Camel",
    habitat: "Deserts and dry grasslands",
    region: "Asia",
    lifespan: "40 to 50 years",
    status: "Domesticated",
    image: "camel,desert",
    description:
      "Camels survive extreme dry conditions with special body adaptations. They can travel long distances with limited water. Their history is closely tied to desert communities.",
  },
  {
    name: "Chimpanzee",
    habitat: "African forests and woodlands",
    region: "Africa",
    lifespan: "33 to 40 years",
    status: "Endangered",
    image: "chimpanzee,forest",
    description:
      "Chimpanzees are intelligent primates that use tools and learn socially. Their communities have complex relationships. Forest protection is vital for their future.",
  },
  {
    name: "Buffalo",
    habitat: "Grasslands, forests, and wetlands",
    region: "Africa",
    lifespan: "18 to 25 years",
    status: "Near Threatened",
    image: "buffalo,wildlife",
    description:
      "Wild buffalo live in herds and rely on strength and numbers. They graze heavily and influence grassland patterns. They are respected for their defensive behavior.",
  },
  {
    name: "Moose",
    habitat: "Northern forests and wetlands",
    region: "North America",
    lifespan: "15 to 20 years",
    status: "Least Concern",
    image: "moose,forest",
    description:
      "Moose are the largest deer species and often feed near lakes and marshes. Their long legs help them move through snow and water. Bulls grow large antlers each year.",
  },
  {
    name: "Otter",
    habitat: "Rivers, lakes, wetlands, and coasts",
    region: "Worldwide",
    lifespan: "10 to 15 years",
    status: "Near Threatened",
    image: "otter,river",
    description:
      "Otters are active swimmers with dense waterproof fur. They hunt fish, crabs, and shellfish. Clean waterways are important for healthy otter populations.",
  },
  {
    name: "Seal",
    habitat: "Cold and temperate oceans",
    region: "Oceans",
    lifespan: "20 to 30 years",
    status: "Least Concern",
    image: "seal,ocean",
    description:
      "Seals divide their lives between water and shore. They are strong divers and skilled fish hunters. Many rest on rocks, beaches, or ice after feeding.",
  },
  {
    name: "Walrus",
    habitat: "Arctic seas and ice edges",
    region: "Arctic",
    lifespan: "30 to 40 years",
    status: "Vulnerable",
    image: "walrus,arctic",
    description:
      "Walruses use tusks for display, movement, and social behavior. They feed on shellfish from the sea floor. Sea ice change affects their resting habitat.",
  },
  {
    name: "Hyena",
    habitat: "Savannas and scrublands",
    region: "Africa",
    lifespan: "12 to 25 years",
    status: "Least Concern",
    image: "hyena,savanna",
    description:
      "Hyenas are intelligent social carnivores with strong jaws. They hunt and scavenge, keeping ecosystems cleaner. Their clans have complex ranks and communication.",
  },
  {
    name: "Flamingo",
    habitat: "Salt lakes, lagoons, and wetlands",
    region: "Worldwide",
    lifespan: "20 to 30 years",
    status: "Least Concern",
    image: "flamingo,wetland",
    description:
      "Flamingos filter tiny organisms from shallow water. Their pink color comes from pigments in their food. Large flocks create striking wetland scenes.",
  },
  {
    name: "Parrot",
    habitat: "Tropical forests and woodlands",
    region: "South America",
    lifespan: "30 to 50 years",
    status: "Varies by Species",
    image: "parrot,rainforest",
    description:
      "Parrots are intelligent birds with strong beaks and social behavior. Many mimic sounds and learn from their groups. Forest loss and illegal trade threaten some species.",
  },
  {
    name: "Raccoon",
    habitat: "Forests, wetlands, and urban areas",
    region: "North America",
    lifespan: "2 to 5 years",
    status: "Least Concern",
    image: "raccoon,wildlife",
    description:
      "Raccoons are adaptable mammals with excellent problem-solving skills. They search for food near water, trees, and cities. Their sensitive paws help them inspect objects.",
  },
  {
    name: "Squirrel",
    habitat: "Forests, parks, and gardens",
    region: "Worldwide",
    lifespan: "5 to 10 years",
    status: "Least Concern",
    image: "squirrel,forest",
    description:
      "Squirrels are quick climbers that collect nuts and seeds. Their caching behavior helps many trees spread. They are active, alert, and easy to notice in green spaces.",
  },
  {
    name: "Bison",
    habitat: "North American grasslands",
    region: "North America",
    lifespan: "15 to 20 years",
    status: "Near Threatened",
    image: "bison,grassland",
    description:
      "Bison are strong grazers that once moved in huge herds. Their grazing supports prairie diversity. Conservation programs have helped return them to protected lands.",
  },
  {
    name: "Lemur",
    habitat: "Madagascar forests",
    region: "Africa",
    lifespan: "16 to 20 years",
    status: "Endangered",
    image: "lemur,forest",
    description:
      "Lemurs are primates found only in Madagascar. Different species leap, climb, or move through forests in unique ways. Their survival depends on protecting island habitats.",
  },
  {
    name: "Arctic Fox",
    habitat: "Arctic tundra",
    region: "Arctic",
    lifespan: "3 to 6 years",
    status: "Least Concern",
    image: "arctic-fox,snow",
    description:
      "Arctic foxes have thick fur and compact bodies for extreme cold. Their coat color changes with the season. They follow food opportunities across tundra landscapes.",
  },
  {
    name: "Black Panther",
    habitat: "Dense tropical forests",
    region: "Asia",
    lifespan: "12 to 15 years",
    status: "Near Threatened",
    image: "black-panther,forest",
    description:
      "Black panthers are melanistic leopards or jaguars. Their dark coats help them blend into shadowy forests. They are secretive hunters and rarely seen in daylight.",
  },
  {
    name: "Wild Dog",
    habitat: "African savannas and open woodlands",
    region: "Africa",
    lifespan: "10 to 12 years",
    status: "Endangered",
    image: "african-wild-dog,savanna",
    description:
      "African wild dogs are cooperative hunters with strong pack bonds. They communicate constantly while moving across large territories. Habitat fragmentation is a serious threat.",
  },
  {
    name: "Python",
    habitat: "Forests, wetlands, and grasslands",
    region: "Asia",
    lifespan: "20 to 30 years",
    status: "Least Concern",
    image: "python,snake",
    description:
      "Pythons are non-venomous snakes that use strength to capture prey. Many live near water and vegetation. They are important predators in tropical food webs.",
  },
  {
    name: "King Cobra",
    habitat: "Forests and plains of South Asia",
    region: "Asia",
    lifespan: "15 to 20 years",
    status: "Vulnerable",
    image: "king-cobra,snake",
    description:
      "King cobras are the longest venomous snakes in the world. They often hunt other snakes and avoid people when possible. Forest loss reduces their natural range.",
  },
  {
    name: "Shark",
    habitat: "Oceans worldwide",
    region: "Oceans",
    lifespan: "20 to 70 years",
    status: "Varies by Species",
    image: "shark,ocean",
    description:
      "Sharks are ancient ocean predators with powerful senses. They help maintain balance in marine ecosystems. Many species are threatened by overfishing and fin trade.",
  },
  {
    name: "Dolphin",
    habitat: "Warm and temperate seas",
    region: "Oceans",
    lifespan: "20 to 50 years",
    status: "Least Concern",
    image: "dolphin,ocean",
    description:
      "Dolphins are social marine mammals that use sound to navigate and hunt. They often travel in groups. Clean oceans and safe fishing practices protect them.",
  },
  {
    name: "Whale",
    habitat: "Open oceans worldwide",
    region: "Oceans",
    lifespan: "70 to 90 years",
    status: "Endangered",
    image: "whale,ocean",
    description:
      "Whales are giant ocean mammals that migrate across vast distances. Some feed on tiny krill, while others hunt fish or squid. Their recovery shows the value of marine protection.",
  },
  {
    name: "Octopus",
    habitat: "Coral reefs and ocean floors",
    region: "Oceans",
    lifespan: "1 to 5 years",
    status: "Least Concern",
    image: "octopus,ocean",
    description:
      "Octopuses are intelligent invertebrates with flexible bodies and problem-solving skills. They change color and texture for camouflage. Their short lives are full of complex behavior.",
  },
  {
    name: "Tortoise",
    habitat: "Dry forests, islands, and grasslands",
    region: "Worldwide",
    lifespan: "80 to 150 years",
    status: "Vulnerable",
    image: "tortoise,wildlife",
    description:
      "Tortoises are slow land reptiles with long lives and protective shells. They graze on plants and help spread seeds. Island species are especially sensitive to habitat change.",
  },
  {
    name: "Frog",
    habitat: "Wetlands, forests, and freshwater edges",
    region: "Worldwide",
    lifespan: "4 to 15 years",
    status: "Varies by Species",
    image: "frog,wetland",
    description:
      "Frogs are amphibians that need clean water and healthy land habitats. Their skin is sensitive to pollution. They are important indicators of environmental health.",
  },
  {
    name: "Chameleon",
    habitat: "Forests and shrublands",
    region: "Africa",
    lifespan: "3 to 10 years",
    status: "Varies by Species",
    image: "chameleon,forest",
    description:
      "Chameleons are reptiles known for color change, rotating eyes, and long tongues. They hunt insects from branches. Many species depend on small, specific habitats.",
  },
];

const pexelsPhotoIds = {
  Tiger: 12167844,
  Lion: 615480,
  Elephant: 9533759,
  Leopard: 7124473,
  PolarBear: 19082894,
  Wolf: 12428924,
  Fox: 13533977,
  Panda: 16200703,
  Gorilla: 6949387,
  Kangaroo: 17874395,
  Zebra: 7287449,
  Rhino: 10039233,
  Hippo: 11857215,
  Jaguar: 12861716,
  Cheetah: 2544554,
  Koala: 23966653,
  RedPanda: 148359,
  SnowLeopard: 13731594,
  ArcticWolf: 14402303,
  Crocodile: 2228640,
  Owl: 2474014,
  Peacock: 4267522,
  Eagle: 12137018,
  Penguin: 1823702,
  Camel: 20468913,
  Chimpanzee: 16413844,
  Buffalo: 17647186,
  Moose: 7659403,
  Otter: 25956520,
  Seal: 27222313,
  Walrus: 26690651,
  Hyena: 11130207,
  Flamingo: 27037433,
  Parrot: 1595736,
  Bison: 5577234,
  Lemur: 26800321,
  ArcticFox: 27067816,
  BlackPanther: 36181920,
  WildDog: 146037,
  Python: 12932963,
  KingCobra: 14144154,
  Shark: 7825841,
  Dolphin: 24302514,
  Whale: 417196,
  Octopus: 17776224,
  Tortoise: 7353278,
  Frog: 12181451,
  Raccoon: 14714712,
  Squirrel: 7830070,
  Chameleon: 27180807,
  Deer: 16994255,
};

const heroSlides = document.getElementById("hero-slides");
const heroPagination = document.getElementById("hero-pagination");
const heroTitle = document.getElementById("hero-title");
const heroStatus = document.getElementById("hero-status");
const typingText = document.getElementById("typing-text");
const animalGrid = document.getElementById("animal-grid");
const searchInput = document.getElementById("animal-search");
const regionFilter = document.getElementById("region-filter");
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".site-nav");
const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
const scrollTopButton = document.getElementById("scroll-top");
const loader = document.getElementById("loader");
const modal = document.getElementById("read-modal");
const modalClose = document.getElementById("modal-close");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalStatus = document.getElementById("modal-status");
const modalText = document.getElementById("modal-text");

let activeSlide = 0;
let wheelLocked = false;
let autoplayInterval = null;
let typingTimer;
let touchStartY = 0;
let heroHovered = false;
let isTransitioning = false;
const AUTOPLAY_INTERVAL = 2500;
const TRANSITION_DURATION = 1200;

function imageUrl(query, lock, width = 1200, height = 800) {
  return makePlaceholderImage(query, width, height);
}

function normalizedAnimalKey(name) {
  return name.replace(/\s+/g, "");
}

function pexelsImageUrl(photoId, width = 900) {
  return `https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
}

function makePlaceholderImage(label, width = 900, height = 650) {
  const cleanLabel = label
    .replace(/[,|-]/g, " ")
    .replace(/\bwildlife\b/gi, "")
    .trim();
  const svg = `
		<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
			<defs>
				<linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stop-color="#1b2f22"/>
					<stop offset="55%" stop-color="#0b100d"/>
					<stop offset="100%" stop-color="#6f4c19"/>
				</linearGradient>
			</defs>
			<rect width="100%" height="100%" fill="url(#g)"/>
			<circle cx="${width * 0.78}" cy="${height * 0.25}" r="${Math.min(width, height) * 0.18}" fill="rgba(240,200,106,.16)"/>
			<text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="#f6f4ec" font-family="Arial, sans-serif" font-size="44" font-weight="700">${cleanLabel}</text>
			<text x="50%" y="59%" text-anchor="middle" dominant-baseline="middle" fill="#f0c86a" font-family="Arial, sans-serif" font-size="15" font-weight="700" letter-spacing="4">IMAGE COMING SOON</text>
		</svg>
	`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function animalImageUrl(animal, index, width = 900, height = 650) {
  const pexelsId = pexelsPhotoIds[normalizedAnimalKey(animal.name)];
  return (
    animal.src ||
    (pexelsId
      ? pexelsImageUrl(pexelsId, width)
      : makePlaceholderImage(animal.name, width, height))
  );
}

function heroImageUrl(animal, index) {
  const pexelsId = pexelsPhotoIds[normalizedAnimalKey(animal.name)];
  return (
    animal.src ||
    (pexelsId
      ? pexelsImageUrl(pexelsId, 1600)
      : makePlaceholderImage(animal.name, 1600, 1000))
  );
}

// Build the cinematic hero slider from the featuredAnimals array.
function renderHero() {
  heroSlides.innerHTML = featuredAnimals
    .map(
      (animal, index) => `
		<div class="hero-slide ${index === 0 ? "active" : ""}" style="background-image: url('${heroImageUrl(animal, index)}')"></div>
	`,
    )
    .join("");

  heroPagination.innerHTML = featuredAnimals
    .map(
      (animal, index) => `
		<button class="${index === 0 ? "active" : ""}" type="button" data-slide="${index}" aria-label="Show ${animal.name}"></button>
	`,
    )
    .join("");

  updateHeroContent(0);
}

// The typewriter text changes every time the active hero animal changes.
function typeLine(text) {
  clearTimeout(typingTimer);
  typingText.textContent = "";
  let index = 0;

  function typeNextLetter() {
    typingText.textContent = text.slice(0, index);
    index += 1;

    if (index <= text.length) {
      typingTimer = setTimeout(typeNextLetter, 14);
    }
  }

  typeNextLetter();
}

function updateHeroContent(index) {
  const animal = featuredAnimals[index];
  heroTitle.textContent = animal.name;
  heroStatus.textContent = animal.status;
  typeLine(animal.line);

  [heroTitle, heroStatus].forEach((element) => {
    element.classList.remove("hero-text-enter");
    window.requestAnimationFrame(() =>
      element.classList.add("hero-text-enter"),
    );
  });
}

function goToSlide(index) {
  if (index === activeSlide || isTransitioning) return;

  // Prevent overlapping animations
  isTransitioning = true;

  const slides = Array.from(document.querySelectorAll(".hero-slide"));
  const dots = Array.from(document.querySelectorAll(".hero-pagination button"));

  // Fade out current slide with animation class
  slides[activeSlide].classList.add("fade-out");
  slides[activeSlide].classList.remove("active");
  dots[activeSlide].classList.remove("active");

  // Calculate next slide index with infinite looping
  activeSlide = (index + featuredAnimals.length) % featuredAnimals.length;

  // Update slide and pagination with active class and fade-in animation
  slides[activeSlide].classList.remove("fade-out");
  slides[activeSlide].classList.add("fade-in");
  slides[activeSlide].classList.add("active");
  dots[activeSlide].classList.add("active");

  // Update content with animation
  updateHeroContent(activeSlide);

  // Preload next image
  preloadHeroImage((activeSlide + 1) % featuredAnimals.length);

  // Reset transition flag after animation completes
  setTimeout(() => {
    isTransitioning = false;
    // Remove animation classes after transition
    slides[activeSlide].classList.remove("fade-in");
    slides.forEach((slide, idx) => {
      if (idx !== activeSlide) {
        slide.classList.remove("fade-out");
      }
    });
  }, TRANSITION_DURATION);
}

function preloadHeroImage(index) {
  const image = new Image();
  image.src = heroImageUrl(featuredAnimals[index], index);
}

function preloadHeroImages() {
  featuredAnimals.forEach((animal, index) => preloadHeroImage(index));
}

function startAutoplay() {
  // Prevent multiple intervals from stacking
  if (autoplayInterval !== null) {
    clearInterval(autoplayInterval);
  }

  // Don't start if hero is hovered
  if (heroHovered) {
    return;
  }

  // Start new autoplay interval
  autoplayInterval = setInterval(() => {
    if (!isTransitioning && !heroHovered) {
      goToSlide(activeSlide + 1);
    }
  }, AUTOPLAY_INTERVAL);
}

function stopAutoplay() {
  if (autoplayInterval !== null) {
    clearInterval(autoplayInterval);
    autoplayInterval = null;
  }
}

function resetAutoplay() {
  stopAutoplay();
  startAutoplay();
}

function lockWheel() {
  wheelLocked = true;
  setTimeout(() => {
    wheelLocked = false;
  }, 500);
}

function heroIsInView() {
  const rect = document.getElementById("home").getBoundingClientRect();
  return rect.top <= 80 && rect.bottom >= window.innerHeight * 0.55;
}

function handleWheel(event) {
  if (!heroHovered || !heroIsInView() || wheelLocked) return;

  const scrollingDown = event.deltaY > 0;
  const scrollingUp = event.deltaY < 0;
  const atLastSlide = activeSlide === featuredAnimals.length - 1;
  const atFirstSlide = activeSlide === 0;

  if ((scrollingDown && !atLastSlide) || (scrollingUp && !atFirstSlide)) {
    event.preventDefault();
    goToSlide(activeSlide + (scrollingDown ? 1 : -1));
    resetAutoplay();
    lockWheel();
  }
}

function handleTouchEnd(event) {
  if (!heroIsInView() || wheelLocked) return;

  const touchEndY = event.changedTouches[0].clientY;
  const distance = touchStartY - touchEndY;

  if (Math.abs(distance) < 45) return;

  const nextIndex = activeSlide + (distance > 0 ? 1 : -1);
  if (nextIndex < 0 || nextIndex >= featuredAnimals.length) return;

  goToSlide(nextIndex);
  resetAutoplay();
  lockWheel();
}

function renderRegions() {
  const regions = [...new Set(animals.map((animal) => animal.region))].sort();
  regionFilter.innerHTML += regions
    .map((region) => `<option value="${region}">${region}</option>`)
    .join("");
}

function renderAnimals(list) {
  if (!list.length) {
    animalGrid.innerHTML =
      '<p class="empty-message">No animal found. Try another search or habitat.</p>';
    return;
  }

  animalGrid.innerHTML = list
    .map(
      (animal, index) => `
		<article class="animal-card" style="animation-delay: ${Math.min(index * 20, 240)}ms">
			<img src="${animalImageUrl(animal, animals.indexOf(animal), 720, 520)}" alt="${animal.name}" loading="lazy" decoding="async" fetchpriority="${index < 6 ? "high" : "low"}">
			<div class="animal-body">
				<div class="animal-top">
					<h3>${animal.name}</h3>
					<span class="status-badge">${animal.status}</span>
				</div>
				<p>${animal.description}</p>
				<div class="animal-facts">
					<div>
						<span>Habitat</span>
						<strong>${animal.habitat}</strong>
					</div>
					<div>
						<span>Average Lifespan</span>
						<strong>${animal.lifespan}</strong>
					</div>
				</div>
				<button class="read-more" type="button" data-name="${animal.name}">Read More</button>
			</div>
		</article>
	`,
    )
    .join("");
}

// Search and region filtering rerender the card grid with a small entrance animation.
function filterAnimals() {
  const query = searchInput.value.trim().toLowerCase();
  const region = regionFilter.value;

  const filtered = animals.filter((animal) => {
    const matchesName = animal.name.toLowerCase().includes(query);
    const matchesRegion = region === "all" || animal.region === region;
    return matchesName && matchesRegion;
  });

  renderAnimals(filtered);
}

// Read-more opens a lightweight modal without leaving the static page.
function openAnimalModal(name) {
  const animal = animals.find((item) => item.name === name);
  if (!animal) return;

  const index = animals.indexOf(animal);
  modalImage.src = animalImageUrl(animal, index, 1000, 720);
  modalImage.alt = animal.name;
  modalTitle.textContent = animal.name;
  modalStatus.textContent = animal.status;
  modalText.textContent = `${animal.description} Habitat: ${animal.habitat}. Average lifespan: ${animal.lifespan}. This profile is written for a frontend wildlife documentary blog experience.`;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeAnimalModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function animateCounters() {
  document.querySelectorAll(".counter").forEach((counter) => {
    const target = Number(counter.dataset.target);
    const duration = 1200;
    const startTime = performance.now();

    function update(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      counter.textContent = Math.floor(progress * target);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        counter.textContent = target;
      }
    }

    requestAnimationFrame(update);
  });
}

function updateActiveNavigation() {
  const sections = Array.from(document.querySelectorAll("main section[id]"));
  const current = sections.find((section) => {
    const rect = section.getBoundingClientRect();
    return rect.top <= 120 && rect.bottom > 120;
  });

  if (!current) return;

  navLinks.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current.id}`,
    );
  });
}

function hideLoader() {
  setTimeout(() => {
    loader.classList.add("is-hidden");
    document.body.classList.remove("loading");
    animateCounters();
    startAutoplay();
  }, 350);
}

renderHero();
renderRegions();
renderAnimals(animals);
preloadHeroImages();

document.querySelectorAll(".hero-pagination button").forEach((button) => {
  button.addEventListener("click", () => {
    goToSlide(Number(button.dataset.slide));
    resetAutoplay();
  });
});

document.getElementById("home").addEventListener("mouseenter", () => {
  heroHovered = true;
  stopAutoplay();
});
document.getElementById("home").addEventListener("mouseleave", () => {
  heroHovered = false;
  startAutoplay();
});
document
  .getElementById("home")
  .addEventListener("wheel", handleWheel, { passive: false });
window.addEventListener(
  "touchstart",
  (event) => {
    touchStartY = event.touches[0].clientY;
  },
  { passive: true },
);
window.addEventListener("touchend", handleTouchEnd, { passive: true });

document.getElementById("home").addEventListener("mousemove", (event) => {
  const x = (event.clientX / window.innerWidth - 0.5) * 16;
  const y = (event.clientY / window.innerHeight - 0.5) * 10;
  document.documentElement.style.setProperty("--parallax-x", `${x}px`);
  document.documentElement.style.setProperty("--parallax-y", `${y}px`);
});

menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

searchInput.addEventListener("input", filterAnimals);
regionFilter.addEventListener("change", filterAnimals);

animalGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".read-more");
  if (button) openAnimalModal(button.dataset.name);
});

modalClose.addEventListener("click", closeAnimalModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeAnimalModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowDown" || event.key === "ArrowRight") {
    goToSlide(activeSlide + 1);
    resetAutoplay();
  }

  if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
    goToSlide(activeSlide - 1);
    resetAutoplay();
  }

  if (event.key === "Escape") closeAnimalModal();
});

scrollTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  scrollTopButton.classList.toggle("visible", window.scrollY > 720);
  updateActiveNavigation();
});

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", hideLoader);
} else {
  hideLoader();
}
