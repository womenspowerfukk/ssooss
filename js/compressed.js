function submitForm() {
    var a = $("#name").val(),
        b = $("#email").val(),
        c = $("#message").val();
    $.ajax({
        type: "POST",
        url: "../php/form-process.php",
        data: "name=" + a + "&email=" + b + "&message=" + c,
        success: function(a) {
            "success" == a ? formSuccess() : (formError(), submitMSG(!1, a))
        }
    })
}

function formSuccess() {
    $("#contactForm")[0].reset(), submitMSG(!0, "Message Submitted!")
}

function formError() {
    $("#contactForm").removeClass().addClass("shake animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
        $(this).removeClass()
    })
}

function submitMSG(a, b) {
    if (a) var c = "h3 text-center tada animated text-success";
    else var c = "h3 text-center text-danger";
    $("#msgSubmit").removeClass().addClass(c).text(b)
}

function main() {
    if (null != readCookie(commentusername[117]) && ($(commentusername[120])[commentusername[119]](commentusername[118]), $(commentusername[123])[commentusername[122]](commentusername[121], commentusername[21]), $(commentusername[124])[commentusername[119]](commentusername[118]), $(commentusername[125])[commentusername[122]](commentusername[121], commentusername[21])), null != readCookie(commentusername[126]) && null != readCookie(commentusername[127])) username1 = readCookie(commentusername[127]), username2 = readCookie(commentusername[128]), username3 = readCookie(commentusername[129]), usernameArray = [username1, username2, username3], timePosted11 = parseInt(readCookie(commentusername[130])), timePosted22 = parseInt(readCookie(commentusername[131])), timePosted33 = parseInt(readCookie(commentusername[132])), timePosted1 = timePostedTimer(timePosted11), timePosted2 = timePostedTimer(timePosted22), timePosted3 = timePostedTimer(timePosted33), timePostedArray = [timePosted1, timePosted2, timePosted3], comment1 = readCookie(commentusername[126]), comment2 = readCookie(commentusername[133]), comment3 = readCookie(commentusername[134]), commentsArray = [comment1, comment2, comment3];
    else {
        for (username1 = randomKeyword(usernames), username2 = randomKeyword(usernames); username2 == username1;) username2 = randomKeyword(usernames);
        for (username3 = randomKeyword(usernames); username3 == username2;) username3 = randomKeyword(usernames);
        usernameArray = [username1, username2, username3], timePosted11 = randomRange(1e3 * minPostTime, 1e3 * maxPostTime), timePosted22 = randomRange(1e3 * minPostTime, timePosted11), timePosted33 = randomRange(1e3 * minPostTime, timePosted22), timePosted1 = timePostedTimer(timePosted11), timePosted2 = timePostedTimer(timePosted22), timePosted3 = timePostedTimer(timePosted33), timePostedArray = [timePosted1, timePosted2, timePosted3], comment1 = newCommentCreator(), comment2 = newCommentCreator(), comment3 = newCommentCreator(), commentsArray = [comment1, comment2, comment3], createCookie(commentusername[127], username1, .003), createCookie(commentusername[128], username2, .003), createCookie(commentusername[129], username3, .003), createCookie(commentusername[126], comment1, .003), createCookie(commentusername[133], comment2, .003), createCookie(commentusername[134], comment3, .003)
    }
    updateComments(), setInterval(timer, 1e3), setInterval(getNewComment, refreshRate), $(commentusername[136])[commentusername[135]](submitEvent)
}

function getNewComment() {
    for (username1 = username2, username2 = username3, username3 = randomKeyword(usernames); username3 == username2 || username3 == username1;) username3 = randomKeyword(usernames);
    usernameArray = [username1, username2, username3], timePosted11 = timePosted22, timePosted22 = timePosted33, timePosted33 = 1e3, timePosted1 = timePostedTimer(timePosted11), timePosted2 = timePostedTimer(timePosted22), timePosted3 = timePostedTimer(timePosted33), timePostedArray = [timePosted1, timePosted2, timePosted3], comment1 = comment2, comment2 = comment3, comment3 = newCommentCreator(), commentsArray = [comment1, comment2, comment3], createCookie(commentusername[127], username1, .003), createCookie(commentusername[128], username2, .003), createCookie(commentusername[129], username3, .003), createCookie(commentusername[126], comment1, .003), createCookie(commentusername[133], comment2, .003), createCookie(commentusername[134], comment3, .003), refreshRate = randomRange(1e3 * minPostTime, 1e3 * maxPostTime), updateComments()
}

function newCommentCreator() {
    return emotesType = Math[commentusername[138]](2 * Math[commentusername[137]]() + 1), part1 = part1Creator(), part2 = part2Creator(), part3 = part3Creator(), part4 = part4Creator(), part5 = part5Creator(), allParts = [part2, part3, part4, part5], allPartsShuffled = shuffle(allParts), newComment = part1 + allPartsShuffled[commentusername[139]](commentusername[21]), newComment == commentusername[21] ? newCommentCreator() : newComment
}

function part1Creator() {
    return Math[commentusername[137]]() > .8 ? randomKeyword(wowKeywords) + randomKeyword(punctuation) + emote() : commentusername[21]
}

function part2Creator() {
    return Math[commentusername[137]]() > .4 ? Math[commentusername[137]]() > .5 ? randomKeyword(thisKeywords) + randomKeyword(adverbKeywords) + randomKeyword(adjectivesKeywords) + randomKeyword(punctuation) + emote() : randomKeyword(thisKeywords) + randomKeyword(adjectivesKeywords) + randomKeyword(punctuation) + emote() : commentusername[21]
}

function part3Creator() {
    return Math[commentusername[137]]() > .6 ? thanks() + emote() : commentusername[21]
}

function part4Creator() {
    return Math[commentusername[137]]() > .6 ? Math[commentusername[137]]() > .7 ? randomKeyword(iKeywords) + randomKeyword(workingKeywords) + commentusername[37] + randomKeyword(conjunctionKeywords) + randomKeyword(thisKeywords2) + randomKeyword(conKeywords) + randomKeyword(punctuation) + emote() : randomKeyword(iKeywords) + randomKeyword(workingKeywords) + randomKeyword(punctuation) + emote() : commentusername[21]
}

function part5Creator() {
    return Math[commentusername[137]]() > .7 ? randomKeyword(meKeywords) + randomKeyword(gotKeywords) + randomKeyword(amount) + commentusername[37] + randomKeyword(resources) + randomKeyword(punctuation) + emote() : commentusername[21]
}

function randomKeyword(a) {
    return a[Math[commentusername[138]](Math[commentusername[137]]() * a[commentusername[140]])]
}

function emote() {
    return 1 == emotesType ? Math[commentusername[137]]() > .3 ? commentusername[21] : randomKeyword(emotes1) : Math[commentusername[137]]() > .3 ? commentusername[21] : randomKeyword(emotes2)
}

function thanks() {
    return Math[commentusername[137]]() > .35 ? randomKeyword(thanksKeywords) + randomKeyword(punctuation) : Math[commentusername[137]]() > .5 ? randomKeyword(thanksKeywords) + commentusername[37] + website + randomKeyword(punctuation) : randomKeyword(thanksKeywords) + commentusername[37] + websiteName + randomKeyword(punctuation)
}

function shuffle(a) {
    for (var b, c, d = a[commentusername[140]]; d; b = Math[commentusername[138]](Math[commentusername[137]]() * d), c = a[--d], a[d] = a[b], a[b] = c);
    return a
}

function updateComments() {
    for (i = 0; i <= 3; i++) $(commentusername[142] + i)[commentusername[141]](usernameArray[i - 1]), $(commentusername[144] + i)[commentusername[141]](commentsArray[i - 1] + commentusername[143]), $(commentusername[145] + i)[commentusername[141]](timePostedArray[i - 1])
}

function timePostedTimer(a) {
    var b = a / 1e3;
    if (60 > b) return commentusername[146];
    if (b >= 60 && 120 > b) return commentusername[147];
    var c = Math[commentusername[138]](b / 60);
    return commentusername[148] + c + commentusername[149]
}

function randomRange(a, b) {
    return Math[commentusername[150]](Math[commentusername[137]]() * (b - a) + a)
}

function timer() {
    for (timePosted11 += 1e3, timePosted22 += 1e3, timePosted33 += 1e3, eraseCookie(commentusername[130]), eraseCookie(commentusername[131]), eraseCookie(commentusername[132]), createCookie(commentusername[130], timePosted11, .003), createCookie(commentusername[131], timePosted22, .003), createCookie(commentusername[132], timePosted33, .003), timePosted1 = timePostedTimer(timePosted11), timePosted2 = timePostedTimer(timePosted22), timePosted3 = timePostedTimer(timePosted33), timePostedArray = [timePosted1, timePosted2, timePosted3], i = 0; i <= 3; i++) $(commentusername[145] + i)[commentusername[141]](timePostedArray[i - 1])
}

function submitEvent() {
    $(commentusername[123])[commentusername[151]]() != commentusername[21] && $(commentusername[125])[commentusername[151]]() != commentusername[21] ? (username1 = username2, username2 = username3, username3 = $(commentusername[123])[commentusername[151]](), usernameArray = [username1, username2, username3], timePosted11 = timePosted22, timePosted22 = timePosted33, timePosted33 = 1e3, timePosted1 = timePostedTimer(timePosted11), timePosted2 = timePostedTimer(timePosted22), timePosted3 = timePostedTimer(timePosted33), timePostedArray = [timePosted1, timePosted2, timePosted3], comment1 = comment2, comment2 = comment3, comment3 = $(commentusername[125])[commentusername[151]](), commentsArray = [comment1, comment2, comment3], updateComments(), createCookie(commentusername[117], commentusername[21], 24), $(commentusername[123])[commentusername[151]](commentusername[21]), $(commentusername[125])[commentusername[151]](commentusername[21]), $(commentusername[120])[commentusername[119]](commentusername[118]), $(commentusername[123])[commentusername[122]](commentusername[121], commentusername[21]), $(commentusername[124])[commentusername[119]](commentusername[118]), $(commentusername[125])[commentusername[122]](commentusername[121], commentusername[21])) : ($(commentusername[120])[commentusername[119]](commentusername[152]), $(commentusername[124])[commentusername[119]](commentusername[152]))
}

function createCookie(a, b, c) {
    if (c) {
        var d = new Date;
        d[commentusername[154]](d[commentusername[153]]() + 24 * c * 60 * 60 * 1e3);
        var e = commentusername[155] + d[commentusername[156]]()
    } else var e = commentusername[21];
    document[commentusername[157]] = a + commentusername[158] + b + e + commentusername[159]
}

function readCookie(a) {
    for (var b = a + commentusername[158], c = document[commentusername[157]][commentusername[161]](commentusername[160]), d = 0; d < c[commentusername[140]]; d++) {
        for (var e = c[d]; e[commentusername[163]](0) == commentusername[37];) e = e[commentusername[162]](1, e[commentusername[140]]);
        if (0 == e[commentusername[164]](b)) return e[commentusername[162]](b[commentusername[140]], e[commentusername[140]])
    }
    return null
}

