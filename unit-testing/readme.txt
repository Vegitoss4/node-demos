Unit Testing
------------
Breaking down the logic of the applications into smaller units and verifying that each unit works as we expect.

TDD
TAD


BDD

GWT(Given When Then)

Story: Registeed user need to login into the system, when he supplies valid credentials then he can access home page else stay in the login page

Scenario : Success

Given
	The user is in login page
	and the user enters valid userid
	and the user enters valid password
When
	the use logged in
Then
	user is redirected to home page

Scenario : Failure

Given
	The user is in login page
	and the user enters valid userid
	and the user enters invalid password
When
	the use logged in
Then
	user stays in login page




 
 npm install - D mocha chai instanbul
