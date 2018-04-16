(function (angular) {

    'use strict';

    angular.module('ngResumeApp')
        .service('staticDataService', ['$http',
            function ($http) {

                var strings = {
                    title: "An Initial Understanding of Task Interdependence in Software Engineering: A Case Study",
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
                        name: "An Initial Understanding of Task Interdependence in Software Engineering: A Case Study",
                        conference_jornal: "CHASE'18: CHASE'18:IEEE/ACM 11th International Workshop on Cooperative and Human Aspects of Software",
                        period: "May 27, 2018, Gothenburg, Sweden",
                        abstract: "Context: Task interdependence is one of the social characteristics of work design, which has been related by some authors to the level of interaction between team members and their results. In recent years, more research aiming to investigate the interactions between people and teamwork in Software Engineering (SE) has been conducted. However, few of these initiatives have been associated with work design, especially as related to task interdependence in SE. Goal: To investigate the perception of the individuals in a software development team concerning task interdependence and their individual impact on teamwork dynamics. Method: We investigated a development team from a Brazilian software development company. For data collection, interviews were conducted and qualitative coding techniques were used to analyze and synthesize our findings. In addition, we have the support of an analytical framework built at the commencement of our research. Results: Task interdependence increases the need for information sharing and synchronization of tasks, it also favors the creation of an environment conducive to redundancy of knowledge and mutual help, and it is moderated by interpersonal relationships, a sense of belonging, and individual competencies and skills, favoring the generation of better results in software development teams. Conclusion: Task interdependence is an important practice and an essential and impacting factor in teamwork dynamics which can enhance the performance of software development teams.",
                        keywords: "task interdependence, work design, software engineering, human factors, qualitative research",
                        citation: "George Marsicano, Victor L. de Oliveira, Leila M. R. de S. Mariz, and Fabio Q. B. da Silva. 2018. An Initial Understanding of Task Interdependence in Software Engineering: A Case Study. In CHASE’18: CHASE’18:IEEE/ACM 11th International Workshop on Cooperative and Human Aspects of Software , May 27, 2018, Gothenburg, Sweden. ACM, New York, NY, USA, 8 pages. https://doi.org/10.1145/3195836.3195851"
                    },
                    acknowledgments: [{
                        acknowledgment: "Fabio Q. B. da Silva holds a research grant from CNPq 314523/2009-0. We thank Leopoldo Teixeira for all support in this research. We also thank Liferay Inc. for financial support for participating in ICSE 2018",
                    }],
                }

                this.get = function (key) {

                    return strings[key];
                };

            }
        ]);
})(window.angular);