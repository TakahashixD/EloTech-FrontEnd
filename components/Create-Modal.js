import * as S from '../styles/modal'
import { Form } from '@unform/web'
import Input from '../components/input'
import {useState, useRef} from 'react'
import axios from 'axios'

export function CreateModal(props){
    const formRef = useRef()
    const url = 'https://elotech-desafio-production.up.railway.app'
    
    const savePessoas = async (pessoa) => {
        const response = await axios.post(`${url}/pessoas`, pessoa)
        return response 
        
      }
    
      const saveContato = async (contato) => {
        const response = await axios.post(`${url}/contatos`, contato)
        
      }
    
      const handleSubmit = async (data) => {
        try{
          const bodyPessoa = {
              nome: data.nome,
              cpf: data.cpf,
              dataNascimento: data.dataNascimento,
            }

            const pessoa = await savePessoas(bodyPessoa)
            
            const bodyContato = {
                nome: data.nomeContato,
                telefone: data.telefone,
                email: data.email,
                pessoa: pessoa.data
            }
            await saveContato(bodyContato)
            props.closeModal()
            return alert("Pessoa cadastrada")
        }
        catch(e){
            props.closeModal()
            return alert("Erro ao efetuar o cadastro")
        } 
    }

    return(
        <S.Overlay onClick={() => {
            props.close();
          }}>
            <S.Body onClick={e => {
          e.stopPropagation();
        }}>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <h2>Registre a pessoa</h2>
                <Input name='nome' placeholder='nome'/>
                <Input name='cpf' placeholder='cpf válido'/>
                <Input name='dataNascimento"' placeholder='data de Nascimento (ano-mês-dia) "exemplo: 1999-02-20"'/>
                <h2>Registre o primeiro contato</h2>
                <Input name='nomeContato' placeholder='nome do contato'/>
                <Input name='telefone' placeholder='telefone'/>
                <Input name='email' placeholder='email obrigatorio o uso de "@"'/>
                <button type='submit'
                >Salvar</button>
            </Form>
            </S.Body>
        </S.Overlay>
    )
    }