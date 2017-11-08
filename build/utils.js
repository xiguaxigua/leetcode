function getTitle (s) {
  return `\n\n### ${s}\n-----\n\n`
}

function getItemContent ({ subTitle, content, code }) {
  return [
    '<details>',
    '<summary>',
    subTitle,
    '</summary>',
    content,
    '\n```js',
    code,
    '```\n',
    '<details>\n'
  ].join('\n')
}

module.exports = { getTitle, getItemContent }
