# Project Summary + Stand-up Comedy😄

## My Introduction
- Hello Mohit & Sunjay👋,
My name is Gajendra Singh Rathore as you guyss already know 😂😂.
Today i am going to tell you my approach in this project what my mind says about how to finish the task!

- i am a developer who firstly think to cover functionality over UI cuz i think once the core functionality is done than everything else is just a game for developer😎. It doesn't mean i am a hacker 😅😅 but it sounds like pro developer 👌.


## creating context to manage add, delete, clear and map
- in story context file i have made the common functionality of adding, deleting, removing all functionality simple!
- i have also made a local component state for this context which helps us later to map all the stories directly from the context api (sounds good👌).
- At the root level i have made a STORY_LIFETIME variable the for 24 hours but you can change it to (15000) 15 sec, means now stories are autodeleted after 15 sec.
-i also made a function (removeExpiredStories) which i have use 2 time in useEffect one when the page is mount, second after every (60 * 1000)
 1 minute you can also change this time to less that  STORY_LIFETIME . this functions simple runs in every 1 mintute to check wether any story is expired or not.
 - i have managed localStorage in the same context.

 ## Creating stryNavigation
 - in this component i have simple get the functions from the context api that we have made earlier that are (stories, addStory, clearStories).
 - in the same component i have made a function to auto switch to next story using useEffect and its by-default time is (3000) 3 sec, you can also change it as per your choice, how long you want to see the story in full viwe.
 - also made a local state for managing current story index that is used in deleting story functionality to identify which story is deleted.
 - i used here a component Full-View and passed the (currentStoryIndex and setCurrentStoryIndex) to it as a prop.

 ## Full-View Component
- at the top i have destructured the properties from the props passed on storynavigation component.
- Below that i have used (stories, deleteStory) from the context to handle UI.
- have also made next and previous buttons which are invisible you can test them by clicking outside the image, by clicking right-side you will navigate to next story and by clicking on left-side you will navigate to previous story.
- in the full view you can delete a perticular story or you can close the full-view screen.

## Dummy Design component
- i have made a dummy json file and simple map it below, so that page doesn't feels emplty.