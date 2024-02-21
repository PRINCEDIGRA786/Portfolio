import React, { useState } from 'react'
import Portcon from './Portfoliocontext'

export default function PortState(props) {
    const [user, setuser] = useState({})
    const [name, setname] = useState("")
    const host = "https://portfolio-princedigra786.vercel.app"
    const createPortfolio = async (name, email, image, about, profession, hobbies, education, experience
    ) => {
        const pic = await image;
        // await console.log(pic)
        await experience.pop();
        await education.pop();

        const response = await fetch(`${host}/api/folio/createportfolio`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ name, email, pic, about, profession, hobbies, education, experience })
        });

        const json = response.json();
        // console.log(json)
        // // setuser(user.pop())
        // // setuser(user.push(json))
        json
            .then((result) => {
                // console.log(result);
                alert("Portfolio Created.....")
            })
            .catch((error) => {
                // console.log(error)
                alert("Some Error occurred....Try Later!!")
            })
    }

    const dashboard = async () => {
        const response = await fetch(`${host}/api/folio/dashboard`, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
        });

        var json = await response.json();
        setuser(json)

    }
    const getuser = async () => {
        const response = await fetch(`${host}/api/auth/getuser`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
        });
        const json = await response.json();

        setname(json.name);


    }

    const [allusers, setallusers] = useState([])
    const fetchUsers = async () => {
        const response = await fetch(`${host}/api/folio/fetchall`, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
        });
        const json = await response.json();
        setallusers(json)


    }
    const documentAdd = async (documents) => {
        const response = await fetch(`${host}/api/folio/adddocuments`, {
            method: "PUT", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ documents })
        });
        const json = await response.json();
        // setallusers(json)
        if (json.success) {
            alert("Successfully Added")
        }
        else {
            alert("Some error Occurred")
        }


    }


    return (
        <>
            <Portcon.Provider value={{ createPortfolio, documentAdd, getuser, name, fetchUsers, allusers, user, dashboard }}>
                {props.children}
            </Portcon.Provider>
        </>
    )
}

