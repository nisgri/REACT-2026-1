import { useEffect, useState } from "react";

export default function ExemploGet() {
    const [user, setUser] = useState({});
    const [empresa, setEmpresa] = useState({});
    const cnpj = 67046386000143;

    useEffect(() => {
        fetch("https://api.github.com/users/nisgri")
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setUser(json);
            })
            .catch(() => console.log("Erro na requisição!"));
    }, []);

    useEffect(() => {
        fetch(`https://receitaws.com.br/v1/cnpj/${cnpj}`)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setEmpresa(json);
            });
    }, []);

    return (
        <div>
            <h2>Dados de um usuário da API GitHub </h2>
            <h2>Login: {user.login}</h2>
            <img src={user.avatar_url} alt="foto" />
            <h2>Dados de uma empresa da API Receita WS </h2>
            <h3>Fantasia: {empresa.fantasia}</h3>
        </div>
    );
}