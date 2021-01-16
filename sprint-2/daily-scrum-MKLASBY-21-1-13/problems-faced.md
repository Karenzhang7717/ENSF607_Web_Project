# Problems Faced
## Meeting Date: 2021-01-13
## By: Mike Lasby

The biggest challenge so far is learning how organize the application architecture in form suitable for react. Since we have modularized our components, we had to "lift the state" up to the parent component. This introduced infinite loops because we were originally altering the state of the props from the child components. 