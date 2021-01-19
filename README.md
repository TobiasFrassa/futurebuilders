# Futurebuilders
This is a side project which I started during my studies in my free time. 
It is a job test that will create a personality analysis in combination with a job recommendation for the user. 
The basic idea of this test is that today there are so many people that do not know what to do and where to start.
But everyone has a certain personality type and preferences that will already increase the success to be good at certain jobs and to like them. 
So this test gathers the neccessary data and gives a job prediction that the user will most likely enjoy working and be good at.


# Common information 

- the long term mission of this project is
to build a web app which gives all users a very good prediction about what they are good at and what they like to do

- this project could solve the problem of all the complexity involved in making the decision which career to choose in a world with literally endless job opportunities

- how can this project be different from other personality or jobs tests? 
Pretty much all job tests tests have 3 main problems
They take either too much time, give bad predictions or are not really honest tests and manipulate the user
This test will take under 10 minutes, give a very exact prediction and honest feedback to the user

# Code related information

1. The user starts on the index.html page
- here the user enters very few basic informations by which he will be categorized
- for example in the category for women who are still at school and already have successfully passed class 10 
- the "index.js" file evaluates the entered information and forwards the user to a customized page
- let us assume that an example user enters that she is female, she is still in school and has succesfully passed 10th grade

2. The user lands on a customized page and is able to answer 60 questions about her personality traits and career specific preferences
- in our example the page is customized for female students from 11th to 13th grade
- there are specific questions about what students like at school and what they do not like in order to gather data about their preferences
- the userpath in our example is: "index.html/js/htmls/weiblich/Schülerin/schülerin_realschulabschluss.html"
- the names for the files "js" and "htmls" were randomly chosen and the other names reference how the user was categorized in the first step
- on this page are 30 questions about personality and 30 about job preferences
- in this example the "schülerin_realschulabschluss.js" document will do all the neccessary work on this page in javascript
- the results for the questions will be saved in 10 different variables and forwarded to the next page

3. The user gets an evaluation of his personality and a job recommendation
- the personality evaluation bases on the big five model (openness to experience, conscientousness, extraversion, agreeableness, neuroticism). 
- currently as a result of the personality analysis the user will see a text that was manually written which fits her personality trait data best
- the job recommendation bases on the user data from the "index.html" page (for example: educational level, current job) and
the job related preferences data that were part of the questions 31 to 60 on the page before 
- right now the job recommendation is based on a certain amount of listed jobs and not all jobs available in the world 

# What can be improved? 

Short term improvement: 
1. Obviously designing the page :D 
2. Catching the error if the user does not check all the boxes
3. Reducing the amount of different documents by choosing students under 20 as the main target group and removing all other documents

Long term improvement:
1. Building a database with all jobs on the world listed in it
2. Give every job a different rating for all the personality and job related aspects calculated. 
3. Build a natural language generation model that creates the text for the personality analysis automatically 

Further ideas:
1. Giving a job recommendation based on access to social media data
2. Giving a recommendation for a job based on facial recognition
3. Giving a job recommendation based on speech recognition


