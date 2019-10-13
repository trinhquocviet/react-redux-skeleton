# PAL SD

generates by [create-react-app 3.2.0](https://github.com/facebook/create-react-app), please read this before working on this project.

# Table of Contents
1. [Notes](#notes)
    - [Skip Access-Control-Allow-Origin (CORS) in development](#skip-access-control-allow-origin--cors--in-development)
        + [CORS on Chrome](#cors-on-chrome)
        + [CORS on Safari](#cors-on-safari)
2. [Files & Directories structure](#files--directories-structure)
    - [Project structure](#project-structure)
    - [Components structure](#components-structure)
    - [Pages structure](#pages-structure)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Deploy](#deploy)
    - [Deploy to staging](#deploy-to-staging)
    - [Deploy to production](#deploy-to-production)
6. [Contributing](#contributing)

## Notes
Please read some note before work with this project.

### 1. Skip Access-Control-Allow-Origin (CORS) in development

#### 1.1 CORS on Chrome
Start Chrome from comandline or cmd with 2 configs   `--disable-web-security` and `--user-data-dir`

MacOS
```bash
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --disable-web-security --user-data-dir
```

#### 1.2 CORS on Safari
Enable develop menu first ([Tutorial to enable develop menu](http://osxdaily.com/2011/11/03/enable-the-develop-menu-in-safari/)).
- go to Develop >> **Disable Cross-Origin Restrictions**.
- In case you want for localhost only, then select **Disable local file restrictions**.



## Files & Directories structure

Describe for all files and directories structure using in this project.

### Project structure

```
.
├── public                            # Contain Static files
│   ├── 404.html                      # Contain JScript to fix router for GitHub Pages
│   ├── index.html                    # Contain JScript to fix router for GitHub Pages
│   ├── ...
├── build                             # Compiled files
├── src                               # Source files
│   ├── actions
│   ├── common
|   │   ├── assets
│   |   ├── constants                 # Contain constants variable can reusable
│   │   ├── helpers                   # Helpers function
│   ├── components                    # Contain components can reusable
│   ├── pages                         # Contain all pages
│   ├── reducers
│   ├── styles                        # Contain SCSS files
│   │   ├── _styles.scss              # Global override bootstrap
│   │   ├── _variables-reference.scss # Reference variables copied from bootstrap, don't use to import
│   │   ├── _variables.scss           # Global variables and bootstrap override variables
│   │   ├── styles.global.scss        # Main global SCSS files
│   ├── auth.js                       # All config for authentication
│   ├── Routes.js                     # All config for routes
│   ├── PrivateRoute.js               # Private route component with authentication
│   ├── withTracker.js                # GA Tracking
│   ├── ...
├── .env.example                      # Environments sample, copy to .env to use
├── README.md
└── ...
```

### Components structure

- One reusable component should put inside folder `src/components`.
- The reusable component **shouldn't use as a web page**.
- One reusable component can have multiple sub-components inside, create the folder `components` and put sub-components to inside.
- sub-components **shouldn't be reused by another component**.


**EXAMPLE**: create a reusable component is `ComponentA`, and have a sub-component is `SubComponentB`.

```
components
│   ├── ComponentA
│   │   ├── components                        # Contain sub-components using only inside ComponentA
│   │   │   ├── SubComponentB
│   │   │   │   ├── index.js
│   │   │   │   ├── SubComponentB.js
│   │   │   │   ├── SubComponentB.module.scss
│   │   ├── index.js                          # Using to export components inside
│   │   ├── ComponentA.js                     # Contain main code
│   │   ├── ComponentA.module.scss            # Contain CSS for ComponentA
```

### Pages structure

- The page using as a web page, **shouldn't import and use as a component**.
- One page can have multiple sub-components inside, create the folder `components` and put sub-components to inside.
- sub-components **shouldn't be reused by another component**.


**EXAMPLE**: create a container is `Home`, and have a sub-component is `ComingSoon`.

```
pages
│   ├── Home
│   │   ├── components                      # Contain sub-components use inside Home page
│   │   │   ├── ComingSoon
│   │   │   │   ├── index.js
│   │   │   │   ├── ComingSoon.js
│   │   │   │   ├── ComingSoon.module.scss
│   │   ├── index.js                        # Using to export container
│   │   ├── Home.js                         # Contain main code
│   │   ├── Home.module.scss                # Contain CSS for Home
```

## Installation

Using `yarn` to install

```bash
yarn install
```

## Usage

Copy file `.env.example` to `.env`

```bash
cp .env.example .env
```

Change config inside .env and run command to start the project.

```bash
yarn start
```

## Deploy

### Deploy to staging
Before starting to deploy to staging, please ensure you were clone staging repo to local.

**Step 01**: Copy and rename file `.env.example` to `.env.staging`

```bash
cp .env.example .env.staging
```

**Step 02**: Edit file `.env.staging` and make sure some variable correct with below example.

```
PUBLIC_URL=
REACT_APP_API=
REACT_APP_GA=
```

**Step 03**: Run command `build:staging` to build files, after build - all files inside `build` folder.

```bash
yarn build:staging
```

**Step 04**: Clear all file inside staging repo and copy all files inside `build` into that repo, make sure file `CNAME` is exists.

**Step 05**: Commit and push all codes and then re-check [example.com](https://example.com).


### Deploy to production
Before start to deploy to staging, please make sure was merge and checkout to **master** branch.

**Step 01**: Copy and rename file `.env.example` to `.env.production`

**Step 02**: Edit file `.env.production` and make sure some variable correct with below example.

```
PUBLIC_URL=
REACT_APP_API=
REACT_APP_GA=
```

**Step 03**: Run command `predeploy:production` to build files.

```bash
yarn predeploy:production
```

**Step 04**: Run command `deploy:production` to deploy all file into production.

```bash
yarn deploy:production
```

**Step 05**: re-check [example.com](https://example.com).

## Contributing
- Pull requests are welcome.
- Please make sure to update the `.env.example` and `README.md` as appropriate to help colleagues can explore this project.
