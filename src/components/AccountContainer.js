import React, { useEffect, useState } from "react";

function AccountContainer() {
    const [transaction, setTransaction] = useState([])
    const [query, setQuery] = useState("")
    useEffect(() => {
      fetch(" http://localhost:3000/transactions" + query)
        .then((resp) => resp.json())
        .then(transaction => setTransaction(transaction))
    }, [query])

}

export default AccountContainer;