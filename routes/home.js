const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Главная страница',
    isHome: true
  })
})

router.get('/marriage', (req, res) => {
  res.render('marriage', {
    title: 'Главная страница',
    isMarriege: true
  })
})

module.exports = router