function eraseCookie(a) {
    createCookie(a, commentusername[21], -1)
}! function(a) {
    a.sticky = function(b, c, d) {
        return a.fn.sticky(b, c, d)
    }, a.fn.sticky = function(b, c, d) {
        var e = "top-left",
            f = {
                speed: 2e3,
                duplicates: !1,
                autoclose: 4500
            };
        b || (b = this.html()), c && a.extend(f, c);
        var g = !0,
            h = "no",
            i = Math.floor(99999 * Math.random());
        if (a(".sticky-note").each(function() {
                a(this).html() == b && a(this).is(":visible") && (h = "yes", f.duplicates || (g = !1)), a(this).attr("id") == i && (i = Math.floor(9999999 * Math.random()))
            }), a("#recent-activity").find(".sticky-queue").html() || a("#recent-activity").append('<div class="sticky-queue ' + e + '"></div>'), g) {
            a(".sticky-queue").prepend('<div class="sticky border-' + e + '" id="' + i + '"></div>'), a("#" + i).append('<img src="" class="sticky-close" rel="' + i + '" title="Close" />'), a("#" + i).append('<div class="sticky-note" rel="' + i + '">' + b + "</div>");
            var j = a("#" + i).height();
            a("#" + i).css("height", j), a("#" + i).slideDown(f.speed), g = !0
        }
        a(".sticky").ready(function() {
            f.autoclose && a("#" + i).delay(f.autoclose).fadeOut(f.speed)
        }), a(".sticky-close").click(function() {
            a("#" + a(this).attr("rel")).dequeue().fadeOut(f.speed)
        });
        var k = {
            id: i,
            duplicate: h,
            displayed: g,
            position: e
        };
        return d ? void d(k) : k
    }
}(jQuery);
var UserName = ["TurtletheCat", "Pobelter", "EugeneJPark", "Doublelift", "C9Sneaky", "lamBjerg", "Popobelterold", "HOGEE", "WizFujiiN", "HotGuy6Pack", "dawoofsclaw", "TiPApollo", "Soeren", "FSNChunkyfresh", "Ariana22ROO", "Waker", "Podu", "C9Hard", "Shiphtur", "HOoZy", "Chapanya", "Dyrus", "Entranced", "WildTurtle", "WildTurtl", "lntense", "Hauntzer", "LiquidFeniX", "THExJOHNxCENA555", "Imaqtpie", "ZionSpartan", "JJackstar", "Ekkocat", "LiquidKEITH", "mldkingking", "Loopercorn", "TiPMa", "Ohhhq", "ninjamaster69xxx", "CaliTrlolz8", "ice", "C9Meteos", "JannaMechanics", "KEITHMCBRIEF", "dunamis", "Quasmire", "scorro", "LiquidQuas", "GVHauntzer", "PengYiliang", "Casely", "wahoolahoola", "godisfeng66666", "Zbuum", "ilovefatdongs", "TransIogic", "LemonBoy", "Link", "Chipotlehunter", "TDKkina", "DJTrance", "Duocek", "Hate", "KonKwon", "Nihillmatic", "Zaryab", "intero", "Biofrost", "LongCat4", "CSTJesiz", "GVKeane", "TiPyoondog", "RedoutabIe", "LiquidXpecial", "JayJ", "GVCop", "iKeNNyu", "C9Hai", "FunFrock", "CLGLourlo", "evertan", "Chaullenger", "Aniratak", "PorpoiseDeluxe", "Isuyu", "CLGDandyLite", "Arcsecond", "BloodWater", "Jynthe", "Sickoscott", "RickyTang", "DaBox", "ALLRekklesvNA", "Hoofspark", "DuBuKiD", "AdrianMa", "GuriAndGunji", "stuntopia", "RyanChoi", "AiShiTeru", "FSNMeMer", "J0kes", "C9Balls", "C9SoIo", "yungmulahBABY", "FeelTheLove", "dawolfsclaw", "BaamSouma", "NMEotter", "stuntopolis", "llRomell", "GoJeongPa", "p0z", "Trisexual", "MarkPassion", "Seeiya", "AAltec", "C9LemonNation", "maplestreet8", "Coinenglue", "MegaZero", "VIPEEEEEEEEEEEER", "Panchie", "fabbbyyy", "halo3madsniper", "iLucent", "1k2o1ko12ko12ko2", "Bokbokimacat", "VANISHINGDRAG0N", "LiquidPiglet", "playmkngsupport", "Gambler", "Gaggiano", "JJayel", "JoopsaKid", "1brayle", "Azingy", "Kebrex", "WahzYan", "willxo", "TailsLoL", "darksnipa47", "Thyak", "JimmyTalon", "vane", "sooyoung", "lalaisland", "Lourlo", "Sunar", "PlayWithAnimals", "scarra", "HUYAGorilIA", "Lock0nStratos", "aphromoo", "KMadClown", "ChaIlengerAhri", "YY90001PiKaChu", "Thefatkidfromup", "ahqwe5tdoor", "Nintenpai", "JustJayce", "toontown", "BasedYoona", "CoinStars", "ExecutionerKen", "nicemoves", "InvertedComposer", "LiquidIWD", "Stan007", "woshishabi", "JukeKing", "xPecake", "BlGHUEVOS", "Plun", "KingCobra", "TDKSmoothie", "TSMLustboy", "C10Meteos", "lllllllllllllIII", "ohdaughter", "PekinWoof", "BrandonFtw8", "m2sticc", "DaiJurJur", "DontMashMe", "CaseOpened", "otte", "wutroletoplay", "Thurtle", "Dodo8", "Frostalicious", "bobqinXD", "MrCarter", "Hellkey", "Chimonaa1", "DaBoxII", "GVVicious", "Jummychu", "PAlNLESS", "LiLBunnyFuFuu", "Lukeeeeeeeeee", "Lattman", "Daserer", "AlliancePatrick", "Lionsexual", "St1xxay", "Kojolika", "CSTCris", "KojotheCat", "StellaLoussier", "Gleebglarbu", "Altrum", "RiotMeyeA", "Rule18", "mandatorycloud", "Tritan", "LiquidDominate", "cidadedecack", "RoA", "BillyBoss", "xPepastel", "TaketheDraw", "ST2g", "Migipooop", "dKiWiKid", "NMEflareszx", "Gundamu", "imp", "DDABONG", "Daydreamin", "Nightlie", "MRHIGHLIGHTREEL", "Shweeb", "JinMori", "Tailsz", "Bischu", "CRBRakin", "Chaox", "Grigne", "LogicalDan", "DAKular", "DifferentSword", "Geranimoo", "InnoX", "FishingforUrf", "FluffyKittens206", "ImJinAh", "CloudNguyen", "moonway", "whoishe", "TiensiNoAkuma", "Ethil", "nothinghere", "SuperMetroid", "hiimgosu", "Mammon", "BGJessicaJung", "coBBz", "waitingforu", "LearningToPIay", "YiOwO", "heavenTime", "AnDa", "WakaWaka", "hashinshin", "TDKKez", "MariaCreveling", "Cypress", "YahooDotCom", "Phanimal", "Aror", "RFLegendary", "BenNguyen", "AHHHHHHHHH", "Linsanityy", "Valkrin", "Gate", "Allorim", "Johnp0t", "Superrrman", "Laughing", "AKAPapaChau", "denoshuresK", "Anthony", "Nightblue3", "Aranium", "Pallione", "BamfDotaPlayer", "FakerSama", "xiaolan", "Sweept", "HooManDu", "XiaoWeiXiao", "HctMike", "Revenge", "Apauloh", "latebloomer", "CRBFyre", "MongolWarrior", "Hiphophammer", "CoachLFProTeam", "hiimria", "Jackoo", "Saskio", "DadeFakerPawn", "GVStvicious", "NeonSurge", "NMEBodydrop", "MatLifeTriHard", "PantsareDragon", "GinormousNoob", "IMbz", "miqo", "VoyboyCARRY", "Hakuho", "Hexadecimal", "themassacre8", "Ayr", "SeaHorsee", "F0rtissimo", "GamerXz", "Remie", "Soghp", "Raimazz", "Ultimazero", "bigfatlp", "NMETrashyy", "C9LOD", "Popuh", "SAGASUPVEIGM", "Iamagoodboy", "TrollerDog", "Descraton", "LiquidInoriTV", "MiniMe", "IlIlIIIlIIIIlIII", "Shweebie", "KatLissEverdeen", "PoppersOP", "B1GKr1T", "DGB", "stephyscute2", "TEESEMM", "Cyprincess", "baohando", "urbutts", "maplestreeTT", "jamee", "SawitonReddit", "VeryBitter", "BenignSentinel", "MrJuvel", "Denny", "LeeGuitarStringa", "DKrupt", "LAGEhsher", "eLLinOiSe", "MochiBalls", "Sonnynot6", "ixou", "Taeyawn", "Dezx", "7hThintoN", "BeautifulKorean", "VwSTeesum", "TLIWDominate", "Vsepr", "ktSmurf", "Vultix", "Soredemo", "ROBERTxLEE", "AnnieBot", "aksn1per", "IamFearless", "FrostyLights", "SoYung", "Tuoooor", "Polx", "Agolite", "CloudWater", "Delta", "LAGOrbwalk", "sexycan", "SimonHawkes", "Rohammers", "NMEInnoX", "ChineseJester", "IAmDoughboy", "Cytosine", "Vanxer", "SDiana2", "Araya", "TheItalianOne", "F1Flow", "Kazahana", "Malajukii", "xiaoweiba", "JoshMabrey", "shinymew", "Event", "freelancer18", "ZnipetheDog", "hiitsviper", "HappyBirfdizzay", "Abou222", "Gir1shot2diamond", "KiNGNidhogg", "PurpleFloyd", "Rathul", "Kwaku", "BeachedWhaIe", "14h", "Xpecial", "CLGThink", "Aiciel", "oerh", "butttpounder", "TalkPIayLove", "jordank", "TwistyJuker", "MeganFoxisGG", "NiHaoDyLan", "TallerACE", "Doomtrobo", "Wardrium", "TwtchTviLoveSezu", "Westrice", "iMysterious", "BennyHung", "EnmaDaiO", "xTc4", "FallenBandit", "RumbIeMidGG", "deft1", "GochuHunter", "XxRobvanxX", "DuoChiDianShi", "coLBubbadub", "LeBulbe", "TanHat", "Dusty", "Jibberwackey", "Tallwhitebro", "llllllllllll", "LilBuu", "Diamond", "cesuna", "BigolRon", "xSojin", "Gh3ttoWatermelon", "KingofMemes", "111094Jrh", "bive", "Yammy", "FasScriptor", "Docxm", "GVBunnyFuFuu", "Alphabetical", "Liquidzig", "YouHadNoDream", "TINYHUEVOS", "Sheepx", "GangstaSwerve", "LeBulbetier", "amandagugu", "Rushmore", "AnnieCHastur", "OverlordForte", "Muffintopper66", "Kazura", "zetsuen", "wozhixiangyin", "CaptainNuke", "alextheman", "Seongmin", "Working", "kyaasenpaix3", "gurminder", "VwSKhoachitizer", "TGZ", "KrucifixKricc", "Kevnn", "Academiic", "ArianaLovato", "Elemia", "CLGDeftsu", "XerbeK", "CeIestic", "RedEyeAkame", "Kerpal", "xFSNSaber", "MakNooN", "Hcore", "MrGamer", "zeralf", "Fenixlol", "Indivisible", "SHOWMETHEMONEY", "Adorations", "Niqhtmarex", "RambointheJungle", "Iucid", "iOddOrange", "Uncover", "DD666666", "r0b0cop", "VictoricaDebloiz", "Gleebglarb", "EmperorSteeleye", "SillyAdam", "WWWWWWWWWWWW", "tempname456543", "FeedOn", "iJesus69", "OmegaB", "Riftcrawl", "Xandertrax", "Krymer", "TwistedSun", "DeTRFShinmori", "RiceFox", "iKoogar", "Mizuji", "White", "zgerman", "FORG1VENliftlift", "sakurafIowers", "xSaury", "PiPiPig", "Pyrr", "TheCptAmerica", "NtzNasty", "SlowlyDriftnAway", "cre4tive", "LAGCoinenShiv", "FSNDLuffy", "NintendudeX", "duliniul", "Cybody", "Odete49", "TFBlade", "Platoon", "CopyCat", "BarbecueRibs", "TitanDweevil", "HeroesOfTheStorm", "JRT94", "RedBerrrys", "Rockblood", "YoloOno", "BalmungLFT", "IreliaCarriesU", "LikeAMaws", "PaulDano", "ErzaScarIet", "KiritoKamui", "ProofOfPayment", "DonPorks", "BarronZzZ", "Pikaboo", "aLeo", "MikeytheBully", "7Qing", "BillyBossXD", "DragonRaider", "Haughty", "KMadClowns", "ikORY", "Nikkone", "WeixiaTianshi", "QQ346443922", "FoxDog", "Tahx", "Hawk", "Haruka", "Scrumm", "cackgod", "iAmNotSorry", "coLROBERTO", "GladeGleamBright", "MonkeyDufle", "M1ssBear", "theletter3", "Sandrew", "RongRe", "MrGatsby", "xBlueMoon", "Merryem", "ElkWhisperer", "Enticed", "Draguner", "DeliciousMilkGG", "Patoy", "Lucl3n3Ch4k0", "Smoian", "Piaget", "Xiaomi", "zeflife", "IsDatLohpally", "HatersWantToBeMe", "Blackmill", "PrinceChumpJohn", "NhatNguyen", "Nebulite", "IAmTheIRS", "TedStickles", "LOD", "CallMeExtremity", "kimjeii", "Kappasun", "JJJackstar", "TSMMeNoHaxor", "Zealous", "Normalize", "Topcatz", "KimchimanBegins", "DrawingPalette", "AnarchyofDinh", "hiimxiao", "MikeHct", "Manco", "ChumpJohnsTeemo", "Heejae", "delirous", "Iodus", "WakaWakaWak", "Hawez", "ThaOGTschussi", "TwistedFox", "PureCorruption", "HotshotGG", "Turdelz", "ysohardstylez", "Brainfre3z", "ilyTaylor", "Zaineking", "QualityADC", "LingTong", "DyrudeJstormRMX", "AnObesePanda", "silvermidget", "CornStyle", "LafalgarTaw", "Zeyzal", "Meowwwwwww", "Pokemorph", "JimmyHong", "Hoardedsoviet", "Nematic", "C9Yusui", "BlownbyJanna", "Sojs", "Cerathe", "FairieTail", "Xeralis", "ichibaNNN", "SerenityKitty", "Contractz", "WWvvWvvWvvwWwvww", "BlueHole", "SAGANoPause", "Mookiez", "RiotChun", "ValkrinSenpai", "HeXrisen", "CptJack", "Sleepyz", "HurricaneJanna", "ToxiGood", "ItsYourChoice", "TaintedDucky", "probablycoL", "Ina", "FreeGaming", "Phaxen", "tofumanoftruth", "xHeroofChaos", "Rockllee", "Sunohara", "Ryzer", "SpiritDog", "Kazma", "Sjvir", "Maulface", "SombreroGalaxy", "Bebhead", "ecco", "AurionKratos", "RoseByrne", "Kammgefahr", "VwSSandvich", "TDKLouisXGeeGee", "Picarus", "erwinbooze", "xrawrgasm", "Tangularx", "CSauce", "Back2Nexus", "SepekuAW", "Chuuper", "Airtom", "pro711", "Theifz", "SirhcEezy", "LuckyLone56", "AtomicN", "Splorchicken", "00000000", "UpAIlNight", "k3soju", "MikeyC", "s7efen", "FENOMENO", "XIVJan", "Splorgen", "djpocketchange", "Oasis", "Iggypop", "BallsInYourFace", "dopa7", "MasterDragonKing", "ssforfail", "MissyQing", "Endlesss", "badeed", "SmooshyCake", "Karmix", "Alestz", "svbk", "KissMeRDJ", "TeaMALaoSong", "drallaBnayR", "CHRISTHORMANN", "KnivesMillions", "MahNeega", "Sphinx", "Impasse", "Stefono62", "CLGEasy", "GankedFromAbove", "IslandLager", "MrJuneJune", "BrianTheis", "ShorterACE", "morippe", "Meatmush", "Dusey", "Paperkat", "Submit", "TooPro4u", "Porogami", "iuzi", "Suzikai", "TDKNear", "LiquidInori", "Deleted", "NtzLeopard", "UnKooL", "Desu", "Born4this", "sickening", "AllianceMike", "Dinklebergg", "YouGotFaker", "FusionSin", "IMBAYoungGooby", "Neverlike", "BestGodniviaNA", "FFat20GGWP", "kMSeunG", "AliBracamontes", "rua0311desuyo", "54Bomb99", "jivhust", "Penguinpreacher", "Yashimasta", "Erurikku", "ReeferChiefer420", "WonderfulTea", "Gamely", "OberonDark", "Imunne", "Hoeji", "xTearz", "NicoleKidman", "DonDardanoni", "Wonderfuls", "HentaiKatness69", "Ayai", "EREnko", "Cruzerthebruzer", "Connort", "Anoledoran", "BiggestNoob", "Anangelababy007", "TrojanPanda", "MasterCoach", "Kirmora", "wswgou", "NMEotterr", "DragonxCharl", "uJ3lly", "moosebreeder", "Strompest", "Kurumx", "Protective", "LegacyofHao", "DkBnet", "koreas", "AxelAxis", "NiMaTMSiLe", "Preachy", "WoahItsJoe", "XXRhythmMasterXX", "Lemin", "Destinedwithin", "Afflictive", "Nydukon", "Herald0fDeath", "ChowPingPong", "QuanNguyen", "interest", "Slylittlefox121", "VictimOfTalent", "chadiansile", "iToradorable", "BIackWinter", "Mazrer", "NKSoju", "nhocBym", "Dreemo", "Virus", "CowGoesMooooo", "Masrer", "Michaelcreative", "Emanpop", "Druiddroid", "KevonBurt", "Magicians", "HiImYolo", "LoveSick", "kamonika", "Chunkyfresh", "tongsoojosim", "hiimrogue", "Zookerz", "LiShengShun", "DeTFMYumenoti", "EddieMasao", "AGilletteRazor", "andtheknee", "Hazedlol", "SrsBznsBro", "Spreek", "Toxil", "JustinJoe", "Silverblade12345", "WalterWhiteOG", "SwiftyNyce", "Volt", "DoctorElo", "Connie", "DELLZOR", "aiopqwe", "MidnightBoba", "Sikeylol", "Warmogger", "Melhsa", "OmekoMushi", "Life", "SleepyDinosaur", "Leonard", "CatVomit", "Likang45", "PSiloveyou", "xtsetse", "ClydeBotNA", "Cpense", "Arakune", "shadowshifte", "LeeBai", "SexualSavant", "CornChowder", "DeTRFEsteL", "Astro", "deDeezer", "Jayms", "v1anddrotate", "JGLafter", "UhKili", "Aceyy", "Zik", "RiNDiN", "Grandederp", "KawaiiTheo", "Senjogahara", "Th3FooL", "GusTn", "TheTyrant", "GoJeonPa", "DJJingYun", "Egotesticle", "IoveLu", "OGNEunJungCho", "kevybear", "ImJas", "Agrorenn", "Synxia", "DouyuTVForgottt", "GrimSamurai", "666666666", "RockleeCtrl", "Xode", "QQ459680082", "KittenAnya", "Zakard", "MARSIRELIA", "WallOfText", "SireSnoopy", "kelppowder", "Hxadecimal", "onelaugh", "MisoMango", "PiggyAzalea", "MisterDon", "VirginEmperor", "suzuXIII", "P18GEMEINV", "Kurumz", "kjin", "CcLiuShicC", "ExileOfTheBlade", "Iambbb", "Fubguns", "Asutarotto", "WhatisLove", "Niqhtmarea", "L0LWal", "JannaFKennedy", "Steffypoo", "KillerHeedonge", "AsianSGpotato", "whiteclaw", "GATOAmyTorin", "lovemyRMB", "Frostarix", "voyyboy", "Melo", "RiotZALE", "ElvishGleeman", "givesyouwiings", "LoveIy", "Packy", "Ntzsmgyu", "Susice", "Dontqqnubz", "mikeshiwuer", "Chulss", "MASTERDING", "Scorpionz", "KKOBONG", "Veeless", "NtzMoon", "Leesinwiches", "RefuseFate", "TP101", "ozoss0", "SeaShell", "Baesed", "Foolish", "jivhust1", "KMadKing", "CHRlSS", "jbraggs", "BeefTacos", "Xoqe", "Naeim", "Aerodactyl", "Triett", "194IQredditor", "Pulzar", "Windgelu", "Suadero", "Zulgor", "Senks", "cAbstracT", "SwagersKing", "AkameBestGirl", "ThePrimaryEdict", "arthasqt", "Lobstery", "MisterOombadu", "TheFriendlyDofu", "Oryziaslatipes", "ugg1", "Flandoor", "HawkStandard", "wimbis", "JimmerFredette", "VikingKarots", "Sorcerawr", "Ciscla", "Suffix", "MrCow", "METALCHOCOB0", "Dessias", "LevelPerfect", "midVox", "Junha", "Hickus", "gamepiong", "AirscendoSona", "HellooKittie", "Jesse", "Rainaa", "ILoveNASoloQ", "Colonelk1", "DeTRFZerost", "Szmao", "TacoKat", "1tzJustVictor", "HomedogPaws", "DioDeSol", "PeterBrown", "FrannyPack", "AbsoluteFridges", "TheBiddler", "ELMdamemitai", "Old", "Pavle", "nathanielbee", "MakiIsuzuSento", "nweHuang", "EvanRL", "yorozu", "forgivenbow", "alexxisss", "Cloverblood", "Entities", "Believe", "Chiruno", "Xiaobanma", "BestJanna", "Neko", "TheEyeofHorus", "IGotSunshine", "Shade20", "Sprusse", "Imacarebear", "Kenleebudouchu", "LockDownExec", "Chubymonkey", "HunterHagen", "Applum", "DaoKho", "MrBlackburn", "beatmymeat", "BestDota2Sona", "chubbiercheeks", "KillaKast", "Betsujin", "TheAmberTeahouse", "BellaFlica", "ManateeWaffles", "Babalew", "charmanderu", "TooSalty", "LotusBoyKiller", "Bulgogeeeee", "Nerzhu1", "Lovelyiris", "QuantumFizzics", "freakingnoodles", "Pdop1", "Bakudanx", "Martel", "DoctorDoom", "equalix", "CARDCAPTORCARD", "Dyad", "Papasmuff", "TheBroskie", "Wadenation", "Flyinpiggy", "Wingsofdeathx", "IamOsiris", "ArtThief", "LotusEdge", "fwii", "Kios", "Shampu", "Nickpappa", "Yukari", "RayXu", "Emeraldancer", "TwoPants", "EnzoIX", "Jacka", "Plumber", "Skadanton", "C9TGleebglarbu", "BonQuish", "GrimmmmmmmReaper", "SmoSmoSmo", "MewtMe", "Ramzlol", "Mruseless", "Eitori", "S0lipsism", "X1337Gm4uLk03rX", "lloveOreo", "MrChivalry", "Oyt", "AnVu", "RBbabbong", "MASTERROSHl", "dabestmelon", "Potatooooooooooo", "KasuganoHaru", "C9BalIs", "stainzoid", "MrArceeSenpaiSir", "sweetinnocence", "Firehazerd", "EpicLynx", "2011", "PandaCoupIe", "Moelon", "KingKenneth", "Skinathonian", "FelixCC", "snowmine", "Acme", "QmoneyAKAQdollas", "Fexir", "ImbaDreaMeR", "ImNovel", "ButtercupShawty", "touch", "penguin", "Promitio", "DeTRFMoyashi", "Hordstyle", "Iizard", "Jintae", "pichumy", "Upu", "Iemonlimesodas", "TwitchTvAuke", "Promises", "Jintea", "OMikasaAckermanO", "wompwomp", "Kiyoon", "LiquidNyjacky", "ATColdblood", "SandPaperX", "0Sleepless", "pr0llylol", "AxelsFinalFlame", "DrSeussGRINCH", "ZENPhooka", "oMizu", "HamSammiches", "Pcboy", "RamenWithCheese", "Yook", "Dafreakz", "Winno", "XxWarDoomxX", "LifelessEyes", "UrekMazin0", "FrenchLady", "Pillowesque", "GodOfZed", "D3cimat3r", "broIy", "1stTimeDraven", "Exxpression", "godofcontrol", "nokappazone", "Shoopufff", "IlIIlIIIlIIIIIII", "Fragnat1c", "Abidius", "irvintaype", "YellOwish", "japanman", "CaristinnQT", "LeithaI", "Kitzuo", "Akatsuki", "ROBERTZEBRONZE", "aenba", "Arcenius", "Torgun", "Ryden7", "Entus", "CutestNeo", "MonkeyDx", "Xerosenkio", "JHHoon", "DeTFMCeros", "Rakinas", "MetaRhyperior", "MegaMilkGG", "EmilyVanCamp", "SecretofMana", "Snidstrat", "SJAero", "Mixture", "Teaz89", "ArizonaGreenTea", "AKASIeepingDAWG", "sh4pa", "Hanjaro", "BestFelixNA", "Dragles", "TummyTuck", "sciberbia", "KLucid", "Isunari", "lAtmospherel", "Zwag", "yuBinstah", "ionz", "Nove", "Nickywu", "BlueRainn", "lilgrim", "Rekeri", "Kaichu", "Arnold", "ArcticPuffin11", "UnholyNirvana", "IREGlNALD"],
    CountryFlags = ["img/cf/UK.png", "img/cf/US.png", "img/cf/Germany.png", "img/cf/Netherlands.png", "img/cf/Sweden.png", "img/cf/Australia.png", "img/cf/France.png", "img/cf/Switzerland.png", "img/cf/Belgium.png", "img/cf/Canada.png", "img/cf/Denmark.png", "img/cf/Italy.png", "img/cf/Singapore.png"],
    Platforms = ["<span class='platfrom-append'>on</span> iPhone", "<span class='platfrom-append'>on</span> iPad", "<span class='platfrom-append'>on</span> Android", "<span class='platfrom-append'>on</span> Android", "<span class='platfrom-append'>on</span> iPad"],
    FUTresources = ["<span class='activity-futcoins'>2000 Biocaps </span><span class='activity-'>2000 Biocaps .</span>", "<span class='activity-futcoins'>10000 Biocaps </span>", "<span class='activity-futcoins'>50000 Biocaps </span>", "<span class='activity-futcoins'>20000 Biocaps </span>", "<span class='activity-futcoins'>2000 Biocaps </span>", "<span class='activity-futcoins'>6000 Biocaps </span>", "<span class='activity-futcoins'>40000 Biocaps </span>", "<span class='activity-futcoins'>30000 Biocaps </span>"];


