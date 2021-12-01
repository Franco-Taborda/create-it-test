# CreateItTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.

## Installation

* Make sure to have a compatible Node version with [Angular](https://github.com/angular/angular-cli) v13.0.3 (14.15, 16.10)
* Clone the repo and enter to it's root directory
```
npm i
```
```
ng serve
```

## Troubleshooting

* If ng isn't recognized as a valid command (incompatible global Angular cli version or not global Angular cli found), run 
```
  npm run ng serve
```

* If the build finishes successfully but you got an error like in the image, follow next steps
![image](https://user-images.githubusercontent.com/29551514/144314467-3a500303-a9ca-46e9-bf7e-9a8b1d0355bd.png)

To bypass the error `Error: Content and Map of this Source is not available (only size() is supported)`
* Open the editor on a module related file (i.e. .module.ts, .component.ts, etc.)
* run `ng serve`
* Save the file multiple times when the build is about to finish and after until you see that the application bundle generation has been completed 
![image](https://user-images.githubusercontent.com/29551514/144315649-c5fb6901-5f07-4005-b36b-9331c8f59f3d.png)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
