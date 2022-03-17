# UserManagement

Framework:
- Angular 13

Main Features:
- Robust folder structure
- Routing
- Lazy load module
- Single Dependency Injection
- Container and ui approach
- Reactive Form
- Form validation
- Rxjs Observables
- LocalStorage
- State Management (Ngrx)
- Breadcrumb
- Search and filters on the list
- Strong Typing
- BEM approach
- Scss Variables

## Development server

  - Copy and paste in your command prompt: git clone https://github.com/satishsookun/user-management-system.git
  - Git checkout master
  -`npm i` (to install all dependencies)
  - Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

  Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Folder structure

  Folder structure is organised in a way that if in the future the app expand, it will be easy to adapt

## Sass

  Make used of local and global variables in order to adapt our theme color easily

## Responsiveness

  The app is only adapted to desktop version as from 1200px as I didn't work on responsiveness due to lack of time
 
## Module

  Easy module loading approach was adapted.
  Each feature is a module which can be easily plug and play
  
## Services

  Root services and module wise services are used to meet the requirement of the project. As we are bootstrapping the users module and user module separately, RXJS Observables(Subject and BehaviourSubject) was used to communication between modules

## Feature UI

  Angular material is used in order to give a good and feel interface to the app and prevent wasting time in styling

## Routing
- RouteGuard is used to prevent user from accessing Event dashboard if not login
- If no account was created, user will be redirecting to Create profile route but still have the choice to route to the login page.

## Store

  localStorage
  State Management (Ngrx)
  
## User interaction

 - User has the possibility to add, edit and delete a user.
 - User can create multiple account and manage each account
 - User has the possibility to search in the user list.
 - User also has the possibility to filter users

## Dynamic Job Title list
  
  The Job Title list get updated when selecting a Department

## Remaining

- Webpack implementation for a much better management of Input and output sources with the appropriate loaders. This will help to provide a production version bundle also.
- Can be done if you are interested in evaluating these section also 
- Redirect to Create user interface when user list is empty
- Breadcrumb needs a little adjustment for redirection
