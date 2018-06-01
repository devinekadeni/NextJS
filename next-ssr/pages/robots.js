import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import axios from 'axios';

const Robots = (props) => {
  return (
    <div>
      <h1>Robots</h1>
      <Link href="/">
        <button>Home</button>
      </Link>
      <div>{
        props.robots.map(robot => {
          return (
            <li 
              key={robot.id}>
              <Link href={`robot/${robot.id}`}>
                <a>{robot.name}</a>
              </Link>
            </li>
          )
        })
      }</div>
    </div>
  )
}

Robots.getInitialProps = async () => {
  // const res = await fetch('https://jsonplaceholder.typicode.com/users')
  // const data = await res.json();
  // return { robots: data };
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  return { robots: res.data }
}

export default Robots;