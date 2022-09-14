const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	fs.writeFile(fileName, fileContent)
}
const myFileReader = async (fileName) => {
	const data = fs.readFile(fileName, "utf-8", (err, data) => {
		if (err) {
			return err;
		}
		return data
	})
	data.then((fileData) => {
		console.log(fileData)
	})
}
const myFileUpdater = async (fileName, fileContent) => {
	fs.appendFile(fileName, fileContent)
}
const myFileDeleter = async (fileName) => {
	fs.unlink(fileName)
}

myFileWriter("File.txt", "Hello")
// myFileReader("File.txt")
// myFileUpdater("File.txt", " World")
// myFileDeleter("File.txt")
// module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }