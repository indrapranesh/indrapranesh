const md = require("markdown-it")({
  html: true,
  linkify: true,
  breaks: true,
});
const mdEmoji = require("markdown-it-emoji");
const fs = require("fs");

md.use(mdEmoji);

const BLOG_HOST = `https://pranesh.dev/`;

/* README Sections */
const introTitle = generateTitle(
  2,
  `Hey :wave:, I'm ${generateLink("Pranesh", "https://pranesh.dev/")}`
);
const introDescription = `I'm currently a software engineer at **${generateLink(
  "End Point Dev",
  "https://endpointdev.com/"
)}**  based in 🌁 New York. 
🌱 Currently nurturing my coding skills. Always learning, always evolving.`;

const funfact = `Ctrl+S: Because my best code is still the one I didn't write. 💡🚀`;

const factsTitle = generateTitle(2, `:zap: A Few Quick Facts`);
const factsConfigs = [
    `🧐 Learning about **GraphQL**, **frontend design systems**, and a bit of **AI**.`,
    `👨‍💻 Most of my projects are available on [Github](https://github.com/Spiderpig86).`,
    `📝 I ~~regulary~~ am planning to write articles on [my blog](${BLOG_HOST}).`,
    `💬 Ping me about **react, JavaScript, frontend**.`,
    `🎉 Fun Fact: I can name all the capitals of the world, but I can't remember where I left my keys five minutes ago. 🗺️🔑`
  ];
const facts = factsConfigs.reduce(
  (result, fact) => result + `\n - ${fact}`,
  ""
);

const toolsTitle = generateTitle(2, `:rocket: Some Tools I Use`);
const toolsIconSize = 25;
const toolsConfig = [
  { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg', alt: 'React' },
  { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg', alt: 'JavaScript' },
  { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg', alt: 'TypeScript' },
  { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/webpack/webpack-original.svg', alt: 'Webpack' },
  { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg', alt: 'Tailwind CSS' },
  { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', alt: 'AWS' },
  { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', alt: 'Python' },
  { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg', alt: 'Node.js' },
  { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg', alt: 'PostgreSQL' },
  { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg', alt: 'Ruby on Rails' },
  { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg', alt: 'Linux' }
];
const tools = toolsConfig.reduce(
  (result, toolConfig) =>
    result + "\n" + generateIcon(toolConfig, toolsIconSize),
  ""
);

const stats = `<img src="https://github-readme-stats.vercel.app/api?username=indrapranesh&show_icons=true&count_private=true" alt="indrapranesh" />`;

const visitors = `[![HitCount](https://hits.dwyl.com/indrapranesh/indrapranesh.svg?style=flat)](http://hits.dwyl.com/indrapranesh/indrapranesh)`;

(async () => {

const content = `${introTitle}\n
${introDescription}\n
${funfact}\n
${factsTitle}\n
${facts}\n
<a target="_blank" href="${BLOG_HOST}">Read More</a>\n
${toolsTitle}\n
<p align="left">\n
    ${tools}\n
</p>\n
${stats}\n
${visitors}
`;

  const markdownContent = md.render(content);

  fs.writeFile("README.md", markdownContent, (err) => {
    if (err) {
      return console.error(err);
    }
    console.info(`Writing to README.md`);
  });
})();

function generateIcon(iconConfig, toolsIconSize) {
  return `<img src="${iconConfig.src}" alt="${iconConfig.alt}" width="${toolsIconSize}" height="${toolsIconSize}" />`;
}

function generateTitle(size, title) {
  return `${"#".repeat(size)} ${title}`;
}

function generateLink(label, link) {
  return `[${label}](${link})`;
}
