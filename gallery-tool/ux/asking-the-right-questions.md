---
  pageClass: project-page
  title: Asking the Right Questions
  tagline: A Look into My Problem Solving Process
  role: UX
  projectName: Gallery Tool
  projectSlug: gallery-tool
  sections: [
    {
      image: "gallery-tool/asking-the-right-questions-1.png",
      imageClass: "width-70",
      imageAlt: "I have a 4 part process in the beginning of a project: define the problem, explore the solution landscape, scope features, and plan for abstraction.",
      paragraphs: ["From stakeholder interviews to usability testing, being a great user experience designer involves asking a lot of questions. Below are a few questions I asked when starting the Gallery Tool project."]
    },
    {
      title: "1. What problem are we trying to solve?",
      paragraphs: [
        "This is arguably the most critical question to ask when starting any new project. Often times stakeholders come to early-stage meetings already fixated on a solution. Asking this question refocuses the conversation on the problem at hand without limiting the group to any preconceived solutions.",
        "In this case, the problem in need of solving was this: Online learning partner platforms like edX and Coursera don’t provide any low-stakes, unstructured mechanisms for learners to give and receive prrt feedback on their assignments. These platforms do offer features like discussion forums and peer-graded assessments, but neither of those suited the style of interaction other stakeholders (learning experience designers) were seeking. While discussion forums are visible to everyone in the class, they don’t allow learners to upload rich media, such as text documents, music files, or images. Peer-graded assessments do allow for rich media uploads, but each learner only ever sees 2-3 of their peers’ assignments at most."
      ]
    },
    {
      title: "2. Are there already existing solutions to this problem? How have others solved it?",
      paragraphs: [
        "These two questions are dual-purposed: they invite a comparative analysis of the solution landscape and sometimes also rule out the need to build something new, saving time, money and effort. In this case, however, any 3rd party gallery-like solutions resulted a worsened user experience for learners. And according to other stakeholders, no one had found a suitable in-platform work-around yet. It appears that building something from scratch was the best option."
      ]
    },
    {
      title: "3. Is there any additional functionality you’re seeking?",
      paragraphs: [
        "Now that the problem was clearly defined and the solution landscape exhausted, we began to have a conversation at the feature level. Through a collaborative discussion with my team, stakeholders shared their ideal tool as being capable of uploading assignments, making them viewable, sortable, filterable and searchable by users on various criteria, and an email notification system to alert users when someone commented on their work."
      ]
    },
    {
      title: "4. How do we make this usable across multiple courses/contexts?",
      paragraphs: [
        "This last question was one my team asked internally, not with stakeholders, as our goal is always to create online learning tools that can be utilized in any course our office builds. We identified the following elements of the tool that needed to be configurable for any given use/instance: course title, upload form field labels and help text, assignment type options, and broader category options.",
        "Armed with the answers to these questions, I confidently moved into the iterative design phase of the project."
      ]

    }
  ]
---

<ArticlePage :article="$page.frontmatter" />