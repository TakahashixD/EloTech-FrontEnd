import * as S from '../styles/modal'
import { Form } from '@unform/web'
import Input from './input'
import {useState, useRef} from 'react'
import axios from 'axios'

export function CreateAtualizarModal(props){

    const formRef = useRef()
    const url = 'https://elotech-desafio-production.up.railway.app'

    useEffect(() => {
        updatePessoa()
      },[])
      
    const getPessoa = async (id) => {
        const response = await axios.get(`${url}/pessoas/${id}`)
        return response.data
    }

    const updatePessoa = async (props, bodyPessoa) => {
        try{
            const response = await axios.put(`${url}/pessoas/${props}`, bodyPessoa)
            return alert("Alterado com sucesso!")
        }
        catch(e){
            return alert("Erro ao atualizar os dados!")
        }
        
      }

      const handleSubmit = async (data) => {
        try{
            const bodyPessoa = {
                nome: data.nome,
                cpf: data.cpf,
                dataNascimento: data.dataNascimento
            }
            await updatePessoa(props.id, bodyPessoa)
            props.closeModal()
        }
        catch(e){
            props.closeModal()
            return alert("Erro ao efetuar a atualização")
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
                <h2>Atualizar dados da pessoa</h2>
                <Input name='nome' placeholder='nome'/>
                <Input name='cpf' placeholder='cpf'/>
                <Input name='dataNascimento' placeholder='data de Nascimento (ano-mês-dia) "exemplo: 1999-02-20"'/>
                <button type='submit'
                >Salvar</button>
            </Form>
            </S.Body>
        </S.Overlay>
    )
    }