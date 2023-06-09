
import axios from 'axios'
import {useEffect, useState, useRef} from 'react'
import * as S from '../styles/home'
import { Card } from '../components/Card'
import { CreateModal } from '../components/Create-Modal'
export default function Home() {

    const url = 'https://elotech-desafio-production.up.railway.app/'
    const [pessoas, setPessoas] = useState()
    const [isModalOpen, setIsModalOpen] = useState(false)
  
    const handleOpenModal = () => {
      setIsModalOpen(prev => !prev)
    }
  
    useEffect(() => {
      getPessoas()
    },[pessoas])
    
    const getPessoas = async () => {
        const response = await axios.get(`${url}/pessoas`)
        setPessoas(response.data)
    }
    
    return (
      <S.Container>
        <h1>Pessoas</h1>
        <S.CardGrid>
        {pessoas?.map(pessoasData =><Card
        key={pessoasData.id} 
        id={pessoasData.id} 
        nome = {pessoasData.nome} 
        cpf = {pessoasData.cpf} 
        dataNascimento = {pessoasData.dataNascimento} 
        contatos = {pessoasData.contatos}/>)}
        </S.CardGrid>
        {isModalOpen && <CreateModal closeModal={handleOpenModal} 
        close={() => {
          handleOpenModal(false);
        }}/>}
        <button onClick={handleOpenModal}>Cadastrar Pessoa</button>

      </S.Container>
    )
  }
  