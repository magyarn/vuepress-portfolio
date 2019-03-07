---
  pageClass: project-page
  title: Making Aesthetic Designs Accessible
  tagline: The Balance Between Beautiful and Readable
  role: UX
  projectName: Gallery Tool
  projectSlug: gallery-tool
  sections: [
    {
      image: "gallery-tool/making-aesthetic-designs-accessible-1.png",
      imageAlt: "Before and after comparison of color palettes. Previous, the colors were all much brighter and provided less contrast against white text. Afterwards, once they were darkened, the contrast improved.",
      paragraphs: ["From tight development timelines to accessibility requirements, constraints are a regular part of any UX Designer's work. In this project, I mentored a UX Design intern, Xuenan Xu, while she worked to define the Gallery Tool's UI kit and color palette. After she completed a first pass, I worked to enhance her designs' accessibility by increasing its color contrast.",
      "My goal was to make the palette as accessible as possible without breaking the aesthetic of the original color scheme."
      ]
    },
    {
      image: "gallery-tool/making-aesthetic-designs-accessible-2.png",
      imageAlt: "A comparison of buttons with different background colors. The original button style provided the least contrast, the next three options get progressively darker but also start to stray further from the intended color palette/design system.",
      paragraphs: [
      "I started by exploring how the primary button color would appear if it were AAA compliant (minimum ratio of 7:1), and then AA compliant (minimum ratio of 4.25:1). Both of these options seemed to stray too far from the original design, so I identified a shade that stood somewhere between AA compliant and the initial color.",
      "I then applied a similar contrast value to the remainder of the UI components. As a result, the overall accessibility of the color scheme improved while still staying true to Xuenan's intent.",
      "In future iterations of this tool, I might consider adding a feature that would allow the user to use the tool in 'accessibility mode'. This mode would allow them to increase the contrast to AAA compliance. As a result, the site would be fully accessible to those who needed it, while still displaying with the original palette for anyone else."
      ]
    }
  ]
---

<ArticlePage :article="$page.frontmatter" />