1. What problem does the context API help solve?

Prop drilling - with Context API developers are able to share data on all levels of an application. 

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions - Actions are objects that tells the reducer how to change the state. 

Reducers - Reducers are functions that are triggered by action types that returns whatever state is specified in said function. 

Store - The store holds the state within a Redux application. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global and component state only lives within the component it is initiated in (can be brought down with props however). Application state should be used when data needs to live in every component, so this would work well with like a user or user data. Component state can be used for say data that doesn't change, like in a shop where a clothing item will always be that item and doesn't need to mutate. 

Thunk is a middleware that allows developers to call action creators that return a function instead of an object. 

1. What is your favorite state management system you've learned and this sprint? Please explain why!
 I really enjoy using Redux. Once the store is set up things are fairly simple. I like it because it runs fairly well and can be used on larger scale applications.
