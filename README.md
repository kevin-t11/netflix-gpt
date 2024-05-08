# Netflix - GPT
- create react app
- configured Tailwind-css
- Header 
- Routing of App
- Login Form
- Sign Up Form
- Form validation (used regex validation)
- useRef Hook
- Firebase SetUp
- Deploying our app to production
- Create Sign up User account
- Implement Sign in user API
- Created Redux Store with userSlice
- Implement Sign out
- Update Profile   
- Bug Fix : if the user was not logged in then redirect to /browse page and vice-versa.
- Unsubscribe to the onAuthStateChanged callback
- Add hardcoded string values to the constant files
- Register TMDB API & create an app & get access token
- Get Data  from TMDB now playing movies list API
- Created a Custom hook for now playing movies
- Created movieSlice
- Update movie store with movies data
- Plannig for main and secondary container
- Fetch data for Trailer Video and updated the store with video data 
- Embedded the youtube video and made it autoplay and mute
- add the movies list like top rated, popular, upcoming movies
- Created a custom hook for top rated, popular, upcoming movies
- Build Movie List
- Build Movie Card
- Made the UI look better
- Created a configSlice and GPTSlice for language configuration and GPT search api
<<<<<<< HEAD
- Impletented GTPSearch component
=======
- Implemented GTPSearch component
- Implemented GTPSlice configuration and using the groq-ai api key to get the movie suggestion
>>>>>>> cda557e (using a Groq-ai api key the movie suggestions will be shown and memoization implemented for the same api calls offen.)



# Features
- Login / Sign Up
    - Sign In / Sign Up Form
    - redirect to Browse page
- Browse 
    - Header
    - Main Movie
        - Tailer in Background
        - Title & Description with Play Buttton
        - Movie suggestions
            - Movie-List * N
- Netflix-GPT
    - Search bar
    - Movie Suggestions