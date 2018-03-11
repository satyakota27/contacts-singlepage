var app = angular.module('myApp', []);

app.controller('contactsCtrl', function($scope, $http) {
    $http({
        method : "GET",
        url : "https://private-abc54-contacts52.apiary-mock.com/questions"
    }).then(function mySuccess(response) {
        $scope.contacts = response.data;
    }, function myError(response) {
        $scope.contacts = response.statusText;
    });
    //$scope.new ={};
    $scope.addRow = function(){
        var newContactId = $scope.contacts.length + 1;
        $scope.contacts.push({
            id: newContactId, type: $scope.new.type, name: $scope.new.name, title: $scope.new.title,
            phone: $scope.new.phone, ext: $scope.new.ext, fax: $scope.new.fax, email: $scope.new.email
        });
        $scope.new = {};
    };

    $scope.deleteRows = function() {
        $scope.contacts = ($scope.contacts).filter(function(x) {
            return (!x.selected === true);
        });
    };
});