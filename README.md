# DevMountain AngularMiniProjects

## Angular Friends

### Introduction

####
<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

##### Objective

Learn Basic Angular Concepts by creating a searchable, filterable list of friends

### Install Angular

####

Setup your app an test it by displaying something from your controller's scope using double mustache brackets `{{ }}`


####

The angular script has already been included in the project.
In step one you will create an app variable and your FriendController. We have already provided the appropriate files and outlined a structure for you.
* Create an app for your angular app in app.js (this should be one line). You can name your app whatever your want
* Create a FriendController in the FriendController.js file
* Add the ng-app and ng-controller attributes to index.html in order to attach your controller to your html
* Test your controller by adding a scope variable called 'test' with the value 'Hello World' and then bind the variable in index.html {{test}} to see if your controller is working

####
__app.js__
```
var app = angular.module('app', []);
```

__FriendController.js__
```
angular.module("app").controller('FriendController', function($scope){
    $scope.test = "Hello World";
})
```

__index.html__
```
<!DOCTYPE html>
<html ng-app="app">
<head>
  <title>Angular Friends</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css">
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body ng-controller="FriendController">
    {{test}}
```


### Load the friend Information

####

In step two we will paste the fake data into our application
* In the FriendController copy the data from friend-data.json into a scope variable called 'friends' in your FriendController
* Add a {{friends}} to the html page and refresh so that you can see all of your friend data show up.
* Delete {{friends}} from your html

####
__friendController.js__
```
angular.module("app").controller('FriendController', function($scope){
    $scope.friends = [
        {
            "name": "Preston McNeil",
            .....
        },
            ......
        ]
})
```


### Display friend information

####

You now have a list of friends on your scope.  Display that list of friend on the screen.  There is some html code already in the index.html to help you get the look right.

Your data contains a url for an image for each person.  Make sure the image shows up as well!

####

* Use ng-repeat on the ul to create a new li for each person in the person array

* Use `{{}}` bindings to fill the user's picture and data into the li content.
When doing this you can walk down objects using dot notation.

* For the images use ng-src not src.

####
__index.html__
```
<ul ng-repeat="friend in friends">
    <li class='friend'>
    <img class="profile-pic" ng-src='{{friend.pic_square}}'>

    <h3>{{friend.name}}</h3>

    <div class="location">
        Location: {{friend.current_location.city}}, {{friend.current_location.state}}, {{friend.current_location.country}},
    </div>

    <div class="status">
        Status: {{friend.status.message}}
    </div>

    <div class="num-friends">
        Friends: {{friend.friend_count}}
    </div>
    </li>
</ul>
```



### Add a search filter on the friends

####
A filter that will take a user inputted string and only display models that contain that string.

####
Note that the filter searches all attributes of the model recursively.
* Use ng-model (on the input) to add an attribute called searchTerm to your FriendController scope to store the value of the search term inputted by the user
* Add a filter to your ng-repeat attribute to filter on the search term

####
__index.html__
```
 <input class="form-control" placeholder="Search Anything About Your Friends"
               ng-model="friendFilter">

 <ul ng-repeat="friend in friends | filter: friendFilter">
 ```           

### Split the filters into 2: name and location

####

Uncomment the block in step 5 in the index.html.   Change your filter so that you are filtering by name or location specifically instead of by all fields.

####

Let's make our search more specific. Our input from Step 4 will now search only the name.
We will also create a location search input.
* Create a filter object and use two properties on that object.  One for the name and one for the location.
* Refactor the search you implemented in Step 4 to only search on a friend's name
* Use our uncommented second input to add a friend's location to our filter object
* Use our filter object in our ng-repeat filter

Filtering works by matching the exact structure of the data you're searching. This includes both the property name and the value of that property.  This can also be nested and include child objects.  Searching on nested objects would mean your filter needs to be nested as well.

####
__index.html__
```
 <input class="form-control" placeholder="Search Name" ng-model="friendFilter.name">
 <input class="form-control" placeholder="Search Location" ng-model="friendFilter.current_location.name">

  ...

 <ul ng-repeat="friend in friends | filter: friendFilter">

```

###Step 6: Make the list sortable

####

Make your list sortable using the provided sort drop-down

####

* Create two variables in your friend controller, one for the attribute to sort on and another boolean for an ascending vs descending sort
* Add a value="" to each item in the list of options. This value needs to equal the value of the property, on each friend object in your array, that you want to sort by
* Bind the variables to their respective select elements using ng-model
* Add the ordering logic to your filter
** Sample syntax      | orderBy: propertyName : isReversed
** See https://docs.angularjs.org/api/ng/filter/orderBy

