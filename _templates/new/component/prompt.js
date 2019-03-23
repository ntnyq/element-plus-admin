module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Name:',
    validate (value) {
      if (!value) {
        return 'Components must have a name.'
      }

      return true
    }
  },
  {
    type: 'multiselect',
    name: 'blocks',
    message: 'Blocks:',
    initial: ['script', 'template', 'style'],
    choices: [
      {
        name: 'script',
        message: '<script>',
      },
      {
        name: 'template',
        message: '<template>',
      },
      {
        name: 'style',
        message: '<style>',
      },
    ],
    validate (value) {
      if (!value.includes('script') && !value.includes('template')) {
        return 'Components require at least a <script> or <template> tag.'
      }
      return true
    }
  }
]
