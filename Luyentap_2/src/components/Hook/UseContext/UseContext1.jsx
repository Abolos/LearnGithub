import { useState } from "react";

function Component1() {
    const [user, setUser] = useState("Nguyễn Văn A");
    return (
        <div>
            <h1>Hello {user}</h1>
            <Component2 user={user} />
        </div>
    )
}

function Component2({user}) {
    return (
        <div>
            <h1>Component 2</h1>
            <Component3 user={user} />
        </div>
    )
}

function Component3({user}) {
    return (
        <div>
            <h1>Component 3</h1>
            <h1>Hello {user} again</h1>
        </div>
    )
}

export default Component1;