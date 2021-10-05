# Basic REST API
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

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

Install the dependencies and devDependencies and start the server.

```sh
cd restapi
npm i
node index
```

