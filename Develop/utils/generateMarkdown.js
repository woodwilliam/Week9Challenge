// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// TODO: Create a function that returns the license section of README
function renderLicenseData(response) {
  let badge = ``;
  let link = ``;
  if (response == 'ISC License (ISC)') {
    badge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]`;
    link = `(https://opensource.org/licenses/ISC)`;
  } else if (response == 'MIT') {
    badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
    link = `(https://opensource.org/licenses/MIT)`;
  } else if (response == 'The Pearl License') {
    badge = `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]`;
    link = `(https://opensource.org/licenses/Artistic-2.0)`;
  } else if (response == 'The Do What the Fuck You Want to Public License') {
    badge = `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)]`;
    link = `(http://www.wtfpl.net/about/)`;
  } else if (response == 'The zlib/libpng License') {
    badge = `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)]`;
    link = `(https://opensource.org/licenses/Zlib)`;
  } else {
    badge = ``;
    link = ``;
  }

  return [badge, link];
}
// TODO: Create a function to generate markdown for README
//put readme in this

function generateMarkdown(response) {
  let data = renderLicenseData(response.lic);
   return `# PROJECT NAME: ${response.pName}
Badge: ${data[0]}

## Description:
${response.desc}

## Instillation:
${response.inst}

## Usage:
${response.use}

## Credits:
${response.cred}

## License: ${response.lic}
Link: ${data[1]}
`;
}

module.exports = generateMarkdown, renderLicenseData;
