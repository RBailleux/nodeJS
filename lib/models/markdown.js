const fs = require('fs')
const md = require('markdown').markdown

class MyMarkdown {
	static read(fileName, callback) {
		fs.readFile(fileName, 'utf8', (err, data) => {
			if(err) {
				callback(err)
			}
			else{
				callback(undefined, md.toHTML(data))
			}
		})
	}
}

module.exports = MyMarkdown