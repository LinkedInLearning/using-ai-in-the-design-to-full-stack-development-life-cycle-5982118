# Using AI in the Design to Full-Stack Development Life Cycle
This is the repository for the LinkedIn Learning course Using AI in the Design to Full-Stack Development Life Cycle. The full course is available from [LinkedIn Learning][lil-course-url].

![lil-thumbnail-url]

Learn how to use AI tools throughout the full stack web development process while building a full stack web application in this course with instructor Dakota Fabro. Dakota shows you how to build a full stack ecommerce platform that leverages AI at every stage of development, from design to deployment and maintenance. This e-commerce platform—in the form of a pet adoption website—includes AI-generated pet care instructions based on pet breed, a content management system, a responsive user interface, and real-time analytics.

Learning objectives
- Leverage AI to increase your efficiency and productivity as a developer.
- Recognize the different methods of leveraging AI tools in each stage of the design to development process.
- Build a pet adoption site using the AI tools leveraged throughout the dev process.

_See the README file in root for updated instructions and information._

## Instructions
This repository has branches for each of the chapters in the course. You can use the branch pop up menu in github to switch to a specific branch and take a look at the course at that stage, or you can add `/tree/BRANCH_NAME` to the URL to go to the branch you want to access.

Additionally, you can use 
```
git branch
git checkout [branch name]
```
to access each branch from your terminal.

## Branches
The branches are structured to correspond to the chapters in the course. The naming convention is `CHAPTER#_FEATURE#`. As an example, the branch named `02-frontend-dev` corresponds to the second chapter. 
 
The branches build on each other as you move through the course. The branches `main` and `02-frontend-dev` have starter code. The `06-final-code` branch holds the final state of the code when in the course.

When switching from one exercise files branch to the next after making changes to the files, you may get a message like this:

    error: Your local changes to the following files would be overwritten by checkout:        [files]
    Please commit your changes or stash them before you switch branches.
    Aborting

To resolve this issue:
	
    Add changes to git using this command: git add .
	Commit changes using this command: git commit -m "some message"

## Installing
1. To use these exercise files, you must have access to:
	- a GitHub account to use Codespaces (for browser-based remote development)
2. For local development on your machine, you will need `npm` and `Node`.
    - Clone this repository into your local machine using the terminal (Mac), CMD (Windows), or a GUI tool like SourceTree.

[0]: # (Replace these placeholder URLs with actual course URLs)

[lil-course-url]: https://www.linkedin.com/learning/
[lil-thumbnail-url]: http://

