const {Router} = require('express')
const auth = require('../middleware/auth')
const Marriege = require('../models/user')
const router = Router()
const multer = require('multer')


router.get('/', auth, async (req, res) => {
    res.render('marriege', {
        title: 'Marriege',
        isMarriege: true,
        user: req.user.toObject()
    })
})



router.post('/', auth, async (req, res) => {
    try {
        const user = await Marriege.findById(req.user._id)

        const toChange = {
            name: req.body.name
        }

        if (req.file) {
            toChange.documents.uploads = req.file.path
        }
        console.log(user)
        console.log(toChange)
        Object.assign(user, toChange)
        await user.save()
        res.redirect('/marriage')
    } catch (e) {
        console.log(e)
    }
})

module.exports = router