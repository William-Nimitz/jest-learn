# Onboarding
1. Install jest package
```
yarn add --dev jest
```
2. Add the following section to your package.json
```
{
  "scripts": {
    "test": "jest"
  }
}
```
3. Generate a basic configuration file
```
jest --init
```

# Additional Configuration
1. Using Babel
- add babel packages
```
yarn add --dev babel-jest @babel/core @babel/preset-env
```
- Configure Babel to target your current version of Node by creating a babel.config.js file in the root of your project:
```
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```