# courseraTest
this repo is  FOR using AngularJS。Also using the Nodejs,Git,NPM。and so on..

JS Minification 最小化。 https://javascript-minifier.com/


lecture 13:

STEPS to create a custom filter:

			1.Define filter factory function
			2.Register filter factory function with module
		To Use custom filter in JavaScript
			1.inject filter function registered*NameFilter* into controller
		To Use in HTML -- no need to inject into controller
			1.{{ expression | registeredName : arg1 : arg2 }}
			2.{{ expression | filterOne |filterTwo ...}}
lecture 14:


	Digest Cycle: running digest loops until all watchers report that nothing has changed

		Dirty checking 

	Several ways to set up watchers:
	    1.$scope.$watch --don't do this in a controller 仅供学习
	    2.{{ someProp }}
	    3. 	<input ... ng-model="someProp">

	Only applies to things done inside of the Angular context

	the digest cycle needs to be kicked off

lecture 15:

	Digest Cylce does not get triggered automatically if events are unaware of Angular

	Solution:
		1.Call $digest after you custom code 
		2.Wrap your custon code inside of apply
		3.Find Angular specific server that handles the same functionality,e.g.,$timeout

lecture 16:
	
 	2-Way binding(ng-model) means:双向数据绑定
		Listener for change on input automatically set up by Angular updates prop value on $scope

		Direct update to prop value is automatically updated in UI

	1-Way binding ({{ prop }}) means:
		Direct update to prop value is automatically updated in UI

	1-time binding ({{ ::prop }}) means:
		Initialized(初始化) value of prop is automically updated in UI

		Wactcher for prop is removed,so UI never again gets updated
	