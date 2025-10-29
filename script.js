// Initialisation de ScrollTrigger

gsap.registerPlugin(ScrollTrigger)




// Animation des bandes projets après l'injection HTML
document.querySelectorAll('.bande_projet').forEach(bande => {
    const width = bande.getBoundingClientRect().width;
    gsap.fromTo(bande,
        { x: 0 },
        { x: -width * 2, duration: (width * 2) / 143, ease: "none", repeat: -1 }
    );
});

// Animation pour bande_apropos_contact 
document.querySelectorAll('.bande_apropos_contact').forEach(bande => {
    const width = bande.getBoundingClientRect().width;
    gsap.fromTo(bande,
        { x: 0 },
        { x: -width * 2, duration: (width * 2) / 143, ease: "none", repeat: -1 });
});

// Animation pour bande_competences
document.querySelectorAll('.bande_competences').forEach(bande => {
    const width = bande.getBoundingClientRect().width;
    gsap.fromTo(bande,
        { x: 0 },
        { x: -width * 2, duration: (width * 2) / 143, ease: "none", repeat: -1 });
});




// Animation de l'opacité de la section projets avec un ScrollTrigger

gsap.from("#section_projets", {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#section_projets",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
    }
});




// Sélection des compétences avec querySelectorAll

let competences = document.querySelectorAll(".container_competence");

// Anmimation de hover des compétences background et texte changent de couleur

competences.forEach(function (competence, index) {

    const animation = gsap
        .timeline({ paused: true })
        .to(competence.querySelector(".competence"), {
            color: "#1E1E1E"
        })
        .to(competence, { backgroundColor: "#B783A9" }, 0);

    competence.addEventListener("mouseenter", () => animation.play());
    competence.addEventListener("mouseleave", () => animation.reverse());

})


// Création app vue et fetch projets.JSON pour pouvoir les mettres dans la section projets

const appli = Vue.createApp({

    data() {
        return {
            tableau_projets: []
        };
    },
    mounted() {

        // ici on vien chercher les projets dans le JSON et les mettre dans le tableau_projets
        fetch("./projets.json")
            .then(data => data.json())
            .then(projet => {
                this.tableau_projets = projet;
                console.log(this.tableau_projets)
            });

    }
});

// ici on montre l'app vue dans la section projets

const vm = appli.mount('#section_projets');






