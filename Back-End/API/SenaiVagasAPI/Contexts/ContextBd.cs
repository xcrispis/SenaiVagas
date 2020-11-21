using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using SenaiVagasAPI.Domains;

namespace SenaiVagasAPI.Contexts
{
    public partial class ContextBd : DbContext
    {
        public ContextBd()
        {
        }

        public ContextBd(DbContextOptions<ContextBd> options)
            : base(options)
        {
        }

        public virtual DbSet<Administrador> Administrador { get; set; }
        public virtual DbSet<Candidato> Candidato { get; set; }
        public virtual DbSet<ContratoEstagio> ContratoEstagio { get; set; }
        public virtual DbSet<Curso> Curso { get; set; }
        public virtual DbSet<Dicas> Dicas { get; set; }
        public virtual DbSet<Empresa> Empresa { get; set; }
        public virtual DbSet<Endereco> Endereco { get; set; }
        public virtual DbSet<FormaContratacao> FormaContratacao { get; set; }
        public virtual DbSet<Inscricao> Inscricao { get; set; }
        public virtual DbSet<PerfilComportamental> PerfilComportamental { get; set; }
        public virtual DbSet<Situacao> Situacao { get; set; }
        public virtual DbSet<TipoUsuario> TipoUsuario { get; set; }
        public virtual DbSet<Usuario> Usuario { get; set; }
        public virtual DbSet<Vaga> Vaga { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-EUCOQ5H\\SQLEXPRESS; Initial Catalog=Senai_Vagas; Integrated Security=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Administrador>(entity =>
            {
                entity.HasKey(e => e.IdAdministrador)
                    .HasName("PK__Administ__2B3E34A8E4AFCB8B");

                entity.HasIndex(e => e.Cpf)
                    .HasName("UQ__Administ__C1FF930915A2F0AD")
                    .IsUnique();

                entity.Property(e => e.Cpf)
                    .IsRequired()
                    .HasMaxLength(11)
                    .IsUnicode(false)
                    .IsFixedLength();

                entity.Property(e => e.FkUsuario).HasColumnName("FK_Usuario");

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.HasOne(d => d.FkUsuarioNavigation)
                    .WithMany(p => p.Administrador)
                    .HasForeignKey(d => d.FkUsuario)
                    .HasConstraintName("FK__Administr__FK_Us__4D94879B");
            });

            modelBuilder.Entity<Candidato>(entity =>
            {
                entity.HasKey(e => e.IdCandidato)
                    .HasName("PK__Candidat__D5598905D502B1C6");

                entity.HasIndex(e => e.Cpf)
                    .HasName("UQ__Candidat__C1F89731A529FF94")
                    .IsUnique();

                entity.HasIndex(e => e.GitHub)
                    .HasName("UQ__Candidat__A768AB906D93574D")
                    .IsUnique();

                entity.HasIndex(e => e.LinkedIn)
                    .HasName("UQ__Candidat__A6ACC0ED22658F22")
                    .IsUnique();

                entity.Property(e => e.Apresentacao)
                    .IsRequired()
                    .HasColumnType("text");

                entity.Property(e => e.Cpf)
                    .IsRequired()
                    .HasColumnName("CPF")
                    .HasMaxLength(11)
                    .IsUnicode(false)
                    .IsFixedLength();

                entity.Property(e => e.EmailContato)
                    .IsRequired()
                    .HasMaxLength(255);

                entity.Property(e => e.FkCurso).HasColumnName("FK_Curso");

                entity.Property(e => e.FkEndereco).HasColumnName("FK_Endereco");

                entity.Property(e => e.FkPerfilComportamental).HasColumnName("FK_PerfilComportamental");

                entity.Property(e => e.FkSituacao).HasColumnName("FK_Situacao");

                entity.Property(e => e.FkUsuario).HasColumnName("FK_Usuario");

                entity.Property(e => e.Foto).HasMaxLength(255);

                entity.Property(e => e.GitHub)
                    .IsRequired()
                    .HasMaxLength(255);

                entity.Property(e => e.LinkedIn)
                    .IsRequired()
                    .HasMaxLength(255);

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Sobrenome)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Telefone)
                    .IsRequired()
                    .HasMaxLength(11)
                    .IsUnicode(false)
                    .IsFixedLength();

                entity.HasOne(d => d.FkCursoNavigation)
                    .WithMany(p => p.Candidato)
                    .HasForeignKey(d => d.FkCurso)
                    .HasConstraintName("FK__Candidato__FK_Cu__5441852A");

                entity.HasOne(d => d.FkEnderecoNavigation)
                    .WithMany(p => p.Candidato)
                    .HasForeignKey(d => d.FkEndereco)
                    .HasConstraintName("FK__Candidato__FK_En__5629CD9C");

                entity.HasOne(d => d.FkPerfilComportamentalNavigation)
                    .WithMany(p => p.Candidato)
                    .HasForeignKey(d => d.FkPerfilComportamental)
                    .HasConstraintName("FK__Candidato__FK_Pe__5535A963");

                entity.HasOne(d => d.FkSituacaoNavigation)
                    .WithMany(p => p.Candidato)
                    .HasForeignKey(d => d.FkSituacao)
                    .HasConstraintName("FK__Candidato__FK_Si__571DF1D5");

                entity.HasOne(d => d.FkUsuarioNavigation)
                    .WithMany(p => p.Candidato)
                    .HasForeignKey(d => d.FkUsuario)
                    .HasConstraintName("FK__Candidato__FK_Us__534D60F1");
            });

