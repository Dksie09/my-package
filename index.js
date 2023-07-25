#!/usr/bin/env node
// Function to log your details in the terminal
function logDetails() {
  const message = "Hey there! I'm Dakshi. Your friendly neighborhood coder!";
  const twitterLink = "https://twitter.com/duckwhocodes";
  const githubLink = "https://github.com/Dksie09";
  const linkedinLink = "https://linkedin.com/in/dakshi-goel";
  const youtubeLink = "https://youtube.com/@dksie3256";

  // Create a colorful box using ANSI escape codes
  const colorfulBox = `  \x1b[38;5;51m+---------------------------------------------------------------+
  |   \x1b[38;5;105m${message}\x1b[38;5;51m    |
  +---------------------------------------------------------------+
  | \x1b[38;5;93mTwitter:\x1b[0m \x1b[38;5;39m${twitterLink}                     \x1b[38;5;51m|
  | \x1b[38;5;93mGitHub:\x1b[0m  \x1b[38;5;39m${githubLink}                           \x1b[38;5;51m|
  | \x1b[38;5;93mLinkedIn:\x1b[0m \x1b[38;5;39m${linkedinLink}                 \x1b[38;5;51m|
  | \x1b[38;5;93mYouTube:\x1b[0m  \x1b[38;5;39m${youtubeLink}                      \x1b[38;5;51m|
  +----------------------------------------------------------------+\x1b[0m`;

  // Log the colorful box in the terminal
  console.log(colorfulBox);
}
console.log(`
                          ▄▀▄─────▄▀▄
                         ▄█░░▀▀▀▀▀░░█▄
                    ─▄▄──█░░░░░░░░░░░█──▄▄
                    █▄▄█─█░░▀░░┬░░▀░░█─█▄▄█
`);
// Call the function to log your details
logDetails();
