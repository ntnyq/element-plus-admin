module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Module name:',
    validate (value) {
      if (!value) {
        return 'Vuex modules must have a name.'
      }
      return true
    }
  }
]
