# Space Invaders

## Instructions

Space flight is no joke, and neither is this lab.  You're going to need to create two ES6 JS classes, `Spaceship` and `CrewMember`. These classes will pump out instances that are by default unable to interact with one another.  A space ship will be inactive if it is created without a crew.  And a crew member by default will be hanging out in the Cantina looking for a ride if they were not put inside a ship when it is initialized.

Crew members will also be unable to use their special abilities if they're not assigned to a ship.  For example, a pilot cannot `engageWarpDrive` if he is not in a ship and, therefore, can't make the Kessel Run in less than twelve parsecs. Crew members also should be unable to perform certain actions that their positions are incapable of doing.

We've created a constant `Store` to store all crew members and spaceships. A spaceship has many crew members and a crew member belongs to a spaceship. Build out the associations and pass the tests. Hint ... the solution branch will not help you. ::evil cackle::

- To run tests on the command line run
  -  `learn`

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/space-invaders' title='Space Invaders'>Space Invaders</a> on Learn.co and start learning to code for free.</p>

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/space-invaders'>JS Space Invaders Lab</a> on Learn.co and start learning to code for free.</p>
