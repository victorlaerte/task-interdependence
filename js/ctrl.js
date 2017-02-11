(function(angular) {

    'use strict';

	var app = angular.module('ngResumeApp', []);

	app.controller('ResumeAppController',
	    ['$scope', 'staticDataService', function($scope, staticDataService) {

	    $scope.getData = function(key) {
	    	
	    	var data = staticDataService.get(key);
	    	return data;
	    };

		$scope.currentSection = 'home';
	    $scope.acknowledgments = $scope.getData('acknowledgments');
		$scope.authors = $scope.getData('authors');
	}]);

	app.directive('ngResumeRow', ['staticDataService', function(staticDataService) {

	return {
		restrict: 'E',
		scope: {
			item: '='
		}, //TemplateURL CAN'T BE USED, NOT ALLOWED ON STATIC SITES! ONLY FOR HTTP SERVERS, you can use http-server nodejs
		template: '<div class="row item">' +
					'<div class="twelve columns">' +
						'<h3>{{item.name}}</h3>' +
							'<p class="info">' +
								'{{item.conference_jornal}}' +
								'<span>&bull;</span> <em class="date">{{item.period}}</em>' +
							'</p>' +
							'<p>{{item.abstract}}</p>' +
							'<p><b>Keywords: {{item.keywords}}</b></p>' +
							'<p><b>Citation: {{item.citation}}</b></p>' +
							'<a target="_blank" href="#" class="button disabled"><i class="fa fa-download"></i> Read full article</a>' +
					 '</div>' +
				   '</div>'
		
	 }

	}]);

})(window.angular);