const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

let park;
let tommy;
let jimo;
let bity;
let hilda;


  beforeEach(function () {
    tommy = new Dinosaur('t-rex', 'carnivore', 50);
    jimo = new Dinosaur('Stegasaurs', 'herbivore', 10)
    bity = new Dinosaur('Brontosaur', 'herbivore', 20)
    hilda = new Dinosaur('Terredactyl', 'herbivore', 20)
    tilda = new Dinosaur('t-rex', 'herbivore', 20)
    park = new Park('Hurrassic Park', 15, [tommy, jimo, bity,tilda])
  });

  it('should have a name', function(){
      const actual = park.name;
      assert.strictEqual(actual, 'Hurrassic Park')
  });

  it('should have a ticket price', function(){
      const actual = park.ticket_price;
      assert.strictEqual(actual, 15)
  });

  it('should have a collection of dinosaurs', function(){
      const actual = park.dinosaurs.length;
      assert.strictEqual(actual, 4)
  });

  it('should be able to add a dinosaur to its collection', function(){
      park.add_dino(hilda);
      const actual = park.dinosaurs.length;
      assert.strictEqual(actual, 5)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.remove_dino(tommy);
    const actual = park.dinosaurs
    assert.deepStrictEqual(actual, [jimo, bity,tilda] )
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.most_visitors();
    const actual = tommy;
    assert.deepStrictEqual(actual, tommy);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    value = park.all_species_of('Stegasaurs');
    const actual = value;
    assert.deepStrictEqual(actual, [jimo]);
  });


  it('should be able to remove all dinosaurs of a particular species', function(){
    park.remove_these_dinos('t-rex');
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [jimo, bity]);
  });

  it('should return the total number of visitors to the park each day', function(){
    const actual = park.total_visitors();
    assert.strictEqual(actual,100);
  });

  it('should return the total number of visitors to the park per year', function(){
    const actual = park.total_annual_visitors();
    assert.strictEqual(actual,36500);
  });

});
