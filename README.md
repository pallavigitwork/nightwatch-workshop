# nightwatch-workshop
Nightwatch Workshop
This repository showcases content for Nightwatch Workshop.
It was first conducted at the GTR 9th Edition Conference by Agile Testing Alliance.

Structure and File details -
test - folder contains two files - login-logout.js and login-logout-assertion.js
nightwatch.conf - is the configuration file which contains information to run test on browserstack cloud. please replace the credentials in the file with yours
environments.js file - has setup of three environments. These can be changed based on your requirements.

Helpful links/References -
https://nightwatchjs.org/
https://nightwatchjs.org/guide/overview/what-is-nightwatch.html
https://nightwatchjs.org/guide/configuration/nightwatch-configuration-file.html
https://automate.browserstack.com/dashboard/v2/quick-start/get-started#introduction
https://automate.browserstack.com/dashboard/v2/quick-start/integrate-test-suite-step

To setup the project -
a. Create a folder on your system
b. setup nightwatch using command - npm init nightwatch [assumed that the system has the required pre-requiste for this, please see the website -https://nightwatchjs.org/ for any detail]
c. Create a free account on Browserstack -https://www.browserstack.com/ [copy and save access details- this will be needed to set in the nightwatch.conf file]
d. Copy the files - nightwatch.conf, environments.js and the test folder in the folder you have created.
e. Follow the steps mentioned here on this link - https://automate.browserstack.com/dashboard/v2/quick-start/integrate-test-suite-step
f. execute using the command - :/> npx nightwatch .\test -e env1,env2,env3

Execution of this will happen on the browserstack cloud. you can further explore it there. Please note any other cloud service provider can be used or your own. 
ensure to change the nightwatch.conf file accordingly. 
