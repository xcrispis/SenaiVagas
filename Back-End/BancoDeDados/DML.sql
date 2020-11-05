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
 VALUES (2, 'emp@emp.com', '123123123');
GO
INSERT INTO Empresa(StatusEmpresa, 
        RazaoSocial,
  
      
      Cnpj
      ,Telefone
      ,CNAE
      ,Apresentacao
      ,NomeResponsavel
      ,CargoExercido
      ,EmailContato
      ,FK_Usuario
	  ,Logo)
	  VALUES ('1', 'Bandai Namco', 77637684000161, 1198465757, 4142345, 'Somos uma empresa responsavel, feliz e dedicada.', 'Julio Gomes', 'Especialista', 'carlinhos@gmail.com', 1, (SELECT * FROM OPENROWSET(BULK N'C:\Users\uyguy\OneDrive\Área de Trabalho\SenaiVagas\Front-End\senaivagas\src\assets\images\ibmlogo.png', SINGLE_BLOB) as T1 ))

	  GO
	  INSERT INTO Vaga(FK_Empresa, FK_FormaContratacao, Descricao, Habilidades, PlanoEstagio) VALUES (4, 2, 'tEM QUE SER BOM, SE NÃO RODA', 'CODAR IGUAL UM HACKER EM FILME', '1')

	