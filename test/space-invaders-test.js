const expect = require('expect')

const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')
const babel = require('babel-core')

const babelSpaceship = babel.transformFileSync(path.resolve(__dirname, '..', 'spaceship.js'), {
  presets: ['es2015']
})
const babelCrewMember = babel.transformFileSync(path.resolve(__dirname, '..', 'crewMember.js'), {
  presets: ['es2015']
})
const babelStore = babel.transformFileSync(path.resolve(__dirname, '..', 'store.js'), {
  presets: ['es2015']
})



describe('space invaders', () => {

  jsdom({
    src: babelSpaceship.code + babelCrewMember.code + babelStore.code
  })

  describe('CrewMember', function() {
    let tristan, jon, katie
    beforeEach(function() {
      tristan = new CrewMember({id: 1, position: 'Pilot'})
      jon = new CrewMember({id: 2, position: 'Defender'})
      katie = new CrewMember({id: 3, position: 'Gunner'})
    })

    it('should know their position', function() {
      expect(tristan.position).toBe('Pilot')
      expect(jon.position).toBe('Defender')
      expect(katie.position).toBe('Gunner')
    })

    it('should add crewmember to all crewmember data', function() {
      expect(Store.data.crewMembers.includes(tristan))
    })

    it('should know their id', function() {
      expect(tristan.id).toBe(1)
      expect(jon.id).toBe(2)
      expect(katie.id).toBe(3)
    })

    it('should not be assigned to a ship', function() {
      expect(tristan.ship_id).toBe(undefined)
      expect(jon.ship_id).toBe(undefined)
      expect(katie.ship_id).toBe(undefined)

    })

    it('should should return "Looking for a Rig" if they aren\'t assigned to a ship', function() {
      expect(tristan.currentShip).toBe('Looking for a Rig')
    })

    it('should return "had no effect" when the crew member tries to use their special ability', function() {
      expect(tristan.engageWarpDrive()).toBe('had no effect')
      expect(jon.setsInvisibility()).toBe('had no effect')
      expect(katie.chargePhasers()).toBe('had no effect')
    })
  })

  describe('Spaceship', function() {
    var spaceship
    beforeEach(function() {
      Store.data.crewMembers = []
      Store.data.spaceships = []
      spaceship = new Spaceship({id: 2, name: 'The Krestel', phasers: 5, shields: 4})
      tristan = new CrewMember({id: 1, position: 'Pilot'})
    })

    it('should know its own name', function() {
      expect(spaceship.name).toBe('The Krestel')
    })

    it('should have the correct number of phasers (5)', function() {
      expect(spaceship.phasers).toBe(5)
    })

    it('should have the correct layer of shields (4)', function() {
      expect(spaceship.shields).toBe(4)
    })

    it('should have its cloaking set to false by default', function() {
      expect(spaceship.cloaked).toBe(false)
    })

    it('should have its warp drive set to "disengaged" by default', function() {
      expect(spaceship.warpDrive).toBe('disengaged')
    })

    it('should be docked if it has no crew', function() {
      expect(spaceship.docked).toBe(true)
    })

    it('should not be docked if it has crew', function() {
      tristan.assignShip(spaceship)
      expect(spaceship.docked).toBe(false)
    })

    it('should have its `phasers` charge set to "uncharged" by default', function() {
      expect(spaceship.phasersCharge).toBe('uncharged')
    })

    it('should add spaceship to all shapship data', function() {
      expect(Store.data.spaceships.includes(spaceship))
    })
  })

  describe('Ship with a crew', function() {
    var tristan, jon, katie, spaceship
    beforeEach(function() {
      Store.data.crewMembers = []
      Store.data.spaceships = []
      spaceship = new Spaceship({id: 2, name: 'The Krestel', phasers: 5, shields: 4})
      tristan = new CrewMember({id: 1, position: 'Pilot'})
      jon = new CrewMember({id: 2, position: 'Defender'})
      katie = new CrewMember({id: 3, position: 'Gunner'})
      tristan.assignShip(spaceship)
      katie.assignShip(spaceship)
      jon.assignShip(spaceship)
    })

    it('should assign a crew member', function() {
      expect(tristan.spaceshipId).toBe(2)
    })

    it('a crew member should know his or her ship', function() {
      expect(tristan.currentShip.name).toBe('The Krestel')
    })

    it('should charge its phasers when a gunner calls `chargePhasers`', function() {
      // console.log(tristian.currentShip)
      tristan.chargePhasers()
      expect(spaceship.phasersCharge).toBe('uncharged')
      katie.chargePhasers()
      expect(spaceship.phasersCharge).toBe('charged!')
    })

    it('should have its warp drive set to "engaged" only when the pilot uses `engageWarpDrive`', function() {
      jon.engageWarpDrive()
      expect(spaceship.warpDrive).toBe('disengaged')
      tristan.engageWarpDrive()
      expect(spaceship.warpDrive).toBe('engaged!')
    })

    it('should cloak when a defender `setsInvisibility`', function() {
      katie.setsInvisibility()
      expect(spaceship.cloaked).toBe(false)
      jon.setsInvisibility()
      expect(spaceship.cloaked).toBe(true)
    })
  })
})
