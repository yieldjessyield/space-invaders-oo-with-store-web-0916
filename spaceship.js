class Spaceship {
  constructor(object) {
    this.id = object.id;
    this.name = object.name;
    this.phasers = object.phasers;
    this.shields = object.shields;
    this.phasersCharge = 'uncharged'
    this.warpDrive = 'disengaged'
    this.cloaked = false
    this.docked = true
    Store.data['spaceships'].push(this)
  }
}
