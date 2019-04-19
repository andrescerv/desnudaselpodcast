// server/routes/api/articles.js
const mongoose = require('mongoose')
const router = require('express').Router()
const Articles = mongoose.model('Articles')

router.post('/', (req, res, next) => { // posts new article
    const { body } = req;

    const finalArticle = new Articles(body)
    return finalArticle.save()
        .then(() => res.json({ article: finalArticle.toJSON() }))
        .catch((err) => res.status(400).json({message: err.message}))
})

router.get('/', (req, res, next) => { // returns all articles
    return Articles.find()
        .sort({ createdAt: 'descending' })
        .then((articles) => res.json({ articles: articles.map(article => article.toJSON()) }))
        .catch((err) => res.status(404).json({message: err.message}))
})

router.param('id', (req, res, next, id) => {
    return Articles.findById(id, (err, article) => {
        if(err) {
            return res.sendStatus(404)
        } else if(article) {
            req.article = article
            return next()
        }
    }).catch(next)
})

router.get('/:id', (req, res, next) => {
    return res.json({
        article: req.article.toJSON()
    })
})

router.patch('/:id', (req, res, next) => { // what is .patch?
    const { body } = req

    if(typeof body.title !== 'undefined') {
        req.article.title = body.title
    }

    if(typeof body.author !== 'undefined') {
        req.article.title = body.author
    }

    if(typeof body.body !== 'undefined') {
        req.article.title = body.body
    }

    return req.article.save()
        .then(() => res.json({ article: req.article.toJSON() }))
        .catch(next)
})

router.delete('/:id', (req, res, next) => {
    return Articles.findByIdAndRemove(req.article._id)
    .then(() => res.sendStatus(200))
    .catch(next)
})

module.exports = router