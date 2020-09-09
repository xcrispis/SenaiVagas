using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using SenaiVagasAPI.Domains;

namespace SenaiVagasAPI.Contexts
{
    public partial class SenaiVagasContext : DbContext
    {
        public SenaiVagasContext()
        {
        }

        public SenaiVagasContext(DbContextOptions<SenaiVagasContext> options)
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
                optionsBuilder.UseSqlServer("Data Source=localhost; Initial Catalog=Senai_Vagas; Integrated Security=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Administrador>(entity =>
            {
                entity.HasKey(e => e.IdAdministrador)
                    .HasName("PK__Administ__2B3E34A8559E88C7");

                entity.HasIndex(e => e.Cpf)
                    .HasName("UQ__Administ__C1FF930993705A5C")
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
                    .HasName("PK__Candidat__D5598905439A0B97");

                entity.HasIndex(e => e.Cpf)
                    .HasName("UQ__Candidat__C1F897315D277EF0")
                    .IsUnique();

                entity.HasIndex(e => e.GitHub)
                    .HasName("UQ__Candidat__A768AB90C70358B2")
                    .IsUnique();

                entity.HasIndex(e => e.LinkedIn)
                    .HasName("UQ__Candidat__A6ACC0EDD5E2AD8E")
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

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Candidato)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK__Candidato__IdUsu__534D60F1");
            });

            modelBuilder.Entity<ContratoEstagio>(entity =>
            {
                entity.HasKey(e => e.IdContratoEstagio)
                    .HasName("PK__Contrato__FAF7DDBA728675D4");

                entity.Property(e => e.Avaliacao1).IsRequired();

                entity.Property(e => e.Avaliacao2).IsRequired();

                entity.Property(e => e.Avaliacao3).IsRequired();

                entity.Property(e => e.Avaliacao4).IsRequired();

                entity.Property(e => e.FkCandidato).HasColumnName("FK_Candidato");

                entity.Property(e => e.FkVaga).HasColumnName("FK_Vaga");

                entity.Property(e => e.MotivoEvasao)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.PlanoEstagio)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.HasOne(d => d.FkCandidatoNavigation)
                    .WithMany(p => p.ContratoEstagio)
                    .HasForeignKey(d => d.FkCandidato)
                    .HasConstraintName("FK__ContratoE__FK_Ca__6754599E");

                entity.HasOne(d => d.FkVagaNavigation)
                    .WithMany(p => p.ContratoEstagio)
                    .HasForeignKey(d => d.FkVaga)
                    .HasConstraintName("FK__ContratoE__FK_Va__68487DD7");
            });

            modelBuilder.Entity<Curso>(entity =>
            {
                entity.HasKey(e => e.IdCursos)
                    .HasName("PK__Curso__0F645A9EAAAA0E14");

                entity.HasIndex(e => e.Titulo)
                    .HasName("UQ__Curso__7B406B56531DBBF3")
                    .IsUnique();

                entity.Property(e => e.Titulo)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Dicas>(entity =>
            {
                entity.HasKey(e => e.IdDica)
                    .HasName("PK__Dicas__F1688516B84777CF");

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
                    .HasName("PK__Empresa__5EF4033E589E7BCA");

                entity.HasIndex(e => e.Cnpj)
                    .HasName("UQ__Empresa__A299CC929988509D")
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

                entity.Property(e => e.Logo).IsRequired();

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
                    .HasName("PK__Endereco__0B7C7F1708234A70");

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
                    .HasName("PK__FormaCon__1C9FE6D094C9AF80");

                entity.HasIndex(e => e.Forma)
                    .HasName("UQ__FormaCon__BB3556FD93805361")
                    .IsUnique();

                entity.Property(e => e.Forma)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Inscricao>(entity =>
            {
                entity.HasKey(e => e.IdInscricao)
                    .HasName("PK__Inscrica__6209444B40DFF17D");

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
                    .HasName("PK__PerfilCo__D0C42D0333DDEB17");

                entity.Property(e => e.Aguia).HasColumnType("decimal(18, 0)");

                entity.Property(e => e.Gato).HasColumnType("decimal(18, 0)");

                entity.Property(e => e.Lobo).HasColumnType("decimal(18, 0)");

                entity.Property(e => e.Tubarao).HasColumnType("decimal(18, 0)");
            });

            modelBuilder.Entity<Situacao>(entity =>
            {
                entity.HasKey(e => e.IdSituacao)
                    .HasName("PK__Situacao__810BCE3A411CA1FC");

                entity.HasIndex(e => e.Titulo)
                    .HasName("UQ__Situacao__7B406B56195F4D4C")
                    .IsUnique();

                entity.Property(e => e.Titulo)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TipoUsuario>(entity =>
            {
                entity.HasKey(e => e.IdTipoUsuario)
                    .HasName("PK__TipoUsua__CA04062B7B7590C7");

                entity.HasIndex(e => e.Titulo)
                    .HasName("UQ__TipoUsua__7B406B56CDBAAC8E")
                    .IsUnique();

                entity.Property(e => e.Titulo)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.IdUsuario)
                    .HasName("PK__Usuario__5B65BF97CD0AF1DF");

                entity.HasIndex(e => e.Email)
                    .HasName("UQ__Usuario__A9D1053403B1F479")
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
                    .HasName("PK__Vaga__A848DC3E675E14C4");

                entity.Property(e => e.Descricao)
                    .IsRequired()
                    .HasColumnType("text");

                entity.Property(e => e.FkEndereco).HasColumnName("FK_Endereco");

                entity.Property(e => e.FkFormaContratacao).HasColumnName("FK_FormaContratacao");

                entity.Property(e => e.Habilidades)
                    .IsRequired()
                    .HasColumnType("text");

                entity.HasOne(d => d.FkEnderecoNavigation)
                    .WithMany(p => p.Vaga)
                    .HasForeignKey(d => d.FkEndereco)
                    .HasConstraintName("FK__Vaga__FK_Enderec__60A75C0F");

                entity.HasOne(d => d.FkFormaContratacaoNavigation)
                    .WithMany(p => p.Vaga)
                    .HasForeignKey(d => d.FkFormaContratacao)
                    .HasConstraintName("FK__Vaga__FK_FormaCo__5FB337D6");

                entity.HasOne(d => d.IdEmpresaNavigation)
                    .WithMany(p => p.Vaga)
                    .HasForeignKey(d => d.IdEmpresa)
                    .HasConstraintName("FK__Vaga__IdEmpresa__5EBF139D");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
