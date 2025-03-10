---
title: 'About me'
description: 'About me'
pubDate: 'March 09 2024'
heroImage: '/blog-placeholder-4.jpg'
---

About me:



- My history

- 1996 : 2008
- English, French

- 2008 : 2010

- Animations, The adobe creative suite, youtube content creation, rubik's cubes
- Photoshop, adobe flash, adobe lightroom

- 2010 : 2014
- Astronomy, Physics, Learning to Code, Hardware(Raspberry Pi, Arduino, Adafruit)

- 2014 : 2018
- College
- Computer Science, Coding Projects 
	- front-end, 
	- Machine Learning, 
	- Internships, 
	- Open Source Software
	- Data Visualization

- 2018 : 2022
- Rock Climbing, Carpentry, Travel, The great outdoors, living on my own.

- 2022 : 2025
- Travel 
- Product managment, design, 
- Understanding businesses, 

2025 - onwards
- Writing
- 
- Leveraging AI to learn and create

Can I make a cool data viz graph of my interests through time much like a world history diagram



- My interests

- My philosophy on life
- love to learn
- love to learn new things
- If something makes me uncomfortable, I gravitate towards it - its a sign that I ought to get better at it.
- What I spend my time doing

- My goals in life

- 


Work history:

Here I'll just describe year by year the key work objectives I got done, what I learned, how I grew, my perspective shifts. As with most software engineering jobs, not all work, projects and responsibilities can be made into a digestible list, so I picked key projects to showcase, those that had the highest impact on how I act as a senior software engineer.

Wayfair (1st year):
Purchasability Team & Legal Team

The Purchasability team maintained tools to determine if a product could be purchased by a customer on the website. If a product wasn't purchasable, but should be, we were losing money - our tools would notify, and rectify that. However, there were some legitimate regulatory obstacles for some products, and our team was meant to hold those products until those hurdles were passed.

From a technical standpoint, we maintained daily, hourly, minutely background jobs to change product's purchasability states and full stack interfaces for business analysts to rectify said issues and to create rules representing legal realities.

The code was mostly PHP, wayfair standard internal templates, and C# services. I enjoyed that year as I learned a lot about delivering code in a timely way, observability, and how big companies organized data transformations.


Wayfair (2nd year):
Legal Team & Scalabilty Team 

My second year at wayfair, the purchasability tools were sent to the berlin engineering organization, and the legal team expanded in scope. I stayed on the team and developed a massive performance refactor of the banned phrase job. This was the job that combed through 10s of billions of db rows for "banned phrases" that we did not want on our website. It was critical to both avoiding negative customer experiences, and potential regulatory suits. 

The job was a daily one, and kept running longer and longer with the size of the database. There was one day where it was reaching 46 hours runtime, and nearing a 50% failure rate. I faced the challenge and volunteered a plan to convert the main algorithm from a naive regex rule list to a more elegant prefix trie scanner (with a few other tricks to get more coverage). Since it was legacy code, it took a few months to implement and to validate the new version had the same accuracy as the old one. Integration tests, unit tests and a checksum algorithm on parallel runs were used to validate that.

The key takeaways from this project were how to summarize an algorithmic improvement to a non-technical PM. How to get buy in for multiple months of work with only one year of experience and so many priorities. Finally, I learned to take a win: even if continuing to improve the project was fun for me, 90% of the benefits had already been achieved, and that extra 10% was now relatively less important.


Wayfair  (3rd year):
Scalabilty Team

The scalability team was born due to a necessity to speed up product retrieval speed on the wayfair website, and cut down on arbitrary uniquness of queries by teams on the front end, by merging all requests from the front end to a single graphql endpoint. The status quo was ad hoc product queries direct to db or through middlemen services and a major SOLR service, which was having difficulties scaling.

The team built up a service comprised of fetchers that pulled from redis and aerospike, and workers that would replenish/destale that data from mssql. It would also find background processes in the catalog organization and re-write them in a scalable way on the dotnetcore platform.


One of the projects I undertook was to enable service mesh to the product-cache-api, to give us high level features 


The takeaway was working alongside a team of 14 to achieve a great objective. Synthesizing all communications by all coworkers and also disseminating my work to all of them, and the company now that any change had a direct impact to over a thousand engineers on the storefront. It was learning to broadcast changes ahead of time to a large audience of people many of whom were not listening, but would be affected by changes.

It was the largest scalable system I'd ever worked on, which had over 500 kubernetes nodes, 6 regions, 1 billion daily requests, and 50+ internal services requesting data.

Wayfair (4th year):
Scalability Team & SKU generation Team

Capital One (1st year):

- Designing new product from complete scratch
- Communicating directly with business analysts and 
Capital One (2nd year):


