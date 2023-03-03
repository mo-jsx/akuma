# Akuma
## DataSnipper assignment 
First, thanks for these assignment, it was the opportunity for me to put my knowledge in practice. 

Below I will explain how I did proceed and organise the work and comment about the application testing.

## Tools 
- ViteJS
- React
- Typescript
- Sass
- Jest
- Cypress

---
## Project Structure 

-   / : root dir
    -   cypress: cypress testing dir.
    -   public: static assets dir.
    -   src: source files dir.
        -   assets: static assets.
        -   components: smaller components dir.
        -   layouts: larger components dir.
        -   styles: global styles.
        -   types: typescript types dir.
        -   utils: miscellaneous funtcions dir.
    -   test: jest config dir.

---

## Assignment
## Test Plan 
I do believe that tests are an most cornerstone when build a build an application. Testing files prevent and catch some bugs beforehand and can be a documentation itself.

During the development phase I adepted the TDD methology and its best practices.

Here's how I did tackle this small project : 

### Unit Tests:
- Unit tests should be written for each component, hook, and utility function in the project.
- Test the functionality and output of each component with different scenarios.
- Test error scenarios like component rendering failures or function failures.
- Used Jest as a test framework to run tests.

### Integration Tests:
- Test the rendering of the app in different scenarios.
- Test user interactions like clicking on buttons or links.
- Used Cypress as testing framework to run integration tests.


### End-to-end Tests:
- Even tho this was a small application we don't , but end-to-end tests should be written to test the entire flow of the application.
- Test user interactions like signing up, logging in, and completing forms.
- Test the application across different browsers and devices.
- I usually make use of Cypress as a testing framework to run end-to-end tests.


### Accessibility Testing:
- Ensure that the application is accessible to users with disabilities.
- Test the application using accessibility testing tools like aXe or pa11y.
- Ensure that all components have appropriate aria-labels and roles.


### Performance Testing:
- Test the performance of the application by simulating a large number data load from csv file or else.
- Measure the load time and page speed of the application Lighthouse.
