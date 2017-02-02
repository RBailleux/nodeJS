const fs = require('fs')

class Jojo {
	static read(fileName, callback) {
		fs.read(fileName, (err, data) => {
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
				callback(undefined, res)
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