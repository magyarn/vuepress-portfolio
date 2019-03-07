---
  pageClass: project-page
  title: Taking A Style Guide-First Approach
  tagline: Experimenting with the Development Process
  role: Frontend Developer
  projectName: Gallery Tool
  projectSlug: gallery-tool
  sections: [
    {
      image: "gallery-tool/asking-the-right-questions-1.png",
      imageClass: "width-70",
      imageAlt: "I have a 4 part process in the beginning of a project: define the problem, explore the solution landscape, scope features, and plan for abstraction.",
      paragraphs: ["In my design work I often create a style guide to ensure proper uniformity across all pages of application. In this project, I experimented with taking a similar approach during the frontend development phase. I created a “living” style guide with HTML and CSS that included all UI components for the application. Doing so, I thought, might expedite the actual development process later on; since all I would have to do is copy/paste the components and their CSS would already be written.",
      "In many cases my hypothesis turned out to be true. Developing the frontend for the gallery tool did move along a bit faster, but not without a substantial amount of time first going into the style guide’s development.",
      "Overall, this experiment had mixed results. On the plus side, adding pages was fast and easy as long as they used pre-existing CSS and (sometimes) HTML. Having all colors and component styles specified in advance also helped reduce the number of redundant styles/classes in the code. However, I still had to make some modifications to the original style guide as I was going, which resulted in a bit of extra work: not only did I have to create the new style, but I also had to update the style guide to use the new class names or structure. This is more a reflection on using a hardcoded living style guide, though, since an auto-updating living style guide wouldn’t have the same issues."]
    }
  ]
---

<ArticlePage :article="$page.frontmatter" />