####

__index.html__

```
<select class="input-medium" ng-model="sortProp">
    <option value="name">Name</option>
    <option value="friend_count">#Friends</option>
    <option value="current_location.city">City</option>
    <option value="current_location.state">State</option>
    <option value="current_location.country">Country</option>
</select>

<select class="input-medium" ng-model="sortDirection">
    <option value="+">Descending</option>
    <option value="-">Ascending</option>
</select>


....

<ul ng-repeat="friend in friends | filter: friendFilter | orderBy: sortProp : sortDirection">
```



### Black Diamond

####

* Use ng-options and an array to create the filter options
* With the current format any friend with a null value on current_location is filtered out and lost as soon as any filter is applied.  The data we gave you was an example you may find yourself with coming from a 3rd party where the data is not consistent across objects.  Write a for loop or use the .map function on array to find and replace any missing current location properties with an empty object with a property that matches the property you are using for your location filter.

    IE - If I was filtering by current\_location.name I would find current\_location: null and replace it with

      current_location: {

          name: ''

      }



## Resources
### Resources
####
* Controller scopes http://jsfiddle.net/8pX7p/
* ng-repeat http://jsfiddle.net/PhCUk/1/
* Filter http://jsfiddle.net/WS8gS/1/
* http://docs.angularjs.org/guide/concepts


## Contributions

### Contributions

####

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

### Copyright

####

© DevMountain LLC, 2015. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<img src="https://devmounta.in/img/logowhiteblue.png" width="250">


///////////////////////////////////////////////////////////////////////////////////////


Babies First Angular
==============

##Objectives
For this mini-project you're going to create a basic angular Application from scratch. Getting used to structuring your Angular application is an important skill to get right. Many times as beginners the hardest part about Angular is figuring out where to put stuff. Hopefully this project will start you on the right path so you can correctly structure all your Angular projects in the future.

###Step 1: HTML Skeleton
* Fork this repo, then clone your fork.
* Create a 'index.html' file, a 'styles.css' file, and a 'js' folder.
* In your 'index.html' file create a basic skeleton of your application. Be sure to include the following
    - A Doctype
    - Opening and closing <html> tags
    - Opening and closing <head> and <body> tags
    - A link to your 'styles.css' file in your <head> section **CSS files always go in your <head> section while JavaScript files will always go before the closing </body> tag.
* To verify your additions are correct, add a paragraph tag to your html that says 'Woo' and in your styles.css file make the background of the entire page green. Then open up index.html in a browser to verify you see 'Woo' and the background is green. If correct, remove 'woo' and the green styling from your css.


