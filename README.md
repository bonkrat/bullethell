# Bullet Hell Playground

[Demo](https://bullethell.vercel.app/)

Nothing fancy here, just a fun tool to practice generating some bullet hell type patterns. I don't take this one too seriously.

## Development

`npm i` to install node modules, and  `npm run start` to run the local development environment.

## Implementation Notes

The project uses Parcel for the development environment and the "production" build, chosen for its "zero-configuration" and quick start on small projects.

Bullets are drawn to the canvas using the P5 rendering library, just as a learning experiment. Bullets are managed from a pool of re-usable entities as an effort to optimize rendering to canvas. Removing P5 and just using the native canvas API would probably also optimize the render speed.

Unfortunately there is currently a data bind between the instance of the React application (for the right hand side controls) and the P5 canvas painting the bullets, causing several small UX bugs. A refactor would have the `BulletHost` instance as part of the React process.