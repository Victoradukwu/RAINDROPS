const chai = require('chai');
const assert = chai.assert;
const app = require('../src/main.js');

describe("RaindropSpeaks", ()=>{
    describe("handle string input", ()=>{
        it("should return \"Please enter a valid number\"", ()=>{
            assert.equal(app.raindropSpeak("Andela"), "Please enter a valid number");
        });
    });

    describe("handle empty input", ()=>{
        it("should return \"Please enter a valid number\"", ()=>{
            assert.equal(app.raindropSpeak(), "Please enter a valid number");
        });
    });

    
    describe("Check if 3 is a prime factor and others are not", ()=>{
        it("should return \"Pling\"", ()=>{
            assert.equal(app.raindropSpeak(6), "Pling");
        });
    });

    describe("Check if 5 is a prime factor and others are not", ()=>{
        it("should return \"Plang\"", ()=>{
            assert.equal(app.raindropSpeak(10), "Plang");
        });
    });

    describe("Check if 7 is a prime factor and others are not", ()=>{
        it("should return \"Plong\"", ()=>{
            assert.equal(app.raindropSpeak(14), "Plong");
        });
    });

    describe("Check if 3 and 5 are a prime factors but no 7", ()=>{
        it("should return \"PlingPlang\"", ()=>{
            assert.equal(app.raindropSpeak(15), "PlingPlang");
        });
    });
    describe("Check if 3 and 7 are a prime factors but no 5", ()=>{
        it("should return \"PlingPlong\"", ()=>{
            assert.equal(app.raindropSpeak(21), "PlingPlong");
        });
    });

    describe("Check if 7 and 5 are a prime factors but no 3", ()=>{
        it("should return \"PlangPlong\"", ()=>{
            assert.equal(app.raindropSpeak(35), "PlangPlong");
        });
    });

    describe("Check if 3 and 5  and 7 are a prime factors", ()=>{
        it("should return \"PlingPlang\"", ()=>{
            assert.equal(app.raindropSpeak(105), "PlingPlangPlong");
        });
    });

    describe("Check if none of 3 and 5 and 7 is a prime factor.", ()=>{
        it("should return 8", ()=>{
            assert.equal(app.raindropSpeak(8), "8");
        });
    });

    describe("Check if 3 and 5 are a prime factors but no 7", ()=>{
        it("should return \"PlingPlang\"", ()=>{
            assert.equal(app.raindropSpeak(15), "PlingPlang");
        });
    });

    describe("Testing for 0", ()=>{
        it("should return \"PlingPlangPlong\"", ()=>{
            assert.equal(app.raindropSpeak(0), "PlingPlangPlong");
        });
    });

    describe("Test for negative numbers", ()=>{
        it("should return \"Pling\"", ()=>{
            assert.equal(app.raindropSpeak(-12), "Pling");
        });
    });

    describe("Test for negative numbers", ()=>{
        it("should return \"PlingPlang\"", ()=>{
            assert.equal(app.raindropSpeak(-30), "PlingPlang");
        });
    });

    
});