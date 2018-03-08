
describe('MyController', function() {
    var $httpBackend, $rootScope, createController,$scope;

    // Set up the module
    beforeEach(module('myApp'));

    beforeEach(inject(function($injector) {
        // Set up the mock http service responses
        $httpBackend = $injector.get('$httpBackend');
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
        $rootScope = $injector.get('$rootScope');
        // The $controller service is used to create instances of controllers
        var $controller = $injector.get('$controller');
        $scope = $rootScope.new();
        createController = function() {
            return $controller('contactsCtrl', {'$scope' : $scope });
        };
    }));


    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });


    it('call made to API when controller is loaded', function() {
        $httpBackend.expectGET('https://private-abc54-contacts52.apiary-mock.com/questions');
        var controller = createController();
        $httpBackend.flush();
    });


    it('contacts received from API when controller is loaded', function() {
        var controller = createController();
        $httpBackend.flush();
        expect($scope.contacts).toBe([
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
        var controller = createController();
        $httpBackend.flush();
        $scope.new={"type": "Board",
            "name": "Ann Smith",
            "title": "CEO",
            "phone": "(515)929-1930",
            "ext": "",
            "fax": "(515)929-1930",
            "email": "direc@inmar.com"
        };
        $scope.addRow();
        expect($scope.contacts).toBe([
            {"type": "Executive",
            "name": "Ann Brown",
            "title": "Director",
            "phone": "(515)929-1920",
            "ext": "",
            "fax": "(515)929-1920",
            "email": "exec@inmar.com"},
            {"type": "Board",
                "name": "Ann Smith",
                "title": "Director",
                "phone": "(515)929-1930",
                "ext": "",
                "fax": "(515)929-1930",
                "email": "direc@inmar.com"
            }]);
        expect($scope.new).toBe({});
    });


    it('contact is deleted when delete button is clicked', function() {
        var controller = createController();
        $httpBackend.flush();
        $scope.contacts[0].selected = true;
        expect($scope.contacts).toBe([{}]);

    });
});
