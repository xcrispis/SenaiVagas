CREATE DATABASE Senai_Vagas;
GO

USE Senai_Vagas;
GO

CREATE TABLE TipoUsuario (
	IdTipoUsuario	INT PRIMARY KEY IDENTITY
	,Titulo	VARCHAR(255) NOT NULL UNIQUE 
);
GO

CREATE TABLE Curso (
	IdCursos	INT PRIMARY KEY IDENTITY 
	,Titulo	VARCHAR(255) NOT NULL UNIQUE
);
GO

CREATE TABLE Endereco (
	IdEndereco	INT PRIMARY KEY IDENTITY 
	,Cep		CHAR(8) NOT NULL
	,Logradouro	VARCHAR(255) NOT NULL
	,Complemento	VARCHAR(255)
	,Bairro		VARCHAR(255) NOT NULL
	,Uf			VARCHAR(255) NOT NULL
	,Cidade		VARCHAR(255) NOT NULL
	,Numero		INT NOT NULL
);
GO 

CREATE TABLE PerfilComportamental (
	IdPerfilComportamental	INT PRIMARY KEY IDENTITY
	,Gato		DECIMAL NOT NULL
	,Aguia		DECIMAL NOT NULL
	,Tubarao	DECIMAL NOT NULL
	,Lobo		DECIMAL NOT NULL
);
GO 

CREATE TABLE Situacao (
	IdSituacao	INT PRIMARY KEY IDENTITY
	,Titulo	VARCHAR(255) NOT NULL UNIQUE
);
GO

CREATE TABLE Dicas (
	IdDica	INT PRIMARY KEY IDENTITY 
	,Titulo	VARCHAR(255) NOT NULL
	,Descricao	TEXT NOT NULL
	,Link	NVARCHAR(255)
);
GO

CREATE TABLE FormaContratacao (
	IdFormaContratacao	INT PRIMARY KEY IDENTITY
	,Forma	VARCHAR(255) NOT NULL UNIQUE
);
GO

CREATE TABLE Usuario (
	IdUsuario	INT PRIMARY KEY IDENTITY
	,Email		VARCHAR(255) NOT NULL UNIQUE
	,Senha		VARCHAR(255) NOT NULL
	,FK_TipoUsuario	INT FOREIGN KEY REFERENCES TipoUsuario (IdTipoUsuario)
);
GO

CREATE TABLE Administrador (
	IdAdministrador	INT PRIMARY KEY IDENTITY
	,Nome			VARCHAR(255) NOT NULL
	,Cpf			CHAR(11) NOT NULL UNIQUE
	,FK_Usuario		INT FOREIGN KEY REFERENCES Usuario (IdUsuario)
);
GO

CREATE TABLE Candidato (
	IdCandidato	INT PRIMARY KEY IDENTITY 
	,Nome		VARCHAR(255) NOT NULL
	,Sobrenome	VARCHAR(255) NOT NULL
	,Telefone	CHAR(11) NOT NULL 
	,LinkedIn	NVARCHAR(255) NOT NULL UNIQUE
	,GitHub		NVARCHAR(255) NOT NULL UNIQUE 
	,Apresentacao	TEXT NOT NULL 
	,CPF		CHAR(11) NOT NULL UNIQUE
	,Foto		VARBINARY(MAX) 
	,EmailContato	NVARCHAR(255) NOT NULL 
	,IdUsuario	INT FOREIGN KEY REFERENCES Usuario (IdUsuario)
	,FK_Curso	INT FOREIGN KEY REFERENCES Curso (IdCursos)
	,FK_PerfilComportamental	INT FOREIGN KEY REFERENCES PerfilComportamental (IdPerfilComportamental)
	,FK_Endereco	INT FOREIGN KEY REFERENCES Endereco (IdEndereco)
	,FK_Situacao INT FOREIGN KEY REFERENCES Situacao (IdSituacao) 
);
GO 

CREATE TABLE Empresa (
	IdEmpresa	INT PRIMARY KEY IDENTITY
	,StatusEmpresa	BIT NOT NULL
	,RazaoSocial	VARCHAR(255) NOT NULL 
	,Cnpj			CHAR(14) NOT NULL UNIQUE 
	,Telefone		CHAR(11) NOT NULL 
	,CNAE		VARCHAR(255) NOT NULL
	,Apresentacao	TEXT NOT NULL
	,NomeResponsavel	VARCHAR(255) NOT NULL
	,CargoExercido	VARCHAR(255) NOT NULL
	/*NumeroFuncionarios	INT NOT NULL*/
	,Logo		VARBINARY(MAX) NOT NULL
	,EmailContato	NVARCHAR(255) NOT NULL 
	,FK_Usuario	INT FOREIGN KEY REFERENCES Usuario (IdUsuario)
	,FK_Endereco	INT FOREIGN KEY REFERENCES Endereco (IdEndereco)
);
GO

CREATE TABLE Vaga (
	IdVaga	INT PRIMARY KEY IDENTITY
	,Descricao	TEXT NOT NULL 
	,Habilidades	TEXT NOT NULL
	,PlanoEstagio BIT NOT NULL
	,FK_Empresa	INT FOREIGN KEY REFERENCES Empresa (IdEmpresa) 
	,FK_FormaContratacao	INT FOREIGN KEY REFERENCES FormaContratacao (IdFormaContratacao) 
	,FK_Endereco	INT FOREIGN KEY REFERENCES Endereco (IdEndereco)
);
GO

CREATE TABLE Inscricao (
	IdInscricao	INT PRIMARY KEY IDENTITY 
	,StatusIncricao	BIT NOT NULL
	,IdVaga	INT FOREIGN KEY REFERENCES Vaga (IdVaga)
	,FK_Candidato	INT FOREIGN KEY REFERENCES Candidato (IdCandidato)
);
GO

CREATE TABLE ContratoEstagio (
	IdContratoEstagio	INT PRIMARY KEY IDENTITY
	,DataInicio	DATETIME2 NOT NULL
	,DataTermino	DATETIME2 NOT NULL
	,MotivoEvasao	VARCHAR(255) 
	,Avaliacao1	VARBINARY(MAX) NOT NULL
	,Avaliacao2	VARBINARY(MAX) NOT NULL
	,Avaliacao3	VARBINARY(MAX) NOT NULL
	,Avaliacao4	VARBINARY(MAX) NOT NULL
	,FK_StatusEstagio INT FOREIGN KEY REFERENCES Situacao(IdSituacao)
	,FK_Candidato	INT FOREIGN KEY REFERENCES Candidato (IdCandidato)
	,FK_Vaga		INT FOREIGN KEY REFERENCES Vaga (IdVaga)
);
GO