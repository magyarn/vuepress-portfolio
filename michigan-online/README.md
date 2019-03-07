---
  pageClass: project-page
  title: Michigan Online
  description: "Your destination for online learning opportunities created by the University of Michigan"
  slug: "michigan-online"
  tags: ["About", "UX Design", "Vue JS", "Django", "Graphic Design", "UX Research"]
  client: University of Michigan Office of Academic Innovation
  duration: January 2018 - Present
  tools: [Sketch, Invision, HTML, LESS, Vue, Django]
  liveSiteText: Michigan Online
  liveSiteURL: "https://online.umich.edu"
  roles: [
    {
      title: "UX Designer",
      description: "As the lead UX Designer for the project since it began in 2018, I have helped tackle some of its biggest challenges, including: 2 redesigns, specific feature improvements, 
          and general information architecture.",
      articles: [
        {
          title: "Before and After, and After After",
          subtitle: "The Story of a Double Redesign",
          path: "./ux/before-and-after-and-after-after.html"
        },
        {
          title: "Where's My Free Stuff?",
          subtitle: "A Lesson in Simplicity",
          path: "./ux/wheres-my-free-stuff.html"
        },
        {
          title: "Intuitive Information Architecture",
          subtitle: "Discovering the Ideal Content Structure",
          path: "./ux/intuitive-information-architecture.html"
        }
      ]
    },
    {
      title: "Frontend Developer",
      description: "In addition to steering the project's user experience, I am also responsible for bringing designs to life on the frontend. I use a combination of Django's HTML templating system, LESS/CSS, and VueJS to make it happen.",
      articles: [
        {
          title: "My Journey with Django",
          subtitle: "Top Takeaways After 1 Year as a Developer",
          path: "./frontend-developer/my-journey-with-django.html"
        },
        {
          title: "Getting CSS Under Control",
          subtitle: "My Ideal File Structure",
          path: "./frontend-developer/getting-css-under-control.html"
        },
        {
          title: "Working with Vue JS",
          subtitle: "Where, Why and How I Did It",
          path: "./frontend-developer/working-with-vuejs.html"
        }
      ]
    },
    {
      title: "Visual Designer",
      description: "I am also the primary visual designer for the site and have made choices
           on everything from color palette and typography to illustration styles.",
      articles: [
        {
          title: "Choices, Choices, Choices",
          subtitle: "Selecting Color Palette and Typography",
          path: "./visual-designer/choices-choices-choices.html"
        },
        {
          title: "An Illustrative Touch",
          subtitle: "How I Developed Michigan Online's Illustrations",
          path: "./visual-designer/an-illustrative-touch.html"
        },
      ]
    },
    {
      title: "UX Researcher",
      description: "While I am most passtionate about design and frontend development, I am a strong advocate for informing my work based on good user research. I have done so by performing comparative analyses, conducting surveys, and facilitating usability tests.",
      articles: [
        {
          title: "Sizing Up the Competition",
          subtitle: "Comparative Analysis Observations",
          path: "./ux-researcher/sizing-up-the-competition.html"
        },
        {
          title: "And the Winner Is...",
          subtitle: "Using Surveys to Inform Design",
          path: "./ux-researcher/and-the-winner-is.html"
        },
        {
          title: "What Are You Thinking?",
          subtitle: "Stories from Usability Testing",
          path: "./ux-researcher/what-are-you-thinking.html"
        }
      ]
    }
  ]
---

<ProjectPage :project="$page.frontmatter" />
