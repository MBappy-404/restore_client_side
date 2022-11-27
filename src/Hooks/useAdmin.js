import { useEffect, useState } from "react"

const useAdmin = email => {
    const [type, setType] = useState(false);
    const [typeLoading, setTypeLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/verify?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setType(data.type);
                    setTypeLoading(false);
                })
        }
    }, [email])
    return [type, typeLoading]
}

export default useAdmin;