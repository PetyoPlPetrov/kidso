# Kidso

This repository will present an application with the following functionality:
1. Main page with all the routes which are dynamic
2. 404 page where no route is available
 

## Setting up the project

1. Clone the repository on main branch(it is the default one)

   - the library source code is located into `kidso/src` folder

1. Navigate to dir `kidso` and **install dependencies** : execute in the terminal `yarn install`


1. To **build the package** execute `yarn run build`
1. To **run the tests** execute `yarn test`
1. To **start the app** - `yarn start`

## Project structure

```
    - project root
        - kidso
            - src  
                - components
                - hoc
                - seed - the actual routes that are dynamically loaded
                - tests
                - utils - app utils
                - index.js - app entry point
            - package.json
        - .gitignore
        - README
        
```


## Authors

- **Petyo Petrov**