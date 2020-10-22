React Programming
JSX, the parser with new HTML property System
1. className instead of class
2. htmlFor instead of for attribute
3. Events
    - onChange, onClick, etc
4. property systems same as HTML
    - value
====================================================================
React Important Packages
1. react
    - Provides the React Object Model
        - Component, the base class for React Components
        - Hooks, the functions to define React Object Programming
            - useState(), userEffect(), useContext(), useReducer(), etc.
2. react-dom
    - Used to define the rednering of the React App, using Virtual DOM
        - ReactDom
            - the 'render()' method to load and ender the component.

3. installing CLI
    npm install -g create-react-app
4. Creating React aplication
    create-react-app <NAME-OF-THE-APPLICATION>   
5. CReate a package.json with ready default settings using
    - npm init -y
6. dependencies section of package.json contains all dependencies for Runtime (during execution in browser)  
    - npm install -save <PACKAGE-NAME>      
7. devDependencies section
    - contains dependencies while developing the application
    - npm install --save-dev <PACKAGE-NAME>
8. The scripts section of package.json  
    - contains / defines commans to 
        - build
        - test
        - debug
        - run
      applications  
====================================================================React Programming Concepts
- ES 6, Modern JavaScript or High-Level JavaScript
    - Class
    - Template String, new syntax for string concatination
    - Arraow Operators, =>, uses as a replacement for 'Call-Back' fucntions
    - Object Methods
    - New Array Methods
        - sort()/reverse()/find()/filter(), etc
    - New String methods    
    - New Collections
        - Set<T> and Map<T>   
    - Modules
        - This is a mechanism of code-splitting
            - Write code in separate .js files where the js file will export type (class,interface, function, constant) from file as module
                - the 'export' keyword
            - other .js file will import the type as module      
                - the 'import' keyword
- Transpile the ES 6 into Browser Compatible JavaScript
    - Transpilation
        - Transformed Compilation
        - Compiled Transforms
    - ES 6 --> Transpilers(?) --> ES 3 (Browser Specific) JavaScript Code
    - Transpilers
        - Babel
        - Tracure            
====================================================================React Component
1. Class Component, traditional to React Applciation
    - Pure ES 6 born concept
    - Derived from 'Component' base class of 'react' package
2. Functional Components, specially used from React 16.0
    - Provides the functional programming experience like standard JavaScript.
====================================================================React Class Component
- Component<P,S> Base class
    - P, the 'props' object
        - An immutable object, thst will be used to pass data from parent component to child component.
        - e.g.
            this.props.<property-name>
                - property-name
                    - The property of which value passed from parent to child OR across components
    - S, the 'state' object    
        - The mutable object, that represents the local data of the component.
        - Once the compnent is unloaded (unmounted) the state will be void
        - This is the JSON object, declared in the constructor
        - This can be bound to HTML elements inside the component   
        - Once state properties are bound with HTML elements, then can be updated using 'this.setState()' method 
        - *** Since React.js uses One-Directional-Data-Flow, to update state, the HTML element must subscribe to event 
Exercise 1: Create a Calculator like windows calculator  (Today) 
Exercise 2: Create a reusable Table which will be used as DataGrid. The selected row values from the table for the products will be shown in ProductFormComponent. This Table will habe props properties as  (Today)
    - canDelete (Today)
        - will generate the Delete button for each row, to delete record from parent  
    - canSort
        - will render the data in table in stored order based on the SortKey value
    - SoryKey   
        - The key on which the table will be sorted   
