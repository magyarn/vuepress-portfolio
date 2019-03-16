---
  pageClass: project-page
  prev: false
  next: false
  title: Sleep Tracker
  description: Track your sleep habits to become healthier and more well-rested.
  slug: sleep-tracker
  client: University of Michigan Office of Academic Innovation
  duration: February 2018 - March 2018
  tools: ["Sketch, HTML, SCSS, Vue"]
  liveSiteText: Sleep Tracker
  liveSiteURL: "https://sleeptracker.ai.umich.edu/"
  roles: [
    {
      title: "UX Designer",
      description: "During this project I oversaw the UX design process while giving a UX intern the opportunity to come up with the style guide and preliminary mockups herself. I participated in stakeholder meetings in the requirements-gathering stage, provided feedback on the mock-ups in regard to accessibility, and assisted with incorporating usability test feedback.",
      articles: [
        {
          title: "Asking the Right Questions",
          subtitle: "A Look into My Problem-Solving Process",
          path: "./ux/asking-the-right-questions.html"
        },
        {
          title: "Making Aesthetic Designs Accessible",
          subtitle: "The Balance Between Beauty and Readability",
          path: "./ux/making-aesthetic-designs-accessible.html"
        }
      ]
    },
    {
      title: "Frontend Developer",
      description: "On this project I acted as the lone frontend developer. I took the final designs that my UX intern prepared and brought them to life with HTML, CSS, Vue.js, and Django templates.",
      articles: [
        {
          title: "Taking a Style Guide-First Approach",
          subtitle: "Experimenting with the Development Process",
          path: "./frontend-developer/taking-a-style-guide-first-approach.html"
        }
      ]
    }
  ]
---

<ProjectPage :project="$page.frontmatter" />

