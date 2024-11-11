# AtomicJolt LTI
This is a collection of Javascript used by Atomic Jolt to assist in handling an LTI launch on the server.

## Installation

    `npm i @atomicjolt/lti-server`

## Usage
For an example of how to use this library see https://github.com/atomicjolt/atomic-lti-worker

The application code using this library must implement the LTI Launch in 3 phases, providing the server side code for each phase and returning and html response for each phase. Phases 1 and 3 will include a call to the client side javacript contained in this library. See the 1Edtech working group documentation for more information about the LTI standard: https://www.imsglobal.org/activity/learning-tools-interoperability.

1. Open ID Connect initialization
During this phase respond to the OIDC initialization request, attempt to write a state cookie and return and html page with a call to `InitOIDCLaunch`

2. Redirect
Server side validate the redirect and then return an HTML page capable of redirecting to the final LTI launch

3. Handle the LTI launch.
Validate the request including checking the nonce server side. Check for a valid state cookie and then return an HTML page with a script that calls `LtiLaunch` from this library.

## Contributing
Report any issues using Github

Build package:
    `npm run build`

Publish package:
    `npm publish --access public`

## License
MIT
This code is released as open source without any support or warranty. It is used by Atomic Jolt internally and is released in case someone finds it useful.
