# Contributing to DSA-Java

First of all, thanks for taking the time to contribute! This project can only grow and live by your countless contributions. To keep this project maintainable, we have developed some guidelines for our contributors.

Please note that by participating, you are expected to uphold the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md).

## Table of Content

- [Terms](#terms)
- [Lesson](#lesson)
- [Requesting A Lesson](#requesting-a-lesson)
- [Fixing Typos](#fixing-typos)
- [Improving Lesson](#improving-lesson)
- [Our Standards](#our-standards)
- [Communication](#communication)

---

## Lesson

The crux of this site is are the `lesson`. Provided are two examples. Each lesson needs a frontmatter path, order, and title. Generally you should make the path and the file name match for ease of finding it.

- In `Lesson` directory there are various sections. You can start contributing from there.
- Inside each of the sections `lesson` present in the form of markdown. If you wanted to add a new lesson make a new file with `.md` extension and add at the top it.

```yml

    ---
    path: "/pathName"
    title: "TitleName"
    order: "<Number><CapitalLetter>"
    section: "SectionName"
    description: "Learn DSA-Java"
    ---
```

- Modify this according to your contribution and go ahead
- For writing concepts, take a look at the other [lessons]('lesson/Learn-Programming-Language/operator.md') markdown and make sure it is written in a similar way.

## Terms

Here are some terms that we will use in this repo:

- `path` needs a leading slash. This will be slug of the lesson
- `title`- will be the title displayed on the `Table of Contents` and on the page itself
- `order`- the order of which the item should appear in the table of contents. should in `<Number><Capital-letter>` format where the number corresponds to the section itself and the letter corresponds to the order of the lesson inside the section, e.g. 3B means under the section 3 and the order of the lesson will be B(second)
- `section` - the title of the section that the article is in. Only the first lesson for each section will be used.
- `description` - a one-to-three sentence summary of the lesson. used for the meta tag for social shares and SEO. if no description is given, the siteMetadata.description for the site is used.
- `icon` the Font Awesome icon you want for the home page of the site

## Requesting A Lesson

for requesting a lesson simply raise a new issue in the `Issues` section.

- Search for other issues already requesting the lesson.
- If an issue doesn't exist, create an issue naming it `new lesson: <name-of-the-lesson>`
- provide description as mentioned in issue template.
- Please create separate issues for any concept or lesson that you want to add.

## Fixing Typos

for fixing typo just make a pull request with your fixes, naming it:

- `fixed typo: <name-of-the-lesson>`
- provide description as mentioned in pull request template.

## Improving lesson

for any improvement in the lesson raise a new issue in the <code>Issues</code> section, Naming it:

- `improvement: <name-of-the-lesson>`
- provide description as mentioned in issue template.
- also one thing to keep in mind, if you wanted to do improvement in the lesson, It should be clear and easy to understand.

## Our Standards

Before you submit your PR, please ensure that they meet the following standard:

- For writing the concept, take a look at the other [lessons]('lesson/Learn-Programming-Language/operator.md') markdown and make sure it is written in a similar way.
- Content inside the lesson should not be copied or plagarized from any other resources, you need to write your own content using your understanding about the concept.
- Code example should not copied from anywhere else, you should set example by your own.
- for adding images and gifs related to the lesson, make sure it is copyright free and not used for commercial purpose. but in case you don't find any image or gif on internet, you can use the [draw.io](draw.io) to make your own images. Images and gif used should be kept in `lesson/images/` directory.

## Communication

We are running a communication channel. You can go here to talk, discuss, and more with the maintainers and other people, too. Here's the invitation: [discord](#)
