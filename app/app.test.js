describe('contactsCtrl', function() {
    var $httpBackend, $rootScope, createController, $scope, $controller;

    // Set up the module
    beforeEach(module('myApp'));

    beforeEach(inject(function(_$httpBackend_, _$http_, _$rootScope_, _$controller_) {
        $httpBackend = _$httpBackend_;
        $http = _$http_;
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        // Set up the mock http service responses
        // backend definition common for all tests
        $httpBackend.when('GET', 'https://private-abc54-contacts52.apiary-mock.com/questions')
            .respond([
                {
                    "id": 1,
                    "type": "Executive",
                    "name": "Ann Brown",
                    "title": "CEO",
                    "phone": "(515)929-1920",
                    "ext": "",
                    "fax": "(515)929-1920",
                    "email": "exec@inmar.com"
                }
            ]);

        // Get hold of a scope (i.e. the root scope)

       $scope = $rootScope.$new();
        var controller = $controller('contactsCtrl', { $scope: $scope });
      //      return $controller('contactsCtrl', {'$scope' : $scope });

    }));


    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });


    it('call made to API when controller is loaded', function() {

        $httpBackend.expectGET('https://private-abc54-contacts52.apiary-mock.com/questions');
        $httpBackend.flush();
    });


    it('contacts received from API when controller is loaded', function() {
        $httpBackend.flush();
        expect($scope.contacts).toEqual([
            {
                "id": 1,
                "type": "Executive",
                "name": "Ann Brown",
                "title": "CEO",
                "phone": "(515)929-1920",
                "ext": "",
                "fax": "(515)929-1920",
                "email": "exec@inmar.com"
            }
        ]);
    });


    it('contact is added when add button is clicked', function() {
        $httpBackend.flush();
        $scope.new={
            "id": 2,
            "type": "Board",
            "name": "Ann Smith",
            "title": "Director",
            "phone": "(515)929-1930",
            "ext": "",
            "fax": "(515)929-1930",
            "email": "direc@inmar.com"
        };
        $scope.addRow();
        expect($scope.contacts).toEqual([
            {
                "id": 1,
                "type": "Executive",
                "name": "Ann Brown",
                "title": "CEO",
                "phone": "(515)929-1920",
                "ext": "",
                "fax": "(515)929-1920",
                "email": "exec@inmar.com"
            },
            {
                "id": 2,
                "type": "Board",
                "name": "Ann Smith",
                "title": "Director",
                "phone": "(515)929-1930",
                "ext": "",
                "fax": "(515)929-1930",
                "email": "direc@inmar.com"
            }
            ]);
        expect($scope.new)
    });


    it('contact is deleted when delete button is clicked', function() {
        $httpBackend.flush();
        $scope.contacts[0].selected = true;
        $scope.deleteRows();
        expect($scope.contacts).toEqual([]);

    });
});