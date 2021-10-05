# Basic REST API

## How to use?
### You can try it using Postman or Insomnia\

## Using Method GET

| endpoint | definition |
| ------ | ------ |
| / | displays main content |
| /api/words | gets all words in collection |
| /api/words/quantity/:word | gets quantity of a specific word in collection |
| /api/words/unique | gets all unique words in collection |

## Using Method POST
| endpoint | definition |
| ------ | ------ |
| /api/words | creates and adds new word to collection |

the word is read from the body

## Using Method DELETE
| endpoint | definition |
| ------ | ------ |
| /api/words/:id | deletes word with given id |
