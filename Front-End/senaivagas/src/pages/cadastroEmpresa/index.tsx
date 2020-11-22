import React, { useState } from 'react';
import Header from '../../components/header/index';
import Input from '../../components/input/index';
import Button from '../../components/button/index';
import Footer from '../../components/footer/index';

import './style.css';
import '../../assets/styles/global.css';

const CadastroEmpresa: React.FC = () => {

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

    const [idEmpresa, setIdEmpresa] = useState(0);
    // let idUsuario = 0;
    // const [idEndereco, setIdEndereco] = useState(0);
    const [img, setImg] = useState('');

    const [razaoSocial, setRazaoSocial] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cnae, setCnae] = useState('');
    const [apresentacao, setApresentacao] = useState('');
    const [email, setEmail] = useState('');
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [tipoUsuario, setTipoUsuario] = useState(2);
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState('');
    const [bairro, setBairro] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [complemento, setComplemento] = useState('');
    const [senha, setSenha] = useState('');
    const [numero, setNumero] = useState('');
    const [cargoExercido, setCargoExercido] = useState('');
    const [emailContato, setEmailContato] = useState('');

    const salvarUsuario = () => {

        alert('roi');
        const formUsuario = {
            FkTipoUsuario: tipoUsuario,
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
            .then(response => response.json())
            .then(dados => {
                // idUsuario = dados;
                // setIdUsuario(dados);
                setTipoUsuario(2);
                console.log(formUsuario);
                // console.log(idUsuario);
                salvarEndereco(dados);
            })
    }

    const salvarEndereco = (idUsuario: any) => {
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
            .then(response => response.json())
            .then(dados => {
                salvar(idUsuario, dados);
                console.log(formEndereco);
            })
            .catch(erro => console.error(erro));


        // do{
        //     if(idUsuario != null && idUsuario != undefined)
        //     {
        //         console.log(idUsuario);
        //         salvar();
        //     }
        // }
        // while(idUsuario != null && idUsuario != undefined)
    }

    const salvar = (idUsuario: any, idEndereco: any) => {

        alert('Empresa cadastrada');

        const form = {
            // tipoUsuario: tipoUsuario,
            RazaoSocial: razaoSocial,
            StatusEmpresa: false,
            Cnpj: cnpj,
            Telefone: telefone,
            Cnae: cnae,
            Apresentacao: apresentacao,
            NomeResponsavel: nomeFantasia,
            CargoExercido: cargoExercido,
            Logo: "0xD31177E05DFB0F7E43043E421850F8",
            EmailContato: emailContato,
            FkUsuario: idUsuario,
            FkEndereco: idEndereco
        };

        const methodEmpresa = (idEmpresa === 0 ? 'POST' : 'PUT');

        console.log(form);

        fetch('http://localhost:5000/api/Empresa', {
            method: methodEmpresa,
            body: JSON.stringify(form),
            headers: {
                'content-type': 'application/json',
                // authorization: 'Bearer' + localStorage.getItem('token-SenaiVagas')
            }
        })
            .then(() => {
                setIdEmpresa(0);

            })
            .catch(erro => console.error(erro));
    }

    return (
        <div>
            <Header />
            <main> 
                <div className="center-adm">
                    <h1>Cadastro da Empresa</h1>
                </div>
                {/* onChange={(e: ChangeEvent<HTMLInputElement>) => salvarEmpresa(e)} */}
                {/* onChange={e => setEmpresa(e.target.value)} */}
                <form onSubmit={event => {
                    event.preventDefault();
                    salvarUsuario();
                }}>
                    <div className="row-adm">
                        <div className="column-adm">
                            <Input type="text" name="RazaoSocial" label="Razão Social" onChange={e => setRazaoSocial(e.target.value)} />
                            <Input type="text" name="Cnpj" label="CNPJ" onChange={e => setCnpj(e.target.value)} />
                            <Input type="text" name="cep" label="Cep" onChange={e => setCep(e.target.value)} />
                            <Input type="text" name="number" label="Número" onChange={e => setNumero(e.target.value)} />
                            <Input type="text" name="estado" label="Estado" onChange={e => setEstado(e.target.value)} />
                            <Input type="email" name="EmailContato" label="Email" onChange={e => setEmail(e.target.value)} />
                            <Input type="password" name="senha" label="Senha" onChange={e => setSenha(e.target.value)} />
                            <Input type="text" name="NomeFantasia" label="Nome Responsavel" onChange={e => setNomeFantasia(e.target.value)} />
                            <Input type="textarea" name="Apresentacao" label="Sobre a empresa" onChange={e => setApresentacao(e.target.value)} />
                            <Input type="text" name="Apresentacao" label="EmailContato" onChange={e => setEmailContato(e.target.value)} />
                        </div>

                        <div className="column-adm">
                            <Input type="text" name="Telefone" label="Telefone para contato" onChange={e => setTelefone(e.target.value)} />
                            <Input type="text" name="endereço" label="Endereço" onChange={e => setEndereco(e.target.value)} />
                            <Input type="text" name="bairro" label="Bairro" onChange={e => setBairro(e.target.value)} />
                            <Input type="text" name="cidade" label="Cidade" onChange={e => setCidade(e.target.value)} />
                            <Input type="text" name="complemento" label="Complemento" onChange={e => setComplemento(e.target.value)} />
                            <Input type="text" name="CNAE" label="CNAE" onChange={e => setCnae(e.target.value)} />
                            {/* <Input type="file" name="Logo" label="Logo da empresa"  onChange={e => setImg(e.target.value)}/> */}
                            <Input type="text" name="Cargo" label="Cargo Exercido" onChange={e => setCargoExercido(e.target.value)} />

                        </div>
                    </div>

                    <div className="btn">
                        <Button value="Cadastrar" />
                    </div>
                </form>
            </main>




            <Footer />

        </div>
    );
}

export default CadastroEmpresa;