---
title: 'A Timeline of my personal and professional life:'
description: 'About me'
pubDate: 'March 10 2025'
heroImage: '/IMG_3383.jpg'
---


##### 1996 : 2008 (San Francisco, 1st to 6th grade)
- French International Elementary and Middle School, Video Games, Science Class.

##### 2008 : 2010 (New York City, 6th to 9th grade)
- Animation, The Adobe Creative Suite.
- Youtube Content Creation, Rubik's Cubes.

##### 2010 : 2014 (New York City, 9th to 12th grade)
- Astronomy, Astrophotography, Physics, Research at the Museum of natural history.
- Learning to Code, Hardware(Raspberry Pi, Arduino, Adafruit).

##### 2014 : 2018 (Rensselaer Polytechnic Institute, B.S. in Computer Science)
- Computer Science Degree, Front-end, Data Visualization.
- Machine Learning, Recommendation Systems.
- Internships, Open Source Software.

##### 2018 : 2022 (Boston, MA, 4 years at Wayfair)
- Rock climbing(indoors, outdoors, bouldering, sport, multipitch).
- carpentry(small, and medium scale).
- traveling, the great outdoors, living on my own.

##### 2022 : 2025 (Boston, MA -> New York City, NY)
- Product managment, mentorship, design, organizational structures at big corporations. 
- Travel (France, Italy, Hungary, Slovakia, Ukraine, Poland, Japan, Taiwan, China, Vietnam, Australia).

##### 2025 - onwards (New York City, NY)
- Writing(This Blog), Reading(Book Club).
- Leveraging AI to learn and create projects.
<br>
<br>
<br>

<div style="text-align: center">
<h3>Work history</h3>
</div>

What I did, what I learned, how I grew. Not all work, projects and responsibilities made it to the final cut. Here are the key ones that led to growth.

#### Wayfair (1st year):
##### Purchasability Team & Legal Team

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Purchasability team maintained tools to determine if a product could be purchased by a customer on the website. If a product wasn't purchasable, but should be, we were losing money - our tools would notify, and rectify that. We would also identify legal and compliance hurdles to products and hold to avoid fines.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;From a technical standpoint, we maintained daily, hourly, minutely background jobs to change product's purchasability states and full stack interfaces for business analysts to rectify said issues and to create rules representing legal and compliance realities.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The code was mostly PHP, JS(mix of frameworks), and C# dotnet services. I learned a lot about delivering code in a timely way, observability, and how big companies organize data pipelines.

