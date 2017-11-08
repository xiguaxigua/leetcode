const fs = require('fs');
const path = require('path');
const list = require('./list');
const utils = require('./utils');
const { getTitle, getItemContent } = utils;
let result = '## leetcode 题解（JS版）';

list.forEach(({ title, children }) => {
  result += getTitle(title);

  children.forEach(({ title: subTitle, id, question, answer }) => {
    const filePath = path.resolve(__dirname, `../answers/${answer}.js`);
    const text = fs.readFileSync(filePath, 'utf8');
    let content = '\n'
    content += `[question](${question})`
    content += '\n'
    content += text.match(/#describe(\w|\W)+#describe/gm)[0].replace(/#describe|\W\*\W/gm, '').replace(/\n/g, '\n\n')
    content += '\n'
    content += `[answer](${`./answers/${answer}.js`})`
    content += '\n'
    const code = text.match(/\/\* answer \*\/(\w|\W)+\/\* answer \*\//gm)[0].replace(/\/\* answer \*\//gm, '')
    result += getItemContent({
      subTitle: `${id} ${subTitle}`,
      content,
      code
    })
  })
})

fs.writeFile(path.resolve(__dirname, `../README.md`), result, err => { console.log(err) })
