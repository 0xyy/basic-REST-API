# Basic REST API using Express.js
## (in the future it will be expanded with a database)
[![Build Status](https://github.com/0xyy/basic-REST-API)

## How to use?
### You can try it using Postman or Insomnia

<p>&nbsp;</p>

## Using Method GET

| endpoint | definition |
| ------ | ------ |
| / | displays main content |
| /api/words | gets all words in collection |
| /api/words/quantity/:word | gets quantity of a specific word in collection |
| /api/words/unique | gets all unique words in collection |

<p>&nbsp;</p>

## Using Method POST
| endpoint | definition |
| ------ | ------ |
| /api/words | creates and adds new word to collection |

the word is read from the body

<p>&nbsp;</p>

## Using Method DELETE
| endpoint | definition |
| ------ | ------ |
| /api/words/:id | deletes word with given id |

<p>&nbsp;</p>

## Install the dependencies and devDependencies and start the server.

```sh
cd restapi
npm i
node index
```
or use nodemon (if you have it installed)
```
nodemon index
```


## License

MIT
