import React, { useState, useEffect, ChangeEvent } from 'react';
import Header from '../../components/header/index';
import Input from '../../components/input/index';
import Button from '../../components/button/index';
import Footer from '../../components/footer/index';

import './style.css';
import '../../assets/style/global.css';

const CadastroEmpresa:React.FC = () => {

    // const [idEmpresa, setEmpresa] = useState<IdadosEmpresa>({
    //     RazaoSocial: '',
    //     Cnpj: '',
    //     Telefone: '',
    //     CNAE: '',
    //     Apresentacao: '',
    //     Logo: '',
    //     EmailContato: '',
    //     NomeFantasia:'',
    // });

    // function salvarEmpresa(e: ChangeEvent<HTMLInputElement>) {
    //     setEmpresa({
    //         ...idEmpresa,
    //         [e.target.name]: e.target.value
    //     })
    // }

    // function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    //     e.preventDefault()

    //     console.log(idEmpresa)
    // }

    const [empresa, setEmpresa] = useState('');
    const [razaoSocial, setRazaoSocial] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cnae, setCnae] = useState('');
    const [apresentacao, setApresentacao] = useState('');
    const [email, setEmail] = useState('');
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [usuario, setIdUsuario] = useState(0);
    const [tipoUsuario, setTipoUsuario] = useState(0);
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState('');
    const [bairro, setBairro] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [complemento, setComplemento] = useState('');

    const salvar = () => {

        // setTipoUsuario(2);

        const form = {
            // tipoUsuario: tipoUsuario,
            razaoSocial: razaoSocial,
            cnpj: cnpj,
            telefone: telefone,
            cnae: cnae,
            apresentacao: apresentacao,
            email: email,
            nomeFantasia: nomeFantasia
        };

        // const formEndereco = {
        //     cep: cep,
        //     endereco: endereco,
        //     bairro: bairro,
        //     estado: estado,
        //     cidade: cidade,
        //     complemento: complemento
        // }

        // fetch('http://localhost:5000/api/Endereco', {
        //     method: 'POST',
        //     body: JSON.stringify(formEndereco),
        //     headers: { 
        //         'content-type': 'application/json',
        //         // authorization: 'Bearer' + localStorage.getItem('token-SenaiVagas')
        //     }            
        // })
        //     .then(() => {
        //         alert('Empresa cadastrada');
        //         console.log(form);
        //     })
        //     .catch(erro=>console.error(erro));


        fetch('http://localhost:5000/api/Empresa', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: { 
                'content-type': 'application/json',
                // authorization: 'Bearer' + localStorage.getItem('token-SenaiVagas')
            }
        })
            .then(() => {
                alert('Empresa cadastrada');
                console.log(form);
            })
            .catch(erro=>console.error(erro));
    }

    return (
        <div>
            <Header/>
            <div className="center">
                <h1>Cadastro da Empresa</h1>
            </div>
            {/* onChange={(e: ChangeEvent<HTMLInputElement>) => salvarEmpresa(e)} */}
            {/* onChange={e => setEmpresa(e.target.value)} */}
            <form onSubmit={event => {
                event.preventDefault();
                salvar();
            }}>
                <div className="row">
                    <div className="column">
                        <Input type="text" name="RazaoSocial" label="Razão Social" onChange={e => setRazaoSocial(e.target.value)}/>
                        <Input type="text" name="Cnpj" label="CNPJ"  onChange={e => setCnpj(e.target.value)}/>
                        <Input type="text" name="cep" label="Cep" />
                        <Input type="text" name="estado" label="Estado"/>
                        <Input type="email" name="EmailContato" label="Email" onChange={e => setEmail(e.target.value)}/>
                        <Input type="text" name="NomeFantasia" label="Nome Fantasia" onChange={e => setNomeFantasia(e.target.value)}/>
                        <Input type="textarea" name="Apresentacao" label="Sobre a empresa" onChange={e => setApresentacao(e.target.value)}/>
                    </div>

                    <div className="column">
                        <Input type="text" name="Telefone" label="Telefone para contato" onChange={e => setTelefone(e.target.value)}/>
                        <Input type="text" name="endereço" label="Endereço"/>
                        <Input type="text" name="bairro" label="Bairro"/>
                        <Input type="text" name="cidade" label="Cidade"/>
                        <Input type="text" name="CNAE" label="CNAE" onChange={e => setCnae(e.target.value)}/>
                        <Input type="file" name="Logo" label="Logo da empresa"/>
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

export default CadastroEmpresa;