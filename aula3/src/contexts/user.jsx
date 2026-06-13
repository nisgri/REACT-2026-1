import { createContext, useState } from "react";

export const UserContext = createContext({})

export default function userProvider({ children }) {
    const [nomeAluno, setNomeAluno] = useState("Maria")
    const [totalAlunos, setTotalAlunos] = useState(1)

    return (
        <UserContext.Provider value={{ nomeAluno, setNomeAluno, totalAlunos }}>
            {children}
        </UserContext.Provider>
    )
}