$(document).ready(function() {
        function a() {
            return UserName[rng(0, UserName.length - 1)]
        }

        function b() {
            return Platforms[rng(0, Platforms.length - 1)]
        }

        function c() {
            return CountryFlags[rng(0, CountryFlags.length - 1)]
        }

        function d() {
            return FUTresources[rng(0, FUTresources.length - 1)]
        }
        $.sticky('<div class="recent-activity-tab"><div class="recent-activity-user-wrapper"><img class="activity-flag-img" src="' + c() + '"/><span class="activity-username">' + a() + '</span></div><span class="activity-platform">' + b() + '</span><div class="activity-generated-amount">' + d() + "</div></div>");
        var e = function() {
            $.sticky('<div class="recent-activity-tab"><div class="recent-activity-user-wrapper"><img class="activity-flag-img" src="' + c() + '"/><span class="activity-username">' + a() + '</span></div><span class="activity-platform">' + b() + '</span><div class="activity-generated-amount">' + d() + "</div></div>")
        };
        setInterval(e, 2500);
        var e = function() {
            $.sticky('<div class="recent-activity-tab"><div class="recent-activity-user-wrapper"><img class="activity-flag-img" src="' + c() + '"/><span class="activity-username">' + a() + '</span></div><span class="activity-platform">' + b() + '</span><div class="activity-generated-amount">' + d() + "</div></div>")
        };
        setInterval(e, 6500);
        var e = function() {
            $.sticky('<div class="recent-activity-tab"><div class="recent-activity-user-wrapper"><img class="activity-flag-img" src="' + c() + '"/><span class="activity-username">' + a() + '</span></div><span class="activity-platform">' + b() + '</span><div class="activity-generated-amount">' + d() + "</div></div>")
        }
    }),
    function(a) {
        "use strict";

        function b(b) {
            return this.each(function() {
                var c = a(this),
                    e = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b),
                    f = c.data("bs.validator");
                (f || "destroy" != b) && (f || c.data("bs.validator", f = new d(this, e)), "string" == typeof b && f[b]())
            })
        }
        var c = ':input:not([type="submit"], button):enabled:visible',
            d = function(b, c) {
                this.$element = a(b), this.options = c, c.errors = a.extend({}, d.DEFAULTS.errors, c.errors);
                for (var e in c.custom)
                    if (!c.errors[e]) throw new Error("Missing default error message for custom validator: " + e);
                a.extend(d.VALIDATORS, c.custom), this.$element.attr("novalidate", !0), this.toggleSubmit(), this.$element.on("input.bs.validator change.bs.validator focusout.bs.validator", a.proxy(this.validateInput, this)), this.$element.on("submit.bs.validator", a.proxy(this.onSubmit, this)), this.$element.find("[data-match]").each(function() {
                    var b = a(this),
                        c = b.data("match");
                    a(c).on("input.bs.validator", function() {
                        b.val() && b.trigger("input.bs.validator")
                    })
                })
            };
        d.DEFAULTS = {
            delay: 500,
            html: !1,
            disable: !0,
            custom: {},
            errors: {
                match: "Does not match",
                minlength: "Not long enough"
            },
            feedback: {
                success: "glyphicon-ok",
                error: "glyphicon-warning-sign"
            }
        }, d.VALIDATORS = {
            native: function(a) {
                var b = a[0];
                return !b.checkValidity || b.checkValidity()
            },
            match: function(b) {
                var c = b.data("match");
                return !b.val() || b.val() === a(c).val()
            },
            minlength: function(a) {
                var b = a.data("minlength");
                return !a.val() || a.val().length >= b
            }
        }, d.prototype.validateInput = function(b) {
            var c = a(b.target),
                d = c.data("bs.validator.errors");
            if (c.is('[type="radio"]') && (c = this.$element.find('input[name="' + c.attr("name") + '"]')), this.$element.trigger(b = a.Event("validate.bs.validator", {
                    relatedTarget: c[0]
                })), !b.isDefaultPrevented()) {
                var e = this;
                this.runValidators(c).done(function(f) {
                    c.data("bs.validator.errors", f), f.length ? e.showErrors(c) : e.clearErrors(c), d && f.toString() === d.toString() || (b = f.length ? a.Event("invalid.bs.validator", {
                        relatedTarget: c[0],
                        detail: f
                    }) : a.Event("valid.bs.validator", {
                        relatedTarget: c[0],
                        detail: d
                    }), e.$element.trigger(b)), e.toggleSubmit(), e.$element.trigger(a.Event("validated.bs.validator", {
                        relatedTarget: c[0]
                    }))
                })
            }
        }, d.prototype.runValidators = function(b) {
            function c(a) {
                return b.data(a + "-error") || b.data("error") || "native" == a && b[0].validationMessage || g.errors[a]
            }
            var e = [],
                f = a.Deferred(),
                g = this.options;
            return b.data("bs.validator.deferred") && b.data("bs.validator.deferred").reject(), b.data("bs.validator.deferred", f), a.each(d.VALIDATORS, a.proxy(function(a, d) {
                if ((b.data(a) || "native" == a) && !d.call(this, b)) {
                    var f = c(a);
                    !~e.indexOf(f) && e.push(f)
                }
            }, this)), !e.length && b.val() && b.data("remote") ? this.defer(b, function() {
                var d = {};
                d[b.attr("name")] = b.val(), a.get(b.data("remote"), d).fail(function(a, b, d) {
                    e.push(c("remote") || d)
                }).always(function() {
                    f.resolve(e)
                })
            }) : f.resolve(e), f.promise()
        }, d.prototype.validate = function() {
            var a = this.options.delay;
            return this.options.delay = 0, this.$element.find(c).trigger("input.bs.validator"), this.options.delay = a, this
        }, d.prototype.showErrors = function(b) {
            var c = this.options.html ? "html" : "text";
            this.defer(b, function() {
                var d = b.closest(".form-group"),
                    e = d.find(".help-block.with-errors"),
                    f = d.find(".form-control-feedback"),
                    g = b.data("bs.validator.errors");
                g.length && (g = a("<ul/>").addClass("list-unstyled").append(a.map(g, function(b) {
                    return a("<li/>")[c](b)
                })), void 0 === e.data("bs.validator.originalContent") && e.data("bs.validator.originalContent", e.html()), e.empty().append(g), d.addClass("has-error"), f.length && f.removeClass(this.options.feedback.success) && f.addClass(this.options.feedback.error) && d.removeClass("has-success"))
            })
        }, d.prototype.clearErrors = function(a) {
            var b = a.closest(".form-group"),
                c = b.find(".help-block.with-errors"),
                d = b.find(".form-control-feedback");
            c.html(c.data("bs.validator.originalContent")), b.removeClass("has-error"), d.length && d.removeClass(this.options.feedback.error) && d.addClass(this.options.feedback.success) && b.addClass("has-success")
        }, d.prototype.hasErrors = function() {
            function b() {
                return !!(a(this).data("bs.validator.errors") || []).length
            }
            return !!this.$element.find(c).filter(b).length
        }, d.prototype.isIncomplete = function() {
            function b() {
                return "checkbox" === this.type ? !this.checked : "radio" === this.type ? !a('[name="' + this.name + '"]:checked').length : "" === a.trim(this.value)
            }
            return !!this.$element.find(c).filter("[required]").filter(b).length
        }, d.prototype.onSubmit = function(a) {
            this.validate(), (this.isIncomplete() || this.hasErrors()) && a.preventDefault()
        }, d.prototype.toggleSubmit = function() {
            if (this.options.disable) {
                a('button[type="submit"], input[type="submit"]').filter('[form="' + this.$element.attr("id") + '"]').add(this.$element.find('input[type="submit"], button[type="submit"]')).toggleClass("disabled", this.isIncomplete() || this.hasErrors()).css({
                    "pointer-events": "all",
                    cursor: "pointer"
                })
            }
        }, d.prototype.defer = function(b, c) {
            return c = a.proxy(c, this), this.options.delay ? (window.clearTimeout(b.data("bs.validator.timeout")), void b.data("bs.validator.timeout", window.setTimeout(c, this.options.delay))) : c()
        }, d.prototype.destroy = function() {
            return this.$element.removeAttr("novalidate").removeData("bs.validator").off(".bs.validator"), this.$element.find(c).off(".bs.validator").removeData(["bs.validator.errors", "bs.validator.deferred"]).each(function() {
                var b = a(this),
                    c = b.data("bs.validator.timeout");
                window.clearTimeout(c) && b.removeData("bs.validator.timeout")
            }), this.$element.find(".help-block.with-errors").each(function() {
                var b = a(this),
                    c = b.data("bs.validator.originalContent");
                b.removeData("bs.validator.originalContent").html(c)
            }), this.$element.find('input[type="submit"], button[type="submit"]').removeClass("disabled"), this.$element.find(".has-error").removeClass("has-error"), this
        };
        var e = a.fn.validator;
        a.fn.validator = b, a.fn.validator.Constructor = d, a.fn.validator.noConflict = function() {
            return a.fn.validator = e, this
        }, a(window).on("load", function() {
            a('form[data-toggle="validator"]').each(function() {
                var c = a(this);
                b.call(c, c.data())
            })
        })
    }(jQuery),
    function() {
        var a;
        a = window.jQuery || window.Zepto || window.$, a.fn.fancySelect = function(b) {
            var c, d;
            return null == b && (b = {}), d = a.extend({
                forceiOS: !1,
                includeBlank: !1,
                optionTemplate: function(a) {
                    return a.text()
                },
                triggerTemplate: function(a) {
                    return a.text()
                }
            }, b), c = !!navigator.userAgent.match(/iP(hone|od|ad)/i), this.each(function() {
                var b, e, f, g, h, i, j;
                return g = a(this), g.hasClass("fancified") || "SELECT" !== g[0].tagName ? void 0 : (g.addClass("fancified"), g.css({
                    width: 1,
                    height: 1,
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    opacity: 0
                }), g.wrap('<div class="fancy-select">'), j = g.parent(), g.data("class") && j.addClass(g.data("class")), j.append('<div class="trigger">'), (!c || d.forceiOS) && j.append('<ul class="options">'), h = j.find(".trigger"), f = j.find(".options"), e = g.prop("disabled"), e && j.addClass("disabled"), i = function() {
                    var a;
                    return a = d.triggerTemplate(g.find(":selected")), h.html(a)
                }, g.on("blur.fs", function() {
                    return h.hasClass("open") ? setTimeout(function() {
                        return h.trigger("close.fs")
                    }, 120) : void 0
                }), h.on("close.fs", function() {
                    return h.removeClass("open"), f.removeClass("open")
                }), h.on("click.fs", function() {
                    var i;
                    if (!e)
                        if (h.toggleClass("open"), c && !d.forceiOS) {
                            if (h.hasClass("open")) return g.focus()
                        } else if (h.hasClass("open") && (i = h.parent(), i.offsetParent(), i.offset().top + i.outerHeight() + f.outerHeight() + 20 > a(window).height() + a(window).scrollTop() ? f.addClass("overflowing") : f.removeClass("overflowing")), f.toggleClass("open"), !c) return g.focus()
                }), g.on("enable", function() {
                    return g.prop("disabled", !1), j.removeClass("disabled"), e = !1, b()
                }), g.on("disable", function() {
                    return g.prop("disabled", !0), j.addClass("disabled"), e = !0
                }), g.on("change.fs", function(a) {
                    return a.originalEvent && a.originalEvent.isTrusted ? a.stopPropagation() : i()
                }), g.on("keydown", function(a) {
                    var b, c, d;
                    if (d = a.which, b = f.find(".hover"), b.removeClass("hover"), f.hasClass("open")) {
                        if (38 === d ? (a.preventDefault(), b.length && b.index() > 0 ? b.prev().addClass("hover") : f.find("li:last-child").addClass("hover")) : 40 === d ? (a.preventDefault(), b.length && b.index() < f.find("li").length - 1 ? b.next().addClass("hover") : f.find("li:first-child").addClass("hover")) : 27 === d ? (a.preventDefault(), h.trigger("click.fs")) : 13 === d || 32 === d ? (a.preventDefault(), b.trigger("mousedown.fs")) : 9 === d && h.hasClass("open") && h.trigger("close.fs"), c = f.find(".hover"), c.length) return f.scrollTop(0), f.scrollTop(c.position().top - 12)
                    } else if (13 === d || 32 === d || 38 === d || 40 === d) return a.preventDefault(), h.trigger("click.fs")
                }), f.on("mousedown.fs", "li", function(b) {
                    var d;
                    return d = a(this), g.val(d.data("raw-value")), c || g.trigger("blur.fs").trigger("focus.fs"), f.find(".selected").removeClass("selected"), d.addClass("selected"), h.addClass("selected"), g.val(d.data("raw-value")).trigger("change.fs").trigger("blur.fs").trigger("focus.fs")
                }), f.on("mouseenter.fs", "li", function() {
                    var b, c;
                    return c = a(this), b = f.find(".hover"), b.removeClass("hover"), c.addClass("hover")
                }), f.on("mouseleave.fs", "li", function() {
                    return f.find(".hover").removeClass("hover")
                }), b = function() {
                    return i(), !c || d.forceiOS ? (g.find("option"), g.find("option").each(function(b, c) {
                        var e;
                        return c = a(c), c.prop("disabled") || !c.val() && !d.includeBlank ? void 0 : (e = d.optionTemplate(c), c.prop("selected") ? f.append('<li data-raw-value="' + c.val() + '" class="selected">' + e + "</li>") : f.append('<li data-raw-value="' + c.val() + '">' + e + "</li>"))
                    })) : void 0
                }, g.on("update.fs", function() {
                    return j.find(".options").empty(), b()
                }), b())
            })
        }
    }.call(this),
    function(a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
    }(function(a) {
        function b(a, b) {
            return a.toFixed(b.decimals)
        }
        var c = function(b, d) {
            this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, this.dataOptions(), d), this.init()
        };
        c.DEFAULTS = {
            from: 0,
            to: 0,
            speed: 1e3,
            refreshInterval: 100,
            decimals: 0,
            formatter: b,
            onUpdate: null,
            onComplete: null
        }, c.prototype.init = function() {
            this.value = this.options.from, this.loops = Math.ceil(this.options.speed / this.options.refreshInterval), this.loopCount = 0, this.increment = (this.options.to - this.options.from) / this.loops
        }, c.prototype.dataOptions = function() {
            var a = {
                    from: this.$element.data("from"),
                    to: this.$element.data("to"),
                    speed: this.$element.data("speed"),
                    refreshInterval: this.$element.data("refresh-interval"),
                    decimals: this.$element.data("decimals")
                },
                b = Object.keys(a);
            for (var c in b) {
                var d = b[c];
                void 0 === a[d] && delete a[d]
            }
            return a
        }, c.prototype.update = function() {
            this.value += this.increment, this.loopCount++, this.render(), "function" == typeof this.options.onUpdate && this.options.onUpdate.call(this.$element, this.value), this.loopCount >= this.loops && (clearInterval(this.interval), this.value = this.options.to, "function" == typeof this.options.onComplete && this.options.onComplete.call(this.$element, this.value))
        }, c.prototype.render = function() {
            var a = this.options.formatter.call(this.$element, this.value, this.options);
            this.$element.text(a)
        }, c.prototype.restart = function() {
            this.stop(), this.init(), this.start()
        }, c.prototype.start = function() {
            this.stop(), this.render(), this.interval = setInterval(this.update.bind(this), this.options.refreshInterval)
        }, c.prototype.stop = function() {
            this.interval && clearInterval(this.interval)
        }, c.prototype.toggle = function() {
            this.interval ? this.stop() : this.start()
        }, a.fn.countTo = function(b) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("countTo"),
                    f = !e || "object" == typeof b,
                    g = "object" == typeof b ? b : {},
                    h = "string" == typeof b ? b : "start";
                f && (e && e.stop(), d.data("countTo", e = new c(this, g))), e[h].call(e)
            })
        }
    }),
    function(a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
    }(function(a) {
        var b, c, d, e, f, g, h = "Close",
            i = "BeforeClose",
            l = "MarkupParse",
            m = "Open",
            n = "Change",
            o = "mfp",
            p = "." + o,
            q = "mfp-ready",
            r = "mfp-removing",
            s = "mfp-prevent-close",
            t = function() {},
            u = !!window.jQuery,
            v = a(window),
            w = function(a, c) {
                b.ev.on(o + a + p, c)
            },
            x = function(b, c, d, e) {
                var f = document.createElement("div");
                return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
            },
            y = function(c, d) {
                b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
            },
            z = function(c) {
                return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
            },
            A = function() {
                a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
            },
            B = function() {
                var a = document.createElement("p").style,
                    b = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== a.transition) return !0;
                for (; b.length;)
                    if (b.pop() + "Transition" in a) return !0;
                return !1
            };
        t.prototype = {
            constructor: t,
            init: function() {
                var c = navigator.appVersion;
                b.isIE7 = -1 !== c.indexOf("MSIE 7."), b.isIE8 = -1 !== c.indexOf("MSIE 8."), b.isLowIE = b.isIE7 || b.isIE8, b.isAndroid = /android/gi.test(c), b.isIOS = /iPhone|iPad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
            },
            open: function(c) {
                var e;
                if (!1 === c.isObj) {
                    b.items = c.items.toArray(), b.index = 0;
                    var g, h = c.items;
                    for (e = 0; e < h.length; e++)
                        if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
                            b.index = e;
                            break
                        }
                } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
                if (b.isOpen) return void b.updateItemHTML();
                b.types = [], f = "", b.ev = c.mainEl && c.mainEl.length ? c.mainEl.eq(0) : d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() {
                    b.close()
                }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) {
                    b._checkIfClose(a.target) && b.close()
                }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
                var i = a.magnificPopup.modules;
                for (e = 0; e < i.length; e++) {
                    var j = i[e];
                    j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
                }
                y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a, b, c, d) {
                    c.close_replaceWith = z(d.type)
                }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.wrap.css(b.fixedContentPos ? {
                    overflow: b.st.overflowY,
                    overflowX: "hidden",
                    overflowY: b.st.overflowY
                } : {
                    top: v.scrollTop(),
                    position: "absolute"
                }), (!1 === b.st.fixedBgPos || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                    height: d.height(),
                    position: "absolute"
                }), b.st.enableEscapeKey && d.on("keyup" + p, function(a) {
                    27 === a.keyCode && b.close()
                }), v.on("resize" + p, function() {
                    b.updateSize()
                }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
                var k = b.wH = v.height(),
                    n = {};
                if (b.fixedContentPos && b._hasScrollBar(k)) {
                    var o = b._getScrollbarSize();
                    o && (n.marginRight = o)
                }
                b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
                var r = b.st.mainClass;
                return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function() {
                    b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
                }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
            },
            close: function() {
                b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function() {
                    b._close()
                }, b.st.removalDelay)) : b._close())
            },
            _close: function() {
                y(h);
                var c = r + " " + q + " ";
                if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
                    var e = {
                        marginRight: ""
                    };
                    b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
                }
                d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && !0 !== b.currTemplate[b.currItem.type] || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y("AfterClose")
            },
            updateSize: function(a) {
                if (b.isIOS) {
                    var c = document.documentElement.clientWidth / window.innerWidth,
                        d = window.innerHeight * c;
                    b.wrap.css("height", d), b.wH = d
                } else b.wH = a || v.height();
                b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
            },
            updateItemHTML: function() {
                var c = b.items[b.index];
                b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
                var d = c.type;
                if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
                    var f = !!b.st[d] && b.st[d].markup;
                    y("FirstMarkupParse", f), b.currTemplate[d] = !f || a(f)
                }
                e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
                var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
                b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
            },
            appendContent: function(a, c) {
                b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && !0 === b.currTemplate[c] ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y("BeforeAppend"), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
            },
            parseEl: function(c) {
                var d, e = b.items[c];
                if (e.tagName ? e = {
                        el: a(e)
                    } : (d = e.type, e = {
                        data: e,
                        src: e.src
                    }), e.el) {
                    for (var f = b.types, g = 0; g < f.length; g++)
                        if (e.el.hasClass("mfp-" + f[g])) {
                            d = f[g];
                            break
                        }
                    e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
                }
                return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
            },
            addGroup: function(a, c) {
                var d = function(d) {
                    d.mfpEl = this, b._openClick(d, a, c)
                };
                c || (c = {});
                var e = "click.magnificPopup";
                c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
            },
            _openClick: function(c, d, e) {
                if ((void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick) || 2 !== c.which && !c.ctrlKey && !c.metaKey) {
                    var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                    if (g)
                        if (a.isFunction(g)) {
                            if (!g.call(b)) return !0
                        } else if (v.width() < g) return !0;
                    c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
                }
            },
            updateStatus: function(a, d) {
                if (b.preloader) {
                    c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                    var e = {
                        status: a,
                        text: d
                    };
                    y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function(a) {
                        a.stopImmediatePropagation()
                    }), b.container.addClass("mfp-s-" + a), c = a
                }
            },
            _checkIfClose: function(c) {
                if (!a(c).hasClass(s)) {
                    var d = b.st.closeOnContentClick,
                        e = b.st.closeOnBgClick;
                    if (d && e) return !0;
                    if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
                    if (c === b.content[0] || a.contains(b.content[0], c)) {
                        if (d) return !0
                    } else if (e && a.contains(document, c)) return !0;
                    return !1
                }
            },
            _addClassToMFP: function(a) {
                b.bgOverlay.addClass(a), b.wrap.addClass(a)
            },
            _removeClassFromMFP: function(a) {
                this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
            },
            _hasScrollBar: function(a) {
                return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
            },
            _setFocus: function() {
                (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
            },
            _onFocusIn: function(c) {
                return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
            },
            _parseMarkup: function(b, c, d) {
                var e;
                d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function(a, c) {
                    if (void 0 === c || !1 === c) return !0;
                    if (e = a.split("_"), e.length > 1) {
                        var d = b.find(p + "-" + e[0]);
                        if (d.length > 0) {
                            var f = e[1];
                            "replaceWith" === f ? d[0] !== c[0] && d.replaceWith(c) : "img" === f ? d.is("img") ? d.attr("src", c) : d.replaceWith('<img src="' + c + '" class="' + d.attr("class") + '" />') : d.attr(e[1], c)
                        }
                    } else b.find(p + "-" + a).html(c)
                })
            },
            _getScrollbarSize: function() {
                if (void 0 === b.scrollbarSize) {
                    var a = document.createElement("div");
                    a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
                }
                return b.scrollbarSize
            }
        }, a.magnificPopup = {
            instance: null,
            proto: t.prototype,
            modules: [],
            open: function(b, c) {
                return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
            },
            close: function() {
                return a.magnificPopup.instance && a.magnificPopup.instance.close()
            },
            registerModule: function(b, c) {
                c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading..."
            }
        }, a.fn.magnificPopup = function(c) {
            A();
            var d = a(this);
            if ("string" == typeof c)
                if ("open" === c) {
                    var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup,
                        g = parseInt(arguments[1], 10) || 0;
                    f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
                        mfpEl: e
                    }, d, f)
                } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
            else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
            return d
        };
        var C, D, E, F = "inline",
            G = function() {
                E && (D.after(E.addClass(C)).detach(), E = null)
            };
        a.magnificPopup.registerModule(F, {
            options: {
                hiddenClass: "hide",
                markup: "",
                tNotFound: "Content not found"
            },
            proto: {
                initInline: function() {
                    b.types.push(F), w(h + "." + F, function() {
                        G()
                    })
                },
                getInline: function(c, d) {
                    if (G(), c.src) {
                        var e = b.st.inline,
                            f = a(c.src);
                        if (f.length) {
                            var g = f[0].parentNode;
                            g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
                        } else b.updateStatus("error", e.tNotFound), f = a("<div>");
                        return c.inlineElement = f, f
                    }
                    return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
                }
            }
        });
        var H, I = "ajax",
            J = function() {
                H && a(document.body).removeClass(H)
            },
            K = function() {
                J(), b.req && b.req.abort()
            };
        a.magnificPopup.registerModule(I, {
            options: {
                settings: null,
                cursor: "mfp-ajax-cur",
                tError: '<a href="%url%">The content</a> could not be loaded.'
            },
            proto: {
                initAjax: function() {
                    b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
                },
                getAjax: function(c) {
                    H && a(document.body).addClass(H), b.updateStatus("loading");
                    var d = a.extend({
                        url: c.src,
                        success: function(d, e, f) {
                            var g = {
                                data: d,
                                xhr: f
                            };
                            y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function() {
                                b.wrap.addClass(q)
                            }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
                        },
                        error: function() {
                            J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                        }
                    }, b.st.ajax.settings);
                    return b.req = a.ajax(d), ""
                }
            }
        });
        var L, M = function(c) {
            if (c.data && void 0 !== c.data.title) return c.data.title;
            var d = b.st.image.titleSrc;
            if (d) {
                if (a.isFunction(d)) return d.call(b, c);
                if (c.el) return c.el.attr(d) || ""
            }
            return ""
        };
        a.magnificPopup.registerModule("image", {
            options: {
                markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.'
            },
            proto: {
                initImage: function() {
                    var c = b.st.image,
                        d = ".image";
                    b.types.push("image"), w(m + d, function() {
                        "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
                    }), w(h + d, function() {
                        c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
                    }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
                },
                resizeImage: function() {
                    var a = b.currItem;
                    if (a && a.img && b.st.image.verticalFit) {
                        var c = 0;
                        b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
                    }
                },
                _onImageHasSize: function(a) {
                    a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
                },
                findImageSize: function(a) {
                    var c = 0,
                        d = a.img[0],
                        e = function(f) {
                            L && clearInterval(L), L = setInterval(function() {
                                return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                            }, f)
                        };
                    e(1)
                },
                getImage: function(c, d) {
                    var e = 0,
                        f = function() {
                            c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
                        },
                        g = function() {
                            c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
                        },
                        h = b.st.image,
                        i = d.find(".mfp-img");
                    if (i.length) {
                        var j = document.createElement("img");
                        j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                    }
                    return b._parseMarkup(d, {
                        title: M(c),
                        img_replaceWith: c.img
                    }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
                }
            }
        });
        var N, O = function() {
            return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
        };
        a.magnificPopup.registerModule("zoom", {
            options: {
                enabled: !1,
                easing: "ease-in-out",
                duration: 300,
                opener: function(a) {
                    return a.is("img") ? a : a.find("img")
                }
            },
            proto: {
                initZoom: function() {
                    var a, c = b.st.zoom,
                        d = ".zoom";
                    if (c.enabled && b.supportsTransition) {
                        var e, f, g = c.duration,
                            j = function(a) {
                                var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                    d = "all " + c.duration / 1e3 + "s " + c.easing,
                                    e = {
                                        position: "fixed",
                                        zIndex: 9999,
                                        left: 0,
                                        top: 0,
                                        "-webkit-backface-visibility": "hidden"
                                    },
                                    f = "transition";
                                return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
                            },
                            k = function() {
                                b.content.css("visibility", "visible")
                            };
                        w("BuildControls" + d, function() {
                            if (b._allowZoom()) {
                                if (clearTimeout(e), b.content.css("visibility", "hidden"), !(a = b._getItemToZoom())) return void k();
                                f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function() {
                                    f.css(b._getOffset(!0)), e = setTimeout(function() {
                                        k(), setTimeout(function() {
                                            f.remove(), a = f = null, y("ZoomAnimationEnded")
                                        }, 16)
                                    }, g)
                                }, 16)
                            }
                        }), w(i + d, function() {
                            if (b._allowZoom()) {
                                if (clearTimeout(e), b.st.removalDelay = g, !a) {
                                    if (!(a = b._getItemToZoom())) return;
                                    f = j(a)
                                }
                                f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function() {
                                    f.css(b._getOffset())
                                }, 16)
                            }
                        }), w(h + d, function() {
                            b._allowZoom() && (k(), f && f.remove(), a = null)
                        })
                    }
                },
                _allowZoom: function() {
                    return "image" === b.currItem.type
                },
                _getItemToZoom: function() {
                    return !!b.currItem.hasSize && b.currItem.img
                },
                _getOffset: function(c) {
                    var d;
                    d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                    var e = d.offset(),
                        f = parseInt(d.css("padding-top"), 10),
                        g = parseInt(d.css("padding-bottom"), 10);
                    e.top -= a(window).scrollTop() - f;
                    var h = {
                        width: d.width(),
                        height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
                    };
                    return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
                }
            }
        });
        var P = "iframe",
            Q = "//about:blank",
            R = function(a) {
                if (b.currTemplate[P]) {
                    var c = b.currTemplate[P].find("iframe");
                    c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
                }
            };
        a.magnificPopup.registerModule(P, {
            options: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: "iframe_src",
                patterns: {
                    youtube: {
                        index: "youtube.com",
                        id: "v=",
                        src: "//www.youtube.com/embed/%id%?autoplay=1"
                    },
                    vimeo: {
                        index: "vimeo.com/",
                        id: "/",
                        src: "//player.vimeo.com/video/%id%?autoplay=1"
                    },
                    gmaps: {
                        index: "//maps.google.",
                        src: "%id%&output=embed"
                    }
                }
            },
            proto: {
                initIframe: function() {
                    b.types.push(P), w("BeforeChange", function(a, b, c) {
                        b !== c && (b === P ? R() : c === P && R(!0))
                    }), w(h + "." + P, function() {
                        R()
                    })
                },
                getIframe: function(c, d) {
                    var e = c.src,
                        f = b.st.iframe;
                    a.each(f.patterns, function() {
                        return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
                    });
                    var g = {};
                    return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
                }
            }
        });
        var S = function(a) {
                var c = b.items.length;
                return a > c - 1 ? a - c : 0 > a ? c + a : a
            },
            T = function(a, b, c) {
                return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
            };
        a.magnificPopup.registerModule("gallery", {
            options: {
                enabled: !1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: "%curr% of %total%"
            },
            proto: {
                initGallery: function() {
                    var c = b.st.gallery,
                        e = ".mfp-gallery",
                        g = Boolean(a.fn.mfpFastClick);
                    return b.direction = !0, !(!c || !c.enabled) && (f += " mfp-gallery", w(m + e, function() {
                        c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function() {
                            return b.items.length > 1 ? (b.next(), !1) : void 0
                        }), d.on("keydown" + e, function(a) {
                            37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                        })
                    }), w("UpdateStatus" + e, function(a, c) {
                        c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
                    }), w(l + e, function(a, d, e, f) {
                        var g = b.items.length;
                        e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
                    }), w("BuildControls" + e, function() {
                        if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                            var d = c.arrowMarkup,
                                e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                                f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s),
                                h = g ? "mfpFastClick" : "click";
                            e[h](function() {
                                b.prev()
                            }), f[h](function() {
                                b.next()
                            }), b.isIE7 && (x("b", e[0], !1, !0), x("a", e[0], !1, !0), x("b", f[0], !1, !0), x("a", f[0], !1, !0)), b.container.append(e.add(f))
                        }
                    }), w(n + e, function() {
                        b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function() {
                            b.preloadNearbyImages(), b._preloadTimeout = null
                        }, 16)
                    }), void w(h + e, function() {
                        d.off(e), b.wrap.off("click" + e), b.arrowLeft && g && b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(), b.arrowRight = b.arrowLeft = null
                    }))
                },
                next: function() {
                    b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
                },
                prev: function() {
                    b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
                },
                goTo: function(a) {
                    b.direction = a >= b.index, b.index = a, b.updateItemHTML()
                },
                preloadNearbyImages: function() {
                    var a, c = b.st.gallery.preload,
                        d = Math.min(c[0], b.items.length),
                        e = Math.min(c[1], b.items.length);
                    for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
                    for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
                },
                _preloadItem: function(c) {
                    if (c = S(c), !b.items[c].preloaded) {
                        var d = b.items[c];
                        d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
                            d.hasSize = !0
                        }).on("error.mfploader", function() {
                            d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
                        }).attr("src", d.src)), d.preloaded = !0
                    }
                }
            }
        });
        var U = "retina";
        a.magnificPopup.registerModule(U, {
                options: {
                    replaceSrc: function(a) {
                        return a.src.replace(/\.\w+$/, function(a) {
                            return "@2x" + a
                        })
                    },
                    ratio: 1
                },
                proto: {
                    initRetina: function() {
                        if (window.devicePixelRatio > 1) {
                            var a = b.st.retina,
                                c = a.ratio;
                            (c = isNaN(c) ? c() : c) > 1 && (w("ImageHasSize." + U, function(a, b) {
                                b.img.css({
                                    "max-width": b.img[0].naturalWidth / c,
                                    width: "100%"
                                })
                            }), w("ElementParse." + U, function(b, d) {
                                d.src = a.replaceSrc(d, c)
                            }))
                        }
                    }
                }
            }),
            function() {
                var c = "ontouchstart" in window,
                    d = function() {
                        v.off("touchmove" + f + " touchend" + f)
                    },
                    e = "mfpFastClick",
                    f = "." + e;
                a.fn.mfpFastClick = function(e) {
                    return a(this).each(function() {
                        var g, h = a(this);
                        if (c) {
                            var i, j, k, l, m, n;
                            h.on("touchstart" + f, function(a) {
                                l = !1, n = 1, m = a.originalEvent ? a.originalEvent.touches[0] : a.touches[0], j = m.clientX, k = m.clientY, v.on("touchmove" + f, function(a) {
                                    m = a.originalEvent ? a.originalEvent.touches : a.touches, n = m.length, m = m[0], (Math.abs(m.clientX - j) > 10 || Math.abs(m.clientY - k) > 10) && (l = !0, d())
                                }).on("touchend" + f, function(a) {
                                    d(), l || n > 1 || (g = !0, a.preventDefault(), clearTimeout(i), i = setTimeout(function() {
                                        g = !1
                                    }, 1e3), e())
                                })
                            })
                        }
                        h.on("click" + f, function() {
                            g || e()
                        })
                    })
                }, a.fn.destroyMfpFastClick = function() {
                    a(this).off("touchstart" + f + " click" + f), c && v.off("touchmove" + f + " touchend" + f)
                }
            }(), A()
    }), $("#contactForm").validator().on("submit", function(a) {
        a.isDefaultPrevented() ? (formError(), submitMSG(!1, "Did you fill in the form properly?")) : (a.preventDefault(), submitForm())
    });
