import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    words: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Word' }],
})

const wordSchema = new mongoose.Schema({
    word: { type: String, required: true },
    pronouncing: String,
    translation: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    sex: String,
})

export const UserModel = mongoose.model('User', userSchema)

export const WordModel = mongoose.model('Word', wordSchema)
