gsap.registerPlugin(ScrollTrigger)




let bandeProjetTxtWidth = document.getElementById("bande_projet").getBoundingClientRect().width;
console.log(bandeProjetTxtWidth * 2);

gsap.fromTo("#bande_projet", {
  x: 0
}, {
  x: -(bandeProjetTxtWidth * 2),
  duration: ((bandeProjetTxtWidth * 2) / 143),
  ease: "none",
  repeat: -1
});

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



let bandeAproposContactTxtWidth = document.getElementById("bande_apropos_contact").getBoundingClientRect().width;
console.log(bandeAproposContactTxtWidth * 2);

gsap.fromTo("#bande_apropos_contact", {
  x: 0
}, {
  x: -(bandeAproposContactTxtWidth * 2),
  duration: ((bandeAproposContactTxtWidth * 2) / 143),
  ease: "none",
  repeat: -1
});

let bandeCompetencesTxtWidth = document.getElementById("bande_competences").getBoundingClientRect().width;
console.log(bandeCompetencesTxtWidth * 2);

gsap.fromTo("#bande_competences", {
  x: 0
}, {
  x: -(bandeCompetencesTxtWidth * 2),
  duration: ((bandeCompetencesTxtWidth * 2) / 143),
  ease: "none",
  repeat: -1
});


const appli = Vue.createApp({

  data() {
    return {
      tableau_projets: []

    };
  },
  mounted() {



    fetch("./projets.json")
      .then(data => data.json())
      .then(projet => {
        this.tableau_projets = projet;
        console.log(this.tableau_projets)

      });


  },
  methods: {


    openProject(lien) {
      window.location.href = lien;
    }

  }
});



const vm = appli.mount('#section_projets');