            modelBuilder.Entity<ContratoEstagio>(entity =>
            {
                entity.HasKey(e => e.IdContratoEstagio)
                    .HasName("PK__Contrato__FAF7DDBA2CAEA678");

                entity.Property(e => e.Avaliacao1).IsRequired();

                entity.Property(e => e.Avaliacao2).IsRequired();

                entity.Property(e => e.Avaliacao3).IsRequired();

                entity.Property(e => e.Avaliacao4).IsRequired();

                entity.Property(e => e.FkCandidato).HasColumnName("FK_Candidato");

                entity.Property(e => e.FkStatusEstagio).HasColumnName("FK_StatusEstagio");

                entity.Property(e => e.FkVaga).HasColumnName("FK_Vaga");

                entity.Property(e => e.MotivoEvasao)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.HasOne(d => d.FkCandidatoNavigation)
                    .WithMany(p => p.ContratoEstagio)
                    .HasForeignKey(d => d.FkCandidato)
                    .HasConstraintName("FK__ContratoE__FK_Ca__68487DD7");

                entity.HasOne(d => d.FkStatusEstagioNavigation)
                    .WithMany(p => p.ContratoEstagio)
                    .HasForeignKey(d => d.FkStatusEstagio)
                    .HasConstraintName("FK__ContratoE__FK_St__6754599E");

                entity.HasOne(d => d.FkVagaNavigation)
                    .WithMany(p => p.ContratoEstagio)
                    .HasForeignKey(d => d.FkVaga)
                    .HasConstraintName("FK__ContratoE__FK_Va__693CA210");
            });

            modelBuilder.Entity<Curso>(entity =>
            {
                entity.HasKey(e => e.IdCursos)
                    .HasName("PK__Curso__0F645A9ED4347CB8");

                entity.HasIndex(e => e.Titulo)
                    .HasName("UQ__Curso__7B406B56E7B28944")
                    .IsUnique();

                entity.Property(e => e.Titulo)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Dicas>(entity =>
            {
                entity.HasKey(e => e.IdDica)
                    .HasName("PK__Dicas__F1688516B375DC2B");

                entity.Property(e => e.Descricao)
                    .IsRequired()
                    .HasColumnType("text");

                entity.Property(e => e.Link).HasMaxLength(255);

                entity.Property(e => e.Titulo)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Empresa>(entity =>
            {
                entity.HasKey(e => e.IdEmpresa)
                    .HasName("PK__Empresa__5EF4033EB5F2BC37");

                entity.HasIndex(e => e.Cnpj)
                    .HasName("UQ__Empresa__A299CC923648943A")
                    .IsUnique();

                entity.Property(e => e.Apresentacao)
                    .IsRequired()
                    .HasColumnType("text");

                entity.Property(e => e.CargoExercido)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Cnae)
                    .IsRequired()
                    .HasColumnName("CNAE")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Cnpj)
                    .IsRequired()
                    .HasMaxLength(14)
                    .IsUnicode(false)
                    .IsFixedLength();

                entity.Property(e => e.EmailContato)
                    .IsRequired()
                    .HasMaxLength(255);

                entity.Property(e => e.FkEndereco).HasColumnName("FK_Endereco");

                entity.Property(e => e.FkUsuario).HasColumnName("FK_Usuario");

                entity.Property(e => e.Logo)
                    .IsRequired()
                    .HasMaxLength(255);

                entity.Property(e => e.NomeResponsavel)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.RazaoSocial)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Telefone)
                    .IsRequired()
                    .HasMaxLength(11)
                    .IsUnicode(false)
                    .IsFixedLength();

                entity.HasOne(d => d.FkEnderecoNavigation)
                    .WithMany(p => p.Empresa)
                    .HasForeignKey(d => d.FkEndereco)
                    .HasConstraintName("FK__Empresa__FK_Ende__5BE2A6F2");

                entity.HasOne(d => d.FkUsuarioNavigation)
                    .WithMany(p => p.Empresa)
                    .HasForeignKey(d => d.FkUsuario)
                    .HasConstraintName("FK__Empresa__FK_Usua__5AEE82B9");
            });

