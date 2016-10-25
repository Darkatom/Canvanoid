# Canvanoid
It's a ES5 clone of Arkanoid, drawn on a canvas element (hence the name). It has been programmed with ES6, then transpiled with Babel.
## Playing!
Controlling the Vaus (the paddle):
- A/D keys, arrow keys: moving the Vaus to the left or to the right.
- Mouse: Click and drag on the canvas to move the Vaus around. The Vaus will always follow the mouse while you are clicking.
- Space bar: Start and pause the game.
## Launching it
You need to build it first. Then, just execute *index.html*.
You can also try the game [here](http://darkatom.github.io/canvanoid), if you don't want to/can't build the code.
## How to build
You will need Node.js, Webpack and Babel. 
The configurations are already in place. Just create a new npm project, download the needed packages and execute:
```
npm run build
```
This will pack the code and transpile it with Babel. A new *dist* folder will appear, and inside a *canvanoid.bundle.js* file.
## Testing it
There is an script inside the package.json for that. Just run:
```
npm run test
```
... and it will run the tests for you.
Should you wish to make some tests yourself, you can find the original files inside *src/specs/src*. 
After you have altered the code, you will have to run a separate *webpack* command on the *specs* folder, which contains the Webpack configuration for the files to be runnable.
For packing and launching the tests, I would recommend the following command:
```
webpack & npm run test
```
Please, remember that the Sprites and all graphic methods may -and probably will- make the tests fail, so be sure to comment those lines —specially on the Sprite class, *this.img* instance and related, to avoid commenting all the classes' sprites.
