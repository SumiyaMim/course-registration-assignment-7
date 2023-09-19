# Add at least 3 Project features
1. Course Selection: Students can select courses and can see the selected course name. They will not be able to choose the same course multiple times.
2. Credit Hour and Price Calculation: This feature calculates the total credit hour, remaining credit hour, and total price for the selected courses. 
3. Toast Notification: This feature will display when the same course is clicked more than once, and another toast will display if the total credit hour exceed 20 or if the remaining credit hour drop below zero.


# Discuss how you managed the state in your assignment project.
For my project. I used useState and useEffect for managing state and side effects. 

1. State Initialization:
I have declared several state variables using the useState hook. These state variables include:
- courses: To store the list of courses fetched from the JSON file.
- selectedCourse: To store the list of courses that the students has selected.
- totalCredit: To calculate and store the total credit hours of selected courses.
- remaining: To calculate and store the remaining credit hours.
- totalPrice: To calculate and store the total price of selected courses.

2. Fetch Data:
I use the useEffect hook to fetch data from the JSON file that ensure the data is loaded and available for rendering.

3. Handling Selected Courses:
I created the handleSelectedCourse function to manage the state when a student selects a course. It checks the course is already selected. It also calculates and updates the totalCredit, remaining, and totalPrice state variables.

4. Rendering:
I have used map over the courses array to render the course cards and display the courses.
I also render the Cart component, passing the state variables (selectedCourse, totalCredit, remaining, and totalPrice) as props and displays the cart contents.