const fs = require('fs')

class Jojo {
	static read(fileName, callback) {
		fs.readFile(fileName, (err, data) => {
			if(err) {
				callback(err)
			}
			else{
				var json
				try{
					json = JSON.parse(data)
				}
				catch (err){
					callback(err)
				}
				var person = new Jojo(json)
				callback(undefined, person)
			}
		})
	}
	
	constructor (attributes = {}) {
		this.given = attributes.given
		this.family = attributes.family
	}
	
	fullName (){
		return this.given + ' ' + this.family
	}
}

module.exports = Jojo