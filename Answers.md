1. What problem does the context API help solve?

State is typically passed from parent to child via props, but this can quickly become cumbersome as you need the same slices of state across many different components in an app. Context API allows you to set up a Context Object, which then allows you to retrieve state data from the Context Object instead of storing it in a parent component and passing it down.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions - packets of information that contain an action type and associated data (payload). Actions are dispatched to the reducer - meaning they're passed in as an argument.

Reducers - are functions that update state in redux. Action objects tell the reducer how to update state, and sometimes pass data to the reducer that's necessary to update state (payload). Reducers are also pure functions, meaning they do not have any side effects.

Store - in redux, everthing that changes within the application is represented by a single object know as the store. The store contains state for the application. Actions tells Reducers when and how to update state, and the updated state is stored in the store.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is state that is accessible to the entire application, whereas component state is only accessible within a specific component. Application state should be used when the state data is needed in more than one component, whereas component state store data that only needs to be accessed within the component itself.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is a middleware application that allows us to make asynchronous operations with redux, and more specifically, the asynchronous operations happen within the action-creators, themselves.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

UseContext hook is very easy to use, but Redux is more powerful for complex systems. I can see myself using both depending on the application.
