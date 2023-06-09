import * as S from '../styles/modal'
import { Form } from '@unform/web'
import Input from './input'
import {useState, useRef} from 'react'
import axios from 'axios'

export function CreateContatoModal(props){

    const formRef = useRef()
    const url = 'http://localhost:8080'

    const getPessoa = async (id) => {
        const response = await axios.get(`${url}/pessoas/${id}`)
        return response.data
    }

    const adicionarContato = async (contato) => {
        try{
            const response = await axios.post(`${url}/contatos`, contato)

            return alert("Contato adicionado com sucesso!")
        }
        catch(e){
            return alert("Erro ao adicionar contato!")
        }
    }
      const handleSubmit = async (data) => {
        const pessoa = await getPessoa(props.id)
        console.log(pessoa)
        try{
            const bodyContato = {
                nome: data.nomeContato,
                telefone: data.telefone,
                email: data.email,
                pessoa: pessoa
            }
            await adicionarContato(bodyContato)
            props.closeModal()
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
                <h2>Registre o contato</h2>
                <Input name='nomeContato' placeholder='nomeContato'/>
                <Input name='telefone' placeholder='telefone'/>
                <Input name='email' placeholder='email'/>
                <button type='submit'
                >Salvar</button>
            </Form>
            </S.Body>
        </S.Overlay>
    )
    }