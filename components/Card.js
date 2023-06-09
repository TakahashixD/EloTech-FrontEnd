import React from 'react'
import * as S from '../styles/card'
import axios from 'axios'
import {useEffect, useState, useRef} from 'react'
import { CreateContatoModal } from './CreateContato-Modal'
import { CreateAtualizarModal } from './CreateAtualizar-Modal'

export function Card(props){
    
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleOpenModal = () => {
        setIsModalOpen(prev => !prev)
      }
      const [isModalOpenA, setIsModalOpenA] = useState(false)

      const handleOpenModalA = () => {
          setIsModalOpenA(prev => !prev)
        }
  
    const url = 'https://elotech-desafio-production.up.railway.app/'
    
    const deletePessoa = async (props) => {
        try{
            const response = await axios.delete(`${url}/pessoas/${props}`)
            return alert("Deletado com sucesso!")
        }
        catch(e){
            return alert("Erro ao deletar!")
        } 
      }

  return(
    
      <S.Card>
          <h2>ID: {props.id}</h2>
          <p><b>Nome: </b>{props.nome}</p>
          <p><b>CPF: </b>{props.cpf}</p>
          <p><b>Data de nascimento: </b>{props.dataNascimento}</p>
          <div><b>Contatos: </b>
          <S.Table>
              <thead>
                  <tr>
                      <th>NOME</th>
                      <th>TELEFONE</th>
                      <th>EMAIL</th>
                  </tr>
              </thead>
              <tbody>
              {props.contatos.map((contato) => {
                  return (
                  <tr key={contato.id}>
                   <td>{contato.nome}</td>
                   <td>{contato.telefone}</td>
                   <td>{contato.email}</td>
                  </tr>
              );
           })}
              </tbody>
          </S.Table>
          <div>
          {isModalOpenA && <CreateAtualizarModal closeModal={handleOpenModalA} id={props.id} 
            close={() => {
                handleOpenModalA(false);
              }}/>}
          <button onClick={handleOpenModalA}>Atualizar dados pessoa</button>
            {isModalOpen && <CreateContatoModal closeModal={handleOpenModal} id={props.id} 
            close={() => {
                handleOpenModal(false);
              }}/>}
            <button onClick={handleOpenModal}>Adicionar Contato</button>
          <button className="a" onClick={() => {if(window.confirm('Tem certeza que deseja deletar essa pessoa?'))deletePessoa(props.id)}}>Deletar Pessoa</button>
          </div>
          </div>
      </S.Card>
  )
}