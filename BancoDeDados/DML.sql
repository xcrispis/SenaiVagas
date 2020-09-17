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

	