module.exports = {
  title: "NM",
  themeConfig: {
    search: false,
    nav: [
      { text: 'Home', link: '/'},
      { text: 'My Work', items: [
        {text: 'Michigan Online', link: '/michigan-online/'},
        {text: 'Gallery Tool', link: '/gallery-tool/'},
        {text: 'Sleep Tracker', link: '/sleep-tracker/'}
      ]},
      { text: 'Blog', link: '/blog/' },
      { text: 'About', link: '/about/' }
    ]
  },
  editLinks: false,
}
