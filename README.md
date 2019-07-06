# About
This is an "add to cart" interface I developed in Vue.js as a "coding challenge" for a job I was applying to.

I developed it using Gridsome so I could build the site to be SEO friendly. 

One thing I would change with this if using for a real website, is using a state managment library like Vuex. I would also update the images so they are locally hosted.

# Demo
Demo hosted on Netlify: https://vue-shopping-cart.netlify.com/


# Instructions
## Development Server
1. Install gridsome CLI tools
  - "npm install --global @gridsome/cli"
2. Install project dependencies
  - "npm install" from project root
3. Run gridsome in dev mode
  - "gridsome develop" from project root

## Production - SEO Friendly
I have also built the project already (using "gridsome build") so it is SEO friendly and can be deployed on any environment. The build can be found in "/dist".

In my case I have php installed on my computer so I just ran it on a basic local PHP server.

So I just ran "php -S localhost:3000" in the "/dist" folder.
