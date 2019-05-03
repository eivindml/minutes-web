const { json, send } = require('micro')
const url = require('url')
const sanityClient = require('@sanity/client')

// TODO: Refactor to env variables
const client = sanityClient({
  projectId: 'zs25h3xf',
  dataset: 'production',
  token: 'skd5ZyBEW9bbNQmVtn1BzZr1ZJa1QAc9hkGuVokiR4RRyok6nNNbdUuRBMDQWacBe8NMbbINPJ3k0xiBUkFunXSwe9YrdgJdTdjpRT3EbTeAbTneXQuADEb61ZSXNaxkZrym91Jstolj2UXvCRRY5Taa4VvajUxE9Bi3agzVKoNwLQcUkabY',
  useCdn: false
})

// TODO: Error handeling
// TODO: Don't create duplicate entries (hash)
module.exports = async (req, res) => {
  if (req.method === 'GET') {
    send(res, 200, 'Please use POST. :)')
  } else if (req.method === 'POST') {
    const { pathname } = url.parse(req.url)
    if (pathname === '/api/email') {
      const { email } = await json(req)

      const doc = {
        _type: 'subscriber',
        email: email
      }

      await client.create(doc)
      send(res, 200, 'Saved subscriber')
    } else {
      send(res, 200, 'Not a working route')
    }
  }
}
