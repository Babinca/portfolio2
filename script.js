/* =========================================================
   GWENAELLE CONSULTING
   PORTFOLIO
   JAVASCRIPT PRINCIPAL
========================================================= */


/* =========================================================
   CONFIGURATION
========================================================= */

/*
   ⚠️ TU N'AS BESOIN DE MODIFIER QUE CETTE PARTIE
   POUR L'EMAIL ET LES INTITULÉS ANIMÉS.
*/

const CONFIGURATION = {

    /* Email qui recevra les messages du formulaire */
    emailContact: "babincaboissy@gmail.com",


    /* Intitulés affichés avec l'effet machine à écrire */
    titresAnimes: [

        "Social Media Manager",

        "Community Manager",

        "Créatrice de contenus",

        "Professionnelle du digital"

    ]

};


/* =========================================================
   MACHINE À ÉCRIRE
========================================================= */

const typingText =
    document.getElementById("typingText");


let titreIndex = 0;

let caractereIndex = 0;

let suppression = false;


function machineAEcrire() {


    const titreActuel =
        CONFIGURATION.titresAnimes[titreIndex];


    if (!suppression) {


        typingText.textContent =
            titreActuel.substring(
                0,
                caractereIndex + 1
            );


        caractereIndex++;


        if (
            caractereIndex >=
            titreActuel.length
        ) {


            suppression = true;


            setTimeout(
                machineAEcrire,
                2500
            );


            return;

        }


        setTimeout(
            machineAEcrire,
            80
        );


    } else {


        typingText.textContent =
            titreActuel.substring(
                0,
                caractereIndex - 1
            );


        caractereIndex--;


        if (caractereIndex <= 0) {


            suppression = false;


            titreIndex++;


            if (
                titreIndex >=
                CONFIGURATION.titresAnimes.length
            ) {

                titreIndex = 0;

            }


            setTimeout(
                machineAEcrire,
                500
            );


            return;

        }


        setTimeout(
            machineAEcrire,
            45
        );

    }

}


machineAEcrire();



/* =========================================================
   HEADER STICKY
========================================================= */

const header =
    document.querySelector(".header");


function gererHeader() {


    if (
        window.scrollY > 50
    ) {

        header.classList.add(
            "scrolled"
        );

    } else {

        header.classList.remove(
            "scrolled"
        );

    }

}


window.addEventListener(
    "scroll",
    gererHeader
);



/* =========================================================
   MENU MOBILE
========================================================= */

const menuToggle =
    document.getElementById(
        "menuToggle"
    );


const navigation =
    document.getElementById(
        "navigation"
    );


const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


menuToggle.addEventListener(
    "click",
    () => {


        const ouvert =
            navigation.classList.toggle(
                "open"
            );


        menuToggle.setAttribute(
            "aria-expanded",
            ouvert
        );

    }
);



/*
   Fermer automatiquement le menu
   après sélection d'une rubrique.
*/

navLinks.forEach(
    link => {


        link.addEventListener(
            "click",
            () => {


                navigation.classList.remove(
                    "open"
                );


                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    }
);



/* =========================================================
   ANIMATION D'APPARITION AU SCROLL
========================================================= */

const elementsReveal =
    document.querySelectorAll(
        ".reveal"
    );


const observerReveal =
    new IntersectionObserver(

        (entries, observer) => {


            entries.forEach(
                entry => {


                    if (
                        entry.isIntersecting
                    ) {


                        entry.target.classList.add(
                            "visible"
                        );


                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {
            threshold: 0.15
        }

    );


elementsReveal.forEach(
    element => {

        observerReveal.observe(
            element
        );

    }
);



/* =========================================================
   NAVIGATION ACTIVE
========================================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const observerSections =
    new IntersectionObserver(

        entries => {


            entries.forEach(
                entry => {


                    if (
                        entry.isIntersecting
                    ) {


                        const id =
                            entry.target.getAttribute(
                                "id"
                            );


                        navLinks.forEach(
                            link => {


                                link.classList.remove(
                                    "active"
                                );


                                if (
                                    link.getAttribute(
                                        "href"
                                    ) ===
                                    `#${id}`
                                ) {


                                    link.classList.add(
                                        "active"
                                    );

                                }

                            }
                        );

                    }

                }
            );

        },

        {
            rootMargin:
                "-30% 0px -60% 0px"
        }

    );


sections.forEach(
    section => {

        observerSections.observe(
            section
        );

    }
);



/* =========================================================
   FORMULAIRE DE CONTACT
========================================================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );


contactForm.addEventListener(
    "submit",
    function(event) {


        /*
           Empêche le formulaire
           d'envoyer les données vers
           un serveur.
        */

        event.preventDefault();


        /*
           Récupération des champs.
        */

        const nom =
            document
                .getElementById("name")
                .value
                .trim();


        const email =
            document
                .getElementById("email")
                .value
                .trim();


        const sujet =
            document
                .getElementById("subject")
                .value
                .trim();


        const message =
            document
                .getElementById("message")
                .value
                .trim();



        /*
           Construction du message.
        */

        const corpsMessage =

`Bonjour Gwenaëlle,

Vous avez reçu un nouveau message depuis votre portfolio.

Nom : ${nom}

Email : ${email}

Sujet : ${sujet}

Message :

${message}


Cordialement,

${nom}`;



        /*
           Création du lien mailto.
        */

        const mailtoLink =

            `mailto:${CONFIGURATION.emailContact}` +

            `?subject=${encodeURIComponent(sujet)}` +

            `&body=${encodeURIComponent(corpsMessage)}`;



        /*
           Ouverture du logiciel
           de messagerie.
        */

        window.location.href =
            mailtoLink;

    }
);



/* =========================================================
   ANNÉE AUTOMATIQUE
========================================================= */

const currentYear =
    document.getElementById(
        "currentYear"
    );


currentYear.textContent =
    new Date().getFullYear();