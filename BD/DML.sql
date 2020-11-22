USE Senai_Vagas;
GO

INSERT INTO TipoUsuario(Titulo)
VALUES ('Candidato')
	  ,('Empresa')
	  ,('Administrador');
GO

INSERT INTO Curso(Titulo)
VALUES ('Desenvolvimento de Sistemas')
	  ,('Multimidia');
GO
INSERT INTO Situacao(Titulo)
VALUES ('Buscando')
	  ,('Estagio')
	  ,('Efetivo')
	  ,('Em andamento')
	  ,('Concluido')
	  ,('Evadido');
GO
INSERT INTO FormaContratacao(Forma)
VALUES ('Estagio')
	  ,('CLT')
	  ,('PJ')
	  ,('Jovem Aprendiz');
GO
 INSERT INTO Usuario(FK_TipoUsuario, Email, Senha)
 VALUES  (2, 'serv@serv.com', '123123123'), (1, 'cand@cand.com', '123123123');
GO

INSERT INTO Candidato (Nome, Sobrenome, Telefone, LinkedIn, GitHub, Apresentacao, CPF, EmailContato, FK_Usuario, FK_Curso, FK_Situacao)
VALUES ('Marco', 'Basile', 11984641234, 'linkedin/marco', 'github/marco', 'Oi, eu sou o marco', 50012312319, 'marco@marco.com', 4, 1, 1)
GO

INSERT INTO Empresa(StatusEmpresa, 
       RazaoSocial
      ,Cnpj
      ,Telefone
      ,CNAE
	  ,CargoExercido
      ,Apresentacao
      ,NomeResponsavel
      ,EmailContato
      ,FK_Usuario
	  ,Logo)
	  VALUES ('1', 'Bandai Namco', 77637684000161, 1198465757, 4142345, 'Desenvolvedor Front-End', 'Somos uma empresa responsavel, feliz e dedicada.', 'Julio Gomes', 'carlinhos@gmail.com', 4, '1837373')

	  GO
	  INSERT INTO Vaga(FK_Empresa, FK_FormaContratacao, Descricao, Habilidades, PlanoEstagio) VALUES (1, 2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', 'Conhecimentos sólidos em HTML, CSS e Javascript', '1'), (1, 2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', 'Conhecimentos sólidos em HTML, CSS e Javascript', '1') 

	  GO
	  INSERT INTO Inscricao (StatusIncricao, IdVaga, FK_Candidato)
	  VALUES (0, 2, 1), (1, 3, 1)

	