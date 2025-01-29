# sparkle

Sparkle is a small EmberJS app that is used for the pairing exercise in a frontend engineering interview.

- Uses the latest version of EmberJS but sticks with Octane syntax and Glimmer components to keep it familiar and accesssible to our candidates.
- Uses Mirage to mock out a backend
- Uses Tailwind for styling
- Provides a home route, a patients route, and an edit patient route.
- Provides a patient model and a practitioner model.
- Use `pnpm` as the package manager.

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Ember CLI](https://cli.emberjs.com/release/)
- [Google Chrome](https://google.com/chrome/)
- [pnpm](https://pnpm.io/)

## Installation

- `git clone <repository-url>` this repository
- `cd sparkle`
- `pnpm install`

## Running / Development

- `pnpm run start`
- Visit Sparkle at [http://localhost:4200](http://localhost:4200).
- Visit the tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

- `pnpm run test`
- `pnpm run test:ember -- --server`

### Linting

- `pnpm run lint`
- `pnpm run lint:fix`

### Building

- `pnpm exec ember build` (development)
- `pnpm run build` (production)

### Deploying

This repo should not be deployed.

## Further Reading / Useful Links

- [ember.js](https://emberjs.com/)
- [ember-cli](https://cli.emberjs.com/release/)
- Development Browser Extensions
  - [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  - [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
