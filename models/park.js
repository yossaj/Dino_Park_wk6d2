const Park = function(name,ticket_price,dinosaurs){
  this.name = name,
  this.ticket_price = ticket_price,
  this.dinosaurs = dinosaurs
}

Park.prototype.add_dino = function(dino) {
  this.dinosaurs.push(dino)
};

Park.prototype.remove_dino = function(dino) {
  position = this.dinosaurs.indexOf(dino);
  this.dinosaurs.splice(position, 1);
  return this.dinosaurs;
};

Park.prototype.most_visitors = function(){
  let dinos_by_num = this.dinosaurs.sort(function(a, b){return a.guestsAttractedPerDay - b.guestsAttractedPerDay});
  return dinos_by_num.reverse()[0]


};


module.exports = Park;
