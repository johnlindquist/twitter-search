angular.module('Twitter', ['ngResource'], function($provide){
    $provide.factory('twitterResource', function($resource){
        return $resource('http://search.twitter.com/:action',
            {action:'search.json', q:'angularjs', callback:'JSON_CALLBACK'},
            {get:{method:'JSONP'}});
    })
});

function TwitterCtrl($scope, twitterResource) {
    $scope.doSearch = function () {
        $scope.twitterResult = twitterResource.get({q:$scope.searchTerm});
    };
}

