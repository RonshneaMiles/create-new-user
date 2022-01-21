# Create New User

Here I have created a simple, yet efficient New User Form. Here's some of the things you'll want to check out.

# Creation

The base of this form was created with HTML. I added labels and input boxes and made the input type="" fit the specific needs of each input. The Name section type as "text", Email type as "email", and Password type as "password" for added security. There are Select options for both State and Occupation inputs to allow the user to choose from different options on a list that has been populated by data from an API. All of these sections have been made to be "Required" so that the user should not be able to submit the form until all parts of the form have been filled out and in the proper format. Ex. (email should include @ symbol).

# Functionality

The JavaScript file has been linked to the HTML file, and I've pulled specific elements from the HTML file to give them functionality. First, by making a fetch request to an API to get the data that I used to populate the State and Occupation lists for the user to choose from. I created an empty array, and assigned the data I received from the fetch request to it. For each item in the array, I created an element, "option", and appended them to their respective parent elements. Now the form is complete, but we still need to be able to do something with it when it has been filled out.

An event listener has been attached to the form to listen for "Submit". I created a new instance of the form using the information collected from the submitted form and composed a new fetch request. Since "GET" is the default behavior of fetch(), I made sure to add method: "POST". I set the body of the Post request to be a JSON version of the data collected from the form and sent this data to the same API that I originally grabbed data from to complete the form itself.

# Styling

I used CSS for all of my styling needs, as that is my preferred way to make a webpage more appealing and responsive.

# 🚦 Confirmation

I wanted to make sure that the user would know their submission was successful by adding an element that says "Thank you for signing up!" after the form has been submitted. If the form was not filled out completely or correctly. the user will get an error message on the form pointing out where they needed to make corrections. If the form was completed correctly, the form will disappear upon submission, and the confirmation page will appear.
