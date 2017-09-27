# ci-tryout
Tryout for testing strategies, ci-integration and project skeleton proposal.

## CI Services

### Possible Criteria

  - Docker Support
  - Proper Node/Npm Support
  - Database Support (Mongo, Postgres)
  - Pricing
  - Interface/ Ease of use
  - Git Integration
  - _Nice to have:_ Release Tooling
  - _Nice to have:_ Greenkeeper integration
  - _Nice to have:_ Rancher integration
  - _Nice to have:_ Tool support for frontend testing

  - https://buddy.works/
  - https://about.gitlab.com/
  - https://codeship.com/
  - https://semaphoreci.com/
  - https://www.atlassian.com/software/bamboo
  
### [Circle CI](https://circleci.com/)

  - Pricing:
    - 1 concurrent build
    - includes 1500 build minutes per month
    - a build, depending on the images can take several minutes, blocking other users/branches?
    - 2 containers with unlimited minutes per month costs 50$ (guess this is the minimum requirement)
  - Contains several pre build docker images
  - Has a neat dashboard
  - Claims to have github integration (not able to test yet)

## Setup

> Proposal

  1. Simple Docker Container (databases?)
  1. Tests (failing, succeeding)
  1. Multiple branches to test
  1. Multiple PRs

## Testing

  - How do we integrate frontend and backend tests into a suite?
  - Do we need specific run scripts (you can i.e. run mocha programmatically).
  - Make the debugger available to your testing scripts (not too easy).

### Backend Testing

  - tests are split into `unit` and `integration` tests
  - at least the basic test script is added to the `package.json` under `scripts/test`, which executes all files
  - feel free to add more granular test scripts _i.e._ `test:unit` or `test:integration`
  - all tests should be free of sideeffects, create corresponding setup and teardown mechanisms and avoid global states
  - any global initialization is done in a central place
  - tools (open to discussion):
    - `mocha` test-runner and 
    - `chai` as assertion library
    - `cheerio` to analyze html content
    - `request` to make HTTP requests? (or superagent?)
    - `supertest` to test APIs
    - `nock` to Mock APIs (Probably with a wrapper, to make it easier to reuse)
    - `npm` as a package manager (or do we switch to `yarn`)
  - fixture data is stored in a separate folder and accessible to all other tests
  - common test functionality will be available using a custom package
  - **if you break other tests, you've got to fix them**
  - code coverage can be gathered using CI (what are the criteria?)
  - How do we handle failing tests? Should they be fixed before the feature is merged? (no skip allowed)
  - How do we solve migrations in the tests?
  - Do we allow global test variables
  
#### General Structure

  - **test**
    - **support** _project specific helpers and fixture data_
      - **utility** _helpers_
      - **fixtures** _fixture data, export functions which return your data to avoid side effects by modifying the origin al data_
    - **unit** _unit tests, testing single components or simple composition not relying on heavy setup, group by module or component_
    - **integration** _integration tests, testing bigger compositions like the full api or elements using the database, group by functionality_
    - **setup** _setup scripts that run before the tests, include them explicitly in your testing command to make it visible to others_
    
    
    ```Bash
    # example script
    mocha --recursive test/setup test/unit test/integration
    ```
  
### Frontend Testing

### Angular
   
   - if you need to mock services, make them available to other tests (e.g. create a test version of your app?)
   - tools (open to discussion):
     - `karma` test environment for angular tests (browser specific), usually used together with the `jasmine` test runner, we might use the same tooling like the backend tests, i.e. mocha and chai (http://attackofzach.com/setting-up-a-project-using-karma-with-mocha-and-chai/)
     - `protractor` e2e tests using selenium *cough* (might be useful to identify timing issues or similar) 
     - `cypress` looks nice and claims to be working with the most commont CI services https://www.cypress.io/ https://hub.docker.com/r/cypress/base/
     - `angular-mock` mock services integrated with angular
     - `sinon` spying and mocking http://sinonjs.org/
     - `bower` dependency management
     - `gulp`? `yeoman`? `webpack`?
   - in general, angular-testing tutorials propose to group angular stuff by functionality or by type (i.e. directives, components, services, filters) and directly add the tests within a corresponding spec file, I prefer having functionally grouped angular code and tests stored in a separate folder.
   - put logic into controllers or services (they are easier to test), and avoid logic in views (this might be slower but almost untestable)
   - it's a good idea to run e2e tests against the real api (no mocks) to avoid a wrong feeling of security


## Skeleton

  - src
  - resources
  - scripts
  - test
  - `index.js`
  - `package.json`
  