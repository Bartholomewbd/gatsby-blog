---
template: BlogPost
title: "React Hooks"
path: /react-hooks
date: 2020-04-23T07:12:25.364Z
thumbnail: '/assets/ReactLogo.png'
---

Hello!  Today my personal learning time was spent diving deeper into hooks.  Despite using hooks day to day on my projects, I have always wanted to read a bit more and grasp a better understanding of how they work and also get better at custom hooks.

#useState
A little background we can go from a class component like this:
```js
class MyName extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: '' }
    this.handleChange = this.handleChange.bind(this) //Have to do this to bind this to the handler method in the class (yuck)
  }

  handleChange (evt) {
    this.setState({ name: evt.target.value })
  }

  render (){
    const { name } = this.state

    return (
      <div>
        <h1>My name is: {name}</h1>
        <input type="text" value="name" onChange={this.handleChange} />
      </div>
    )
  }
}
export default MyName
```

to a function component using hooks like this:
```js
const MyName = props => {
  const [name, setName] = useState('')

  const handleChange = (evt) => {
    setName(evt.target.value)
  }
  return (
    <div>
      <h1>My Name is : {name} </h1>
      <input type="text" value={name} onChange={handleChange} />
    </div>
  );
}
export default MyName;
}
```
I personally really like the hooks implementation because it removes a lot of code by not requiring a constructor at all. It also removes the need to use this and rebind it to handle correctly.

Hooks fits into React because it allows us to right declarative code that is code that tells react what we want to do rather than how to do it. React handles the updates to the render.  The book I am reading also has an exercise as to recreating the useState hook to grasp a deeper understanding and my repo for it will be found here. [https://github.com/Bartholomewbd/react-hooks](https://github.com/Bartholomewbd/react-hooks).  This will also include any other resources I find cool and code snippets relating to react hooks I want to keep.

Above we went over one of the most commonly used hooks in react.  Some of the others include useEffect and UseContext. 

#useEffect
This in my opinion is one of the most important hooks becuase this will replace all the repetative lifecycle code we used in React components such as componentDidMount, componentDidUpdate, coomponentWillUnmount.

As an example lets look at the way we would have gotten a list of users from json place holder with a class based component and see what it would look like now.

```js
async componentDidMount() {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
  this.setState({ users: res.data })
}

async componentDidUpdate(previousProps) {
  if (previousProps !== this.props)
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
      this.setState({ users: res.data })
}
```

Can be changed into :

```js
const fetchUsers = async () => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
  setUsers(res.data)
}

useEffect(() => {
  fetchUsers(users)}, 
  [users]
)
```

So we seperated the logic of getting the users into a seperate function and then we set up a useEffect to update the render whenever the users changes.  When a component mounts it immediately calls our function and compares to see if the array values are different and updates them accordingly.  You need to make sure there is an array passed in to the useEffect to stop the component from rendering over and over again. And you can either return the cleanup efforts or nothing at all from the useEffect.

 I can be reached via email bartholomewbd@gmail.com. LinkedIn Message or Twitter

