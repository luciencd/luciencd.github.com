
###### A few policies with their respective questions are as follows:

*Existing State:* Squash vulnerabilities and Enterprise Requests by getting all hands on deck.
- *Question:* What systemic issues are requiring all hands to be on deck? Should every issue be an emergency?
- *Follow-up:* Figure out what about the architecture requires all hands on deck for a one day resolution. 
- *Fix:* Reduce the repositories fromm 15 to 1 so only one repo has to be refreshed in order to fix a vuln.
- *Result:* One engineer can take care of issues as they come up, and the other 4 can work uninterrupted.

*Existing State:* Let's raise a SEV whenever anything within our data pipeline breaks. 
- *Questions:* Are systemic issues causing the SEV? Will complaining about the SEV result in any changes? Does the SEV actually affect the SLA of the product or is the issue just a number increasing on a dashboard of a VP?
- *Fix:* Given this service has 45 day SLA, eliminate all pagerduties outside of work hours, implement retry logic and increase frequency of the pipeline. Then, if there's still an issue, delegate the issue to the on call engineer 9 am the next day.
- *Result:* a 5 person team that used to be on call/stressed (primary and secondary) 2/5 weeks of the year now can separate work from life, which 1. decreases employee turnover 2. Increases willingness to devote extra effort when its really required.

*Existing State:* 50% of planned sprint work is new features. 50% of actual sprint work is resolving Criticals.
- *Question:* For a new feature, is the engineering time investment 3x the time it saves the manual reviewers?
- *Follow-up:* Would that time better be spent elsewhere?
- *Fix:* New features on a 




- Improving velocity by re-thinking about assumptions and priorities.





- What should one refactor when there are infinite possibilities but limited time?
- Failures in microservices?


- How can an engineer drive profitability on a team that drives no revenue?
  - Speeding up engineering time, 
  - Speeding up deploy time
  - Reducing complexity of the service itself
- Can all drive down total engineering hours spent, allowing directors to reallocate expensive engineers.


Ultimately I found I didnt align with big fintech, because there's just far too much red tape to get things changed. I got everything I wanted to achieve done, and was satisfied with it, but felt larger change was futile. I'm better suited to a smaller organization. 

Do NOT hire me at a company that would rather fill out a roadmap with mirage "feature" milestones when structural issues need to be addressed. You are wasting money and your company will fail. As an engineer and designer its as important to write code than it is to refuse features and delete code/complexity. 