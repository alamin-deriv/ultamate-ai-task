# ultimate.ai Frontend-Challenge

Hello! We're excited that you want to join the ultimate.ai team. 
If you have any questions regarding this task, please don't hesitate to ask us.
Please do not spend more than a few hours on this challenge. We do not expect a solution that is production ready.

## Some Background Information

Most of our clients use our AI as a customer service bot in chats on their websites.
When one of their users writes a message in the chat, our AI analyzes that message to understand the users intent and 
give the appropriate reply, for example:

---
> User: "Hello"

*AI understands that this is a Greeting*

> AI: "Hello :) How can I help you?"
---

In order to understand what the user wants, our AI is trained to recognize different intents. 

For each intent the AI gets a list of user messages (we call them expressions) as training data to learn 
how users express that intent. 
For every intent there will also be a reply that the AI Bot should give, once it recognizes that intent. 
In the above example that intent would look like this:

---
```
Intent: Greeting
- Training Expressions: "Hello", "Hi", "Hey there!", "Good morning!", ...
- Reply: "Hello :) How can I help you?"
```
---

Most of those intents are specific to the client and their use case. An airline will have other intents 
than an eCommerce platform.

Some intents however are used by almost all of our clients. 
So when a new client creates an AI bot in our software we offer a list of already pretrained intents as part of the bot creation process.
They can choose to copy those pretrained intents to their AI Bot, so they can save time and don't have to 
create all those intents from scratch.

## Your Challenge 
Attached you find a JSON file with some of those pretrained intents. 

Each item in the JSON contains the following:
- `id`: The unique ID that identifies the intent.
- `name`: The name of that intent.
- `description`: A string describing what the intent is used for.
- `trainingData`: The training data that is used to train the AI. It contains:
    - `expressionCount`: the total number of training expressions for this intent
    - `expressions`: An array with three example expressions for this intent, each with a unique `id` and a `text` field with the expression.
- `reply`: The reply the bot will give when the intent is recognized, containing again a unique `id` and a `text` field with the actual reply.

**Your challenge is to build a page where our clients can see the pretrained intents and select which ones they want to use in their AI bot.**
**This page would be one step of a wizard in the above mentioned bot creation process (No need to build the whole wizard of course ;)).**

In this challenge we want you to get creative! 
We did not include a design or mockups and you are free to solve that challenge the way you think works best for the given data.

This page is targeted at clients who are new to AI. They might be setting up their first AI bot in our software.
Think about a UI that is easy to understand for clients who might not know what the term "expression" means in this context and 
are not yet very familiar with intent recognition, so make sure your UI communicates what they are looking at on this page. 

Note: We like to get every one involved in building a great product from very early on in the product ideation phase. 
This is why we don't give you a design or mockups to follow. Don't worry, you will not be judged on design, but we want to see 
your product mindset at work, building a tool that the given target group would love to use :)

## Minimum Requirements
- Your page allows users to get an overview over all the pretrained intents that are available (see intents.json).
- Clients can see what each intent is used for and see at least one example expression without any extra clicks.
- Clients can select/unselect intents individually or all at once.
- There is no need to persist the selection upon reloading the page.

- Please write your UI in React. You may use `create-react-app` or similar if you like. 
- You are free to use any additional libraries you like.
- Your solution should work on a desktop with the latest Chrome. Optimizing for different browsers, devices or screen resolutions is not needed for this challenge.
- We love tests but they are not a requirement to complete this challenge, so only add them if you have the extra time.

## What we look for:
- Clean code that is easy to read and written with reusability and testability in mind.
- Some comments or documentation to help us understand the choices you made or next steps you'd consider if you had more time.
- A simple UI that is easy to understand and intuitive to use.