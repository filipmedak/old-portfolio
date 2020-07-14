let arrLang = {
    "en": {
        /* Navigation text */
        "PROJECTS" : "Projects",
        "ABOUT" : "About",
        "CONTACT" : "Contact",
        "LANG1" : "English",
        "LANG2" : "Croatian",

        /* Landing text */
        // "LANDING1" : "I'm Filip.",
        // "LANDING2" : "a web designer",

        /* About text */
        "ABOUT1" : "Hi. I'm Filip. ",
        "ABOUT2" : "{ web developer / designer }",
        "ABOUT3" : "based in Zagreb, Croatia.",

        /* Projects text */
        "PROJECTS_TEXT" : "Projects.",
        "LIVE_BUTTON" : "Live",
        "CODE_BUTTON" : "Code",
        "PROJECT1_NAME" : "Real Estate",
        "PROJECT1_DESCRIPTION" : "Real Esate project created using HTML, CSS, PHP, mySQL and JS.",
        "PROJECT2_NAME" : "Shift",
        "PROJECT2_DESCRIPTION" : "Castlevania themed 2D platformer created in Construct2 for PC.",
        "PROJECT3_NAME" : "City Cafe",
        "PROJECT3_DESCRIPTION" : "Promotional video created for social media for City Cafe.",
        "PROJECT4_NAME" : "3D Velicoraptor",
        "PROJECT4_DESCRIPTION" : "3D Velociraptor model created using Zbrush and Keyshot.",

        /* About text */
        "ABOUT_H2" : "What I can do.",
        "ABOUT_P1" : "Create beautiful web sites using",
        "ABOUT_P2" : "HTML, CSS & JavaScript.",
        "ABOUT_P3" : "I'm also familiar with",
        "ABOUT_P4" : "React, mySQL, PHP, SCSS & Bootstrap.",
        "ABOUT_CV" : "MY CV",
        "CV_LANG1" : "ENG",
        "CV_LANG2" : "CRO",

        /* Contact text */
        "CONTACT_H2" : "Let's Work Together.",
        "CONTACT_A" : "Get in touch.",

        /* FOOTER */
        "FOOTER_P" : "© 2020 Filip Medak. All rights reserved."
    },
    "cro": {
        /* Navigation text */
        "PROJECTS" : "Projekti",
        "ABOUT" : "O meni",
        "CONTACT" : "Kontakt",
        "LANG1" : "Engleski",
        "LANG2" : "Hrvatski",

        /* Landing text */
        // "LANDING1" : "Ja sam Filip.",
        // "LANDING2" : "web dizajner",
        
        /* About text */
        "ABOUT1" : "Bok. Ja sam Filip.",
        "ABOUT2" : "{ web developer / dizajner }",
        "ABOUT3" : "baziran u Zagrebu, Hrvatska.",
        
        /* Projects text */
        "PROJECTS_TEXT" : "Projekti.",
        "LIVE_BUTTON" : "Uživo",
        "CODE_BUTTON" : "Kod",
        "PROJECT1_NAME" : "Real Estate",
        "PROJECT1_DESCRIPTION" : "Oglasnik za nekretnine stvoren koristeći HTML, CSS, PHP, mySQL i JS.",
        "PROJECT2_NAME" : "Shift",
        "PROJECT2_DESCRIPTION" : "2D platformer na temu Castlevanie kreiran u Constructu 2 za PC.",
        "PROJECT3_NAME" : "City Cafe",
        "PROJECT3_DESCRIPTION" : "Promotivni video za društvene mreže za City Cafe.",
        "PROJECT4_NAME" : "Velicoraptor",
        "PROJECT4_DESCRIPTION" : "3D model Velociraptora kreiran koristeći Zbrush i KeyShot.",
        
        /* About text */
        "ABOUT_H2" : "Što mogu?",
        "ABOUT_P1" : "Kreirati privlačne web stranice i aplikacije koristeći",
        "ABOUT_P2" : "HTML, CSS i JavaScript.",
        "ABOUT_P3" : "Također sam upoznat sa",
        "ABOUT_P4" : "React-om, mySQL-om, PHP-om, SCSS-om i Bootstrap-om.",
        "ABOUT_CV" : "ŽIVOTOPIS",
        "CV_LANG1" : "ENG",
        "CV_LANG2" : "HRV",
        
        /* Contact text */
        "CONTACT_H2" : "Idemo raditi zajedno.",
        "CONTACT_A" : "Kontaktiraj me.",
        
        /* FOOTER */
        "FOOTER_P" : "© 2020 Filip Medak. Sva prava pridržana."
    }
  };
  
  $(document).ready(function() {
    // The default language is English
    let lang = "en";
    $(".lang").each(function(index, element) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  });
  
  // get/set the selected language
  $(".translate").click(function() {
    let lang = $(this).attr("id");
  
    $(".lang").each(function(index, element) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  });