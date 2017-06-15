(function (angular) {

    'use strict';

    angular.module('ngResumeApp')
        .service('staticDataService', ['$http',
            function ($http) {

                var strings = {
                    title: "An Initial Understanding of Task Interdependence in Software Development Teams: A Case Study",
                    subtitle: "This research investigate the perception of individuals in a software development team about task interdependence and their impacts on teamwork dynamics, as well as to propose an initial understanding about the phenomenon.",
                    authors : [{
                        name: "George Marsicano Corrêa",
                        resume: "Doctoral Student at Cin - UFPE and Professor at UnB - ",
                        address: "Brasília, DF - Brazil",
                        email: "georgemarsicano@unb.br",
                        profileImgUrl : "images/george.jpg",
                        personalUrl : "http://lattes.cnpq.br/2317804591146328"
                    },{
                        name: "Victor Laerte de Oliveira",
                        resume: "Master's Student in Computer Science at CIn - UFPE - ",
                        address: "Recife, PE - Brazil",
                        email: "vlo2@cin.ufpe.br",
                        profileImgUrl : "images/profile.jpg",
                        personalUrl : "http://www.victorlaerte.com"
                    },{
                        name: "Leila Maria Rodrigues de Sousa Mariz",
                        resume: "Doctoral Student at Cin - UFPE - ",
                        address: "Recife, PE - Brazil",
                        email: "lmrsm@cin.ufpe.br ",
                        profileImgUrl : "images/leila.png",
                        personalUrl : "http://lattes.cnpq.br/4301517875688614"
                    },{
                        name: "Fabio Q. B. da Silva",
                        resume: "Associate Professor at UFPE - ",
                        address: "Recife, PE - Brazil",
                        email: "fabio@cin.ufpe.br",
                        profileImgUrl : "images/fabio.png",
                        personalUrl : "http://www.cin.ufpe.br/~fabio/Fabio_Silvas_Website/About_Me.html"
                    }],
                    research: {
                        name: "An Initial Understanding of Task Interdependence in Software Development Teams: A Case Study",
                        conference_jornal: "Conference or Jornal",
                        period: "This article has not been published yet",
                        abstract: "Context: Task interdependence is one of the social characteristics of work design, which is related to some authors to the level of interaction between team members and their results. In recent years, more research has been conducted aiming to investigate the interactions between people and teamwork in Software Engineering (SE). However, few initiatives are associated with work design, especially related to task interdependence in SE. Goal: To investigate the perception of the individuals in a software development team about task interdependence and their impacts on teamwork dynamics. Method: We investigated a development team from a Brazilian software development company. For data collection, interviews were conducted and qualitative coding techniques were used to analyze and synthesize our findings. In addition, we have the support of an analytical framework built at the beginning of the research. Results: Task interdependence increases the need of information sharing and synchronization of tasks, it also favors the creation of an environment of redundancy of knowledge and mutual help, and it is moderated by interpersonal relationships, sense of belonging, and individual competencies and skills, favoring the generation of better results in a software development team. Conclusion: Task interdependence is an important practice and an essential and impacting factor in the teamwork dynamics, which enhances the performance of software development team.",
                        keywords: "task interdependence, work design, software development teams, human factors, qualitative research",
                        citation: ""
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