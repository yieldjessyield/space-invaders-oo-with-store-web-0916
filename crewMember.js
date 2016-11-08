//  const CrewMember = (function createCrewMember(){
//   // var id = 0;
// return class {
//   constructor(data){
//     this.id = data.id;
//     this.position = data.position;
//     this.ship_id = undefined
//     Store.data.crewMembers.push(Object.assign({}, {crewMembers: [...Store.data.crewMembers, this]}))
//   }
//   // spaceship(){
//   //     return Store.data.spaceships.filter((spaceship) => {
//   //       return spaceship.id === this.ship_id;
//   //     })}

//       engageWarpDrive(){
//         if (this.ship_id && this.position === "pilot"){
//           if (Store.data.spaceship.warpDrive === "engaged"){
//             Store.data.spaceship.warpDrive = "disengaged"
//           }else{
//             Store.data.spaceship.warpDrive = "engaged"
//           }
//         }else{
//           return "had no effect"
//         }
//       };


//       setsInvisibility(){
//         if (this.ship_id && this.position === "defender"){
//           if (Store.data.spaceship.cloaked === false){
//             Store.data.spaceship.cloaked = true
//           }else{
//             Store.data.spaceship.cloaked= false
//           }
//         }else{
//           return "had no effect"
//         }
//       };


//       chargePhasers(){
//       if (this.ship_id && this.position === "gunner"){
//           if (Store.data.spaceship.phasersCharge === 'uncharged'){
//             Store.data.spaceship.phasersCharge = 'charged'
//           }else{
//             Store.data.spaceship.phasersCharge= 'uncharged'
//           }
//         }else{
//           return "had no effect"
//         }

//       };

//       assignShip(spaceship){
//         this.ship_id = spaceship.id
//         this.currentShip = spaceship
//         spaceship.docked = false;
//       }

// j
// }

// }());



class CrewMember {
  constructor(object) {
    this.id = object.id;
    this.position = object.position
    this.currentShip = 'Looking for a Rig'
    Store.data['crewMembers'].push(this)
  }

  assignShip(spaceship) {
      this.currentShip = spaceship
      this.currentShip.docked = false
      this.spaceshipId = spaceship.id
  }

  chargePhasers() {
    if (this.position === 'Gunner' && this.spaceshipId) {
      this.currentShip.phasersCharge = 'charged!'
    } else {
      return 'had no effect'
    }
  }

  engageWarpDrive() {
    if (this.position === 'Pilot' && this.spaceshipId) {
      this.currentShip.warpDrive = 'engaged!'
    } else {
      return 'had no effect'
    }
  }

  setsInvisibility() {
    if (this.position === 'Defender' && this.spaceshipId) {
      this.currentShip.cloaked = true
    } else {
      return 'had no effect'
    }
  }
}
