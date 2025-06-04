const fs = require('fs');
const { translate } = require('@vitalets/google-translate-api');

async function translateMarkdown(input, output, from, to) {
  const content = fs.readFileSync(input, 'utf8');
  const result = await translate(content, { from, to });
  fs.writeFileSync(output, result.text, 'utf8');
}

if (require.main === module) {
  const [,, input, output, from = 'auto', to = 'en'] = process.argv;
  if (!input || !output) {
    console.error('Usage: node translate-markdown.js <input> <output> [from] [to]');
    process.exit(1);
  }
  translateMarkdown(input, output, from, to).catch(err => {
    console.error('Translation failed:', err.message);
    process.exit(1);
  });
}
