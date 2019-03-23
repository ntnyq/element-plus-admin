module.exports = [
  {
    type: 'input',
    name: 'componentName',
    message: 'Component name:',
    validate (value) {
      if (!value) {
        return 'View component must have a name.'
      }
      return true
    }
  },
  {
    type: 'input',
    name: 'fileName',
    message: 'If custom the fileName'
  },
  {
    type: 'input',
    name: 'directory',
    message: 'If custom the target directory:'
  },
  {
    type: 'confirm',
    name: 'useStyle',
    message: 'Add <style> block?'
  }
]