Techs: (PHP, SQL, C#, datadog, javascript)

#### Wayfair (2nd year):
##### Legal Team & Scalabilty Team 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My second year at wayfair, the purchasability tools were sent to the berlin engineering organization, and the legal team expanded in scope. I stayed on the team and delivered a massive performance refactor of the banned phrase job. This was the job that combed through 10s of billions of db rows for "banned phrases" that we did not want on our website. It was critical to both avoiding negative customer experiences, and potential regulatory suits.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This was a daily job, and kept running longer and longer with the size of the database. There was one day where it was reaching 46 hours runtime, and a 50% failure rate. I faced the challenge and volunteered a plan to convert the main algorithm from a naive regex rule list to a more elegant prefix trie scanner (with a few other tricks to get more coverage). 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Since it was legacy code, it took a few months to implement and validate that the new version worked the exact same as the old one, while updating both with feature adds in parallel. Integration tests, unit tests and a checksum algorithm on parallel runs were used to validate that.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The key takeaways from this project were how to summarize an algorithmic improvement to a non-technical PM. How to get buy in for multiple months of work with only one year of experience and so many team priorities. Finally, I learned to take a win: even if continuing to improve the project was fun for me, 90% of the benefits had already been achieved, and that extra 10% was now relatively less important. I want to thank PM Kieu Ngo for having faith in my ability to deliver and allocating the story point budget for it.

Techs: (PHP, SQL, C#)

#### Wayfair (3 - 4th year):
##### Scalabilty Team

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The scalability team was born due to a necessity to speed up product retrieval speed on the wayfair website, and cut down on arbitrary uniquness of queries by teams on the front end, by merging all requests from the front end to a single graphql endpoint. 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The status quo was ad hoc product queries direct to db in PHP or through a major SOLR service, which was having difficulties scaling.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To solve this, the team built up a service comprised of fetchers that pulled from redis and aerospike, and workers that would replenish/destale that data from mssql. Nur Sheikh was the brilliant mind behind desiging this system, and Wayfair can't thank him enough for it. The team would also rewrite legacy background processes within the org to be scalable with k8s. It was the largest scalable system I'd ever worked on, which had over 500 kubernetes nodes, 6 regions, 1 billion daily requests, and 50+ internal services requesting data.

<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A key project I did was to enable service mesh to the product-cache-api, to give us high level features like authentication, authorization, metrics and canary deploys. Communicating these high level changes like (auth/authz) to our 60+ clients was challenging. 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The classic authentication problem was in full display with our use case: we wanted to implement full authentication, without potentially shutting out people who hadn't set up authentication. But how do you know who to contact if they haven't yet authenticated? Every company that gets big deals with a problem similar to this.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My solution was to rewrite a custom piece of canary deploy code (based in kubernetes) to roll out authentication to a subset of incoming requests. This would ensure that we could graph adoption over a 24 hour period and slowly roll it out to full, with a trigger that would automatically revert the canary deploy if a certain percentage of requests had 403s, avoiding human involved pagerduties and sevs.

Techs: (SQL, C#, grafana, kubernetes)


#### Wayfair (last 6 months):
##### Scalability Team & GCP Migration Tiger Team & SKU generation Team

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The last 6 months at wayfair was marked by many reogranizations & layoffs due to the business losing out on pandemic revenues. This put a damper on new projects and made it harder to get things done.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I worked on a tiger team that moved all the on-prem services within the catalog organization to GCP, and got to work with a slew of services and teams and new coworkers.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I then ended up in the product generation team, tasked with converting the existing sku-generation service to dotnetcore distributed service. It was nice working on that team but I realized I wanted to explore new opportunities elsewhere 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The biggest take away of the 4th year was that I needed to take charge of my destiny and move on to better opportunities. To anyone reading this, don't let fear or complacency drive your decision making. Not making a choice is a choice, and its ok to leave a job without another lined up. 

Techs: (SQL, C#, kubernetes, GCP, PHP)

#### First Sabbatical. Between Wayfair and Capital One.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I quit my job in april of 2022 to enjoy my youth. I went rock climbing in new hampshire for 3 months, and achieved a lifelong goal of climbing a 5.13 outdoors, I then went traveling in Europe, then came back to climb in the fall, and went to Mexico to climb for a few weeks before starting my new position at Capital One. It was a very fun and free part of my life and would recommend doing that to everyone. 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It's important to take time away from work to reflect on one's priorities, beliefs, life goals, hobbies, relationships, within that silence away from the grind. It made me more certain in my career path because even though I was no longer bound to it, I chose to go back. 



#### Capital One (1st year):
##### Privacy Data Team

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Privacy Data team was responsible with downloading, modifying, and deleting all data for customers who request it. It was formed in response to the CCPA/CPRA California regulations. Manual reviewers would approve the packets for release back to the customer.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I joined Capital One as a Senior Software Engineer, and was given responsibility to design, implement and delegate multi-month projects. Projects included reducing the man hours required of the manual reviewers to approve a packet; eliminating legacy processes that drew time from engineers, PMs and management; adding support for composite datasets; speeding up the process of onboarding new datasets to the data package.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At Capital One, I got good at prioritization, saying no, and truly understanding a team's purpose.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A common issue plaguing many software teams is when leadership keeps stacking policy, process, and features to a team. Especially when without considering their negative externalities. If a core product is unstable, adding features and making everything into an emergency guarantees the team will spin its wheels and go nowhere.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Every team has to consistently re-evaluate the benefits of legacy processes and procedures and see if they still have value. One must have the courage to delete code, meetings, and policies and not hide behind "we've always done it this way". If every new issue is urgent, no issues are urgent.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;So on top of my typical software role, I consistently outlined all of the faulty processes and how to alter them for the welfare of the team. A happier, less stressed, less interrupted team with less friction is one that will produce better work.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I also spent considerable time mentoring junior engineers, which was new compared to past roles. It was nice to be able to give guidance to people starting out their careers. I also was able to delegate work to said juniors and reviewed their PRs and design documents.

Techs: (SQL, Python, Airflow, Terraform, AWS)

#### Capital One (2nd year):
##### Privacy Data Team

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In my second year at Capital One, I focused on improving the stability of the product, reducing the engineering time required to respond to criticals, reducing the time required to deploy locally(-98%), QA(30%) and prod; and making a major consolidation of the project to a simpler architecture with far less duplicated code. In turn, this allowed for multiple engineers to simultaneously test branch changes, as before they'd have to share a QA instance.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Skip and managerial level leadership changed. So when I remained on the team, my biggest objective was hammering home many of the procedural changes I'd been advocating for and their value. After all, a product that neither makes no revenue, nor supports a revenue producing division should prioritize 90% of its efforts into reducing engineers required to maintain it - that's just basic math. 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Working together with new leadership, we were able to eliminate all non 9-5 on call pings, add automated retry logic to the data pipeline to reduce manual intervention by 70%, and consolidate the 15 repositories driving this product into one, simplyfing change propagation, while reducing the turnaround time associated with testing new features by improving the infra pipelines.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The experience at capital one was good becuase I learned tons, and the people there were very smart. However, a bank in the privacy space is very risk-averse, and not a greatlong term culture fit. In many ways, it forced me to think harder about my work and the mission of my team, and about how so much that goes into builing great software has nothing to do with code.

Techs: (SQL, Python, Airflow, Terraform, AWS)

#### Second Sabbatical

I spent a lot of time travelling during this sabbatical. I went to:

France -> Italy -> France -> Hungary -> Slovakia -> Ukraine -> Poland -> France -> Japan -> Taiwan -> China -> Vietnam -> Australia -> back home.

I learned a lot about myself.


#### What Company am I looking to work for?

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'd like to work at a company that values getting things done rather than checking off boxes in a high up leader's spreadsheet at the end of the month.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'd like to work on a company who's product is more concrete, in the industrial, robotics, or medical space. The only industries I don't want to return to are the banking, finance, or regulatory spaces.
