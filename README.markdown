# TypeScript WTF?

## Quick Start

```bash
git clone <this repo> wtf
cd wtf
# nvm use 6
npm install
node_modules/.bin/gulp
```

If everything has gone well, there will now be an express app listening on [http://localhost:3000/](http://localhost:3000/).

However, if you open this in your browser and look in the console, you'll see the following error:

```
[Error] TypeError: undefined is not an object (evaluating 'new Application.Controllers.HomeCtrl')
    (anonymous function) (bundle.js:13)
    (anonymous function) (bundle.js:15)
    s (bundle.js:1:259)
    e (bundle.js:1:427)
    Global Code (bundle.js:1:444)
```

![I have no idea what I'm doing](https://cdn-images-1.medium.com/max/600/1*snTXFElFuQLSFDnvZKJ6IA.png)
