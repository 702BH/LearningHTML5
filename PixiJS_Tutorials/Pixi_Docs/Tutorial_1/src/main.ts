import { Application, Container, Assets, Sprite } from "pixi.js";

(async () => {
  // Create a new application
  const app = new Application();

  // Initialize the application
  await app.init({ background: "#1099bb", resizeTo: window });

  // Append the application canvas to the document body
  document.getElementById("pixi-container")!.appendChild(app.canvas);

  const container = new Container();

  app.stage.addChild(container);

  // Load the bunny texture
  const texture = await Assets.load("/assets/bunny.png");

  for (let i = 0; i < 25; i++) {
    const bunny = new Sprite(texture);
    bunny.x = (i % 5) * 40;
    bunny.y = Math.floor(i / 5) * 40;
    container.addChild(bunny);
  }

  container.x = app.screen.width / 2;
  container.y = app.screen.height / 2;

  container.pivot.x = container.width / 2;
  container.pivot.y = container.height / 2;



  // Create a bunny Sprite
  // const bunny = new Sprite(texture);



  // Center the sprite's anchor point
  // bunny.anchor.set(0.5);

  // Move the sprite to the center of the screen
  // bunny.position.set(app.screen.width / 2, app.screen.height / 2);

  // Add the bunny to the stage
  // app.stage.addChild(bunny);

  // Listen for animate update
  app.ticker.add((time) => {
    // Just for fun, let's rotate mr rabbit a little.
    // * Delta is 1 if running at 100% performance *
    // * Creates frame-independent transformation *
    // bunny.rotation += 0.1 * time.deltaTime;
    container.rotation -= 0.01 * time.deltaTime;
  });
})();