            modelBuilder.Entity<Endereco>(entity =>
            {
                entity.HasKey(e => e.IdEndereco)
                    .HasName("PK__Endereco__0B7C7F17AAF90D60");

                entity.Property(e => e.Bairro)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Cep)
                    .IsRequired()
                    .HasMaxLength(8)
                    .IsUnicode(false)
                    .IsFixedLength();

                entity.Property(e => e.Cidade)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Complemento)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Logradouro)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Uf)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<FormaContratacao>(entity =>
            {
                entity.HasKey(e => e.IdFormaContratacao)
                    .HasName("PK__FormaCon__1C9FE6D01483F8FC");

                entity.HasIndex(e => e.Forma)
                    .HasName("UQ__FormaCon__BB3556FD5C53AA31")
                    .IsUnique();

                entity.Property(e => e.Forma)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Inscricao>(entity =>
            {
                entity.HasKey(e => e.IdInscricao)
                    .HasName("PK__Inscrica__6209444B25D4F10D");

                entity.Property(e => e.FkCandidato).HasColumnName("FK_Candidato");

                entity.HasOne(d => d.FkCandidatoNavigation)
                    .WithMany(p => p.Inscricao)
                    .HasForeignKey(d => d.FkCandidato)
                    .HasConstraintName("FK__Inscricao__FK_Ca__6477ECF3");

                entity.HasOne(d => d.IdVagaNavigation)
                    .WithMany(p => p.Inscricao)
                    .HasForeignKey(d => d.IdVaga)
                    .HasConstraintName("FK__Inscricao__IdVag__6383C8BA");
            });

            modelBuilder.Entity<PerfilComportamental>(entity =>
            {
                entity.HasKey(e => e.IdPerfilComportamental)
                    .HasName("PK__PerfilCo__D0C42D03D3009BED");

                entity.Property(e => e.Aguia).HasColumnType("decimal(18, 0)");

                entity.Property(e => e.Gato).HasColumnType("decimal(18, 0)");

                entity.Property(e => e.Lobo).HasColumnType("decimal(18, 0)");

                entity.Property(e => e.Tubarao).HasColumnType("decimal(18, 0)");
            });

            modelBuilder.Entity<Situacao>(entity =>
            {
                entity.HasKey(e => e.IdSituacao)
                    .HasName("PK__Situacao__810BCE3A6CACBEB1");

                entity.HasIndex(e => e.Titulo)
                    .HasName("UQ__Situacao__7B406B5605313860")
                    .IsUnique();

                entity.Property(e => e.Titulo)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TipoUsuario>(entity =>
            {
                entity.HasKey(e => e.IdTipoUsuario)
                    .HasName("PK__TipoUsua__CA04062BFB746088");

                entity.HasIndex(e => e.Titulo)
                    .HasName("UQ__TipoUsua__7B406B566C268EB0")
                    .IsUnique();

                entity.Property(e => e.Titulo)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.IdUsuario)
                    .HasName("PK__Usuario__5B65BF97918CFD0A");

                entity.HasIndex(e => e.Email)
                    .HasName("UQ__Usuario__A9D10534ECFEB3B5")
                    .IsUnique();

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.FkTipoUsuario).HasColumnName("FK_TipoUsuario");

                entity.Property(e => e.Senha)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.HasOne(d => d.FkTipoUsuarioNavigation)
                    .WithMany(p => p.Usuario)
                    .HasForeignKey(d => d.FkTipoUsuario)
                    .HasConstraintName("FK__Usuario__FK_Tipo__49C3F6B7");
            });

            modelBuilder.Entity<Vaga>(entity =>
            {
                entity.HasKey(e => e.IdVaga)
                    .HasName("PK__Vaga__A848DC3E58F3DA39");

                entity.Property(e => e.AreaVaga)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Cargo)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Descricao)
                    .IsRequired()
                    .HasColumnType("text");

                entity.Property(e => e.FkEmpresa).HasColumnName("FK_Empresa");

                entity.Property(e => e.FkEndereco).HasColumnName("FK_Endereco");

                entity.Property(e => e.FkFormaContratacao).HasColumnName("FK_FormaContratacao");

                entity.Property(e => e.Habilidades)
                    .IsRequired()
                    .HasColumnType("text");

                entity.HasOne(d => d.FkEmpresaNavigation)
                    .WithMany(p => p.Vaga)
                    .HasForeignKey(d => d.FkEmpresa)
                    .HasConstraintName("FK__Vaga__FK_Empresa__5EBF139D");

                entity.HasOne(d => d.FkEnderecoNavigation)
                    .WithMany(p => p.Vaga)
                    .HasForeignKey(d => d.FkEndereco)
                    .HasConstraintName("FK__Vaga__FK_Enderec__60A75C0F");

                entity.HasOne(d => d.FkFormaContratacaoNavigation)
                    .WithMany(p => p.Vaga)
                    .HasForeignKey(d => d.FkFormaContratacao)
                    .HasConstraintName("FK__Vaga__FK_FormaCo__5FB337D6");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
