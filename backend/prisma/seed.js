import { PrismaClient } from "@prisma/client";

//Seed for 5 castings of Pepsi

const prisma = new PrismaClient();

//Hardcoded!
const creatorId = "82fd1ce1-c204-4984-b445-81852c34f1a3"; //from NeonDB

const castings = [
        {
            name: "Pepsi Zero kampania świąteczna",
            description: "Reklama telewizyjna, kinowa, sesja zdjęciowa + rolki na social media, z możliwością rozszerzenia na rynek zagraniczny. Szukamy sześcioosobowej, różnorodnej grupy przyjaciół (mile widziane prawdziwe paczki!) do świątecznej reklamy Pepsi Zero - 'Wszystkiego pysznego, nie tylko na święta'. Osoby Gen Z, ewentualnie Zillennialsi, mile widziane cechy charakterystyczne (osoby POC, rude włosy, loki, piegi, diastema, etc.).",
            applicationDeadline: new Date("2026-12-05T23:59:59Z"),
            conflictWindowMonths: 36,
            roles: {
                create: [
                    {
                        type: "LEAD",
                        name: "Maya",
                        gender: "FEMALE",
                        ageFrom: 20,
                        ageTo: 28,
                        description: "Wyjątkowa, wyróżniająca się bohaterka - liderka swojej grupy, w spocie będzie zaskoczona niespodziewanym pojawieniem się przyjaciół pod drzwiami w Wigilię.",
                        feeInZl: 15000,
                        shootingDays: [new Date("2026-12-10"), new Date("2026-12-11"), new Date("2026-12-12")],
                        sceneDescription: "Siedzisz samotnie w wigilijny wieczór, nagle rozlega się dzwonek do drzwi. Podchodzisz do nich, otwierasz, i okazuje się, że to Twoi przyjaciele, którzy mieli być w tym czasie na własnych wyjazdach. Szukamy prawdziwych emocji, szczęścia i wzruszenia. Nagraj trzy wersje - pierwszą naturalną, drugą przesadzoną, typowo reklamową. Trzecią wedle własnego uznania, chcemy zobaczyć kreatywność.",
                    },
                    {
                        type: "SUPPORTING",
                        name: "James",
                        ageFrom: 25,
                        ageTo: 35,
                        description: "Typ głównego bohatera komedii romantycznej - przystojny, zabawny, mile widziana umiejętność gry na gitarze.",
                        feeInZl: 8000,
                        shootingDays: [new Date("2026-12-10"), new Date("2026-12-11")],
                        additionalSkillsWanted: ["GUITAR"],
                        sceneDescription: "Przychodzisz do przyjaciółki na niezapowiedzianą Wigilię. Witacie się w grupie, ale trzymacie między sobą kontakt wzrokowy, o kilka sekund zbyt długo. Niech ten moment kontaktu wybrzmi, potem możesz wrócić do grupy. Styl niczym z komedii romantycznej, ale naturalnie, filmowo. Jeśli masz nagranie gry na gitarze, dołącz je na końcu scenki.",
                    },
                    {
                        type: "ENSEMBLE",
                        name: "Przyjaciel 1",
                        ageFrom: 20,
                        ageTo: 30,
                        description: "Artystyczny typ, mógłby być aktorem musicalowym. Chętnie zobaczymy wyjątkowy styl i cechy wyglądu, w tym np. kolorowe włosy czy ciekawy piercing.",
                        feeInZl: 4000,
                        shootingDays: [new Date("2026-12-10")],
                        sceneDescription: "Przychodzisz do przyjaciółki na niezapowiedzianą Wigilię. Witacie się w grupie, dajecie sobie prezenty, jest wzruszająco, rodzinne i wesoło.",
                    },
                    {
                        type: "ENSEMBLE",
                        name: "Przyjaciółka 1",
                        ageFrom: 25,
                        ageTo: 35,
                        description: "Elegancka, naturalna, przyjazna, typ powszechnie lubianej menedżerki w korpo. Chętnie długie, proste ciemne włosy, bądź zgoda na przedłużanie/farbowanie.",
                        feeInZl: 4000,
                        shootingDays: [new Date("2026-12-10")],
                        sceneDescription: "Przychodzisz do przyjaciółki na niezapowiedzianą Wigilię. Witacie się w grupie, dajecie sobie prezenty, jest wzruszająco, rodzinne i wesoło.",
                    },
                    {
                        type: "ENSEMBLE",
                        name: "Przyjaciółka 2",
                        ageFrom: 20,
                        ageTo: 30,
                        description: "Szukamy bardzo wesołej, młodej, energiczna osobej. Tu chętnie zobaczymy POC, najlepiej z charakterystyczną fryzurą.",
                        feeInZl: 4000,
                        shootingDays: [new Date("2026-12-10")],
                        sceneDescription: "Przychodzisz do przyjaciółki na niezapowiedzianą Wigilię. Witacie się w grupie, dajecie sobie prezenty, jest wzruszająco, rodzinne i wesoło.",
                    },
                    {
                        type: "ENSEMBLE",
                        name: "Przyjaciel 2",
                        ageFrom: 20,
                        ageTo: 30,
                        description: "Charakterystyczny, komediowy, najchętniej w typie pewnego rudego, brytyjskiego piosenkarza.",
                        feeInZl: 4000,
                        shootingDays: [new Date("2026-12-10")],
                        sceneDescription: "Przychodzisz do przyjaciółki na niezapowiedzianą Wigilię. Witacie się w grupie, dajecie sobie prezenty, jest wzruszająco, rodzinne i wesoło.",
                    },
                ],
            },
        },

        {
        name: "Pepsi Max: kampania sportowa 'Street Energy'",
        description: "Spot internetowy i telewizyjny oraz sesja zdjęciowa do kampanii outdoorowej. Szukamy sportowych, charyzmatycznych osób, które na co dzień naprawdę trenują. Akcja rozgrywa się na miejskim boisku do streetballu po zachodzie słońca, więc przewidujemy zdjęcia nocne. Ważna jest sprawność fizyczna i naturalność przed kamerą. Kampania w Polsce, możliwość emisji w Europie Środkowej.",
        applicationDeadline: new Date("2026-12-12T23:59:59Z"),
        conflictWindowMonths: 12,
        roles: {
            create: [
                {
                    type: "LEAD",
                    name: "Kuba",
                    gender: "MALE",
                    ageFrom: 21,
                    ageTo: 30,
                    description: "Pewny siebie zawodnik, lider drużyny. Wysportowana sylwetka, mile widziane doświadczenie w koszykówce lub sportach miejskich.",
                    feeInZl: 7000,
                    shootingDays: [new Date("2027-01-22"), new Date("2027-01-23")],
                    additionalSkillsWanted: ["BASKETBALL"],
                    sceneDescription: "Wchodzisz na boisko po ciężkim dniu, otwierasz puszkę Pepsi Max, pijesz, po czym rzucasz do kosza piłką z półdystansu. Chcemy zobaczyć naturalną radość i luz, bez pozowania. Nagraj dwie wersje: spokojną i pełną energii.",
                },
                {
                    type: "LEAD",
                    name: "Ola",
                    gender: "FEMALE",
                    ageFrom: 22,
                    ageTo: 32,
                    description: "Kapitanka drużyny przeciwnej, zadziorna, z poczuciem humoru. Sportowa sylwetka, może być bardziej umięśniona, wyrazista osobowość.",
                    feeInZl: 7000,
                    shootingDays: [new Date("2027-01-22"), new Date("2027-01-23")],
                    sceneDescription: "Podchodzisz do rywala po meczu, wyzywasz go na rewanż z uśmiechem pełnym wyzwania. Kwestia: \"To co, jeszcze jedna runda?\". Pokaż, że potrafisz być groźna i sympatyczna jednocześnie. Jeśli możesz, nagraj również tekst po czesku i po słowacku, nie jest ważny perfekcyjny akcent, a ruch ust.",
                },
            ],
        },
    },
{
    name: "Pepsi x Open'er: spot festiwalowy",
    description: "Reklama telewizyjna i digital do letniej kampanii Pepsi x Open'er Festival. Szukamy osób muzykalnych, z poczuciem rytmu, które potrafią zachować naturalność w tłumie. Mile widziane umiejętności wokalne lub taneczne. Na planie będzie wielu statystów, ale poszukujemy dwóch osób na pierwszy plan.",
    applicationDeadline: new Date("2027-05-18T23:59:59Z"),
    conflictWindowMonths: 12,
    roles: {
        create: [
            {
                type: "LEAD",
                name: "Wokalistka",
                gender: "FEMALE",
                ageFrom: 20,
                ageTo: 35,
                description: "Młoda artystka na scenie festiwalowej. Konieczny mocny, czysty głos i dobry kontakt z kamerą. Wizerunek świeży, autentyczny, bez sztucznej gwiazdorskiej maniery.",
                feeInZl: 14000,
                shootingDays: [new Date("2027-05-30"), new Date("2027-05-31")],
                additionalSkillsWanted: ["MUSICAL_THEATRE_SINGING", "GUITAR"],
                sceneDescription: "Śpiewasz pierwszą frazę piosenki a cappella, a potem chwytasz puszkę Pepsi, którą podaje Ci ktoś z publiczności. Nagraj fragment dowolnej popowej piosenki (maks. 30 sekund) i zakończ gestem sięgnięcia po napój.",
            },
            {
                type: "ENSEMBLE",
                name: "Tancerz / tancerka z publiczności",
                ageFrom: 18,
                ageTo: 30,
                description: "Energiczna osoba z tłumu, która porywa innych do zabawy. Płeć dowolna, liczy się charyzma i poczucie rytmu.",
                feeInZl: 6500,
                shootingDays: [new Date("2027-05-31")],
                additionalSkillsWanted: ["HIP_HOP", "MODERN_JAZZ"],
                sceneDescription: "Tańczysz w środku tłumu, nagle orientujesz się, że kamera Cię widzi, i śmiejesz się wprost do obiektywu. Pokaż 45 sekund swobodnego tańca w dowolnym stylu.",
            },
                ],
        },
    },
{
    name: "Pepsi Zero: kampania social media 'Studencki dzień'",
    description: "Seria krótkich rolek na TikToka, Instagrama i YouTube Shorts. Pokazujemy codzienne życie studentów: poranny pośpiech, bibliotekę, wspólne nauczanie przed sesją. Szukamy naturalnych, zabawnych osób, które czują się dobrze w formacie wertykalnym i potrafią improwizować.",
    applicationDeadline: new Date("2027-01-08T23:59:59Z"),
    conflictWindowMonths: 6,
    roles: {
        create: [
            {
                type: "LEAD",
                name: "Student / studentka",
                ageFrom: 19,
                ageTo: 26,
                description: "Główna postać serii: bystra, trochę rozgadana i roztrzepana, ale sympatyczna. Płeć dowolna. Atutem jest doświadczenie w tworzeniu własnych treści w mediach społecznościowych.",
                feeInZl: 4000,
                shootingDays: [new Date("2027-02-12"), new Date("2027-02-13")],
                sceneDescription: "Siedzisz w bibliotece, jest 23:40, jutro egzamin. Sięgasz po puszkę Pepsi Zero, otwierasz ją najciszej jak się da, ale i tak syk niesie się po całej sali. Reaguj spontanicznie. Nagraj w POZIOMIE, może być telefonem, maks. 30 sekund.",
            },
            {
                type: "SUPPORTING",
                name: "Współlokator / współlokatorka",
                ageFrom: 20,
                ageTo: 27,
                description: "Postać wyluzowana, zawsze z pomysłem na wymówkę. Komediowy timing i umiejętność gry mimiką są bardzo ważne.",
                feeInZl: 2500,
                shootingDays: [new Date("2027-02-12")],
                sceneDescription: "Wchodzisz do kuchni, widzisz ostatnią puszkę Pepsi Zero w lodówce i próbujesz niezauważenie ją zabrać, gdy kolega obserwuje Cię z drugiego pokoju. Nagraj scenkę bez słów, tylko mimiką i ruchem.",
            },
        ],
    },
},
{
    name: "Pepsi: spot rodzinny 'Niedzielny obiad'",
    description: "Ciepła, sentymentalna wielkanocna reklama telewizyjna i kinowa o wielopokoleniowym obiedzie niedzielnym. Szukamy osób, które wiarygodnie zagrają rodzinę: z naturalnymi relacjami, bez przesady. Obsada nie obejmuje osób niepełnoletnich. Zdjęcia pod Warszawą, z zapewnionym transportem oraz noclegiem, możliwa emisja zagraniczna z rozszerzeniem stawki za prawa.",
    applicationDeadline: new Date("2027-03-04T23:59:59Z"),
    conflictWindowMonths: 12,
    roles: {
        create: [
            {
                type: "LEAD",
                name: "Babcia Hela",
                gender: "FEMALE",
                ageFrom: 60,
                ageTo: 75,
                description: "Serce rodziny. Ciepła, z wyraźną osobowością i dobrym timingiem komediowym. Doświadczenie aktorskie nie jest konieczne, ale liczy się autentyczność i naturalna charyzma.",
                feeInZl: 13000,
                shootingDays: [new Date("2027-03-13"), new Date("2027-03-14")],
                sceneDescription: "Stawiasz na stole zupę, rozglądasz się po rodzinie i mówisz: \"No, to teraz wszyscy jedzą.\" Potem z szelmowskim uśmiechem nalewasz sobie Pepsi i puszczasz oko do kamery. Nagraj dwie wersje: ciepłą i zadziorną.",
            },
            {
                type: "SUPPORTING",
                name: "Wnuczka Zuzia",
                gender: "FEMALE",
                ageFrom: 18,
                ageTo: 25,
                description: "Studentka, która wpada do babci na obiad. Wesoła, otwarta, z poczuciem humoru. Dorosła aktorka lub studentka aktorstwa o młodym wyglądzie.",
                feeInZl: 6000,
                shootingDays: [new Date("2027-03-14")],
                sceneDescription: "Wpadasz spóźniona, całujesz babcię w policzek i podkradasz jej z talerza kawałek ciasta. Babcia udaje, że się gniewa. Pokaż naturalną relację i ciepło między postaciami. Jeśli grasz bez partnera scenicznego, zagraj na wprost do kamery.",
            },
        ],
    },
},
];

const main = async () => {
    const user = await prisma.user.findUnique({
        where: {id: creatorId}, //stworzony bezpośredio w Requestly
    });

    if (!user) throw new Error("Nie znaleziono odpowiedniego usera.");
    if (user.role!=="CLIENT") throw new Error("Niepoprawny rodzaj użytkownika.");

    //User --> ClientProfile
    const client = await prisma.clientProfile.upsert({
        where: {userId: user.id},
        update: {},
        create: {
            userId: user.id,
            companyName: "Pepsi",
            nip: "1234563218",
            industry: "BEVERAGES",
        },
    });

    await prisma.casting.deleteMany({ where: { clientId: client.userId } }); //in case we rerun the script

    console.log("Seeding castings...");

    for (const casting of castings){
        await prisma.casting.create({
            data: {
            ...casting,
            clientId: client.userId,
            clientIndustry: client.industry,
            },
        });
        console.log(`Created casting: ${casting.name}`);
    }

    console.log("Seeding completed");
};

main().catch((err) => {
    console.error(err);
    process.exit(1);
}).finally(async() => {
    await prisma.$disconnect();
});