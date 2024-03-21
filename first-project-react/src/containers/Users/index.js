import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Avatar from "../../assets/avatar.svg";
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/Lixeira.svg";
import H1 from '../../components/title';
import ContainerItens from "../../components/containerItens";
import Button from "../../components/Button"
import {
  Container,
  Image,
  User,
} from "../Users/styles";

//JSX - é misturar htmls com javascript
function Users() {
  //estado
  const [users, setUsers] = useState([]);  
  const navigate = useNavigate()
  

  useEffect(() =>{
    async function fetchUsers() {
      const {data: newUsers} = await axios.get("http://localhost:3001/users");
      setUsers(newUsers);
    }
    fetchUsers()
   
  }, [])  

  async function deleteUser(userId) {
  await axios.delete(`http://localhost:3001/users/${userId}`)  
  const newUsers = users.filter((user) => user.id !== userId);
  setUsers(newUsers);

  }
  function goBackPage(){
    navigate('/');
  }
  
  return (
    <Container>
      <Image alt="logo-imagem" src={Avatar} />
      <ContainerItens isBlur={true}>
        <H1>Usuários</H1>    

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser (user.id)}>
                <img src={Trash} alt="lata de lixo" />
              </button>
            </User>
          ))}
        </ul>
        <Button isBack={true} onClick={goBackPage}>
        <img alt="seta" src={Arrow}/>Voltar
        </Button>
      </ContainerItens>
    </Container>
  );
}
export default Users;