###Step 2: Angular (Skeleton) Time
Now that we have our basic HTML/CSS set up, let's make our plain website into an Angular Application.
* The first thing we always need to do when we're working with Angular is to make sure we actually include Angular in our project. Visit https://angularjs.org/ and click on download. Then, instead of actually downloading Angular - let's just use the CDN. A CDN is just usually a file someone else is hosting for us. In this example, Angular thought it would be nice to host Angular for us rather than having us download it and use our own copy. This also has some speed (caching) benefits. Copy the link that says 'CDN', then in your HTML, include that link as a script right before the closing </body> tag.
* Now that we've included Angular, we can do some Angular'ish things. First, let's go ahead and tell our HTML that we're going to have the whole thing be an Angular app. Include ng-app="friendsList" as an attribute on your <html> tag (take note of the name of our module "friendsList" it will be important later). This tells the browser that everything inside <html> </html> is an Angular app. *Note that if we wanted to just have part of our application be an Angular app, we can stick ng-app="nameOfModule" on anything and all child elements will be specific to that angular module.
* Now that we've told the browser that the entire HTML page is going to be Angular, let's create our first Controller. Remember, the purpose of a Controller is to 'control the view' or, in other terms, a controller allows us to access properties that are on a $scope object and stick those properties on our view (aka html pages). Go ahead and add ng-controller="mainCtrl" to your opening <body> tag. What we've done is told Angular that anything that is on our mainCtrl's $scope (which we'll build in a minute), is available to be used in our index.html page with {{}}.
* Now our ng-app and ng-controller are set up in our HTML, let's jump over and actually build out our app and our controller.

###Step 3: Create a new Module
* Jump over to the 'js' folder you made earlier and create a file called 'app.js' inside of your 'js' folder
* You can think of 'app.js' as the hub of your Angular application. This is where we're going to initialize our application and (in a few days) is where we'll have all of our apps configuration data.
* Let's initialize (or start up, if you will) our "friendsList" application. At the top of your 'app.js' file put
```javascript
var app = angular.module('friendsList', []);
```
* It's really important to note the syntax of what you just copied. We're telling the browser to create a new angular module called 'friendsList' and save that angular module into a variable called app. Take note on the empty array we're passing as the second parameter to angular.module, this empty array tells Angular to create a new module rather than just getting an old module that has already been created. It's crucial to understand that in our 'app.js' file we're creating a new module (passing in the empty []) because our 'app.js' file is our hub as we mentioned earlier. In other files instead of passing in both the name of the module (friendsList) and an empty array, we'll just pass in the name of the module like so,
```javascript
var app = angular.module('friendsList');
```
Now, instead of creating a friendsList module, we're just getting one that has already been created. You'll see this in action in the next step.
* The last step that will bite you at least a few times during DevMountain is whenever you create a JavaScript file, you always have to include that in your HTML page. Go over to index.html and include 'js/app.js' as a script right below where you included Angular. (The reason it's 'js/app.js' is because we made a folder called 'js' and app.js is inside that folder.

##Step 4: Create a Controller and $scope
* Now that you've CREATED a module (using angular.module('moduleName', []) in the app.js file, let's go ahead a create a controller that is going to be apart of the 'friendsList' module that we made.
* Inside of the 'js' folder, create a file called 'mainCtrl.js'. Notice we're using the same as the controller we made earlier (mainCtrl).
* Right now is probably a good time to head over to your index.html page and include 'js/mainCtrl.js' as a script below 'app.js' so that Angular knows where to look for mainCtrl.js
* Now that we've included the file, let's create our first controller. The syntax at first is going to look very familiar. Remember, we don't want to create an entirely new module but instead we want to get our module we made earlier (friendsList) then stick our mainCtrl as a property on that module.
* At the top of the mainCtrl.js file go ahead and get your friendsList module and save it to a variable called 'app'.
```javascript
var app = angular.module('friendsList');
```
Again note that I didn't include the extra [] as the second argument because I don't want to create a new module, but get my original friendsList module I already created.
* Now that we've saved our module into the 'app' variable. Let's create a new controller and stick it as a property on our friendsList app. The way you do that is below.
```javascript
app.controller('mainCtrl', function($scope){

});
```
A few things to notice here. We added a controller property to our app, we named it 'mainCtrl' because that was the name we chose in ng-controller in our index.html file, and the second argument is a callback function that has a $scope property built into it. Note that every time you create a new controller, you get this $scope object. Whatever we stick on $scope will be available in our view (in this case, index.html is our view). For example, in my controller if I said:

 $scope.name = "Tyler",

 then in my HTML page I can say <p> My name is: {{name}} </p>

 and that will show as My name is: Tyler.

 Take a step back and think about the importance of this. When I first started to program a huge question I had was 'How do websites know what to display when there are so many different variations of pages. Facebook for example, everyone has their own profile. That's a lot of pages. But in reality it's just one page with facebook changing the data based on who the user is. This process is called 'templating'. Your profile page is just one template (that everyone shares), and that template is loaded with different data depending on who the user is.
*Now, in your controller, I want you to add an array to your $scope object and I want you to fill that array with a list of your friends. I don't want to give you the code for this one but if you get stuck ask the teacher.
*Now that we have an array full of friends as a property on $scope, we can then use ng-repeat in our view to show each one of our friends.

##Step 5: Show your Friends in the View
* Inside of the body tag create an H1 tag with 'My Friends'.
* Below that I want you to use ng-repeat to loop over each of your friends showing each one to the page.
```html
<div ng-repeat="friend in friends">
  <p> {{friend}} </p>
</div>
```
This syntax is a little weird at first. It should feel very similar to a for in loop in JavaScript. What we're doing is saying loop over $scope.friends (which was defined in the controller) and for every item in $scope.friends, save that item to a variable called friend, then show that friend to the view. So if you had:
```javascript
app.controller('mainCtrl', function($scope){
$scope.friends = ['Jordyn', 'Ryan', 'Chelsey'];
```
then in your view you will see
Jordyn
Ryan
Chelsey

##Step 6: Get Fancy
* That's all the main things I wanted to cover. You should now feel decently comfortable with creating a basic angular application, initializing your app with angular.module('appName', []), creating a controller with ng-controller, adding properties to that controllers $scope, then showing those properties in the view.
* If you have more time, I want you to create a function in your controller called 'addFriend' that takes in a name of another friend and pushes it to your friends array. In your index.html you'll need an input box that will be the name of your friend, and a button that will run $scope.addFriend every time it is clicked.
* Good luck and congrats on building your first (of many) angular apps!

## Copyright

© DevMountain LLC, 2016. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.
