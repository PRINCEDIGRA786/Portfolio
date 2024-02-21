import React, { useState } from 'react'
import Portcon from './Portfoliocontext'

export default function PortState(props) {
    const [user, setuser] = useState({})
    const [name, setname] = useState("")
    const host = "http://localhost:5000/api/folio"
    const createPortfolio = async (name, email, image, about, profession, hobbies, education, experience
    ) => {
        const pic = await image;
        // await console.log(pic)
        await experience.pop();
        await education.pop();

        const response = await fetch(`${host}/createportfolio`, {
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
        const response = await fetch(`${host}/dashboard`, {
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
        const response = await fetch("http://localhost:5000/api/auth/getuser", {
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
        const response = await fetch("http://localhost:5000/api/folio/fetchall", {
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
        const response = await fetch("http://localhost:5000/api/folio/adddocuments", {
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

    // This is for creating the user to the dummy.io for the post and comments secitons:
    const dumcreateuser = async () => {

        const response = await fetch("https://dummyapi.io/data/v1/user/create", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "app-id": "65d4d43d786900618066e176"
            },
            // mode: "navigate",
            body: { firstName: "prince", lastName: "digra", email: "digrapirnce9@gmail.com" }
        });
        console.log("The response is:", response)
        // const json = await response.json();
        console.log("The json response is:", response.lastName)
    }



    return (
        <>
            <Portcon.Provider value={{ createPortfolio, dumcreateuser, documentAdd, getuser, name, fetchUsers, allusers, user, dashboard }}>
                {props.children}
            </Portcon.Provider>
        </>
    )
}