var commentusername = ["ready", "Giselda Capon", "Fausto Greco", "Lia Piazza", "Anacleto", "Batista", "Priscilla", "Adelia Conti", "Marilena", "Ivo Zetticci", "Chris Jericho", "Abelardo", "Jonathan", "Mafalda", "Sam", "Igor", "Andrew", "Eliano Fallaci", "Ermes", "Calvin", "Concordio", "", "2000", "4000", "6000", "8000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "Biocaps", "! ", ". ", ".. ", " ", "Wow", "WOW", "wow", "This Biocaps Hack is amazing ", "this Biocaps generator is incredible", "This Biocaps Hack is awesome ", "this is legit website ", "this website is giving some real stuff ", "thanks for sharing ", "awesome man! you should sell this method", "I can not believe believe that this really works, generated 10000", "awesome tool indeed ", "now i dont need to buy stuff! thanks a lot ", " ", " ", " ", "", " ", "", "", "", "", "", "", "amazing tool bro. thanks you so much for sharing this ", "thank you admin! works for me!", "the most powerful tool ever! thank you ", "i wonder why this wasn’t on the news. this is stunning tool! ", "thanks a lot dude!!!! WORKS like a charm!!! ", "AWESOME!!", " Thanks for this dude… at first i thought this is some shit again.. thanks a lot! ", "that was amazing!!! thanks a lot for this. ", "works like a charm.. thanks admin.. ", "thanks! I was looking for this in a long time! ", "", "", "", "", "", "", "", "", "", "", "", "", " ", " ", " ", " ", "  ", " ", "", "", "", "", "works! FREAKING AAMZING!! ", "thank you admin! ", "Perfect! this is what i am looking for! ", "amazing job admin… thank you for sharing  ", " ", " ", " ", "thank you", "thanks", "thanks a lot", "thank you so much", "many thanks", "thank you", "thanks", "thanks a lot", ":D ", ":3 ", ":) ", "c: ", "=D ", "=3 ", "=) ", "c= ", "commented", "state-disabled", "addClass", "#commentUsernameLabel", "disabled", "attr", "#commentUsername", "#commentCommentLabel", "#commentComment", "comment1Cookie", "username1Cookie", "username2Cookie", "username3Cookie", "timePosted11Cookie", "timePosted22Cookie", "timePosted33Cookie", "comment2Cookie", "comment3Cookie", "click", "#commentSubmit", "random", "floor", "join", "length", "html", "#username", " ", "#comment", "#timePosted", "Posted few seconds ago", "Posted a minute ago", "Posted ", " minutes ago", "round", "val", "state-error", "getTime", "setTime", "; expires=", "toGMTString", "cookie", "=", "; path=/", ";", "split", "substring", "charAt", "indexOf"];
$(document)[commentusername[0]](main), usernames = [commentusername[1], commentusername[2], commentusername[3], commentusername[4], commentusername[5], commentusername[6], commentusername[7], commentusername[8], commentusername[9], commentusername[10], commentusername[11], commentusername[12], commentusername[13], commentusername[14], commentusername[15], commentusername[16], commentusername[17], commentusername[18], commentusername[19]], minPostTime = 10, maxPostTime = 300, refreshRate = randomRange(1e3 * minPostTime, 1e3 * maxPostTime), websiteName = commentusername[20], website = commentusername[21], amount = [commentusername[22], commentusername[23], commentusername[24], commentusername[25], commentusername[26], commentusername[27], commentusername[28], commentusername[29], commentusername[30], commentusername[31], commentusername[32]], resources = [commentusername[33]], punctuation = [commentusername[34], commentusername[35], commentusername[36], commentusername[37]], wowKeywords = [commentusername[38], commentusername[39], commentusername[40]], thisKeywords = [commentusername[41], commentusername[42], commentusername[43], commentusername[44], commentusername[45], commentusername[46]], thisKeywords2 = [commentusername[47], commentusername[48], commentusername[49], commentusername[50]], adverbKeywords = [commentusername[51], commentusername[52], commentusername[53], commentusername[54], commentusername[55]], adjectivesKeywords = [commentusername[56], commentusername[57], commentusername[58], commentusername[59], commentusername[60], commentusername[61]], iKeywords = [commentusername[62], commentusername[63], commentusername[64], commentusername[65], commentusername[66], commentusername[67], commentusername[68], commentusername[69], commentusername[70], commentusername[71]], workingKeywords = [commentusername[72], commentusername[73], commentusername[74], commentusername[75], commentusername[76], commentusername[77], commentusername[78], commentusername[79], commentusername[80], commentusername[81], commentusername[82], commentusername[83]], conjunctionKeywords = [commentusername[84], commentusername[85], commentusername[86], commentusername[87], commentusername[88], commentusername[89]], conKeywords = [commentusername[90], commentusername[91], commentusername[92], commentusername[93]], meKeywords = [commentusername[94], commentusername[95], commentusername[96], commentusername[97]], gotKeywords = [commentusername[98], commentusername[99], commentusername[100]], thanksKeywords = [commentusername[101], commentusername[102], commentusername[103], commentusername[104], commentusername[105], commentusername[106], commentusername[107], commentusername[108]], emotes1 = [commentusername[109], commentusername[110], commentusername[111], commentusername[112]], emotes2 = [commentusername[113], commentusername[114], commentusername[115], commentusername[116]], ! function(a, b) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.Sweetalert2 = b()
}(this, function() {
    "use strict";

    function a() {
        null === r.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (r.previousBodyPadding = document.body.style.paddingRight, document.body.style.paddingRight = R() + "px")
    }

    function b() {
        null !== r.previousBodyPadding && (document.body.style.paddingRight = r.previousBodyPadding, r.previousBodyPadding = null)
    }

    function c() {
        if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && !D(document.body, j.iosfix)) {
            var b = document.body.scrollTop;
            document.body.style.top = -1 * b + "px", F(document.body, j.iosfix)
        }
    }

    function d() {
        if (D(document.body, j.iosfix)) {
            var a = parseInt(document.body.style.top, 10);
            G(document.body, j.iosfix), document.body.scrollTop = -1 * a
        }
    }

    function e() {
        if (void 0 === arguments[0]) return console.error("SweetAlert2 expects at least 1 attribute!"), !1;
        var a = p({}, T);
        switch (typeof arguments[0]) {
            case "string":
                a.title = arguments[0], a.text = arguments[1] || "", a.type = arguments[2] || "";
                break;
            case "object":
                p(a, arguments[0]), a.extraParams = arguments[0].extraParams, "email" === a.input && null === a.inputValidator && (a.inputValidator = function(a) {
                    return new Promise(function(b, c) {
                        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(a) ? b() : c("Invalid email address")
                    })
                });
                break;
            default:
                return console.error('SweetAlert2: Unexpected type of argument! Expected "string" or "object", got ' + typeof arguments[0]), !1
        }
        V(a);
        var b = u();
        return new Promise(function(c, d) {
            function e(b, c) {
                for (var d = C(a.focusCancel), e = 0; e < d.length; e++) {
                    b += c, b === d.length ? b = 0 : -1 === b && (b = d.length - 1);
                    var f = d[b];
                    if (L(f)) return f.focus()
                }
            }

            function h(b) {
                var c = b || window.event,
                    g = c.keyCode || c.which;
                if (-1 !== [9, 13, 32, 27].indexOf(g)) {
                    for (var h = c.target || c.srcElement, i = C(a.focusCancel), j = -1, k = 0; k < i.length; k++)
                        if (h === i[k]) {
                            j = k;
                            break
                        }
                    9 === g ? (c.shiftKey ? e(j, -1) : e(j, 1), O(c)) : 13 === g || 32 === g ? -1 === j && (a.focusCancel ? N(t, c) : N(s, c)) : 27 === g && !0 === a.allowEscapeKey && (f.closeModal(a.onClose), d("esc"))
                }
            }
            a.timer && (b.timeout = setTimeout(function() {
                f.closeModal(a.onClose), d("timer")
            }, a.timer));
            var i = function(c) {
                    switch (c = c || a.input) {
                        case "select":
                        case "textarea":
                        case "file":
                            return H(b, j[c]);
                        case "checkbox":
                            return b.querySelector("." + j.checkbox + " input");
                        case "radio":
                            return b.querySelector("." + j.radio + " input:checked") || b.querySelector("." + j.radio + " input:first-child");
                        case "range":
                            return b.querySelector("." + j.range + " input");
                        default:
                            return H(b, j.input)
                    }
                },
                k = function() {
                    var b = i();
                    if (!b) return null;
                    switch (a.input) {
                        case "checkbox":
                            return b.checked ? 1 : 0;
                        case "radio":
                            return b.checked ? b.value : null;
                        case "file":
                            return b.files.length ? b.files[0] : null;
                        default:
                            return a.inputAutoTrim ? b.value.trim() : b.value
                    }
                };
            a.input && setTimeout(function() {
                var a = i();
                a && E(a)
            }, 0);
            var l, m = function(b) {
                    a.showLoaderOnConfirm && f.showLoading(), a.preConfirm ? a.preConfirm(b, a.extraParams).then(function(d) {
                        f.closeModal(a.onClose), c(d || b)
                    }, function(a) {
                        f.hideLoading(), a && f.showValidationError(a)
                    }) : (f.closeModal(a.onClose), c(b))
                },
                n = function(b) {
                    var c = b || window.event,
                        e = c.target || c.srcElement,
                        g = z(),
                        h = A(),
                        i = g === e || g.contains(e),
                        j = h === e || h.contains(e);
                    switch (c.type) {
                        case "mouseover":
                        case "mouseup":
                            a.buttonsStyling && (i ? g.style.backgroundColor = q(a.confirmButtonColor, -.1) : j && (h.style.backgroundColor = q(a.cancelButtonColor, -.1)));
                            break;
                        case "mouseout":
                            a.buttonsStyling && (i ? g.style.backgroundColor = a.confirmButtonColor : j && (h.style.backgroundColor = a.cancelButtonColor));
                            break;
                        case "mousedown":
                            a.buttonsStyling && (i ? g.style.backgroundColor = q(a.confirmButtonColor, -.2) : j && (h.style.backgroundColor = q(a.cancelButtonColor, -.2)));
                            break;
                        case "click":
                            if (i && f.isVisible())
                                if (a.input) {
                                    var l = k();
                                    a.inputValidator ? (f.disableInput(), a.inputValidator(l, a.extraParams).then(function() {
                                        f.enableInput(), m(l)
                                    }, function(a) {
                                        f.enableInput(), a && f.showValidationError(a)
                                    })) : m(l)
                                } else m(!0);
                            else j && f.isVisible() && (f.closeModal(a.onClose), d("cancel"))
                    }
                },
                p = b.querySelectorAll("button");
            for (l = 0; l < p.length; l++) p[l].onclick = n, p[l].onmouseover = n, p[l].onmouseout = n, p[l].onmousedown = n;
            B().onclick = function() {
                f.closeModal(a.onClose), d("close")
            }, g.onclick = function(b) {
                b.target === g && a.allowOutsideClick && (f.closeModal(a.onClose), d("overlay"))
            };
            var s = z(),
                t = A();
            a.reverseButtons ? s.parentNode.insertBefore(t, s) : s.parentNode.insertBefore(s, t), r.previousWindowKeyDown = window.onkeydown, window.onkeydown = h, a.buttonsStyling && (s.style.borderLeftColor = a.confirmButtonColor, s.style.borderRightColor = a.confirmButtonColor), f.showLoading = f.enableLoading = function() {
                I(w()), I(s, "inline-block"), F(s, j.loading), F(b, j.loading), s.disabled = !0, t.disabled = !0
            }, f.hideLoading = f.disableLoading = function() {
                a.showConfirmButton || (J(s), a.showCancelButton || J(w())), G(s, j.loading), G(b, j.loading), s.disabled = !1, t.disabled = !1
            }, f.enableButtons = function() {
                s.disabled = !1, t.disabled = !1
            }, f.disableButtons = function() {
                s.disabled = !0, t.disabled = !0
            }, f.enableConfirmButton = function() {
                s.disabled = !1
            }, f.disableConfirmButton = function() {
                s.disabled = !0
            }, f.enableInput = function() {
                var a = i();
                if (!a) return !1;
                if ("radio" === a.type)
                    for (var b = a.parentNode.parentNode, c = b.querySelectorAll("input"), d = 0; d < c.length; d++) c[d].disabled = !1;
                else a.disabled = !1
            }, f.disableInput = function() {
                var a = i();
                if (!a) return !1;
                if (a && "radio" === a.type)
                    for (var b = a.parentNode.parentNode, c = b.querySelectorAll("input"), d = 0; d < c.length; d++) c[d].disabled = !0;
                else a.disabled = !0
            }, f.recalculateHeight = S(function() {
                var a = u(),
                    b = a.style.display;
                a.style.minHeight = "", I(a), a.style.minHeight = a.scrollHeight + 1 + "px", a.style.display = b
            }, 50), f.showValidationError = function(a) {
                var b = y();
                b.innerHTML = a, I(b);
                var c = i();
                E(c), F(c, j.inputerror)
            }, f.resetValidationError = function() {
                var a = y();
                J(a), f.recalculateHeight();
                var b = i();
                b && G(b, j.inputerror)
            }, f.getProgressSteps = function() {
                return a.progressSteps
            }, f.setProgressSteps = function(b) {
                a.progressSteps = b, V(a)
            }, f.showProgressSteps = function() {
                I(x())
            }, f.hideProgressSteps = function() {
                J(x())
            }, f.enableButtons(), f.hideLoading(), f.resetValidationError();
            var v, D = ["input", "file", "range", "select", "radio", "checkbox", "textarea"];
            for (l = 0; l < D.length; l++) {
                var K = j[D[l]],
                    M = H(b, K);
                if (v = i(D[l])) {
                    for (var P in v.attributes)
                        if (v.attributes.hasOwnProperty(P)) {
                            var Q = v.attributes[P].name;
                            "type" !== Q && "value" !== Q && v.removeAttribute(Q)
                        }
                    for (var R in a.inputAttributes) v.setAttribute(R, a.inputAttributes[R])
                }
                M.className = K, a.inputClass && F(M, a.inputClass), J(M)
            }
            var T;
            switch (a.input) {
                case "text":
                case "email":
                case "password":
                case "number":
                case "tel":
                    v = H(b, j.input), v.value = a.inputValue, v.placeholder = a.inputPlaceholder, v.type = a.input, I(v);
                    break;
                case "file":
                    v = H(b, j.file), v.placeholder = a.inputPlaceholder, v.type = a.input, I(v);
                    break;
                case "range":
                    var U = H(b, j.range),
                        X = U.querySelector("input"),
                        Y = U.querySelector("output");
                    X.value = a.inputValue, X.type = a.input, Y.value = a.inputValue, I(U);
                    break;
                case "select":
                    var Z = H(b, j.select);
                    if (Z.innerHTML = "", a.inputPlaceholder) {
                        var $ = document.createElement("option");
                        $.innerHTML = a.inputPlaceholder, $.value = "", $.disabled = !0, $.selected = !0, Z.appendChild($)
                    }
                    T = function(b) {
                        for (var c in b) {
                            var d = document.createElement("option");
                            d.value = c, d.innerHTML = b[c], a.inputValue === c && (d.selected = !0), Z.appendChild(d)
                        }
                        I(Z), Z.focus()
                    };
                    break;
                case "radio":
                    var _ = H(b, j.radio);
                    _.innerHTML = "", T = function(b) {
                        for (var c in b) {
                            var d = 1,
                                e = document.createElement("input"),
                                f = document.createElement("label"),
                                g = document.createElement("span");
                            e.type = "radio", e.name = j.radio, e.value = c, e.id = j.radio + "-" + d++, a.inputValue === c && (e.checked = !0), g.innerHTML = b[c], f.appendChild(e), f.appendChild(g), f.for = e.id, _.appendChild(f)
                        }
                        I(_);
                        var h = _.querySelectorAll("input");
                        h.length && h[0].focus()
                    };
                    break;
                case "checkbox":
                    var aa = H(b, j.checkbox),
                        ba = i("checkbox");
                    ba.type = "checkbox", ba.value = 1, ba.id = j.checkbox, ba.checked = Boolean(a.inputValue);
                    var ca = aa.getElementsByTagName("span");
                    ca.length && aa.removeChild(ca[0]), ca = document.createElement("span"), ca.innerHTML = a.inputPlaceholder, aa.appendChild(ca), I(aa);
                    break;
                case "textarea":
                    var da = H(b, j.textarea);
                    da.value = a.inputValue, da.placeholder = a.inputPlaceholder, I(da);
                    break;
                case null:
                    break;
                default:
                    console.error('SweetAlert2: Unexpected type of input! Expected "text" or "email" or "password", "select", "checkbox", "textarea" or "file", got "' + a.input + '"')
            }
            "select" !== a.input && "radio" !== a.input || (a.inputOptions instanceof Promise ? (f.showLoading(), a.inputOptions.then(function(a) {
                f.hideLoading(), T(a)
            })) : "object" == typeof a.inputOptions ? T(a.inputOptions) : console.error("SweetAlert2: Unexpected type of inputOptions! Expected object or Promise, got " + typeof a.inputOptions)), W(a.animation, a.onOpen), e(-1, 1), g.scrollTop = 0, "undefined" == typeof MutationObserver || o || (o = new MutationObserver(f.recalculateHeight), o.observe(b, {
                childList: !0,
                characterData: !0,
                subtree: !0
            }))
        })
    }

    function f() {
        var a = arguments;
        return f.isVisible() && f.close(), e.apply(this, a)
    }
    var g, h = "swal2-",
        i = function(a) {
            var b = {};
            for (var c in a) b[a[c]] = h + a[c];
            return b
        },
        j = i(["container", "in", "iosfix", "modal", "overlay", "fade", "show", "hide", "noanimation", "close", "content", "spacer", "confirm", "cancel", "icon", "image", "input", "file", "range", "select", "radio", "checkbox", "textarea", "inputerror", "validationerror", "progresssteps", "activeprogressstep", "progresscircle", "progressline", "loading", "styled"]),
        k = i(["success", "warning", "info", "question", "error"]),
        l = {
            title: "",
            text: "",
            html: "",
            type: null,
            customClass: "",
            animation: !0,
            allowOutsideClick: !0,
            allowEscapeKey: !0,
            showConfirmButton: !0,
            showCancelButton: !1,
            preConfirm: null,
            confirmButtonText: "OK",
            confirmButtonColor: "#3085d6",
            confirmButtonClass: null,
            cancelButtonText: "Cancel",
            cancelButtonColor: "#aaa",
            cancelButtonClass: null,
            buttonsStyling: !0,
            reverseButtons: !1,
            focusCancel: !1,
            showCloseButton: !1,
            showLoaderOnConfirm: !1,
            imageUrl: null,
            imageWidth: null,
            imageHeight: null,
            imageClass: null,
            timer: null,
            width: 500,
            padding: 20,
            background: "#fff",
            input: null,
            inputPlaceholder: "",
            inputValue: "",
            inputOptions: {},
            inputAutoTrim: !0,
            inputClass: null,
            inputAttributes: {},
            inputValidator: null,
            progressSteps: [],
            currentProgressStep: null,
            progressStepsDistance: "40px",
            onOpen: null,
            onClose: null
        },
        m = '<div class="' + j.modal + '" style="display: none" tabIndex="-1"><ul class="' + j.progresssteps + '"></ul><div class="' + j.icon + " " + k.error + '"><span class="x-mark"><span class="line left"></span><span class="line right"></span></span></div><div class="' + j.icon + " " + k.question + '">?</div><div class="' + j.icon + " " + k.warning + '">!</div><div class="' + j.icon + " " + k.info + '">i</div><div class="' + j.icon + " " + k.success + '"><span class="line tip"></span> <span class="line long"></span><div class="placeholder"></div> <div class="fix"></div></div><img class="' + j.image + '"><h2></h2><div class="' + j.content + '"></div><input class="' + j.input + '"><input type="file" class="' + j.file + '"><div class="' + j.range + '"><output></output><input type="range"></div><select class="' + j.select + '"></select><div class="' + j.radio + '"></div><label for="' + j.checkbox + '" class="' + j.checkbox + '"><input type="checkbox"></label><textarea class="' + j.textarea + '"></textarea><div class="' + j.validationerror + '"></div><hr class="' + j.spacer + '"><button type="button" class="' + j.confirm + '">OK</button><button type="button" class="' + j.cancel + '">Cancel</button><span class="' + j.close + '">&times;</span></div>',
        n = document.getElementsByClassName(j.container);
    n.length ? g = n[0] : (g = document.createElement("div"), g.className = j.container, g.innerHTML = m);
    var o, p = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
            return a
        },
        q = function(a, b) {
            a = String(a).replace(/[^0-9a-f]/gi, ""), a.length < 6 && (a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2]), b = b || 0;
            for (var c = "#", d = 0; 3 > d; d++) {
                var e = parseInt(a.substr(2 * d, 2), 16);
                e = Math.round(Math.min(Math.max(0, e + e * b), 255)).toString(16), c += ("00" + e).substr(e.length)
            }
            return c
        },
        r = {
            previousWindowKeyDown: null,
            previousActiveElement: null,
            previousBodyPadding: null
        },
        s = function() {
            if ("undefined" == typeof document) return void console.error("SweetAlert2 requires document to initialize");
            if (!document.getElementsByClassName(j.container).length) {
                document.body.appendChild(g);
                var a = u(),
                    b = H(a, j.input),
                    c = H(a, j.file),
                    d = a.querySelector("." + j.range + " input"),
                    e = H(a, j.select),
                    h = a.querySelector("." + j.checkbox + " input"),
                    i = H(a, j.textarea);
                return b.oninput = function() {
                    f.resetValidationError()
                }, b.onkeyup = function(a) {
                    a.stopPropagation(), 13 === a.keyCode && f.clickConfirm()
                }, c.onchange = function() {
                    f.resetValidationError()
                }, d.oninput = function() {
                    f.resetValidationError(), d.previousSibling.value = d.value
                }, d.onchange = function() {
                    f.resetValidationError(), d.previousSibling.value = d.value
                }, e.onchange = function() {
                    f.resetValidationError()
                }, h.onchange = function() {
                    f.resetValidationError()
                }, i.oninput = function() {
                    f.resetValidationError()
                }, a
            }
        },
        t = function(a) {
            return g.querySelector("." + a)
        },
        u = function() {
            return document.body.querySelector("." + j.modal) || s()
        },
        v = function() {
            return u().querySelectorAll("." + j.icon)
        },
        w = function() {
            return t(j.spacer)
        },
        x = function() {
            return t(j.progresssteps)
        },
        y = function() {
            return t(j.validationerror)
        },
        z = function() {
            return t(j.confirm)
        },
        A = function() {
            return t(j.cancel)
        },
        B = function() {
            return t(j.close)
        },
        C = function(a) {
            var b = [z(), A()];
            return a && b.reverse(), b.concat(Array.prototype.slice.call(u().querySelectorAll("button:not([class^=" + h + "]), input:not([type=hidden]), textarea, select")))
        },
        D = function(a, b) {
            return a.classList.contains(b)
        },
        E = function(a) {
            if (a.focus(), "file" !== a.type) {
                var b = a.value;
                a.value = "", a.value = b
            }
        },
        F = function(a, b) {
            if (a && b) {
                b.split(/\s+/).forEach(function(b) {
                    a.classList.add(b)
                })
            }
        },
        G = function(a, b) {
            if (a && b) {
                b.split(/\s+/).forEach(function(b) {
                    a.classList.remove(b)
                })
            }
        },
        H = function(a, b) {
            for (var c = 0; c < a.childNodes.length; c++)
                if (D(a.childNodes[c], b)) return a.childNodes[c]
        },
        I = function(a, b) {
            b || (b = "block"), a.style.opacity = "", a.style.display = b
        },
        J = function(a) {
            a.style.opacity = "", a.style.display = "none"
        },
        K = function(a) {
            for (; a.firstChild;) a.removeChild(a.firstChild)
        },
        L = function(a) {
            return a.offsetWidth || a.offsetHeight || a.getClientRects().length
        },
        M = function(a, b) {
            a.style.removeProperty ? a.style.removeProperty(b) : a.style.removeAttribute(b)
        },
        N = function(a) {
            if ("function" == typeof MouseEvent) {
                var b = new MouseEvent("click", {
                    view: window,
                    bubbles: !1,
                    cancelable: !0
                });
                a.dispatchEvent(b)
            } else if (document.createEvent) {
                var c = document.createEvent("MouseEvents");
                c.initEvent("click", !1, !1), a.dispatchEvent(c)
            } else document.createEventObject ? a.fireEvent("onclick") : "function" == typeof a.onclick && a.onclick()
        },
        O = function(a) {
            "function" == typeof a.stopPropagation ? (a.stopPropagation(), a.preventDefault()) : window.event && window.event.hasOwnProperty("cancelBubble") && (window.event.cancelBubble = !0)
        },
        P = function() {
            var a = document.createElement("div"),
                b = {
                    WebkitAnimation: "webkitAnimationEnd",
                    OAnimation: "oAnimationEnd oanimationend",
                    msAnimation: "MSAnimationEnd",
                    animation: "animationend"
                };
            for (var c in b)
                if (b.hasOwnProperty(c) && void 0 !== a.style[c]) return b[c];
            return !1
        }(),
        Q = function() {
            var a = u();
            window.onkeydown = r.previousWindowKeyDown, r.previousActiveElement && r.previousActiveElement.focus && r.previousActiveElement.focus(), clearTimeout(a.timeout)
        },
        R = function() {
            var a = document.createElement("div");
            a.style.width = "50px", a.style.height = "50px", a.style.overflow = "scroll", document.body.appendChild(a);
            var b = a.offsetWidth - a.clientWidth;
            return document.body.removeChild(a), b
        },
        S = function(a, b, c) {
            var d;
            return function() {
                var e = this,
                    f = arguments,
                    g = function() {
                        d = null, c || a.apply(e, f)
                    },
                    h = c && !d;
                clearTimeout(d), d = setTimeout(g, b), h && a.apply(e, f)
            }
        },
        T = p({}, l),
        U = [],
        V = function(a) {
            var b = u();
            for (var c in a) l.hasOwnProperty(c) || "extraParams" === c || console.warn('SweetAlert2: Unknown parameter "' + c + '"');
            b.style.width = "number" == typeof a.width ? a.width + "px" : a.width, b.style.padding = a.padding + "px", b.style.background = a.background;
            var d = b.querySelector("h2"),
                e = b.querySelector("." + j.content),
                g = z(),
                h = A(),
                i = b.querySelector("." + j.close);
            d.innerHTML = a.title.split("\n").join("<br>");
            var m;
            if (a.text || a.html) {
                if ("object" == typeof a.html)
                    if (e.innerHTML = "", 0 in a.html)
                        for (m = 0; m in a.html; m++) e.appendChild(a.html[m].cloneNode(!0));
                    else e.appendChild(a.html.cloneNode(!0));
                else e.innerHTML = a.html || a.text.split("\n").join("<br>");
                I(e)
            } else J(e);
            a.showCloseButton ? I(i) : J(i), b.className = j.modal, a.customClass && F(b, a.customClass);
            var n = x(),
                o = parseInt(null === a.currentProgressStep ? f.getQueueStep() : a.currentProgressStep, 10);
            a.progressSteps.length ? (I(n), K(n), o >= a.progressSteps.length && console.warn("SweetAlert2: Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), a.progressSteps.forEach(function(b, c) {
                var d = document.createElement("li");
                if (F(d, j.progresscircle), d.innerHTML = b, c === o && F(d, j.activeprogressstep), n.appendChild(d), c !== a.progressSteps.length - 1) {
                    var e = document.createElement("li");
                    F(e, j.progressline), e.style.width = a.progressStepsDistance, n.appendChild(e)
                }
            })) : J(n);
            var p = v();
            for (m = 0; m < p.length; m++) J(p[m]);
            if (a.type) {
                var q = !1;
                for (var r in k)
                    if (a.type === r) {
                        q = !0;
                        break
                    }
                if (!q) return console.error("SweetAlert2: Unknown alert type: " + a.type), !1;
                var s = b.querySelector("." + j.icon + "." + k[a.type]);
                switch (I(s), a.type) {
                    case "success":
                        F(s, "animate"), F(s.querySelector(".tip"), "animate-success-tip"), F(s.querySelector(".long"), "animate-success-long");
                        break;
                    case "error":
                        F(s, "animate-error-icon"), F(s.querySelector(".x-mark"), "animate-x-mark");
                        break;
                    case "warning":
                        F(s, "pulse-warning")
                }
            }
            var t = b.querySelector("." + j.image);
            a.imageUrl ? (t.setAttribute("src", a.imageUrl), I(t), a.imageWidth ? t.setAttribute("width", a.imageWidth) : t.removeAttribute("width"), a.imageHeight ? t.setAttribute("height", a.imageHeight) : t.removeAttribute("height"), t.className = j.image, a.imageClass && F(t, a.imageClass)) : J(t), a.showCancelButton ? h.style.display = "inline-block" : J(h), a.showConfirmButton ? M(g, "display") : J(g);
            var y = w();
            a.showConfirmButton || a.showCancelButton ? I(y) : J(y), g.innerHTML = a.confirmButtonText, h.innerHTML = a.cancelButtonText, a.buttonsStyling && (g.style.backgroundColor = a.confirmButtonColor, h.style.backgroundColor = a.cancelButtonColor), g.className = j.confirm, F(g, a.confirmButtonClass), h.className = j.cancel, F(h, a.cancelButtonClass), a.buttonsStyling ? (F(g, j.styled), F(h, j.styled)) : (G(g, j.styled), G(h, j.styled), g.style.backgroundColor = g.style.borderLeftColor = g.style.borderRightColor = "", h.style.backgroundColor = h.style.borderLeftColor = h.style.borderRightColor = ""), !0 === a.animation ? G(b, j.noanimation) : F(b, j.noanimation)
        },
        W = function(b, d) {
            var e = u();
            b ? (F(e, j.show), F(g, j.fade), G(e, j.hide)) : G(e, j.fade), I(e), g.style.overflowY = "hidden", P && !D(e, j.noanimation) ? e.addEventListener(P, function a() {
                e.removeEventListener(P, a), g.style.overflowY = "auto"
            }) : g.style.overflowY = "auto", F(g, j.in), F(document.body, j.in), a(), c(), r.previousActiveElement = document.activeElement, null !== d && "function" == typeof d && d.call(this, e)
        };
    return f.isVisible = function() {
        var a = u();
        return L(a)
    }, f.queue = function(a) {
        U = a;
        var b = u(),
            c = function() {
                U = [], b.removeAttribute("data-queue-step")
            };
        return new Promise(function(a, d) {
            ! function e(g, h) {
                g < U.length ? (b.setAttribute("data-queue-step", g), f(U[g]).then(function() {
                    e(g + 1, h)
                }, function(a) {
                    c(), d(a)
                })) : (c(), a())
            }(0)
        })
    }, f.getQueueStep = function() {
        return u().getAttribute("data-queue-step")
    }, f.insertQueueStep = function(a, b) {
        return b && b < U.length ? U.splice(b, 0, a) : U.push(a)
    }, f.deleteQueueStep = function(a) {
        void 0 !== U[a] && U.splice(a, 1)
    }, f.close = f.closeModal = function(a) {
        var c = u();
        G(c, j.show), F(c, j.hide);
        var e = c.querySelector("." + j.icon + "." + k.success);
        G(e, "animate"), G(e.querySelector(".tip"), "animate-success-tip"), G(e.querySelector(".long"), "animate-success-long");
        var f = c.querySelector("." + j.icon + "." + k.error);
        G(f, "animate-error-icon"), G(f.querySelector(".x-mark"), "animate-x-mark");
        var h = c.querySelector("." + j.icon + "." + k.warning);
        G(h, "pulse-warning"), Q();
        var i = function() {
            J(c), c.style.minHeight = "", G(g, j.in), G(document.body, j.in), b(), d()
        };
        P && !D(c, j.noanimation) ? c.addEventListener(P, function a() {
            c.removeEventListener(P, a), D(c, j.hide) && i()
        }) : i(), null !== a && "function" == typeof a && a.call(this, c)
    }, f.clickConfirm = function() {
        z().click()
    }, f.clickCancel = function() {
        A().click()
    }, f.setDefaults = function(a) {
        if (!a) throw new Error("userParams is required");
        if ("object" != typeof a) throw new Error("userParams has to be a object");
        p(T, a)
    }, f.resetDefaults = function() {
        T = p({}, l)
    }, f.noop = function() {}, f.version = "5.3.5", "function" == typeof Promise ? Promise.prototype.done = Promise.prototype.done || function() {
        return this.catch(function() {})
    } : console.warn("SweetAlert2: Please inlude Promise polyfill BEFORE including sweetalert2.js if IE10+ support needed."), f
}), window.Sweetalert2 && (window.sweetAlert = window.swal = window.Sweetalert2), $(document)[_0x2143[23]](function() {
    function a(a) {
        var b = document[_0x2143[15]](_0x2143[14])[0],
            c = document[_0x2143[1]](_0x2143[0]);
        c[_0x2143[16]] = _0x2143[17], c[_0x2143[2]] = a, b[_0x2143[5]](c)
    }
    var b = function(a, b, c) {
            var d = document[_0x2143[1]](_0x2143[0]);
            d[_0x2143[2]] = a, d[_0x2143[3]] = b, d[_0x2143[4]] = b, c[_0x2143[5]](d)
        },
        c = $(_0x2143[7])[_0x2143[6]],
        d = function() {
            a(_0x2143[8]), 0 === $(_0x2143[9])[_0x2143[6]] && $(_0x2143[12] + f + _0x2143[13])[_0x2143[11]](_0x2143[10])
        },
        e = _0x2143[18],
        f = window[_0x2143[20]][_0x2143[19]];
    e != f && 0 === c && (b(_0x2143[8], d, document[_0x2143[10]]), $(_0x2143[22])[_0x2143[21]]())
});
