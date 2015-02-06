'use strict';

describe('Service: RegistryService', function () {
    var registryService, httpBackend;

    beforeEach(function() {
        module('psfApp');
        module('restangular');
    });

    beforeEach(inject(function(RegistryService, $httpBackend) {
        registryService = RegistryService;
        httpBackend = $httpBackend;
    }));

    ///////////// TESTS //////////////

    it('Should be defined', function() {
        expect(registryService).not.toBeNull();
    });

    it("should contain a getRegistries() function", function () {
        expect(registryService.getRegistries).not.toBeNull();
    });

    it("should respond with array of registries from the getRegistries()", function() {
        var arrayRegistries = [
            {
                "id" : 1,
                "name" : "Registery 1",
                "type" : "Docker",
                "host" : "localhost",
                "port" : "9000",
                "protocole" : "http"
            },
            {
                "id" : 2,
                "name" : "Registery 2",
                "type" : "Docker",
                "host" : "localhost",
                "port" : "9000",
                "protocole" : "https"
            }
        ];

        httpBackend.expectGET("http://localhost:8080/registries").respond(arrayRegistries);
        registryService.getRegistries().then(function(data) {
            expect(data.length).toBe(2);
            expect(data[0].name).toBe(arrayRegistries[0].name);
            expect(data[1].name).toBe(arrayRegistries[1].name);
        });
        httpBackend.flush();
    });

});

