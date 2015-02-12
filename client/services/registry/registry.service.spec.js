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

    it("should contain a getRegistry() function", function () {
        expect(registryService.getRegistry).not.toBeNull();
    });

    it("should contain a createRegistry() function", function () {
        expect(registryService.createRegistry).not.toBeNull();
    });

    it("should contain a setRegistry() function", function () {
        expect(registryService.setRegistry).not.toBeNull();
    });


    it("should respond with an registry from the getRegistry()", function() {
        var id = 1;

        var registry = {
            "id" : 1,
            "name" : "Registery 1",
            "type" : "Docker",
            "host" : "localhost",
            "port" : "9000",
            "protocole" : "http"
        };

        httpBackend.expectGET("http://localhost:8080/registries/1").respond(registry);
        registryService.getRegistry(id).then(function(data) {
            expect(data.name).toBe(registry.name);
            expect(data.type).toBe(registry.type);
        });
        httpBackend.flush();
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


    it("should respond with the status CREATED for createRegistry()", function() {
        var registry =
        {
            "name" : "Registry 1",
            "host" : "localhost",
            "port" : "9000",
            "protocol" : "http"
        };

        var responseExpected = {
            "name" : "Registry 1",
            "host" : "localhost",
            "port" : "9000",
            "protocol" : "http",
            "status" : 201
        };

        httpBackend.expectPOST("http://localhost:8080/registries", registry).respond(responseExpected);
        registryService.createRegistry(registry).then(function(data) {
            expect(data.status).toBe(responseExpected.status);
        });
        httpBackend.flush();
    });

    it("should respond with the status OK for setRegistry()", function() {
        var registry =
        {
            "name" : "Registry 1",
            "host" : "localhost",
            "port" : "9000",
            "protocol" : "http"
        };

        var responseExpected = {
            "status" : 200
        };

        httpBackend.expectPUT("http://localhost:8080/registries/1", registry).respond(responseExpected);
        registryService.setRegistry(1, registry).then(function(data) {
            expect(data.status).toBe(responseExpected.status);
        });
        httpBackend.flush();
    });

});

