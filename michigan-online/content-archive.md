---
  project: Michigan Online
  projectUrl: /michigan-online/
  title: Content Archive
  headerImageUrl: "mo-final-product.png"
  meta:
    - id: mo-0
      title: The Problem
      text: ["The University of Michigan Office of Academic Innovation offers many different types of online learning experiences, one of which is the teach-out. Largely discussion-based and focused around a timely topic of public interest, teach-outs are designed to be entry-level in nature and short in duration (they're open for 2 - 3 weeks at most). Think of them more so as learning events, rather than traditional courses.", "Their transient lifespan means there's always something new to learn, which is exciting, but up until now it has almost meant the content was only accessible for a brief period. Once a teach-out ended, there was no way to view the videos and readings anymore.", "This became our goal: to make static teach-out content (videos, readings, and links) available for viewing even after the learning event concluded."]
    - id: mo-1
      title: The Solution
      text: ["Thus was born the idea of a content archive: a place that organized static teach-out text and videos in a meaningful, consumable way for learners who missed the original event."]
      finalProductLink: "https://online.umich.edu/catalog/138/lessons/introduction-epidemic-sleep-deprivation/"
    - id: mo-2
      title: Specifications
      text: ["Besides displaying the text and videos from the original teach-out, the content archive also needed to:"]
      specList: [
        "Be discoverable from a learning experience overview page",
        "Follow neutral, understandable naming conventions for its components",
        "Allow for connection to, and display of, additional resources or supplemental material (content that is related to the main teach-out material, but wasn't necessary enough to be included directly)",
        "Provide learning experience designers the ability to mix text and video on the same lesson page"
      ]
    - id: mo-3
      title: Comparative Analysis
      text: ["Before diving into any design work, I began by performing a brief comparative analysis to learn how other learning platforms present their content and what naming conventions they use. The platforms I looked at were Coursera, edX, and TreeHouse Learning."]
      platforms: [{
        name: "Coursera",
        imageURL: "coursera.png",
        imageALT: "List of text and video lessons in an example week module.",
        findings: ["Coursera breaks their content up for a given course in terms of \"sections.\" Then each section has a list of videos and readings.",
        'Coursera also presents just one type of content at a time, either a piece of text or a video; never both in one view.']
      },
      {
        name: "edX",
        imageURL: "edx.png",
        imageALT: "More simplistic syllabus breakdown, only showing submodule titles within each module. No links to learning content.",
        findings: ["When outling the content for a single course, edX's syllabus only offers a breakdown of \"modules\" by submodule. They don't display the most granular pieces of content just yet (videos and text).",
        "Once a learner starts a submodule, they only show text or video separately, similar to Coursera."
        ]
      },
      {
        name: "TreeHouse",
        imageURL: "treehouse.png",
        imageALT: "Six steps in an example unit, with a mix of videos and review slides as the steps.",
        findings: ["Interestingly, TreeHouse doesn't visibly subscribe to any naming
        convention for the way it groups modules together. It just has groups of steps.", "Content is also displayed in a one-at-a-time way: video by video."]
      }]
    - id: mo-4
      title: Initial Designs
      text: ["The goal at this point was to meet the technical requirements while staying within the established design system."]
      imagePaths: [
        "TO-Details.png",
        "TO-Archive.png",
        "TO-Archived-Content-Item.png",
        "TO-Additional-Resources.png",
      ]
    - id: mo-5
      title: Paper Prototype Testing
      text: ["With the initial designs complete, I was ready to get some user feedback. I did so with a group of 10 undergraduate students who each viewed a packet of the mockups printed on paper with five questions for each page:"]
      specList: [
        "What are your first impressions of this page?",
        "Is there anything confusing on this page?",
        "What do you like about this page, if anything?",
        "What do you dislike about this page, if anything?",
        "Is anything missing from this page that you'd expect to see?"
      ]
    - id: mo-6
      text: ["This round of user testing was a bit unique, as all 10 participants were going through the test at the same time (together, but independently). Along the way I encountered the following challenges: it was difficult to provide enough framing/context for participants, I realized I hadn’t made the mockups large enough so the text/page details were legible, it was hard to spot when they were confused and to provide help, and I didn’t have any opportunities to ask them clarifying questions during the process. While this was an interesting exercise, I came to the conclusion that one-on-one testing is best.", "Some of the main insights derived from these tests were:"]
      specList: [
        "Users most valued being able to see a teach-out’s instructors, reviews, and individual video lengths",
        "A good deal of additional framing text will be needed to help users better understand the purpose of each tab (the archive vs additional resources), as well as the subsections within each tab.",
        "Users seemed to expect the archived content to be entirely video-based. Many were confused why there was text both above and below the video. They didn’t understand the blog post/textbook-style layout I was aiming for."
      ]
      imageUrl: "mo-prototype-insight.png"
    - id: mo-7
      title: One-on-One Usability Testing
      text: ["After integrating user feedback from the previous paper prototype testing into the designs, I conducted one last round of usability tests. I led 5 one-on-one sessions, 30 minutes each, along with the help of one of our student fellows. In the tests, we asked users to complete 5 tasks to make sure they could find teach-outs within the site and locate lesson content within an archived teach-out. We also gathered their feedback on how all the pieces fit together.",
            "Our main insights were:"
        ]
      specList: ['Users expected an “All Teach-Outs” nav item',
        "Unlike the paper prototype participants, these users didn’t mind mixing text and video content in a lesson page (implying there was some context missing for the previous group)",
        'Users understood the tab names, but were confused by the “Completed” status designation.'
      ]
      imageUrl: "mo-usability-insight.png"
    - id: mo-8
      title: Final Designs
      text: ["Among the changes we made to the final designs based on the previous usability tests were:"]
      specList: [
        'Adding a nav item under “Teach-Outs” that goes to a filtered catalog view of all teach-outs. Eventually have a separate page for all teach-outs, similar to the Series/Courses page.',
        'Simplifying the “Archived Lessons” tab to just say “Lessons” and use the primary action button as the link to “Start” the content, rather than subscribe to updates',
        'Removing the mini menu that allowed people to jump between lessons on an individual lesson page, since no one saw/used it',
        'Display the number of lessons within a unit, not the number of readings/videos, as the unit tabs expanded to show lessons, not individual readings/videos'
      ]
    - id: mo-9
      title: Development
      text: ["With the designs solidified, I entered the implementation phase, during which I:"]
      specList: [
        'Created the URLs, views and templates for the three tabs. Restructured the templates so that the three tabs branched off of a learning experience base, which stems off of the main base template.',
        'Tried to recycle as many existing classes as possible, extend classes where possible',
        'Opted to build in the interactivity using vanilla JS and a bit of jquery instead of Vue, because we would have been passing in a lot of data, and all we’re doing in this case is toggling visibility and reordering DOM elements, most of which can be done by adding and removing classes.',
        'Identified points where I was repeating myself or had one function doing many different things, and pulled stuff apart/modularized it. I then added comments for clarification.',
        'Checked style appearance and feature behavior on Chrome, Safari, Firefox and Edge.'
      ]
      imageUrl: "mo-final-designs.png"

---

<PortfolioPost :post="$page.frontmatter" :sections="$page.frontmatter.meta"/>
