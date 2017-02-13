(function (angular) {

    'use strict';

    angular.module('ngResumeApp')
        .service('staticDataService', ['$http',
            function ($http) {

                var strings = {
                    title: "Building an Initial Theory of Task Interdependence in Software Development Teams: A Case Study",
                    subtitle: "This research investigate the perception of individuals in a software development team about task interdependence and their impacts on teamwork dynamics, as well as to propose an initial theory that explains the phenomenon.",
                    authors : [{
                        name: "George Marsicano Corrêa",
                        resume: "Doctoral Student at Cin - UFPE and Professor at UnB - ",
                        address: "Brasília, DF - Brazil",
                        email: "gmc3@cin.ufpe.br",
                        profileImgUrl : "images/george.jpg",
                        personalUrl : "http://www.cin.ufpe.br/~gmc3/"
                    },{
                        name: "Victor Laerte de Oliveira",
                        resume: "MSc candidate in Computer Science at CIn - UFPE - ",
                        address: "Recife, PE - Brazil",
                        email: "vlo2@cin.ufpe.br",
                        profileImgUrl : "images/profile.jpg",
                        personalUrl : "http://www.victorlaerte.com"
                    },{
                        name: "",
                        resume: "",
                        address: "",
                        email: "",
                        profileImgUrl : "",
                        personalUrl : ""
                    },{
                        name: "Fabio Q. B. da Silva",
                        resume: "Associate Professor at UFPE - ",
                        address: "Recife, PE - Brazil",
                        email: "fabio@cin.ufpe.br",
                        profileImgUrl : "images/fabio.png",
                        personalUrl : "http://www.cin.ufpe.br/~fabio/Fabio_Silvas_Website/About_Me.html"
                    }],
                    research: {
                        name: "Building an Initial Theory of Task Interdependence in Software Development Teams: A Case Study",
                        conference_jornal: "Conference or Jornal here",
                        period: "This article has not been published yet",
                        abstract: "Context: Task interdependence is one of the social characteristics of work design, which is related to some authors to the level of interaction between team members and their results. In software engineering, work is strongly team-based. In recent years, more research has been conducted with the aim of investigating the interactions between people and teamwork in software engineering. However, few initiatives are associated with work design, especially related to task interdependence in software engineering. Goal: Investigate the perception of the individuals in a software development team about task interdependence and their impacts on teamwork dynamics, as well as to propose an initial theory that explains the phenomenon. Method: We investigated a team of implementers from a Brazilian software development company. For data collection, four interviews were conducted. Qualitative coding techniques were used to analyze and synthesize our findings. In addition, we have the support of an analytical framework built at the beginning of the research. At the end, we checked our results with the literature. Results: Task interdependence increases the need for information sharing and synchronization of tasks, favors the creation of an environment of redundancy of knowledge and mutual help, and is moderated by interpersonal relationship, sense of belonging, and individual skills and abilities, favoring the generation of better results in a software development teams. Conclusion: Task interdependence is an important practice and an essential and impacting factor in the teamwork dynamics, which enhances the performance of the software development team. However, it is necessary that managers and professionals remain attentive to their antecedents and moderators, so that it is possible to boost the results of the teams.",
                        keywords: "task interdependence, work design, software development teams, human factors, qualitative research",
                        citation: "PUT CITATION HERE"
                    },
                    acknowledgments: [{
                        acknowledgment: "Fabio Q. B. da Silva holds a research grant from CNPq #314523/2009-0.",
                    }],
                }

                this.get = function (key) {

                    return strings[key];
                };

            }
        ]);
})(window.angular);