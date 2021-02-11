import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Home'

it('renders without crashing', () => {
    const props = {
        members: [
            {
                "id": 3,
                "name": "Cybr",
                "number": "3650",
                "last_modified": "2021-02-03T00:28:46.984Z"
            },
            {
                "id": 8,
                "name": "Swankstah",
                "number": "3700",
                "last_modified": "2021-02-03T01:31:00.634Z"
            },
            {
                "id": 2,
                "name": "Xanman",
                "number": "3400",
                "last_modified": "2021-02-03T01:37:01.667Z"
            },
            {
                "id": 10,
                "name": "Champ",
                "number": "5100",
                "last_modified": "2021-02-11T13:50:52.068Z"
            },
            {
                "id": 11,
                "name": "Diamond",
                "number": "4600",
                "last_modified": "2021-02-11T13:50:58.989Z"
            },
            {
                "id": 12,
                "name": "Gold",
                "number": "2650",
                "last_modified": "2021-02-11T13:51:10.162Z"
            },
            {
                "id": 13,
                "name": "Copper",
                "number": "1300",
                "last_modified": "2021-02-11T13:51:18.023Z"
            }
        ]
    }
  const div = document.createElement('div')
  ReactDOM.render(<Home {...props}/>, div)
  ReactDOM.unmountComponentAtNode(div)
})