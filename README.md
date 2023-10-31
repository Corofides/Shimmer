This is my attempt to create a static content site generator for use in a range of personal projects. It's written in 
ReactJS and uses README and JSON files to create posts and pages. I'm hoping I can make it versatile
enough that I can use it across a range of different projects. The main use case for this project is to
power GitHub Page sites. I imagine it could be used in other settings too as under the hood it's just ReactJS.

# Posts

The site functions as a blogging platform and can display post objects in various areas across the site. To set up 
posts this is done in two areas.

## public/posts.json

This file contains some basic information about each of the posts such as the title, author, and a README file name. The 
basic information will be used and the README file will be utilised as the post content allowing you to easily author new
posts for your site.

## public/posts

This folder contains a list of README files that will function as your post content. Most README settings will be
capable of being displayed on the site. A README can be called anything you want so long as it is referenced in the
posts.json file.


# Settings

This file contains some basic configuration settings for the site.

## Site Name

The name of the site - this will be used to display the name.

## Site Author

The person or company who owns the website.