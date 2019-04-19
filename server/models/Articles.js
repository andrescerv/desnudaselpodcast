const mongoose = require('mongoose')

const { Schema } = mongoose

const ArticleSchema = new Schema({
    title: {
        type: String,
        required:true
    },
    body: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, { timestamps: true})

ArticleSchema.methods.toJSON = function() {
    return {
        _id: this._id,
        title: this.title,
        body: this.body,
        author: this.author,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt
    }
}

mongoose.model('Articles', ArticleSchema)