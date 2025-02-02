# What is this codebase?
This is the Sauce Labs Sample Application which is designed to be used from desktop web browsers

# Setup

To set up the development environment for this sample app:

1. Install [Vagrant](https://www.vagrantup.com/)
2. Install [VirtualBox](https://www.virtualbox.org/)
3. Run the `setup-env.sh` script in the root of the repository
4. There is no step 4, you're done!

# Build

To build the application:

1. `vagrant ssh` inside the project folder
2. On the VM: `cd /usr/local/saucelabs/sample-app-web`
3. On the VM: `npm run build`
4. Again, no step 4. The build is complete!

# Run

To run the built application (which is a static website):

1. Open _[project-root]_`/dist/index.html` in a web browser
2. Click around - this is the app!


# Test

To run the application test suite (which uses Webdriver.io, Selenium, and Chrome):

1. `vagrant ssh` inside the project folder
2. On the VM: `cd /usr/local/saucelabs/sample-app-web`
3. On the VM: `npm test`

This will run the application test suite - screenshots generated by the tests will be placed in _[project-root]_`/screenshots/**/*.png`, and the output will look like:

```
"spec" Reporter:
------------------------------------------------------------------
[chrome #0-0] Spec: /usr/local/saucelabs/sample-app-web/test/e2e/specs/login.spec.js
[chrome #0-0] Running: chrome
[chrome #0-0]
[chrome #0-0] Login
[chrome #0-0]    ✓ should be able to login with the standard user
[chrome #0-0]    ✓ should be able to login with the problem user
[chrome #0-0]    ✓ should be able to login with the performance issue user
[chrome #0-0]    ✓ should not be able to login with the locked out user
[chrome #0-0]    ✓ should not be able to login without a username
[chrome #0-0]    ✓ should not be able to login without a password
[chrome #0-0]    ✓ should not be able to login with the wrong password
[chrome #0-0]
[...]

Stdout:
2019-02-13T17:38:07.822Z INFO wdio-cli:Launcher: Run onPrepare hook
Starting ChromeDriver 2.46.628388 (4a34a70827ac54148e092aafb70504c4ea7ae926) on port 9515
Only local connections are allowed.
Please protect ports used by ChromeDriver and related test frameworks to prevent access by malicious code.
2019-02-13T17:38:14.399Z INFO wdio-local-runner: Start worker 0-0 with arg: test/e2e/config/wdio.conf.js
[0-0] Saving screenshot to [./screenshots/login/standarduser-1-initial-load.png] for url: [http://localhost/]
[0-0] Saving screenshot to [./screenshots/login/standarduser-2-values-entered.png] for url: [http://localhost/]
[0-0] Saving screenshot to [./screenshots/login/standarduser-3-values-submitted.png] for url: [http://localhost/inventory.html]
[0-0] Saving screenshot to [./screenshots/login/problemuser-1-initial-load.png] for url: [http://localhost/]
[0-0] Saving screenshot to [./screenshots/login/problemuser-2-values-entered.png] for url: [http://localhost/]
[0-0] Saving screenshot to [./screenshots/login/problemuser-3-values-submitted.png] for url: [http://localhost/inventory.html]
[0-0] Saving screenshot to [./screenshots/login/perfuser-1-initial-load.png] for url: [http://localhost/]
[...]
```