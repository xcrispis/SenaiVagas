import React, { useState} from 'react';
import Header from '../../components/header/index';
import Input from '../../components/input/index';
import Button from '../../components/button/index';
import Footer from '../../components/footer/index';

import './style.css';
import '../../assets/styles/global.css';


const CadastroAluno:React.FC = () => {
    const [nome, setName] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [github, setGithub] = useState('');
    const [apresentacao, setApresentacao] = useState('');
    const [cpf, setCpf] = useState('');
    // const [emailContato, setEmailContato] = useState('');
    const [foto, setFoto] = useState('');
    const [fkCurso,setFkCurso] = useState(0);
    // const [fkSituacao, setFkSituacao] = useState(0);

    
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState('');
    const [bairro, setBairro] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [complemento, setComplemento] = useState('');
    const [numero, setNumero] = useState('');

    const SalvarUsuario = () =>{
        const formUsuario = {
            FkTipoUsuario: 1,
            Email: email,
            Senha: senha,
        }

        fetch('http://localhost:5000/api/Usuario', {
            method: 'POST',
            body: JSON.stringify(formUsuario),
            headers: {
                'content-type': 'application/json',
                // authorization: 'Bearer' + localStorage.getItem('token-SenaiVagas')
            }
        })
            .then(response=>response.json())
            .then(dados => {
                console.log(formUsuario);
                console.log(dados);
                salvarEndereco(dados);
            })
            
    }
    const salvarEndereco = (dados: any) => {
        const formEndereco = {
            Cep: cep,
            Logradouro: endereco,
            Bairro: bairro,
            Uf: estado,
            Cidade: cidade,
            Complemento: complemento,
            Numero: numero
        }

        fetch('http://localhost:5000/api/Endereco', {
            method: 'POST',
            body: JSON.stringify(formEndereco),
            headers: { 
                'content-type': 'application/json',
                // authorization: 'Bearer' + localStorage.getItem('token-SenaiVagas')
            }            
        }) 
            .then(response=>response.json())
            .then(dadosEndereco => {
                console.log(dadosEndereco)
                salvar(dados, dadosEndereco)
            })
            
        }
        const salvar = (idUsuario: any, idEndereco: any) => {        

            alert('Candidato cadastrado');
    
            const form = {
                // tipoUsuario: tipoUsuario,
                Nome: nome,
                Sobrenome: sobrenome,
                Telefone: telefone,
                LinkedIn: linkedin,
                GitHub: github,
                Apresentacao: apresentacao,            
                Cpf: cpf,
                Foto: 0xD31177E05DFB0F7E43043E421850A8, //Alterar para receber uma foto normal
                EmailContato: email, //permitir outros emails futuramente
                IdUsuario: idUsuario,
                FkCurso: 2,
                FkPerfilComportamental: 1, //arrumar
                FkEndereco: idEndereco,
                FkSituacao:1 
            };
            console.log(form);
            fetch('http://localhost:5000/api/Candidato', {
                method: 'POST',
                body: JSON.stringify(form),
                headers: { 
                    'content-type': 'application/json',
                    // authorization: 'Bearer' + localStorage.getItem('token-SenaiVagas')
                }
            })            
                .then( response => response.json())
                .then( dados => {            
                    console.log('Resultado Candidato =' + dados);
                })
                .catch(erro=>console.error(erro));
        }
    return (
        <div className="all">
            <Header/>
            <div className="center">
                <h1>Cadastro do Aluno</h1>
            </div>
            <form onSubmit={event => {
                event.preventDefault();
                SalvarUsuario();
            }}>
                <div className="row">
                    <div className="column">
                        <Input label="Nome" name="nome" type="text" onChange={e => setName(e.target.value)}/>
                        <Input label="Linkedin" name="linkedin" type="text" onChange={e => setLinkedin(e.target.value)}/>
                        <Input label="Apresentacão" name="apresentacao" type="text" onChange={e => setApresentacao(e.target.value)}/>
                        <Input type="text" name="cep" label="Cep" onChange={e => setCep(e.target.value)}/>
                        <Input type="text" name="estado" label="Estado" onChange={e => setEstado(e.target.value)}/> 
                        <Input type="text" name="bairro" label="Bairro" onChange={e => setBairro(e.target.value)}/> 
                        <Input type="text" name="complemento" label="Complemento" onChange={e => setComplemento(e.target.value)}/>   
                        <Input label="E-mail" name="email" type="text" onChange={e => setEmail(e.target.value)} required/>
                        
                    </div>

                    <div className="column">
                    <Input label="Sobrenome" name="sobrenome" type="text" onChange={e => setSobrenome(e.target.value)}/>
                    <Input label="Cpf" name="cpf" type="text" onChange={e => setCpf(e.target.value)}/>
                    <Input label="Celular" name="celular" type="text" onChange={e => setTelefone(e.target.value)}/>
                    <Input label="Github" name="github" type="text" onChange={e => setGithub(e.target.value)}/>
                    
                    <Input type="text" name="endereço" label="Endereço" onChange={e => setEndereco(e.target.value)}/>
                    
                    
                      
                    <Input type="text" name="cidade" label="Cidade" onChange={e => setCidade(e.target.value)}/>
                    
                    <Input type="text" name="numero" label="Numero" onChange={e => setNumero(e.target.value)}/>  
                    
                    <Input label="Senha" name="senha" type="password" onChange={e => setSenha(e.target.value)} required/>
                    </div>
                </div>

                <div className="btn">
                    <Button value="Cadastrar"/>
                </div> 
                </form>

                       

<Footer/>

</div>
);
}

export default CadastroAluno;