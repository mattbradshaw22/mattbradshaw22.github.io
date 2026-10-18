
# Matthias Bradshaw | Computer Science ePortfolio

**Southern New Hampshire University — CS-499 Computer Science Capstone**
---

Welcome to my computer science ePortfolio. This portfolio documents my growth throughout SNHU's Bachelor of Science in Computer Science program, culminating in my transformation of an introductory Java rescue-animal terminal application from one of my first courses into a fullstack Animal Rescue Management System using all of the knowledge I have gained. It includes my professional self assessment, initial code review, original artifact, and enhancement through the three categories of software design and engineering, algorithms and data structures, and databases.


## Contents

1. [Professional Self-Assessment](#professional-self-assessment)
2. [Informal Code Review](#informal-code-review)
3. [Original Artifact and Project Overview](#original-artifact-and-project-overview)
4. [Enhancement One: Software Design and Engineering](#enhancement-one-software-design-and-engineering)
5. [Enhancement Two: Algorithms and Data Structures](#enhancement-two-algorithms-and-data-structures)
6. [Enhancement Three: Databases](#enhancement-three-databases)

---

# Professional Self-Assessment

  My computer science education at Southern New Hampshire University has changed the way I approach technical problems and my expectations for my professional future. Before pursuing the degree, I was interested in computers and enjoyed understanding how technology worked, but I did not have a clearly defined software development career path. My professional background is in municipal public works and has involved operating equipment, coordinating daily work, training and working closely with co-workers, and solving practical problems in the field. Those experiences taught me to weigh reliability, safety, efficiency, and the needs of the people who depend on a system. My coursework throughout my time at SNHU builds upon those skills in different manners and has allowed me to learn a new set of skills as well. I hope to put these new skills to good use by working on personal projects for myself and pivoting to a new career in software development.

  When I began my journey at SNHU, I had no prior coding experience. Even the basics of scripting in Python were new and challenging, and I had little understanding of development tools such as Git and GitHub. Since then, I have developed a strong foundation in computer science through hands on experience with programming languages including Python, C++, Java, JavaScript, and TypeScript. Throughout my coursework, I have gained experience in object oriented programming, data structures and algorithms, software design, and fullstack application development.

  I have learned to build applications using frameworks and technologies such as Angular, Express, and Node.js, while working with both SQL and NoSQL databases, including MongoDB. My projects have given me practical experience developing RESTful APIs, integrating frontend and backend systems, implementing authentication and authorization, and performing CRUD operations. I have also developed skills in unit testing, debugging, input validation, and secure coding practices, including using OWASP guidelines to identify potential vulnerabilities. Beyond writing code, I have become comfortable using Git and GitHub for version control and branch management, as well as Docker for containerization.

  My coursework has also strengthened my understanding of software engineering principles, including object oriented design, algorithm efficiency and Big-O notation, database modeling, and the software development life cycle. More importantly, I have learned how these concepts work together to create complete applications. Looking back at where I started, one of my greatest accomplishments is not simply learning new programming languages or technologies but developing the confidence and problem solving skills to approach unfamiliar challenges, research potential solutions, and independently design, build, test, and improve software.
  
  I'm used to working hand in hand with co-workers on a project where everyone has a role, and that's not so different to aspects related to developing code within a team of developers for an overall project goal. In my time at SNHU I saw firsthand what that would be like when working on my CS 310 jukebox application project with my fellow classmates. We used a collaborative environment with bitbucket to host a shared repository and developed a program using different branches, completing peer reviews and merges to create a final product that everyone had a hand in. This taught me valuable lessons in merge conflicts and effective communication with peers throughout the development life cycle.
  
  I've also learned a great deal about the software development life cycle at SNHU, specifically Agile development and the importance of working through smaller, iterative stages, completing goals one step at a time while laying the foundation for future development. This process is beneficial in several ways, as it allows larger goals to be broken down into manageable tasks and the workload to be distributed across a team. Beyond making complex projects more manageable, this approach also provides opportunities to evaluate how individual components work together, identify potential issues early, and ensure that each stage of development aligns with the overall project requirements. It also allows developers to incorporate feedback and make adjustments throughout the process rather than waiting until the project is complete. I applied this approach throughout my CS-499 capstone by building upon the same artifact across three enhancements, beginning with the software design, followed by algorithms and data structures, and finally database integration and authentication. Each enhancement built upon the previous work, allowing me to address challenges as they arose while gradually developing a more complete and functional application.

  To showcase my progress during my degree program at SNHU I've included an original artifact from one of my first courses in the computer science program. I took a project I worked on in IT 145 that was a terminal application for an animal rescue management system and enhanced it through three major categories of Software Design and Engineering, Algorithms and Data Structures, and Databases by turning it into a fullstack web application using the MEAN stack to showcase how far I have come. In the sections that follow you can read about the enhancements across each category, as well as watch the code review where I discuss the original artifact and my plans for enhancements.
  
---
# Informal Code Review

  You can check out my [code review](https://youtu.be/GWwUaSfZF6c) video on YouTube and see the analysis of the original artifact and the discussion about the planned enhancements. The main goals of the code review were to examine the existing functionality of the artifact, analyze the code for structure, inefficiencies, and documentation as well as discuss planned enhancements.

---
# Original Artifact and Project Overview

  The artifact I selected for my CS 499 capstone was the [Animal Rescue System]([url](https://github.com/mattbradshaw22/IT-145) I originally developed in IT 145 Foundation in Application Development. This was one of my earliest programming projects at SNHU, making it an ideal choice to demonstrate how much my technical knowledge and software development skills have progressed throughout the Computer Science program.
  
  The original application was written in Java and operated entirely through a console based interface. It was designed to manage rescue animals, specifically dogs and monkeys, by allowing users to intake new animals, display lists of available animals, and reserve animals for service. The application used object oriented programming principles, including classes, inheritance, and collections, to organize animal information and manage the different operations.
  
  Although the original project accomplished its intended goals, it had several limitations. Animal records were stored in memory rather than in a persistent database, the interface was limited to console interaction, and the reservation functionality selected the first matching available animal without considering factors such as geographic proximity. The application also lacked user accounts, authentication, and an API that could support access from other systems.
  
  I chose to enhance this project across all three categories of my CS 499 capstone: Software Design and Engineering, Algorithms and Data Structures, and Databases. My goal was to transform a relatively simple Java application into a fullstack Animal Rescue Management System that would be more accessible, functional, and representative of modern software development practices.
  
  The enhanced application incorporates Angular, Express, Node.js, and MongoDB to provide an interactive web interface, persistent data storage, and RESTful API communication. Users can search for animals by name or geographic proximity, while registered users can log in and submit new animals through an intake form. The project demonstrates not only the technical skills I have developed at SNHU but also my ability to evaluate an existing solution, identify opportunities for improvement, and implement those improvements through iterative development.

---
# Enhancement One: Software Design and Engineering

  For my first enhancement, I focused on software design and engineering by converting the original Java console application into a fullstack web application. This was a significant change in the project's architecture, moving from a program that operated entirely through the terminal to one that users could access and interact with through a web browser.

  I used Express and Node.js to establish the backend web application and created pages for the homepage, animal listings, and information about the rescue system. I also incorporated Angular components for more interactive functionality, including the animal intake and search pages. One of my main design goals was to maintain a consistent user experience throughout the application while keeping the code organized and reusable.

  One of the biggest challenges I encountered was integrating the Angular single page application into the existing Express website. Rather than recreating the navigation bar, header, and footer separately for Angular, I wanted the Angular components to display within the Express page structure. This required me to learn more about routing, frontend integration, and how the two frameworks could work together without unnecessarily duplicating code.
I also developed an animal intake form with input validation to help ensure that submitted information followed the expected data structure. This was important preparation for the database integration I planned to complete in later enhancements. By considering the requirements of future functionality early in development, I was able to establish a foundation that could support additional features without completely redesigning the application.
  
  This enhancement demonstrated my understanding of software architecture, frontend and backend development, component based design, and iterative problem solving. I also used GitHub branches to organize my development work, which allowed me to implement and review changes in smaller stages. Overall, the first enhancement established the foundation for the remaining portions of my capstone and demonstrated my ability to take an existing application and redesign it using technologies and practices I learned throughout the Computer Science program.

---
# Enhancement Two: Algorithms and Data Structures

  For my second enhancement, I focused on algorithms and data structures by improving how users could search for and identify suitable rescue animals. In the original Java application, the reservation functionality simply searched through the animal collection until it found the first matching animal that was not already reserved. While this approach worked for the original requirements, it did not consider whether an animal was geographically close to the user or provide a way to compare multiple possible matches.
  
  I enhanced the application by implementing a “search by name” feature and a nearby animal search that uses geographic coordinates to determine the distance between a user's location and the animals stored in the database. I also added functionality to display a randomly selected animal on the homepage. The nearby search required several steps. First, I used the JavaScript zipcodes package to convert a user entered ZIP code into latitude and longitude coordinates. I then applied the Haversine formula to calculate the distance between those coordinates and each animal's recorded location. The application filters out reserved animals, assigns each remaining animal a proximity ranking based on its calculated distance, and sorts the results so that the closest and most relevant animals appear first.
  
  One of the most valuable aspects of this enhancement was evaluating the algorithm's time complexity and understanding the trade offs involved. Filtering and calculating distances across the animal collection each require linear processing, or O(n), while sorting the results introduces an O(n log n) component in the average case analysis. Although this process requires more computation than the original linear search for the first available animal, it provides significantly more useful information and gives users greater flexibility when selecting an animal. 
  
  I also gained experience working with arrays of objects, filtering and mapping data, sorting with comparison functions, and researching mathematical solutions to real world programming problems. The Haversine formula was particularly interesting because it allowed me to apply mathematical principles to a practical feature that improves the user experience.
  
  This enhancement strengthened my understanding of algorithm design, data structures, computational complexity, and evaluating trade offs between performance and functionality. More importantly, it demonstrated how applying appropriate algorithms can transform basic application functionality into a more useful and meaningful solution.

---
# Enhancement Three: Databases

  For my third enhancement, I focused on database integration and expanding the application's ability to store, retrieve, and manage information. The original IT 145 application relied on in-memory collections to store animal records, which limited its ability to retain information between sessions or support a larger web based system.

  I replaced this approach with MongoDB, a NoSQL document database, and connected it to the Express backend using Mongoose. I designed schemas to represent rescue animal information, including an animal's name, type, age, weight, gender, acquisition location, service status, and reservation status. Additional fields accommodate information specific to dogs and monkeys. This structure allowed the application to store animal records persistently while maintaining consistency in the information submitted through the intake form.

  I also implemented RESTful API endpoints that allow the Angular frontend to communicate with the Express backend and MongoDB database. The animal intake form now submits information through an API request, allowing new animal records to be created in MongoDB. The search functionality also retrieves animal information through the API rather than relying on the hard coded data structures used in the original application.

  Another major component of this enhancement was implementing user registration and authentication. I created functionality for users to register accounts, log in, and receive JSON Web Tokens (JWTs) to authenticate subsequent requests. I also implemented route protection so that users attempting to access the intake page without being logged in are redirected to the login page.

  One important lesson I learned during this enhancement was the distinction between authentication and authorization. Authentication verifies a user's identity, but it does not necessarily determine which actions that user should be permitted to perform. The application now includes registration, login, and authentication-based protection for animal intake. I wanted to leave the registration available for all users to be able to interact with the intake page and database to showcase the skills more readily.

  This enhancement also helped me understand how closely connected the database is to the rest of a fullstack application. Decisions about database schemas affect frontend forms, API requests, validation, and the information returned to users. Implementing these features required me to consider how data flows between multiple components and how errors or inconsistencies in one layer could affect the entire system.

  Overall, this enhancement demonstrated my ability to design and integrate a persistent database, implement API communication, develop data models, and incorporate authentication into a full stack application. Combined with the previous enhancements, it transformed the original console based Animal Rescue System into a substantially more complete application that demonstrates the knowledge and practical skills I have gained throughout my education at SNHU.

---

You can check out the Repository of the final product on [my Github page](https://github.com/mattbradshaw22/CS-499-project) or the the web application may be hosted live at [matthiasbradshaw.com](https://matthiasbradshaw.com) through a VS Code dev tunnel. 
